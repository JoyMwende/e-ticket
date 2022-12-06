const Joi = require("joi");

// function ValidationLogin(email, password) {
//   const schema = Joi.object({
//     email: Joi.required(),
//     password: Joi.min(8).required(),
//   }).options({ abortEarly: false });

//   return schema.validate(email, password);
// }

const ValidationLogin = Joi.object().keys({
  email: Joi.required(),
  phone_number: Joi.required(),
});


const validateStaffs = Joi.object().keys({
    full_name: Joi.required(),
    station_id: Joi.required(),
    occupation: Joi.required(),
    email: Joi.required(),
    phone_number: Joi.required(),
    pass: Joi.required(),
    //isAdmin: Joi.required(),
    //isDeleted: Joi.required(),
  })

const validateTicket = Joi.object().keys({
  staff_id: Joi.required(),
  station_id: Joi.required(),
  machine_id: Joi.required(),
  description: Joi.required(),
  //isDeleted: Joi.required(),
});

module.exports = { ValidationLogin, validateStaffs, validateTicket };
