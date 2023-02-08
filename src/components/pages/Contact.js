import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setButtonDisabled(true);
  
      emailjs.sendForm('service_csxgf0k', 'template_xcz76ok', form.current, 'COOkbhwTpWBujQEZU')
        .then((result) => {
            console.log(result.text);
            alert("Email Sent")
        }, (error) => {
            console.log(error.text);
              alert(error.text)
        });

    };

  return (
    <div className='theSection'>
        <form ref={form} onSubmit={sendEmail}>
            <label for="name">Name:</label>
            <input className='inputBoxes' type="text" id="name" name="name" /><br />
            <label for="email">Email Adress:</label>
            <input className='inputBoxes' type="email" id="email" name="email" /><br />
            <label for="textBox">Email Text:</label><br />
            <textarea id="textBox" name="message">
                Hello Jonathan Beck,
            </textarea><br />
            <p></p>
            <input className='Submit' type="submit" value="Send" 
            disabled={buttonDisabled} />
        </form>
    </div>
  );
}