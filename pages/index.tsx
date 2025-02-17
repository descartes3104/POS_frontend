import React, { useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import { usePurchase } from '../hooks/usePurchase';
import ProductInput from '../components/ProductInput';
import PurchaseList from '../components/PurchaseList';

const POSApp = () => {
  const { PRD_CODE, setProductCode, PRD_NAME, PRD_PRICE, handleLoadProduct } = useProduct();
  const { purchaseList, totalAmount, handleAddProduct, handlePurchase } = usePurchase();

  return (
    <div>
      <ProductInput
        productCode={PRD_CODE}
        setProductCode={setProductCode}
        handleLoadProduct={handleLoadProduct}
        productName={PRD_NAME}
        productPrice={PRD_PRICE}
        handleAddProduct={handleAddProduct}
      />
      <PurchaseList purchaseList={purchaseList} />
      <div>
        <button onClick={handlePurchase}>購入ボタン</button>
      </div>
    </div>
  );
};

export default POSApp;
