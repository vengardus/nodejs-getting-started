import express from 'express'
import path from 'path'
// set __dirname for mode type module
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import projectRoute from './routes/project_route.js'
import taskRoute from './routes/task_route.js'
import bancoRoute from './routes/banco_route.js'
import productRoute from './routes/product_route.js'
import localRoute from './routes/local_route.js'
import oficinaRoute from './routes/oficina_route.js'


const app = express()

// middlewares
app.use(express.json())
app.use(express.text())

// sets
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// static
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'static')))

// routes   
app.use(projectRoute)
app.use(taskRoute)
app.use(bancoRoute)
app.use(productRoute)
app.use(localRoute)
app.use(oficinaRoute)

/*
// test read file stream
console.log('gardus')
const filePath = path.join(__dirname, 'static', 'upload', 'stock.txt')
import fs from 'fs'
    const readableStream = fs.createReadStream(filePath, 'utf-8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        console.log(chunk.length);
        let lines = 0
        chunk.split(/\r?\n/).forEach(line =>  {
            if ( line[0] === '_' )
                console.log('FILE:', line.substring(1))
            else {
                const parse = line.split('#')
                console.log(parse[0], parse[1])
            }
            //console.log(`Line from file: ${line}`);
            lines++
          });
        console.log('Lines:', lines)
    })
*/


export default app