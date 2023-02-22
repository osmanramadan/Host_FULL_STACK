exports.port = process.env.PORT || 8000
exports.username = process.env.POSTGRES_USERNAME
exports.password = process.env.POSTGRES_PASSWORD
exports.database = process.env.POSTGRES_DB
exports.host = process.env.POSTGRES_HOST

exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`