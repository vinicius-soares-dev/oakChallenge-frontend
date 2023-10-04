import { Link } from "react-router-dom";
import "../../assets/styles/footer/style.css";

function Footer() {
    return (
        <footer className="footer">

            <Link to={"https://github.com/vinicius-soares-dev"} target="_blank" className="link">
                <p className="description-footer">Desenvolvido por <mark>Vinicius Soares</mark></p>
            </Link>
                
        </footer>
    )
}

export default Footer;