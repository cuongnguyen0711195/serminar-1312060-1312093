var calculator=require('./calculator');
var CalculatorController={
	index: function(req,res){
		res.render('calculator');
	},
	calculate: function(req, res){
		console.log(req.body);
	var a = parseInt(req.body.a);
	var b = parseInt(req.body.b);
	var operator = req.body.operator;
	var result;
	var message={};
	if(isNaN(a) || isNaN(b))
	{
		message="a or b khong duoc trong";
	}
	else{
	message= "calculator successfully.";
               result=calculator.calculate(a,b,operator);
           }
    res.render('calculator',{result: result,a: a,b: b,message: message});
	}
};
module.exports=CalculatorController;