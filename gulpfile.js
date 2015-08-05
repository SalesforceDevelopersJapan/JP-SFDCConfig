var gulp = require("gulp");
var zip = require("gulp-zip");
var through2 = require("through2");
var jsforce = require("jsforce");
var setting = require("./gulpfile-setting.json");

//Deploy using JSForce in gulp-pipe
var forceDeploy = function(username, password) {
  return through2.obj(function(file, enc, callback) {
    var conn;
    conn = new jsforce.Connection();
    return conn.login(username, password).then(function() {
      return conn.metadata.deploy(file.contents,{rollbackOnError:true}).complete({
        details: true
      });
    })
    .then(function(res) {
      if (res.details !== null && !res.success){
        console.error(res);
        return callback(new Error('Deploy failed.'));
      }
      return callback();
    }, function(err) {
      console.error(err);
      return callback(err);
    });
  });
};

gulp.task("deploy",function() {
  return gulp.src("src/**/*", {
    base: "."
  }).pipe(zip('pkg.zip')).pipe(forceDeploy(setting.sf_username, setting.sf_password));
});

gulp.task("watch", function() {
  gulp.watch("src/**/*", ["deploy"]);
});

gulp.task("default", ["deploy"]);
