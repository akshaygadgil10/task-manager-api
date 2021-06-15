const mailgun = require('mailgun-js')
const api_key = process.env.API_KEY
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
// const data = {
// 	from: 'Welcome User <me@samples.mailgun.org>',
// 	to: 'pifor81335@d4wan.com',
// 	subject: 'Welcome',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });

const sendWelcomeEmail = (email, name) => {
    //     mg.messages().send({
    //     from: 'Welcome User <me@samples.mailgun.org>',
    //     to:email,
    //     subject:'Thanks for joining in!',
    //     text: `Welcome to the app, ${name}. Let me know how you get along with the app `
    // }, function (error, body){
    //     console.log(body);
    // })
}
const sendCancelationEmail = (email, name) => {
    // mg.messages().send({
    //     from: 'tonystark@gmail.com',
    //     to:email,
    //     subject:'Sorryto see you go!',
    //     text: `Goodby, ${name}. I hope to see you back sometiome soon `
    // }, function (error, body){
    //     console.log(body);
    // })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
