/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GHL_LOCATION_ID: process.env.NEXT_PUBLIC_GHL_LOCATION_ID,
    NEXT_PUBLIC_GHL_WEBHOOK_CONTACT: process.env.NEXT_PUBLIC_GHL_WEBHOOK_CONTACT,
    NEXT_PUBLIC_GHL_WEBHOOK_MEMBERSHIP: process.env.NEXT_PUBLIC_GHL_WEBHOOK_MEMBERSHIP,
    NEXT_PUBLIC_GHL_WEBHOOK_RIBBON: process.env.NEXT_PUBLIC_GHL_WEBHOOK_RIBBON,
    NEXT_PUBLIC_GHL_WEBHOOK_NEWSLETTER: process.env.NEXT_PUBLIC_GHL_WEBHOOK_NEWSLETTER,
    NEXT_PUBLIC_GHL_WEBHOOK_EVENT: process.env.NEXT_PUBLIC_GHL_WEBHOOK_EVENT,
    NEXT_PUBLIC_GHL_WEBHOOK_CERTIFICATE: process.env.NEXT_PUBLIC_GHL_WEBHOOK_CERTIFICATE,
  },
}

module.exports = nextConfig
