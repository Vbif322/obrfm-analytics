import md5 from "md5"
import { writeFile } from 'fs'
import seminarID from "./settings"

let hash = md5(seminarID+"obrfm_statistics")
console.log(hash)

fetch(`${process.env.URL}/?id=${seminarID}&hash=${hash}`)
.then(res=>res.json())
.then(data=>{
    if (data.success) {        
        writeFile(`./${seminarID}/data.json`, JSON.stringify(data.data), function(error) {
            if (error) throw error;
            console.log("data OK")
        }) 
    } else {
        console.log(data.success)
    }
})
.catch(error => console.log(error))