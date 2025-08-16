function importAll(file: any) {
  return file.keys().map((fileName: string) => ({
    url: file(fileName).default as string,
    alt: fileName.substring(fileName.lastIndexOf("/") + 1) as string,
  }));
}

const triggerhappyContext = require.context(
  "@/public/triggerhappy",
  false,
  /\.(png)$/
);
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

const triggerhappy = importAll(triggerhappyContext);
const characterdesign = importAll(characterdesignContext);
const graphictees = importAll(graphicteesContext);
const blender = importAll(blenderContext);

export { triggerhappy, characterdesign, graphictees, blender };
