import styles from "../../pages/produk/product.module.scss";
import Link from "next/link";
import Image from "next/image";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk} data-testid="produk-page">
      <h1 className={styles.produk__title} data-testid="title">Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products?.length > 0 ? (
          <>
            {products?.map((products: ProductType) => (
              <Link data-testid="product-item" href={`/produk/${products.id}`} key={products.id} className={styles.produk__content__item}>
                <div className={styles.produk__content__item__image}>
                  <Image src={products.image} alt={products.name} width={200} height={150} />
                </div>
                <h4 data-testid="product-name" className={styles.produk__content__item__name}>
                  {products.name}
                </h4>
                <p data-testid="product-category" className={styles.produk__content__item__category}>
                  {products.category}
                </p>
                <p data-testid="product-price" className={styles.produk__content__item__price}>
                  Rp {products.price.toLocaleString("id-ID")}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <div data-testid="product-skeleton" className={styles.produk__content__skeleton}>
            <div className={styles.produk__content__skeleton__image}></div>
            <div className={styles.produk__content__skeleton__name}></div>
            <div className={styles.produk__content__skeleton__category}></div>
            <div className={styles.produk__content__skeleton__price}></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TampilanProduk;