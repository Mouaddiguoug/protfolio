import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newletter";
export const MailChimpForm = () => {
  const postUrl = `${process.env.newsletter_form}?u=${process.env.input}&id=${process.env.button}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}></Newsletter>
        )}
      />
    </>
  );
};
