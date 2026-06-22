# A Karur Metal Co. (AKMC) Website

## Programmatic SEO + Product Catalog + RFQ Commerce Platform

### Tech Stack
- **Next.js 15** (App Router, Static Generation)
- **TypeScript**
- **Tailwind CSS v4**
- **Supabase** (PostgreSQL + Auth)
- **Vercel** (Hosting)

### Project Structure
```
├── app/
│   ├── (seo)/                    # SEO-optimized pages
│   │   ├── [city]/[category]/    # Location + Category pages (100+ pages)
│   │   ├── products/[slug]/      # Product detail pages
│   │   ├── acp-designs/[slug]/   # ACP design detail pages
│   │   ├── vehicle-plywood/[slug]/ # Vehicle plywood pages
│   │   └── bus-body-materials/[slug]/ # Bus body material pages
│   ├── api/
│   │   ├── quote/route.ts        # RFQ submission API
│   │   └── search/route.ts       # Search API
│   ├── quote/page.tsx            # Quote request form
│   ├── layout.tsx                # Root layout with schemas
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt
├── components/
│   ├── Navbar.tsx                # Navigation
│   ├── Footer.tsx                # Footer
│   └── WhatsAppButton.tsx        # Floating WhatsApp CTA
├── lib/
│   ├── data/                     # Static data files
│   │   ├── products.ts           # 15+ products
│   │   ├── acp-designs.ts        # 20 ACP designs
│   │   ├── vehicle-plywood.ts    # 8 vehicle plywood items
│   │   ├── bus-body-materials.ts # 8 bus body materials
│   │   ├── cities.ts             # 20+ cities
│   │   ├── categories.ts         # 7 categories
│   │   └── seo-pages.ts          # Location page generator
│   ├── supabase/                 # Supabase clients
│   └── seo-utils.ts              # Schema.org generators
├── types/
│   └── index.ts                  # TypeScript types
├── supabase/
│   └── migrations/
│       └── 001_init.sql          # Database schema
└── public/
    └── images/                   # Product images
```

### SEO Strategy

#### 1. Location + Category Pages (100+ pages)
- `/karur/aluminium-extrusion`
- `/coimbatore/acp-sheet`
- `/salem/chequered-plywood`
- etc.

Each page has:
- Unique title, description, H1
- City-specific content
- Product list for that category
- Nearby areas
- LocalBusiness schema
- Breadcrumb schema

#### 2. Vehicle-Specific Pages
- `/vehicle-plywood/tata-ace-plywood`
- `/vehicle-plywood/dost-plywood`
- `/vehicle-plywood/mahindra-jeeto-plywood`

#### 3. ACP Design Pages
- `/acp-designs/floral-blue`
- `/acp-designs/golden-lotus`
- `/acp-designs/modern-geometric`

#### 4. Bus Body Material Pages
- `/bus-body-materials/bus-body-aluminium-extrusion`
- `/bus-body-materials/bus-ceiling-acp-sheet`
- `/bus-body-materials/bus-flooring-plywood`

#### 5. Product Pages
- `/products/bus-window-extrusion-profile`
- `/products/aluminium-sheet-1mm`
- `/products/dowsil-gp-silicone-sealant`

### Schema.org Implementation
- **Product Schema** on every product page
- **FAQ Schema** on every product page
- **Breadcrumb Schema** on all pages
- **LocalBusiness Schema** in root layout
- **Service Schema** on location pages

### RFQ Commerce Flow
1. Customer browses products
2. Clicks "Get Quote" or "Enquire on WhatsApp"
3. Quote form allows adding multiple products
4. Submit saves to Supabase + sends WhatsApp
5. Admin gets notification

### Setup Instructions

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.local.example .env.local
# Edit with your Supabase credentials
```

3. **Run Supabase migration:**
Execute `supabase/migrations/001_init.sql` in your Supabase SQL Editor.

4. **Build for production:**
```bash
npm run build
```

5. **Deploy to Vercel:**
```bash
vercel --prod
```

### Total Generated Pages
- 1 Homepage
- 1 Products list
- 15 Product detail pages
- 1 ACP designs list
- 20 ACP design detail pages
- 1 Vehicle plywood list
- 8 Vehicle plywood detail pages
- 1 Bus body materials list
- 8 Bus body material detail pages
- 100+ Location + Category pages
- 1 Quote page
- **Total: 160+ pages**

### Next Steps (Phase 2)
- [ ] Add real product images
- [ ] Set up Cloudinary/Supabase Storage
- [ ] Add blog engine
- [ ] Add admin dashboard for quote management
- [ ] Add dealer portal
- [ ] Implement bulk enquiry upload
- [ ] Add Google Analytics / Search Console
- [ ] Set up Google Business Profile
