import { useState } from "react";
import { Link } from "react-router-dom";


import axios from "axios";

import "../../assets/styles/mainRegister/style.css";

function RegisterPage() {

    const [product, setProduct] = useState("");
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const available = true;

    const handleProductChange = (event) => {
        setProduct(event.target.value);
    };

    const handleValueChange = (event) => {
        setValue(event.target.value);     
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);  
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        register(product, description, value, available);
    };

    const register = async(product, description, value, available) => {
        try {
            await axios.post('https://oakchallenge-api.vercel.app/', {
            product: product,
            description: description,
            value: value,
            available: available
        })
        console.log("sucesso ao registrar");
        } catch {
            console.error(`Erro ao registrar produto`);
        }
    };



    return (
        <>
            <h1>Cadastrar novo Produto</h1>
        
            <form onSubmit={handleSubmit}>
                {
                    successMessage ? (
                        <Link to={"/"} target="_self">
                            <p className="successMessage">Dados Cadastrados, clique para voltar</p>
                        </Link>
                    ) : null
                }
                <label>Nome do Produto:</label>
                <input
                    type="text"
                    value={product}
                    onChange={handleProductChange}
                    required
                >
                </input>
                <label>Valor do Produto:</label>
                <input
                    type="number"
                    value={value}
                    onChange={handleValueChange}
                    required
                >
                </input>
                <label>Descrição do Produto:</label>
                
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                >
                </textarea>

                
                <button 
                    type="submit"
                    onClick={() => setSuccessMessage(true)} 
                >   Enviar
                </button>


            </form>
           
        </>
    )
}

export default RegisterPage;
