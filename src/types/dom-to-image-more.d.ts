declare module 'dom-to-image-more' {
    const domToImage: {
      toPng: (
        node: HTMLElement,
        options?: {
          width?: number;
          height?: number;
          quality?: number;
          style?: Partial<CSSStyleDeclaration>;
          filter?: (node: HTMLElement) => boolean;
        }
      ) => Promise<string>;
    };
    export default domToImage;
  }
  