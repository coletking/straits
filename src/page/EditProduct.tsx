import React, { Suspense, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import "react-quill/dist/quill.snow.css"; // Import ReactQuill's CSS
import { Product } from "../Model/prodduct";
import { database } from "../firebase";
import AdminHeader from "../component/AdminHeader";
const ReactQuill = React.lazy(() => import("react-quill"));

function EditProduct() {
  const { id } = useParams(); // Get the product ID from the route
  const [product, setProduct] = useState<Product | null>(null);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [productDescription, setProductDescription] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const maxSizeBytes = 10 * 1024 * 1024; // 10 MB limit

    const validFiles = files.filter((file) => file.size <= maxSizeBytes);
    if(files.length >4 ){
      setImages([])
      return toast.info("max 4 image only")
    }
    if (validFiles.length < files.length) {
      toast.info("Some files were too large and were ignored.");
    }

    setImages((prevImages) => [...prevImages, ...validFiles]);
  };

  const uploadFiles = async () => {
    const storage = getStorage();
    const imageUrls: string[] = [];
    if(images.length >4 ){
      return toast.info("max 4 image only")
    }
    
    for (const image of images) {
      const fileRef = ref(storage, `${Date.now()}_${image.name}`);
      const uploadTask = uploadBytesResumable(fileRef, image);

      await new Promise<void>((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // You could update progress here if needed
          },
          (error) => {
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(fileRef);
            imageUrls.push(downloadURL);
            resolve();
          }
        );
      });
    }

    return imageUrls;
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const newImageUrls = images.length > 0 ? await uploadFiles() : product?.productImage || [];

    const imageUrls = await uploadFiles() as string[];
    if(imageUrls.length <=0){
      setLoading(false)
      return toast.error("max 4 image allowed")
    }
    const data: Partial<Product> = {
      productName: productName !== "" ? productName : product?.productName,
      productDescription: productDescription || product?.productDescription,
      productCategory: productCategory !== "" ? productCategory : product?.productCategory,
      productPrice: productPrice !== "" ? parseInt(productPrice) : product?.productPrice,
      quantity: quantity !== "" ? parseInt(quantity) : product?.quantity,
      productDiscount: discount !== "" ? parseInt(discount) : product?.productDiscount,
      productImage: newImageUrls as string[], // Combine old and new image URLs
    };

    try {
      if (id) {
        await updateDoc(doc(database, "products", id), data);
        toast.success("Product updated successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async () => {
    if (id) {
      const docRef = doc(database, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const productData = docSnap.data() as Product;
        setProduct(productData);

        // Set the initial form values
        setProductName(productData.productName);
        setProductCategory(productData.productCategory);
        setProductPrice(productData.productPrice.toString());
        setQuantity(productData.quantity.toString());
        setDiscount(productData.productDiscount.toString());
        setProductDescription(productData.productDescription || "");
      } else {
        toast.error("Product not found");
      }
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="bg-gray-900">
      <AdminHeader />
      <div className="flex gap-5 pl-8 flex-wrap justify-start text-white">
        <Link to={`/dashboard/product`}>
          <p
            className={`cursor-pointer text-sm md:text-lg capitalize font-bold  text-[#febc5a]  underline`}
          >
            Back
          </p>
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 py-9">
        <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-[35rem]">
          <h1 className="text-white text-2xl mb-5">Edit Product</h1>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Product Description</label>
            <Suspense fallback={<div>Loading...</div>}>
              <ReactQuill
                value={productDescription}
                onChange={(value) => setProductDescription(value)}
                className="bg-gray-100 text-black"
              />
            </Suspense>
          </div>

          <div className="relative mb-3">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="product-category"
              onChange={(e) => setProductCategory(e.target.value)}
              value={productCategory}
            >
              <option value="">Select category</option>
              <option value="Guitars">Guitars</option>
              <option value="Folk Instruments">Folk Instruments</option>
              <option value="Keyboards and MIDI">Keyboards and MIDI</option>
              <option value="Drums and Percussion">Drums and Percussion</option>
              <option value="Amps">Amps</option>
              <option value="Pro-Audio">Pro-Audio</option>
              <option value="Effects">Effects</option>
              <option value="USED and DEMO">USED and DEMO</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <input
            type="text"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />

          <input
            type="tel"
            placeholder="Discount Amount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />

          <input
            type="tel"
            placeholder="Quantity Number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Product Images</label>
            <input
              className="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              multiple
              onChange={handleFileChange}
           
            />
            <p className="mt-1 text-sm text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          </div>

          <button
            onClick={handleUpdate}
            disabled={loading}
            className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
          >
            {loading ? "Please wait" : "Update Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
