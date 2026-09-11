import { app } from "./firebase.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const db = getFirestore(app);


export { db };
