import fs from 'fs'

export class FileStream {
    constructor(filepath) {
        this.filepath = filepath
        this.error = 0
        this.message = ''
    }
    
    /***
     * return the file as one only string (characters end of line : \r\n)
     */
    async read() {
        try {
            const readableStream = fs.createReadStream(this.filepath, 'utf-8');
            let chunk = null
            for await ( chunk of readableStream) {
                //console.log('>>> '+chunk);
              }
            return chunk

        } catch (error) {
            this.error = 1
            this.message = error.message
            return null
        }
    }
}

