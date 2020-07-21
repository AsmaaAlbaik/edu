/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!function(i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("object"==typeof module&&module.exports){var t=require("jquery");i(t),module.exports=t}else i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,o=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],h=n.createLinearGradient.apply(n,o),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?(i=2*i,.5*i*i*i):(i=2-2*i,1-.5*i*i*i)},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}});
/*! 
 * jQuery Steps v1.1.0 - 09/04/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
!function(a,b){function c(a,b){o(a).push(b)}function d(d,e,f){var g=d.children(e.headerTag),h=d.children(e.bodyTag);g.length>h.length?R(Z,"contents"):g.length<h.length&&R(Z,"titles");var i=e.startIndex;if(f.stepCount=g.length,e.saveState&&a.cookie){var j=a.cookie(U+q(d)),k=parseInt(j,0);!isNaN(k)&&k<f.stepCount&&(i=k)}f.currentIndex=i,g.each(function(e){var f=a(this),g=h.eq(e),i=g.data("mode"),j=null==i?$.html:r($,/^\s*$/.test(i)||isNaN(i)?i:parseInt(i,0)),k=j===$.html||g.data("url")===b?"":g.data("url"),l=j!==$.html&&"1"===g.data("loaded"),m=a.extend({},bb,{title:f.html(),content:j===$.html?g.html():"",contentUrl:k,contentMode:j,contentLoaded:l});c(d,m)})}function e(a){a.triggerHandler("canceled")}function f(a,b){return a.currentIndex-b}function g(b,c){var d=i(b);b.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d),b.removeClass(c.clearFixCssClass+" vertical");var e=b.find(".content > *");e.removeData("loaded").removeData("mode").removeData("url"),e.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),b.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var f=a('<{0} class="{1}"></{0}>'.format(b.get(0).tagName,b.attr("class"))),g=b._id();return null!=g&&""!==g&&f._id(g),f.html(b.find(".content").html()),b.after(f),b.remove(),f}function h(a,b){var c=a.find(".steps li").eq(b.currentIndex);a.triggerHandler("finishing",[b.currentIndex])?(c.addClass("done").removeClass("error"),a.triggerHandler("finished",[b.currentIndex])):c.addClass("error")}function i(a){var b=a.data("eventNamespace");return null==b&&(b="."+q(a),a.data("eventNamespace",b)),b}function j(a,b){var c=q(a);return a.find("#"+c+V+b)}function k(a,b){var c=q(a);return a.find("#"+c+W+b)}function l(a,b){var c=q(a);return a.find("#"+c+X+b)}function m(a){return a.data("options")}function n(a){return a.data("state")}function o(a){return a.data("steps")}function p(a,b){var c=o(a);return(0>b||b>=c.length)&&R(Y),c[b]}function q(a){var b=a.data("uid");return null==b&&(b=a._id(),null==b&&(b="steps-uid-".concat(T),a._id(b)),T++,a.data("uid",b)),b}function r(a,c){if(S("enumType",a),S("keyOrValue",c),"string"==typeof c){var d=a[c];return d===b&&R("The enum key '{0}' does not exist.",c),d}if("number"==typeof c){for(var e in a)if(a[e]===c)return c;R("Invalid enum value '{0}'.",c)}else R("Invalid key or value type.")}function s(a,b,c){return B(a,b,c,v(c,1))}function t(a,b,c){return B(a,b,c,f(c,1))}function u(a,b,c,d){if((0>d||d>=c.stepCount)&&R(Y),!(b.forceMoveForward&&d<c.currentIndex)){var e=c.currentIndex;return a.triggerHandler("stepChanging",[c.currentIndex,d])?(c.currentIndex=d,O(a,b,c),E(a,b,c,e),D(a,b,c),A(a,b,c),P(a,b,c,d,e,function(){a.triggerHandler("stepChanged",[d,e])})):a.find(".steps li").eq(e).addClass("error"),!0}}function v(a,b){return a.currentIndex+b}function w(b){var c=a.extend(!0,{},cb,b);return this.each(function(){var b=a(this),e={currentIndex:c.startIndex,currentStep:null,stepCount:0,transitionElement:null};b.data("options",c),b.data("state",e),b.data("steps",[]),d(b,c,e),J(b,c,e),G(b,c),c.autoFocus&&0===T&&j(b,c.startIndex).focus(),b.triggerHandler("init",[c.startIndex])})}function x(b,c,d,e,f){(0>e||e>d.stepCount)&&R(Y),f=a.extend({},bb,f),y(b,e,f),d.currentIndex!==d.stepCount&&d.currentIndex>=e&&(d.currentIndex++,O(b,c,d)),d.stepCount++;var g=b.find(".content"),h=a("<{0}>{1}</{0}>".format(c.headerTag,f.title)),i=a("<{0}></{0}>".format(c.bodyTag));return(null==f.contentMode||f.contentMode===$.html)&&i.html(f.content),0===e?g.prepend(i).prepend(h):k(b,e-1).after(i).after(h),K(b,d,i,e),N(b,c,d,h,e),F(b,c,d,e),e===d.currentIndex&&E(b,c,d),D(b,c,d),b}function y(a,b,c){o(a).splice(b,0,c)}function z(b){var c=a(this),d=m(c),e=n(c);if(d.suppressPaginationOnFocus&&c.find(":focus").is(":input"))return b.preventDefault(),!1;var f={left:37,right:39};b.keyCode===f.left?(b.preventDefault(),t(c,d,e)):b.keyCode===f.right&&(b.preventDefault(),s(c,d,e))}function A(b,c,d){if(d.stepCount>0){var e=d.currentIndex,f=p(b,e);if(!c.enableContentCache||!f.contentLoaded)switch(r($,f.contentMode)){case $.iframe:b.find(".content > .body").eq(d.currentIndex).empty().html('<iframe src="'+f.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case $.async:var g=k(b,e)._aria("busy","true").empty().append(M(c.loadingTemplate,{text:c.labels.loading}));a.ajax({url:f.contentUrl,cache:!1}).done(function(a){g.empty().html(a)._aria("busy","false").data("loaded","1"),b.triggerHandler("contentLoaded",[e])})}}}function B(a,b,c,d){var e=c.currentIndex;if(d>=0&&d<c.stepCount&&!(b.forceMoveForward&&d<c.currentIndex)){var f=j(a,d),g=f.parent(),h=g.hasClass("disabled");return g._enableAria(),f.click(),e===c.currentIndex&&h?(g._enableAria(!1),!1):!0}return!1}function C(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),f=m(d),g=n(d),i=c.attr("href");switch(i.substring(i.lastIndexOf("#")+1)){case"cancel":e(d);break;case"finish":h(d,g);break;case"next":s(d,f,g);break;case"previous":t(d,f,g)}}function D(a,b,c){if(b.enablePagination){var d=a.find(".actions a[href$='#finish']").parent(),e=a.find(".actions a[href$='#next']").parent();if(!b.forceMoveForward){var f=a.find(".actions a[href$='#previous']").parent();f._enableAria(c.currentIndex>0)}b.enableFinishButton&&b.showFinishButtonAlways?(d._enableAria(c.stepCount>0),e._enableAria(c.stepCount>1&&c.stepCount>c.currentIndex+1)):(d._showAria(b.enableFinishButton&&c.stepCount===c.currentIndex+1),e._showAria(0===c.stepCount||c.stepCount>c.currentIndex+1)._enableAria(c.stepCount>c.currentIndex+1||!b.enableFinishButton))}}function E(b,c,d,e){var f=j(b,d.currentIndex),g=a('<span class="current-info audible">'+c.labels.current+" </span>"),h=b.find(".content > .title");if(null!=e){var i=j(b,e);i.parent().addClass("done").removeClass("error")._selectAria(!1),h.eq(e).removeClass("current").next(".body").removeClass("current"),g=i.find(".current-info"),f.focus()}f.prepend(g).parent()._selectAria().removeClass("done")._enableAria(),h.eq(d.currentIndex).addClass("current").next(".body").addClass("current")}function F(a,b,c,d){for(var e=q(a),f=d;f<c.stepCount;f++){var g=e+V+f,h=e+W+f,i=e+X+f,j=a.find(".title").eq(f)._id(i);a.find(".steps a").eq(f)._id(g)._aria("controls",h).attr("href","#"+i).html(M(b.titleTemplate,{index:f+1,title:j.html()})),a.find(".body").eq(f)._id(h)._aria("labelledby",i)}}function G(a,b){var c=i(a);a.bind("canceled"+c,b.onCanceled),a.bind("contentLoaded"+c,b.onContentLoaded),a.bind("finishing"+c,b.onFinishing),a.bind("finished"+c,b.onFinished),a.bind("init"+c,b.onInit),a.bind("stepChanging"+c,b.onStepChanging),a.bind("stepChanged"+c,b.onStepChanged),b.enableKeyNavigation&&a.bind("keyup"+c,z),a.find(".actions a").bind("click"+c,C)}function H(a,b,c,d){return 0>d||d>=c.stepCount||c.currentIndex===d?!1:(I(a,d),c.currentIndex>d&&(c.currentIndex--,O(a,b,c)),c.stepCount--,l(a,d).remove(),k(a,d).remove(),j(a,d).parent().remove(),0===d&&a.find(".steps li").first().addClass("first"),d===c.stepCount&&a.find(".steps li").eq(d).addClass("last"),F(a,b,c,d),D(a,b,c),!0)}function I(a,b){o(a).splice(b,1)}function J(b,c,d){var e='<{0} class="{1}">{2}</{0}>',f=r(_,c.stepsOrientation),g=f===_.vertical?" vertical":"",h=a(e.format(c.contentContainerTag,"content "+c.clearFixCssClass,b.html())),i=a(e.format(c.stepsContainerTag,"steps "+c.clearFixCssClass,'<ul role="tablist"></ul>')),j=h.children(c.headerTag),k=h.children(c.bodyTag);b.attr("role","application").empty().append(i).append(h).addClass(c.cssClass+" "+c.clearFixCssClass+g),k.each(function(c){K(b,d,a(this),c)}),j.each(function(e){N(b,c,d,a(this),e)}),E(b,c,d),L(b,c,d)}function K(a,b,c,d){var e=q(a),f=e+W+d,g=e+X+d;c._id(f).attr("role","tabpanel")._aria("labelledby",g).addClass("body")._showAria(b.currentIndex===d)}function L(a,b,c){if(b.enablePagination){var d='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',e='<li><a href="#{0}" role="menuitem">{1}</a></li>',f="";b.forceMoveForward||(f+=e.format("previous",b.labels.previous)),f+=e.format("next",b.labels.next),b.enableFinishButton&&(f+=e.format("finish",b.labels.finish)),b.enableCancelButton&&(f+=e.format("cancel",b.labels.cancel)),a.append(d.format(b.actionContainerTag,b.clearFixCssClass,b.labels.pagination,f)),D(a,b,c),A(a,b,c)}}function M(a,c){for(var d=a.match(/#([a-z]*)#/gi),e=0;e<d.length;e++){var f=d[e],g=f.substring(1,f.length-1);c[g]===b&&R("The key '{0}' does not exist in the substitute collection!",g),a=a.replace(f,c[g])}return a}function N(b,c,d,e,f){var g=q(b),h=g+V+f,j=g+W+f,k=g+X+f,l=b.find(".steps > ul"),m=M(c.titleTemplate,{index:f+1,title:e.html()}),n=a('<li role="tab"><a id="'+h+'" href="#'+k+'" aria-controls="'+j+'">'+m+"</a></li>");n._enableAria(c.enableAllSteps||d.currentIndex>f),d.currentIndex>f&&n.addClass("done"),e._id(k).attr("tabindex","-1").addClass("title"),0===f?l.prepend(n):l.find("li").eq(f-1).after(n),0===f&&l.find("li").removeClass("first").eq(f).addClass("first"),f===d.stepCount-1&&l.find("li").removeClass("last").eq(f).addClass("last"),n.children("a").bind("click"+i(b),Q)}function O(b,c,d){c.saveState&&a.cookie&&a.cookie(U+q(b),d.currentIndex)}function P(b,c,d,e,f,g){var h=b.find(".content > .body"),i=r(ab,c.transitionEffect),j=c.transitionEffectSpeed,k=h.eq(e),l=h.eq(f);switch(i){case ab.fade:case ab.slide:var m=i===ab.fade?"fadeOut":"slideUp",o=i===ab.fade?"fadeIn":"slideDown";d.transitionElement=k,l[m](j,function(){var b=a(this)._showAria(!1).parent().parent(),c=n(b);c.transitionElement&&(c.transitionElement[o](j,function(){a(this)._showAria()}).promise().done(g),c.transitionElement=null)});break;case ab.slideLeft:var p=l.outerWidth(!0),q=e>f?-p:p,s=e>f?p:-p;a.when(l.animate({left:q},j,function(){a(this)._showAria(!1)}),k.css("left",s+"px")._showAria().animate({left:0},j)).done(g);break;default:a.when(l._showAria(!1),k._showAria()).done(g)}}function Q(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),e=m(d),f=n(d),g=f.currentIndex;if(c.parent().is(":not(.disabled):not(.current)")){var h=c.attr("href"),i=parseInt(h.substring(h.lastIndexOf("-")+1),0);u(d,e,f,i)}return g===f.currentIndex?(j(d,g).focus(),!1):void 0}function R(a){throw arguments.length>1&&(a=a.format(Array.prototype.slice.call(arguments,1))),new Error(a)}function S(a,b){null==b&&R("The argument '{0}' is null or undefined.",a)}a.fn.extend({_aria:function(a,b){return this.attr("aria-"+a,b)},_removeAria:function(a){return this.removeAttr("aria-"+a)},_enableAria:function(a){return null==a||a?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(a){return null==a||a?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(a){return null==a||a?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(a){return a?this.attr("id",a):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(){for(var b=1===arguments.length&&a.isArray(arguments[0])?arguments[0]:arguments,c=this,d=0;d<b.length;d++){var e=new RegExp("\\{"+d+"\\}","gm");c=c.replace(e,b[d])}return c});var T=0,U="jQu3ry_5teps_St@te_",V="-t-",W="-p-",X="-h-",Y="Index out of range.",Z="One or more corresponding step {0} are missing.";a.fn.steps=function(b){return a.fn.steps[b]?a.fn.steps[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.steps"):w.apply(this,arguments)},a.fn.steps.add=function(a){var b=n(this);return x(this,m(this),b,b.stepCount,a)},a.fn.steps.destroy=function(){return g(this,m(this))},a.fn.steps.finish=function(){h(this,n(this))},a.fn.steps.getCurrentIndex=function(){return n(this).currentIndex},a.fn.steps.getCurrentStep=function(){return p(this,n(this).currentIndex)},a.fn.steps.getStep=function(a){return p(this,a)},a.fn.steps.insert=function(a,b){return x(this,m(this),n(this),a,b)},a.fn.steps.next=function(){return s(this,m(this),n(this))},a.fn.steps.previous=function(){return t(this,m(this),n(this))},a.fn.steps.remove=function(a){return H(this,m(this),n(this),a)},a.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},a.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var $=a.fn.steps.contentMode={html:0,iframe:1,async:2},_=a.fn.steps.stepsOrientation={horizontal:0,vertical:1},ab=a.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},bb=a.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:$.html,contentLoaded:!1},cb=a.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:_.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!1,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:ab.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},onContentLoaded:function(){},onInit:function(){},labels:{cancel:"Cancel",current:"current step:",pagination:"Pagination",finish:"Finish",next:"Next",previous:"Previous",loading:"Loading ..."}}}(jQuery);
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t(),module.exports.introJs=function(){return console.warn('Deprecated: please use require("intro.js") directly, instead of the introJs method of the function'),t().apply(this,arguments)};else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).introJs=t()}}(function(){function n(t){this._targetElement=t,this._introItems=[],this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",hidePrev:!1,hideNext:!1,tooltipPosition:"bottom",tooltipClass:"",highlightClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,showProgress:!1,scrollToElement:!0,scrollTo:"element",scrollPadding:30,overlayOpacity:.8,positionPrecedence:["bottom","top","right","left"],disableInteraction:!1,helperElementPadding:10,hintPosition:"top-middle",hintButtonLabel:"Got it",hintAnimation:!0,buttonClass:"introjs-button"}}function e(t,i){var e=t.querySelectorAll("*[data-intro]"),n=[];if(this._options.steps)B(this._options.steps,function(t){var e=h(t);if(e.step=n.length+1,"string"==typeof e.element&&(e.element=document.querySelector(e.element)),void 0===e.element||null===e.element){var i=document.querySelector(".introjsFloatingElement");null===i&&((i=document.createElement("div")).className="introjsFloatingElement",document.body.appendChild(i)),e.element=i,e.position="floating"}e.scrollTo=e.scrollTo||this._options.scrollTo,void 0===e.disableInteraction&&(e.disableInteraction=this._options.disableInteraction),null!==e.element&&n.push(e)}.bind(this));else{var o;if(e.length<1)return!1;B(e,function(t){if((!i||t.getAttribute("data-intro-group")===i)&&"none"!==t.style.display){var e=parseInt(t.getAttribute("data-step"),10);o=void 0!==t.getAttribute("data-disable-interaction")?!!t.getAttribute("data-disable-interaction"):this._options.disableInteraction,0<e&&(n[e-1]={element:t,intro:t.getAttribute("data-intro"),step:parseInt(t.getAttribute("data-step"),10),tooltipClass:t.getAttribute("data-tooltipclass"),highlightClass:t.getAttribute("data-highlightclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:t.getAttribute("data-scrollto")||this._options.scrollTo,disableInteraction:o})}}.bind(this));var s=0;B(e,function(t){if((!i||t.getAttribute("data-intro-group")===i)&&null===t.getAttribute("data-step")){for(;void 0!==n[s];)s++;o=void 0!==t.getAttribute("data-disable-interaction")?!!t.getAttribute("data-disable-interaction"):this._options.disableInteraction,n[s]={element:t,intro:t.getAttribute("data-intro"),step:s+1,tooltipClass:t.getAttribute("data-tooltipclass"),highlightClass:t.getAttribute("data-highlightclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition,scrollTo:t.getAttribute("data-scrollto")||this._options.scrollTo,disableInteraction:o}}}.bind(this))}for(var l=[],r=0;r<n.length;r++)n[r]&&l.push(n[r]);return(n=l).sort(function(t,e){return t.step-e.step}),this._introItems=n,function(t){var e=document.createElement("div"),i="",n=this;if(e.className="introjs-overlay",t.tagName&&"body"!==t.tagName.toLowerCase()){var o=k(t);o&&(i+="width: "+o.width+"px; height:"+o.height+"px; top:"+o.top+"px;left: "+o.left+"px;",e.style.cssText=i)}else i+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",e.style.cssText=i;return t.appendChild(e),e.onclick=function(){!0===n._options.exitOnOverlayClick&&A.call(n,t)},window.setTimeout(function(){i+="opacity: "+n._options.overlayOpacity.toString()+";",e.style.cssText=i},10),!0}.call(this,t)&&(E.call(this),this._options.keyboardNavigation&&u.on(window,"keydown",c,this,!0),u.on(window,"resize",a,this,!0)),!1}function a(){this.refresh.call(this)}function c(t){var e=null===t.code?t.which:t.code;if(null===e&&(e=null===t.charCode?t.keyCode:t.charCode),"Escape"!==e&&27!==e||!0!==this._options.exitOnEsc){if("ArrowLeft"===e||37===e)N.call(this);else if("ArrowRight"===e||39===e)E.call(this);else if("Enter"===e||13===e){var i=t.target||t.srcElement;i&&i.className.match("introjs-prevbutton")?N.call(this):i&&i.className.match("introjs-skipbutton")?(this._introItems.length-1===this._currentStep&&"function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),A.call(this,this._targetElement)):i&&i.getAttribute("data-stepnumber")?i.click():E.call(this),t.preventDefault?t.preventDefault():t.returnValue=!1}}else A.call(this,this._targetElement)}function h(t){if(null===t||"object"!=typeof t||void 0!==t.nodeType)return t;var e={};for(var i in t)void 0!==window.jQuery&&t[i]instanceof window.jQuery?e[i]=t[i]:e[i]=h(t[i]);return e}function E(){this._direction="forward",void 0!==this._currentStepNumber&&B(this._introItems,function(t,e){t.step===this._currentStepNumber&&(this._currentStep=e-1,this._currentStepNumber=void 0)}.bind(this)),void 0===this._currentStep?this._currentStep=0:++this._currentStep;var t=this._introItems[this._currentStep],e=!0;return void 0!==this._introBeforeChangeCallback&&(e=this._introBeforeChangeCallback.call(this,t.element)),!1===e?(--this._currentStep,!1):this._introItems.length<=this._currentStep?("function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void A.call(this,this._targetElement)):void i.call(this,t)}function N(){if(this._direction="backward",0===this._currentStep)return!1;--this._currentStep;var t=this._introItems[this._currentStep],e=!0;if(void 0!==this._introBeforeChangeCallback&&(e=this._introBeforeChangeCallback.call(this,t.element)),!1===e)return++this._currentStep,!1;i.call(this,t)}function A(t,e){var i=!0;if(void 0!==this._introBeforeExitCallback&&(i=this._introBeforeExitCallback.call(this)),e||!1!==i){var n=t.querySelectorAll(".introjs-overlay");n&&n.length&&B(n,function(t){t.style.opacity=0,window.setTimeout(function(){this.parentNode&&this.parentNode.removeChild(this)}.bind(t),500)}.bind(this));var o=t.querySelector(".introjs-helperLayer");o&&o.parentNode.removeChild(o);var s=t.querySelector(".introjs-tooltipReferenceLayer");s&&s.parentNode.removeChild(s);var l=t.querySelector(".introjs-disableInteraction");l&&l.parentNode.removeChild(l);var r=document.querySelector(".introjsFloatingElement");r&&r.parentNode.removeChild(r),q(),B(document.querySelectorAll(".introjs-fixParent"),function(t){O(t,/introjs-fixParent/g)}),u.off(window,"keydown",c,this,!0),u.off(window,"resize",a,this,!0),void 0!==this._introExitCallback&&this._introExitCallback.call(this),this._currentStep=void 0}}function L(t,e,i,n,o){var s,l,r,a,c,h="";if(o=o||!1,e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,e.style.marginLeft=null,e.style.marginTop=null,i.style.display="inherit",null!=n&&(n.style.top=null,n.style.left=null),this._introItems[this._currentStep])switch(h="string"==typeof(s=this._introItems[this._currentStep]).tooltipClass?s.tooltipClass:this._options.tooltipClass,e.className=("introjs-tooltip "+h).replace(/^\s+|\s+$/g,""),e.setAttribute("role","dialog"),"floating"!==(c=this._introItems[this._currentStep].position)&&(c=function(t,e,i){var n=this._options.positionPrecedence.slice(),o=b(),s=k(e).height+10,l=k(e).width+20,r=t.getBoundingClientRect(),a="floating";r.bottom+s+s>o.height&&m(n,"bottom");r.top-s<0&&m(n,"top");r.right+l>o.width&&m(n,"right");r.left-l<0&&m(n,"left");var c=(h=i||"",u=h.indexOf("-"),-1!==u?h.substr(u):"");var h,u;i&&(i=i.split("-")[0]);n.length&&(a="auto"!==i&&-1<n.indexOf(i)?i:n[0]);-1!==["top","bottom"].indexOf(a)&&(a+=function(t,e,i,n){var o=e/2,s=Math.min(i.width,window.screen.width),l=["-left-aligned","-middle-aligned","-right-aligned"],r="";s-t<e&&m(l,"-left-aligned");(t<o||s-t<o)&&m(l,"-middle-aligned");t<e&&m(l,"-right-aligned");r=l.length?-1!==l.indexOf(n)?n:l[0]:"-middle-aligned";return r}(r.left,l,o,c));return a}.call(this,t,e,c)),r=k(t),l=k(e),a=b(),H(e,"introjs-"+c),c){case"top-right-aligned":i.className="introjs-arrow bottom-right";var u=0;f(r,u,l,e),e.style.bottom=r.height+20+"px";break;case"top-middle-aligned":i.className="introjs-arrow bottom-middle";var d=r.width/2-l.width/2;o&&(d+=5),f(r,d,l,e)&&(e.style.right=null,p(r,d,l,a,e)),e.style.bottom=r.height+20+"px";break;case"top-left-aligned":case"top":i.className="introjs-arrow bottom",p(r,o?0:15,l,a,e),e.style.bottom=r.height+20+"px";break;case"right":e.style.left=r.width+20+"px",r.top+l.height>a.height?(i.className="introjs-arrow left-bottom",e.style.top="-"+(l.height-r.height-20)+"px"):i.className="introjs-arrow left";break;case"left":o||!0!==this._options.showStepNumbers||(e.style.top="15px"),r.top+l.height>a.height?(e.style.top="-"+(l.height-r.height-20)+"px",i.className="introjs-arrow right-bottom"):i.className="introjs-arrow right",e.style.right=r.width+20+"px";break;case"floating":i.style.display="none",e.style.left="50%",e.style.top="50%",e.style.marginLeft="-"+l.width/2+"px",e.style.marginTop="-"+l.height/2+"px",null!=n&&(n.style.left="-"+(l.width/2+18)+"px",n.style.top="-"+(l.height/2+18)+"px");break;case"bottom-right-aligned":i.className="introjs-arrow top-right",f(r,u=0,l,e),e.style.top=r.height+20+"px";break;case"bottom-middle-aligned":i.className="introjs-arrow top-middle",d=r.width/2-l.width/2,o&&(d+=5),f(r,d,l,e)&&(e.style.right=null,p(r,d,l,a,e)),e.style.top=r.height+20+"px";break;default:i.className="introjs-arrow top",p(r,0,l,a,e),e.style.top=r.height+20+"px"}}function p(t,e,i,n,o){return t.left+e+i.width>n.width?(o.style.left=n.width-i.width-t.left+"px",!1):(o.style.left=e+"px",!0)}function f(t,e,i,n){return t.left+t.width-e-i.width<0?(n.style.left=-t.left+"px",!1):(n.style.right=e+"px",!0)}function m(t,e){-1<t.indexOf(e)&&t.splice(t.indexOf(e),1)}function T(t){if(t){if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],i=k(e.element),n=this._options.helperElementPadding;d(e.element)?H(t,"introjs-fixedTooltip"):O(t,"introjs-fixedTooltip"),"floating"===e.position&&(n=0),t.style.cssText="width: "+(i.width+n)+"px; height:"+(i.height+n)+"px; top:"+(i.top-n/2)+"px;left: "+(i.left-n/2)+"px;"}}function I(t){t.setAttribute("role","button"),t.tabIndex=0}function i(o){void 0!==this._introChangeCallback&&this._introChangeCallback.call(this,o.element);var t,e,i,n,s=this,l=document.querySelector(".introjs-helperLayer"),r=document.querySelector(".introjs-tooltipReferenceLayer"),a="introjs-helperLayer";if("string"==typeof o.highlightClass&&(a+=" "+o.highlightClass),"string"==typeof this._options.highlightClass&&(a+=" "+this._options.highlightClass),null!==l){var c=r.querySelector(".introjs-helperNumberLayer"),h=r.querySelector(".introjs-tooltiptext"),u=r.querySelector(".introjs-arrow"),d=r.querySelector(".introjs-tooltip");if(i=r.querySelector(".introjs-skipbutton"),e=r.querySelector(".introjs-prevbutton"),t=r.querySelector(".introjs-nextbutton"),l.className=a,d.style.opacity=0,d.style.display="none",null!==c){var p=this._introItems[0<=o.step-2?o.step-2:0];(null!==p&&"forward"===this._direction&&"floating"===p.position||"backward"===this._direction&&"floating"===o.position)&&(c.style.opacity=0)}(n=R(o.element))!==document.body&&V(n,o.element),T.call(s,l),T.call(s,r),B(document.querySelectorAll(".introjs-fixParent"),function(t){O(t,/introjs-fixParent/g)}),q(),s._lastShowElementTimer&&window.clearTimeout(s._lastShowElementTimer),s._lastShowElementTimer=window.setTimeout(function(){null!==c&&(c.innerHTML=o.step),h.innerHTML=o.intro,d.style.display="block",L.call(s,o.element,d,u,c),s._options.showBullets&&(r.querySelector(".introjs-bullets li > a.active").className="",r.querySelector('.introjs-bullets li > a[data-stepnumber="'+o.step+'"]').className="active"),r.querySelector(".introjs-progress .introjs-progressbar").style.cssText="width:"+z.call(s)+"%;",r.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow",z.call(s)),d.style.opacity=1,c&&(c.style.opacity=1),null!=i&&/introjs-donebutton/gi.test(i.className)?i.focus():null!=t&&t.focus(),P.call(s,o.scrollTo,o,h)},350)}else{var f=document.createElement("div"),m=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),v=document.createElement("div"),_=document.createElement("div"),w=document.createElement("div");f.className=a,m.className="introjs-tooltipReferenceLayer",(n=R(o.element))!==document.body&&V(n,o.element),T.call(s,f),T.call(s,m),this._targetElement.appendChild(f),this._targetElement.appendChild(m),b.className="introjs-arrow",y.className="introjs-tooltiptext",y.innerHTML=o.intro,!(v.className="introjs-bullets")===this._options.showBullets&&(v.style.display="none");var C=document.createElement("ul");C.setAttribute("role","tablist");var j=function(){s.goToStep(this.getAttribute("data-stepnumber"))};B(this._introItems,function(t,e){var i=document.createElement("li"),n=document.createElement("a");i.setAttribute("role","presentation"),n.setAttribute("role","tab"),n.onclick=j,e===o.step-1&&(n.className="active"),I(n),n.innerHTML="&nbsp;",n.setAttribute("data-stepnumber",t.step),i.appendChild(n),C.appendChild(i)}),v.appendChild(C),!(_.className="introjs-progress")===this._options.showProgress&&(_.style.display="none");var k=document.createElement("div");k.className="introjs-progressbar",k.setAttribute("role","progress"),k.setAttribute("aria-valuemin",0),k.setAttribute("aria-valuemax",100),k.setAttribute("aria-valuenow",z.call(this)),k.style.cssText="width:"+z.call(this)+"%;",_.appendChild(k),!(w.className="introjs-tooltipbuttons")===this._options.showButtons&&(w.style.display="none"),g.className="introjs-tooltip",g.appendChild(y),g.appendChild(v),g.appendChild(_);var x=document.createElement("span");!0===this._options.showStepNumbers&&(x.className="introjs-helperNumberLayer",x.innerHTML=o.step,m.appendChild(x)),g.appendChild(b),m.appendChild(g),(t=document.createElement("a")).onclick=function(){s._introItems.length-1!==s._currentStep&&E.call(s)},I(t),t.innerHTML=this._options.nextLabel,(e=document.createElement("a")).onclick=function(){0!==s._currentStep&&N.call(s)},I(e),e.innerHTML=this._options.prevLabel,(i=document.createElement("a")).className=this._options.buttonClass+" introjs-skipbutton ",I(i),i.innerHTML=this._options.skipLabel,i.onclick=function(){s._introItems.length-1===s._currentStep&&"function"==typeof s._introCompleteCallback&&s._introCompleteCallback.call(s),s._introItems.length-1!==s._currentStep&&"function"==typeof s._introExitCallback&&s._introExitCallback.call(s),"function"==typeof s._introSkipCallback&&s._introSkipCallback.call(s),A.call(s,s._targetElement)},w.appendChild(i),1<this._introItems.length&&(w.appendChild(e),w.appendChild(t)),g.appendChild(w),L.call(s,o.element,g,b,x),P.call(this,o.scrollTo,o,g)}var S=s._targetElement.querySelector(".introjs-disableInteraction");S&&S.parentNode.removeChild(S),o.disableInteraction&&function(){var t=document.querySelector(".introjs-disableInteraction");null===t&&((t=document.createElement("div")).className="introjs-disableInteraction",this._targetElement.appendChild(t)),T.call(this,t)}.call(s),0===this._currentStep&&1<this._introItems.length?(null!=i&&(i.className=this._options.buttonClass+" introjs-skipbutton"),null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton"),!0===this._options.hidePrev?(null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton introjs-hidden"),null!=t&&H(t,"introjs-fullbutton")):null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton introjs-disabled"),null!=i&&(i.innerHTML=this._options.skipLabel)):this._introItems.length-1===this._currentStep||1===this._introItems.length?(null!=i&&(i.innerHTML=this._options.doneLabel,H(i,"introjs-donebutton")),null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton"),!0===this._options.hideNext?(null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton introjs-hidden"),null!=e&&H(e,"introjs-fullbutton")):null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton introjs-disabled")):(null!=i&&(i.className=this._options.buttonClass+" introjs-skipbutton"),null!=e&&(e.className=this._options.buttonClass+" introjs-prevbutton"),null!=t&&(t.className=this._options.buttonClass+" introjs-nextbutton"),null!=i&&(i.innerHTML=this._options.skipLabel)),e.setAttribute("role","button"),t.setAttribute("role","button"),i.setAttribute("role","button"),null!=t&&t.focus(),function(t){var e;if(t.element instanceof SVGElement)for(e=t.element.parentNode;null!==t.element.parentNode&&e.tagName&&"body"!==e.tagName.toLowerCase();)"svg"===e.tagName.toLowerCase()&&H(e,"introjs-showElement introjs-relativePosition"),e=e.parentNode;H(t.element,"introjs-showElement");var i=M(t.element,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&H(t.element,"introjs-relativePosition");e=t.element.parentNode;for(;null!==e&&e.tagName&&"body"!==e.tagName.toLowerCase();){var n=M(e,"z-index"),o=parseFloat(M(e,"opacity")),s=M(e,"transform")||M(e,"-webkit-transform")||M(e,"-moz-transform")||M(e,"-ms-transform")||M(e,"-o-transform");(/[0-9]+/.test(n)||o<1||"none"!==s&&void 0!==s)&&H(e,"introjs-fixParent"),e=e.parentNode}}(o),void 0!==this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,o.element)}function P(t,e,i){var n,o,s;if("off"!==t&&(this._options.scrollToElement&&(n="tooltip"===t?i.getBoundingClientRect():e.element.getBoundingClientRect(),o=e.element,!(0<=(s=o.getBoundingClientRect()).top&&0<=s.left&&s.bottom+80<=window.innerHeight&&s.right<=window.innerWidth)))){var l=b().height;n.bottom-(n.bottom-n.top)<0||e.element.clientHeight>l?window.scrollBy(0,n.top-(l/2-n.height/2)-this._options.scrollPadding):window.scrollBy(0,n.top-(l/2-n.height/2)+this._options.scrollPadding)}}function q(){B(document.querySelectorAll(".introjs-showElement"),function(t){O(t,/introjs-[a-zA-Z]+/g)})}function B(t,e,i){if(t)for(var n=0,o=t.length;n<o;n++)e(t[n],n);"function"==typeof i&&i()}var o,s=(o={},function(t,e){return o[e=e||"introjs-stamp"]=o[e]||0,void 0===t[e]&&(t[e]=o[e]++),t[e]}),u=new function(){var r="introjs_event";this._id=function(t,e,i,n){return e+s(i)+(n?"_"+s(n):"")},this.on=function(e,t,i,n,o){var s=this._id.apply(this,arguments),l=function(t){return i.call(n||e,t||window.event)};"addEventListener"in e?e.addEventListener(t,l,o):"attachEvent"in e&&e.attachEvent("on"+t,l),e[r]=e[r]||{},e[r][s]=l},this.off=function(t,e,i,n,o){var s=this._id.apply(this,arguments),l=t[r]&&t[r][s];l&&("removeEventListener"in t?t.removeEventListener(e,l,o):"detachEvent"in t&&t.detachEvent("on"+e,l),t[r][s]=null)}};function H(e,t){if(e instanceof SVGElement){var i=e.getAttribute("class")||"";e.setAttribute("class",i+" "+t)}else{if(void 0!==e.classList)B(t.split(" "),function(t){e.classList.add(t)});else e.className.match(t)||(e.className+=" "+t)}}function O(t,e){if(t instanceof SVGElement){var i=t.getAttribute("class")||"";t.setAttribute("class",i.replace(e,"").replace(/^\s+|\s+$/g,""))}else t.className=t.className.replace(e,"").replace(/^\s+|\s+$/g,"")}function M(t,e){var i="";return t.currentStyle?i=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(i=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),i&&i.toLowerCase?i.toLowerCase():i}function d(t){var e=t.parentNode;return!(!e||"HTML"===e.nodeName)&&("fixed"===M(t,"position")||d(e))}function b(){if(void 0!==window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function g(){var t=document.querySelector(".introjs-hintReference");if(t){var e=t.getAttribute("data-step");return t.parentNode.removeChild(t),e}}function l(t){if(this._introItems=[],this._options.hints)B(this._options.hints,function(t){var e=h(t);"string"==typeof e.element&&(e.element=document.querySelector(e.element)),e.hintPosition=e.hintPosition||this._options.hintPosition,e.hintAnimation=e.hintAnimation||this._options.hintAnimation,null!==e.element&&this._introItems.push(e)}.bind(this));else{var e=t.querySelectorAll("*[data-hint]");if(!e||!e.length)return!1;B(e,function(t){var e=t.getAttribute("data-hintanimation");e=e?"true"===e:this._options.hintAnimation,this._introItems.push({element:t,hint:t.getAttribute("data-hint"),hintPosition:t.getAttribute("data-hintposition")||this._options.hintPosition,hintAnimation:e,tooltipClass:t.getAttribute("data-tooltipclass"),position:t.getAttribute("data-position")||this._options.tooltipPosition})}.bind(this))}(function(){var l=this,r=document.querySelector(".introjs-hints");null===r&&((r=document.createElement("div")).className="introjs-hints");B(this._introItems,function(t,e){if(!document.querySelector('.introjs-hint[data-step="'+e+'"]')){var i,n=document.createElement("a");I(n),n.onclick=(i=e,function(t){var e=t||window.event;e.stopPropagation&&e.stopPropagation(),null!==e.cancelBubble&&(e.cancelBubble=!0),j.call(l,i)}),n.className="introjs-hint",t.hintAnimation||H(n,"introjs-hint-no-anim"),d(t.element)&&H(n,"introjs-fixedhint");var o=document.createElement("div");o.className="introjs-hint-dot";var s=document.createElement("div");s.className="introjs-hint-pulse",n.appendChild(o),n.appendChild(s),n.setAttribute("data-step",e),t.targetElement=t.element,t.element=n,C.call(this,t.hintPosition,n,t.targetElement),r.appendChild(n)}}.bind(this)),document.body.appendChild(r),void 0!==this._hintsAddedCallback&&this._hintsAddedCallback.call(this)}).call(this),u.on(document,"click",g,this,!1),u.on(window,"resize",r,this,!0)}function r(){B(this._introItems,function(t){void 0!==t.targetElement&&C.call(this,t.hintPosition,t.element,t.targetElement)}.bind(this))}function y(t){var e=document.querySelector(".introjs-hints");return e?e.querySelectorAll(t):[]}function v(t){var e=y('.introjs-hint[data-step="'+t+'"]')[0];g.call(this),e&&H(e,"introjs-hidehint"),void 0!==this._hintCloseCallback&&this._hintCloseCallback.call(this,t)}function _(t){var e=y('.introjs-hint[data-step="'+t+'"]')[0];e&&O(e,/introjs-hidehint/g)}function w(t){var e=y('.introjs-hint[data-step="'+t+'"]')[0];e&&e.parentNode.removeChild(e)}function C(t,e,i){var n=k.call(this,i);switch(t){default:case"top-left":e.style.left=n.left+"px",e.style.top=n.top+"px";break;case"top-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+"px";break;case"bottom-left":e.style.left=n.left+"px",e.style.top=n.top+n.height-20+"px";break;case"bottom-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+n.height-20+"px";break;case"middle-left":e.style.left=n.left+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-right":e.style.left=n.left+n.width-20+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"middle-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+(n.height-20)/2+"px";break;case"bottom-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+n.height-20+"px";break;case"top-middle":e.style.left=n.left+(n.width-20)/2+"px",e.style.top=n.top+"px"}}function j(t){var e=document.querySelector('.introjs-hint[data-step="'+t+'"]'),i=this._introItems[t];void 0!==this._hintClickCallback&&this._hintClickCallback.call(this,e,i,t);var n=g.call(this);if(parseInt(n,10)!==t){var o=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div");o.className="introjs-tooltip",o.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},s.className="introjs-tooltiptext";var a=document.createElement("p");a.innerHTML=i.hint;var c=document.createElement("a");c.className=this._options.buttonClass,c.setAttribute("role","button"),c.innerHTML=this._options.hintButtonLabel,c.onclick=v.bind(this,t),s.appendChild(a),s.appendChild(c),l.className="introjs-arrow",o.appendChild(l),o.appendChild(s),this._currentStep=e.getAttribute("data-step"),r.className="introjs-tooltipReferenceLayer introjs-hintReference",r.setAttribute("data-step",e.getAttribute("data-step")),T.call(this,r),r.appendChild(o),document.body.appendChild(r),L.call(this,e,o,l,null,!0)}}function k(t){var e=document.body,i=document.documentElement,n=window.pageYOffset||i.scrollTop||e.scrollTop,o=window.pageXOffset||i.scrollLeft||e.scrollLeft,s=t.getBoundingClientRect();return{top:s.top+n,width:s.width,height:s.height,left:s.left+o}}function R(t){var e=window.getComputedStyle(t),i="absolute"===e.position,n=/(auto|scroll)/;if("fixed"===e.position)return document.body;for(var o=t;o=o.parentElement;)if(e=window.getComputedStyle(o),(!i||"static"!==e.position)&&n.test(e.overflow+e.overflowY+e.overflowX))return o;return document.body}function V(t,e){t.scrollTop=e.offsetTop-t.offsetTop}function z(){return parseInt(this._currentStep+1,10)/this._introItems.length*100}var x=function(t){var e;if("object"==typeof t)e=new n(t);else if("string"==typeof t){var i=document.querySelector(t);if(!i)throw new Error("There is no element with given selector.");e=new n(i)}else e=new n(document.body);return x.instances[s(e,"introjs-instance")]=e};return x.version="2.9.3",x.instances={},x.fn=n.prototype={clone:function(){return new n(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=function(t,e){var i,n={};for(i in t)n[i]=t[i];for(i in e)n[i]=e[i];return n}(this._options,t),this},start:function(t){return e.call(this,this._targetElement,t),this},goToStep:function(t){return function(t){this._currentStep=t-2,void 0!==this._introItems&&E.call(this)}.call(this,t),this},addStep:function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},addSteps:function(t){if(t.length){for(var e=0;e<t.length;e++)this.addStep(t[e]);return this}},goToStepNumber:function(t){return function(t){this._currentStepNumber=t,void 0!==this._introItems&&E.call(this)}.call(this,t),this},nextStep:function(){return E.call(this),this},previousStep:function(){return N.call(this),this},exit:function(t){return A.call(this,this._targetElement,t),this},refresh:function(){return function(){if(T.call(this,document.querySelector(".introjs-helperLayer")),T.call(this,document.querySelector(".introjs-tooltipReferenceLayer")),T.call(this,document.querySelector(".introjs-disableInteraction")),void 0!==this._currentStep&&null!==this._currentStep){var t=document.querySelector(".introjs-helperNumberLayer"),e=document.querySelector(".introjs-arrow"),i=document.querySelector(".introjs-tooltip");L.call(this,this._introItems[this._currentStep].element,i,e,t)}return r.call(this),this}.call(this),this},onbeforechange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforechange was not a function");return this._introBeforeChangeCallback=t,this},onchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},onafterchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onafterchange was not a function");return this._introAfterChangeCallback=t,this},oncomplete:function(t){if("function"!=typeof t)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},onhintsadded:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintsadded was not a function.");return this._hintsAddedCallback=t,this},onhintclick:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclick was not a function.");return this._hintClickCallback=t,this},onhintclose:function(t){if("function"!=typeof t)throw new Error("Provided callback for onhintclose was not a function.");return this._hintCloseCallback=t,this},onexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this},onskip:function(t){if("function"!=typeof t)throw new Error("Provided callback for onskip was not a function.");return this._introSkipCallback=t,this},onbeforeexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onbeforeexit was not a function.");return this._introBeforeExitCallback=t,this},addHints:function(){return l.call(this,this._targetElement),this},hideHint:function(t){return v.call(this,t),this},hideHints:function(){return function(){B(y(".introjs-hint"),function(t){v.call(this,t.getAttribute("data-step"))}.bind(this))}.call(this),this},showHint:function(t){return _.call(this,t),this},showHints:function(){return function(){var t=y(".introjs-hint");t&&t.length?B(t,function(t){_.call(this,t.getAttribute("data-step"))}.bind(this)):l.call(this,this._targetElement)}.call(this),this},removeHints:function(){return function(){B(y(".introjs-hint"),function(t){w.call(this,t.getAttribute("data-step"))}.bind(this))}.call(this),this},removeHint:function(t){return w.call(this,t),this},showHintDialog:function(t){return j.call(this,t),this}},x});

// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (typeof exports === 'object') {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support AMD
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);

  // Support vanilla script loading
  } else {
    root.randomColor = factory();
  }

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false)
        }
      options.count = null;

      while (totalColors > colors.length) {

        // Since we're generating multiple colors,
        // incremement the seed. Otherwise we'd just
        // generate the same color each time...
        if (seed && options.seed) options.seed += 1;

        colors.push(randomColor(options));
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue)

      var hue = randomWithin(hueRange)

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length

      var j = parseInt((hue - hueRange[0]) / step)

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length
      }
      else {
        colorRanges[j] = true
           }

      var min = (hueRange[0] + j * step) % 359,
          max = (hueRange[0] + (j + 1) * step) % 359;

      hueRange = [min, max]

      hue = randomWithin(hueRange)

      if (hue < 0) {hue = 360 + hue;}
      return hue
    }
    else {
      var hueRange = getHueRange(options.hue)

      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }

      return hue;
    }
  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895
      var r=Math.random()
      r += golden_ratio
      r %= 1
      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
}
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [19,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [47,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [63,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [179, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [258, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [283, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue)
  { if (!isNaN(colorHue)) {
    var number = parseInt(colorHue);

    if (number < 360 && number > 0) {
      return getColorInfo(colorHue).hueRange
    }
  }
    else if (typeof colorHue === 'string') {

      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];

        if (color.hueRange) {
          return color.hueRange
       }
    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0]
        return getColorInfo(hue).hueRange
    }
  }

    return [0,360]
}
  return randomColor;
}));

;(function(win, doc) {

  /**
   * Main function to create material avatars
   * @param element - The element(s) to apply the material avatar look to
   */
  function MaterialAvatar(elements, options) {

    if (!elements) {
      throw(new Error('No elements selected/found'));
    }

    var _this = this;

    this.options = {
      colorPalette: [
        '#1abc9c', '#2ecc71', '#3498db',
        '#9b59b6', '#34495e', '#16a085',
        '#27ae60', '#2980b9', '#8e44ad',
        '#2c3e50', '#f1c40f', '#e67e22',
        '#e74c3c', '#95a5a6', '#f39c12',
        '#d35400', '#c0392b', '#bdc3c7',
        '#7f8c8d'
      ],
      fontFamily: 'Arial'
    };

    this.name = 'MaterialAvatar';

    extend(_this.options, options);
    this.elements = elements;

    if (this.elements[0]) {

      //Turn our HTMLCollection into an array so we can iterate through it.
      this.elements = [].slice.call(this.elements);

      this.elements.forEach(function(element){
        element.avatar = new Avatar(element, _this.options);
      });
    } else {
      this.elements.avatar = new Avatar(elements, _this.options);
    }
  }

  MaterialAvatar.prototype.updateOptions = function(options) {
    var _this = this;

    if (options) {
      this.options = options;
    }

    this.elements.forEach(function(element){
      element.avatar.options = _this.options;
    });
  };

  function Avatar(element, options) {

    if (!element) {
      throw(new Error('No element selected/found'));
    }

    var _this = this;
    this.element  = element;
    this.options  = options;
    this.canvas   = doc.createElement('canvas');

    //Push our reflows to a new animation frame.
    requestAnimationFrame(function() {
      return _this.init();
    });
  }

  Avatar.prototype.init = function(){
    this.width   = parseInt(this.element.offsetWidth, 10);
    this.height  = parseInt(this.element.offsetHeight, 10);

    this.canvas.setAttribute('width', this.width);
    this.canvas.setAttribute('height', this.width);

    this.initials = this.getInitials();
    this.fontSize = this.getFontSize();

    this.render();
  };

  Avatar.prototype.render = function() {
    this.backgroundColor  = this.generateColor(this.initials.charCodeAt(0) - 65);
    this.context          = this.canvas.getContext('2d');

    //Create our font styles
    this.context.font       = this.fontSize + 'px/0px ' + this.options.fontFamily;
    this.context.textAlign  = 'center';

    //Decide what type of shape we should draw for the background
    if (this.options) {
      if(this.options.shape === 'circle') {
        this._drawCircle();
      } else {
        this._drawSquare();
      }
    } else {
      this._drawSquare();
    }

    //Create the color and add our initials
    this.context.fillStyle  = this.getTextColor();
    this.context.fillText(
      this.initials,
      this.width/2,
      (this.height / 2) + ((this.fontSize*0.68)/2)
    );

    //Remove the inner text and swap in the canvas elemnt
    this.element.innerHTML  = '';
    this.element.appendChild(this.canvas);
  };

  //Creates circle background area
  Avatar.prototype._drawCircle = function() {
    var centerX = this.width  / 2;
    var centerY = this.height / 2;
    var radius  = this.width  / 2;

    this.context.beginPath();
    this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    this.context.fillStyle  = this.backgroundColor;
    this.context.fill();
  };

  //Creates square background area
  Avatar.prototype._drawSquare = function() {
    this.context.fillStyle  = this.backgroundColor;
    this.context.fillRect(0, 0, this.width, this.height);
  };

  Avatar.prototype.getInitials = function () {

    if (this.options.initials) {
      return this.options.initials;
    }

    this.name       = this.options.name || this.element.getAttribute('data-name') || this.element.innerHTML.trim();
    var _nameSplit  = this.name.split(' ');
    var _initials;

    this.element.setAttribute('data-name', this.name);

    //Get initials from name
    if (_nameSplit.length > 1) {
      _initials = _nameSplit[0].charAt(0).toUpperCase() + _nameSplit[1].charAt(0).toUpperCase();
    } else {
      _initials = _nameSplit[0].charAt(0).toUpperCase();
    }

    return _initials;
  };

  Avatar.prototype.getFontSize = function () {
    if (this.options.fontSize) {
      if(typeof this.options.fontSize === 'function') {
        return this.options.fontSize(this.height, this.initials.length);
      }

      return this.options.fontSize;
    }

    var _fontSize = this.height/((this.initials.length*0.5) + 1);

    return _fontSize;
  };

  Avatar.prototype.getTextColor = function () {

    //Override generated text color with a custom one
    if (this.options.textColor) {
      return this.options.textColor;
    }

    var _hexColor   = this._hexToRgb(this.backgroundColor);

    //Optional fallback incase our function returns null
    if (!_hexColor) return '#222';

    var _colorValue = (_hexColor.r * 299) + (_hexColor.g * 587) + (_hexColor.b * 114);

    return (Math.round(_colorValue/1000) > 125) ? '#222' : '#fff';
  };

  Avatar.prototype._hexToRgb = function (hex) {
    var _result;

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    _result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (_result) {
      return {
        r: parseInt(_result[1], 16),
        g: parseInt(_result[2], 16),
        b: parseInt(_result[3], 16)
      };
    }

    return null;
  };

  Avatar.prototype.generateColor = function (index) {

    if (this.options.backgroundColor) {
      return this.options.backgroundColor;
    }

    //Uses the randomColor generator - https://github.com/davidmerfield/randomColor
    if (typeof randomColor !== undefined) {
      if (this.options && this.options.randomColor) {
        return randomColor(this.options.randomColor);
      } else if (!this.options) {
        return randomColor();
      }
    }

    return this.options.colorPalette[Math.abs(index) % this.options.colorPalette.length];
  };

  // export
  win.MaterialAvatar  = MaterialAvatar;

  if (typeof jQuery !== 'undefined' && typeof jQuery.fn !== 'undefined') {
    jQuery.fn.materialAvatar = function(options) {
      return this.each(function() {
        if (!jQuery.data(this, 'plugin_materialAvatar')) {
          jQuery.data(this, 'plugin_materialAvatar', new MaterialAvatar(this, options));
        }
      });
    };
  }

  function extend(_this, obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
         _this[i] = obj[i];
      }
    }
  }

})(window, document);

//# sourceMappingURL=student-dashboard-plugin.js.map
