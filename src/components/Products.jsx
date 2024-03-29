import React from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import Product from "./Product";

function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default Products;
