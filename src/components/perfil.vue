<template>
  <div id="perfil">
    <header id="header-perfil">
      <h1>Prueba Caravela APP - facturas</h1>
      <button v-on:click="logOut">Cerrar Sesión</button>
    </header>

    <div id="perfil-content">
      <div id="avatar">
        <h2>Hola estas son tus facturas!</h2>
      </div>
      <div id="ver-facturas">
       
      </div>      
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
  name: "facturas",
  data() {
    return {
       "facturanumero": "",
        "id_fiscal": "",
        "fecha_factura": "",
        "valor_factura": "",
        "moneda": "",
        "estado_factura": "",
        "pais_factura": ""
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("id_fiscal");
      localStorage.setItem("isAut",false);
      this.$router.push("/ingreso");
    }
  },
     beforeCreate: function(){
        let id_fiscal = localStorage.getItem("id_fiscal");
        let isAuth = localStorage.getItem("isAut");
        let self = this;
        if (isAuth==="true") {
          axios.get("https://caravelaapi.herokuapp.com/facturas/"+ id_fiscal)
            .then((result) => {
              let e =result.data;
              let count = e.length; 
              for (var i = 0 ; i<count ;i++){
                let facturas = document.getElementById('ver-facturas'),innerHTML;
                $('<span>--------------------------------------------------------------------------------------</span>').insertBefore('#ver-facturas');
                  $('<span>Numero de factura: '+e[i]['facturanumero']+'</span>').insertBefore('#ver-facturas');
                  $('<span>id_fiscal: '+e[i]['id_fiscal']+'</span>').insertBefore('#ver-facturas');
                  $('<span>fecha_factura: '+e[i]['fecha_factura']+'</span>').insertBefore('#ver-facturas');
                  $('<span>valor_factura: '+e[i]['valor_factura']+'</span>').insertBefore('#ver-facturas');
                  $('<span>moneda: '+e[i]['moneda']+'</span>').insertBefore('#ver-facturas');
                  $('<span>estado_factura: '+e[i]['estado_factura']+'</span>').insertBefore('#ver-facturas');
                  $('<span>pais_factura": '+e[i]['pais_factura']+'</span>').insertBefore('#ver-facturas');
                $('<span>--------------------------------------------------------------------------------------</span>').insertBefore('#ver-facturas');
                  console.log(e[i])  
              }
               
            })
            .catch(error => console.log(error))
        } else {
          this.$router.push('/ingreso');
        }
    }
};
</script>

<style>
#perfil {
  width: 100%;
  height: 100vh;
  color: black;
  background: white;
}

#header-perfil {
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

#perfil-content {
  background-color: rgb(223, 223, 223);
  height: 85vh;
  display: flex;
  flex-direction:column ;
  justify-content: center;
}

#perfil button {
  background-color: #3259fe;
  width: 200px;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 550;
}

#perfil button:hover {
  background-color: #1631aa;
  border: 4px #3259fe solid;
}

#perfil-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
}

#perfil h2 {
  font-size: 2rem;
  margin: 0 auto 20px auto;
  text-transform: uppercase;
  text-align: center;
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
