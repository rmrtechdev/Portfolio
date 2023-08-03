var $ = require("jquery"),
    THREE = require("three");

var webglTest,
    active = false,
    initialized = false,
    currentWidth = 0,
    currentHeight = 0,
    hideFn = function(){}
    LightTable = {},
    lastMessageTime = null,
    numUsers = 1,
    dataStreamOn = false;

/* public function */

LightTable.init = function(_hideFn){

    hideFn = _hideFn;

    $(".lt-header").css("visibility", "hidden");
    $(".content-container").css("visibility", "hidden");


    $("#lt-keyboard").css("opacity", 0);


    webglTest = createWebGlTest();

    $("#light-table").css("visibility", "visible");

    currentWidth = $(window).width();
    currentHeight = $(window).height();


   

LightTable.show = function(cb){

    $("#light-table").css("opacity", 1);
    // do the intro animations
    showContainer();
    setTimeout(showHeaders, 500);
    showContentBoxes($("#lt-readme"), 0);

    showContentBoxes($("#lt-bandwidth"), 100);
    showContentBoxes($("#lt-globalization"), 200);
    showKeyboard();

    if($("#lt-mobile-readme").width() > 0){
        showContentBoxes($("#lt-mobile-readme"), 0);
    }

    $(document).keydown(function(event){

        if(!event.ctrlKey && (event.which < 112 || event.which > 134) && event.which != 91) { // let them do f1-f12, windows key
            var keycode = event.which;
            event.preventDefault();
            keyClick(keycode);
        }
    });

    if(typeof cb == "function"){
        setTimeout(cb, 500);
    }

    active = true;
};

LightTable.hide = function(cb) {
    // reset everything

    active = false;
    $("#lt-mobile-readme").attr("style","");
    $("#k-32").attr("style","");
    $(".lt-header-animator-right").attr("style","");
    $(".lt-header-animator-left").attr("style","");

    $("#light-table").animate({
        opacity: 0
    }, 500);

    setTimeout(function(){
        hideKeyboard();
        hideContainer();
        hideWebgl();
    }, 500);

    webglTest.reset();

    $(document).off();

    if(typeof cb == "function"){
        cb();
    }
};

LightTable.animate = function(){
    if(active && initialized){
        webglTest.tick();
    }
};



LightTable.message = function(message){
    lastMessageTime = Date.now();

    if(message.stream === "meta" && message.size > 0){
        $("#datalink-status").text("CONNECTED. " + message.size + " USER" + (parseInt(message.size,10) === 1 ? "" : "S "));
        $("#datalink-status").css("color", "green");
    }

};

/* private functions */


function createWebGlTest(){
    var canvas = document.getElementById('lt-webglCanvas');
    var renderer = new THREE.WebGLRenderer( { antialias : true, canvas: canvas } );
    var cameraDistance = 100;
    var camera = new THREE.PerspectiveCamera( 50, canvas.width / canvas.height, 1, 400 );
    var cameraAngle=0;
    var scene = new THREE.Scene();
    var splineGeometry = new THREE.Geometry();
    var splineMaterial = new THREE.LineBasicMaterial({
        color: 0x6FC0BA,
        opacity: 0,
        transparent: true
    });

    var backdropGeometry = new THREE.Geometry();
    var backdropMaterial = new THREE.LineBasicMaterial({
        color: 0x1b2f2d,
        opacity: 1,
        transparent: true
    });

    var cameraUp = false;

    renderer.setSize(canvas.width, canvas.height);
    camera.position.z = cameraDistance;
    camera.lookAt(scene.position);

    lastRenderDate = new Date();

    var calc = function(x){
        return (x+200)*(x+100)*(x+280)*(x+10)*(x-300)*(x-250)*(x-150) / Math.pow(10,14)/1.5;
    }

    for(var i = 0; i< 500; i++){
        var y = calc(i-250) * Math.sin(2 * Math.PI * (i % 6) / 6 + i/500) + Math.cos(i) * 5;
        var z = calc(i-250) * Math.cos(2 * Math.PI * (i % 6) / 6 + i/500);
        splineGeometry.vertices.push(new THREE.Vector3(i - 250, y, z));
    }
    splineGeometry.verticesNeedUpdate = true;

    var splineLine = new THREE.Line(splineGeometry, splineMaterial);
    scene.add(splineLine);

    for(var i = 0; i< 25; i++){
        backdropGeometry.vertices.push(new THREE.Vector3(-500,100-i*8,-100));
        backdropGeometry.vertices.push(new THREE.Vector3(500,100-i*8,-100));
    }
    var backdropLine = new THREE.Line(backdropGeometry, backdropMaterial, THREE.LinePieces);
    scene.add(backdropLine);

    renderer.render( scene, camera );

    var firstRun = null;
    var introAnimationDone = false;

    return {
        tick: function (){
            if(firstRun === null){
                firstRun = Date.now() + 2500;
            }
            // renderer.render( this.scene, this.camera );
            var renderTime = new Date() - lastRenderDate;
            var timeSinceStart = Date.now() - firstRun;
            lastRenderDate = new Date();

            var rotateCameraBy = (2 * Math.PI)/(10000/renderTime);
            cameraAngle += rotateCameraBy;

            if(timeSinceStart < 3000){
                backdropMaterial.opacity = Math.max(0,(timeSinceStart-2000)/3000);
                splineMaterial.opacity = timeSinceStart/3000;
            } else if(!introAnimationDone){
                introAnimationDone = true;
                backdropMaterial.opacity = .333;
                splineMaterial.opacity = 1;
            }

            if(lastMessageTime !== null && !dataStreamOn){
                dataStreamOn = true;
                $("#datalink-status").text("CONNECTED");
                $("#datalink-status").css("color", "green");
            }

            if(Math.random() < .1){
                if((lastMessageTime === null && timeSinceStart > 8000) || (lastMessageTime !== null && Date.now() - lastMessageTime > 8000)){
                    $("#datalink-status").text("ERROR");
                    $("#datalink-status").css("color", "red");
                } 
            }


            camera.position.x = Math.sin(cameraAngle) * 20;
            renderer.render(scene, camera );

            splineLine.rotation.x += .01;

        }, 
        reset: function(){
            firstRun = null;
        }
    };

}

function hideWebgl(){
    $('#lt-bandwidth').css("opacity", 0);
}



/* I could make this much more involved, but i'm not really interested in spending time on this part of the app */
/* sorry for disappointing anybody looking at this to see how much functionality there is */



var keyBuffer = [];
var keysRunning = false;
