validateToken = function(req,res,next){

	if (!req.user) { // 토큰이 없을 때
		return res.status(401).json({
		  msg: "No token provided!"
		});
	  }
	next();
};

module.exports ={ validateToken};