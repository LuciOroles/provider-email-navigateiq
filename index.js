const { setTimeout } = require('timers/promises');

module.exports = {
    init: (providerOptions = {}, settings = {}) => {
            // console.log(providerOptions, settings)
            console.log(`init:project`);
        return {
            send: async (options) => {
                await setTimeout(300);
                console.log(`sending the email`);
                return true;
            }
        }
    }
}