import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "enquiries@riconaylor.com", // Your email where you'll receive emails
            from: "enquiries@riconaylor.com", // your website email address here
            subject: `[Lead from website] : ${req.body.subject}`,
            html: `<!DOCTYPE HTML
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Contact Page Submission</title>
        
            <style type="text/css">
                a,
                a[href],
                a:hover,
                a:link,
                a:visited {
                    /* This is the link colour */
                    text-decoration: none !important;
                    color: #0000EE;
                }
        
                .link {
                    text-decoration: underline !important;
                }
        
                p,
                p:visited {
                    /* Fallback paragraph style */
                    font-size: 15px;
                    line-height: 24px;
                    font-family: 'Helvetica', Arial, sans-serif;
                    font-weight: 300;
                    text-decoration: none;
                    color: #000000;
                }
        
                h1 {
                    /* Fallback heading style */
                    font-size: 22px;
                    line-height: 24px;
                    font-family: 'Helvetica', Arial, sans-serif;
                    font-weight: normal;
                    text-decoration: none;
                    color: #000000;
                }
        
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td {
                    line-height: 100%;
                }
        
                .ExternalClass {
                    width: 100%;
                }
            </style>
        </head>
        
        <body
            style="text-align: center; margin: 0; padding-top: 0px; padding-bottom: 0px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000"
            align="center">
            <!-- Start single column section -->
            <table align="center"
                style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;"
                width="600">
                <tbody>
                    <tr>
                        <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;"
                            width="596">
        
                            <h1
                                style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">
                                From: ${req.body.fullname} ${req.body.email}</h1>
                            <h1
                                style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">
                                Subject: ${req.body.subject}</h1>
        
                            <p
                                style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                                Message: ${req.body.message}</p>
        
                        </td>
                    </tr>
                </tbody>
            </table>
            <img style="width: 600px; max-width: 600px; height: 350px; max-height: 350px; text-align: center;" alt="Hero image"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                align="center" width="600" height="350">
            <table align="center"
                style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;"
                width="600">
                <tbody>
                    <tr>
                        <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;"
                            width="596">
        
                            <p
                                style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                                <a target="_blank" style="text-decoration: underline; color: #ffffff;"
                                    href="https://fullsphere.co.uk">
                                    Delivered from riconaylor.com
                                </a>
                            </p>
        
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </body>
        
        </html>`,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
}

export default sendEmail;