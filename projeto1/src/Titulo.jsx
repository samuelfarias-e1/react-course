import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Titulo({ cor }){
    // eslint-disable-next-line no-unused-vars
    const [texto, setTexto] = useState("titulo inicial");
    const [inputText, setInputtext] = useState("");

    function clicou(){
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{color:cor}}>{texto}</h1>
            <input value={inputText} onChange={(e)=>{setInputtext(e.target.value)}} type="text" name="" id="" />
            <button onClick={clicou} >Mudar</button>
        </div>
    )
}

export default Titulo
