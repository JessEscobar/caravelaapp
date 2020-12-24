<template>
  <div id="contenido-registro">
    <header id="header-register">
      <h1>Prueba Caravela APP - Registro</h1>
    </header>

    <div id="datos-registro">
      <form v-on:submit.prevent="register_user" id="form-register" action="">
        <h2>DATOS DEL CLIENTE</h2>
        <div>
          <label for="">id_fiscal:</label>
          <input
            class="validar-datos"
            placeholder="Digite su ID Fiscal o Número de documento"
            type="text"
            v-model="form.id_fiscal"
            required
          />
        </div>
        <div>
          <label for="">empresa:</label>
          <input
            class="validar-datos"
            placeholder="Digite su empresa"
            type="text"
            v-model="form.empresa"
            required
          />
        </div>
        <div>
          <label for="">correo:</label>
          <input
            class="validar-datos"
            placeholder="Digite su correo electrónico"
            type="email"
            v-model="form.correo"
            required
          />
        </div>
        <div>
          <label for="">telefono</label>

          <input
            class="validar-datos"
            placeholder="Digite su número de telefono"
            type="text"
            v-model="form.telefono"
            required
          />
        </div>
        <div>
          <label for="">direccion:</label>
          <input
            class="validar-datos"
            placeholder="Digite su dirección"
            type="text"
            v-model="form.direccion"
            required
          />
        </div>
        <div>
          <label for="">contacto:</label>
          <input
            class="validar-datos"
            placeholder="Digite su contacto"
            type="text"
            v-model="form.contacto"
            required
          />
        </div>
        <div>
          <label for="">telefono contacto:</label>
          <input
            class="validar-datos"
            placeholder="Número de telefóno de su contacto"
            type="text"
            v-model="form.telefono_contacto"
            required
          />
        </div>
        <div>
          <label for="">mail contacto:</label>
          <input
            class="validar-datos"
            placeholder="Correo de su contacto"
            type="text"
            v-model="form.mail_contacto"
            required
          />
        </div>
        <div>
          <label for="">pais</label>
          <input
            class="validar-datos"
            placeholder="Digite el país"
            type="text"
            v-model="form.pais"
            required
          />
        </div>
        <div>
          <label for="">Contraseña</label>
          <input
            class="validar-datos"
            placeholder="Digite su contraseña"
            type="text"
            v-model="form.password"
            required
          />
        </div>
        <div>
          <label for="">Repita la Contraseña</label>
          <input
            class="validar-datos"
            placeholder="Repita su contraseña"
            type="text"
            v-model="con.vericontraseña"
            required
          />
        </div>
        
        <input class="submit" type="submit" value="Confirmar registro" />
      </form>
    </div>

    <footer>
      <span>Copyright © 2020 Jessid Escobar Prueba Desarrollador - Caravela</span>
      <span>Todos los Derechos Reservados</span>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "registro",
  data() {
    return {
      form: {
        "id_fiscal": "",
        "password":"",
        "empresa": "",
        "correo": "",
        "telefono": "",
        "direccion": "",
        "contacto": "",
        "telefono_contacto": "",
        "mail_contacto": "",
        "pais": "",
        "activo": false,
        "fecha_creacion": null,
        "fecha_inactivo": null       
      },
      con:{
            vericontraseña: "",
      }
    };
  },

  methods: {
    register_user() {
      let id_fiscal = this.form.id_fiscal;
      let password = this.form.password;
      let vericontraseña = this.con.vericontraseña;
      let empresa = this.con.empresa;
      let correo = this.form.correo;
      let telefono = this.form.telefono;
      let direccion = this.form.direccion;
      let contacto = this.form.contacto;
      let telefono_contacto = this.form.telefono_contacto;
      let mail_contacto = this.form.mail_contacto;
      let pais = this.form.pais;

      let self = this;

      if (password!=vericontraseña){
          alert("Las contraseñas no coinciden")
      }
      else{ 
          console.log(self)
        axios
        .post("https://caravelaapi.herokuapp.com/CrearClientes/", this.form)
        .then(result =>{
          console.log(result);
          
            // if (val===true){
            //     alert("Usuario Registrado correctamente")
            //     self.$router.push("/ingreso");
            // }
            // else{
            //     alert("El usuario ya se encuentra en la base de datos")
            // }

        })
        .catch(error => alert("El usuario ya existe en la base de datos"))
        
      }
    },
  },
};
</script>

<style>
#contenido-registro {
  width: 100%;
  height: 100vh;
  color: black;
  background-color: white;
}

#header-register{
    display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 10vh;
  padding: 10px 30px;
  box-sizing: border-box;
}

#datos-registro {
  background-color: rgb(223, 223, 223);
}

#datos-registro h2 {
  font-size: 2rem;
  margin: 0 auto 20px auto;
  text-transform: uppercase;
}

#datos-registro #form-register {
  width: 70%;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}

#form-register .submit {
  margin: 0;
  width: 50%;
  background-color: #3259fe;
  border: none;
  color: white;
  padding: 20px;
  border-radius: 5px;
  margin: 25px auto;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 550;
}

#form-register #submit:hover {
  background-color: #1631aa;
  cursor: pointer;
}

#form-register div {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

#form-register label {
  width: 40%;
  font-size: 1.3rem;
  text-align: left;
  padding: 10px;
}

#form-register input {
  width: 60%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: default;
  background-color: white;
  text-align: center;
  font-size: 1.4rem;
  color: black;
  outline: none;
  -webkit-appearance: none;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: auto;
}

footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  color: white;
  height: 5vh;
  font-style: italic;
}
</style>
