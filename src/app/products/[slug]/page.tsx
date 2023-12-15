import { getProduct, getProducts } from "@/app/service/Products";
import GoProductsBtn from "@/components/GoProductsBtn";
import Image from "next/image";
import { redirect } from "next/navigation";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  console.log(params.slug);
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);
  console.log(product);
  if (!product) {
    redirect("/products");
    // notFound();
  }
  return (
    <>
      <h1>{product.name} 제품 설명 페이지!</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
      <GoProductsBtn />
    </>
  );
};

export default ProductPage;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
