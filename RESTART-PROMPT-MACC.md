# MACC Website - Ultimate Restart Prompt
**Generated:** December 30, 2025

---

## 🎯 PROJECT OVERVIEW

I'm working on the **Murray Area Chamber of Commerce (MACC) website** - a Next.js site with a glassmorphic purple/orange design. The goal is to connect it to **Go High Level (GHL)** for contacts, calendar, emails, and automations.

---

## 📁 PROJECT LOCATION

**Active Project (USE THIS ONE):**
```
/Users/brettlechtenberg/Documents/agent-girl/macc-website-2
```

**Live URL:** https://macc-website-2.vercel.app

**Old Project (DEPRECATED - had Tailwind v4 spacing issues):**
```
/Users/brettlechtenberg/Documents/agent-girl/macc-website/murray-chamber-redesign
```

---

## 🛠️ TECH STACK

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 16.0.10 | App Router |
| Tailwind CSS | 3.4.18 | **v3, NOT v4** (v4 had spacing issues) |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | Icons |
| Deployment | Vercel | CLI workflow only |

---

## ✅ COMPLETED WORK

1. **Fresh Build with Tailwind v3** - Rebuilt entire site from TSAI foundation
2. **All Pages Ported** - 20+ pages including:
   - Homepage, About, Contact
   - Events (Chamber & Community)
   - Members, Directory
   - Join, Deals, Resources
   - Ribbon Cutting, Certificate of Origin
   - Board, Ambassadors, MYCC
   - News (Chamber & Community)
   - Login, LegalShield, Good Things Utah

3. **Navigation Working** - Dropdowns, mobile menu, glassmorphic styling
4. **Spacing Fixed** - Cards and sections properly spaced (was broken in v4)
5. **Design System** - Complete glassmorphic CSS in globals.css

---

## 🔜 NEXT STEPS: GO HIGH LEVEL INTEGRATION

**Goal:** Connect all forms to GHL using direct webhooks (NO Zapier/Make/n8n)

### Forms to Connect:
| Form | GHL Integration | Status |
|------|-----------------|--------|
| Contact Form | Webhook → Contact + Automation | ⏳ Pending |
| Join Chamber | Webhook → Pipeline + "New Member" tag | ⏳ Pending |
| Event Registration | GHL Calendar Embed | ⏳ Pending |
| Newsletter Signup | Webhook → Email List | ⏳ Pending |
| Ribbon Cutting Request | Webhook → Review Workflow | ⏳ Pending |
| Certificate of Origin | Webhook → Form Submission | ⏳ Pending |
| Member Login | Link to GHL Membership Portal | ⏳ Pending |

### Integration Approach:
```typescript
// Direct webhook POST (no middleware)
const handleSubmit = async (data) => {
  await fetch('https://services.leadconnectorhq.com/hooks/WEBHOOK_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};
```

---

## 📂 KEY FILES

```
macc-website-2/
├── app/
│   ├── globals.css          # All glassmorphic styles + nav styles
│   ├── layout.tsx           # Root layout with Navigation + aurora bg
│   ├── page.tsx             # Homepage
│   ├── contact/page.tsx     # Contact form (needs GHL webhook)
│   ├── join/page.tsx        # Membership form (needs GHL webhook)
│   ├── events/
│   │   ├── chamber/page.tsx # Chamber events
│   │   └── community/page.tsx
│   └── [20+ other pages]
├── components/
│   ├── Navigation.tsx       # Main nav with dropdowns
│   ├── ContactForm.tsx      # Contact form component
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Events.tsx
│   ├── Footer.tsx
│   └── PageHeader.tsx
├── tailwind.config.ts       # MACC colors (purple/orange)
└── package.json
```

---

## 🚀 DEPLOYMENT

**Always use Vercel CLI (no dev servers):**
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2
vercel --prod --yes
```

---

## 🎨 DESIGN SYSTEM

**Colors:**
- Purple Deep: #490096
- Purple Light: #7c3aed
- Orange Primary: #ff7a00
- Orange Light: #ffb347

**Key CSS Classes:**
- `.glass` / `.glass-strong` - Frosted glass backgrounds
- `.glass-card` - Hoverable glass cards
- `.btn-primary` - Purple gradient button
- `.btn-glow` - Orange glowing button
- `.event-card` - Event listing cards
- `.nav-glass` - Navigation background when scrolled
- `.dropdown-menu` / `.dropdown-item` - Nav dropdowns

---

## ⚠️ IMPORTANT NOTES

1. **Use Tailwind v3** - v4 had CSS variable spacing issues that didn't render
2. **Vercel CLI Only** - Don't use `npm run dev`, deploy directly
3. **No Middleware Tools** - User wants direct GHL webhooks, no Zapier/Make/n8n
4. **Keep Design** - Purple/orange glassmorphic theme is final

---

## 💬 SAMPLE CONTINUATION PROMPTS

**To add GHL webhooks:**
> "Connect the contact form to GHL. Here's my webhook URL: [URL]"

**To add new features:**
> "Add a member deals page that shows discounts from chamber members"

**To fix issues:**
> "The events page isn't showing the correct dates, can you check it?"

---

**Ready to continue! Just paste this prompt and provide your GHL webhook URLs to start the integration.** 🚀
