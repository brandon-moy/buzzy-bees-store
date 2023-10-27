"use client";

import { useState, useEffect } from "react";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-primary px-4 py-2"
      >
        <ShoppingBag size={20} color="black" />
        <span className="ml-2 text-sm font-medium text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
