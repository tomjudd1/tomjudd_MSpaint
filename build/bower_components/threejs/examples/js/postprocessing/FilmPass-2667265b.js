THREE.FilmPass=function(e,i,s,r){void 0===THREE.FilmShader&&console.error("THREE.FilmPass relies on THREE.FilmShader");var n=THREE.FilmShader;this.uniforms=THREE.UniformsUtils.clone(n.uniforms),this.material=new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),void 0!==r&&(this.uniforms.grayscale.value=r),void 0!==e&&(this.uniforms.nIntensity.value=e),void 0!==i&&(this.uniforms.sIntensity.value=i),void 0!==s&&(this.uniforms.sCount.value=s),this.enabled=!0,this.renderToScreen=!1,this.needsSwap=!0,this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new THREE.Scene,this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this.scene.add(this.quad)},THREE.FilmPass.prototype={render:function(e,i,s,r){this.uniforms.tDiffuse.value=s,this.uniforms.time.value+=r,this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,i,!1)}};