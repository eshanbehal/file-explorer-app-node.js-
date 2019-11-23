const buildBreadcrumb = pathname => {
 const pathChunks = pathname.split('/').filter(element => element !== '' );
 console.log(`pathChunks: ${pathChunks}`);
 let breadcrumb = `<li class="breadcrumb-item"><a href="/">Home</a></li>`;
 
};

module.exports = buildBreadcrumb;