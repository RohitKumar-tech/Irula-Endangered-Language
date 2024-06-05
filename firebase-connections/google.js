  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click",function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href= "/mainpage/main.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    })