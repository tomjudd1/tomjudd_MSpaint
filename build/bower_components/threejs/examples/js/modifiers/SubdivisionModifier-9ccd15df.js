THREE.SubdivisionModifier=function(e){this.subdivisions=void 0===e?1:e},THREE.SubdivisionModifier.prototype.modify=function(e){for(var n=this.subdivisions;n-->0;)this.smooth(e);delete e.__tmpVertices,e.computeFaceNormals(),e.computeVertexNormals()},function(){function e(e,n,o){var a=Math.min(e,n),i=Math.max(e,n),t=a+"_"+i;return o[t]}function n(e,n,o,a,i,t){var c,s=Math.min(e,n),r=Math.max(e,n),d=s+"_"+r;if(d in a)c=a[d];else{var l=o[s],f=o[r];c={a:l,b:f,newEdge:null,faces:[]},a[d]=c}c.faces.push(i),t[e].edges.push(c),t[n].edges.push(c)}function o(e,o,a,i){var t,c,s;for(t=0,c=e.length;c>t;t++)a[t]={edges:[]};for(t=0,c=o.length;c>t;t++)s=o[t],n(s.a,s.b,e,i,s,a),n(s.b,s.c,e,i,s,a),n(s.c,s.a,e,i,s,a)}function a(e,n,o,a){e.push(new THREE.Face3(n,o,a))}var i=!1,t=["a","b","c"];THREE.SubdivisionModifier.prototype.smooth=function(n){var c,s,r,d,l,f,u,g,h,v,b,b,m,p,E=new THREE.Vector3;c=n.vertices,s=n.faces,v=new Array(c.length),b={},o(c,s,v,b),m=[];var w,y,M,S,H,R,T;for(f in b){for(y=b[f],M=new THREE.Vector3,H=3/8,R=1/8,T=y.faces.length,2!=T&&(H=.5,R=0,1!=T&&i&&console.warn("Subdivision Modifier: Number of connected faces != 2, is: ",T,y)),M.addVectors(y.a,y.b).multiplyScalar(H),E.set(0,0,0),g=0;T>g;g++){for(S=y.faces[g],h=0;3>h&&(w=c[S[t[h]]],w===y.a||w===y.b);h++);E.add(w)}E.multiplyScalar(R),M.add(E),y.newEdge=m.length,m.push(M)}var V,_,x,N,F,A,j;for(p=[],f=0,u=c.length;u>f;f++){for(A=c[f],F=v[f].edges,l=F.length,3==l?V=3/16:l>3&&(V=3/(8*l)),_=1-l*V,x=V,2>=l&&(2==l?(i&&console.warn("2 connecting edges",F),_=.75,x=1/8):1==l?i&&console.warn("only 1 connecting edge"):0==l&&i&&console.warn("0 connecting edges")),j=A.clone().multiplyScalar(_),E.set(0,0,0),g=0;l>g;g++)N=F[g],w=N.a!==A?N.a:N.b,E.add(w);E.multiplyScalar(x),j.add(E),p.push(j)}r=p.concat(m);var k,q,z,B=p.length;for(d=[],f=0,u=s.length;u>f;f++)S=s[f],k=e(S.a,S.b,b).newEdge+B,q=e(S.b,S.c,b).newEdge+B,z=e(S.c,S.a,b).newEdge+B,a(d,k,q,z),a(d,S.a,k,z),a(d,S.b,q,k),a(d,S.c,z,q);n.vertices=r,n.faces=d}}();