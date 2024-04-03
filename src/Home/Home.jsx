export function Home() {
  let paciente = "Carlos Pérez";

  return (
    //zona de renderizado
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
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <h5>
              PACIENTE {basedatos[0].nombreUsuario}, estas son tus proximas
              citas:
            </h5>
          </div>
        </div>
      </section>
      <section>
        <section className="container my-5">
          <div className="row row-cols-1 row-cols-md-3">
            {basedatos[0].citasMedicas.map(function (cita) {
              return (
                <div className="col">
                  <div className="card h-100 shadow px-2">
                    <h3>{cita.especialidad}</h3>
                    <h4>{cita.fecha}</h4>
                    <h4>{cita.direccion}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}
