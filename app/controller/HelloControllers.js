var HelloControler={
    index: function(req,res){
    	 res.render('hello',{name: req.query.name});
    }
};
module.exports=HelloControler;