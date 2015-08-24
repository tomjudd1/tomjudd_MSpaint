var container, stats;
var camera, scene, renderer, composer, effect;
var geometry, head, hand, followBall;
var pencilZ = -40;
var pencilDrawZ = 3;
var pencilRot = 87;
var pencilDrawRot = 90;
var mouseX = 0, mouseY = 0;
var followPoint = new THREE.Vector3();
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var scaler = 2;
var circSegs = 32;
var zplaneDepth = 280;
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener( 'mouseup', onDocumentMouseUp, false );
document.addEventListener( 'touchmove', onDocumentTouchMove, false );
document.addEventListener( 'touchstart', onDocumentMouseDown, false);
document.addEventListener( 'touchend', onDocumentMouseUp, false);

function init() {


   

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
    camera.position.z = 500;

    scene = new THREE.Scene();

    //Lights
    hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.5);
    hemiLight.color.setHSL( 1, 1, 1);
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 500, 0 );
    scene.add( hemiLight );
    
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    directionalLight.position.set( 1, 1, 1.5 );
    directionalLight.castShadow = true;
    directionalLight.shadowDarkness = 1;
    scene.add( directionalLight );

    // Modelling
    var geometry = new THREE.BoxGeometry( 100, 100, 100 );

    var headGeometry = new  THREE.SphereGeometry( 100 * scaler, circSegs, circSegs );
    var eyeGeometry = new  THREE.SphereGeometry( 10 * scaler, circSegs, circSegs );
    var pupilGeometry = new  THREE.SphereGeometry( 2 * scaler, circSegs, circSegs );
    var noseGeometry = new  THREE.CylinderGeometry( 10, 10, 200, 32 );
    var earsGeometry = new  THREE.CylinderGeometry( 20, 20, 440, 32 );
    var pencilGeometry = new  THREE.CylinderGeometry( 4, 4, 150, 6 );

    var followGeometry = new  THREE.SphereGeometry( 0.1 * scaler, circSegs, circSegs );
    var handGeometry = new  THREE.SphereGeometry( 10 * scaler, circSegs, circSegs );


    // Materials
    var mouthMaterial = new THREE.MeshLambertMaterial( { color: 0X666666, shading: THREE.SmoothShading, overdraw: 1} );
    var eyeMaterial = new THREE.MeshLambertMaterial( { color: 0Xffffff, shading: THREE.SmoothShading, overdraw: 1} );
    var skinMaterial = new THREE.MeshLambertMaterial( { color: 0X999999, shading: THREE.SmoothShading, overdraw: 1} );
    var hairMaterial = new THREE.MeshLambertMaterial( { color: 0X1e1120, shading: THREE.SmoothShading, overdraw: 1} );

    var material = new THREE.MeshNormalMaterial();
    var pupilMaterial = new THREE.MeshBasicMaterial( {color: 0x333333} );


    head = new THREE.Mesh( headGeometry, skinMaterial );
    head.position.x = 10;
    head.position.z = -400;
    head.castShadow = true;
    head.receiveShadow = true;
    scene.add( head );

    nose = new THREE.Mesh( noseGeometry, skinMaterial );
    nose.position.z = 100 * scaler;
    nose.rotation.x = 90 * (Math.PI/180);
    nose.position.y = -10 * scaler;
    //head.add( nose ); 

    ears = new THREE.Mesh( earsGeometry, skinMaterial );
    ears.position.z = 20 * scaler;
    ears.rotation.z = 90 * (Math.PI/180);
    ears.position.y = 0 * scaler;
    //head.add( ears ); 

    lEye = new THREE.Mesh( eyeGeometry, eyeMaterial );
    lEye.position.z = 100 * scaler;
    lEye.position.x = 10 * scaler;
    lEye.castShadow = true;
    lEye.receiveShadow = true;
    head.add( lEye );

    followBall = new THREE.Mesh( followGeometry, material );
    followBall.rotation.x = 25 * (Math.PI/180);
    followBall.rotation.y = 25 * (Math.PI/180);

    //pencil.rotation.y = §-25 * (Math.PI/180);
    scene.add( followBall );



    pencil = new THREE.Mesh( pencilGeometry, mouthMaterial );
    pencil.position.z = 0 * scaler;
    pencil.rotation.x = pencilRot * (Math.PI/180);
    //pencil.rotation.z = -30 * (Math.PI/180);
    //pencil.rotation.y = -25 * (Math.PI/180);
    pencil.position.x = 0 * scaler;
    pencil.position.y = 0 * scaler;
    pencil.position.z = pencilZ * scaler;
    followBall.add( pencil );

    hand = new THREE.Mesh( handGeometry, skinMaterial );
    hand.position.x = -5 * scaler;
    hand.position.y = 20 * scaler;
    hand.position.z = 0 * scaler;
    pencil.add( hand );

    rEye = new THREE.Mesh( eyeGeometry, eyeMaterial );
    rEye.position.z = 100 * scaler;
    rEye.position.x = -10 * scaler;
    rEye.receiveShadow = true;
    rEye.castShadow = true; 
    head.add( rEye );

    lPupil = new THREE.Mesh( pupilGeometry, pupilMaterial );
    lPupil.position.z = 9 * scaler;
    lPupil.position.x = 0 * scaler;
    lEye.add( lPupil );
    rPupil = new THREE.Mesh( pupilGeometry, pupilMaterial );
    rPupil.position.z = 9 * scaler;
    rPupil.position.x = 0 * scaler;
    rEye.add( rPupil );



    var amount = 1, object, parent = head;

    renderer = new THREE.WebGLRenderer( {antialias:true} );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setClearColor( 0Xcccccc);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    // composer
    // postprocessing
    composer = new THREE.EffectComposer( renderer );
    composer.addPass( new THREE.RenderPass( scene, camera ) );


    var rgbEffect = new THREE.ShaderPass( THREE.RGBShiftShader );
    rgbEffect.uniforms[ 'amount' ].value = 0.0025;
    composer.addPass( rgbEffect );

    var dotScreenEffect = new THREE.ShaderPass( THREE.FilmShader );
    dotScreenEffect.renderToScreen = true;

    composer.addPass( dotScreenEffect );

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = 100;
    //container.appendChild( stats.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove(event) {

    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );

    movePen(event.clientX, event.clientY);

}
function onDocumentTouchMove(event) {

    var touchobj = event.changedTouches[0];

    mouseX = ( parseInt(touchobj.clientX) - windowHalfX );
    mouseY = ( parseInt(touchobj.clientY) - windowHalfY );

    movePen(touchobj.clientX, touchobj.clientY);

}

