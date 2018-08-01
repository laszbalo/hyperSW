const encoder = new TextEncoder()
const decoder = new TextDecoder()

function Buffer(s) {
  this._data = encoder.encode(s)
}

Buffer.prototype.toString = function toString() {
  return decoder.decode(this._data)
}

Buffer.from = function(s) {
  return new Buffer(s)
}


module.exports = Buffer

/*module.exports = {
	from(s) {
		return {
			toString() {
				return s
			}
		}
	}
}*/
