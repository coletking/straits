import React, { useState, useEffect, useCallback } from "react";
import { TimestampDate } from "timestamp-date";
import { getPosts, getusers } from "../Services/GetUser.service";
import { User } from "../Model/user";
import { getTimeAgo } from "../Services/Utility";
import AdminHeader from "../component/AdminHeader";
import { Link } from "react-router-dom";
import { Product } from "../Model/prodduct";
import Modal from "../component/Modal";
import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { database } from "../firebase";
const UserTable = () => {
  const [users, setUsers] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [debouncedScroll, setDebouncedScroll] = useState<number | null>(null);
  const [item,setitem] =  useState<Product>()
  const [show, setShow] = useState(false);
  const [search, setsearch] = useState("");

  useEffect(() => {
    // Fetch data only once on initial render
    fetchUsers(1);
  }, []);

  const timestampDate = new TimestampDate();

  const fetchUsers = async (page?: number) => {
    if (isFetching) return; // Prevent multiple calls while fetching
    setIsFetching(true);
    setIsLoading(true);

    try {
      getPosts("", (result: Product[]) => {
        const queryuser = timestampDate.parseTimestampToDate(result) as any;
        setUsers((prevUsers) => [...prevUsers, ...queryuser]);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >= document.body.offsetHeight - 50 &&
      hasMore &&
      !isFetching // Only fetch if not already fetching
    ) {
      if (debouncedScroll !== null) {
        clearTimeout(debouncedScroll);
      }

      const timeout = setTimeout(() => {
        fetchUsers(users.length / 10 + 1);
      }, 200); // Debounce scroll event
      setDebouncedScroll(timeout as any);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debouncedScroll !== null) {
        clearTimeout(debouncedScroll);
      }
    };
  }, [hasMore, isFetching, users.length, debouncedScroll]);

  const Togglemodalview = useCallback(
    (item:Product) => () => {
  
      setitem(item as Product);
      handleOpen();
    },
    []
  );


  const handleOpen = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDeletePost = async() => {
    const d = query(collection(database, 'posts'), where('id', '==', item?.id));
    const docSnap = await getDocs(d);
    docSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    setUsers([])
    fetchUsers(1)
    handleClose()
  return
  }

  return (
    <>
      <AdminHeader />
      <Modal show={show} onClose={handleClose} onDelete={handleDeletePost} item={item as Product}>
        <div className="p-2">
        <div className="mb-4">
            <strong>Product Code:</strong> {item?.productCode}
          </div>
          <div className="mb-4">
            <strong>Product Name:</strong> {item?.productName}
          </div>
          <div className="mb-4">
            <strong>Category:</strong> {item?.productCategory}
          </div>

          <div className="mb-4">
            <strong>Product Price:</strong> {item?.productPrice}
          </div>

          <div className="mb-4">
            <strong>Product discount:</strong> {item?.productDiscount}
          </div>
    
          <div className="mb-4">
            <strong>Description:</strong> 
            <div dangerouslySetInnerHTML={{ __html: item?.productDescription as string }} />
          </div>

          <div className="mb-4">
            <strong>Image:</strong> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
           {item?.productImage.map((val, i)=>{
              return(
                <div className="" key={i}>
                     <img src={val} alt="" className="h-[40vh]"/>
                </div>
              )
            }) }
           </div>
         
          </div>
          {/* Add your media viewer and other components here */}
        </div>
      </Modal>
      <div className="bg-[#232D3F] min-h-[100vh] pt-6">
        <div className="mb-5  gap-1 mx-4 item-center flex item-center justify-between">
          <div className="text-white flex gap-1 items-center text-[1rem]">
            Search
            <input
              type="text"
              id="email"
              onChange={(e) => setsearch(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="filter by : First Name, Last Name. Email Address"
            />
          </div>
        </div>
        <div className="flex justify-start ml-3">
          <Link
            to="/new/product"
            className="bg-[#febc5a] hover:bg-[#58401d] text-white font-bold py-2 px-4 rounded text-center"
          >
            Create Product
          </Link>
        </div>
        <div className="container overflow-y-auto p-2" onScroll={handleScroll}>
          <table className="w-[100%] text-white ">
            <thead className="">
              <tr className="text-start text-[0.8rem] md:text-sm border border-[#43424285]">
                <th className="text-start text-[0.8rem] md:text-sm py-3 px-4">
                  S/N
                </th>
                <th className="text-start text-[0.8rem] md:text-sm">Code</th>
                <th className="text-start text-[0.8rem] md:text-sm">
                  Product name
                </th>
                <th className="text-start text-[0.8rem] md:text-sm hidden md:table-cell">
                  Category
                </th>
                {/* Hide Email and Status columns on mobile screens */}
                <th className="text-start text-[0.8rem] md:text-sm hidden md:table-cell">
                  Amount
                </th>
                <th className="text-start text-[0.8rem] md:text-sm hidden md:table-cell">
                  discount
                </th>

                <th className="text-start text-[0.8rem] md:text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={7} className="">
                    No product found.
                  </td>
                </tr>
              ) : (
                users
                  .filter((value) => {
                    if (
                      value.productCode
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return value;
                    } else if (
                      value.productCategory
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return value;
                    } else if (
                      value.productName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((user, i) => (
                    <tr key={i + 1} className="border border-[#43424285]">
                      <td className="py-3 px-4 text-[0.8rem] md:text-sm">
                        {i + 1}
                      </td>
                      {/* <td className="text-[0.8rem] md:text-sm">
                        {user.createdAt ? getTimeAgo(user.createdAt) : ""}
                      </td> */}
                      <td className="text-[0.8rem] md:text-sm">
                        {user.productCode}
                      </td>
                      {/* Hide Email and Status columns on mobile screens */}
                      <td className="text-[0.8rem] md:text-sm">
                        {user.productName}
                      </td>
                      <td className="hidden md:table-cell text-[0.8rem] md:text-sm">
                        {user.productCategory}
                      </td>
                      <td className="hidden md:table-cell text-[0.8rem] md:text-sm">
                        {user.productPrice}
                      </td>
                      <td className="hidden md:table-cell text-[0.8rem] md:text-sm">
                        {user.productDiscount ? user.productDiscount : 0}
                      </td>

                      <td className=" text-[0.8rem] md:text-sm">
                        <button onClick={Togglemodalview(user as Product)}>View</button>
                      </td>
                    </tr>
                  ))
              )}
              {isLoading && (
                <tr>
                  <td colSpan={7} className="text-center">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