function movePen(eX, eY){

    // Work out and save Follow point 
    var vector = new THREE.Vector3();

    vector.set( ( eX / window.innerWidth ) * 2 - 1, - ( eY / window.innerHeight ) * 2 + 1, 0.5 );

    vector.unproject( camera );

    var dir = vector.sub( camera.position ).normalize();

    var distance = - ((camera.position.z / dir.z) + zplaneDepth);

    followPoint = camera.position.clone().add( dir.multiplyScalar( distance ) );

    //console.log(followPoint);

}

function onDocumentMouseDown(event) {

    pencil.position.z = (pencilZ + pencilDrawZ) * scaler;
    pencil.rotation.x = pencilDrawRot * (Math.PI/180);

}

function onDocumentMouseUp(event) {

    pencil.position.z = pencilZ * scaler;
    pencil.rotation.x = pencilRot * (Math.PI/180);

}

//

function animate() {

    requestAnimationFrame( animate );

    render();
    stats.update();

}

function render() {

    //console.log(mouseX);

    var time = Date.now() * 0.001;

    //var rx = Math.sin( mouseX * 4 ) * 0.9;
    //var ry = Math.sin( mouseX * 4 ) * 0;
    //var rz = Math.sin( mouseX * 4 ) * 0;

    var amp = 35000;

    var rx = mouseY/ amp;
    var ry = mouseX/ amp;
    var rz = mouseX/ amp;

    //camera.position.x += ( mouseX - camera.position.x ) * .05;
    //camera.position.y += ( - mouseY - camera.position.y ) * .05;

    camera.lookAt( head.position );

    head.rotation.x = rx;
    head.rotation.y = ry;
    head.rotation.z = rz;
    //head.lookAt(followPoint);


    lEye.lookAt(followPoint);
    rEye.lookAt(followPoint);

    followBall.position.x = followPoint.x;
    followBall.position.y = followPoint.y;
    followBall.position.z = followPoint.z;


    composer.render( scene, camera );

}

function resize() { 
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;     
}