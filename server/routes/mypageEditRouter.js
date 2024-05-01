const router = require("express").Router();
const { EducationModel, CertificateModel, ProjectModel, AwardModel } = require("../models/allmodels.js");
const validateData=require("../middleware/validate.js")
//수정
router.put('/:dataType/:id', validateData("params"),async (req, res) => {

  const {dataType, id} = req.params;

  const newData = req.body;

  let updatedData;
  switch (dataType) {
    case 'education':
      updatedData = await EducationModel.findOneAndUpdate(
        { _id: id }, 
        { $set: newData }, 
        { new: true } 
      );
      break;
    case 'certificate':
      updatedData = await CertificateModel.findOneAndUpdate(
        { _id: id  }, 
        { $set: newData }, 
        { new: true } 
      );
      break;
    case 'project':
    updatedData = await ProjectModel.findOneAndUpdate(
        { _id: id  }, 
        { $set: newData }, 
        { new: true } 
      );
      break;
    case 'award':
    updatedData = await AwardModel.findOneAndUpdate(
        { _id: id  }, 
        { $set: newData }, 
        { new: true } 
      );
    break;


    default:
      return res.status(400).json({ message: 'dataType이 유효하지 않습니다.' });
  }

  res.status(200).json({ updatedData });
});

//추가
router.post('/:dataType',validateData("params"), async (req, res) => {
  const { dataType } = req.params;
  const newData = req.body;

  let createdData;
  switch (dataType) {
    case 'education':
      createdData = await EducationModel.create(newData);
      break;
    case 'certificate':
      createdData = await CertificateModel.create(newData);
      break;
    case 'project':
      createdData = await ProjectModel.create(newData);
      break;
    case 'award':
      createdData = await AwardModel.create(newData);
      break;
    default:
      return res.status(400).json({ message: 'dataType이 유효하지 않습니다.' });
  }

  res.status(200).json({ createdData });
});

module.exports = router;
  

  