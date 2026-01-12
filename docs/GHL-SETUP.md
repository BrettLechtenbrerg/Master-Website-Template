# Go High Level Integration Guide

This document explains how to connect the MACC website to Go High Level (GHL) for managing contacts, marketing, events, and automations.

## Overview

The website is pre-configured to send form submissions directly to GHL webhooks - no Zapier, Make, or n8n required.

## Integration Points

| Website Feature | GHL Feature | Status |
|-----------------|-------------|--------|
| Contact Form | Contacts + Workflows | ✅ Ready |
| Membership Application | Pipeline + Tags | ✅ Ready |
| Ribbon Cutting Request | Pipeline + Workflows | ✅ Ready |
| Newsletter Signup | Contact Lists + Campaigns | ✅ Ready |
| Event Registration | Calendar Bookings | ✅ Ready |
| Member Login | Membership Portal | Link configured |

## Setup Steps

### Step 1: Get Your Location ID

1. Log into Go High Level
2. Go to **Settings → Business Profile**
3. Copy your Location ID

### Step 2: Create Webhooks in GHL

For each form type, create a workflow with an Inbound Webhook trigger:

1. Go to **Automation → Workflows**
2. Click **Create Workflow**
3. Choose **Start from scratch**
4. Add trigger: **Inbound Webhook**
5. Copy the webhook URL
6. Add actions (e.g., Create/Update Contact, Add to Pipeline, Send Email)
7. Save and publish the workflow

### Step 3: Configure Environment Variables

Add your webhook URLs to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add each variable from `.env.example` with your actual values:

```
NEXT_PUBLIC_GHL_LOCATION_ID=xxx
NEXT_PUBLIC_GHL_WEBHOOK_CONTACT=https://services.leadconnectorhq.com/hooks/xxx
NEXT_PUBLIC_GHL_WEBHOOK_MEMBERSHIP=https://services.leadconnectorhq.com/hooks/xxx
NEXT_PUBLIC_GHL_WEBHOOK_RIBBON=https://services.leadconnectorhq.com/hooks/xxx
NEXT_PUBLIC_GHL_WEBHOOK_NEWSLETTER=https://services.leadconnectorhq.com/hooks/xxx
NEXT_PUBLIC_GHL_WEBHOOK_EVENT=https://services.leadconnectorhq.com/hooks/xxx
```

4. Redeploy the site: `vercel --prod --yes`

## Recommended GHL Workflows

### Contact Form Workflow
1. **Trigger**: Inbound Webhook
2. **Action**: Create/Update Contact
3. **Action**: Add Tag "Website Contact"
4. **Action**: Add to Pipeline "New Inquiries"
5. **Action**: Send notification email to staff
6. **Action**: Send confirmation email to contact

### Membership Application Workflow
1. **Trigger**: Inbound Webhook
2. **Action**: Create/Update Contact
3. **Action**: Add Tag based on membership tier
4. **Action**: Add to Pipeline "Membership Applications"
5. **Action**: Send welcome email sequence
6. **Action**: Notify membership coordinator

### Newsletter Signup Workflow
1. **Trigger**: Inbound Webhook
2. **Action**: Create/Update Contact
3. **Action**: Add Tag "Newsletter Subscriber"
4. **Action**: Add to Email Campaign "Newsletter"
5. **Action**: Send welcome email

### Event Registration Workflow
1. **Trigger**: Inbound Webhook
2. **Action**: Create/Update Contact
3. **Action**: Add Tag with event name
4. **Action**: Send confirmation email
5. **Action**: Add calendar reminder

## GHL Calendar Integration

For event registration, you can either:

1. **Use webhooks** (current setup) - Collect registrations via form
2. **Embed GHL calendar** - Use the GHLCalendar component

To use embedded calendars:
1. Create a calendar in GHL under **Calendars**
2. Get the embed URL
3. Add to environment variables
4. Use the `<GHLCalendar />` component

```tsx
import GHLCalendar from '@/components/GHLCalendar';

<GHLCalendar
  calendarType="main"
  title="Schedule a Meeting"
  description="Book a time with our team"
  buttonText="View Calendar"
/>
```

## Field Mapping

Form fields are automatically mapped to GHL contact fields:

| Form Field | GHL Field |
|------------|-----------|
| firstName | first_name |
| lastName | last_name |
| email | email |
| phone | phone |
| companyName | company_name |
| message | message (custom field) |
| interest | interest_type (custom field) |

## Custom Fields

You may need to create custom fields in GHL:

1. Go to **Settings → Custom Fields**
2. Create fields for:
   - `interest_type` (dropdown)
   - `membership_tier` (dropdown)
   - `celebration_type` (dropdown)
   - `preferred_date` (date)
   - `preferred_time` (time)

## Testing

1. Submit a test form on the website
2. Check GHL Contacts for the new entry
3. Verify workflow triggered correctly
4. Check email notifications

## Troubleshooting

**Forms not submitting to GHL:**
- Check webhook URLs are correct
- Verify workflow is published
- Check Vercel environment variables
- Redeploy after adding env vars

**Missing contact fields:**
- Create custom fields in GHL
- Check field mapping in `lib/ghl-config.ts`

**Emails not sending:**
- Check workflow email actions
- Verify sender email is configured
- Check GHL email settings

## Files Reference

```
lib/
├── ghl-config.ts    # Webhook URLs and configuration
├── ghl.ts           # Form submission functions

components/
├── ContactForm.tsx      # Contact form with GHL
├── NewsletterSignup.tsx # Newsletter with GHL
├── GHLCalendar.tsx      # Calendar embed component
```
