import path from 'path'
import { TEXT } from 'sequelize'
import {static_path} from '../app.js'
import {FileStream}  from '../libs/file.js'

export const importData = async (req, res) => {
    const filepath = path.join(static_path, 'upload', 'stock.txt')
    const oFile = new FileStream(filepath)
    const buffer = await oFile.read()
    
    if ( buffer === null )
        res.send(oFile.message)
    
    oFile.parse_linefeed(buffer).forEach((line, index) =>  {
        console.log(`Line ${index++}: ${line}`)
    });    
    res.send(buffer)
}
