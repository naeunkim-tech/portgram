const validateData=(from)=>(req, res, next)=> {
      const {dataType}=req[from];
      let requiredFields;
      switch (dataType) {
        case 'education':
          requiredFields = ['school', 'major', 'degree']; //education의 필수 필드 목록
          break;
        case 'certificate':
          requiredFields = ['type', 'date', 'authority']; // certificate의 필수 필드 목록
          break;
        case 'project':
          requiredFields = ['title', 'startdate', 'enddate', 'role']; // project의 필수 필드 목록
          break;
        case 'award':
          requiredFields = ['content', 'organization', 'date']; // award의 필수 필드 목록
          break;
        default:
          return res.status(400).json({ message: 'dataType이 유효하지 않습니다.' });
      }
  
      // 요청 본문에서 필수 필드만 추출하여 확인
      const newData = {};
      for (const field of requiredFields) {
        if (
          req.body[field] === null ||
          req.body[field] === undefined ||
          (typeof req.body[field] !== "string" && !(req.body[field] instanceof Date)) || // 문자열 또는 Date가 아닌 경우
          (typeof req.body[field] === "string" && req.body[field] === "") || // 문자열인데 빈 문자열인 경우
          (req.body[field] instanceof Date && isNaN(req.body[field])) // Date 객체인데 NaN인 경우
        ) {
          return res.status(400).json({ message: `${field}은(는) 필수이며 유효한 값이어야 합니다.` });
        }
        newData[field] = req.body[field];
      }
  
      // 유효성 검사가 통과되면 다음 미들웨어로 이동합니다.
      req.newData = newData; // 요청 객체에 새로운 데이터 추가
      next();
    };
  

module.exports= validateData;
  