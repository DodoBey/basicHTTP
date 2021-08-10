const http = require('http')

const port = 3333

const server = http.createServer((req, resp) => {
    resp.end(
        `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>HTTP Server</title>
            </head>
            <body>
                <h1 style="text-align:center;">
                    Daily Assignment
                </h1>
                <p style="text-align:center;">
                    This is an basic HTTP server and if you can see this letter, it means it works well!
                </p>
            </body>
        </html>
        `
    )
});

server.listen(port, () => {
    console.log(`Working on ${port} port.`)
});