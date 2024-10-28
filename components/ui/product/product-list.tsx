import React from "react";
import { ScrollView } from "@gluestack-ui/themed";
import SingleProduct from "./single-product";
import { ProductData, ProductType } from "./data/product-data";

export default function ProductList() {
  const handleSubmit = (id: number) => {
    console.log(`Product with id ${id} was clicked`);
  };

  return (
    <ScrollView>
      {ProductData.map((item: ProductType) => (
        <SingleProduct
          key={item.id}
          id={item.id}
          price={item.price}
          title={item.title}
          imageUrl={item.imageUrl}
          createAt={item.createAt}
          onSubmit={handleSubmit}
        />
      ))}
    </ScrollView>
  );
}
