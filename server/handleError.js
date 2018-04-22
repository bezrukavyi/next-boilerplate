const handleError = (exception) => {
  console.error(exception.stack)
  process.exit(1)
}

module.exports = handleError
