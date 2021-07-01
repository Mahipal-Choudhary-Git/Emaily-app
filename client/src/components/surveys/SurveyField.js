const SurveyField = ({ inputOptions, label, error }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                {...inputOptions}
                autoComplete="off"
                style={{ marginBottom: "0.5vh" }}
            />
            <div className="red-text" style={{ marginBottom: "20px" }}>
                {error?.message}
            </div>
        </div>
    );
};
export default SurveyField;
