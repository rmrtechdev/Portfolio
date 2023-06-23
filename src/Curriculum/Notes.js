import React, { useEffect, useState } from "react";
import EventSource from "event-source";
import Boardroom from "./Boardroom";
import LightTable from "./LightTable";

import $ from "jquery-ui";
import './boardroom-styles.css'
import './light-table-styles.css'




function Notes() {

    useEffect(() => window.scrollTo(0, 0), [])




        
$.fn = function (scale) {

    var top = Math.max(0, (($(window).height() - $(this).outerHeight()) / 2 - 50) + $(window).scrollTop());
    var left = Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft());

    if (scale) {
        top = Math.max(0, (($(window).height() - $(this).outerHeight() * scale) / 2 - 50) + $(window).scrollTop());
        left = Math.max(0, (($(window).width() - $(this).outerWidth() * scale) / 2) + $(window).scrollLeft());
    }

    this.css("position", "relative");
    this.css("top", top + "px");
    this.css("left", left + "px");
    return this;
}

var esPath = "/events.js";
if (window._esPath) {
    esPath = window._esPath;
}
var es = new EventSource(esPath);
var listener = function (event) {
    var div = document.createElement("div");
    var type = event.type;
    if (type === "message") {
        if (active === "lt") {
            LightTable.message(JSON.parse(event.data));
        } else {
            setTimeout(function () {
                Boardroom.message(JSON.parse(event.data));
            }, 3000 * Math.random());
        }
    }
};
es.addEventListener("open", listener);
es.addEventListener("message", listener);
es.addEventListener("error", listener);


/*
var onSwitch = function (view) {
    var screensaver = $("#screensaver");
    screensaver.center();
    screensaver.css({ visibility: "visible" });

    screensaver.delay(3000).animate({ opacity: 0 }, {
        step: function (now, tween) {
            screensaver.css('transform', 'scale(' + now + ',' + now + '');
        },
        duration: 600,
        easing: "easeInOutBack"
    });

    if (view === "github") {

        screensaver.text("GITHUB");
        LightTable.hide();
        Boardroom.init("github", window.githubHistory);

        setTimeout(function () {
            active = "br";
            Boardroom.show();
        }, 3000)

    } else if (view === "wikipedia") {
        $("#screensaver").text("WIKIPEDIA");
        LightTable.hide();
        Boardroom.init("wikipedia");
        setTimeout(function () {
            active = "br";
            Boardroom.show();
        }, 3000)

    } else if (view === "test") {
        $("#screensaver").text("TEST DATA");
        LightTable.hide();
        Boardroom.init("test");
        setTimeout(function () {
            active = "br";
            Boardroom.show();
        }, 3000)


        setInterval(function () {
            if (Boardroom) {
                Boardroom.message({
                    stream: 'test',
                    latlon: {
                        lat: Math.random() * 180 - 90,
                        lon: Math.random() * 360 - 180
                    },
                    location: 'Test ' + Math.floor(Math.random() * 100),
                    type: 'Type ' + Math.floor(Math.random() * 8),
                    picSmall: 'images/not_available_small.png',
                    picLarge: 'images/not_available_large.png',
                    username: "arscan" + Math.floor(Math.random() * 1000),
                    userurl: "http://github.com/arscan",
                    title: "Test " + Math.floor(Math.random() * 100),
                    url: "http://github.com/arscan/encom-boardroom/",
                    size: Math.floor(Math.random() * 10000),
                    popularity: Math.floor(Math.random() * 10000)
                });
            }

        }, 800);
    }

};


    LightTable.init(onSwitch);



    $("#light-table").center();
    $("#boardroom").center();
    LightTable.show();

  

        var animate = function () {

            if (active === "lt") {
                LightTable.animate();
            } else {
                Boardroom.animate()
            }

            requestAnimationFrame(animate);
        };

        animate();

        var timeout = 0;
        function onWindowResize() {

            if (active === "lt") {
                LightTable.resize();
            } else {
                Boardroom.resize();
            }
        }

        window.addEventListener('resize', onWindowResize, false);

    

*/

    

    
    const [active, setActive] = useState("lt");

    const LightTable = require("./LightTable.js");

    $.fn.center = function (scale) {

    var top = Math.max(0, (($(window).height() - $(this).outerHeight()) / 2 - 50) + $(window).scrollTop());
    var left = Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft());

    if(scale){
        top = Math.max(0, (($(window).height() - $(this).outerHeight() * scale) / 2 - 50) + $(window).scrollTop());
        left = Math.max(0, (($(window).width() - $(this).outerWidth() * scale) / 2) + $(window).scrollLeft());
    }

    this.css("position","fixed");
    this.css("top", top + "px");
    this.css("left", left + "px");
    return this;
}

