const nodemailer = require('nodemailer');
require('dotenv').config();
const user = process.env.APP_MAIL;
const pass = process.env.PASS_MAIL;
const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com', // hostname
    secure: true, // TLS requires secureConnection to be false
    port: 465, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user,
        pass
    }
});

const sendEmail = (email, password, nombre) => {
    // Create the transporter with the required configuration for Outlook
    // change the user and pass !

    // setup e-mail data, even with unicode symbols
    const mailOptions = {
        // eslint-disable-next-line template-curly-spacing
        from: `SpringLabs <${user}>`, // sender address (who sends)
        to: email, // list of receivers (who receives)
        subject: 'SpringLabs', // Subject line
        text: 'Cambio de contraseña', // plaintext body
        cc: ['piers.vp@gmail.com', 'vergil.svp@gmail.com'],
        html: `<!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <!--copiar desde aqui-->
        <body>
            <center>
            <table style="border-collapse: collapse; height: 100%; margin: 0; padding: 0; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                    <td style="height: 100%; margin: 0; padding: 0; width: 100%;" align="center" valign="top">
                    <table style="border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td style="background: #ffffff none no-repeat 50% 50%/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: 50% 50%; border-top: 0; border-bottom: 0; padding-top: 20px; padding-bottom: 0px;" align="center" valign="top">
                            <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="background: #transparent none no-repeat center/cover; background-color: #transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
                                    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr>
                                            <td  valign="top">
                                            <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                <tr style="height: 85px;">
                                                    <td style="text-align: center; padding: 0px 9px; height: 85px;" valign="top"><img style="max-width: 600px; padding-bottom: 0; display: inline!important; vertical-align: bottom; border: 0; height: auto; outline: none; text-decoration: none;" src="https://springlabsdevs.net/uploads/-/system/appearance/logo/1/springlabs_logo_grande_png.png" alt="Promo" width="300" align="center" /></td>
                                                </tr>
                                                <tr style="height: 216.247px;">
                                                    <td style="text-align: center; height: 216.247px;" valign="top"><img src="https://desktopwalls.net/wp-content/uploads/2014/12/Information%20Technology%20Network%20Hand%20Business%20Desktop%20Wallpaper.jpg" alt="Temporada" width="564" height="200" align="center" /></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="background: #ffffff none no-repeat center/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; align="center" valign="top">
                            <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="background: transparent none no-repeat center/cover; background-color: transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
                                    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top">
                                            <table style="max-width: 100%; min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                <tr>
                                                    <td style="word-break: break-word; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: left;  valign="top">
                                                    <p style="text-align: center;"><span style="color: #2f4f4f;"><span style="font-size: 35px;"><strong>¡Hola ${nombre}!</strong></span></span></p>
                                                    <p style="margin: 10px 0px; padding: 0px; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: center;"><span style="color: #2f4f4f;">Hemos recibido tu peticion de cambio de contraseña, tu nueva contraseña temporal es:</span></p>
                                                    <p style="margin: 10px 0px; padding: 0px; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: center;"><span style="color: #2f4f4f; font-size: 15px;"><strong>${password}</strong></span></p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table style="min-width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <td style="padding: 0 18px 18px 18px;" align="center" valign="top">
                                                    <table style="border-collapse: separate!important; border-radius: 3px; background-color: #c320ba;" border="0" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                        <tr>
                                                            <td style="font-family: Arial; font-size: 18px; padding: 14px; width: 285px;" align="center" valign="middle"><a style="font-weight: bold; letter-spacing: normal; line-height: 100%; text-align: center; text-decoration: none; color: #ffffff;" href="https://facebook.com">Ir a pagina Principal</a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
                            <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
                                    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px; margin: 0;">Escribe aqu&iacute; la direcci&oacute;n de tus oficinas</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 10px; line-height: 10px;" height="10">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px;" align="center"><a style="color: #666666; text-decoration: underline;" href="mailto:example@salesup.com.mx" target="_blank" rel="noopener noreferrer">info@empresaexitosa.com</a> <span style="font-family: arial,sans-serif; font-size: 14px; line-height: 20px; color: #dddddd;"> | </span> <a style="color: #666666; text-decoration: underline;" href="http://www.salesup.com" target="_blank" rel="noopener noreferrer">www.empresaexitosa.com</a></td>
                                </tr>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="border-top: 1px solid #dddddd;" align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
                            <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
                                    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0; margin: 0;">&copy; 2019 - Plantilla dise&ntilde;ada por SalesUp!&reg; CRM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                </tbody>
            </table>
            </center>
        </body>
        <!--copiar hasta aqui-->
        </html>
        ` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
};

const sendEmailUserAdd = (nombre, email, password) => {
    const mailOptions = {
        // eslint-disable-next-line template-curly-spacing
        from: `SpringLabs <${user}>`, // sender address (who sends)
        to: email, // list of receivers (who receives)
        subject: 'SpringLabs', // Subject line
        text: 'Contraseña Nuevo Usuario', // plaintext body
        html: `<!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <!--copiar desde aqui-->
        <body>
            <center>
            <table style="border-collapse: collapse; height: 100%; margin: 0; padding: 0; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                    <td style="height: 100%; margin: 0; padding: 0; width: 100%;" align="center" valign="top">
                    <table style="border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td style="background: #ffffff none no-repeat 50% 50%/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: 50% 50%; border-top: 0; border-bottom: 0; padding-top: 20px; padding-bottom: 0px;" align="center" valign="top">
                            <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="background: #transparent none no-repeat center/cover; background-color: #transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
                                    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr>
                                            <td  valign="top">
                                            <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                <tr style="height: 85px;">
                                                    <td style="text-align: center; padding: 0px 9px; height: 85px;" valign="top"><img style="max-width: 600px; padding-bottom: 0; display: inline!important; vertical-align: bottom; border: 0; height: auto; outline: none; text-decoration: none;" src="https://springlabsdevs.net/uploads/-/system/appearance/logo/1/springlabs_logo_grande_png.png" alt="Promo" width="300" align="center" /></td>
                                                </tr>
                                                <tr style="height: 216.247px;">
                                                    <td style="text-align: center; height: 216.247px;" valign="top"><img src="https://desktopwalls.net/wp-content/uploads/2014/12/Information%20Technology%20Network%20Hand%20Business%20Desktop%20Wallpaper.jpg" alt="Temporada" width="564" height="200" align="center" /></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="background: #ffffff none no-repeat center/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; align="center" valign="top">
                            <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="background: transparent none no-repeat center/cover; background-color: transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
                                    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top">
                                            <table style="max-width: 100%; min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                <tr>
                                                    <td style="word-break: break-word; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: left;  valign="top">
                                                    <p style="text-align: center;"><span style="color: #2f4f4f;"><span style="font-size: 35px;"><strong>¡Hola ${nombre}!</strong></span></span></p>
                                                    <p style="margin: 10px 0px; padding: 0px; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: center;"><span style="color: #2f4f4f;">Hemos recibido tu peticion de nuevo usuario, se completo tu registro y esta es tu nueva contraseña temporal:</span></p>
                                                    <p style="margin: 10px 0px; padding: 0px; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: center;"><span style="color: #2f4f4f; font-size: 15px;"><strong>${password}</strong></span></p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table style="min-width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <td style="padding: 0 18px 18px 18px;" align="center" valign="top">
                                                    <table style="border-collapse: separate!important; border-radius: 3px; background-color: #c320ba;" border="0" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                        <tr>
                                                            <td style="font-family: Arial; font-size: 18px; padding: 14px; width: 285px;" align="center" valign="middle"><a style="font-weight: bold; letter-spacing: normal; line-height: 100%; text-align: center; text-decoration: none; color: #ffffff;" href="https://facebook.com">Ir a pagina Principal</a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
                            <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
                                    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px; margin: 0;">Escribe aqu&iacute; la direcci&oacute;n de tus oficinas</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 10px; line-height: 10px;" height="10">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px;" align="center"><a style="color: #666666; text-decoration: underline;" href="mailto:example@salesup.com.mx" target="_blank" rel="noopener noreferrer">info@empresaexitosa.com</a> <span style="font-family: arial,sans-serif; font-size: 14px; line-height: 20px; color: #dddddd;"> | </span> <a style="color: #666666; text-decoration: underline;" href="http://www.salesup.com" target="_blank" rel="noopener noreferrer">www.empresaexitosa.com</a></td>
                                </tr>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="border-top: 1px solid #dddddd;" align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
                            <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
                                    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0; margin: 0;">&copy; 2019 - Plantilla dise&ntilde;ada por SalesUp!&reg; CRM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                </tbody>
            </table>
            </center>
        </body>
        <!--copiar hasta aqui-->
        </html>
        ` // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
};

const sendDocumentReport = (route, emails) => {
    // setup e-mail data, even with unicode symbols
    const mailOptions = {
        // eslint-disable-next-line template-curly-spacing
        from: `SpringLabs <${user}>`, // sender address (who sends)
        to: emails, // list of receivers (who receives)
        subject: 'SpringLabs', // Subject line
        text: 'Cambio de contraseña', // plaintext body
        attachments: [{
            filename: 'Historico.pdf',
            path: route,
            contentType: 'application/pdf'
        }],
        html: `<!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <!--copiar desde aqui-->
        <body>
            <center>
            <table style="border-collapse: collapse; height: 100%; margin: 0; padding: 0; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                    <td style="height: 100%; margin: 0; padding: 0; width: 100%;" align="center" valign="top">
                    <table style="border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td style="background: #ffffff none no-repeat 50% 50%/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: 50% 50%; border-top: 0; border-bottom: 0; padding-top: 20px; padding-bottom: 0px;" align="center" valign="top">
                            <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="background: #transparent none no-repeat center/cover; background-color: #transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
                                    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr>
                                            <td  valign="top">
                                            <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                <tr style="height: 85px;">
                                                    <td style="text-align: center; padding: 0px 9px; height: 85px;" valign="top"><img style="max-width: 600px; padding-bottom: 0; display: inline!important; vertical-align: bottom; border: 0; height: auto; outline: none; text-decoration: none;" src="https://springlabsdevs.net/uploads/-/system/appearance/logo/1/springlabs_logo_grande_png.png" alt="Promo" width="300" align="center" /></td>
                                                </tr>
                                                <tr style="height: 216.247px;">
                                                    <td style="text-align: center; height: 216.247px;" valign="top"><img src="https://desktopwalls.net/wp-content/uploads/2014/12/Information%20Technology%20Network%20Hand%20Business%20Desktop%20Wallpaper.jpg" alt="Temporada" width="564" height="200" align="center" /></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="background: #ffffff none no-repeat center/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; align="center" valign="top">
                            <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="background: transparent none no-repeat center/cover; background-color: transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
                                    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top">
                                            <table style="max-width: 100%; min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                <tr>
                                                    <td style="word-break: break-word; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: left;  valign="top">
                                                    <p style="text-align: center;"><span style="color: #2f4f4f;"><span style="font-size: 35px;"><strong>¡Hola!</strong></span></span></p>
                                                    <p style="text-align: center;"><span style="color: #2f4f4f;"><span style="font-size: 35px;"><strong>Tu historico de pagos ha sido adjuntado en este mensaje</strong></span></span></p>
                                                    <p style="margin: 10px 0px; padding: 0px; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: center;"><span style="color: #2f4f4f;">En caso de no poder abrir el archivo o descargarlo , por favor pongase en contacto con el administrador</span></p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table style="min-width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <td style="padding: 0 18px 18px 18px;" align="center" valign="top">
                                                    <table style="border-collapse: separate!important; border-radius: 3px; background-color: #c320ba;" border="0" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                        <tr>
                                                            <td style="font-family: Arial; font-size: 18px; padding: 14px; width: 285px;" align="center" valign="middle"><a style="font-weight: bold; letter-spacing: normal; line-height: 100%; text-align: center; text-decoration: none; color: #ffffff;" href="https://facebook.com">Ir a pagina Principal</a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
                            <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
                                    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px; margin: 0;">Escribe aqu&iacute; la direcci&oacute;n de tus oficinas</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 10px; line-height: 10px;" height="10">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px;" align="center"><a style="color: #666666; text-decoration: underline;" href="mailto:example@salesup.com.mx" target="_blank" rel="noopener noreferrer">info@empresaexitosa.com</a> <span style="font-family: arial,sans-serif; font-size: 14px; line-height: 20px; color: #dddddd;"> | </span> <a style="color: #666666; text-decoration: underline;" href="http://www.salesup.com" target="_blank" rel="noopener noreferrer">www.empresaexitosa.com</a></td>
                                </tr>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="border-top: 1px solid #dddddd;" align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
                            <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
                                    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0; margin: 0;">&copy; 2019 - Plantilla dise&ntilde;ada por SalesUp!&reg; CRM</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                </tbody>
            </table>
            </center>
        </body>
        <!--copiar hasta aqui-->
        </html>
        ` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, async function (error, info) {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
};

const sendEmailNotification = (nombre, emails) => {
    const mailOptions = {
        // eslint-disable-next-line template-curly-spacing
        from: `SpringLabs <${user}>`, // sender address (who sends)
        to: emails, // list of receivers (who receives)
        subject: 'SpringLabs', // Subject line
        text: 'Notificacion de Pago', // plaintext body
        html: `<!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <!--copiar desde aqui-->
    <body>
    <center>
    <table style="border-collapse: collapse; height: 100%; margin: 0; padding: 0; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td style="height: 100%; margin: 0; padding: 0; width: 100%;" align="center" valign="top">
    <table style="border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td style="background: #ffffff none no-repeat 50% 50%/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: 50% 50%; border-top: 0; border-bottom: 0; padding-top: 20px; padding-bottom: 0px;" align="center" valign="top">
    <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td style="background: #transparent none no-repeat center/cover; background-color: #transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td valign="top">
    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr style="height: 85px;">
    <td style="text-align: center; padding: 0px 9px; height: 85px;" valign="top"><img style="max-width: 600px; padding-bottom: 0; display: inline!important; vertical-align: bottom; border: 0; height: auto; outline: none; text-decoration: none;" src="https://springlabsdevs.net/uploads/-/system/appearance/logo/1/springlabs_logo_grande_png.png" alt="Promo" width="300" align="center" /></td>
    </tr>
    <tr style="height: 216.247px;">
    <td style="text-align: center; height: 216.247px;" valign="top"><img src="https://desktopwalls.net/wp-content/uploads/2014/12/Information%20Technology%20Network%20Hand%20Business%20Desktop%20Wallpaper.jpg" alt="Temporada" width="564" height="200" align="center" /></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr>
    <td style="background: #ffffff none no-repeat center/cover; background-color: #ffffff; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; align="center" valign="top">
    <table style="border-collapse: collapse; max-width: 600px!important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td style="background: transparent none no-repeat center/cover; background-color: transparent; background-image: none; background-repeat: no-repeat; background-position: center; border-top: 0; border-bottom: 0; padding-top: 0; padding-bottom: 0;" valign="top">
    <table style="min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td valign="top">
    <table style="max-width: 100%; min-width: 100%; border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr>
    <td style="word-break: break-word; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: left; valign="top">
    <p style="text-align: center;"><span style="color: #2f4f4f;"><span style="font-size: 35px;"><strong>¡Hola ${nombre}!</strong></span></span></p>
    <p style="margin: 10px 0px; padding: 0px; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: center;"><span style="color: #2f4f4f;">Esta es una prueba para los correos de notificacion de pagos ignora este correo y continua tus actividades</span></p>
    <p style="margin: 10px 0px; padding: 0px; color: #808080; font-family: Helvetica; font-size: 16px; line-height: 150%; text-align: center;"><</p>
    </td>
    </tr>
    </tbody>
    </table>
    
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr>
    <td align="center" valign="top">&nbsp;</td>
    </tr>
    <tr>
    <td align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
    <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
    </tr>
    <tr>
    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px; margin: 0;">Escribe aqu&iacute; la direcci&oacute;n de tus oficinas</p>
    </td>
    </tr>
    <tr>
    <td style="font-size: 10px; line-height: 10px;" height="10">&nbsp;</td>
    </tr>
    <tr>
    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0 20px;" align="center"><a style="color: #666666; text-decoration: underline;" href="mailto:example@salesup.com.mx" target="_blank" rel="noopener noreferrer">info@empresaexitosa.com</a> <span style="font-family: arial,sans-serif; font-size: 14px; line-height: 20px; color: #dddddd;"> | </span> <a style="color: #666666; text-decoration: underline;" href="http://www.salesup.com" target="_blank" rel="noopener noreferrer">www.empresaexitosa.com</a></td>
    </tr>
    <tr>
    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    <tr>
    <td style="border-top: 1px solid #dddddd;" align="center" valign="top" bgcolor="#FFFFFF" width="100%" height="100%">
    <table style="max-width: 660px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
    </tr>
    <tr>
    <td style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666;" align="center">
    <p style="font-family: 'Montserrat',Arial,sans-serif; font-size: 12px; line-height: 18px; color: #666666; padding: 0; margin: 0;">&copy; 2019 - Plantilla dise&ntilde;ada por SalesUp!&reg; CRM</p>
    </td>
    </tr>
    <tr>
    <td style="font-size: 20px; line-height: 20px;" height="20">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </center>
    </body>
    <!--copiar hasta aqui-->
    </html>
    ` // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
};

module.exports = { sendEmail, sendEmailUserAdd, sendDocumentReport, sendEmailNotification };
