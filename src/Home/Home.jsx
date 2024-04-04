import "./Home.css"
import basedatos from "../utils/basedatos.json"


export function Home() {

  return (
   
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>
              <span className="fuente">Bienvenido a cuidado en casa</span>
            </h3>
            <h2 className="text-muted">
              HOLA <span className="fuente">{basedatos[0].nombreUsuario}</span>
            </h2>
            </div> 
          </div>
        </section>
      <hr />
      <section>
      <section className="container">
        <div className="row-cols-1 row-cols-md-1 g-3">
          <div className="row row-cols-md-3">
           {
            basedatos.map(function(paciente){

              return(
                <div className="col">
                  <div className="card h-100 shadow">
                  <div className="col my-5">
                    <div className="card h-100 shadow px-2">
                      <div>
                        <h3>{paciente.nombre}</h3>
                        <h3>{paciente.documento}</h3>
                        <h3>{paciente.foto}</h3>
                        <h3>{paciente.area}</h3>
                        <h3>{paciente.medicamentos}</h3>
                        <h3>{paciente.visitasEnfemeria}</h3>
                        <h3>{paciente.visitasMedicas}</h3>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              )

            })
           }
           </div>
           </div>
          </section> 
        </section> 
        </>
      );
      } 
