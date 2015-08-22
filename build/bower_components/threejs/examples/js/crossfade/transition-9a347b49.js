function Transition(e,t){this.scene=new THREE.Scene,this.cameraOrtho=new THREE.OrthographicCamera(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,-10,10),this.textures=[];for(var i=0;6>i;i++)this.textures[i]=new THREE.ImageUtils.loadTexture("textures/transition/transition"+(i+1)+".png");this.quadmaterial=new THREE.ShaderMaterial({uniforms:{tDiffuse1:{type:"t",value:null},tDiffuse2:{type:"t",value:null},mixRatio:{type:"f",value:0},threshold:{type:"f",value:.1},useTexture:{type:"i",value:1},tMixTexture:{type:"t",value:this.textures[0]}},vertexShader:["varying vec2 vUv;","void main() {","vUv = vec2( uv.x, uv.y );","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float mixRatio;","uniform sampler2D tDiffuse1;","uniform sampler2D tDiffuse2;","uniform sampler2D tMixTexture;","uniform int useTexture;","uniform float threshold;","varying vec2 vUv;","void main() {","vec4 texel1 = texture2D( tDiffuse1, vUv );","vec4 texel2 = texture2D( tDiffuse2, vUv );","if (useTexture==1) {","vec4 transitionTexel = texture2D( tMixTexture, vUv );","float r = mixRatio * (1.0 + threshold * 2.0) - threshold;","float mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);","gl_FragColor = mix( texel1, texel2, mixf );","} else {","gl_FragColor = mix( texel2, texel1, mixRatio );","}","}"].join("\n")}),quadgeometry=new THREE.PlaneBufferGeometry(window.innerWidth,window.innerHeight),this.quad=new THREE.Mesh(quadgeometry,this.quadmaterial),this.scene.add(this.quad),this.sceneA=e,this.sceneB=t,this.quadmaterial.uniforms.tDiffuse1.value=e.fbo,this.quadmaterial.uniforms.tDiffuse2.value=t.fbo,this.needChange=!1,this.setTextureThreshold=function(e){this.quadmaterial.uniforms.threshold.value=e},this.useTexture=function(e){this.quadmaterial.uniforms.useTexture.value=e?1:0},this.setTexture=function(e){this.quadmaterial.uniforms.tMixTexture.value=this.textures[e]},this.render=function(e){if(transitionParams.animateTransition){var t=(1+Math.sin(transitionParams.transitionSpeed*clock.getElapsedTime()/Math.PI))/2;transitionParams.transition=THREE.Math.smoothstep(t,.3,.7),!transitionParams.loopTexture||0!=transitionParams.transition&&1!=transitionParams.transition?this.needChange=!0:this.needChange&&(transitionParams.texture=(transitionParams.texture+1)%this.textures.length,this.quadmaterial.uniforms.tMixTexture.value=this.textures[transitionParams.texture],this.needChange=!1)}this.quadmaterial.uniforms.mixRatio.value=transitionParams.transition,0==transitionParams.transition?this.sceneB.render(e,!1):1==transitionParams.transition?this.sceneA.render(e,!1):(this.sceneA.render(e,!0),this.sceneB.render(e,!0),renderer.render(this.scene,this.cameraOrtho,null,!0))}}