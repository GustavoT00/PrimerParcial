import { useState } from "react"

const SegundoPunto = () =>{


    const [Llamada, setLlamada] = useState('');

    const valorLlamada = () =>{

        const MinLlamada = parseInt(Llamada)
        const Min = (MinLlamada)

        let ValorNllamada = 100
        var valorAdicional = 0

        if (Min > 3){

            valorAdicional = Min - 3
            ValorNllamada += valorAdicional *50

            console.log('El valor de su llamada fue de: ', ValorNllamada)
        }else {
            console.log('El valor de su llamada fue de: ', ValorNllamada)
        }

    }

    return(
        <>
            <h1>Segundo Punto</h1>
            <span>Ingrese la cantidad de minutos por llamada (solo minutos)</span>
            <br></br>
            <br></br>
            <input type="text" value={Llamada} onChange={(e) => setLlamada(e.target.value)}placeholder="Minutos de llamada"/>
            <br></br>
            <br></br>
            <button onClick={() => valorLlamada()}>Calcular valor llamada</button>
        </>
    )
}

export default SegundoPunto