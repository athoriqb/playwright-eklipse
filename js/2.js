//concatination and interpolation
let price =  80
let itemName = "Table"
let messageToPrint = "The price for your "+itemName+" is "+price+" dollars" //concatination
let messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageToPrint)
console.log(messageToPrint2)

let message = "Hello, "
let isUser
if (isUser) {
    message += "User"
} else {
    message += "Guest"
}
console.log(message)
