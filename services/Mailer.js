import sendGrid, { mail } from "sendgrid";
import keys from "../config/keys.js";
export default class Mailer extends mail.Mail {
    constructor({ subject, recipients }, content) {
        super();
        this.sgApi = sendGrid(keys.sendGridKey);
        this.from_email = new mail.Email("dev.maipal@gmail.com");
        this.subject = subject;
        this.body = new mail.Content("text/html", content);
        this.recipients = this.formatAddresses(recipients);
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }
    formatAddresses = (recipients) =>
        recipients.map(({ email }) => new mail.Email(email));
    addClickTracking = () => {
        const trackingSettings = new mail.TrackingSettings();
        const clickTracking = new mail.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    };
    addRecipients = () => {
        const personalize = new mail.Personalization();
        this.recipients.forEach((recipient) => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    };
    send = async () => {
        const request = this.sgApi.emptyRequest({
            method: "POST",
            path: "/v3/mail/send",
            body: this.toJSON(),
        });
        const response = await this.sgApi.API(request);
        return response;
    };
}
