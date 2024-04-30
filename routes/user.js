const { Router } = require('express');
const { userAuthService } = require('../services/userService');

const router = Router();

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = userAuthService.getUser({ email, password });

        if (user.errorMessage) {
            throw new Error(user.errorMessage);
        }

        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
});

module.exports = router;


router.get(
    "/users/:email",
    async function (req, res, next) {
      try {
        const id = req.params.email; 
        const currentUserInfo = await userAuthService.getUserInfo(email); 
        
        // errorMessage 가 있는 경우, 에러 생성
        if (currentUserInfo.errorMessage) {
          throw new Error(currentUserInfo.errorMessage); 
        }
  
        res.status(200).send(currentUserInfo);
      } catch (error) {
        next(error);
      }
    }
  );
  
 
  
  router.post("/user/register", async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }
  
      //request에서 데이터 가져오기
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
  
      // 위 데이터를 유저 db에 추가하기
      const newUser = await userAuthService.addUser({
        email,
        password,
      });
  
      if (newUser.errorMessage) {
        throw new Error(newUser.errorMessage);
      }
      res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
    
  });
  
  
  export { router };
  