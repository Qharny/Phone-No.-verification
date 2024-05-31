// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyDCDVqPquUEfCUSkq_3c12mdlSALofhcqc",
//   authDomain: "wanda-62696.firebaseapp.com",
//   projectId: "wanda-62696",
//   storageBucket: "wanda-62696.appspot.com",
//   messagingSenderId: "759649773016",
//   appId: "1:759649773016:web:fa4a708cb3ac57dca1bead"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Initialize the Recaptcha verifier
// window.recaptchaVerifier = new RecaptchaVerifier(
//   "recaptcha-container",
//   {
//     size: "invisible",
//     callback: function (response) {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       sendVerificationCode();
//     },
//   },
//   auth
// );

// // Function to send the verification code
// const sendVerificationCode = () => {
//   const phoneNumber = document.getElementById("phone-number").value;
//   const appVerifier = window.recaptchaVerifier;

//   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message
//       window.confirmationResult = confirmationResult;
//       document.getElementById("phone-number-container").style.display = "none";
//       document.getElementById("verification-code-container").style.display = "block";
//     })
//     .catch((error) => {
//       console.error("Error during signInWithPhoneNumber", error);
//     });
// };

// // Function to verify the code
// const verifyCode = () => {
//   const code = document.getElementById("verification-code").value;
//   window.confirmationResult
//     .confirm(code)
//     .then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       console.log("User signed in successfully:", user);
//     })
//     .catch((error) => {
//       console.error("Error during code verification", error);
//     });
// };

// // Attach event listeners to buttons
// document.getElementById("send-code-btn").addEventListener("click", sendVerificationCode);
// document.getElementById("verify-code-btn").addEventListener("click", verifyCode);



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithCredential, PhoneAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCDVqPquUEfCUSkq_3c12mdlSALofhcqc",
  authDomain: "wanda-62696.firebaseapp.com",
  projectId: "wanda-62696",
  storageBucket: "wanda-62696.appspot.com",
  messagingSenderId: "759649773016",
  appId: "1:759649773016:web:fa4a708cb3ac57dca1bead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
}, auth);

document.getElementById('send-code-btn').addEventListener('click', () => {
  const phoneNumber = document.getElementById('phone-number').value;
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      document.getElementById('phone-number-container').style.display = 'none';
      document.getElementById('verification-code-container').style.display = 'block';
    }).catch((error) => {
      // Error; SMS not sent
      alert(error.message);
    });
});

document.getElementById('verify-code-btn').addEventListener('click', () => {
  const code = document.getElementById('verification-code').value;
  confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    alert('User signed in successfully');
    // ...
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    alert(error.message);
  });
});
