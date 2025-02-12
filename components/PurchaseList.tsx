import React from 'react';

const PurchaseList = ({ purchaseList }) => {
  return (
    <div>
      <h2>購入リスト</h2>
      <ul>
        {purchaseList.map((product, index) => (
          <li key={index}>
            {product.name} - {product.quantity}個 - 単価: {product.price} - 合計: {product.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseList;
