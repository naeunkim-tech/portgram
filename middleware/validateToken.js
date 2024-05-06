const jwt = require('jsonwebtoken');

let validateToken={}
validateToken.isLoggedin = function(req,res,next){
	var token = req.cookies.user;

	if (!token) { // 토큰이 없을 때
		return res.status(401).json({
		  msg: "No token provided!"
		});
	  }

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) { // 토큰이 유효하지 않을 때
			return res.status(401).json({
			msg: "Token is invalid!"
			});
		}
		req.decoded = decoded; 
        	// 토큰이 유효하다면 토큰에 저장된 값을 req.decoded에 저장해 사용할 수 있게 한다.
		next();
	});
};

module.exports = validateToken;