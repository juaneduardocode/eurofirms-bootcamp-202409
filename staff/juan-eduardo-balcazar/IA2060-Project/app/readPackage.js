import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageJsonPath = path.join(__dirname, 'package.json'); // Asegúrate de que la ruta sea correcta

const loadPackageJson = async () => {
    try {
        const data = await readFile(packageJsonPath, 'utf8');
        const packageJson = JSON.parse(data);
        console.log(packageJson);
    } catch (error) {
        console.error('Error leyendo package.json:', error);
    }
};

loadPackageJson();
