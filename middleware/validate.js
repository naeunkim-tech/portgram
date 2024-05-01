const validateEducationData = (from) => (req, res, next) => {
  const { major, degree, school} = req[from];

  if (major === undefined || major === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (school === undefined || school === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (degree === undefined ||degree === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }
  next();
};

const validateCertificationData= (from) => (req, res, next) => {
  const { type, date, authority} = req[from];

  if (type === undefined || type === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (authority === undefined || authority === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (date === undefined ||date === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }
  next();
};

const validateAwardData= (from) => (req, res, next) => {
  const { content, organization, date} = req[from];

  if (content === undefined || content === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (organization === undefined || organization === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (date === undefined ||date === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }
  next();
};

const validateProjectData= (from) => (req, res, next) => {
  const { title, startDate, endDate, role} = req[from];

  if (title === undefined || title === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (startDate === undefined || startDate === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (endDate === undefined ||endDate === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }

  if (role === undefined ||role === "") {
    const error = new Error(`${from}: content는 필수값입니다.`);
    error.status = 400;
    next(error);
    return;
  }
  next();
};
  

module.exports= {validateAwardData, 
                 validateCertificationData,
                 validateProjectData,
                 validateEducationData,
                }
  
  