import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import ProductCard from "../component/ProductView";
import Curbside from "../component/Curbside";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";
import { getPosts } from "../Services/GetUser.service";
import { Product } from "../Model/prodduct";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [prod, setprod] = useState<Product[]>();
  const navigate = useNavigate()
  const getProducts = () => {
    getPosts("", (result: Product[]) => {
      const queryuser = result;
      setprod(queryuser);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  // enter path to image when ever you want to change the banner image
  const images = ["/image/b4.jpg", "/image/b5.jpg","/image/b1.jpg", "/image/b2.jpg", ];
  const images2 = ["/image/b24.jpg", "/image/b25.jpg","/image/b12.jpg", "/image/b21.jpg"];
  const handleBuyNow = (item:Product) => {
  navigate(`/product/brands/checkout/${item.id}`)
  };
  return (
    <div>
      <Navbar />
      <Banner images={images} images2={images2} />
      <div className="p-2 bg-gray-800">
        <div className="px-5 my-4 flex justify-between items-center py-4 bg-red-100 rounded-lg">
          <div className="text-black">Available Inventory</div>
          <div className="text-gray-800">
            <Link to="/product/brands">See More</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {prod && prod?.length < 0 ? (
            <>
              <div className="text-white flex justify-center items-center min-h-[40vh]">
                Please wait ...
              </div>
            </>
          ) : (
            prod?.slice(0,15).map((item: Product, id) => {
              const image = item.productImage[0]
              return (
                <div className="" key={id}>
                  <ProductCard
                    imageUrl={image}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    onBuyNow={()=>handleBuyNow(item)}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      <Curbside />
      <Footer />
    </div>
  );
}

export default Home;
