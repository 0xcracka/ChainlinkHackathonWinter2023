import React from "react";
import styles from "../styles/NFTCard.module.css"; // This should be your actual CSS module file.

interface NFTCardProps {
  category: string;
  imageUrl: string;
  priceInETH: string;
  creator: string;
  title: string;
  basicInfo: string;
}

const NFTCard: React.FC<NFTCardProps> = ({
  imageUrl,
  category,
  priceInETH,
  creator,
  title,
  basicInfo,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.title}>{title}</div>
      <div className={styles.creator}>Created by: {creator}</div>
      <div className={styles.category}>Category: {category}</div>
      <div className={styles.price}>Price: {priceInETH}</div>
      <div className={styles.basicInfo}>{basicInfo}</div>
      <div className={styles.actions}>
        <button className={styles.addToCartButton}>Add to Cart</button>
        <button className={styles.buyNowButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default NFTCard;
