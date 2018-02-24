function outerFunction(innerFunction){
	innerFunction();
}

var disp = function(){
    console.log("Hello World From Inner Function ")
    }; //defining a function experssion that prints to console

outerFunction(disp); //calling outer 