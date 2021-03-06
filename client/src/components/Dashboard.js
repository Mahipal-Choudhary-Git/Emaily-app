import { Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="fixed-action-btn">
            <Link to="/surveys/new" className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
            </Link>
        </div>
    );
};
export default Dashboard;
