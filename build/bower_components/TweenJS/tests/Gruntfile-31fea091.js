module.exports=function(e){e.initConfig({pkg:e.file.readJSON("package.json"),jasmine:{run:{src:["../lib/tweenjs-NEXT.combined-cd364dbb.js"],options:{specs:"spec/*Spec.js",helpers:["spec/Helpers-bf2ab491.js"],vendor:[],host:"http://127.0.0.1:<%=connect.serve.options.port%>/"}}},connect:{serve:{options:{keepalive:!0,base:[{path:__dirname,options:{index:"_SpecRunner.html"}},"..","../_assets/","../lib/","./"],useAvailablePort:!0,port:8e3,open:!0}}},listips:{run:{options:{label:"Normal"}}}}),e.registerTask("configureConnectHeadless",function(){e.config("connect.serve.options.keepalive",!1),e.config("connect.serve.options.open",!1)}),e.loadNpmTasks("grunt-contrib-jasmine"),e.loadNpmTasks("grunt-contrib-connect"),e.loadTasks("tasks/"),e.registerTask("default","Launches browser-based tests","serve"),e.registerTask("serve","Launches browser-based tests",["jasmine:run:build","listips","connect"]),e.registerTask("headless","phantom"),e.registerTask("phantom","Launches phantom-based tests",["configureConnectHeadless","connect","jasmine"])};