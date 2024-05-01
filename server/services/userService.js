const { User } = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class userAuthService {
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
}