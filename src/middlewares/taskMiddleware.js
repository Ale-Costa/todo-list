const validateTitleField = (req,res,next)=> {
  const {body} = req;

  if (!body.title){
    return res.status(400).json({message: 'O campo title é obrigatorio'});
  }

  next();
};

const validateStatusField = (req,res,next)=> {
  const {body} = req;

  if (!body.status){
    return res.status(400).json({message: 'O campo status é obrigatorio'});
  }

  next();
};


module.exports = {
  validateTitleField,
  validateStatusField
};