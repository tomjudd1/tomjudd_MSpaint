THREE.PlaneTypedGeometry=function(e,r,t,o){this.parameters={width:e,height:r,widthSegments:t,heightSegments:o};for(var a=e/2,y=r/2,n=t||1,p=o||1,d=n+1,h=p+1,i=e/n,E=r/p,T=new Float32Array(d*h*3),l=new Float32Array(d*h*3),m=new Float32Array(d*h*2),s=0,c=0,g=0;h>g;g++)for(var v=g*E-y,w=0;d>w;w++){var A=w*i-a;T[s]=A,T[s+1]=-v,l[s+2]=1,m[c]=w/n,m[c+1]=1-g/p,s+=3,c+=2}s=0;for(var G=new(T.length/3>65535?Uint32Array:Uint16Array)(n*p*6),g=0;p>g;g++)for(var w=0;n>w;w++){var H=w+d*g,R=w+d*(g+1),f=w+1+d*(g+1),u=w+1+d*g;G[s]=H,G[s+1]=R,G[s+2]=u,G[s+3]=R,G[s+4]=f,G[s+5]=u,s+=6}THREE.IndexedTypedGeometry.call(this),this.setArrays(G,T,l,m),this.computeBoundingSphere()},THREE.PlaneTypedGeometry.prototype=Object.create(THREE.IndexedTypedGeometry.prototype),THREE.PlaneTypedGeometry.prototype.constructor=THREE.PlaneTypedGeometry;