/*
    useEffect(() => {
        const esPath = window._esPath || "/events.js";
        const es = new EventSource(esPath);
        const listener = (event) => {
            const type = event.type;
            if (type === "message") {
                if (active === "lt") {
                    LightTable.message(JSON.parse(event.data));
                } else {
                    setTimeout(() => {
                        Boardroom.message(JSON.parse(event.data));
                    }, 3000 * Math.random());
                }
            }
        };

        es.addEventListener("open", listener);
        es.addEventListener("message", listener);
        es.addEventListener("error", listener);

        return () => {
            es.removeEventListener("open", listener);
            es.removeEventListener("message", listener);
            es.removeEventListener("error", listener);
            es.close();
        };
    }, [active]);

    */


 
    const onSwitch = (view) => {
        const screensaver = $("#screensaver");
        screensaver.center();
        screensaver.css({ visibility: "visible" });

        screensaver
            .delay(3000)
            .animate(
                { opacity: 0 },
                {
                    step: function (now, tween) {
                        screensaver.css("transform", `scale(${now}, ${now})`);
                    },
                    duration: 600,
                    easing: "easeInOutBack",
                }
            );

        if (view === "github") {
            screensaver.text("GITHUB");
            LightTable.hide();
            Boardroom.init("github", window.githubHistory);

            setTimeout(() => {
                setActive("br");
                Boardroom.show();
            }, 3000);
        } else if (view === "wikipedia") {
            $("#screensaver").text("WIKIPEDIA");
            LightTable.hide();
            Boardroom.init("wikipedia");
            setTimeout(() => {
                setActive("br");
                Boardroom.show();
            }, 3000);
        } else if (view === "test") {
            $("#screensaver").text("TEST DATA");
            LightTable.hide();
            Boardroom.init("test");
            setTimeout(() => {
                setActive("br");
                Boardroom.show();
            }, 3000);

            setInterval(() => {
                if (Boardroom) {
                    Boardroom.message({
                        stream: "test",
                        latlon: {
                            lat: Math.random() * 180 - 90,
                            lon: Math.random() * 360 - 180,
                        },
                        location: "Test " + Math.floor(Math.random() * 100),
                        type: "Type " + Math.floor(Math.random() * 8),
                        picSmall: "./images/not_available_small.png",
                        picLarge: "./images/not_available_large.png",
                        username: "arscan" + Math.floor(Math.random() * 1000),
                        userurl: "http://github.com/arscan",
                        title: "Test " + Math.floor(Math.random() * 100),
                        url: "http://github.com/arscan/encom-boardroom/",
                        size: Math.floor(Math.random() * 10000),
                        popularity: Math.floor(Math.random() * 10000),
                    });
                }
            }, 800);
        }
    };



    return (
        <div className="continer">
         <div id="light-table">
            <div id="lt-container-outside" className="container-border">
            </div>
            <div id="lt-container-inside" className="container-border"> 
                <div id="lt-left-column">
                    <div className="lt-header" id="lt-header-top-left">
                        <div className="lt-header-left-section">ENCOM TOUCH APP <span className="alt-1">OS</span><span className="alt-2">12</span></div>
                        <div className="lt-header-right-section">OS | 012</div>
                    </div>

                    <div id="lt-readme" className="content-container">
                        <div className="content">
                            <h2>
                                README <span className="alt-1">.TXT</span>
                                <em>END. PROGRAM</em>
                            </h2>
                            <p>
                            Hello <strong>User</strong>.  This is a reproduction of the graphics in the boardroom scene in Tron: Legacy.  If you have not seen that movie,
                            check out <a href="http://work.gmunk.com/TRON-Board-Room" target="_blank">this background material on the making of that scene</a> before proceeding.
                            </p>

                            <p>To make this a bit more fun, the boardroom is configured to visualize live updates from <strong>Github</strong> and <strong>Wikipedia</strong>, 
                            with more streams to come.  Click on a stream in the window to the right to continue.
                            </p>

                            <p>
                            The boardroom visualization requires the use of <a href="http://get.webgl.org/" target="_blank">WebGL</a> 
                            and <a href="http://www.w3.org/TR/eventsource/" target="_blank">Event Source</a>.  The test below indicates the availability of these features 
                            on your system.
                            </p>

                            <p>
                            This was created by <a href="https://twitter.com/arscan" target="_blank">@arscan</a> as a learning exercise.  It is not affiliated with 
                            Disney, Tron: Legacy, Encom, Wikipedia or Github in any way. The source is available on <a href="https://github.com/arscan" target="_blank">Github</a>.
                            </p>
                        </div>
                    </div>

                    <div id="lt-bandwidth" className="content-container">
                        <div className="content">
                            <h2>
                                WEBGL <span className="alt-1" id="test-result">.TEST</span>
                                <em id="datalink">DATALINK: <span id="datalink-status">TESTING...</span></em>
                            </h2>
                            <canvas height="100px" width= "367px" id="lt-webglCanvas"></canvas>
                        </div>
                    </div>

                    <div className="lt-header" id="lt-header-bottom-left">
                        <div className="lt-header-left-section">DOCKING CHANNEL</div>
                        <div className="lt-header-right-section">
                            <div id="lt-bottom-boxes-1"></div>
                            <div id="lt-bottom-boxes-2"></div>
                            <div id="lt-bottom-boxes-3"></div>
                        </div>
                    </div>

                    <div className="lt-header-animator-left lt-header-animator-inside"></div>
                    <div className="lt-header-animator-left lt-header-animator-outside"></div>
                </div>
                <div id="lt-right-column">
                    <div className="lt-header" id="lt-header-top-right">
                        <div className="lt-header-left-section">CENTRAL SYSTEM DATA ... <span className="alt-1">LAUNCH ENCOM GLOBALIZATION</span></div>
                        <div className="lt-header-right-section">OIA | 012</div>
                    </div>
                    <div id="lt-globalization" className="content-container">
                        <div className="content">
                            <h2>
                                BOARDROOM VISUALIZATION ... PLEASE SELECT DATA <span className="alt-1">.STREAM</span>
                                <em>END. PROGRAM</em>
                            </h2>


                            <div className="folder-container" id="lt-launch-github">
                                <div className="folder-label">
                                    Github Stream 
                                </div>
                                <div className="folder-big"></div>
                            </div>
                            <div id="lt-command-line">
                                <div id="lt-command-line-header">
                                    Last Login: Wed Nov 26 11:26:49 on llvm992
                                </div>

                                <div id="lt-command-lines">
                                    <div className="command"><span className="prompt">encom-sh:encom_root$&nbsp;</span><span className="command-text"></span><span className="blink command-blinker">&nbsp;</span></div>
                                </div>

                            </div>

                            <div className="folder-container" id="lt-launch-test">
                                <div className="folder-label">
                                    Test Stream
                                </div>
                                <div className="folder-small"></div>
                            </div>

                            <div className="folder-container" id="lt-launch-wikipedia">
                                <div id="lt-folder-2" className="folder-label">
                                    Wikipedia
                                </div>
                                <div className="folder-small"></div>
                            </div>

                            <div className="folder-container" id="lt-launch-bitcoin">
                                <div className="folder-label">
                                    Bitcoin
                                </div>
                                <div className="folder-small"></div>
                            </div>

                            <div className="folder-container" id="lt-launch-unknown">
                                <div id="lt-folder-2" className="folder-label">
                                    Unknown
                                </div>
                                <div className="folder-small"></div>
                            </div>

                        </div>
                    </div>

                    <div id="lt-keyboard">
                        <div id="k-27">ESC</div>
                        <div id="k-49">1</div>
                        <div id="k-50">2</div>
                        <div id="k-51">3</div>
                        <div id="k-52">4</div>
                        <div id="k-53">5</div>
                        <div id="k-54">6</div>
                        <div id="k-55">7</div>
                        <div id="k-56">8</div>
                        <div id="k-57">9</div>
                        <div id="k-48">0</div>
                        <div id="k-189">_</div>
                        <div id="k-8">BACK</div>

                        <div id="k-9">TAB</div>
                        <div id="k-81">q</div>
                        <div id="k-87">w</div>
                        <div id="k-69">e</div>
                        <div id="k-82">r</div>
                        <div id="k-84">t</div>
                        <div id="k-89">y</div>
                        <div id="k-85">u</div>
                        <div id="k-73">i</div>
                        <div id="k-79">o</div>
                        <div id="k-80">p</div>
                        <div id="k-219">()</div>

                        <div id="k-500">CAPS</div>
                        <div id="k-65">a</div>
                        <div id="k-83">s</div>
                        <div id="k-68">d</div>
                        <div id="k-70">f</div>
                        <div id="k-71">g</div>
                        <div id="k-72">h</div>
                        <div id="k-74">j</div>
                        <div id="k-75">k</div>
                        <div id="k-76">l</div>
                        <div id="k-186">;</div>
                        <div id="k-13">ENTER</div>

                        <div id="k-16">SHIFT</div>
                        <div id="k-90">z</div>
                        <div id="k-88">x</div>
                        <div id="k-67">c</div>
                        <div id="k-86">v</div>
                        <div id="k-66">b</div>
                        <div id="k-78">n</div>
                        <div id="k-77">m</div>
                        <div id="k-188">,</div>
                        <div id="k-190">.</div>
                        <div id="k-191">/</div>
                        <div id="k-0">SHIFT</div>

                        <div id="k-32"></div>
                    </div>

                    <div className="lt-header" id="lt-header-bottom-right">
                        <div className="lt-header-left-section">TOUCHPOINT KEYBOARD ... <span className="alt-1">INTERACTION SEQUENCING</span></div>
                        <div className="lt-header-right-section">SYS | O12</div>
                    </div>
                    <div id="lt-mobile-readme" className="content-container">
                        <div className="content">
                            <h2>
                                README <span className="alt-1">.TXT</span>
                                <em>END. PROGRAM</em>
                            </h2>
                            <p>
                            Hello <strong>User</strong>. Welcome to Encom's <strong>OS12</strong>, the worlds most secure operating system.
                            </p>
                            <p>
                            If you have not seen Tron: Legacy, please familiarize yourself with <a href="http://work.gmunk.com/TRON-Board-Room" target="_blank">this background material</a> before proceeding to the boardroom 
                            visualization.  Click on the appropriate stream above to continue.
                            </p>

                            <p>
                            The boardroom visualization requires the use of <a href="http://get.webgl.org/" target="_blank">WebGL</a> 
                            and <a href="http://www.w3.org/TR/eventsource/" target="_blank">Event Source</a>. It was not intended for us on a mobile device, so it may not work properly.
                            </p>

                            <p>
                            This was created by <a href="https://twitter.com/arscan" target="_blank">@arscan</a> as a learning exercise.  It is not affiliated with 
                            Disney, Tron: Legacy, Encom, Wikipedia or Github in any way. The source is available on <a href="http://github.com/arscan" target="_blank">Github</a>.
                            </p>
                        </div>
                    </div>

                    <div className="lt-header-animator-right lt-header-animator-inside"></div>
                    <div className="lt-header-animator-right lt-header-animator-outside"></div>
                </div>

                <div id="lt-far-right-column">
                    <div id="lt-encom-logo">ENCOM</div>
                    <img id="lt-thumbprint" src="images/thumbprint.png" />
                </div>




            </div>
        </div>
        <div><div id="screensaver"></div></div>

        <div>
        <div id="boardroom">

            <div id="globalization">
                <div className="header" id="globalization-header">GLOBALIZATION</div>
                <canvas id="satbar" width="180px" height="36px"></canvas>
                <div className="location-slider" id="location-slider-northamerica">
                    <div className="location-name">
                        <span className="location-area" id="location-area-northamerica">No America</span>
                        <span className="location-city" id="location-city-northamerica"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider" id="location-slider-southamerica" >
                    <div className="location-name">
                        <span className="location-area" id="location-area-southamerica">So America</span>
                        <span className="location-city" id="location-city-southamerica"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider" id="location-slider-europe">
                    <div className="location-name">
                        <span className="location-area other" id="location-area-europe">Europe</span>
                        <span className="location-city" id="location-city-europe"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider" id="location-slider-asia">
                    <div className="location-name">
                        <span className="location-area other" id="location-area-asia">Asia</span>
                        <span className="location-city" id="location-city-asia"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider" id="location-slider-australia">
                    <div className="location-name">
                        <span className="location-area" id="location-area-australia">Australia</span>
                        <span className="location-city" id="location-city-australia"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider" id="location-slider-africa">
                    <div className="location-name">
                        <span className="location-area other" id="location-area-africa">Africa</span>
                        <span className="location-city" id="location-city-africa"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider" id="location-slider-antarctica">
                    <div className="location-name">
                        <span className="location-area other" id="location-area-antarctica">Antarctica</span>
                        <span className="location-city" id="location-city-antarctica"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider location-gap" id="location-slider-other">
                    <div className="location-name">
                        <span className="location-area" id="location-area-other">Other</span>
                        <span className="location-city" id="location-city-other"></span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="location-slider" id="location-slider-unknown">
                    <div className="location-name">
                        <span className="location-area" id="location-area-unknown">Location</span>
                        <span className="location-city" id="location-city-unknown">Not Specified</span>
                    </div>
                    <div className="location-line"></div>
                    <ul>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div id="logo">
                    <div id="logo-cover-up"></div>
                    <div id="logo-cover-side-1"></div>
                    <div id="logo-cover-side-2"></div>
                </div>
            </div>

            <div id="globe"></div>
            <div id="globe-footer">
                <a href="?" title="back"><img id="keyboard-image" src="images/keyboard.png" /></a>
                <div className="footer-bar"></div>
                <a href="#" id="info-link" title="Info"><img id="info-image" src="images/info.png" /></a>
                <a href="http://twitter.com/arscan" title="@arscan" target="_blank"><img id="twitter" src="images/twitter.png" /></a>
                <a href="http://github.com/arscan/encom-boardroom" title="Fork me on Github" target="_blank"><img id="github-image" src="images/GitHub-Mark-Light-32px.png" /></a>
                <a href="#" id="fullscreen-link" title="Go Fullscreen"><img id="fullscreen-image" src="images/fullscreen.png" /></a>
            </div>

            <div id="user-interaction">
                <div className="header header-other" id="user-interaction-header">
                    USER INTERACTION SCIENCE
                </div>
                <div id="user-interaction-container">
                    <div id="interaction"> 
                        <h3>Some fancy Interaction</h3>
                        <div>

                        </div>
                    </div>
                    <div id="interaction-overlay"></div>
                    <div id="cube" width ="290" height="225"> 
                        <div id="cube-labels">
                            <div id="cube-label-1">Yeah</div>
                            <div id="cube-label-2">Why</div>
                            <div id="cube-label-3">Not</div>
                        </div>
                    </div>
                    <div id="swirls"> 
                    </div>
                </div>
            </div>
            <div id="growth">
                <div className="header header-other" id="growth-header">
                    GROWTH PROJECTION
                </div>
                <div id="growth-container">
                    <div id = "ticker">
                        <div id="ticker-text"></div>
                        <div id="ticker-subtext">[INC]</div>
                        <div id="ticker-lines">
                            <div className="ticker-line" id="ticker-line-1">.</div>
                            <div className="ticker-line" id="ticker-line-2">.</div>
                        </div>
                        <div id="ticker-value">
                        </div>
                        <div id="ticker-ytd">
                            2013 Events
                        </div>
                        <canvas id="stock-chart-small" width="72px" height="40px"></canvas>
                    </div>
                    <div id="stock-chart" width="500px" height="105px"></div>
                    <div id = "stock-subcharts">
                        <div className="stock-subchart">
                            <div className="stock-subchart-label">
                                OPEN
                            </div>
                            <div className="stock-subchart-chart">
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-10"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                            </div>

                        </div>
                        <div className="stock-subchart">
                            <div className="stock-subchart-label">
                                HIGH
                            </div>
                            <div className="stock-subchart-chart">
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-10"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                            </div>

                        </div>
                        <div className="stock-subchart">
                            <div className="stock-subchart-label">
                                LOW
                            </div>
                            <div className="stock-subchart-chart">
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-10"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                            </div>

                        </div>
                        <div className="stock-subchart">
                            <div className="stock-subchart-label">
                                CLOSE
                            </div>
                            <div className="stock-subchart-chart">
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-10"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                            </div>

                        </div>
                        <div className="stock-subchart">
                            <div className="stock-subchart-label">
                                VOLUME
                            </div>
                            <div className="stock-subchart-chart">
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-10"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                                <div className="stock-subchart-bar subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-15 subchart-white"> </div>
                                <div className="stock-subchart-bar subchart-5 subchart-yellow"> </div>
                                <div className="stock-subchart-bar subchart-15"> </div>
                                <div className="stock-subchart-bar subchart-20"> </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div id="media">
                <div className="header" id="media-header">
                    USER SNAPSHOTS
                </div>
                <div id="media-container">
                    <div id="media-top" className="media-box">
                        <div className="user-pic larger"><span></span></div>
                        <div className="user-pic"><span></span></div>
                        <div className="user-pic"><span></span></div>
                        <div className="user-pic"><span></span></div>
                        <div className="user-pic"><span></span></div>
                    </div>
                    <div id="media-top-blinkies" className="media-blinkies">
                        <h3>Some kind of title</h3>
                        <div className="last bar border-20 border-yellow">hi</div>
                        <div className="bar border-40 border-blue">hi</div>
                        <div className="bar border-20 border-white">hi</div>
                        <div className="bar border-25 border-yellow">hi</div>
                        <div className="last bar border-35 border-blue">hi</div>
                        <div className="blinkies-big-label">month</div>
                        <div className="blinkies-small-label">num</div>
                        <div className="blinkies-big-number">3</div>
                        <div className="blinkies-small-number">1 4</div>
                        <h3>yay blinkies!</h3>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky white"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>

                    </div>
                    <div id="media-top-info" className="media-info">
                        <span>i could put something useful here</span>
                        <span>but i can't think</span>
                        <span>of what</span>
                        <span>I could possibly</span>
                        <span>say</span>
                    </div>
                    <div id="media-bottom" className="media-box">
                        <div className="user-pic larger"><span></span></div>
                        <div className="user-pic"><span></span></div>
                        <div className="user-pic"><span></span></div>
                        <div className="user-pic"><span></span></div>
                        <div className="user-pic"><span></span></div>
                    </div>
                    <div id="media-bottom-blinkies" className="media-blinkies">
                        <h3>Some kind of title</h3>
                        <div className="bar border-20 border-white">hi</div>
                        <div className="bar border-40 border-yellow">hi</div>
                        <div className="bar border-20 border-white">hi</div>
                        <div className="last bar border-25 border-blue">hi</div>
                        <div className="last bar border-35 border-blue">hi</div>
                        <div className="blinkies-big-label">month</div>
                        <div className="blinkies-small-label">num</div>
                        <div className="blinkies-big-number">2</div>
                        <div className="blinkies-small-number">1 4</div>
                        <h3>yay blinkies!</h3>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky white"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blue"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky blank"></div>
                        <div className="blinky yellow"></div>
                        <div className="blinky white"></div>
                    </div>
                    <div id="media-bottom-info" className="media-info">
                        <span>all this bottom info</span>
                        <span>something else interesting</span>
                        <span>why?</span>
                        <span>rob scanlon made this</span>
                    </div>
                </div>
            </div>
            <div id="timer">
                <div className="header header-other2" id="timer-header">
                    TIME SINCE START
                </div>
                <div id="clockbar">
                    <div id="clock">
                        00:00:00:00
                    </div>
                    <canvas id="simpleclock" width="80px" height="80px"></canvas>
                </div>
                <div id="timerbar">
                    <div className="section-timerbar">
                        <div className="buffer-timerbar">
                            <small>San Francisco</small>
                            <span id="san-francisco-time">12:32:91</span>
                        </div>
                    </div>
                    <div className="section-timerbar">
                        <div className="buffer-timerbar">
                            <small>New York</small>
                            <span id="new-york-time">12:32:91</span>
                        </div>
                    </div>
                    <div className="section-timerbar">
                        <div className="buffer-timerbar">
                            <small>London</small>
                            <span id="london-time">12:32:91</span>
                        </div>
                    </div>
                    <div className="section-timerbar">
                        <div className="buffer-timerbar">
                            <small>Berlin</small>
                            <span id="berlin-time">12:32:91</span>
                        </div>
                    </div>
                    <div className="section-timerbar">
                        <div className="buffer-timerbar">
                            <small>Bangalore</small>
                            <span id="bangalore-time">12:32:91</span>
                        </div>
                    </div>
                    <div className="section-timerbar">
                        <div className="buffer-timerbar">
                            <small>Sydney</small>
                            <span id="sydney-time">12:32:91</span>
                        </div>
                    </div>
                </div>
                <canvas id="timer-trees" width="490px" height="30px"></canvas>
            </div>
            <div id="bottom-border"></div>


        </div>

        <div className="boardroom-readme" id="boardroom-readme-github">
            <div className="content">
                <h2>
                    GITHUB STREAM INFO <span className="alt-1">.TXT</span>
                    <em>X CLOSE</em>
                </h2>
                <p>
                You are looking at a visualization of live updates to repositories hosted by <a href="http://github.com" target="_blank">Github</a>.
                </p>
                <p>
                Data is being streamed in realtime from Github's public <a href="http://github.com/timeline.json" target="_blank">timeline feed</a>.
                Location information is retrieved from the user's github profile and is mapped using <a href="http://geonames.org" target="_blank">geonames.org</a>.
                Historic 2013 data was retrieved from the <a href="http://githubarchive.org" target="_blank">Github Archive</a>.  User pictures are 
                from <a href="http://gravatar.com" target="_blank">Gravatar</a> and are throttled to under one per second to conserve bandwidth.
                </p>
                <p>
                While I attempted to stay true to the film, it simply wasn't practical to recreate every element that is portrayed in 
                <a href="http://work.gmunk.com/TRON-Board-Room" target="_blank">the scene</a>.  The graphics displayed in the film contain a remarkable
                amount of detail despite only being visible for a couple of seconds. I am in awe of those that put it together.  
                </p>
                <p>
                My focus was on the globe and I made it available as a <a href="http://github.com/arscan/encom-globe" target="_blank">standalone library</a> for those interested.
                The other elements are only loose adaptations of the film version. This site is not associated with Github, Tron: Legacy, or Disney.  It is just a tribute.
                </p>
                <p>
                Thanks for stopping by.  <strong>-Rob</strong>
                </p>
            </div>
        </div>
        <div className="boardroom-readme" id="boardroom-readme-wikipedia">
            <div className="content">
                <h2>
                    WIKIPEDIA STREAM INFO <span className="alt-1">.TXT</span>
                    <em>X CLOSE</em>
                </h2>
                <p>
                You are looking at a visualization of live updates to <a href="http://wikipedia.com" target="_blank">Wikipedia</a>.
                </p>
                <p>
                Data is being streamed in realtime from Wikipedia's public <a href="http://meta.wikimedia.org/wiki/IRC_channels#Raw_feeds" target="_blank">irc feed</a>.
                Location information is only available from anonymous users in the form of IP addresses, and is mapped to real locations 
                using <a href="http://freegeoip.net/" target="_blank">freegeoip.net</a>.</p>
                <p>
                The Wikipedia version of this is not quite complete, as I have not yet populated historic data, nor have I pulled images from
                wikipedian's profile pages yet.  The github version is a bit more complete.
                </p>
                <p>
                While I attempted to stay true to the film, it simply wasn't practical to recreate every element that is portrayed in 
                <a href="http://work.gmunk.com/TRON-Board-Room" target="_blank">the scene</a>.  The graphics displayed in the film contain a remarkable
                amount of detail despite only being visible for a couple of seconds. I am in awe of those that put it together.  
                </p>
                <p>
                My focus was on the globe and I have made it available 
                as a <a href="http://github.com/arscan/encom-globe" target="_blank">standalone library</a> for those interested.
                The other elements are only loose adaptations of the film version. This site is not associated with Wikipedia, Tron: Legacy, or Disney.  It is just a tribute.
                </p>
                <p>
                Thanks for stopping by.  <strong>-Rob</strong>
                </p>
            </div>
        </div>
        <span className="boardroom-readme" id="boardroom-readme-test">
            <div className="content">
                <h2>
                    TEST STREAM INFO <span className="alt-1">.TXT</span>
                    <em>X CLOSE</em>
                </h2>
                <p>
                You've probably already figured this out, but the data being streamed here is just test data.  I left it up here for demonstration
                purposes in case the other feeds go down.
                </p>
                <p>
                While I attempted to stay true to the film, it simply wasn't practical to recreate every element that is portrayed in 
                <a href="http://work.gmunk.com/TRON-Board-Room" target="_blank">the scene</a>.  The graphics displayed in the film contain a remarkable
                amount of detail despite only being visible for a couple of seconds. I am in awe of those that put it together.  
                </p>
                <p>
                My focus was on the globe and I have made it available 
                as a <a href="http://github.com/arscan/encom-globe" target="_blank">standalone library</a> for those interested.
                The other elements are only loose adaptations of the film version. This site is not associated with Tron: Legacy, or Disney.  It is just a tribute.
                </p>
                <p>
                Thanks for stopping by.  <strong>-Rob</strong>
                </p>
            </div>
            </span>
    </div> 
        </div>    
    )
}

export default Notes;
    