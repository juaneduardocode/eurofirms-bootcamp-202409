import fs from 'fs/promises';
import path from 'path';
import getPublicUrlOrPath from 'react-dev-utils/getPublicUrlOrPath.js';

// 📌 Función para obtener la ruta absoluta del proyecto
const appDirectory = process.cwd();
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// 📌 Importación correcta de package.json (sin errores)
const packageJsonPath = resolveApp('package.json');
const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));

// 📌 Obtener la URL pública
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  packageJson.homepage,
  process.env.PUBLIC_URL
);

// 📌 Exportar configuración
export default {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  publicUrlOrPath,
};
import { fileURLToPath } from 'url';

// Necesario para obtener `__dirname` en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
