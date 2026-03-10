import { useState, useMemo } from "react";
import { useAppSelector } from "../../../app/redux-hooks";
import { NormalizedProduct } from "../../../types/index";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const jewellery = useAppSelector((state) => state.products?.jewellery) || [];
  const watches = useAppSelector((state) => state.products?.watches) || [];
  const flowers = useAppSelector((state) => state.flowerBouquet?.items) || [];

  const allProducts = useMemo<NormalizedProduct[]>(() => {
    const normalizedJewellery: NormalizedProduct[] = jewellery.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.thumbnail,
      type: "jewellery",
    }));

    const normalizedWatches: NormalizedProduct[] = watches.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.thumbnail,
      type: "watch",
    }));

    const normalizedFlowers: NormalizedProduct[] = flowers.map((item) => ({
      id: item.id,
      title: item.alt || "Flower Bouquet",
      image: item.src.large2x,
      type: "flower",
    }));

    return [...normalizedJewellery, ...normalizedWatches, ...normalizedFlowers];
  }, [jewellery, watches, flowers]);

  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return allProducts
      .filter((product) =>
        (product.title || "").toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .slice(0, 5);
  }, [searchTerm, allProducts]);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
  };
};
