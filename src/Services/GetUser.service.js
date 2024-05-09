"use client";
import { database } from "../firebase";
import { TimestampDate } from "timestamp-date";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

const timestampDate = new TimestampDate();

export const getPost = async (id, cd) => {
  const querySnapshot = await getDocs(collection(database, "products"));

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    console.log(data)
    cd(data)
  });

};


export const Token = () => {
  const token = global.window.localStorage.getItem("token");
  return token;
};

// export const getuseraccount = (AccountNumber) => {
//   return new Promise((resolve) => {
//     const ref = database.collection("posts");
//     let reference = ref;

//     if (AccountNumber) {
//       reference = reference.where("AccountNumber", "==", AccountNumber);
//     }
//     reference.onSnapshot((queryproduct) => {
//       const items = [];
//       queryproduct.forEach((doc) => {
//         const item = doc.data();
//         item.id = doc.id;
//         items.push(timestampDate.parseTimestampToDate(item));
//       });

//       resolve(items);
//     });
//   });
// };

export const getusers = async (id, cb) => {
  const orderedQuery = query(
    collection(database, "user"),
    orderBy("created", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });

  cb(items);
};

export const getPosts = async (id, cb) => {
  const orderedQuery = query(
    collection(database, "products"),
    orderBy("createdAt", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
  
  cb(items);
};

export const getMessages = async (id, cb) => {
  const orderedQuery = query(
    collection(database, "contact"),
    orderBy("createdAt", "desc")
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
  
  cb(items);
};

export const getPostsByID = async (id, cb) => {
  const orderedQuery = query(
    collection(database, "products"),
    where("id", "==", id)
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
  cb(items);
};


export const getPostsbyCateories = async (category, cb) => {
  const orderedQuery = query(
    collection(database, "products"),
    where("category", "==", category)
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
 
  cb(items);
};

export const getVideoPost = async (car,cb) => {
  const orderedQuery = query(
    collection(database, "products"),
    where("fileType", "==", 'video')
  );
  const ref = await getDocs(orderedQuery);
  let reference = ref;
  const items = [];
  reference.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(timestampDate.parseTimestampToDate(item));
  });
 
  cb(items);
};
