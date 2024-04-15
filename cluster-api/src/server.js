import http from 'http'
const processId = process.pid

const server = http.createServer((request, response) => {
    for (let index = 0; index < 1e7; index++);
    response.end(`handled by pid: ${processId}`)
})

server.listen(3000)
    .once('listening', () => {
        console.log('server started in process: ', processId)
    })

// aguardar as conexões sererm encerradas para só então encerrar o programa
process.on('SIGTERM', () => {
    console.log('server ending', new Date().toString())
    server.close(() => process.exit())
})

// vamos simular que um erro aleatório aconteceu
setTimeout(() => {
    process.exit(1)
}, Math.random() * 1e4) // 10.000