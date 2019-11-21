//creating this project with pure node.

//require node modules
const http = require('http');

//file imports
const respond = require('./lib/respond.js');
//connection settings
const port = process.env.port || 3000;

//create server
const server = http.createServer(respond);

//for listening to the client requests on specific port, the port is to be available.
server.listen(port, () =>{
    console.log(`listening on port: ${port}`);
});