let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (userInput === "string") {
  userName = userInput;
}
//extra check for using unknown type which means we can deal with the data type independently when we don't know the type
//unknown is better than any.

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
//generateError 'never' return value. Thus,it's explicit to define never type

generateError("here is an error!", 500);
