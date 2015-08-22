/*!
* EaselJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
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
this.createjs=this.createjs||{},function(){"use strict";function t(i,e,n,s){this.Container_constructor(),!t.inited&&t.init(),this.mode=i||t.INDEPENDENT,this.startPosition=e||0,this.loop=n,this.currentFrame=0,this.timeline=new createjs.Timeline(null,s,{paused:!0,position:e,useTicks:!0}),this.paused=!1,this.actionsEnabled=!0,this.autoReset=!0,this.frameBounds=this.frameBounds||null,this.framerate=null,this._synchOffset=0,this._prevPos=-1,this._prevPosition=0,this._t=0,this._managed={}}function i(){throw"MovieClipPlugin cannot be instantiated."}var e=createjs.extend(t,createjs.Container);t.INDEPENDENT="independent",t.SINGLE_FRAME="single",t.SYNCHED="synched",t.inited=!1,t.init=function(){t.inited||(i.install(),t.inited=!0)},e.getLabels=function(){return this.timeline.getLabels()},e.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},e.getDuration=function(){return this.timeline.duration};try{Object.defineProperties(e,{labels:{get:e.getLabels},currentLabel:{get:e.getCurrentLabel},totalFrames:{get:e.getDuration},duration:{get:e.getDuration}})}catch(n){}e.initialize=t,e.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},e.draw=function(t,i){return this.DisplayObject_draw(t,i)?!0:(this._updateTimeline(),this.Container_draw(t,i),!0)},e.play=function(){this.paused=!1},e.stop=function(){this.paused=!0},e.gotoAndPlay=function(t){this.paused=!1,this._goto(t)},e.gotoAndStop=function(t){this.paused=!0,this._goto(t)},e.advance=function(i){var e=t.INDEPENDENT;if(this.mode==e){for(var n=this,s=n.framerate;(n=n.parent)&&null==s;)n.mode==e&&(s=n._framerate);this._framerate=s;var a=null!=s&&-1!=s&&null!=i?i/(1e3/s)+this._t:1,r=0|a;for(this._t=a-r;!this.paused&&r--;)this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()}},e.clone=function(){throw"MovieClip cannot be cloned."},e.toString=function(){return"[MovieClip (name="+this.name+")]"},e._tick=function(t){this.advance(t&&t.delta),this.Container__tick(t)},e._goto=function(t){var i=this.timeline.resolve(t);null!=i&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=i,this._t=0,this._updateTimeline())},e._reset=function(){this._prevPos=-1,this._t=this.currentFrame=0,this.paused=!1},e._updateTimeline=function(){var i=this.timeline,e=this.mode!=t.INDEPENDENT;i.loop=null==this.loop?!0:this.loop;var n=e?this.startPosition+(this.mode==t.SINGLE_FRAME?0:this._synchOffset):this._prevPos<0?0:this._prevPosition,s=e||!this.actionsEnabled?createjs.Tween.NONE:null;if(this.currentFrame=i._calcPosition(n),i.setPosition(n,s),this._prevPosition=i._prevPosition,this._prevPos!=i._prevPos){this.currentFrame=this._prevPos=i._prevPos;for(var a in this._managed)this._managed[a]=1;for(var r=i._tweens,o=0,h=r.length;h>o;o++){var u=r[o],l=u._target;if(l!=this&&!u.passive){var c=u._stepPosition;l instanceof createjs.DisplayObject?this._addManagedChild(l,c):this._setState(l.state,c)}}var d=this.children;for(o=d.length-1;o>=0;o--){var _=d[o].id;1==this._managed[_]&&(this.removeChildAt(o),delete this._managed[_])}}},e._setState=function(t,i){if(t)for(var e=t.length-1;e>=0;e--){var n=t[e],s=n.t,a=n.p;for(var r in a)s[r]=a[r];this._addManagedChild(s,i)}},e._addManagedChild=function(i,e){i._off||(this.addChildAt(i,0),i instanceof t&&(i._synchOffset=e,i.mode==t.INDEPENDENT&&i.autoReset&&!this._managed[i.id]&&i._reset()),this._managed[i.id]=2)},e._getBounds=function(t,i){var e=this.DisplayObject_getBounds();return e||(this._updateTimeline(),this.frameBounds&&(e=this._rectangle.copy(this.frameBounds[this.currentFrame]))),e?this._transformBounds(e,t,i):this.Container__getBounds(t,i)},createjs.MovieClip=createjs.promote(t,"Container"),i.priority=100,i.install=function(){createjs.Tween.installPlugin(i,["startPosition"])},i.init=function(t,i,e){return e},i.step=function(){},i.tween=function(i,e,n,s,a,r){return i.target instanceof t?1==r?a[e]:s[e]:n}}(),this.createjs=this.createjs||{},function(){"use strict";var t=createjs.MovieClip=createjs.MovieClip||{};t.version="NEXT",t.buildDate="Wed, 27 May 2015 18:12:21 GMT"}();