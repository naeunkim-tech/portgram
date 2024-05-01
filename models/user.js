const { UserModel } = require("./model/userModel");

class User {
    static async findAll() {
        const users = await UserModel.find({});
        return users;
    }

    static async findByEmail({ email }) {
        const user = await UserModel.findOne({ email });
        return user;
    }

    static async create({ newUser }) {
        const user = await UserModel.create({ newUser });
        return user;
    }
}

exports.User = User;