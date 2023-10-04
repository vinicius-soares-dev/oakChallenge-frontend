import { useEffect, useState} from "react";


import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";


import "../../assets/styles/mainHome/style.css"
import { Link } from "react-router-dom";

function Home() {

    const [products, setProducts] = useState([]);
    const [createProduct, setCreateProduct] = useState(false);

    useEffect(() => {
        axios.get('https://oakchallenge-api.vercel.app/')
            .then(function(response) {
                const valueOrder = response.data.sort((a, b) => a.value - b.value);
                setProducts(valueOrder);
                console.log(valueOrder)
            })
            .catch((e) => {
                console.log(`Erro na chamada de API ${e}`);
            })
    }, []);

    return(
        <>
            <Header />
            <main className="container">
                <h1 className="title-container">
                        Lista de produtos
                </h1>

                {
                    createProduct ? (
                        <>

                            <ul className="info-products">
                                {
                                    products.map((product, index) => (
                                        <li key={index}>
                                            Nome: {product.product} <br />
                                            Valor: {product.value} <br />
                                            Descrição: {product.description} <br />
                                            Disponível: {product.available}
                                        </li>
                                    ))
                                }
                            </ul>

                            <button 
                                onClick={() => setCreateProduct(false)}
                                className="back-list"
                            >
                                Voltar
                            </button>
                        </>
                    ) : null
                }

                <ul className={!createProduct ? "list-products" : "list-display"}>
                    {products.map((product, index) => (
                        <li 
                            key={index}
                            onClick={() => setCreateProduct(true)}
                        >
                            {product.product}{" "}{"R$ "}{product.value}
                        </li>
                    ))}
                </ul>

                <Link to={"/register"} target="_self">

                    <button 
                        className={!createProduct ? "register-button" : "list-display"}
                        
                    >
                        Cadastrar Produto
                    </button>

                </Link>
        
            </main>
            <Footer />
        </>
    )
}

export default Home;
