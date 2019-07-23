var path = require('path');

module.exports = {
    devServer: {
        headers: {
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Access-Control-Allow-Origin": "*"
        }
    }
};