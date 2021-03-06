import keys from "../../config/keys.js";
export default (survey) =>
    `<html>
        <body>
            <div style="text-align: center;">
                <h3>I'd like your input!</h3>
                <p>Please answer the following question:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/survey/thanks">Yes</a>
                    <a href="${keys.redirectDomain}/api/survey/thanks">No</a>
                </div>
            </div>
        </body>
    </html>`;
