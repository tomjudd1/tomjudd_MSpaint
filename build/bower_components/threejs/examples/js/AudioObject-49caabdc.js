THREE.AudioObject=function(t,e,o,i){function n(t){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=function(){x.source.buffer=x.context.createBuffer(e.response,!0),x.source.noteOn(0)},e.send()}if(THREE.Object3D.call(this),void 0===o&&(o=1),void 0===e&&(e=1),void 0===i&&(i=!0),!this.context)try{THREE.AudioObject.prototype.context=new webkitAudioContext}catch(r){return console.warn("THREE.AudioObject: webkitAudioContext not found"),this}this.directionalSource=!1,this.listener=this.context.listener,this.panner=this.context.createPanner(),this.source=this.context.createBufferSource(),this.masterGainNode=this.context.createGainNode(),this.dryGainNode=this.context.createGainNode(),this.masterGainNode.gain.value=e,this.dryGainNode.gain.value=3,this.source.connect(this.panner),this.panner.connect(this.dryGainNode),this.dryGainNode.connect(this.masterGainNode),this.masterGainNode.connect(this.context.destination),this.source.playbackRate.value=o,this.source.loop=i,n(t);var s=new THREE.Vector3,c=new THREE.Vector3,a=new THREE.Vector3,u=new THREE.Vector3,h=new THREE.Vector3,E=new THREE.Vector3,d=new THREE.Vector3,p=new THREE.Vector3,y=new THREE.Vector3,l=new THREE.Vector3,x=this;this.setVolume=function(t){this.masterGainNode.gain.value=t},this.update=function(t){a.copy(s),u.copy(c),s.setFromMatrixPosition(this.matrixWorld),c.setFromMatrixPosition(t.matrixWorld),h.subVectors(s,a),E.subVectors(c,u),l.copy(t.up),p.set(0,0,-1),p.transformDirection(t.matrixWorld),this.listener.setPosition(c.x,c.y,c.z),this.listener.setVelocity(E.x,E.y,E.z),this.listener.setOrientation(p.x,p.y,p.z,l.x,l.y,l.z),this.panner.setPosition(s.x,s.y,s.z),this.panner.setVelocity(h.x,h.y,h.z),this.directionalSource&&(d.set(0,0,-1),d.transformDirection(this.matrixWorld),y.copy(this.up),this.panner.setOrientation(d.x,d.y,d.z,y.x,y.y,y.z))}},THREE.AudioObject.prototype=Object.create(THREE.Object3D.prototype),THREE.AudioObject.prototype.constructor=THREE.AudioObject,THREE.AudioObject.prototype.context=null,THREE.AudioObject.prototype.type=null;