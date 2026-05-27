const cheerio = require('cheerio');

async function test() {
  const url = 'https://alviontechnologies.com/day-1-databases';
  console.log(`Fetching ${url}...`);
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  $('script, style, noscript, svg, nav, footer, header').remove();
  let text = $('body').text().replace(/\s+/g, ' ').trim();
  console.log("Extracted text (first 500 chars):");
  console.log(text.substring(0, 500));
}
test();
