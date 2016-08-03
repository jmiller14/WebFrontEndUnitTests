const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const rename = require("gulp-concat");
const uglify = require("gulp-uglify");
const ngAnnotate = require("gulp-ng-annotate");
const serve = require("gulp-serve");
const del = require("del");

const paths = {
    app: [
        "ngculator/ngculator.js",
        "ngculator/ngculator.devel.js",
        "!ngculator/ngculator.test.js",
        "ngculator/**/*.js",
        "!ngculator/dist/**/*.js",
        "!ngculator/**/*.test.js",
    ],
};

gulp.task("default", ["watch", "serve"]);

gulp.task("build", () => gulp
    .src(paths.app)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ["es2015", "angular"],
    }))
    .pipe(ngAnnotate())
    .pipe(concat("build.js"))
    .pipe(uglify())
    .pipe(rename("build.min.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("ngculator/dist"))
);

gulp.task("serve", serve("ngculator"));

gulp.task("watch", ["build"], () => {
    gulp.watch(paths.app, ["build"])
});

gulp.task("clean", done => {
    del(["ngculator/dist/*"], done)
});
