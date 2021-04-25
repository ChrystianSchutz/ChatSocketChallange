import { history,clients, addMessage, addClient} from './db/index.js'
import {server as webSockerServer} from 'websocket'
import http from 'http'

const PORT = 8080

const server = http.createServer(function(request, response) {
    response.writeHead(404);
    response.end();
});

server.listen(PORT, function() {
    console.log(` Server is listening on port ${PORT}`);
});

const wsServer = new webSockerServer({
    httpServer: server,
});

wsServer.on("request", (request) => {
    const connection = request.accept(null, request.origin)
    addClient(connection)
    connection.send(JSON.stringify(history))

    connection.on("message", (msg) => {
        const data = JSON.parse(msg.utf8Data)
        addMessage(data)
        clients.map((client) => {
            client.send(msg.utf8Data)
        })

    })

})