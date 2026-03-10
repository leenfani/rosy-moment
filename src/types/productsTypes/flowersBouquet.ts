export interface PhotoSources {
  large2x: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  avg_color: string;
  src: PhotoSources;
  alt: string;
}

export interface FlowersBouquetState {
  items: Photo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}
