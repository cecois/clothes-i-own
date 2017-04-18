var FS = require('fs')
,MARKDOWN = require( "markdown" ).markdown
;

FS.readdir('/Users/ccmiller/git/clothes-i-own/assets/img/project', (err, files) => {
  files.forEach(file => {
  i=01;
  if(file.indexOf("IMG")==0){
  	var im = file.split("_")[1].split('.JPG')[0]

var md = '---\nlayout: project\ntitle:  "YOUR PROJECT NAME"\ndate:  2017-04-15 16:54:46\nauthor: C.C. Miller\n'
md+='categories:\n- project\nimg: '+file+'\nthumb: '
md+=file+"-thumb.jpg"
md+='\ntagged: Flat,UI,Development\nclient: Wonder Corp.\n'
md+='website: http://blacktie.co\n---\n####YOUR PROJECT NAME\nLorem Ipsum\n####Our Proposal\nLorem Ipsum.'

  	FS.writeFile("/Users/ccmiller/git/clothes-i-own/_projects/2017-04-15-"+im+".markdown", md, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("2017-04-"+i+"-"+im+" saved");
    i++;
}); 
  }

  });
})