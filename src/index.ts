import * as http from 'http'

const host = 'localhost'
const port = 9990

const requestListener: http.RequestListener =
function(req: http.IncomingMessage, res: http.ServerResponse) {
  const contentEncoding = req.headers['content-encoding']

  if (contentEncoding) {
    const ce = contentEncoding.split(',')

    const encoding = ce[ce.length - 1].trim

    res.writeHead(200)
    res.end(`server says ${encoding}`)
  }

  res.writeHead(200)
  res.end('Heeeellllllllllloooooooooo')
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})
