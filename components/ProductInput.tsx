import React from 'react';

const ProductInput = ({ productCode, setProductCode, handleLoadProduct, productName, productPrice, handleAddProduct }) => {
  return (
    <div>
      <input
        type="text"
        value={productCode}
        onChange={(e) => setProductCode(e.target.value)}
        placeholder="コード入力エリア"
      />
      <button onClick={handleLoadProduct}>読み込みボタン</button>
      <p>商品名: {productName}</p>
      <p>単価: {productPrice}</p>
      <button onClick={() => handleAddProduct(productCode, productName, productPrice)}>追加ボタン</button>
    </div>
  );
};

export default ProductInput;
