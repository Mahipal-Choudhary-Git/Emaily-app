import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const SurveyNew = () => {
    const [showFormReview, setShowFormReview] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch({ type: "RESET_SURVEY_FORM" });
        };
    }, [dispatch]);
    return (
        <div>
            {showFormReview ? (
                <SurveyFormReview setShowReview={setShowFormReview} />
            ) : (
                <SurveyForm setShowReview={setShowFormReview} />
            )}
        </div>
    );
};
export default SurveyNew;
