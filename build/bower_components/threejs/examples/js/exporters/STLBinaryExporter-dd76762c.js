THREE.STLBinaryExporter=function(){},THREE.STLBinaryExporter.prototype={constructor:THREE.STLBinaryExporter,parse:function(){var t=new THREE.Vector3,r=new THREE.Matrix3;return function(e){var a=0;e.traverse(function(t){t instanceof THREE.Mesh&&(a+=t.geometry.faces.length)});var o=80,n=2*a+3*a*4*4+80+4,i=new ArrayBuffer(n),s=new DataView(i);return s.setUint32(o,a,!0),o+=4,e.traverse(function(e){if(e instanceof THREE.Mesh&&e.geometry instanceof THREE.Geometry){var a=e.geometry,n=e.matrixWorld,i=a.vertices,E=a.faces;r.getNormalMatrix(n);for(var c=0,f=E.length;f>c;c++){var y=E[c];t.copy(y.normal).applyMatrix3(r).normalize(),s.setFloat32(o,t.x,!0),o+=4,s.setFloat32(o,t.y,!0),o+=4,s.setFloat32(o,t.z,!0),o+=4;for(var l=[y.a,y.b,y.c],p=0;3>p;p++)t.copy(i[l[p]]).applyMatrix4(n),s.setFloat32(o,t.x,!0),o+=4,s.setFloat32(o,t.y,!0),o+=4,s.setFloat32(o,t.z,!0),o+=4;s.setUint16(o,0,!0),o+=2}}}),s}}()};