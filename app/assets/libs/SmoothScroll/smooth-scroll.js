/**
 *
 * SmoothScroll for websites v1.4.6 (Balazs Galambosi)
 * http://www.smoothscroll.net/
 *
 * Licensed under the terms of the MIT license.
 *
 * You may use it in your theme if you credit me.
 * It is also free to use on any individual website.
 *
 * Exception:
 * The only restriction is to not publish any
 * extension for browsers or native application
 * without getting a written permission first.
 *
 */
!function(){function e(){H.keyboardSupport&&f("keydown",r)}function t(){if(!X&&document.body){X=!0;var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(Y=document.compatMode.indexOf("CSS")>=0?o:t,k=t,e(),top!=self)L=!0;else if(ee&&r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+Y.scrollHeight+"px",document.body.appendChild(a);var i;M=function(){i||(i=setTimeout(function(){z||(a.style.height="0",a.style.height=Y.scrollHeight+"px",i=null)},500))},setTimeout(M,10),f("resize",M);var l={attributes:!0,childList:!0,characterData:!1};if((D=new _(M)).observe(t,l),Y.offsetHeight<=n){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}H.fixedBackground||z||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o){if(h(t,o),1!=H.accelerationMax){var n=Date.now()-j;if(n<H.accelerationDelta){var r=(1+50/n)/2;r>1&&(r=Math.min(r,H.accelerationMax),t*=r,o*=r)}j=Date.now()}if(P.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!R){var a=e===document.body,i=function(n){for(var r=Date.now(),l=0,c=0,u=0;u<P.length;u++){var d=P[u],s=r-d.start,f=s>=H.animationTime,m=f?1:s/H.animationTime;H.pulseAlgorithm&&(m=S(m));var w=d.x*m-d.lastX>>0,h=d.y*m-d.lastY>>0;l+=w,c+=h,d.lastX+=w,d.lastY+=h,f&&(P.splice(u,1),u--)}a?window.scrollBy(l,c):(l&&(e.scrollLeft+=l),c&&(e.scrollTop+=c)),t||o||(P=[]),P.length?I(i,e,1e3/H.frameRate+1):R=!1};I(i,e,0),R=!0}}function n(e){X||t();var n=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(w(k,"embed")||w(n,"embed")&&/\.pdf/i.test(n.src)||w(k,"object")||n.shadowRoot)return!0;var r=-e.wheelDeltaX||e.deltaX||0,a=-e.wheelDeltaY||e.deltaY||0;B&&(e.wheelDeltaX&&v(e.wheelDeltaX,120)&&(r=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&v(e.wheelDeltaY,120)&&(a=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),r||a||(a=-e.wheelDelta||0),1===e.deltaMode&&(r*=40,a*=40);var l=c(n);return l?!!p(a)||(Math.abs(r)>1.2&&(r*=H.stepSize/120),Math.abs(a)>1.2&&(a*=H.stepSize/120),o(l,r,a),e.preventDefault(),void i()):!L||!G||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function r(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==N.spacebar;document.body.contains(k)||(k=document.activeElement);var r=/^(textarea|select|embed|object)$/i,a=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||r.test(t.nodeName)||w(t,"input")&&!a.test(t.type)||w(k,"video")||b(e)||t.isContentEditable||n)return!0;if((w(t,"button")||w(t,"input")&&a.test(t.type))&&e.keyCode===N.spacebar)return!0;if(w(t,"input")&&"radio"==t.type&&K[e.keyCode])return!0;var l=0,u=0,d=c(k);if(!d)return!L||!G||parent.keydown(e);var s=d.clientHeight;switch(d==document.body&&(s=window.innerHeight),e.keyCode){case N.up:u=-H.arrowScroll;break;case N.down:u=H.arrowScroll;break;case N.spacebar:u=-(e.shiftKey?1:-1)*s*.9;break;case N.pageup:u=.9*-s;break;case N.pagedown:u=.9*s;break;case N.home:u=-d.scrollTop;break;case N.end:var f=d.scrollHeight-d.scrollTop-s;u=f>0?f+10:0;break;case N.left:l=-H.arrowScroll;break;case N.right:l=H.arrowScroll;break;default:return!0}o(d,l,u),e.preventDefault(),i()}function a(e){k=e.target}function i(){clearTimeout(T),T=setInterval(function(){V={}},1e3)}function l(e,t){for(var o=e.length;o--;)V[q(e[o])]=t;return t}function c(e){var t=[],o=document.body,n=Y.scrollHeight;do{var r=V[q(e)];if(r)return l(t,r);if(t.push(e),n===e.scrollHeight){var a=d(Y)&&d(o)||s(Y);if(L&&u(Y)||!L&&a)return l(t,W())}else if(u(e)&&s(e))return l(t,e)}while(e=e.parentElement)}function u(e){return e.clientHeight+10<e.scrollHeight}function d(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function f(e,t){window.addEventListener(e,t,!1)}function m(e,t){window.removeEventListener(e,t,!1)}function w(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function h(e,t){e=e>0?1:-1,t=t>0?1:-1,O.x===e&&O.y===t||(O.x=e,O.y=t,P=[],j=0)}function p(e){if(e)return A.length||(A=[e,e,e]),e=Math.abs(e),A.push(e),A.shift(),clearTimeout(E),E=setTimeout(function(){try{localStorage.SS_deltaBuffer=A.join(",")}catch(e){}},1e3),!y(120)&&!y(100)}function v(e,t){return Math.floor(e/t)==e/t}function y(e){return v(A[0],e)&&v(A[1],e)&&v(A[2],e)}function b(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}function g(e){var t,o;return e*=H.pulseScale,e<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*H.pulseNormalize}function S(e){return e>=1?1:e<=0?0:(1==H.pulseNormalize&&(H.pulseNormalize/=g(1)),g(e))}function x(e){for(var t in e)C.hasOwnProperty(t)&&(H[t]=e[t])}var k,D,M,T,E,C={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},H=C,z=!1,L=!1,O={x:0,y:0},X=!1,Y=document.documentElement,A=[],B=/^Mac/.test(navigator.platform),N={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},K={37:1,38:1,39:1,40:1},P=[],R=!1,j=Date.now(),q=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),V={};if(window.localStorage&&localStorage.SS_deltaBuffer)try{A=localStorage.SS_deltaBuffer.split(",")}catch(e){}var F,I=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},_=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,W=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,3),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}(),$=window.navigator.userAgent,U=/Edge/.test($),G=/chrome/i.test($)&&!U,J=/safari/i.test($)&&!U,Q=/mobile/i.test($),Z=/Windows NT 6.1/i.test($)&&/rv:11/i.test($),ee=J&&(/Version\/8/i.test($)||/Version\/9/i.test($)),te=(G||J||Z)&&!Q;"onwheel"in document.createElement("div")?F="wheel":"onmousewheel"in document.createElement("div")&&(F="mousewheel"),F&&te&&(f(F,n),f("mousedown",a),f("load",t)),x.destroy=function(){D&&D.disconnect(),m(F,n),m("mousedown",a),m("keydown",r),m("resize",M),m("load",t)},window.SmoothScrollOptions&&x(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return x}):"object"==typeof exports?module.exports=x:window.SmoothScroll=x}();
