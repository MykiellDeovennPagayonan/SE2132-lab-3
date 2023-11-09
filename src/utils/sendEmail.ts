import emailjs from 'emailjs-com'

export default function sendEmail(offers : Array<string>, email : string, userName : string) {
  const offer = offers.join(", ")
  const params = {
    to_email: email,
    from_name: "Your Special Friend",
    to_name: userName,
    offer: offer,
  }
  
  emailjs.send('service_8wyybff', 'template_8l4lsap', params)
    .then((response) => {
      console.log('Email sent!', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}