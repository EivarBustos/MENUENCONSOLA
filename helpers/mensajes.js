const color = require('colors');
console.log();

const mostrarMenu=()=>{
   return new Promise(resolve =>{
        console.log("===============================".green);
        console.log("=====seleccione una opcion=====".rainbow);
        console.log("===============================\n".green);

        console.log(`${'1. '.green} Crear una tarea `)
        console.log(`${'2. '.green} Listar  tareas `)
        console.log(`${'3. '.green} Listar tareas completadas`)
        console.log(`${'4. '.green} Listar tareas pendientes`)
        console.log(`${'5. '.green} Completar tarea `)
        console.log(`${'6. '.green} Borrar una tarea `)
        console.log(`${'0. '.green} Salir :)\n `)

        const readline = require('readline').createInterface({
            input:process.stdin,
            output: process.stdout
        });

        readline.question('Selecciones una opcion: ', (opt)=>{
            readline.close();
            resolve(opt);
        })
    
    });

}

const pausa =()=>{
    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            output: process.stdout
        });
        readline.question(`\nPresione ${'Enter'.green} para continuar...\n `, (opt)=>{
        readline.close();
        resolve();
         })

    });
  
}
module.exports= {
    mostrarMenu,
    pausa
}
