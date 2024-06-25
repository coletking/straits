import React, { Suspense, useState } from "react";
import { toast } from "react-toastify";
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import AdminHeader from "../component/AdminHeader";
import "react-quill/dist/quill.snow.css"; // Import ReactQuill's CSS
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getRandomString } from "../Services/Utility";
import { Product } from "../Model/prodduct";
import { database } from "../firebase";

const ReactQuill = React.lazy(() => import("react-quill"));

function CreateProduct() {
  const [productname, setproductname] = useState<string>("");
  const [productcategory, setselectedCategory] = useState<string>("");
  const [productprice, setproductuctprice] = useState<string>("");
  const [Quantity, setquantity] = useState("");
  const [discount, setdiscountamount] = useState<string>("");
  const [loading, setloading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [progress, setUploadProgress] = useState<number>(0);
  const [productDescription, setProductDescription] = useState<string>("");
  
  const handleFilePassportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const maxSizeBytes = 10 * 1024 * 1024; // 10 MB limit

    const validFiles = files.filter((file) => file.size <= maxSizeBytes);

    if(files.length >4 ){
      setImages([])
      return toast.info("max 4 image only")
    }
    
    if (validFiles.length < files.length) {
      toast.info("Some files were too large and were ignored.");
      return
    }

    setImages((prevImages) => [...prevImages, ...validFiles]);
  };

  const uploadFiles = async () => {
    const storage = getStorage();
    const urls: string[] = [];
    if(images.length >4 ){
      return toast.info("max 4 image only")
    }
    
    for (const image of images) {
      const fileRef = ref(storage, `${Date.now()}_${image.name}`);
      const uploadTask = uploadBytesResumable(fileRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          toast.error("Error uploading files");
        },
        () => {
          // Upload complete
        }
      );

      await uploadTask;
      const downloadURL = await getDownloadURL(fileRef);
      urls.push(downloadURL);
    }

    return urls;
  };

  console.log(productprice)

  const handleRegister = async (e: React.FormEvent) => {
    
    e.preventDefault();

    const incompleteData =
      productDescription === "" ||
      productcategory === "" ||
      productname === "" ||
      productprice === "";

    if (incompleteData) {
      toast.info("Please provide all required information");
      return;
    }

    setloading(true)
    const imageUrls = await uploadFiles() as string[];
    if(imageUrls.length <=0){
      setloading(false)
      return toast.error("max 4 image allowed")
    }

    const data: Product = {
      id: getRandomString(35, "qwertyuiopasdfhjklzxcvbnmQWERTYUIOPASDFHJKLZXCVBNM234567890"),
      productName: productname,
      productDescription: productDescription,
      productCode: getRandomString(5, "234567890"),
      productCategory: productcategory,
      productPrice: parseInt(productprice),
      quantity: Quantity !== "" ? parseInt(Quantity) : 0,
      productDiscount: discount !== "" ? parseInt(discount) : 0,
      productImage: imageUrls as string[],
      isActive: true,
      isOutOfStock: false,
      createdAt: serverTimestamp(),
    };

    try {
      await setDoc(doc(database, "products", data.id), data);
      toast.success("Product created successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="bg-gray-900">
      <AdminHeader />
      <div className="flex gap-5 pl-8 flex-wrap justify-start text-white">
        <Link to={`/dashboard/users`}>
          <p
            className={`cursor-pointer text-sm md:text-lg capitalize font-bold  text-[#febc5a]  underline`}
          >
            Back
          </p>
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 py-9">
        <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-[35rem]">
          <h1 className="text-white text-2xl mb-5">Create Product</h1>
          <input
            type="text"
            placeholder="Product Name"
            value={productname}
            onChange={(e) => setproductname(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Product Description</label>
            <Suspense fallback={<div>Loading...</div>}>
              <ReactQuill
                value={productDescription}
                onChange={setProductDescription}
                className="bg-gray-100 text-black"
              
              />
            </Suspense>
          </div>

          <div className="relative mb-3">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(event) => setselectedCategory(event.target.value)}
              required={true}
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
            placeholder="Price"
            value={productprice}
            onChange={(e) => setproductuctprice(e.target.value)}
            required={true}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />

          <input
            type="text"
            placeholder="Discount Amount"
            value={discount}
            onChange={(e) => setdiscountamount(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          
          <input
            type="tel"
            placeholder="Quantity Number"
            value={Quantity}
            onChange={(e) => setquantity(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Product Images
            </label>
            <input
              className="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={handleFilePassportChange}
              multiple
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
          >
            {loading ? "Please wait" : "Create Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
