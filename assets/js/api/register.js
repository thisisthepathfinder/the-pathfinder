function getSubjects (educationLevel) {
  // Returns list of subjects based on education levels.
  // Primary, secondary, etc.
  const subjects = require('@/data/subjects.json')
  return subjects
}

export {
  getSubjects
}
