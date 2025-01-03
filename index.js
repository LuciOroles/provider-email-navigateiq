const nodemailer = require('nodemailer');

module.exports = {
    init: (providerOptions = {}, settings = {}) => {
        const { username, emailPassword, hostName, hostAlternatePorts } = providerOptions;
        const { defaultFrom } = settings;
        const transport = nodemailer.createTransport({
            host: hostName,
            port: hostAlternatePorts,
            tls: {
                ciphers: 'SSLv3'
            },
            secure: false,
            auth: {
                type: 'LOGIN',
                user: username,
                pass: emailPassword,
            }
        });

        return {
            /**
             * 
             * @param {Object} options
             *{ to: any;
                from: string | undefined;
                replyTo: any;
                subject: string;
                text: string;
                html: string;} 
             * @returns {boolean}
             */
            send: async (options) => {
                const { to, subject, text, html } = options;

                await transport.sendMail({
                    from: defaultFrom,
                    to,
                    subject,
                    text,
                    html,
                });
             
                return true;
            }
        }
    }
}
