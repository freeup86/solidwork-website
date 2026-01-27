-- SolidWork Systems Database Schema
-- Run against: solidwork database on RDS

CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  role VARCHAR(50),
  phone VARCHAR(50),
  trade VARCHAR(50),
  estimate_volume VARCHAR(100),
  pain_point TEXT,
  source_page VARCHAR(255),
  source_product VARCHAR(100),
  ip_address VARCHAR(45),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  product_interest VARCHAR(50) NOT NULL,
  source_page VARCHAR(255),
  ip_address VARCHAR(45),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);
CREATE INDEX IF NOT EXISTS idx_waitlist_product ON waitlist (product_interest);
