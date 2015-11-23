
import gulp from 'gulp';

export default () =>
  
  gulp
    .watch(
      ['./styles/**/*', './lib/**/*', './test/**/*'],
      ['sass', 'lint', 'test', 'babel', 'browserify', 'browserify-test', 'compress', 'live-reload']);