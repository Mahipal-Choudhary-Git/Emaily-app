import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitSurvey } from "../../actions";

import formFields from "./formFields";

const SurveyFormReview = ({ setShowReview }) => {
    const formValues = useSelector((store) => store.surveyForm);
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <div>
            <h5>Please Confirm Your Entries</h5>
            <div>
                {formFields.map(({ label, name }) => (
                    <div key={name}>
                        <label>{label}</label>
                        <div>{formValues[name]}</div>
                    </div>
                ))}
            </div>
            <button
                className="yellow darken-3 btn-flat white-text"
                onClick={() => setShowReview(false)}
            >
                Back
            </button>
            <button
                className="green btn-flat right white-text"
                onClick={() => {
                    dispatch(submitSurvey(formValues));
                    history.push("/surveys");
                }}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

export default SurveyFormReview;
