const fs = require('fs');

const cat = function (filename, done) {
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) {
			done('no such file or directory');
		} else {
			done(data);
		}
	});
};

module.exports = {
	cat,
};
