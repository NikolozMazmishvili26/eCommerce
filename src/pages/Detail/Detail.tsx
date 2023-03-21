import { useState } from "react";
import { useParams } from "react-router-dom";

import data from "../../../data.json";

function Detail() {
  //
  const params = useParams();

  const [product, setProduct] = useState(data);

  const uniqueProduct = product.filter(
    (prod) => prod.id === parseInt(params.detailId as string)
  );

  console.log(uniqueProduct[0]);

  return <div>Detail</div>;
}

export default Detail;
