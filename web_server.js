var http = require("http"),
    url = require('url'),
    fs = require('fs');
/*var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write( "Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});*/

var server = http.createServer(function(request, response){
  /* if(request.method == 'GET') console.log("method is get");
   else console.log("method is not get");**/
      /*if(request.method == 'GET' && request.url == '/listings') {
        console.log("Yes");
   }
   else {
    response.writeHead(404, {"Content-Type": "text/html"});
     response.write("404 Page not Found");
   }*/


});

   /*fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
   /*if(err) throw err;
   listingData = data;
   console.log(listingData);
   });*/

server.listen(80);
console.log("Server is listening");