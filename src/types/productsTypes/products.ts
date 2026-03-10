export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
}

export interface womenJewelleryState {
  jewellery: Item[];
  watches: Item[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}

export interface NormalizedProduct {
  id: number;
  title: string;
  image: string;
  type: "jewellery" | "watch" | "flower";
}