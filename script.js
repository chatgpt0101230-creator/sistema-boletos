*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

body{
  background:#0f172a;
  color:white;
}

.hidden{
  display:none;
}

.container{
  width:100%;
  max-width:400px;
  margin:auto;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:20px;
}

.login-box{
  background:white;
  color:black;
  padding:30px;
  border-radius:15px;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:15px;
}

.login-box input,
.formulario input,
.formulario select,
.formulario textarea{
  padding:15px;
  border-radius:10px;
  border:none;
  font-size:16px;
}

button{
  padding:15px;
  border:none;
  border-radius:10px;
  background:#2563eb;
  color:white;
  cursor:pointer;
  font-size:16px;
}

#mensagem{
  text-align:center;
  color:red;
}

.painel{
  padding:20px;
  max-width:1200px;
  margin:auto;
}

header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
}

.formulario{
  display:grid;
  gap:15px;
  margin-bottom:30px;
}

.lista{
  background:white;
  color:black;
  padding:20px;
  border-radius:15px;
}

.boleto{
  border:1px solid #ccc;
  padding:15px;
  border-radius:10px;
  margin-bottom:15px;
}
