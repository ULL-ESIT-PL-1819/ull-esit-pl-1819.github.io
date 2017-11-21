const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('default', ['deploy']);

gulp.task('build', shell.task([         // gitbook destroys everything in the _book directory!
        'gitbook build',                // build HTML in _book
      ],
      { verbose: true }
  )
);

gulp.task('deploy', ['build'], shell.task(
    [ 'git add . ',
      'git ci -am "new version"', // commit changes
      'git push ghio master', // push changes to github repo
      'git push origin master' // push changes to gitbook repo
    ]
  )
);

gulp.task('ghrepo', shell.task( // Open a browser in the github book repo
  'hub browse ULL-PFPDI-GITHUB-1718/ull-pfpdi-github-1718.github.io'
));

gulp.task('apuntes', shell.task( // Open web browser in the github deployment of this book
  'open https://ull-pfpdi-github-1718.github.io'
));

gulp.task("pre-install", shell.task([ // global dependencies
      "npm i -g gitbook-cli",
			"brew install hub"
]));

gulp.task("push", shell.task([ // push to github not to gitbook
      'git ci -am "new version" && git push ghio master && git push origin master',
]));

gulp.task('gbapuntes', shell.task( // Open web browser in the github deployment of this book
  'open https://casianorodriguezleon.gitbooks.io/curso-github/content/'
));


gulp.task('serve', shell.task([         // gitbook destroys everything in the _book directory!
        'gitbook serve',                // build HTML in _book
      ],
      { verbose: true }
  )
);
