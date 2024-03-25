import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="mx-auto items-center justify-center my-20">

                <h1 className="text-6xl font-bold text-center">Sorry</h1>
                <h3 className="text-xl font-bold text-center text-red-500">Page Not Found or somethink else</h3>
                <Link to={-1}> <button className="text-center mx-auto">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;