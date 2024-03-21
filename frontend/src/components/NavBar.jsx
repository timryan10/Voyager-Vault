import {Link} from "react-router-dom";
import "../navbar.css" ;

function NavBar(){
    return (
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/countries">Countries</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/destination">Destination</Link></li>
                <li><Link to="/signUp">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>
          </header>
        </div>
    )
};

export default NavBar;