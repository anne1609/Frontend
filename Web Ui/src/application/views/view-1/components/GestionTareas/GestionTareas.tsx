import "./GestionTareas.css"
import Formulario2 from "./Formulario2";
import Tareas from "./Tareas";




function GestionTareas() {
    return (
       <section className="GestionTareasContainer"> 
            <section className="GestionTareas" >
                <Tareas/>
            </section>
            <section className="GestionTareasForm">
                <Formulario2/>
            </section>
        </section>
    );
  }
  
  export default GestionTareas;
  