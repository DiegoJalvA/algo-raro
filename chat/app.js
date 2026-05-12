import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onChildAdded
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyATs99uThauo5j_ss1qgBx-6RDx-kZ5Px4",

    authDomain: "chat-9218a-f9f59.firebaseapp.com",

    databaseURL: "https://chat-9218a-f9f59-default-rtdb.firebaseio.com/",

    projectId: "chat-9218a-f9f59",

    storageBucket: "chat-9218a-f9f59.firebasestorage.app",

    messagingSenderId: "282203482397",

    appId: "1:282203482397:web:10993120ac21aca75d59f4"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const mensajesRef = ref(db, "mensajes");

const mensajes = document.getElementById("mensajes");

const texto = document.getElementById("texto");

window.enviar = function () {

    if (texto.value.trim() === "") return;

    push(mensajesRef, {
        texto: texto.value
    });

    texto.value = "";
};

onChildAdded(mensajesRef, (data) => {

    const p = document.createElement("p");

    p.textContent = data.val().texto;

    mensajes.appendChild(p);

    mensajes.scrollTop = mensajes.scrollHeight;
});