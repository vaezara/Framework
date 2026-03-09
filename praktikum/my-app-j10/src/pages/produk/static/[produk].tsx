import DetailProduk from "../../../views/DetailProduct"; // detail untuk 1 produk
import { ProductType } from "../../../types/Product.type";

const HalamanDetailProdukSSG = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProduk product={product} />
    </div>
  );
};

export default HalamanDetailProdukSSG;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: { produk: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
  const response = await res.json();

  const product = Array.isArray(response.data) ? response.data[0] : response.data;

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product, // ProductType
    },
  };
}