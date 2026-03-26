const https = require('https');
const fs = require('fs');
https.get('https://adenfilter.com/filter-rumah-tangga/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const imgs = data.match(/<img[^>]+src=["']([^"']+)["']/gi);
    if(imgs) {
      const urls = [...new Set(imgs.map(i => i.match(/src=["']([^"']+)["']/i)[1]))];
      fs.writeFileSync('urls.json', JSON.stringify(urls.filter(u => u.includes('wp-content/uploads')), null, 2));
    }
  });
});
