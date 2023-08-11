const validateBody = (req,res,next)=> {
  const {body} = req;

  if (!body.title){
    return res.status(400).json({message: 'O campo title é obrigatorio'});
  }

  next();
};

module.exports = {
  validateBody
};