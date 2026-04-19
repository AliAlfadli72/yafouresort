import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR  = './public';
const OUTPUT_DIR = './public';

const files = readdirSync(INPUT_DIR).filter(f =>
  ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
);

console.log(`🖼  Converting ${files.length} images to WebP...\n`);

for (const file of files) {
  const input  = join(INPUT_DIR, file);
  const name   = basename(file, extname(file));
  const output = join(OUTPUT_DIR, `${name}.webp`);

  const { size: before } = (await import('fs')).default.statSync(input);

  await sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(output);

  const { size: after } = (await import('fs')).default.statSync(output);
  const pct = Math.round((1 - after / before) * 100);

  console.log(`✅  ${file} → ${name}.webp  (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${pct}%)`);
}

console.log('\n🚀  Done! All images converted to WebP.');
