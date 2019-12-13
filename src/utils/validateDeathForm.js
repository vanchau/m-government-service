const validator = require('validator')

const validateDeathForm = (values) => {
  let errors = {}
  if (!values.reporterId) {
    errors.reporterId = 'Please give your identification number.'
  }
  else if (!validator.isNumeric(values.reporterId)) {
    errors.reporterId = 'Invalid characters in your identification number. Only numbers are allowed.'
  }
  else if (!validator.isLength(values.reporterId, {min: 11, max: 11} )) {
    errors.reporterId = "Your identification number should be 11 numbers long."
  }

  if (!values.deceasedId) {
    errors.deceasedId = 'Please give the identification number of the deceased.'
  }
  else if (!validator.isNumeric(values.deceasedId)) {
    errors.deceasedId = 'Invalid characters in the identification number of the deceased. Only numbers are allowed.'
  }
  else if (!validator.isLength(values.deceasedId, {min: 11, max: 11} )) {
    errors.deceasedId = "The identification number of the deceased should be 11 numbers long."
  }
  if (!values.timeOfDeath) {
    errors.timeOfDeath = 'Please enter the date of death.'
  }
  return errors;
}

export default validateDeathForm