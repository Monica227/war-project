var expect = chai.expect; //Varible will import the chai expect method

describe("MyFunctions", function() { //Function will facilitate the test.
    describe("#doSomething", function() { //Testing the "Do something" function.
        it("should concatenate the two parameters", function() { //Function should concatenate the two parameters.
            var x = doSomething("Hello", 5); //"Hello and 5" is passed into the called function. 
            expect(x).to.equal("Hello5"); //X is expected to equal "Hello5".
        });

        it("Should throw an error if first parameter is not a string",function(){ //An exception or error message will appear if string isnt imputed.
            expect(function(){ //Expect a function?
                doSomething(5,5) //"doSomething" function is called and numbers are passed in.
            }).to.throw(Error); //Function wrapped in an except and should throw an error.
        })
    });
});