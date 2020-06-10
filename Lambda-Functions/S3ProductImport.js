//dependencies
const util = require('util');

exports.handler = async (event, context, callback) => {    
    console.log("Product file uploaded to S3: ", util.inspect(event));
}    