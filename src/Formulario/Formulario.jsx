
import{useNavigate} from "react-router-dom"

import basedatos from "../utils/basedatos.json"

import"../Formulario/Formulario.css"
import Swal from "sweetalert2"
import { useState } from "react"

export function Formulario() {


  const[vercedula,guardarCedula]=useState("")


  let enrutador=useNavigate() //activo el enrutador entre componentes

  function procesarFormulario(evento){
    evento.preventDefault()


    let busqueda=basedatos.find(function(usuario){
      return(vercedula==usuario.documento)
    })

    console.log(busqueda)

    if(busqueda==undefined){

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "verifica tus datos!",
      });
    } else {

      enrutador("/home",{state:{dato:busqueda}})

    }
 

  }


  return (
    <>
      <section className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <img src="../../src/assets/logotipo.png" alt="logo" />

            <form className="border rounded p-4 mt-5 fondo2 text-white" onSubmit={procesarFormulario}>
              <h2>CUIDADO EN CASA APP</h2>

              <div class=" input-group mb-3 mt-5  ">
                <span class="input-group-text " id="basic-addon1">
                  <i class="bi bi-person-vcard"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Numero de cedula "
                  id="identificacion"
                  onChange={function (evento) {
                    guardarCedula(evento.target.value);
                  }}
                />
              </div>

              <div class=" input-group mb-3 mt-5 ">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-file-lock-fill"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Contraseña"
                  id="Contraseña"
                  onChange={function (evento) {
                    guadarContraseña(evento.target.value);
                  }}
                />
              </div>


              <div class=" input-group mb-3 mt-5 ">
                <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-building"></i>
                </span>
                <select class="form-select">
                                <option selected>Selecciona tu ciudad</option>
                                <option value="1">Medellin</option>
                                <option value="2">Cali</option>
                                <option value="3">Bogota</option>
                                </select>
              </div>
              

              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
