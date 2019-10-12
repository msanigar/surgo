import React from 'react'
import Button from '../Button'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <React.Fragment>
    <div className="signup-form">
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Enter your email address here"
      />
      <div>
      {status === "sending" && <span>sending...</span>}
      {status === "error" && (
        <span
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <span
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      </div>
    </div>
    <div className="btn-container">
      <Button clickFunc={submit} text='Submit'></Button>
    </div>
    </React.Fragment>
  );
};

class Signup extends React.Component {
  render() {
    const url = "https://gmail.us20.list-manage.com/subscribe/post?u=c628c648d6564223ae86c85b9&amp;id=d626b4e39f";
    return (
      <span className="signup">
       <p className="title">Join the experience</p>
       <MailchimpSubscribe
       url={url}
       render={({ subscribe, status, message }) => (
         <CustomForm
           status={status}
           message={message}
           onValidated={formData => subscribe(formData)}
         />
       )}
     />
      </span>
     )
  }
}

export default Signup