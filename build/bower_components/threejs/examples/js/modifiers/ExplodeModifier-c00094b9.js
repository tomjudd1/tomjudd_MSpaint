THREE.ExplodeModifier=function(){},THREE.ExplodeModifier.prototype.modify=function(e){for(var c=[],o=0,t=e.faces.length;t>o;o++){var i=c.length,r=e.faces[o],s=r.a,n=r.b,f=r.c,l=e.vertices[s],p=e.vertices[n],a=e.vertices[f];c.push(l.clone()),c.push(p.clone()),c.push(a.clone()),r.a=i,r.b=i+1,r.c=i+2}e.vertices=c,delete e.__tmpVertices};