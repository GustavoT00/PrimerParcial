import { useState } from "react"

const TercerPunto = () =>{

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [hora, setHora] = useState('');

    const HoraNom = () =>{

        const HoraD = parseInt(hora)

        if(HoraD >= 1 && HoraD < 12){
            console.log(`Buenos Días ${nombre} ${apellido}`)
        }else if(HoraD >= 12 && HoraD < 17){
            console.log(`Buenas tardes ${nombre} ${apellido}`)
        }else if(HoraD >=17 && HoraD <= 23){
            console.log(`Buenas noches ${nombre} ${apellido}`)
        }else{
            console.log(`Hora invalida`)
        }
    }

    return (
        <>
            <h1>Tercer Punto</h1>
            <span>Escribe tu nombre y apellido en los campos de texto</span>
            <br></br>
            <br></br>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}placeholder="Nombre"/>
            <br></br>
            <br></br>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}placeholder="Apellido"/>
            <br></br>
            <br></br>
            <span>Escribe la hora en formato 24 horas</span>
            <br></br>
            <br></br>
            <input type="text" value={hora}onChange={(e) => setHora(e.target.value)}placeholder="Hora"/>
            <br></br>
            <button onClick={() => HoraNom()}>Saludo</button>
        </>
    )
}

export default TercerPunto