declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.mp4' {
  const content: string;
  export default content;
}

declare const require: {
  context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): string[];
  keys(): string[];
};
