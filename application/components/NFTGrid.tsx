// pages/index.tsx or components/NFTGrid.tsx
import React from "react";
import NFTCard from "./NFTCard";

const nftItems = [
  // This data would actually come from your backend or a service
  {
    discount: 25,
    imageUrl: "/path-to-nft-image.jpg",
    category: "Audio Devices",
    price: "₦600,000",
    title: "Nokia Essential Wireless Headphones 12CM BLACK",
  },
  {
    discount: 25,
    imageUrl: "/path-to-nft-image.jpg",
    category: "Audio Devices",
    price: "₦600,000",
    title: "Nokia Essential Wireless Headphones 12CM BLACK",
  },
  {
    discount: 25,
    imageUrl: "/path-to-nft-image.jpg",
    category: "Audio Devices",
    price: "₦600,000",
    title: "Nokia Essential Wireless Headphones 12CM BLACK",
  },
  // ... more items
];

const NFTGrid: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {nftItems.map((item, index) => (
        <NFTCard key={index} {...item} />
      ))}
    </div>
  );
};

export default NFTGrid;
