const mongoose = require("mongoose");
const faker = require("faker");

const awardSchema = require("./db/schemas/awardSchema");
const certificateSchema = require("./db/schemas/certificateSchema");
const educationSchema = require("./db/schemas/educationSchema");
const projectSchema = require("./db/schemas/projectSchema");
const userSchema = require("./db/schemas/userSchema");

const {AwardModel, CertificateModel, EducationModel,ProjectModel, UserModel }=require("./db/allmodels")

//몽고디비에 연결
mongoose.connect("mongodb+srv://elice:elice@cluster0.se4ig2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"); //본인 몽고디비 입력하면 됩니다.

//수상기록 더미 데이터
awardSchema.statics.generateDummyData = function (userId) {
    return Array.from({ length: 1 }, () => ({   //length:5가 데이터 다섯개를 만드는것, 즉 하나의 유저가 5개의 수상기록을 가지고 있다는 의미입니다. 개수는 자유롭게 조절하시면 됩니다. 
        userId:userId,
        content: faker.lorem.words(),
        organization: faker.company.companyName(),
        date: faker.date.past(),
    }));
};

//자격증 더미 데이터
certificateSchema.statics.generateDummyData = function (userId) {
    return Array.from({ length: 1 }, () => ({
        userId:userId,
        type: faker.random.word(),
        date: faker.date.past(),
        authority: faker.company.companyName(),
    }));
};

// 학력 더미 데이터
educationSchema.statics.generateDummyData = function (userId) {
    return Array.from({ length: 1 }, () => ({
        userId:userId,
        school: faker.company.companyName(),
        major: faker.random.word(),
        degree: faker.random.arrayElement(["재학중", "학사졸업", "석사졸업", "박사졸업"]),
    }));
};

// 프로젝트 더미 데이터
projectSchema.statics.generateDummyData = function (userId) {
    return Array.from({ length: 1 }, () => ({
        userId:userId,
        title: faker.random.words(),
        startDate: faker.date.past(),
        endDate: faker.date.past(),
        role: faker.name.jobTitle(),
    }));
};

//유저 정보 더미 데이터
userSchema.statics.generateDummyData = function (userId) {
    return Array.from({ length: 1 }, () => ({                 //하나의 유저에 unique한 하나의 _id 가 필요하니 무조건 length:1로 설정합니다.
        _id:userId,
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.name.findName(),
    }));
};

//몽고디비에 데이터 집어넣는 함수
const insertDummyData = async (userId) => {
    try {
    
        const awards = awardSchema.statics.generateDummyData(userId);
        const certificates = certificateSchema.statics.generateDummyData(userId);
        const education = educationSchema.statics.generateDummyData(userId);
        const projects = projectSchema.statics.generateDummyData(userId);
        const users = userSchema.statics.generateDummyData(userId);

        await AwardModel.insertMany(awards);
        await CertificateModel.insertMany(certificates);
        await EducationModel.insertMany(education);
        await ProjectModel.insertMany(projects);
        await UserModel.insertMany(users);
  
      console.log("Dummy data inserted successfully.");
    } catch (error) {
      console.error("Error inserting dummy data:", error);
    } finally {
      
      mongoose.disconnect();
    }
  };

const userId = new mongoose.Types.ObjectId();
console.log(userId.toHexString()) //콘솔 창에 나오는 userId 그대로 복붙하여 http://localhost:(포트넘버)posts/(userId)<--여기에 넣으면 됩니다. 

//함수실행
insertDummyData(userId.toHexString());
  

