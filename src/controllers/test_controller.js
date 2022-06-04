import path from 'path'
import {static_path} from '../app.js'
import {FileStream}  from '../libs/file.js'

export const importData = async (req, res) => {
    const filepath = path.join(static_path, 'upload', 'stock.txt')
    const oFile = new FileStream(filepath)
    const buffer = await oFile.read()
    if ( buffer === null )
        res.send(oFile.message)
    
    buffer.split(/\r\n/).forEach(line =>  {
        // linea
    });    
    res.send(buffer)
}
