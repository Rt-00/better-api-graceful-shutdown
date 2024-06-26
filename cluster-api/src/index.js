import os from 'os'
import cluster from 'cluster'

const runPrimaryProcess = () => {
  const processCount = os.cpus().length
  console.log(`Primary ${process.pid} is running`)
  console.log(`Forking Server with ${processCount} process\n`)

  for (let index = 0; index < processCount; index++)
    cluster.fork()

  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} died... scheduling another one`)
      cluster.fork()
    }
  })
}

const runWorkerProcess = async () => {
  await import('./server.js')
}


cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()