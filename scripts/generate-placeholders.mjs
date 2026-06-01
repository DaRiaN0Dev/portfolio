import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("sharp not installed, skipping image generation");
    return;
  }

  if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });
  mkdirSync(join(publicDir, "projects"), { recursive: true });

  const gradients = [
    { from: "#18181b", to: "#3f3f46" },
    { from: "#1e1b4b", to: "#312e81" },
    { from: "#0c4a6e", to: "#075985" },
    { from: "#14532d", to: "#166534" },
    { from: "#7c2d12", to: "#9a3412" },
    { from: "#4c1d95", to: "#5b21b6" },
    { from: "#831843", to: "#9d174d" },
    { from: "#27272a", to: "#52525b" },
  ];

  async function createGradientImage(width, height, from, to, outputPath, format) {
    const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`;

    const pipeline = sharp(Buffer.from(svg));
    if (format === "jpeg") {
      await pipeline.jpeg({ quality: 85 }).toFile(outputPath);
    } else {
      await pipeline.png().toFile(outputPath);
    }
  }

  await createGradientImage(
    1920,
    800,
    gradients[0].from,
    gradients[0].to,
    join(publicDir, "banner.jpg"),
    "jpeg",
  );

  await createGradientImage(
    400,
    400,
    gradients[7].from,
    gradients[7].to,
    join(publicDir, "profile.jpg"),
    "jpeg",
  );

  for (let i = 1; i <= 6; i++) {
    const g = gradients[i];
    await createGradientImage(
      800,
      500,
      g.from,
      g.to,
      join(publicDir, "projects", `project-${i}.png`),
      "png",
    );
  }

  writeFileSync(join(publicDir, "resume.pdf"), "%PDF-1.4\n% placeholder resume\n");
  console.log("Placeholder images generated.");
}

main().catch(console.error);
