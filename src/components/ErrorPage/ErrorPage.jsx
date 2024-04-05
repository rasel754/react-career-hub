import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops...........</h1>
           <Link to="/"><button>go back in home</button></Link>
        </div>
    );
};

export default ErrorPage;