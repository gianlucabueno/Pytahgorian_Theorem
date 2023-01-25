import React, { useState } from "react";
import Button from "../Button";
import consumer from "./consumer";
import "./form.css"


const Form = () =>{
    const [leg_adj, setLeg_adj] = useState('');
    const [leg_opo, setLeg_opo] = useState('');
    const [hyp, setHyp] = useState('');
    const [results, setResults] = useState('');
    
    async function onSubmit(event){
        event.preventDefault()
        const data = {
            leg_adj,
            leg_opo,
            hyp
        }

        try{
            const response = await consumer.create(data)
            if(response.data.results)setResults(response.data.results)
        }catch(error){
            console.error(error)
        }
    }
    
    return(
        <div className="form">
            <div>
                <h2>Teorema de Pitágoras</h2>
            </div>
            <div >
                <form className="form-inside" onSubmit={onSubmit}>
                    <div className="input-number">
                        <label>Cateto Oposto</label>
                        <input type="number" name="oposto" onChange={(value) => setLeg_opo(Number(value.target.value))}/>
                    </div>
                    <div className="input-number">
                        <label>Cateto Adjacente</label>
                        <input type="number" name="adjacente" onChange={(value) => setLeg_adj(Number(value.target.value))}/>
                    </div>
                    <div className="input-number">
                        <label>Hipotenusa</label>
                        <input type="number" name="hipotenusa" onChange={(value) => setHyp(Number(value.target.value))}/>
                    </div>
                    <Button />
                </form>
            </div>

            {results && <div className="Retangle">
                <span>
                    Adjacente: {results.leg_adj}
                </span>
                <span>
                    Oposto: {results.leg_opo}
                </span>
                <span>
                    Hipotenusa: {results.hyp}
                </span>
                <span>
                    Resposta: {results.answer}
                </span>

            </div>}

        </div>
    );

}

export default Form;