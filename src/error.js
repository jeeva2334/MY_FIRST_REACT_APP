import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY !</h2>
            <p>This page cannot be found</p>
            Get Back To <Link to='/'>Home</Link>Page
        </div>
     );
}
 
export default NotFound;