import fs from "fs"
import { seminarID } from "./settings"

let data = require(`./${seminarID}/data.json`)

// let sendSMSList = fs.readFileSync('result.txt', 'utf8').split("\r\n")
// let othersList = fs.readFileSync('others.txt', 'utf8').split("\r\n")
let phones = fs.readFileSync(`./${seminarID}/phones.txt`, "utf8").split("\r\n")


function getInfo (list) {
    let count = 0
    let total_time = 0
    for (let i=0; i<list.length; i++) {
        for (let j in data) {
            if (data[j]["user_phone"].replace(/[^0-9]/g,"") === list[i].replace(/[^0-9]/g,"")) {
                if (data[j]["time"] > 0) {
                    count+=1
                }
            } 
        }
    }
    return count
}

function getPhones (list) {
    let count = 0
    for (let i=0; i<list.length; i++) {
        for (let j in data) {
            if (data[j]["user_phone"] === list[i]) {
                if (data[j]["time"] > 0) {
                    count+=1
                }
            } 
        }
    }
    return count
}

// console.log("Всего "+sendSMSList.length, "Пришло " + getInfo(sendSMSList))
// console.log("Всего "+othersList.length, "Пришло " + getInfo(othersList))
console.log(getInfo(phones))