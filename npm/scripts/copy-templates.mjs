import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceRooDir = path.resolve(__dirname, '..', '..', '.roo');
const sourceRuruDir = path.resolve(__dirname, '..', '..', '.ruru');

const targetBaseDir = path.resolve(__dirname, '..', 'dist', 'templates');
const targetRooDir = path.join(targetBaseDir, '.roo');
const targetRuruDir = path.join(targetBaseDir, '.ruru');

try {
  fs.ensureDirSync(targetBaseDir); // Ensure the base 'templates' directory exists
  
  console.log(`Copying from ${sourceRooDir} to ${targetRooDir}`);
  fs.copySync(sourceRooDir, targetRooDir);
  
  console.log(`Copying from ${sourceRuruDir} to ${targetRuruDir}`);
  fs.copySync(sourceRuruDir, targetRuruDir);
  
  console.log('Successfully copied .roo and .ruru template directories.');
} catch (err) {
  console.error('Error copying template directories:', err);
  process.exit(1); // Exit with error code if copy fails
}