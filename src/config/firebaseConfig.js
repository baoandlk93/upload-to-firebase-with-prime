import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAa03iyPIJT0lSZj7u6VQstssG_f9FH1oE",
  authDomain: "sale-car-management.firebaseapp.com",
  projectId: "sale-car-management",
  storageBucket: "sale-car-management.appspot.com",
  messagingSenderId: "1068668441562",
  appId: "1:1068668441562:web:01c85db68c360a897566e3",
  measurementId: "G-PPBCN4V9YQ"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;


