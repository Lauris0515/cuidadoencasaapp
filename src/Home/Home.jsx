import "./Home.css"
import basedatos from "../utils/basedatos.json"


export function Home() {

    

    return (
   
      <>
        <section className="container mt-5 fondo">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3><span className="text-white">Bienvenido a cuidado en casa</span></h3>
              <h2 className="fondoletra">
                HOLA:<span className="text-white">{basedatos[0].nombre}</span>
              </h2>
              <img src={basedatos[0].foto} alt="" className="img-fluid w-25"/>
            </div> 
            <div className="col-12 col-md-6 text-end">
              <img className="img-fluid" src="../../src/assets/logotipo.png" alt="logo" />
            </div>



            </div>

          </section>
        <hr />
        <section>
        <section className="container">
          <div className="row-cols-1 row-cols-md-1 g-3">
            <div className="row row-cols-1 row-cols-md-1 g3">
              <div className="col">
                <br /><br />
              <h2>Este es tu tratamiento Actualmente:</h2>
              <br /><br />
              
                <div className="card h-100-shadow p-3">

                
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="card fondo p-5">
                    <h3>Medicamentos:</h3>
                    {basedatos[0].medicamentos}
                    </div>

                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card fondo p-5">
                    <h2>Citas Médicas:</h2>
                    {basedatos[0].visitasMedicas}
                    </div>

                  </div>
                  <div className="col-12 col-md-4">
                     <div className="card fondo p-5">
                     <h4>Visitas Enfermeria:</h4>
                      {basedatos[0].visitasEnfermeria}
                     </div>
                  </div>
                </div>
                </div>
              </div>
             </div>
             </div>
            </section> 
          </section> 
          </>
        );
 
      } 
