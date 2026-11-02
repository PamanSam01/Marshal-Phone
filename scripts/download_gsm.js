const fs = require('fs');
const path = require('path');

const remainingPhones = [
  { file: 'samsung-s24.jpg', url: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-fe-r1.jpg' },
  { file: 'samsung-s25-ultra.jpg', url: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg' },
  { file: 'oppo-reno-11.jpg', url: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-reno11-international.jpg' },
  { file: 'vivo-v30.jpg', url: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-s18.jpg' },
  { file: 'itel-p55.jpg', url: 'https://fdn2.gsmarena.com/vv/bigpic/itel-p55.jpg' },
  { file: 'tecno-camon.jpg', url: 'https://fdn2.gsmarena.com/vv/bigpic/tecno-camon20-premier-5g.jpg' },
  { file: 'pixel-9.jpg', url: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-.jpg' }
];

async function run() {
  const targetDir = path.join(__dirname, 'public', 'products');

  for (const item of remainingPhones) {
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Referer': 'https://www.gsmarena.com/'
        }
      });
      console.log(`Fetching ${item.file} -> Status: ${res.status}`);
      if (res.status === 200) {
        const buf = await res.arrayBuffer();
        const dest = path.join(targetDir, item.file);
        fs.writeFileSync(dest, Buffer.from(buf));
        console.log(`✅ Saved ${item.file} (${buf.byteLength} bytes)`);
      } else {
        console.warn(`⚠️ Failed ${item.file} (${res.status})`);
      }
    } catch (err) {
      console.error(`❌ Error ${item.file}:`, err.message);
    }
  }
}

run();
