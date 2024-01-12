declare module '*.png' {
  const content: any;
  export default content;
}

declare const require: {
  context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): string[];
  keys(): string[];
};
