/**
 * Go High Level Configuration
 *
 * Replace the placeholder values with your actual GHL webhook URLs and IDs.
 * Get these from GHL: Settings → Integrations → Webhooks
 *
 * SETUP INSTRUCTIONS:
 * 1. Log into Go High Level
 * 2. Go to Automation → Workflows
 * 3. Create a workflow for each form type
 * 4. Add "Inbound Webhook" trigger and copy the URL
 * 5. Replace the URLs below
 */

export const GHL_CONFIG = {
  // Your GHL Location ID (found in Settings → Business Profile)
  locationId: process.env.NEXT_PUBLIC_GHL_LOCATION_ID || 'YOUR_LOCATION_ID',

  // GHL Community / Client Portal URLs
  // Replace with your actual GHL community URL once set up
  community: {
    // Main community login URL - members will be redirected here
    // Format: https://app.gohighlevel.com/v2/communities/YOUR_COMMUNITY_ID
    // Or custom domain: https://members.themurraychamber.com
    loginUrl: process.env.NEXT_PUBLIC_GHL_COMMUNITY_URL || 'https://app.gohighlevel.com/v2/communities/YOUR_COMMUNITY_ID',

    // Client portal URL (alternative to community)
    clientPortalUrl: process.env.NEXT_PUBLIC_GHL_CLIENT_PORTAL_URL || 'https://app.gohighlevel.com/v2/portal/YOUR_PORTAL_ID',

    // Set to true once your GHL community is configured and ready
    isConfigured: process.env.NEXT_PUBLIC_GHL_COMMUNITY_CONFIGURED === 'true' || false,
  },

  // Webhook URLs for different forms
  webhooks: {
    // General contact form
    contact: process.env.NEXT_PUBLIC_GHL_WEBHOOK_CONTACT || 'https://services.leadconnectorhq.com/hooks/YOUR_CONTACT_WEBHOOK_ID',

    // Membership application
    membership: process.env.NEXT_PUBLIC_GHL_WEBHOOK_MEMBERSHIP || 'https://services.leadconnectorhq.com/hooks/YOUR_MEMBERSHIP_WEBHOOK_ID',

    // Ribbon cutting request
    ribbonCutting: process.env.NEXT_PUBLIC_GHL_WEBHOOK_RIBBON || 'https://services.leadconnectorhq.com/hooks/YOUR_RIBBON_CUTTING_WEBHOOK_ID',

    // Newsletter signup
    newsletter: process.env.NEXT_PUBLIC_GHL_WEBHOOK_NEWSLETTER || 'https://services.leadconnectorhq.com/hooks/YOUR_NEWSLETTER_WEBHOOK_ID',

    // Event registration
    eventRegistration: process.env.NEXT_PUBLIC_GHL_WEBHOOK_EVENT || 'https://services.leadconnectorhq.com/hooks/YOUR_EVENT_WEBHOOK_ID',

    // Certificate of Origin request
    certificateOfOrigin: process.env.NEXT_PUBLIC_GHL_WEBHOOK_CERTIFICATE || 'https://services.leadconnectorhq.com/hooks/YOUR_CERTIFICATE_WEBHOOK_ID',
  },

  // GHL Calendar embed URLs (for event registration)
  calendars: {
    // Main booking calendar
    main: process.env.NEXT_PUBLIC_GHL_CALENDAR_MAIN || 'https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID',

    // Specific event calendars (add as needed)
    networkingLunch: process.env.NEXT_PUBLIC_GHL_CALENDAR_LUNCH || '',
    workshop: process.env.NEXT_PUBLIC_GHL_CALENDAR_WORKSHOP || '',
  },

  // Form tags (these get added to contacts in GHL)
  tags: {
    contact: 'Website Contact',
    membership: 'Membership Inquiry',
    ribbonCutting: 'Ribbon Cutting Request',
    newsletter: 'Newsletter Subscriber',
    eventAttendee: 'Event Attendee',
  },
};

// Form field mapping (matches your form fields to GHL contact fields)
export const GHL_FIELD_MAPPING = {
  // Standard contact fields
  firstName: 'first_name',
  lastName: 'last_name',
  email: 'email',
  phone: 'phone',

  // Custom fields (create these in GHL first)
  companyName: 'company_name',
  businessAddress: 'address1',
  interest: 'interest_type',
  membershipTier: 'membership_tier',
  eventName: 'event_name',
  preferredDate: 'preferred_date',
  preferredTime: 'preferred_time',
  celebrationType: 'celebration_type',
  message: 'message',
};
