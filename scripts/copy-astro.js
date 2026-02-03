// copy-astro.js
import { copyFileSync } from "node:fs";

// Copy the single .astro file to dist
copyFileSync("src/Statcounter.astro", "dist/Statcounter.astro");