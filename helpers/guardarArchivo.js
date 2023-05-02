
import fs from 'fs';
const archivo='./db/data.json';

export const guardarDB =(data)=>{
       //data es lo que quiero mandar 
    //JSON.STRINGIFY Convierte el arreglo a string 
    fs.writeFileSync(archivo, JSON.stringify(data));
}

export const leerDB =()=>{
    //preguntar si el archivo exite 
    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info );
    //console.log(data)
    return data;

}


