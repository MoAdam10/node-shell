const fs = require('fs');


function ls() {
	fs.readdir('./', 'utf8', (err, files) => {
		if (err) {
			throw err;
		} else {
			process.stdin.write(files.join('\n'));
			console.log(files)
		}
	});

}


module.exports.ls = ls;


