import React,  { useState, useEffect } from 'react';
import * as three from 'three';
import Tween from 'tween';



var utils = {
    renderToCanvas: function renderToCanvas(width, height, renderFunction) {
      var buffer = document.createElement('canvas');
      buffer.width = width;
      buffer.height = height;
      renderFunction(buffer.getContext('2d'));
      return buffer;
    },
    mapPoint: function mapPoint(lat, lng, scale) {
      if (!scale) {
        scale = 500;
      }
  
      var phi = (90 - lat) * Math.PI / 180;
      var theta = (180 - lng) * Math.PI / 180;
      var x = scale * Math.sin(phi) * Math.cos(theta);
      var y = scale * Math.cos(phi);
      var z = scale * Math.sin(phi) * Math.sin(theta);
      return {
        x: x,
        y: y,
        z: z
      };
    },
    hexToRgb: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    createLabel: function createLabel(text, size, color, font, underlineColor) {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      context.font = size + "pt " + font;
      var textWidth = context.measureText(text).width;
      canvas.width = textWidth;
      canvas.height = size + 14;
  
      if (canvas.width % 2) {
        canvas.width++;
      }
  
      if (canvas.height % 2) {
        canvas.height++;
      }
  
      if (underlineColor) {
        canvas.height += 30;
      }
  
      context.font = size + "pt " + font;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.strokeStyle = 'black';
      context.miterLimit = 2;
      context.lineJoin = 'circle';
      context.lineWidth = 6;
      context.strokeText(text, canvas.width / 2, canvas.height / 2);
      context.lineWidth = 2;
      context.fillStyle = color;
      context.fillText(text, canvas.width / 2, canvas.height / 2);
  
      if (underlineColor) {
        context.strokeStyle = underlineColor;
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(0, canvas.height - 10);
        context.lineTo(canvas.width - 1, canvas.height - 10);
        context.stroke();
      }
  
      return canvas;
    }
  };

// ---GLOBE = ROUND dur
// per encom-globe-react-dist/index
var createIntroLines = function createIntroLines() {
    var sPoint;
    var introLinesMaterial = new three.LineBasicMaterial({
      color: this.introLinesColor,
      transparent: true,
      linewidth: 2,
      opacity: .5
    });
  
    for (var i = 0; i < this.introLinesCount; i++) {
      var geometry = new three.Geometry();
      var lat = Math.random() * 180 + 90;
      var lon = Math.random() * 5;
      var lenBase = 4 + Math.floor(Math.random() * 5);
  
      if (Math.random() < .3) {
        lon = Math.random() * 30 - 50;
        lenBase = 3 + Math.floor(Math.random() * 3);
      }
  
      for (var j = 0; j < lenBase; j++) {
        var thisPoint = utils.mapPoint(lat, lon - j * 5);
        sPoint = new three.Vector3(thisPoint.x * this.introLinesAltitude, thisPoint.y * this.introLinesAltitude, thisPoint.z * this.introLinesAltitude);
        geometry.vertices.push(sPoint);
      }
  
      this.introLines.add(new three.Line(geometry, introLinesMaterial));
    }
  
    this.scene.add(this.introLines);
  };


  function showContentBoxes(item, extraDelay) {

    var itemContent = item.find(".content");

    item.removeAttr("style");

    var height = item.height();
    var width = item.width();
    var left = item.position().left;
    var top = item.position().top;

    var border = item.css("border");
    var boxShadow = item.css("box-shadow");

    var contentBorder = itemContent.css("border");
    var contentBoxShadow = itemContent.css("box-shadow");

    itemContent.children().each(function(index, element){
        $(element).css("visibility", "hidden");
    });

    item.height(0)
    .width(0)
    .css("top", top + height/2)
    .css("left", left + width/2);

    setTimeout(function doHeaderAnimations(){

        item.animate({
            height: height,
            width: "100%",
            left: left,
            top: top

        }, 500);
        item.css({
            opacity: 1
        });
    }, 1500 + extraDelay);

    setTimeout(function(){

        itemContent.children().each(function(index, element){
            $(element).css("visibility", "visible");
        });


    }, 2200);

}


