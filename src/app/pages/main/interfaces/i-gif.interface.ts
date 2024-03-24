import { IImage } from "./i-image.interface";

export interface IGif {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  images: IImage;
  import_datetime: string;
}
