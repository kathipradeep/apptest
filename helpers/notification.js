const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

module.exports = {
    
    sendNotification(emailTo,code, subject, text){
        const msg = {
            to: emailTo,
            from: 'training@neocepts.co.in',
            subject: subject,
            text: text,
            html: String(code)
         };
    sgMail.send(msg).catch(error => {
        console.error(JSON.stringify(error));
      });
    
    }
}