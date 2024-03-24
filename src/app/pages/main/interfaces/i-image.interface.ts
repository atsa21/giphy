export interface IPreviewGif {
  url: string;
  width: string;
  height: string;
}

export interface IOriginal {
  width: string;
  height: string;
  mp4: string;
  webp: string;
}

export interface IImage {
  preview_gif: IPreviewGif,
  original: IOriginal,
}