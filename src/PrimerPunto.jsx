import { useState } from "react";

const PrimerPunto = () =>{

    const [hora, setHoras] = useState('');

    const seg2hours = () =>{

        const H = parseInt(hora,10)
        const horas = Math.floor(H/3600)
        const minutes = Math.floor((H%3600)/60)
        const seconds = Math.floor(H%60)

        console.log(`La hora es: ${horas} horas, ${minutes} minutos y ${seconds} segundos`)
    }

    return(
        <>
            <h1>Primer Punto</h1>
            <span>Ingrese la hora en segundos</span>
            <br></br>
            <br></br>
            <input type="text" value={hora} onChange={(e) => setHoras(e.target.value)}placeholder="Hora en segundos"/>
            <br></br>
            <br></br>
            <button onClick={() => seg2hours()}>Calcular</button>
        </>
    )
}

export default PrimerPunto
