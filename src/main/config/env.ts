export default {
	DB_URL:
		process.env.DB_URL || 'mongodb://admin:admin@localhost:27017/node-api?authSource=admin',
	PORT: process.env.PORT || 8080,
};