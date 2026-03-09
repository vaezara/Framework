import TampilanProduk from "../../../views/product"; // pastikan ini komponen list
import { ProductType } from "../../../types/Product.type";

const HalamanProdukStatic = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} basePath="/produk/static" />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response: { data: ProductType[] } = await res.json();

  return {
    props: {
      products: response.data, // array
    },
  };
}