import emailjs from 'emailjs-com'

const params = {
  to_email: 'bsseclassbatchzera@gmail.com',
  from_name: "Your Special Friend",
  to_name: "YOU YOU YOU",
  offer: "brugers",
  message: 'This is a test email sent using emailjs'
}

emailjs.init("ba3gxSiNTiWXx3fGF")

emailjs.send('service_8wyybff', 'template_8l4lsap', params)
  .then((response) => {
    console.log('Email sent!', response);
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });