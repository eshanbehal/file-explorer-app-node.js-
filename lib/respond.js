//require node modules
const url= require('url');
const path = require('path');
const fs = require('fs');

//static base path: location of your static folder
const staticBasePath = path.join(__dirname, '..', 'static');

//following function is to be passed to createServer used to create a server
const respond = (request, response) => {
// response.write('respond fired.');
// response.end();

//before working with the pathname.we need to decode it.
let pathname = url.parse(request.url, true).pathname;

//if favicon.ico stop
if(pathname === '/favicon.ico'){
    return false;
}

pathname = decodeURIComponent(pathname);

//get the corresponding full static path located in the static folder.
const fullStaticPath = path.join(staticBasePath, pathname);

//can we find something in fullStaticPath?

//no: send '404': file not found!
if(!fs.existsSync(fullStaticPath)){
    console.log(`${fullStaticPath} does not exist`);
    response.write('404: File not found!');
    response.end();
    return false;
}

//we found something
//is it a file or directory?
let stats;
try{
    stats = fs.lstatSync(fullStaticPath);
}catch(err){
    console.log(`lstatsync error: ${err}`);
}

//is it a directory:
if(stats.isDirectory()){
    //get content from the template index.html
    let data = fs.readFileSync(path.join(staticBasePath, 'project_files/index.html'), 'utf-8');

    //build the page title
    console.log(pathname);

    //build breadcrumb
    //build table rows(main_content)
    //fill the template data with: the page title, breadcrumb and table rows(main_content)
    //print datva to webpage
    response.statusCode = 200;
    response.write(data);
    response.end();

}
// response.write(stats.isDirectory().toString());
// response.end();
// console.log(pathname);
}

module.exports = respond;