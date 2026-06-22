-- Quote Requests Table
CREATE TABLE quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  company TEXT,
  city TEXT NOT NULL,
  items JSONB NOT NULL DEFAULT '[]',
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'quoted', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Only allow inserts from anon (public form submissions)
CREATE POLICY "Allow public insert" ON quote_requests
  FOR INSERT TO anon WITH CHECK (true);

-- Only allow service role to read/update
CREATE POLICY "Allow service role all" ON quote_requests
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Create index for status filtering
CREATE INDEX idx_quote_requests_status ON quote_requests(status);
CREATE INDEX idx_quote_requests_created_at ON quote_requests(created_at DESC);

-- Contact/Enquiry table
CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert enquiries" ON enquiries
  FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow service role enquiries" ON enquiries
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- SEO Pages tracking (for analytics)
CREATE TABLE seo_page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_type TEXT NOT NULL,
  page_slug TEXT NOT NULL,
  city_slug TEXT,
  category_slug TEXT,
  view_count INTEGER DEFAULT 1,
  last_viewed TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(page_type, page_slug)
);

CREATE INDEX idx_seo_page_views_type ON seo_page_views(page_type);

-- Product interest tracking
CREATE TABLE product_interests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_slug TEXT NOT NULL,
  product_name TEXT NOT NULL,
  source_page TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_product_interests_slug ON product_interests(product_slug);
