var FS = require('fs')
,MARKDOWN = require( "markdown" ).markdown
,__ = require("underscore")
,ANNO = require("./anno.json")
;

FS.readdir('../assets/img/garment', (err, files) => {
  files.forEach(file => {
  	if(file.indexOf("imgk")==0){

  	  	var id = file.split("_")[1].split(".png")[0]

  	  	var anno = __.findWhere(ANNO,{id:id})

var nom = (typeof anno !== 'undefined')?anno.name:"no name";
var origin = (typeof anno !== 'undefined')?anno.origin:"no origin";
var tags = (typeof anno !== 'undefined')?anno.tags:"no tags";
  	  
  	  i=01;
  	  if(file.indexOf(".png")>=0){
  	  	var im = file.split("_")[1].split('.png')[0]
  	
  	var md = '---\nlayout: garment'
  	md+='\ntitle:  "'+nom+'"\ndate:  2017-04-15 16:54:46\nauthor: C.C. Miller'
  	md+='\ncategories:\n- clothes'
  	md+='\nimg: '+file
  	// +file+'\nthumb: '
  	// md+=file+"-thumb.jpg"
    md+='\norigin: '+origin
  	md+='\ntagged: '+tags
    // \nclient: Wonder Corp.'
  	md+='\nwebsite: http://clothes-lbones.rhcloud.com\n---'
  	md+='\n####'+nom+'\nLorem Ipsum\n####Our Proposal\nLorem Ipsum.'
  	
  	  	FS.writeFile("../_clothes/2017-04-15-"+im+".markdown", md, function(err) {
  	    if(err) {
  	        return console.log(err);
  	    }
  	
  	    // console.log("2017-04-"+i+"-"+im+" saved");
  	    i++;
  	}); 
  	  }
  	} //if imgk
  });
})