import { readFileSync, writeFile } from "fs"

let file = readFileSync('./7930/phones.txt', 'utf8')
let arr = file.split("\r\n")
let sendSMSList = []
let othersList = []

function getRandom() {
    if (Math.round(Math.random()) >=0.5) {
        return true
    }
    else return false
  }
for (let i=0;i<arr.length;i++){
    if (getRandom()){
        sendSMSList.push(arr[i])
    } else {
        othersList.push(arr[i])
    }
}

writeFile("result.txt", sendSMSList.join("\r\n"), function(error) {
    if (error) throw error;
    console.log("result OK")
})

writeFile("others.txt", othersList.join("\r\n"), function(error) {
    if (error) throw error;
    console.log("others OK")
})

