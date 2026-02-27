import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const jewelry = useSelector((state) => state.products.jewelry);
  const watches = useSelector((state) => state.products.watches);
  const flowers = useSelector((state) => state.flowerBouquet.items);

  const allProducts = useMemo(() => {
    const normalizedJewelry = jewelry.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.thumbnail,
      type: "jewelry",
    }));

    const normalizedWatches = watches.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.thumbnail,
      type: "watch",
    }));

    const normalizedFlowers = flowers.map((item) => ({
      id: item.id,
      title: item.alt,
      image: item.src.medium,
      type: "flower",
    }));

    return [...normalizedJewelry, ...normalizedWatches, ...normalizedFlowers];
  }, [jewelry, watches, flowers]);

  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return allProducts
      .filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .slice(0, 5);
  }, [searchTerm, allProducts]);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
  };
};
