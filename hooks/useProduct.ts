import { useState } from 'react';

export const useProduct = () => {
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleLoadProduct = async () => {
    const response = await fetch(`/api/products/${productCode}`);
    const product = await response.json();

    if (product) {
      setProductName(product.name);
      setProductPrice(product.price);
    } else {
      setProductName('商品がマスタ未登録です');
      setProductPrice('');
    }
  };

  return { productCode, setProductCode, productName, productPrice, handleLoadProduct };
};
