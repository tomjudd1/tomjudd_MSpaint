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
module.exports=function(n){function i(){return t.length?void o(t.shift(),function(o,t){if(o){var c=Array.isArray(e.configName)?e.configName:[e.configName];c.forEach(function(i){n.config.set(i,t)}),r()}else i()}):(n.option(_portName,-1),void r())}function o(n,i){var o=c.createServer();o.on("error",function(){i(!1,n)}),o.listen(n,function(){i(!0,n),o.close()})}var t,e,r,c=require("net");n.registerMultiTask("findopenport","Prints a list of active ips.",function(){e=this.options(),r=this.async(),t=e.ports||[80,8888,9e3,9999,9001],i()})};