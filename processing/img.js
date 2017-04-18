var FS = require('fs')
, GM = require('gm').subClass({imageMagick: true})
;

var rawdir = "/Users/ccmiller/Desktop/pho/clothes/"

FS.readdir(rawdir, (err, files) => {
  files.forEach(file => {
  i=01;
  if(file.indexOf("IMG_")==0){
  console.log("processing file: "+file);

GM(rawdir+file)
// .autoOrient()
 // .colorize(80, 0, 30)
 .contrast(1.5)
 // .colors(64)
 // .gamma(5, 5, 5)
.write("/Users/ccmiller/git/clothes-i-own/assets/img/project/imgk-"+file, function (err) {
  if (err){console.log(err)}
})

  }

  });
})