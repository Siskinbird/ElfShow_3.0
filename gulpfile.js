const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/fontsDev.js');


gulp.task(
	'default',
	gulp.series(
		'clean:dev', 'fontsDev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', gulp.series('svgStack:dev', 'svgSymbol:dev'), 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

