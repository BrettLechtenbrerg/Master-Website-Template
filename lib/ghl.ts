/**
 * Go High Level Integration Utilities
 *
 * Direct webhook integration - no Zapier, Make, or n8n required.
 * Forms POST directly to GHL webhook URLs.
 */

import { GHL_CONFIG, GHL_FIELD_MAPPING } from './ghl-config';

// Response type from GHL webhook
export interface GHLResponse {
  success: boolean;
  message?: string;
  contactId?: string;
}

// Generic form data interface
export interface GHLFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  companyName?: string;
  message?: string;
  [key: string]: string | undefined;
}

/**
 * Submit form data to GHL webhook
 *
 * @param webhookType - The type of webhook (contact, membership, ribbonCutting, etc.)
 * @param data - Form data to submit
 * @param tags - Additional tags to add to the contact
 * @returns Promise with success status and optional contact ID
 */
export async function submitToGHL(
  webhookType: keyof typeof GHL_CONFIG.webhooks,
  data: GHLFormData | globalThis.FormData,
  tags?: string[]
): Promise<GHLResponse> {
  const webhookUrl = GHL_CONFIG.webhooks[webhookType];

  if (!webhookUrl || webhookUrl.includes('YOUR_')) {
    console.warn(`GHL webhook not configured for: ${webhookType}`);
    // Return success anyway for development/demo purposes
    return {
      success: true,
      message: 'Form submitted (GHL webhook not configured yet)',
    };
  }

  // Map form fields to GHL field names
  const mappedData: Record<string, string> = {
    location_id: GHL_CONFIG.locationId,
  };

  // Apply field mapping
  if (typeof (data as any).forEach === 'function') {
    // Handle FormData class
    (data as any).forEach((value: any, key: string) => {
      if (value) {
        const ghlField = GHL_FIELD_MAPPING[key as keyof typeof GHL_FIELD_MAPPING] || key;
        mappedData[ghlField] = value.toString();
      }
    });
  } else {
    // Handle plain object
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        const ghlField = GHL_FIELD_MAPPING[key as keyof typeof GHL_FIELD_MAPPING] || key;
        mappedData[ghlField] = value.toString();
      }
    });
  }

  // Add tags
  const allTags = [
    GHL_CONFIG.tags[webhookType as keyof typeof GHL_CONFIG.tags],
    ...(tags || []),
  ].filter(Boolean);

  if (allTags.length > 0) {
    mappedData.tags = allTags.join(',');
  }

  // Add source tracking
  mappedData.source = 'MACC Website';
  mappedData.website_form = webhookType;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mappedData),
    });

    if (!response.ok) {
      throw new Error(`GHL webhook failed: ${response.status}`);
    }

    // GHL webhooks often return empty response on success
    const responseData = await response.text();
    let contactId: string | undefined;

    try {
      const json = JSON.parse(responseData);
      contactId = json.contactId || json.contact_id;
    } catch {
      // Response might not be JSON, that's okay
    }

    return {
      success: true,
      message: 'Form submitted successfully',
      contactId,
    };
  } catch (error) {
    console.error('GHL submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Submission failed',
    };
  }
}

/**
 * Submit contact form to GHL
 */
export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  interest: string;
  message: string;
}): Promise<GHLResponse> {
  return submitToGHL('contact', data, [data.interest]);
}

/**
 * Submit membership application to GHL
 */
export async function submitMembershipForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  membershipTier: string;
  businessAddress?: string;
  message?: string;
}): Promise<GHLResponse> {
  return submitToGHL('membership', data, [`Tier: ${data.membershipTier}`]);
}

/**
 * Submit ribbon cutting request to GHL
 */
export async function submitRibbonCuttingForm(data: {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessAddress: string;
  preferredDate: string;
  preferredTime: string;
  celebrationType: string;
  additionalDetails?: string;
}): Promise<GHLResponse> {
  // Map to standard fields
  const mappedData: GHLFormData = {
    firstName: data.contactPerson.split(' ')[0],
    lastName: data.contactPerson.split(' ').slice(1).join(' '),
    email: data.email,
    phone: data.phone,
    companyName: data.businessName,
    businessAddress: data.businessAddress,
    preferredDate: data.preferredDate,
    preferredTime: data.preferredTime,
    celebrationType: data.celebrationType,
    message: data.additionalDetails,
  };

  return submitToGHL('ribbonCutting', mappedData);
}

/**
 * Submit newsletter signup to GHL
 */
export async function submitNewsletterSignup(data: {
  email: string;
  firstName?: string;
  lastName?: string;
}): Promise<GHLResponse> {
  return submitToGHL('newsletter', data);
}

/**
 * Submit event registration to GHL
 */
export async function submitEventRegistration(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  eventName: string;
  eventDate: string;
}): Promise<GHLResponse> {
  return submitToGHL('eventRegistration', data, [`Event: ${data.eventName}`]);
}

/**
 * Submit Certificate of Origin request to GHL
 */
export async function submitCertificateForm(data: {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  productDescription: string;
  destinationCountry: string;
  quantity: string;
  rushProcessing: boolean;
  additionalNotes?: string;
}): Promise<GHLResponse> {
  // Map contact name to firstName/lastName for GHL
  const [firstName, ...lastNameParts] = data.contactName.split(' ');
  const lastName = lastNameParts.join(' ');

  const mappedData: GHLFormData = {
    ...data,
    firstName: firstName || data.contactName,
    lastName: lastName || '',
    rushProcessing: data.rushProcessing ? 'Yes' : 'No',
    message: data.additionalNotes || '',
  };

  return submitToGHL('certificateOfOrigin', mappedData, ['Service: Certificate of Origin']);
}

/**
 * Get GHL calendar embed URL
 */
export function getCalendarEmbedUrl(calendarType: keyof typeof GHL_CONFIG.calendars = 'main'): string {
  return GHL_CONFIG.calendars[calendarType] || GHL_CONFIG.calendars.main;
}

/**
 * Check if GHL is properly configured
 */
export function isGHLConfigured(): boolean {
  return (
    !GHL_CONFIG.locationId.includes('YOUR_') &&
    Object.values(GHL_CONFIG.webhooks).some(url => !url.includes('YOUR_'))
  );
}
