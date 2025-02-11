export async function fetchProduct(code: string) {
    const response = await fetch(`/api/products?code=${code}`);
    return response.json();
  }
  
  export async function sendPurchase(data: any) {
    const response = await fetch('/api/purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    return response.json();
  }
  