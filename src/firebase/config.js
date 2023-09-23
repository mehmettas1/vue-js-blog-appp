import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCisBQmyiAt2FRgLMDa37suWyztFtY0_DA",
  authDomain: "blog-vue3-new.firebaseapp.com",
  projectId: "blog-vue3-new",
  storageBucket: "blog-vue3-new.appspot.com",
  messagingSenderId: "961116365060",
  appId: "1:961116365060:web:e26c2211b7a92c5059b051",
};

const fb = initializeApp(firebaseConfig);

export { fb };
