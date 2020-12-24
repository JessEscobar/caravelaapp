<template>
  <div id="ingreso">
    <header>
      <h1>Prueba Caravela APP</h1>
    </header>
    <form v-on:submit.prevent="submitForm" id="form-login" action="">
        <input id="username" type="number" placeholder="Ingrese su usuario" autocomplete="off" v-model="form.id_fiscal">
        <input id="password" type="password" placeholder="Ingrese su contraseña" autocomplete="off" v-model="form.password">
        <input id="submit" type="submit" value="Iniciar Sesión" />
        <button id="to-register" v-on:click="register">Registrarse</button>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
 name: "ingreso",
  data() {
    return {
      form: { 
        id_fiscal: '',
        password: '',
      }
    };
  },
    methods: {
    submitForm() {
      let id_fiscal = parseInt(this.form.id_fiscal);
      let password = this.form.password;
      let self = this;
      // console.log(user);
      if (id_fiscal == "") {
        alert("Digita tu nombre de usuario");
      }
      else if(password == ""){
        alert("Digita tu contraseña");
      }
      else {     
        // axios.get("http://localhost:3000/clientes?"+"id_fiscal="+id_fiscal+"&"+"password="+password)
        axios.get("https://caravelaapi.herokuapp.com/clientes/"+id_fiscal)
          .then(result => {
            console.log(result);
            let count = result.data.entidad;
            console.log(count.length);
            if(count===0){
              alert("Usuario no Registrado");
            }
            else{
              let pass = result.data.entidad[0]['password'];
              let activo = result.data.entidad[0]['activo'];
              if (pass!=password){
                alert("Contraseña invalida");
              }
              else if (activo ===false){
                alert("Su solicitud de creación esta en proceso de activación")
              }
              else{
                alert("Usuario validado correctamente");
                localStorage.setItem("id_fiscal",id_fiscal);
                localStorage.setItem("isAut",true);
                this.$router.push("/facturas");
              }
            }
            
          })
        .catch(error => {
              alert("El usuario no se encuentra registrado");
          });
      }
    },
    register: function() {
      this.$router.push("/registro");
    }
  }
}
</script>

<style>
  *{
    font-family: system-ui;
    padding: 0;
    margin: 0;
  }
#app {
    width: 100%;
    height: 100vh;
    color: black;
    background-color: transparent;
    margin: auto;
    position: relative;
    animation: 14s ease 0s infinite alternate none running cambiar;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: 100%;
    height: 10vh;
    padding: 10px 30px;
    box-sizing: border-box;
    
  }
  #form-login{
    width: 100%;
    height: 80vh;
    background-color: transparent;
    color: black;
    align-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    justify-content: center;
    display: flex;
    flex-direction:column ;
    
  }
  #username,#password{
    height: 3.375rem;
    width: 50vh;
    line-height: 2.375rem;
    text-align: center;
    max-width: 30.75rem;
    min-width: 6.25rem;
    color: rgb(51, 51, 51);
    outline: none;
    font-size: 1.25rem;
    margin-bottom:10px ;
  }

  #submit{
    height: 3.375rem;
    width: 50vh;
    font-family: system-ui;
    font-size: 20px;
        background-color: rgb(51, 51, 51);
    border-width: 0.0625rem;
    border-style: solid;
    border-image: initial;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border-radius: 0.125rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    outline: 0px;
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    cursor: pointer;
    margin-bottom: 15px;
  }
  #to-register{
    height: 3.375rem;
    width: 50vh;
    font-family: system-ui;
    font-size: 20px;
    background-color: rgb(51, 51, 51);
    border-width: 0.0625rem;
    border-style: solid;
    border-image: initial;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border-radius: 0.125rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    outline: 0px;
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    cursor: pointer;

  }

  #submit:hover,#to-register:hover{
    transform: scale(1.1);
  }

  @keyframes cambiar {
    0%{
      background: gray;

    }
    
25% {
    background: rgb(65, 196, 222);
}

    50% {
        background: rgb(140, 199, 63);
    }

    75% {
        background: rgb(243, 211, 51);
    }

    100% {
        background: rgb(247, 142, 86);
    }
  }
  input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: auto;
}
</style>
