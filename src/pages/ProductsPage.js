import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Product from "../components/Product";

export default function ProductsPage({ auth }) {
  const [result, setResult] = useState([]);
  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/`;
    navigate(path);
  }

  useEffect(() => {
    if(!auth) {
      routeChange();
    }
  })

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [auth]);

  return (
    <div>
      {result.map((key, index) => (
        <Product
          title={key.title}
          desc={key.description}
          img={key.image}
          price={key.price}
          rating={key.rating["rate"]}
          key={index}
        />
      ))}
    </div>
  );
}
