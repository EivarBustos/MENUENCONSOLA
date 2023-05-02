import {Tarea} from './tarea.js'

class Tareas {
    _listado={};
    get listadoArr(){
        const listado =[];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea)

        })
        return listado;
    }

    constructor(){
        this._listado={}
    }

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto (){
        console.log();
        this.listadoArr.forEach((tarea, i)=>{
            //sacar el indice 
            const index = `${i + 1}`.green;
            //sacar el nombre de la tarea 
            const { desc, completado } = tarea;
            //mirar el estado de la tarea 
            const estado = ( completado ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ index } ${ desc } :: ${ estado }`);
        })
    }

    listarPendientesCompletadas(completadas = true){
        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {

            const { desc, completado } = tarea;
            const estado = ( completado) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completado ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completado.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completado ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        });   
    }


    borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }


    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completado) {
                tarea.completado = new Date().toISOString()
            }

        });

        this.listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completado = null;
            }

        });


    }
}



    export default Tareas;