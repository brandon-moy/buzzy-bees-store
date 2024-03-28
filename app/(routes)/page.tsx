import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboards";

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("d28f0891-fc3d-464e-961c-466ef7350863");

  return (
    <Container>
      <div className="space-y-10 pb-10 pt-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
