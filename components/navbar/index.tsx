import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/navbar/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b border-primary bg-white bg-opacity-75 fixed top-0 w-full z-50">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold font-satisfy text-2xl text-black">
              BuzzyBees
            </p>
          </Link>
          <div className="w-full flex justify-end sm:justify-start">
            <MainNav data={categories} />
          </div>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
