const fs = require('fs');
const html = fs.readFileSync('d:\\new website\\src\\raw_products.html', 'utf16le');
const imgs = html.match(/<img[^>]+src=["']([^"']+)["']/gi);
console.log("--- IMAGES ---");
if (imgs) {
  const urls = [...new Set(imgs.map(i => i.match(/src=["']([^"']+)["']/i)[1]))];
  console.log(urls.join('\n'));
}

console.log("\n--- BACKWASH ---");
const bwMatches = html.match(/.{0,100}backwash.{0,100}/gi);
if (bwMatches) {
  console.log([...new Set(bwMatches)].join('\n'));
}
