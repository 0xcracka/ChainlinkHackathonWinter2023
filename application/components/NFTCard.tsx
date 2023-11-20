// components/NFTCard.tsx
import React from "react";
import styles from "../styles/NFTCard.module.css"; // This should be your actual CSS module file.

interface NFTCardProps {
  discount: number;
  imageUrl: string;
  category: string;
  price: string;
  title: string;
}

const NFTCard: React.FC<NFTCardProps> = ({
  discount,
  imageUrl,
  category,
  price,
  title,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.discountBadge}>{discount}%</div>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.category}>{category}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.actions}>
        <button className={styles.addToCartButton}>Add to Cart</button>
        <button className={styles.buyNowButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default NFTCard;
