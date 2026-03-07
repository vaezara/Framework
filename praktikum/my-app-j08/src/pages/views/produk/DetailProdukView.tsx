type Props = {
  id?: string | string[];
};

const DetailProdukView = ({ id }: Props) => {
  return (
    <div>
      <h1>Detail Produk</h1>
      <p>ID Produk: {id}</p>
    </div>
  );
};

export default DetailProdukView;