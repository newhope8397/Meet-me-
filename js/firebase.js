
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth,
    setPersistence,
    browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCm2E61Ek-fY5xxAx48cIthDEsr05ajDds",
    authDomain: "meet-me-1ee42.firebaseapp.com",
    projectId: "meet-me-1ee42",
    storageBucket: "meet-me-1ee42.firebasestorage.app",
    messagingSenderId: "82016417313",
    appId: "1:82016417313:web:097470da112ef3b1699560"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
    .catch(error => {
        console.error(
            "Could not enable login persistence:",
            error
        );
    });

export {
    app,
    auth
};
