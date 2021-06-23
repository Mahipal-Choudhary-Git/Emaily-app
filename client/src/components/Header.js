import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    &nbsp; Emaily
                </a>
                <ul className="right">
                    <li>
                        <Link to="/">Login With Google</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Header;
