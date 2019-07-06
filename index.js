var recipes = {}

var updateObjectWithKeyAndValue = (object, key, value) => {
  Object.assign ({}, object, [key]: value)

  return object
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value

  return object
}
