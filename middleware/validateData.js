class NoContentError extends Error {
  constructor(message, status = 404) {
    super(message);
    this.status = status;
  }
}

const validateData = (fields) => (from) => (req, res, next) => {
  for (const field of fields) {
    const value = req[from][field];
<<<<<<< HEAD
    if (value === undefined || value === "") {
      const error = new NoContentError(`${from}: ${field}는 필수값입니다.`);
=======
    if (value === undefined || value === '') {
      const error = new Error(`${from}: ${field}는 필수값입니다.`);
      error.status = 400;
>>>>>>> acfc6ea7620c0feb2c8f8ae5eb9f12b93419b046
      return next(error);
    }
  }

  next();
};

const validateProjectData = validateData([
  'title',
  'startDate',
  'endDate',
  'role',
]);
const validateCertificationData = validateData(['type', 'date', 'authority']);
const validateAwardData = validateData(['content', 'organization', 'date']);
const validateEducationData = validateData(['school', 'major', 'degree']);

module.exports = {
  validateAwardData,
  validateCertificationData,
  validateProjectData,
  validateEducationData,
};
