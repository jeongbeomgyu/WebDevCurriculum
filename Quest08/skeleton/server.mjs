import http from 'http' //http모듈 불러오기
import fs from 'fs' //fs(파일처리와 관련된 전반적인 작업을 하는) 모듈 불러오기
const server = http.createServer((req, res) => {
  //HTTP 서버를 생성하고 요청과 응답을 처리하는 콜백 함수를 정의한다.

  /* TODO: 각각의 URL들을 어떻게 처리하면 좋을까요? */

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello World!')
    res.end() //요청이 URL이 /인 경우 응답의 Content-type을 text/plain으로 설정하고 Hello World! 메세지를 전송한다.
  } else if (req.url.startsWith('/foo')) {
    if (req.method === 'GET') {
      const params = new URL(`http://localhost${req.url}`).searchParams
      const bar = params.get('bar')
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write(`Hello, ${bar}`)
      res.end() //요청 URL이 /foo로 시작하는 경우, GET 요청인 경우, URL의 쿼리 파라미터에서 bar값을 가져와 Hello,{bar} 메세지를 응답으로 전송한다.
    } else if (req.method === 'POST') {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        const { bar } = JSON.parse(body)
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write(`Hello, ${bar}`)
        res.end()
      }) //POST 요청인 경우, 요청의 본문(body)을 파싱하여 bar값을 추출하고, Hello,{bar} 메세지를 응답으로 전송한다.
    }
  } else if (req.url === '/pic/upload') {
    if (req.method === 'POST') {
      const file = fs.createWriteStream('pic.jpg')
      req.pipe(file)
      file.on('finish', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write('File uploaded')
        res.end()
      }) //요청 URL이 /pic/upload인 경우, 만약 POST 요청을 받으면, 요청으로부터 받은 파일을 pic.jpg로 저장하고 File uploaded 메세지를 응답으로 전송한다.
    }
  } else if (req.url === '/pic/show') {
    fs.readFile('pic.jpg', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not Found')
        res.end()
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        res.write(data)
        res.end()
      }
    }) //요청 URL이 /pic/show 인 경우 pic.jpg파일을 읽어서 이미지 데이터를 응답으로 전송한다. 파일이 존재하지 않는 경우 404 Not Founf 메세지를 전송한다.
  } else if (req.url === '/pic/download') {
    fs.readFile('pic.jpg', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not Found')
        res.end()
      } else {
        res.setHeader('Content-disposition', 'attachment; filename=pic.jpg')
        res.setHeader('Content-Type', 'image/jpeg')
        res.write(data)
        res.end()
      } //요청 URL이 /pic/download인 경우 pic.jpg 파일을 다운로드할 수 있도록,Content-dispostion및 Content-Type 헤더를 설정하고 파일데이터를 응답으로 전송한다. 파일이 존재하지 않는 경우 404Not Found 메세지를 전송한다.
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.write('404 Not Found')
    res.end()
  } //그 외에 모든 경우, 404 Not Found 메세지를 전송한다.
})

server.listen(8000) // 8000번 포트에서 HTTP서버를 실행한다.
