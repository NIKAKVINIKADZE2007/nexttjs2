'use client';

type Props = {
  params: { productId: string };
};
const ProductDetailsid = ({ params }: Props) => {
  console.log(params.productId);
  return <div>ProductDetailsid</div>;
};

export default ProductDetailsid;
