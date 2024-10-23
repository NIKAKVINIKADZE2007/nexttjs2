import { Metadata } from 'next';
import Card from '@/components/card';
import ProductDetailsid from '@/components/productDetailsid';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
    keywords: `product, ${params.productId}`,
    description: `This is product Description,`,
    openGraph: {
      title: 'OG title',
      description: 'OG description',
      url: 'test.ge',
    },
  };
};
const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <ProductDetailsid params={params} />{' '}
      <div>Product Detail page is :{params.productId}</div>
    </div>
  );
};

export default ProductDetails;
