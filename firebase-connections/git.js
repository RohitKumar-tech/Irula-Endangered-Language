  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth,GithubAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"

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
  const provider = new GithubAuthProvider();

  const githubLogin = document.getElementById("github-login-btn");
  githubLogin.addEventListener("click",function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})