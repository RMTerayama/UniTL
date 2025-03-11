import Formulario from "../components/form";
import "./styles.css";

export default function Login() {
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="banner col-6"></div>
                <div className="col-6 div-form">
                    <Formulario />

                </div>
            </div>

        </div>

    </>
}