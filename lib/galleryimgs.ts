function importAll(file: any) {
  return file.keys().map((fileName: string) => ({
    url: file(fileName).default as string,
    alt: fileName.substring(fileName.lastIndexOf("/") + 1) as string,
  }));
}

const characterdesignContext = require.context(
  "@/public/characterdesign",
  false,
  /\.(png)$/
);
const graphicteesContext = require.context(
  "@/public/graphictees",
  false,
  /\.(png)$/
);
const blenderContext = require.context("@/public/blender", false, /\.(png)$/);

const characterdesign = importAll(characterdesignContext);
const graphictees = importAll(graphicteesContext);
const blender = importAll(blenderContext);

export { characterdesign, graphictees, blender };
