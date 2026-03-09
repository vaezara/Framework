type Props = {
  id?: string | string[];
  basePath?: string; 
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