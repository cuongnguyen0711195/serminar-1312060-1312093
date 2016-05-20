var calculator = {
	calculate: function(a,b,operator){
	var result;
	switch(operator){
	   case "+":
	      result=a+b;
	      break;
	   case "-":
	      result=a-b;
	      break;
	    case "*":
	        result=a*b;
	        break;
	     default:break
	    }
	    return result;
	}
};
module.exports=calculator;