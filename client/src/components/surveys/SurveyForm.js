import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import { useDispatch, useSelector } from "react-redux";

import formFields from "./formFields";

const SurveyForm = ({ setShowReview }) => {
    const dispatch = useDispatch();
    const formData = useSelector((store) => store.surveyForm);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: formData,
    });

    return (
        <div>
            <form
                onSubmit={handleSubmit((data) => {
                    dispatch({ type: "SET_SURVEY_FORM", payload: data });
                    setShowReview(true);
                })}
            >
                {formFields.map(({ name, label, validate }) => (
                    <SurveyField
                        key={name}
                        inputOptions={register(name, {
                            required: `${name} is required`,
                            validate,
                        })}
                        label={label}
                        error={errors[name]}
                    />
                ))}
                <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="teal btn-flat right white-text"
                >
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    );
};

export default SurveyForm;
