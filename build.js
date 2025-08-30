import * as esbuild from "esbuild";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const environments = ['simple','dev', 'config', 'caching'];
const staticFiles = ["index.html", "style.css"];

const config = {
  srcDir: 'src',
  outDir: 'dist',
  entryPoints: environments.map(e => `${e}/orchestrator.ts`),
  buildOptions: {
    bundle: true,
    platform: "browser",
    format: "esm",
    mainFields: ["es2022", "browser", "module", "main"],
    conditions: ["es2022", "es2015", "module"],
    resolveExtensions: [".ts"],
    logLevel: "info",
    minify: true,
    sourcemap: true,
    metafile: true,
    target: ['es2022'],
    treeShaking: true,
    tsconfig: './tsconfig.json'
  }
};

function cleanAndSetup(dir) {
  fs.rmSync(dir, { force: true, recursive: true });
  fs.mkdirSync(dir, { recursive: true });
  environments.forEach(e => fs.mkdirSync(path.join(dir, e)));
}

function copyFiles(src, dist) {
  staticFiles.forEach(file => {
    const srcPath = path.join(src, file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(dist, file));
      console.log(`Copied ${file}`);
    } else {
      console.warn(`Warning: ${srcPath} not found`);
    }
  });
}

async function build() {
  try {
    const [dist, src] = [path.join(__dirname, config.outDir), path.join(__dirname, config.srcDir)];
    
    cleanAndSetup(dist);
    copyFiles(src, dist);
    
    const result = await esbuild.build({
      ...config.buildOptions,
      entryPoints: config.entryPoints.reduce((acc, entry) => {
        acc[`${path.dirname(entry)}/${path.basename(entry, '.ts')}`] = path.join(src, entry);
        return acc;
      }, {}),
      outdir: dist,
    });

    const analytics = await esbuild.analyzeMetafile(result.metafile);
    console.log('\nBuild Analytics:\n' + analytics);
    console.log('\nBuild completed successfully! 🎉\nOutput:', dist);
  } catch (error) {
    console.error("\nBuild failed:", error);
    process.exit(1);
  } finally {
    await esbuild.stop();
  }
}

process.on('SIGINT', async () => {
  console.log('\nBuild interrupted');
  await esbuild.stop();
  process.exit(0);
});

build();