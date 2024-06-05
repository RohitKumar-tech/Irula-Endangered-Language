  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth,TwitterAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configurationw
  const firebaseConfig = {
    apiKey: "AIzaSyBzpENwuyX-uO7yzikMfXkxl-nQln_kMtI",
    authDomain: "spotify-bb627.firebaseapp.com",
    projectId: "spotify-bb627",
    storageBucket: "spotify-bb627.appspot.com",
    messagingSenderId: "291038167718",
    appId: "1:291038167718:web:bb2c9b60ee4216fa23ea67"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new TwitterAuthProvider();

  const twitterLogin = document.getElementById("twitter-login-btn");
  twitterLogin.addEventListener("click",function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = TwitterAuthProvider.credentialFromResult(result);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  })