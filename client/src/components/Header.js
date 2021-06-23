import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
    const auth = useSelector((store) => store.auth);
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    &nbsp; Emaily
                </Link>
                <ul className="right">{renderContent(auth)}</ul>
            </div>
        </nav>
    );
};

const renderContent = (auth) => {
    switch (auth) {
        case null:
            return;
        case false:
            return (
                <li>
                    <a href="/auth/google">Login With Google</a>
                </li>
            );
        default:
            return (
                <>
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                </>
            );
    }
};

export default Header;
