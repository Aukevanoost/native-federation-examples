import * as esbuild from 'esbuild';
import * as path from 'path';
import * as fs from 'fs';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { federationBuilder } from '@softarc/native-federation/build';

export async function buildProject() {
  const tsConfig = 'tsconfig.json';
  const outputPath = `dist/browser/`;

  await federationBuilder.init({
    options: {
      workspaceRoot: path.join(__dirname),
      outputPath,
      tsConfig,
      federationConfig: `federation-config.js`,
      entryPoint: './src/main.ts',
      verbose: false,
    },
    adapter: createEsBuildAdapter({ plugins: [] }),
  });
  fs.rmSync(outputPath, { force: true, recursive: true });

  await esbuild.build({
    entryPoints: [`src/main.ts`],
    external: federationBuilder.externals,
    outdir: outputPath,
    bundle: true,
    platform: 'browser',
    format: 'esm',
    mainFields: ['es2020', 'browser', 'module', 'main'],
    conditions: ['es2020', 'es2015', 'module'],
    resolveExtensions: ['.ts', '.tsx', '.mjs', '.js'],
    tsconfig: tsConfig,
    splitting: true,
  });

  fs.copyFileSync(`src/index.html`, `${outputPath}index.html`);
  fs.copyFileSync(`src/style.css`, `${outputPath}style.css`);

  await federationBuilder.build();
}
buildProject();
