const validator = require('validator')

const validateDeathForm = (values) => {
  let errors = {}
  if (!values.reporterId) {
    errors.reporterId = 'Please give your identification number.'
  }
  else if (!validator.isAlphanumeric(values.reporterId, 'en-ZA')) {
    errors.reporterId = 'Invalid characters in your identification number. Only letters a-z and numbers 0-9 are allowed.'
  }
  else if (!validator.isLength(values.reporterId, {min: 8, max: 8} )) {
    errors.reporterId = "Your identification number should be 8 characters long."
  }

  if (!values.deceasedId) {
    errors.deceasedId = 'Please give the identification number of the deceased.'
  }
  else if (!validator.isAlphanumeric(values.deceasedId, 'en-ZA')) {
    errors.deceasedId = 'Invalid characters in the identification number of the deceased. Only letters a-z and numbers 0-9 are allowed.'
  }
  else if (!validator.isLength(values.deceasedId, {min: 8, max: 8} )) {
    errors.deceasedId = "The identification number of the deceased should be 8 characters long."
  }
  if (!values.timeOfDeath) {
    errors.timeOfDeath = 'Please enter the date of death.'
  }
  return errors;
}

export default validateDeathForm