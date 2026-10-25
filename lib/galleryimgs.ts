export type GalleryAsset = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type GallerySection = {
  id: string;
  label: string;
  caption: string;
  images: GalleryAsset[];
};

function importAll(context: any): GalleryAsset[] {
  return context.keys().sort().map((fileName: string) => {
    const imported = context(fileName);
    const asset = imported?.default ?? imported;
    const url = typeof asset === "string" ? asset : asset.src;
    const width = typeof asset === "string" ? undefined : asset.width;
    const height = typeof asset === "string" ? undefined : asset.height;

    return {
      url: url as string,
      width: width as number | undefined,
      height: height as number | undefined,
      alt: fileName.substring(fileName.lastIndexOf("/") + 1) as string,
    };
  });
}

// Add a section by dropping a public folder of PNGs and appending an entry here.
// New PNGs in an existing folder are picked up automatically.
export const gallerySections: GallerySection[] = [
  {
    id: "character-design",
    label: "Character design",
    caption: "PMA 3614: Creative Character Design",
    images: importAll(
      require.context("@/public/characterdesign", false, /\.(png)$/)
    ),
  },
  {
    id: "blender",
    label: "Blender",
    caption: "Blender",
    images: importAll(require.context("@/public/blender", false, /\.(png)$/)),
  },
  {
    id: "t-shirt-designs",
    label: "T-shirt designs",
    caption: "T-shirt designs",
    images: importAll(
      require.context("@/public/graphictees", false, /\.(png)$/)
    ),
  },
];
