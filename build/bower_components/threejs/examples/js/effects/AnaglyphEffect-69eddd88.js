THREE.AnaglyphEffect=function(e,r,a){var t,o,i,n,p=new THREE.Matrix4,l=new THREE.Matrix4,v=125,m=new THREE.PerspectiveCamera;m.matrixAutoUpdate=!1;var c=new THREE.PerspectiveCamera;c.matrixAutoUpdate=!1;var s=new THREE.OrthographicCamera(-1,1,1,-1,0,1),E=new THREE.Scene,d={minFilter:THREE.LinearFilter,magFilter:THREE.NearestFilter,format:THREE.RGBAFormat};void 0===r&&(r=512),void 0===a&&(a=512);var R=new THREE.WebGLRenderTarget(r,a,d),f=new THREE.WebGLRenderTarget(r,a,d),u=new THREE.ShaderMaterial({uniforms:{mapLeft:{type:"t",value:R},mapRight:{type:"t",value:f}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = vec2( uv.x, uv.y );","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D mapLeft;","uniform sampler2D mapRight;","varying vec2 vUv;","void main() {","	vec4 colorL, colorR;","	vec2 uv = vUv;","	colorL = texture2D( mapLeft, uv );","	colorR = texture2D( mapRight, uv );","	gl_FragColor = vec4( colorL.g * 0.7 + colorL.b * 0.3, colorR.g, colorR.b, colorL.a + colorR.a ) * 1.1;","}"].join("\n")}),T=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),u);E.add(T),this.setSize=function(r,a){R&&R.dispose(),f&&f.dispose(),R=new THREE.WebGLRenderTarget(r,a,d),f=new THREE.WebGLRenderTarget(r,a,d),u.uniforms.mapLeft.value=R,u.uniforms.mapRight.value=f,e.setSize(r,a)},this.render=function(r,a){r.updateMatrixWorld(),void 0===a.parent&&a.updateMatrixWorld();var d=t!==a.aspect||o!==a.near||i!==a.far||n!==a.fov;if(d){t=a.aspect,o=a.near,i=a.far,n=a.fov;var u,T,g=a.projectionMatrix.clone(),x=v/30*.5,H=x*o/v,h=o*Math.tan(THREE.Math.degToRad(.5*n));p.elements[12]=x,l.elements[12]=-x,u=-h*t+H,T=h*t+H,g.elements[0]=2*o/(T-u),g.elements[8]=(T+u)/(T-u),m.projectionMatrix.copy(g),u=-h*t-H,T=h*t-H,g.elements[0]=2*o/(T-u),g.elements[8]=(T+u)/(T-u),c.projectionMatrix.copy(g)}m.matrixWorld.copy(a.matrixWorld).multiply(l),m.position.copy(a.position),m.near=a.near,m.far=a.far,e.render(r,m,R,!0),c.matrixWorld.copy(a.matrixWorld).multiply(p),c.position.copy(a.position),c.near=a.near,c.far=a.far,e.render(r,c,f,!0),e.render(E,s)},this.dispose=function(){R&&R.dispose(),f&&f.dispose()}};