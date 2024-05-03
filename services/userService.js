const User = require("../db/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findByIdAndDelete } = require("../db/model/awardModel");

class userAuthService {

    // login: jwt 토큰 생성하고 쿠키에 저장
    static setUserToken(res, user) {
      const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
      const token = jwt.sign(user.toJSON(), secretKey);
      console.log(token);
      res.cookie('token', token); // cookie { 'token': token }
    }

    // 모델 층의 User의 email 함수를 사용하여 사용자를 검색
    static async getUserInfo({ email }) {
         const user = await userModel.findById(email);
    
        if (!user) {
            const errorMessage = "사용자를 찾을 수 없습니다."; 
            return { errorMessage };
        }

        return user;
    }

    // register: 데이터베이스에 새로운 사용자 등록
    static async addUser({ email, password, name }) {
      // 이메일 중복 확인
      const user = await User.findByEmail({ email });
      if (user) {
        const errorMessage =
          "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
        return { errorMessage };
      }
  
      // 비밀번호 해쉬화
      const hashedPassword = await bcrypt.hash(password, 10);

      // db에 저장
      const newUser = { email, password: hashedPassword, name };
      const createdNewUser = await User.create({ newUser });
      createdNewUser.errorMessage = null; 
  
      return createdNewUser;
    }
};

exports.userAuthService = userAuthService;