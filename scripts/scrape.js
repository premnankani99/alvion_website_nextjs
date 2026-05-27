const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// The base URL where your local Next.js server is running
const BASE_URL = 'http://localhost:3000';

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'careers', path: '/careers' },
  { name: 'contact', path: '/contact' },
  { name: 'blogs', path: '/blogs' },
  { name: 'intelligent_automation', path: '/intelligent-automation' },
  { name: 'development_implementation', path: '/development-and-implementation' },
  { name: 'application_infra', path: '/application-and-infra-support' },
  { name: 'fixed_diposit', path: '/fixed-diposit' },
  { name: 'consumer_electronics', path: '/consumer-electronics-brand' },
  { name: 'warehouse_management', path: '/warehouse-management-system' }
];

const JSON_PATH = path.join(__dirname, '../src/data/company-info.json');

async function scrapePage(urlPath) {
  try {
    const url = `${BASE_URL}${urlPath}`;
    console.log(`Scraping ${url}...`);
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch ${url} (Status: ${response.status})`);
      return "";
    }
    const html = await response.text();

    const $ = cheerio.load(html);

    // Remove noise (header, footer, nav, scripts, styles)
    $('script, style, noscript, svg, nav, footer, header').remove();

    // Extract text from the main body or <main> tag
    let contentText = $('main').text();
    if (!contentText.trim()) {
       contentText = $('body').text();
    }

    // Clean up excessive whitespaces and newlines
    contentText = contentText.replace(/\s+/g, ' ').trim();
    return contentText;

  } catch (error) {
    console.error(`Error scraping ${urlPath}:`, error.message);
    return "";
  }
}

async function runScraper() {
  console.log('Starting automated website scraper...');
  
  const scrapedData = {};

  for (const page of PAGES) {
    const text = await scrapePage(page.path);
    if (text) {
      scrapedData[`${page.name}_page_data`] = text;
    }
  }

  console.log('Finished scraping. Updating company-info.json...');

  // Read the existing JSON so we don't lose the structured FAQs and Openings
  let existingData = {};
  if (fs.existsSync(JSON_PATH)) {
    try {
      const raw = fs.readFileSync(JSON_PATH, 'utf-8');
      existingData = JSON.parse(raw);
    } catch(e) {
      console.error("Error reading existing JSON. Creating a fresh one.", e);
    }
  }

  // Inject the scraped data into the JSON
  existingData["scrapedWebsitePages"] = scrapedData;

  // Save the updated JSON back to the file
  fs.writeFileSync(JSON_PATH, JSON.stringify(existingData, null, 2), 'utf-8');
  console.log('Successfully updated company-info.json with fresh website data!');
}

runScraper();
