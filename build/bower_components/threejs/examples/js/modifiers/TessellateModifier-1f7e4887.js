THREE.TessellateModifier=function(e){this.maxEdgeLength=e},THREE.TessellateModifier.prototype.modify=function(e){for(var r,o=[],l=[],t=this.maxEdgeLength*this.maxEdgeLength,c=0,s=e.faceVertexUvs.length;s>c;c++)l[c]=[];for(var c=0,s=e.faces.length;s>c;c++){var v=e.faces[c];if(v instanceof THREE.Face3){var a=v.a,n=v.b,x=v.c,p=e.vertices[a],f=e.vertices[n],i=e.vertices[x],h=p.distanceToSquared(f),m=f.distanceToSquared(i),C=p.distanceToSquared(i);if(h>t||m>t||C>t){var N=e.vertices.length,g=v.clone(),y=v.clone();if(h>=m&&h>=C){var d=p.clone();if(d.lerp(f,.5),g.a=a,g.b=N,g.c=x,y.a=N,y.b=n,y.c=x,3===v.vertexNormals.length){var u=v.vertexNormals[0].clone();u.lerp(v.vertexNormals[1],.5),g.vertexNormals[1].copy(u),y.vertexNormals[0].copy(u)}if(3===v.vertexColors.length){var E=v.vertexColors[0].clone();E.lerp(v.vertexColors[1],.5),g.vertexColors[1].copy(E),y.vertexColors[0].copy(E)}r=0}else if(m>=h&&m>=C){var d=f.clone();if(d.lerp(i,.5),g.a=a,g.b=n,g.c=N,y.a=N,y.b=x,y.c=a,3===v.vertexNormals.length){var u=v.vertexNormals[1].clone();u.lerp(v.vertexNormals[2],.5),g.vertexNormals[2].copy(u),y.vertexNormals[0].copy(u),y.vertexNormals[1].copy(v.vertexNormals[2]),y.vertexNormals[2].copy(v.vertexNormals[0])}if(3===v.vertexColors.length){var E=v.vertexColors[1].clone();E.lerp(v.vertexColors[2],.5),g.vertexColors[2].copy(E),y.vertexColors[0].copy(E),y.vertexColors[1].copy(v.vertexColors[2]),y.vertexColors[2].copy(v.vertexColors[0])}r=1}else{var d=p.clone();if(d.lerp(i,.5),g.a=a,g.b=n,g.c=N,y.a=N,y.b=n,y.c=x,3===v.vertexNormals.length){var u=v.vertexNormals[0].clone();u.lerp(v.vertexNormals[2],.5),g.vertexNormals[2].copy(u),y.vertexNormals[0].copy(u)}if(3===v.vertexColors.length){var E=v.vertexColors[0].clone();E.lerp(v.vertexColors[2],.5),g.vertexColors[2].copy(E),y.vertexColors[0].copy(E)}r=2}o.push(g,y),e.vertices.push(d);for(var T=0,b=e.faceVertexUvs.length;b>T;T++)if(e.faceVertexUvs[T].length){var U=e.faceVertexUvs[T][c],V=U[0],q=U[1],H=U[2];if(0===r){var L=V.clone();L.lerp(q,.5);var R=[V.clone(),L.clone(),H.clone()],S=[L.clone(),q.clone(),H.clone()]}else if(1===r){var L=q.clone();L.lerp(H,.5);var R=[V.clone(),q.clone(),L.clone()],S=[L.clone(),H.clone(),V.clone()]}else{var L=V.clone();L.lerp(H,.5);var R=[V.clone(),q.clone(),L.clone()],S=[L.clone(),q.clone(),H.clone()]}l[T].push(R,S)}}else{o.push(v);for(var T=0,b=e.faceVertexUvs.length;b>T;T++)l[T].push(e.faceVertexUvs[T][c])}}}e.faces=o,e.faceVertexUvs=l};