var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (userInput === "string") {
    userName = userInput;
}
//extra check for using unknown type which means we can deal with the data type independently when we don't know the type
//unknown is better than any.
function generateError(message, code) {
    //   throw { message: message, errorCode: code };
    throw "he";
}
generateError("here is an error!", 500);
