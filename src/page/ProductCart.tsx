import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { getPostsByID } from "../Services/GetUser.service";
import { useParams } from "react-router-dom";
import { Product } from "../Model/prodduct";
import ProductPage from "../component/Checkout";

function ProductCart() {
  const id = useParams().id;
  const [pro, setprod] = useState<Product>();
  const getProduct = async () => {
    
    await getPostsByID(id, (result: Product[]) => {
      const product = result[0];
      if(!product){
        return(<>No product found</>)
      }
      setprod(product)
     
    });
  };

  //console.log(pro)
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Navbar />
      {pro && <ProductPage product={pro as Product} />}
      <Footer />
    </div>
  );
}

export default ProductCart;
