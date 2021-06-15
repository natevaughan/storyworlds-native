import Firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyBQFZEoCAimEYDMOV0LO3ydfOvernHKhps",
    authDomain: "storyworlds-if.firebaseapp.com",
    projectId: "storyworlds-if",
    storageBucket: "storyworlds-if.appspot.com",
    messagingSenderId: "806335699843",
    appId: "1:806335699843:web:b236f3de41c7fbc7f174b6",
    measurementId: "G-13V3HVL0FQ"
};

let app = Firebase.initializeApp(firebaseConfig);

// exports
export const db = app.firestore();