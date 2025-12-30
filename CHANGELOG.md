# Changelog

All notable changes to the Total Success AI website are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]
- Nothing currently

---

## [1.4.0] - 2025-12-14
### Added
- TSAI logo in Navigation header and Footer (site-wide)
- Logo file: `public/images/TSAI-logo-final.jpg`

### Changed
- All booking/appointment links now go to `www.speaktobrett.com`
- Manny's photo updated with proper framing (white background, object-contain)
- Documentation reorganization (CLAUDE.md, CONTRIBUTING.md, CHANGELOG.md)
- Moved work logs to `/docs` folder

### Security
- Updated Next.js to fix CVE-2025-66478 vulnerability

---

## [1.3.0] - 2024-12-XX
### Security
- Updated React Flight/Next.js to address RCE vulnerability

### Fixed
- Mobile hamburger menu reliability issues
- iOS touch event inconsistencies

### Improved
- Full mobile optimization for iPhone 15 Pro
- Touch targets meet iOS 44x44px standard
- Typography and readability on mobile
- Navigation responsiveness

See: [docs/MOBILE-OPTIMIZATION.md](docs/MOBILE-OPTIMIZATION.md), [docs/MENU-FIX-REPORT.md](docs/MENU-FIX-REPORT.md)

---

## [1.2.0] - 2024-XX-XX
### Added
- Terms and Conditions page (`/terms`)
- Privacy Policy page (`/privacy`)
- Additional Services section on portfolio page

### Fixed
- activeTab reference in modal component

---

## [1.1.0] - 2024-XX-XX
### Added
- Recommendation letters section on portfolio page
- 3-box layout for recommendation letters
- Recommendation letters always visible (moved below videos)

---

## [1.0.0] - 2024-XX-XX
### Added
- Initial website launch
- Home page with hero, services overview, testimonials
- About page with Brett & Manny profiles and bio modals
- Services page with detailed offerings
- Portfolio page with projects gallery
- Contact page with Calendly booking integration
- Responsive navigation with mobile hamburger menu
- Footer with contact info and social links
- Framer Motion animations throughout
- Tailwind CSS styling with brand colors
- TypeScript for type safety

---

## Version Numbering

- **Major (X.0.0)**: Significant redesigns or breaking changes
- **Minor (0.X.0)**: New features or pages
- **Patch (0.0.X)**: Bug fixes and small improvements
