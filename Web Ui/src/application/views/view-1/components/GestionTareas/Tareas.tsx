
import "./GestionTareas.css"
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';

import DeleteIcon from '@mui/icons-material/Delete';



function Tareas() {
    return (
            <section className="Tareas" >
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tareas</th> 
                                <th></th> 
                                <th></th> 
                                <th></th> 
                                <th><button>Crear</button></th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tarea 1</td>
                                <td><button>Detalle</button></td>
                                <td><button>Modificar</button></td>
                                <td><button>Borrar</button></td>
                                <td><button>Entregar</button></td>
                            </tr>
                            <tr>
                                <td>Tarea 2</td>
                                <td><IconButton aria-label="see"> <VisibilityIcon />  </IconButton></td>
                                <td><IconButton aria-label="edit"> <EditIcon />  </IconButton></td>
                                <td><IconButton aria-label="delete"> <DeleteIcon />  </IconButton></td>
                                <td><IconButton aria-label="send"> <SendIcon />  </IconButton></td>
                            </tr>
                            <tr>
                                <td>Tarea 3</td>
                                <td><button>Detalle</button></td>
                                <td><button>Modificar</button></td>
                                <td><button>Borrar</button></td>
                                <td><button>Entregar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
    );
  }
  
  export default Tareas;
  
