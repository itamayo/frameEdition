var sprintf = require("sprintf-js").sprintf;
var async = require('async');
var fs = require('fs');
var files = [];
var removeFiles = function  (frame,lim){
   files = [];
   for (i=frame;i<lim+frame;i++){
     files.push(sprintf("./public/images/frame%04d.jpg",i));
   }
   var myParallelTasks = [];
   function callback (){

   }
   files.forEach( function( fileName )
   {
       console.log(fileName);
       myParallelTasks.push( fs.unlink( fileName, function(callback)
       {
        //  callback();
       })
       );
   });

   async.parallel( myParallelTasks, function()
   {
       // all done
       console.log( "all done" );
   });
}
module.exports = removeFiles;
