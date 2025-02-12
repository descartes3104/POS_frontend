import { useState } from 'react';

export const usePurchase = () => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddProduct = (productCode: string, productName: string, productPrice: number) => {
    const newProduct = {
      code: productCode,
      name: productName,
      price: productPrice,
      quantity: 1,
      total: productPrice,
    };

    setPurchaseList([...purchaseList, newProduct]);
    setTotalAmount(totalAmount + productPrice);
  };

  const handlePurchase = async () => {
    await fetch('/api/purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(purchaseList),
    });

    alert(`合計金額（税込）：${totalAmount}`);
    setPurchaseList([]);
    setTotalAmount(0);
  };

  return { purchaseList, totalAmount, handleAddProduct, handlePurchase };
};
