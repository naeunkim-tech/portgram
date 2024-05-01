const { User } = require("../db/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findByIdAndDelete } = require("../db/model/awardModel");

class userAuthService {
    // login: email 및 password 확인하고 jwt token 부여, 사용자 정보 반환
    static async getUser({ email, password }) {
        const user = await User.findByEmail({ email });
        if (!user) {
            const errorMessage = "해당 이메일은 가입 내역이 없습니다."
            return errorMessage;
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            const errorMessage = "비밀번호가 일치하지 않습니다."
            return errorMessage;
        }

        const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
        const token = jwt.sign({ user_id: user._id }, secretKey);

        const loginUser = {
            token,
            email,
            errorMessage: null,
        };

        return loginUser;
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

    // 이메일 중복 확인
    static async addUser({ email, password }) {
        
        const user = await User.findByEmail({ email });
        if (user) {
          const errorMessage =
            "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
          return { errorMessage };
        }
    
        // 비밀번호 해쉬화
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { email, password: hashedPassword };
    
        // db에 저장
        const createdNewUser = await User.create({ newUser });
        createdNewUser.errorMessage = null; 
    
        return createdNewUser;
      }
};

exports.userAuthService = userAuthService;