# Total Success AI - Quick Setup Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Run the Development Server
```bash
cd total-success-ai
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your website!

### Step 2: Add Your Images

Create the image directories:
```bash
mkdir -p public/images/projects public/images/recommendations
```

Add your images:
- `public/images/brett.jpg` - Brett's professional photo (800x800px)
- `public/images/manny.jpg` - Manny's professional photo (800x800px)
- `public/images/projects/` - Add your project screenshots
- `public/images/recommendations/` - Add scanned recommendation letters

### Step 3: Configure Calendly Links

1. Go to [calendly.com](https://calendly.com) and create your event types
2. Open `app/contact/page.tsx`
3. Find lines ~41-43 and replace with your Calendly URLs:

```typescript
calendlyUrl: 'https://calendly.com/YOUR-USERNAME/15min',
calendlyUrl: 'https://calendly.com/YOUR-USERNAME/30min',
calendlyUrl: 'https://calendly.com/YOUR-USERNAME/60min',
```

## ✅ Checklist Before Going Live

- [ ] Add Brett's professional photo (`public/images/brett.jpg`)
- [ ] Add Manny's professional photo (`public/images/manny.jpg`)
- [ ] Add project images to portfolio
- [ ] Add recommendation letter scans
- [ ] Update Calendly booking links
- [ ] Update email address in footer and contact page
- [ ] Add social media links (LinkedIn, Twitter) in footer
- [ ] Review and customize testimonials
- [ ] Test all booking links
- [ ] Test on mobile devices
- [ ] Update meta descriptions for SEO

## 📝 Content Checklist

- [ ] Review About page bios for accuracy
- [ ] Verify all personal website links work
- [ ] Update portfolio projects with your actual work
- [ ] Customize service descriptions if needed
- [ ] Add real client testimonials
- [ ] Update company email address
- [ ] Add company phone number (optional)

## 🎨 Optional Customizations

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme:
```typescript
colors: {
  navy: {
    DEFAULT: '#0A1F44',  // Your custom navy
    light: '#1E3A8A',    // Your custom accent
  },
  // ... etc
}
```

### Add More Pages
```bash
mkdir app/your-page-name
# Then create app/your-page-name/page.tsx
```

### Modify Animations
Edit any page file and adjust Framer Motion parameters:
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repo
4. Click "Deploy" - done!

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Connect your GitHub repo
5. Build command: `npm run build`
6. Publish directory: `.next`

## 💡 Tips for Best Results

1. **Images**: Use high-quality, professional photos
2. **Content**: Keep descriptions clear and benefit-focused
3. **Testimonials**: Use real client testimonials with permission
4. **Videos**: Add actual demo videos when available
5. **Testing**: Test on multiple devices before launching
6. **SEO**: Update meta descriptions in `app/layout.tsx`
7. **Analytics**: Add Google Analytics to track visitors

## 🆘 Need Help?

Common issues and solutions:

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build failing?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Images not showing?**
- Ensure images are in `public/` folder
- Use paths starting with `/images/...`
- Check file extensions match (jpg vs jpeg)

---

🎉 **You're all set!** Your world-class AI consulting website is ready to impress clients.
