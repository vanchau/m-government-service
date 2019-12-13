const validator = require('validator')

const validateBirthForm = (values) => {
  let errors = {}
  if (values.step === 1) {
    if (!values.reporterId) {
      errors.reporterId = 'Please give your identification number.'
    }
    else if (!validator.isNumeric(values.reporterId)) {
      errors.reporterId = 'Invalid characters in your identification number. Only numbers are allowed.'
    }
    else if (!validator.isLength(values.reporterId, {min: 11, max: 11} )) {
      errors.reporterId = "Your identification number should be 11 numbers long."
    }

    if (!values.motherId) {
      errors.motherId = 'Please give the identification number of the mother.'
    }
    else if (!validator.isNumeric(values.motherId)) {
      errors.motherId = 'Invalid characters in the identification number of the mother. Only numbers are allowed.'
    }
    else if (!validator.isLength(values.motherId, {min: 11, max: 11} )) {
      errors.motherId = "Identification number of the mother should be 11 numbers long."
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
  else if (values.step === 3) {
    if ((!values.phone && !values.email) && !values.address) {
      errors.contact = 'Please provide at least one type of contact information.'
    }
    else if (values.phone && !validator.isNumeric(values.phone)) {
      errors.contact = 'Invalid phone number. Only numbers are allowed.'
    }
    else if (values.email && !validator.isEmail(values.email)) {
      errors.contact = 'Invalid e-mail format. Please provide a valid e-mail address.'
    }
    else if (values.address && !validator.isAlphanumeric(values.address)) {
      errors.contact = 'Invalid address. Only letters and numbers are allowed.'
    }
  }
  return errors;
}

export default validateBirthForm