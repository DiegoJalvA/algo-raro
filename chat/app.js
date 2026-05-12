body{
    background:#0f0f0f;
    color:white;
    font-family:Arial;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    margin:0;
}

.chat{
    width:400px;
    background:#1b1b1b;
    border-radius:15px;
    padding:20px;
    box-shadow:0 0 20px rgba(0,0,0,.5);
}

#mensajes{
    height:450px;
    overflow-y:auto;
    padding:10px;
    border-radius:10px;
    background:#111;
    margin-bottom:15px;
}

.mensaje{
    background:#2a2a2a;
    padding:10px;
    border-radius:10px;
    margin-bottom:10px;
}

.mensaje strong{
    color:#4da6ff;
}

.mensaje p{
    margin:5px 0 0;
}

.input-area{
    display:flex;
    gap:10px;
}

input{
    flex:1;
    padding:12px;
    border:none;
    border-radius:10px;
    outline:none;
    background:#333;
    color:white;
}

button{
    padding:12px 18px;
    border:none;
    border-radius:10px;
    background:#4da6ff;
    color:white;
    cursor:pointer;
}
