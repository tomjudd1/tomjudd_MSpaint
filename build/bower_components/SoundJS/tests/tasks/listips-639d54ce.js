/*
* Copyright (c) 2014 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
module.exports=function(t){var i=require("os");t.registerMultiTask("listips","Prints a list of active ips.",function(){var r=this.options({port:80}),n=r.port,s=r.label?"("+r.label+") ":"";n=80==n?"":":"+n;var o=i.networkInterfaces(),a=[];for(var e in o)for(var l in o[e]){var p=o[e][l];"IPv4"!=p.family||p.internal||a.push("http://"+p.address+n)}a.push("http://localhost"+n),t.log.subhead("\n"+s+"Listening on:\n	",a.join("\n	 "))})};