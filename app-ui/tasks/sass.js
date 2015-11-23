

import shell from 'gulp-shell';


export default 
  
  shell.task(['npm run sass'], { ignoreErrors: true});