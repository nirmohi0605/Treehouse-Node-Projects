var fs = require("fs")

function mergeValues(values, content){
  //cycle over the keys
  for(var key in values){
    content = content.replace("{{"+key+"}}",values[key])
  }
  
 return content;
}

function view(templateName, values, response){
  
  var fileContents = fs.readFileSync("./views/"+ templateName + ".html", {encoding: "utf8"});
    //insert values into content
    fileContents =  mergeValues(values, fileContents)
    //write out to the response
    response.write(fileContents);
  }


module.exports.view = view