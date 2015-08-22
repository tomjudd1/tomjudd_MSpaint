!function(){"use strict";var e=function(e){THREE.MeshBasicMaterial.call(this),this.depthTest=!1,this.depthWrite=!1,this.side=THREE.FrontSide,this.transparent=!0,this.setValues(e),this.oldColor=this.color.clone(),this.oldOpacity=this.opacity,this.highlight=function(e){e?(this.color.setRGB(1,1,0),this.opacity=1):(this.color.copy(this.oldColor),this.opacity=this.oldOpacity)}};e.prototype=Object.create(THREE.MeshBasicMaterial.prototype),e.prototype.constructor=e;var t=function(e){THREE.LineBasicMaterial.call(this),this.depthTest=!1,this.depthWrite=!1,this.transparent=!0,this.linewidth=1,this.setValues(e),this.oldColor=this.color.clone(),this.oldOpacity=this.opacity,this.highlight=function(e){e?(this.color.setRGB(1,1,0),this.opacity=1):(this.color.copy(this.oldColor),this.opacity=this.oldOpacity)}};t.prototype=Object.create(THREE.LineBasicMaterial.prototype),t.prototype.constructor=t,THREE.TransformGizmo=function(){var e=this,t=!1,o=!1;this.init=function(){THREE.Object3D.call(this),this.handles=new THREE.Object3D,this.pickers=new THREE.Object3D,this.planes=new THREE.Object3D,this.add(this.handles),this.add(this.pickers),this.add(this.planes);var e=new THREE.PlaneBufferGeometry(50,50,2,2),t=new THREE.MeshBasicMaterial({wireframe:!0});t.side=THREE.DoubleSide;var o={XY:new THREE.Mesh(e,t),YZ:new THREE.Mesh(e,t),XZ:new THREE.Mesh(e,t),XYZE:new THREE.Mesh(e,t)};this.activePlane=o.XYZE,o.YZ.rotation.set(0,Math.PI/2,0),o.XZ.rotation.set(-Math.PI/2,0,0);for(var a in o)o[a].name=a,this.planes.add(o[a]),this.planes[a]=o[a],o[a].visible=!1;var i=function(e,t){for(var o in e)for(a=e[o].length;a--;){var i=e[o][a][0],n=e[o][a][1],s=e[o][a][2];i.name=o,n&&i.position.set(n[0],n[1],n[2]),s&&i.rotation.set(s[0],s[1],s[2]),t.add(i)}};i(this.handleGizmos,this.handles),i(this.pickerGizmos,this.pickers),this.traverse(function(e){if(e instanceof THREE.Mesh){e.updateMatrix();var t=e.geometry.clone();t.applyMatrix(e.matrix),e.geometry=t,e.position.set(0,0,0),e.rotation.set(0,0,0),e.scale.set(1,1,1)}})},this.hide=function(){this.traverse(function(e){e.visible=!1})},this.show=function(){this.traverse(function(o){o.visible=!0,o.parent==e.pickers&&(o.visible=t),o.parent==e.planes&&(o.visible=!1)}),this.activePlane.visible=o},this.highlight=function(e){this.traverse(function(t){t.material&&t.material.highlight&&t.material.highlight(t.name==e?!0:!1)})}},THREE.TransformGizmo.prototype=Object.create(THREE.Object3D.prototype),THREE.TransformGizmo.prototype.constructor=THREE.TransformGizmo,THREE.TransformGizmo.prototype.update=function(e,t){var o=new THREE.Vector3(0,0,0),a=new THREE.Vector3(0,1,0),i=new THREE.Matrix4;this.traverse(function(n){-1!=n.name.search("E")?n.quaternion.setFromRotationMatrix(i.lookAt(t,o,a)):(-1!=n.name.search("X")||-1!=n.name.search("Y")||-1!=n.name.search("Z"))&&n.quaternion.setFromEuler(e)})},THREE.TransformGizmoTranslate=function(){THREE.TransformGizmo.call(this);var o=new THREE.Geometry,a=new THREE.Mesh(new THREE.CylinderGeometry(0,.05,.2,12,1,!1));a.position.y=.5,a.updateMatrix(),o.merge(a.geometry,a.matrix);var i=new THREE.Geometry;i.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(1,0,0));var n=new THREE.Geometry;n.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var s=new THREE.Geometry;s.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,1)),this.handleGizmos={X:[[new THREE.Mesh(o,new e({color:16711680})),[.5,0,0],[0,0,-Math.PI/2]],[new THREE.Line(i,new t({color:16711680}))]],Y:[[new THREE.Mesh(o,new e({color:65280})),[0,.5,0]],[new THREE.Line(n,new t({color:65280}))]],Z:[[new THREE.Mesh(o,new e({color:255})),[0,0,.5],[Math.PI/2,0,0]],[new THREE.Line(s,new t({color:255}))]],XYZ:[[new THREE.Mesh(new THREE.OctahedronGeometry(.1,0),new e({color:16777215,opacity:.25})),[0,0,0],[0,0,0]]],XY:[[new THREE.Mesh(new THREE.PlaneBufferGeometry(.29,.29),new e({color:16776960,opacity:.25})),[.15,.15,0]]],YZ:[[new THREE.Mesh(new THREE.PlaneBufferGeometry(.29,.29),new e({color:65535,opacity:.25})),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new THREE.Mesh(new THREE.PlaneBufferGeometry(.29,.29),new e({color:16711935,opacity:.25})),[.15,0,.15],[-Math.PI/2,0,0]]]},this.pickerGizmos={X:[[new THREE.Mesh(new THREE.CylinderGeometry(.2,0,1,4,1,!1),new e({color:16711680,opacity:.25})),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new THREE.Mesh(new THREE.CylinderGeometry(.2,0,1,4,1,!1),new e({color:65280,opacity:.25})),[0,.6,0]]],Z:[[new THREE.Mesh(new THREE.CylinderGeometry(.2,0,1,4,1,!1),new e({color:255,opacity:.25})),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new THREE.Mesh(new THREE.OctahedronGeometry(.2,0),new e({color:16777215,opacity:.25}))]],XY:[[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4,.4),new e({color:16776960,opacity:.25})),[.2,.2,0]]],YZ:[[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4,.4),new e({color:65535,opacity:.25})),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new THREE.Mesh(new THREE.PlaneBufferGeometry(.4,.4),new e({color:16711935,opacity:.25})),[.2,0,.2],[-Math.PI/2,0,0]]]},this.setActivePlane=function(e,t){var o=new THREE.Matrix4;t.applyMatrix4(o.getInverse(o.extractRotation(this.planes.XY.matrixWorld))),"X"==e&&(this.activePlane=this.planes.XY,Math.abs(t.y)>Math.abs(t.z)&&(this.activePlane=this.planes.XZ)),"Y"==e&&(this.activePlane=this.planes.XY,Math.abs(t.x)>Math.abs(t.z)&&(this.activePlane=this.planes.YZ)),"Z"==e&&(this.activePlane=this.planes.XZ,Math.abs(t.x)>Math.abs(t.y)&&(this.activePlane=this.planes.YZ)),"XYZ"==e&&(this.activePlane=this.planes.XYZE),"XY"==e&&(this.activePlane=this.planes.XY),"YZ"==e&&(this.activePlane=this.planes.YZ),"XZ"==e&&(this.activePlane=this.planes.XZ),this.hide(),this.show()},this.init()},THREE.TransformGizmoTranslate.prototype=Object.create(THREE.TransformGizmo.prototype),THREE.TransformGizmoTranslate.prototype.constructor=THREE.TransformGizmoTranslate,THREE.TransformGizmoRotate=function(){THREE.TransformGizmo.call(this);var o=function(e,t,o){var a=new THREE.Geometry;o=o?o:1;for(var i=0;64*o>=i;++i)"x"==t&&a.vertices.push(new THREE.Vector3(0,Math.cos(i/32*Math.PI),Math.sin(i/32*Math.PI)).multiplyScalar(e)),"y"==t&&a.vertices.push(new THREE.Vector3(Math.cos(i/32*Math.PI),0,Math.sin(i/32*Math.PI)).multiplyScalar(e)),"z"==t&&a.vertices.push(new THREE.Vector3(Math.sin(i/32*Math.PI),Math.cos(i/32*Math.PI),0).multiplyScalar(e));return a};this.handleGizmos={X:[[new THREE.Line(new o(1,"x",.5),new t({color:16711680}))]],Y:[[new THREE.Line(new o(1,"y",.5),new t({color:65280}))]],Z:[[new THREE.Line(new o(1,"z",.5),new t({color:255}))]],E:[[new THREE.Line(new o(1.25,"z",1),new t({color:13421568}))]],XYZE:[[new THREE.Line(new o(1,"z",1),new t({color:7895160}))]]},this.pickerGizmos={X:[[new THREE.Mesh(new THREE.TorusGeometry(1,.12,4,12,Math.PI),new e({color:16711680,opacity:.25})),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new THREE.Mesh(new THREE.TorusGeometry(1,.12,4,12,Math.PI),new e({color:65280,opacity:.25})),[0,0,0],[Math.PI/2,0,0]]],Z:[[new THREE.Mesh(new THREE.TorusGeometry(1,.12,4,12,Math.PI),new e({color:255,opacity:.25})),[0,0,0],[0,0,-Math.PI/2]]],E:[[new THREE.Mesh(new THREE.TorusGeometry(1.25,.12,2,24),new e({color:16776960,opacity:.25}))]],XYZE:[[new THREE.Mesh(new THREE.Geometry)]]},this.setActivePlane=function(e){"E"==e&&(this.activePlane=this.planes.XYZE),"X"==e&&(this.activePlane=this.planes.YZ),"Y"==e&&(this.activePlane=this.planes.XZ),"Z"==e&&(this.activePlane=this.planes.XY),this.hide(),this.show()},this.update=function(e,t){THREE.TransformGizmo.prototype.update.apply(this,arguments);var o=({handles:this.handles,pickers:this.pickers},new THREE.Matrix4),a=new THREE.Euler(0,0,1),i=new THREE.Quaternion,n=new THREE.Vector3(1,0,0),s=new THREE.Vector3(0,1,0),r=new THREE.Vector3(0,0,1),c=new THREE.Quaternion,E=new THREE.Quaternion,h=new THREE.Quaternion,l=t.clone();a.copy(this.planes.XY.rotation),i.setFromEuler(a),o.makeRotationFromQuaternion(i).getInverse(o),l.applyMatrix4(o),this.traverse(function(e){i.setFromEuler(a),"X"==e.name&&(c.setFromAxisAngle(n,Math.atan2(-l.y,l.z)),i.multiplyQuaternions(i,c),e.quaternion.copy(i)),"Y"==e.name&&(E.setFromAxisAngle(s,Math.atan2(l.x,l.z)),i.multiplyQuaternions(i,E),e.quaternion.copy(i)),"Z"==e.name&&(h.setFromAxisAngle(r,Math.atan2(l.y,l.x)),i.multiplyQuaternions(i,h),e.quaternion.copy(i))})},this.init()},THREE.TransformGizmoRotate.prototype=Object.create(THREE.TransformGizmo.prototype),THREE.TransformGizmoRotate.prototype.constructor=THREE.TransformGizmoRotate,THREE.TransformGizmoScale=function(){THREE.TransformGizmo.call(this);var o=new THREE.Geometry,a=new THREE.Mesh(new THREE.BoxGeometry(.125,.125,.125));a.position.y=.5,a.updateMatrix(),o.merge(a.geometry,a.matrix);var i=new THREE.Geometry;i.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(1,0,0));var n=new THREE.Geometry;n.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var s=new THREE.Geometry;s.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,1)),this.handleGizmos={X:[[new THREE.Mesh(o,new e({color:16711680})),[.5,0,0],[0,0,-Math.PI/2]],[new THREE.Line(i,new t({color:16711680}))]],Y:[[new THREE.Mesh(o,new e({color:65280})),[0,.5,0]],[new THREE.Line(n,new t({color:65280}))]],Z:[[new THREE.Mesh(o,new e({color:255})),[0,0,.5],[Math.PI/2,0,0]],[new THREE.Line(s,new t({color:255}))]],XYZ:[[new THREE.Mesh(new THREE.BoxGeometry(.125,.125,.125),new e({color:16777215,opacity:.25}))]]},this.pickerGizmos={X:[[new THREE.Mesh(new THREE.CylinderGeometry(.2,0,1,4,1,!1),new e({color:16711680,opacity:.25})),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new THREE.Mesh(new THREE.CylinderGeometry(.2,0,1,4,1,!1),new e({color:65280,opacity:.25})),[0,.6,0]]],Z:[[new THREE.Mesh(new THREE.CylinderGeometry(.2,0,1,4,1,!1),new e({color:255,opacity:.25})),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new THREE.Mesh(new THREE.BoxGeometry(.4,.4,.4),new e({color:16777215,opacity:.25}))]]},this.setActivePlane=function(e,t){var o=new THREE.Matrix4;t.applyMatrix4(o.getInverse(o.extractRotation(this.planes.XY.matrixWorld))),"X"==e&&(this.activePlane=this.planes.XY,Math.abs(t.y)>Math.abs(t.z)&&(this.activePlane=this.planes.XZ)),"Y"==e&&(this.activePlane=this.planes.XY,Math.abs(t.x)>Math.abs(t.z)&&(this.activePlane=this.planes.YZ)),"Z"==e&&(this.activePlane=this.planes.XZ,Math.abs(t.x)>Math.abs(t.y)&&(this.activePlane=this.planes.YZ)),"XYZ"==e&&(this.activePlane=this.planes.XYZE),this.hide(),this.show()},this.init()},THREE.TransformGizmoScale.prototype=Object.create(THREE.TransformGizmo.prototype),THREE.TransformGizmoScale.prototype.constructor=THREE.TransformGizmoScale,THREE.TransformControls=function(e,t){function o(e){if(void 0!==r.object&&c!==!0){e.preventDefault();var t=e.changedTouches?e.changedTouches[0]:e,o=s(t,r.gizmo[E].pickers.children),a=null;o&&(a=o.object.name),r.axis!==a&&(r.axis=a,r.update(),r.dispatchEvent(h))}}function a(e){if(void 0!==r.object&&c!==!0){e.preventDefault(),e.stopPropagation();var t=e.changedTouches?e.changedTouches[0]:e;if(0===t.button||void 0===t.button){var o=s(t,r.gizmo[E].pickers.children);if(o){r.dispatchEvent(l),r.axis=o.object.name,r.update(),x.copy(C).sub(L).normalize(),r.gizmo[E].setActivePlane(r.axis,x);var a=s(t,[r.gizmo[E].activePlane]);I.copy(r.object.position),V.copy(r.object.scale),F.extractRotation(r.object.matrix),B.extractRotation(r.object.matrixWorld),A.extractRotation(r.object.parent.matrixWorld),Q.setFromMatrixScale(v.getInverse(r.object.parent.matrixWorld)),w.copy(a.point)}}c=!0}}function i(e){if(void 0!==r.object&&null!==r.axis&&c!==!1){e.preventDefault(),e.stopPropagation();var t=e.changedTouches?e.changedTouches[0]:e,o=s(t,[r.gizmo[E].activePlane]);u.copy(o.point),"translate"==E?(u.sub(w),u.multiply(Q),"local"==r.space&&(u.applyMatrix4(v.getInverse(B)),-1==r.axis.search("X")&&(u.x=0),-1==r.axis.search("Y")&&(u.y=0),-1==r.axis.search("Z")&&(u.z=0),u.applyMatrix4(F),r.object.position.copy(I),r.object.position.add(u)),("world"==r.space||-1!=r.axis.search("XYZ"))&&(-1==r.axis.search("X")&&(u.x=0),-1==r.axis.search("Y")&&(u.y=0),-1==r.axis.search("Z")&&(u.z=0),u.applyMatrix4(v.getInverse(A)),r.object.position.copy(I),r.object.position.add(u)),null!==r.snap&&(-1!=r.axis.search("X")&&(r.object.position.x=Math.round(r.object.position.x/r.snap)*r.snap),-1!=r.axis.search("Y")&&(r.object.position.y=Math.round(r.object.position.y/r.snap)*r.snap),-1!=r.axis.search("Z")&&(r.object.position.z=Math.round(r.object.position.z/r.snap)*r.snap))):"scale"==E?(u.sub(w),u.multiply(Q),"local"==r.space&&("XYZ"==r.axis?(d=1+u.y/50,r.object.scale.x=V.x*d,r.object.scale.y=V.y*d,r.object.scale.z=V.z*d):(u.applyMatrix4(v.getInverse(B)),"X"==r.axis&&(r.object.scale.x=V.x*(1+u.x/50)),"Y"==r.axis&&(r.object.scale.y=V.y*(1+u.y/50)),"Z"==r.axis&&(r.object.scale.z=V.z*(1+u.z/50))))):"rotate"==E&&(u.sub(L),u.multiply(Q),z.copy(w).sub(L),z.multiply(Q),"E"==r.axis?(u.applyMatrix4(v.getInverse(M)),z.applyMatrix4(v.getInverse(M)),y.set(Math.atan2(u.z,u.y),Math.atan2(u.x,u.z),Math.atan2(u.y,u.x)),H.set(Math.atan2(z.z,z.y),Math.atan2(z.x,z.z),Math.atan2(z.y,z.x)),f.setFromRotationMatrix(v.getInverse(A)),Z.setFromAxisAngle(x,y.z-H.z),P.setFromRotationMatrix(B),f.multiplyQuaternions(f,Z),f.multiplyQuaternions(f,P),r.object.quaternion.copy(f)):"XYZE"==r.axis?(Z.setFromEuler(u.clone().cross(z).normalize()),f.setFromRotationMatrix(v.getInverse(A)),X.setFromAxisAngle(Z,-u.clone().angleTo(z)),P.setFromRotationMatrix(B),f.multiplyQuaternions(f,X),f.multiplyQuaternions(f,P),r.object.quaternion.copy(f)):"local"==r.space?(u.applyMatrix4(v.getInverse(B)),z.applyMatrix4(v.getInverse(B)),y.set(Math.atan2(u.z,u.y),Math.atan2(u.x,u.z),Math.atan2(u.y,u.x)),H.set(Math.atan2(z.z,z.y),Math.atan2(z.x,z.z),Math.atan2(z.y,z.x)),P.setFromRotationMatrix(F),X.setFromAxisAngle(g,y.x-H.x),Y.setFromAxisAngle(b,y.y-H.y),j.setFromAxisAngle(G,y.z-H.z),"X"==r.axis&&P.multiplyQuaternions(P,X),"Y"==r.axis&&P.multiplyQuaternions(P,Y),"Z"==r.axis&&P.multiplyQuaternions(P,j),r.object.quaternion.copy(P)):"world"==r.space&&(y.set(Math.atan2(u.z,u.y),Math.atan2(u.x,u.z),Math.atan2(u.y,u.x)),H.set(Math.atan2(z.z,z.y),Math.atan2(z.x,z.z),Math.atan2(z.y,z.x)),f.setFromRotationMatrix(v.getInverse(A)),X.setFromAxisAngle(g,y.x-H.x),Y.setFromAxisAngle(b,y.y-H.y),j.setFromAxisAngle(G,y.z-H.z),P.setFromRotationMatrix(B),"X"==r.axis&&f.multiplyQuaternions(f,X),"Y"==r.axis&&f.multiplyQuaternions(f,Y),"Z"==r.axis&&f.multiplyQuaternions(f,j),f.multiplyQuaternions(f,P),r.object.quaternion.copy(f))),r.update(),r.dispatchEvent(h),r.dispatchEvent(m)}}function n(e){c&&null!==r.axis&&(p.mode=E,r.dispatchEvent(p)),c=!1,o(e)}function s(o,a){var i=t.getBoundingClientRect(),n=(o.clientX-i.left)/i.width,s=(o.clientY-i.top)/i.height;R.set(2*n-1,-(2*s)+1,.5),R.unproject(e),T.set(C,R.sub(C).normalize());var r=T.intersectObjects(a,!0);return r[0]?r[0]:!1}THREE.Object3D.call(this),t=void 0!==t?t:document,this.gizmo={},this.gizmo.translate=new THREE.TransformGizmoTranslate,this.gizmo.rotate=new THREE.TransformGizmoRotate,this.gizmo.scale=new THREE.TransformGizmoScale,this.add(this.gizmo.translate),this.add(this.gizmo.rotate),this.add(this.gizmo.scale),this.gizmo.translate.hide(),this.gizmo.rotate.hide(),this.gizmo.scale.hide(),this.object=void 0,this.snap=null,this.space="world",this.size=1,this.axis=null;var r=this,c=!1,E="translate",h={type:"change"},l={type:"mouseDown"},p={type:"mouseUp",mode:E},m={type:"objectChange"},T=new THREE.Raycaster,R=new THREE.Vector3,u=new THREE.Vector3,w=new THREE.Vector3,y=new THREE.Vector3,H=new THREE.Vector3,d=1,M=new THREE.Matrix4,x=new THREE.Vector3,v=new THREE.Matrix4,z=new THREE.Vector3,f=new THREE.Quaternion,g=new THREE.Vector3(1,0,0),b=new THREE.Vector3(0,1,0),G=new THREE.Vector3(0,0,1),P=new THREE.Quaternion,X=new THREE.Quaternion,Y=new THREE.Quaternion,j=new THREE.Quaternion,Z=new THREE.Quaternion,I=new THREE.Vector3,V=new THREE.Vector3,F=new THREE.Matrix4,A=new THREE.Matrix4,Q=new THREE.Vector3,L=new THREE.Vector3,O=new THREE.Euler,B=new THREE.Matrix4,C=new THREE.Vector3,k=new THREE.Euler;t.addEventListener("mousedown",a,!1),t.addEventListener("touchstart",a,!1),t.addEventListener("mousemove",o,!1),t.addEventListener("touchmove",o,!1),t.addEventListener("mousemove",i,!1),t.addEventListener("touchmove",i,!1),t.addEventListener("mouseup",n,!1),t.addEventListener("mouseout",n,!1),t.addEventListener("touchend",n,!1),t.addEventListener("touchcancel",n,!1),t.addEventListener("touchleave",n,!1),this.attach=function(e){r.object=e,this.gizmo.translate.hide(),this.gizmo.rotate.hide(),this.gizmo.scale.hide(),this.gizmo[E].show(),r.update()},this.detach=function(){r.object=void 0,this.axis=null,this.gizmo.translate.hide(),this.gizmo.rotate.hide(),this.gizmo.scale.hide()},this.setMode=function(e){E=e?e:E,"scale"==E&&(r.space="local"),this.gizmo.translate.hide(),this.gizmo.rotate.hide(),this.gizmo.scale.hide(),this.gizmo[E].show(),this.update(),r.dispatchEvent(h)},this.setSnap=function(e){r.snap=e},this.setSize=function(e){r.size=e,this.update(),r.dispatchEvent(h)},this.setSpace=function(e){r.space=e,this.update(),r.dispatchEvent(h)},this.update=function(){void 0!==r.object&&(r.object.updateMatrixWorld(),L.setFromMatrixPosition(r.object.matrixWorld),O.setFromRotationMatrix(v.extractRotation(r.object.matrixWorld)),e.updateMatrixWorld(),C.setFromMatrixPosition(e.matrixWorld),k.setFromRotationMatrix(v.extractRotation(e.matrixWorld)),d=L.distanceTo(C)/6*r.size,this.position.copy(L),this.scale.set(d,d,d),x.copy(C).sub(L).normalize(),"local"==r.space?this.gizmo[E].update(O,x):"world"==r.space&&this.gizmo[E].update(new THREE.Euler,x),this.gizmo[E].highlight(r.axis))}},THREE.TransformControls.prototype=Object.create(THREE.Object3D.prototype),THREE.TransformControls.prototype.constructor=THREE.TransformControls}();