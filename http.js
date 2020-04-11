const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the homepage</h1>');
        res.write('<h1>Welcome to the homepage</h1>');
        res.write('<p>Additionalcontent</p>');
        res.end();
    }
    if (req.url === '/user') {
        res.write('Welcome user jhonson');
        res.end();
    }
});

server.listen(3001, () => console.log('Server is up and running'));