Box.prototype.tick = function(){

    var startTime = 2000;
    var maxTime = 5000;

    if(!this.lastRenderDate){
        this.lastRenderDate = new Date();
    }

    if(!this.firstRenderDate){
        this.firstRenderDate = new Date();
    }

    var totalRunTime = new Date() - this.firstRenderDate - startTime;

    if(totalRunTime < 0)
        return;

    var renderTime = new Date() - this.lastRenderDate;
    this.lastRenderDate = new Date();


    /* run intro animations */
    var percentComplete = Math.min(totalRunTime, maxTime - startTime) / (maxTime - startTime);

    if(!this.animationsDone){

        if(totalRunTime > maxTime){
            this.animationsDone = true;
            totalRunTime = maxTime;
        }


        /* do the frame */

        for(var i = 0; i<this.frameSegments.length; i++){
            var fStartTime = this.frameSegments[i].startTime;
            var fEndTime = this.frameSegments[i].endTime;

            if(totalRunTime > fStartTime){
                var point = this.frameSegments[i].point;
                var func = this.frameSegments[i].func;

                var newPoint = func(Math.min(totalRunTime,fEndTime) - fStartTime);

                if(point.x !== newPoint.x || point.y !== newPoint.y || point.z !== newPoint.z){
                    point.x = newPoint.x;
                    point.y = newPoint.y;
                    point.z = newPoint.z;

                    this.frameGeometry.verticesNeedUpdate = true;
                }

            }
        } 


        /* do the particles */

        // this.particleMaterial.opacity = Math.pow(percentComplete, 2) / 2;

        /* do the sides */

        this.trackerBallMaterial.opacity = Utils.sCurve(percentComplete);

        if(totalRunTime > 1000){
            this.sideMaterial.opacity = Math.pow((Math.min(totalRunTime, maxTime)-1000) / (maxTime-1000), 2);
        }
    }

    /* move the lines */

    for(var i = 0; i< this.trackers.length; i++){
        this.trackers[i].update(totalRunTime);
    }

    /* move the particles inside */

    for(var i = 0; i< this.particleGeometry.vertices.length; i++){
        var x = (i %this.boxWidth) - this.boxWidth/2;
        var z = (Math.floor(i / this.boxDepth) -this.boxDepth/2 );
        var y = Math.sin(Math.PI * 2 * (((totalRunTime / 100) % this.boxHeight)/this.boxHeight)) * this.boxHeight * Math.sin(x/8)*Math.cos(z/8) * (((this.boxWidth/2)-Math.abs(x))/(this.boxWidth/2)) * (((this.boxDepth/2)-Math.abs(z))/(this.boxDepth/2));

        var maxColors = this.particleColors.length - 1;

        this.particleGeometry.vertices[i].x = x;
        this.particleGeometry.vertices[i].y = y
        this.particleGeometry.vertices[i].z = z;

        // fix that 36...
        if(!this.animationsDone){
            this.shaderAttributes.opacity.value[i] = Math.min(1,(36 - Math.sqrt(Math.pow(x,2) + Math.pow(z,2)))/36 * Utils.sCurve(percentComplete) + Math.max(y,0)/10);
        }
        this.shaderAttributes.color.value[i] = this.particleColors[Math.min(maxColors,Math.max(0,Math.floor(y)))];
    }
    if(!this.animationsDone){
        this.shaderAttributes.opacity.needsUpdate = true;
    }
    this.shaderAttributes.color.needsUpdate = true;
    this.particleGeometry.verticesNeedUpdate = true;



    var rotateCameraBy = (2 * Math.PI)/(20000/renderTime);

    this.cameraAngle += rotateCameraBy;

    this.camera.position.x = this.cameraDistance * Math.cos(this.cameraAngle);
    this.camera.position.y = this.cameraDistance/2;
    this.camera.position.z = this.cameraDistance * Math.sin(this.cameraAngle);
    this.camera.lookAt( this.scene.position );
    this.renderer.render( this.scene, this.camera );
};

module.exports = Box;


/*
var createParticles = function(){

    if(this.hexGrid){
        this.scene.remove(this.hexGrid);
    }

    var pointVertexShader = [
        "#define PI 3.141592653589793238462643",
        "#define DISTANCE 500.0",
        "#define INTRODURATION " + (parseFloat(this.introLinesDuration) + .00001),
        "#define INTROALTITUDE " + (parseFloat(this.introLinesAltitude) + .00001),
        "attribute float lng;",
        */
       

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