const surveyFormReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_SURVEY_FORM":
            return action.payload;
        case "RESET_SURVEY_FORM":
            return {};
        default:
            return state;
    }
};

export default surveyFormReducer;
