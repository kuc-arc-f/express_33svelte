import * as esbuild from 'esbuild'
import path from "path";
import fs from "fs";
//
let ctx = await esbuild.context({
  entryPoints: ["./src/index.ts"],
  minify: true,
  bundle: true,
  target: "es2020",
  platform: "node",
  format: 'esm', // ESMプロジェクトに設定
//  outfile: 'out.js',
  outdir: './dist',
  tsconfig: path.resolve("./tsconfig.json"),
  external: fs.readdirSync("./node_modules"),
})

await ctx.watch()
console.log('watching...')