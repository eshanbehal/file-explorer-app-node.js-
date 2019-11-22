//require node modules
const url= require('url');
const path = require('path');

//static base path: location of your static folder
const staticBasePath = path.join(__dirname, '..', 'static');

//following function is to be passed to createServer used to create a server
const respond = (request, response) => {
response.write('respond fired.');
response.end();

//before working with the pathname.we need to decode it.
let pathname = url.parse(request.url, true).pathname;

//if favicon.ico stop
if(pathname === '/favicon.ico'){
    return false;
}

pathname = decodeURIComponent(pathname);

//get the corresponding full static path located in the static folder.
const fullStaticPath = path.join(staticBasePath, pathname);

console.log(pathname);
}

module.exports = respond;