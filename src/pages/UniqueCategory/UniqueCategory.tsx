import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../../data.json";

function Category() {
  //
  const params = useParams();
  //
  const [products, setProducts] = useState(data);

  const filterCategory = products.filter(
    (product) => product.category === params.categoryId
  );

  return (
    <div>
      <CategoryTitle></CategoryTitle>
    </div>
  );
}

export default Category;

const CategoryContainer = styled.div``;

const CategoryTitle = styled.div``;
