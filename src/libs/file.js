import fs from 'fs'

export class FileStream {
    read(filepath) {
        const readableStream = fs.createReadStream(filepath, 'utf-8');

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
    }
}

