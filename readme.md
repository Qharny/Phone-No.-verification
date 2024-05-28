Certainly! Below is a simple `README.md` file for the Firebase Phone Authentication project.

---

# Firebase Phone Authentication

This project demonstrates how to implement Firebase phone authentication in a web application. Users can enter their phone number, receive a verification code via SMS, and verify the code to authenticate.

## Prerequisites

- Firebase project set up
- Firebase configuration (API key, auth domain, etc.)
- Basic understanding of HTML, CSS, and JavaScript

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/qharny/firebase-phone-auth.git
   cd firebase-phone-auth
   ```

2. **Update Firebase Configuration:**

   Replace the Firebase configuration in `script.js` with your own Firebase project configuration:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. **Serve the project:**

   Use any web server to serve the HTML file. You can use the Live Server extension in Visual Studio Code or a simple HTTP server in Python:

   ```bash
   python -m http.server
   ```

   Open `http://localhost:8000` in your browser.

## Usage

1. **Enter Phone Number:**

   - Open the web application in your browser.
   - Enter your phone number in the format `+1234567890`.

2. **Send Verification Code:**

   - Click the "Send Verification Code" button.
   - A reCAPTCHA verification will be triggered, and an SMS with the verification code will be sent to the provided phone number.

3. **Enter Verification Code:**

   - Enter the verification code received via SMS in the input field.

4. **Verify Code:**

   - Click the "Verify Code" button.
   - If the code is correct, the user will be signed in successfully.

## File Structure

```plaintext
.
├── index.html
├── script.js
└── README.md
```

- **index.html**: The HTML file containing the structure of the web application.
- **script.js**: The JavaScript file containing Firebase configuration and authentication logic.
- **README.md**: This README file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or fixes.

<!-- ## License

This project is licensed under the MIT License. -->

## Contact

For any questions or issues, please open an issue in the repository or contact the project maintainer.

---