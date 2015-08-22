THREE.glTFLoader=function(e){this.meshesRequested=0,this.meshesLoaded=0,this.pendingMeshes=[],this.animationsRequested=0,this.animationsLoaded=0,this.animations=[],this.shadersRequested=0,this.shadersLoaded=0,this.shaders={},THREE.Loader.call(this,e)},THREE.glTFLoader.prototype=Object.create(THREE.Loader.prototype),THREE.glTFLoader.prototype.constructor=THREE.glTFLoader,THREE.glTFLoader.prototype.load=function(e,t){function r(e){if(!e)return 4294967295;var t=Math.floor(255*e[0]),r=Math.floor(255*e[1]),n=Math.floor(255*e[2]),i=255,a=(i<<24)+(t<<16)+(r<<8)+n;return a}function n(e,t){{var r,n=new THREE.Quaternion,i=new THREE.Vector3;new THREE.Vector3}for(r=0;t>r;r++){i.set(e[4*r],e[4*r+1],e[4*r+2]).normalize();var a=e[4*r+3];n.setFromAxisAngle(i,a),e[4*r]=n.x,e[4*r+1]=n.y,e[4*r+2]=n.z,e[4*r+3]=n.w}}function i(e){switch(e){case WebGLRenderingContext.FLOAT:case WebGLRenderingContext.UNSIGNED_BYTE:case WebGLRenderingContext.UNSIGNED_SHORT:return 1;case WebGLRenderingContext.FLOAT_VEC2:return 2;case WebGLRenderingContext.FLOAT_VEC3:return 3;case WebGLRenderingContext.FLOAT_VEC4:return 4;case WebGLRenderingContext.FLOAT_MAT4:return 16;default:return null}}function a(e){return e?THREE.ImageUtils.loadTexture(e):null}var s=this,o=function(){this.geometry=new THREE.BufferGeometry,this.totalAttributes=0,this.loadedAttributes=0,this.indicesLoaded=!1,this.finished=!1,this.onload=null,this.uvs=null,this.indexArray=null};o.prototype.constructor=o,o.prototype.buildBufferGeometry=function(){var e=this.geometry;e.addAttribute("index",new THREE.BufferAttribute(this.indexArray,1)),e.addDrawCall(0,this.indexArray.length,0),e.computeBoundingSphere()},o.prototype.checkFinished=function(){this.indexArray&&this.loadedAttributes===this.totalAttributes&&(this.buildBufferGeometry(),this.finished=!0,this.onload&&this.onload())};var c=function(){};c.prototype.handleError=function(e,t){console.log("ERROR(IndicesDelegate):"+e+":"+t)},c.prototype.convert=function(e,t){return new Uint16Array(e,0,t.indices.count)},c.prototype.resourceAvailable=function(e,t){var r=t.geometry;return r.indexArray=e,r.checkFinished(),!0};var u=new c,l=function(e,t){this.indices=e,this.geometry=t},h=function(){};h.prototype.handleError=function(e,t){console.log("ERROR(VertexAttributeDelegate):"+e+":"+t)},h.prototype.convert=function(e){return e},h.prototype.arrayResourceAvailable=function(e,t){var r,n,a,s=t.geometry,o=t.attribute,c=t.semantic;if("POSITION"==c)for(r=new Float32Array(e,0,o.count*i(o.type)),n=0,a=r.length;a>n;n+=3)s.geometry.vertices.push(new THREE.Vector3(r[n],r[n+1],r[n+2]));else if("NORMAL"==c)for(s.geometry.normals=[],r=new Float32Array(e,0,o.count*i(o.type)),n=0,a=r.length;a>n;n+=3)s.geometry.normals.push(new THREE.Vector3(r[n],r[n+1],r[n+2]));else if("TEXCOORD_0"==c||"TEXCOORD"==c)for(s.uvs=[],r=new Float32Array(e,0,o.count*i(o.type)),n=0,a=r.length;a>n;n+=2)s.uvs.push(new THREE.Vector2(r[n],1-r[n+1]));else if("WEIGHT"==c)for(nComponents=i(o.type),r=new Float32Array(e,0,o.count*nComponents),n=0,a=r.length;a>n;n+=4)s.geometry.skinWeights.push(new THREE.Vector4(r[n],r[n+1],r[n+2],r[n+3]));else if("JOINT"==c)for(nComponents=i(o.type),r=new Float32Array(e,0,o.count*nComponents),n=0,a=r.length;a>n;n+=4)s.geometry.skinIndices.push(new THREE.Vector4(r[n],r[n+1],r[n+2],r[n+3]))},h.prototype.bufferResourceAvailable=function(e,t){var r,n,a,s=t.geometry,o=t.attribute,c=t.semantic;if("POSITION"==c)r=new Float32Array(e,0,o.count*i(o.type)),s.geometry.addAttribute("position",new THREE.BufferAttribute(r,3));else if("NORMAL"==c)r=new Float32Array(e,0,o.count*i(o.type)),s.geometry.addAttribute("normal",new THREE.BufferAttribute(r,3));else if("TEXCOORD_0"==c||"TEXCOORD"==c){for(a=i(o.type),r=new Float32Array(e,0,o.count*a),n=0;n<r.length/2;n++)r[2*n+1]=1-r[2*n+1];s.geometry.addAttribute("uv",new THREE.BufferAttribute(r,a))}else"WEIGHT"==c?(a=i(o.type),r=new Float32Array(e,0,o.count*a),s.geometry.addAttribute("skinWeight",new THREE.BufferAttribute(r,a))):"JOINT"==c&&(a=i(o.type),r=new Float32Array(e,0,o.count*a),s.geometry.addAttribute("skinIndex",new THREE.BufferAttribute(r,a)))},h.prototype.resourceAvailable=function(e,t){this.bufferResourceAvailable(e,t);var r=t.geometry;return r.loadedAttributes++,r.checkFinished(),!0};var d=new h,f=function(e,t,r){this.attribute=e,this.semantic=t,this.geometry=r},p=function(){this.primitives=[],this.materialsPending=[],this.loadedGeometry=0,this.onCompleteCallbacks=[]};p.prototype.addPrimitive=function(e,t){var r=this;e.onload=function(){r.loadedGeometry++,r.checkComplete()},this.primitives.push({geometry:e,material:t,mesh:null})},p.prototype.onComplete=function(e){this.onCompleteCallbacks.push(e),this.checkComplete()},p.prototype.checkComplete=function(){var e=this;this.onCompleteCallbacks.length&&this.primitives.length==this.loadedGeometry&&(this.onCompleteCallbacks.forEach(function(t){t(e)}),this.onCompleteCallbacks=[])},p.prototype.attachToNode=function(e){this.primitives.forEach(function(t){var r=t.material;r instanceof THREE.Material||(r=s.createShaderMaterial(r));var n=new THREE.Mesh(t.geometry.geometry,r);n.castShadow=!0,e.add(n)})};var E=function(e){this.params=e},m=function(){};m.prototype.handleError=function(e,t){console.log("ERROR(AnimationParameterDelegate):"+e+":"+t)},m.prototype.convert=function(e,t){var r=t.parameter,n=null;switch(r.type){case WebGLRenderingContext.FLOAT:case WebGLRenderingContext.FLOAT_VEC2:case WebGLRenderingContext.FLOAT_VEC3:case WebGLRenderingContext.FLOAT_VEC4:n=new Float32Array(e,0,r.count*i(r.type))}return n},m.prototype.resourceAvailable=function(e,t){var r=t.animation,n=t.parameter;return n.data=e,r.handleParameterLoaded(n),!0};var v=new m,y=function(e,t){this.parameter=e,this.animation=t},g=function(){this.totalParameters=0,this.loadedParameters=0,this.parameters={},this.finishedLoading=!1,this.onload=null};g.prototype.constructor=g,g.prototype.handleParameterLoaded=function(e){this.parameters[e.name]=e,this.loadedParameters++,this.checkFinished()},g.prototype.checkFinished=function(){this.loadedParameters===this.totalParameters&&(this.finishedLoading=!0,this.onload&&this.onload())};var b=function(){};b.prototype.handleError=function(e,t){console.log("ERROR(InverseBindMatricesDelegate):"+e+":"+t)},b.prototype.convert=function(e,t){var r=t.parameter,n=null;switch(r.type){case WebGLRenderingContext.FLOAT_MAT4:n=new Float32Array(e,0,r.count*i(r.type))}return n},b.prototype.resourceAvailable=function(e,t){var r=t.skin;return r.inverseBindMatrices=e,!0};var R=new b,T=function(e,t){this.parameter=e,this.skin=t},w=function(){};w.prototype.handleError=function(e,t){console.log("ERROR(ShaderDelegate):"+e+":"+t)},w.prototype.convert=function(e){return e},w.prototype.resourceAvailable=function(e,t){return s.shadersLoaded++,s.shaders[t.id]=e,!0};var A=new w,L=function(e,t){this.id=e,this.path=t},H=function(e,t,r){this.entryID=e,this.object=t,this.description=r},C=function(){this._entries={}};C.prototype.setEntry=function(e,t,r){return e?(this._entries[e]&&console.warn("entry["+e+"] is being overwritten"),void(this._entries[e]=new H(e,t,r))):void console.error("No EntryID provided, cannot store",r)},C.prototype.getEntry=function(e){return this._entries[e]},C.prototype.clearEntries=function(){this._entries={}},LoadDelegate=function(){},LoadDelegate.prototype.loadCompleted=function(e,t){e.call(Window,t)};var M=Object.create(glTFParser,{load:{enumerable:!0,value:function(e,t){this.resources=new C,this.cameras=[],this.lights=[],this.animations=[],this.joints={},this.skeltons={},THREE.GLTFLoaderUtils.init(),glTFParser.load.call(this,e,t)}},cameras:{enumerable:!0,writable:!0,value:[]},lights:{enumerable:!0,writable:!0,value:[]},animations:{enumerable:!0,writable:!0,value:[]},handleBuffer:{value:function(e,t){return this.resources.setEntry(e,null,t),t.type="ArrayBuffer",!0}},handleBufferView:{value:function(e,t){this.resources.setEntry(e,null,t);var r=this.resources.getEntry(t.buffer);t.type="ArrayBufferView";var n=this.resources.getEntry(e);return n.buffer=r,!0}},handleShader:{value:function(e,t){this.resources.setEntry(e,null,t);var r={id:e,path:t.path},n=new L(e,t.path);return s.shadersRequested++,THREE.GLTFLoaderUtils.getFile(r,A,n),!0}},handleProgram:{value:function(e,t){return this.resources.setEntry(e,null,t),!0}},handleTechnique:{value:function(e,t){return this.resources.setEntry(e,null,t),!0}},createShaderMaterial:{value:function(e){var t=s.shaders[e.params.fragmentShader];if(!t)return console.log("ERROR: Missing fragment shader definition:",e.params.fragmentShader),new THREE.MeshPhongMaterial;var r=s.shaders[e.params.vertexShader];if(!t)return console.log("ERROR: Missing vertex shader definition:",e.params.vertexShader),new THREE.MeshPhongMaterial;{var n={};new THREE.ShaderMaterial({fragmentShader:t,vertexShader:r,uniforms:n})}return new THREE.MeshPhongMaterial(e.params)}},createShaderParams:{value:function(e,t,r,n){var i=this.resources.getEntry(n.program);i&&(r.fragmentShader=i.description.fragmentShader,r.vertexShader=i.description.vertexShader,r.attributes=n.attributes,r.uniforms=n.uniforms)}},threeJSMaterialType:{value:function(e,t,n,i){var s=THREE.MeshPhongMaterial,o=null;if(t&&t.description&&t.description.passes&&(o=t.description.passes.defaultPass),o)if(o.details&&o.details.commonProfile){var c=t.description.passes.defaultPass.details.commonProfile;if(c){switch(c.lightingModel){case"Blinn":case"Phong":s=THREE.MeshPhongMaterial;break;case"Lambert":s=THREE.MeshLambertMaterial;break;default:s=THREE.MeshBasicMaterial}c.extras&&c.extras.doubleSided&&(i.side=THREE.DoubleSide)}}else if(o.instanceProgram){var u=o.instanceProgram;this.createShaderParams(e,n,i,u);var l=!0;l&&(s=E)}var h=null,d=null,f=n.diffuse;if(f){var p=f;if(p){var m=this.resources.getEntry(p);if(m){var v=this.resources.getEntry(m.description.source);v&&(h=v.description.path);var y=this.resources.getEntry(m.description.sampler);y&&(d=y.description)}}}var p=a(h);p&&d&&(d.wrapS==WebGLRenderingContext.REPEAT&&(p.wrapS=THREE.RepeatWrapping),d.wrapT==WebGLRenderingContext.REPEAT&&(p.wrapT=THREE.RepeatWrapping),d.magFilter==WebGLRenderingContext.LINEAR&&(p.magFilter=THREE.LinearFilter),i.map=p);var g=null,b=null,R=n.reflective;if(R){var p=R;if(p){var m=this.resources.getEntry(p);if(m){var v=this.resources.getEntry(m.description.source);v&&(g=v.description.path);var y=this.resources.getEntry(m.description.sampler);y&&(b=y.description)}}}var p=a(g);p&&b&&(b.wrapS==WebGLRenderingContext.REPEAT&&(p.wrapS=THREE.RepeatWrapping),b.wrapT==WebGLRenderingContext.REPEAT&&(p.wrapT=THREE.RepeatWrapping),b.magFilter==WebGLRenderingContext.LINEAR&&(p.magFilter=THREE.LinearFilter),i.envMap=p);var T=n.shininesss||n.shininess;T&&(T=T);var w=h?null:f,A=1;if(n.hasOwnProperty("transparency")){var L=!0;A=L?n.transparency:1-n.transparency}return i.color=r(w),i.opacity=A,i.transparent=1>A,h&&-1!=h.toLowerCase().indexOf(".png")&&(i.transparent=!0),void 0!==T&&(i.shininess=T),void 0!==n.emission&&(i.emissive=r(n.emission)),void 0!==n.specular&&(i.specular=r(n.specular)),s}},handleMaterial:{value:function(e,t){var r=this.resources.getEntry(t.instanceTechnique.technique),n={},i=t.instanceTechnique.values,a=this.threeJSMaterialType(e,r,i,n),s=new a(n);return this.resources.setEntry(e,s,t),!0}},handleMesh:{value:function(e,t){var r=new p;this.resources.setEntry(e,r,t);var n=t.primitives;if(!n)return console.log("MISSING_PRIMITIVES for mesh:"+e),!1;for(var i=0;i<n.length;i++){var a=n[i];if(a.primitive===WebGLRenderingContext.TRIANGLES){var s=new o,c=this.resources.getEntry(a.material);r.addPrimitive(s,c.object);var h=this.resources.getEntry(a.indices),E=this.resources.getEntry(h.description.bufferView),m={bufferView:E,byteOffset:h.description.byteOffset,count:h.description.count,id:h.entryID,type:h.description.type},v=new l(m,s),y=(THREE.GLTFLoaderUtils.getBuffer(m,u,v),Object.keys(a.attributes));y.forEach(function(e){s.totalAttributes++;var r,n=a.attributes[e],i=this.resources.getEntry(n);if(i){r=i.object,r.id=n;var o=this.resources.getEntry(r.bufferView)}else{r=t.attributes[n],r.id=n,this.resources.setEntry(n,r,r);var o=this.resources.getEntry(r.bufferView);i=this.resources.getEntry(n)}{var c={bufferView:o,byteOffset:r.byteOffset,byteStride:r.byteStride,count:r.count,max:r.max,min:r.min,type:r.type,id:n},u=new f(c,e,s);THREE.GLTFLoaderUtils.getBuffer(c,d,u)}},this)}}return!0}},handleCamera:{value:function(e,t){var r;if("perspective"==t.type){var n=t.perspective.znear,i=t.perspective.zfar,a=t.perspective.yfov,s=t.perspective.xfov,o=t.perspective.aspect_ratio;o||(o=1),void 0===a&&s&&(a=s/o),a&&(r=new THREE.PerspectiveCamera(a,o,n,i))}else r=new THREE.OrthographicCamera(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,n,i);return r&&this.resources.setEntry(e,r,t),!0}},handleLight:{value:function(e,t){var n=null,i=t.type;if(i&&t[i]){var a=t[i],s=r(a.color);switch(i){case"directional":n=new THREE.DirectionalLight(s),n.position.set(0,0,1);break;case"point":n=new THREE.PointLight(s);break;case"spot ":n=new THREE.SpotLight(s),n.position.set(0,0,1);break;case"ambient":n=new THREE.AmbientLight(s)}}return n&&this.resources.setEntry(e,n,t),!0}},addPendingMesh:{value:function(e,t){s.pendingMeshes.push({mesh:e,node:t})}},handleNode:{value:function(e,t){var r=null;t.jointId?(r=new THREE.Bone,r.jointId=t.jointId,this.joints[t.jointId]=e):r=new THREE.Object3D,r.name=t.name,this.resources.setEntry(e,r,t);var i=t.matrix;if(i)r.applyMatrix((new THREE.Matrix4).fromArray(i)),r.matrixAutoUpdate=!1,r.matrixWorldNeedsUpdate=!0;else{var a=t.translation,o=t.rotation,c=t.scale,u=a?new THREE.Vector3(a[0],a[1],a[2]):new THREE.Vector3;o&&n(o,1);var l=o?new THREE.Quaternion(o[0],o[1],o[2],o[3]):new THREE.Quaternion,h=c?new THREE.Vector3(c[0],c[1],c[2]):new THREE.Vector3,d=new THREE.Matrix4;d.compose(u,l,h),r.matrixAutoUpdate=!1,r.matrixWorldNeedsUpdate=!0,r.applyMatrix(d)}var f,p=this;if(t.mesh&&(f=this.resources.getEntry(t.mesh),s.meshesRequested++,f.object.onComplete(function(e){p.addPendingMesh(e,r),s.meshesLoaded++,s.checkComplete()})),t.meshes&&t.meshes.forEach(function(e){f=this.resources.getEntry(e),s.meshesRequested++,f.object.onComplete(function(e){p.addPendingMesh(e,r),s.meshesLoaded++,s.checkComplete()})},this),t.instanceSkin){var E=this.resources.getEntry(t.instanceSkin.skin);if(E){var m=E.object;t.instanceSkin.skin=m,r.instanceSkin=t.instanceSkin;var v=t.instanceSkin.sources;m.meshes=[],v.forEach(function(e){f=this.resources.getEntry(e),s.meshesRequested++,f.object.onComplete(function(e){m.meshes.push(e),s.meshesLoaded++,s.checkComplete()})},this)}}if(t.camera){var y=this.resources.getEntry(t.camera);y&&(r.add(y.object),this.cameras.push(y.object))}if(t.light){var g=this.resources.getEntry(t.light);g&&(r.add(g.object),this.lights.push(g.object))}return!0}},buildNodeHirerachy:{value:function(e,t){var r=this.resources.getEntry(e),n=r.object;t.add(n);var i=r.description.children;return i&&i.forEach(function(e){this.buildNodeHirerachy(e,n)},this),n}},buildSkin:{value:function(e){var t=e.instanceSkin.skin;t&&e.instanceSkin.skeletons.forEach(function(r){var n=this.resources.getEntry(r);if(n){var i,a=n.object,s=!0,o=t.meshes.length;for(i=0;o>i;i++){var c=t.meshes[i],u=null;c.primitives.forEach(function(n){var i=n.material;i instanceof THREE.Material||(i=this.createShaderMaterial(i)),u=new THREE.SkinnedMesh(n.geometry.geometry,i,!1),u.add(a);var o,c=n.geometry.geometry;if(c.vertices)for(o=0;o<c.vertices.length;o++)c.vertices[o].applyMatrix4(t.bindShapeMatrix);else if(c.attributes.position){var l=c.attributes.position.array,h=new THREE.Vector3;for(o=0;o<l.length/3;o++)h.set(l[3*o],l[3*o+1],l[3*o+2]),h.applyMatrix4(t.bindShapeMatrix),l[3*o]=h.x,l[3*o+1]=h.y,l[3*o+2]=h.z}if(u&&s){i.skinning=!0,u.boneInverses=[];var d,f=t.jointsIds,p=[],E=[],m=f.length;for(d=0;m>d;d++){var v=f[d],y=this.joints[v],g=this.resources.getEntry(y).object;if(g){g.skin=u,p.push(g);var b=t.inverseBindMatrices,R=(new THREE.Matrix4).set(b[16*d+0],b[16*d+4],b[16*d+8],b[16*d+12],b[16*d+1],b[16*d+5],b[16*d+9],b[16*d+13],b[16*d+2],b[16*d+6],b[16*d+10],b[16*d+14],b[16*d+3],b[16*d+7],b[16*d+11],b[16*d+15]);E.push(R)}else console.log("WARNING: jointId:"+v+" cannot be found in skeleton:"+r)}u.bind(new THREE.Skeleton(p,E,!1))}u&&(u.castShadow=!0,e.add(u))},this)}}},this)}},buildSkins:{value:function(e){e.instanceSkin&&this.buildSkin(e);var t=e.children;t&&t.forEach(function(e){this.buildSkins(e)},this)}},createMeshAnimations:{value:function(e){this.buildSkins(e)}},handleScene:{value:function(e,t,r){return t.nodes?(t.nodes.forEach(function(e){this.buildNodeHirerachy(e,r.rootObj)},this),this.delegate&&this.delegate.loadCompleted(r.callback,r.rootObj),!0):(console.log("ERROR: invalid file required nodes property is missing from scene"),!1)}},handleImage:{value:function(e,t){return this.resources.setEntry(e,null,t),!0}},addNodeAnimationChannel:{value:function(e,t,r){this.nodeAnimationChannels||(this.nodeAnimationChannels={}),this.nodeAnimationChannels[e]||(this.nodeAnimationChannels[e]=[]),this.nodeAnimationChannels[e].push(r)}},createAnimations:{value:function(){for(var e in this.nodeAnimationChannels){var t=this.nodeAnimationChannels[e],r=(t.length,new THREE.glTFAnimation(t));r.name="animation_"+e,this.animations.push(r)}}},buildAnimation:{value:function(e){var t,r=[],i=e.channels.length;for(t=0;i>t;t++){var a=e.channels[t],s=e.samplers[a.sampler];if(s){var o=e.parameters[s.input];if(o&&o.data){var c=e.parameters[s.output];if(c&&c.data){var u=a.target,l=this.resources.getEntry(u.id);if(l){var h=u.path;"rotation"==h&&n(c.data,c.count);var d={keys:o.data,values:c.data,count:o.count,target:l.object,path:h,type:s.interpolation};this.addNodeAnimationChannel(u.id,a,d),r.push(d)}}}}}}},handleAnimation:{value:function(e,t){s.animationsRequested++;var r=new g;r.name=e,r.onload=function(){s.animationsLoaded++,s.animations.push(r),s.checkComplete()},r.channels=t.channels,r.samplers=t.samplers,this.resources.setEntry(e,r,t);var n=t.parameters;if(!n)return console.log("MISSING_PARAMETERS for animation:"+e),!1;var i=Object.keys(n);return i.forEach(function(e){r.totalParameters++;var t=n[e],i=this.resources.getEntry(t);i=i.object;{var a=this.resources.getEntry(i.bufferView),s={bufferView:a,byteOffset:i.byteOffset,count:i.count,type:i.type,id:i.bufferView,name:e},o=new y(s,r);THREE.GLTFLoaderUtils.getBuffer(s,v,o)}},this),!0}},handleAccessor:{value:function(e,t){return this.resources.setEntry(e,t,t),!0}},handleSkin:{value:function(e,t){var r={},n=t.bindShapeMatrix;r.bindShapeMatrix=(new THREE.Matrix4).fromArray(n),r.jointsIds=t.joints;var i=t.inverseBindMatrices;r.inverseBindMatricesDescription=i,r.inverseBindMatricesDescription.id=e+"_inverseBindMatrices";var a=this.resources.getEntry(i.bufferView),s={bufferView:a,byteOffset:i.byteOffset,count:i.count,type:i.type,id:i.bufferView,name:r.inverseBindMatricesDescription.id},o=new T(s,r),c=(THREE.GLTFLoaderUtils.getBuffer(s,R,o),this.resources.getEntry(r.inverseBindMatricesDescription.bufferView));return r.inverseBindMatricesDescription.bufferView=c.object,this.resources.setEntry(e,r,t),!0}},handleSampler:{value:function(e,t){return this.resources.setEntry(e,t,t),!0}},handleTexture:{value:function(e,t){return this.resources.setEntry(e,null,t),!0}},handleError:{value:function(e){throw new Error(e)}},_delegate:{value:new LoadDelegate,writable:!0},delegate:{enumerable:!0,get:function(){return this._delegate},set:function(e){this._delegate=e}}}),S=function(e,t){this.rootObj=e,this.callback=t},k=new THREE.Object3D,x=Object.create(M);return x.initWithPath(e),x.load(new S(k,function(){}),null),this.loader=x,this.callback=t,this.rootObj=k,k},THREE.glTFLoader.prototype.callLoadedCallback=function(){var e={scene:this.rootObj,cameras:this.loader.cameras,animations:this.loader.animations};this.callback(e)},THREE.glTFLoader.prototype.checkComplete=function(){if(this.meshesLoaded==this.meshesRequested&&this.shadersLoaded==this.shadersRequested&&this.animationsLoaded==this.animationsRequested){for(var e=0;e<this.pendingMeshes.length;e++){var t=this.pendingMeshes[e];t.mesh.attachToNode(t.node)}for(var e=0;e<this.animationsLoaded;e++){var r=this.animations[e];this.loader.buildAnimation(r)}this.loader.createAnimations(),this.loader.createMeshAnimations(this.rootObj),this.callLoadedCallback()}};