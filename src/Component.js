module.exports = function() {
  return function() {
    throw new Error('oi, this is a mock!')
  }
}
