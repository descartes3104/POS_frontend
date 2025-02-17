import { useState } from 'react';

export const useProduct = () => {
  const [PRD_CODE, setProductCode] = useState('');
  const [PRD_NAME, setProductName] = useState('');
  const [PRD_PRICE, setProductPrice] = useState(0);

  const handleLoadProduct = async () => {
    console.log("handleLoadProduct が実行されました");
    console.log("商品コード:", PRD_CODE);
    const code = PRD_CODE;
    const response = await fetch(`http://localhost:8000/api/products/${PRD_CODE}`);
    console.log("レスポンス:", response);
    const product = await response.json();
    console.log("取得した商品データ:", product);

    if (product) {
      setProductName(product.NAME);
      setProductPrice(Number(product.PRICE));
    } else {
      setProductName('商品がマスタ未登録です');
      setProductPrice(0);
    }
  };

  return { PRD_CODE, setProductCode, PRD_NAME, PRD_PRICE, handleLoadProduct };
};
