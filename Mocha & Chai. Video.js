//Unit testing: Process of writing code to test an application.
function doSomething(x, y) {
    if (typeof x != "String") {
        throw new Error("x must be a string")
    }
    return x + y;
}