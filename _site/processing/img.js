var FS = require('fs')
, GM = require('gm').subClass({imageMagick: true})
;

var rawdir = "/Users/ccmiller/Desktop/pho/clothes/"

FS.readdir(rawdir, (err, files) => {
  i=01;
  files.forEach(file => {
  if(file.indexOf(".png")>=0){
  console.log("processing file: "+file);

GM(rawdir+file).type('Optimize')
// .autoOrient()
 // .colorize(80, 0, 30)
 .geometry(472,666)
 .contrast(-2)
 // .colors(64)
 // .gamma(5, 5, 5)
.write("../assets/img/garment/imgk-"+i+"-"+file, function (err) {
  if (err){console.log(err)}
})

  }
i++;
  });
})