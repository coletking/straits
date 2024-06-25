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
      {!pro && <div className="h-[100vh] flex justify-center items-center text-black">Please Wait .....</div>}
      {pro && 
      <>
      <Navbar />
      <ProductPage product={pro as Product} />
      <Footer />
      </>
      }
    </div>
  );
}

export default ProductCart;
