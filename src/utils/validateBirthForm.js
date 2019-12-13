const validator = require('validator')

const validateBirthForm = (values, step) => {
  let errors = {}
  if (values.step === 1) {
    if (!values.reporterId) {
      errors.reporterId = 'Please give the identification number of the reporter.'
    }
    else if (!validator.isAlphanumeric(values.reporterId, 'en-ZA')) {
      errors.reporterId = 'Invalid characters in your identification number. Only letters a-z and numbers 0-9 are allowed.'
    }
    else if (!validator.isLength(values.reporterId, {min: 8, max: 8} )) {
      errors.reporterId = "Your identification number should be 8 characters long."
    }

    if (!values.motherId) {
      errors.motherId = 'Please give the identification number of the mother.'
    }
    else if (!validator.isAlphanumeric(values.motherId, 'en-ZA')) {
      errors.motherId = 'Invalid characters in the identification number of the mother. Only letters a-z and numbers 0-9 are allowed.'
    }
    else if (!validator.isLength(values.motherId, {min: 8, max: 8} )) {
      errors.motherId = "Identification number of the mother should be 8 characters long."
    }
  }
  else if (values.step === 2) {
    if (!values.firstName) {
      errors.firstName = 'Please give the first name of the child.'
    }
    else if (!validator.isAlpha(values.firstName, 'en-ZA')) {
      errors.firstName = 'Invalid characters in the first name of the child. Only letters are allowed.'
    }
    if (!values.lastName) {
      errors.lastName = 'Please give the last name of the child.'
    }
    else if (!validator.isAlpha(values.firstName, 'en-ZA')) {
      errors.lastName = 'Invalid characters in the last name of the child. Only letters are allowed.'
    }
    if (!values.timeOfBirth) {
      errors.timeOfBirth = 'Please enter the date of birth.'
    }
    if (!values.gender) {
      errors.gender = 'Please enter gender.'
    }
  }
  return errors;
}

export default validateBirthForm