import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  const [totalStockValue, setTotalStockValue] = useState(0);

  // Load products from local storage on component mount
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Update total stock value whenever products change
  useEffect(() => {
    const stockValue = products.reduce((total, product) => {
      return total + product.sellingPrice;
    }, 0);
    setTotalStockValue(stockValue);
  }, [products]);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSellingPriceChange = (event) => {
    setSellingPrice(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    if (productId && sellingPrice && productName) {
      const newProduct = {
        id: productId,
        sellingPrice: Number(sellingPrice),
        name: productName
      };

      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);

      // Save products to local storage
      localStorage.setItem('products', JSON.stringify(updatedProducts));

      // Reset form fields
      setProductId('');
      setSellingPrice('');
      setProductName('');
    }
  };

  return (
    <div>
      <h1>Seller's Admin Page</h1>
      <div>
        <h2>Add Product</h2>
        <form onSubmit={handleAddProduct}>
          <div>
            <label htmlFor="productId">Product ID:</label>
            <input
              type="text"
              id="productId"
              value={productId}
              onChange={handleProductIdChange}
            />
          </div>
          <div>
            <label htmlFor="sellingPrice">Selling Price:</label>
            <input
              type="text"
              id="sellingPrice"
              value={sellingPrice}
              onChange={handleSellingPriceChange}
            />
          </div>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={handleProductNameChange}
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
      <div>
        <h2>Total Stock Value: {totalStockValue}</h2>
      </div>
    </div>
  );
};

export default AdminPage;
