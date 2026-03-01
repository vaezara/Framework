import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType =
{
  id: string;
  category: string;
  name: string;
  price: number;
  size: string;
}

const kategori = () => {
  const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
    try {
      const response = await fetch("/api/produk");
      const responsedata = await response.json();
      setProducts(responsedata.data);
    } catch (error) {
      console.error("Error fetching produk:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
       <button onClick={fetchProducts}>
        Refresh Data
      </button>
      {products.map((products:ProductType) => (
        <div key={products.id}>
          <h2>{products.name}</h2>
          <p>Kategori: {products.category}</p>
          <p>Harga: {products.price}</p>
          <p>Ukuran: {products.size}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;