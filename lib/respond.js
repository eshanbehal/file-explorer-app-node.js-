//following function is to be passed to createServer used to create a server
const respond = (request, response) => {
console.log('respond fired.');

}

module.exports = respond;