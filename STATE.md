# Master Website Template - State

## Current Status
**Status**: Ready for Use
**Last Updated**: February 16, 2026

## Overview
This is the master template for building client websites with the Power Hub CMS system.
Clone this repo when starting a new client build.

## Source Repository
- **Original**: Murray Area Chamber of Commerce Website
- **Chamber GitHub**: https://github.com/BoardChairIs1/web
- **Template GitHub**: https://github.com/BrettLechtenbrerg/Master-Website-Template

## Features Included
- [x] Power Hub CMS (login at /power-hub)
- [x] Dashboard with quick stats
- [x] Content Editor (JSON-based, GitHub storage)
- [x] Media Library (image upload via GitHub)
- [x] AI Assist (Claude API integration)
- [x] Members Directory (Supabase)
- [x] Scripts Manager (Supabase)
- [x] Calendar (Google Calendar embed)
- [x] Settings (credential management)
- [x] Public website pages (Home, About, Events, etc.)

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS 3.4.18
- Supabase (PostgreSQL + Storage)
- Vercel deployment

## Builds Using This Template
| Client | Status | Date | Notes |
|--------|--------|------|-------|
| Murray Chamber | Live | Feb 2026 | Original reference project |
| (Next build) | Pending | - | - |

## Quick Start
See `CLAUDE.md` for step-by-step instructions.

## Files Reference
- `BUILD-GUIDE.txt` - Complete build checklist and pricing
- `CLAUDE.md` - Project overview and quick start
- `POWER_HUB_REFERENCE.md` - Client-facing documentation template
- `POWER_HUB_SETUP.md` - Detailed technical setup
- `supabase/migrations/001_initial_schema.sql` - Database setup
