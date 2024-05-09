import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import ProductCard from "../component/ProductView";
import Curbside from "../component/Curbside";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";
import { getPosts } from "../Services/GetUser.service";
import { Product } from "../Model/prodduct";
import { Link, useNavigate } from "react-router-dom";

function Allaitem() {
  const [prod, setProd] = useState<Product[]>([]);
  const [filteredProd, setFilteredProd] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  const getProducts = () => {
    getPosts("", (result: Product[]) => {
      setProd(result);
      setFilteredProd(result);
      const pages = Math.ceil(result.length / itemsPerPage);
      setTotalPages(pages);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleBuyNow = (item: Product) => {
    navigate(`/product/brands/checkout/${item.id}`);
  };
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const filtered = prod.filter(
      (item) => category === "" || item.productCategory === category
    );
    setFilteredProd(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProd.slice(startIndex, endIndex);

  // Banner images
  const images = ["/image/b1.jpg", "/image/b2.jpg", "/image/b3.jpg"];
  const images2 = ["/image/b12.jpg", "/image/b21.jpg", "/image/b22.jpg"];

  return (
    <div>
      <Navbar />
      <Banner images={images} images2={images2} />

      {/* Filter Dropdown */}
      <div className="px-5 my-4 flex justify-between items-center py-4 bg-red-100 rounded-lg">
        <div>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="bg-white p-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Guitars">Guitars</option>
            <option value="Folk Instruments">Folk Instruments</option>
            <option value="Keyboards and MIDI">Keyboards and MIDI</option>
            <option value="Drums and Percussion">Drums and Percussion</option>
            <option value="Amps">Amps</option>
            <option value="Pro-Audio">Pro-Audio</option>
            <option value="Effects">Effects</option>
            <option value="USED and DEMO">USED and DEMO</option>
          </select>
        </div>
        <div className="text-gray-800">
          <Link to="/product/brands">See More</Link>
        </div>
      </div>

      {/* Product Display with Pagination */}
      <div className="p-2 bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-5 lg-grid-cols-5 gap-5">
          {displayedProducts.map((item: Product, id: number) => (
            <div className="" key={id}>
              <ProductCard
                imageUrl={item.productImage[0]}
                productName={item.productName}
                productPrice={item.productPrice}
                onBuyNow={() => handleBuyNow(item)}
              />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 p-2 rounded ${currentPage === index + 1 ? "bg-red-500 text-white" : "bg-gray-300"}`}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="ml-4 bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <Curbside />
      <Footer />
    </div>
  );
}

export default Allaitem;
