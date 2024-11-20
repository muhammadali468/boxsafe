"use strict";
!function(t,i){"use strict";function r(r,e,o){var s=this,n=r.get(0);s.duration=e.duration,s.opacity=e.opacity,s.isShown=!1,s.jqTargetOrg=r,(n != null && n === n.window)||9===n.nodeType?s.jqTarget=t("body"):"iframe"===n.nodeName.toLowerCase()||"frame"===n.nodeName.toLowerCase()?(s.jqWin=t(n.contentWindow),s.elmDoc=n.contentWindow.document,s.jqTarget=t("body",s.elmDoc),s.isFrame=!0):s.jqTarget=r,s.jqWin=s.jqWin||t(window),s.elmDoc=s.elmDoc||document,s.isBody="body"===s.jqTarget.get(0).nodeName.toLowerCase(),s.jqView=s.isBody?s.jqWin:s.jqTarget,o&&(o.jqProgress&&(o.timer&&clearTimeout(o.timer),o.jqProgress.remove(),delete o.jqProgress),o.reset(!0),o.jqOverlay.stop()),s.jqOverlay=(o&&o.jqOverlay||t('<div class="'+d+'" />').css({position:s.isBody?"fixed":"absolute",left:0,top:0,display:"none",cursor:"wait"}).appendTo(s.jqTarget).on("touchmove",function(){return!1})).css({backgroundColor:e.fillColor,zIndex:e.zIndex}),(s.jqProgress=e.progress===!1?i:"function"==typeof e.progress?e.progress.call(s.jqTarget,e):l(s))&&s.jqProgress.css({position:s.isBody?"fixed":"absolute",display:"none",zIndex:e.zIndex+1,cursor:"wait"}).appendTo(s.jqTarget).on("touchmove",function(){return!1}),s.callAdjust=function(t){return t.adjustProgress?function(){t.adjustProgress(),t.adjust()}:function(){t.adjust()}}(s),s.avoidFocus=function(i){return function(r){return t(i.elmDoc.activeElement).blur(),r.preventDefault(),!1}}(s),s.avoidScroll=function(t){return function(i){return t.jqView.scrollLeft(t.scrLeft).scrollTop(t.scrTop),i.preventDefault(),!1}}(s),o&&(o.timer&&clearTimeout(o.timer),o=i)}function e(i,e){var o=t.extend({duration:200,opacity:.6,zIndex:9e3},e);return o.fillColor=o.fillColor||o.color||"#888",i.each(function(){var i=t(this);i.data(h,new r(i,o,i.data(h))),"function"==typeof o.show&&i.off(g,o.show).on(g,o.show),"function"==typeof o.hide&&i.off(c,o.hide).on(c,o.hide)})}function o(i,r){return i.each(function(){var i,o=t(this);(r||!(i=o.data(h)))&&(i=e(o,r).data(h)),i.show()})}function s(i,r){return i.each(function(){var i=t(this).data(h);i&&i.hide(r)})}function n(i,r,e){return i.each(function(){var i=t(this).data(h);i&&i.scroll(r,e)})}function a(t,r,o){var s,n=t.length?t.eq(0):i;if(n&&(s=n.data(h)||e(n).data(h),s.hasOwnProperty(r)))return null!=o&&(s[r]=o),s[r]}var h="plainOverlay",d=h.toLowerCase(),g=d+"show",c=d+"hide",l=function(){function r(r,e,o,s){return s=s===i?";":s,t.map(r,function(i){return t.map(e,function(t){return(o||"")+t+i}).join(s)}).join(s)}var e,o="jQuery-"+h,s=["-webkit-","-moz-","-ms-","-o-",""],n=o+"-progress",a="."+n+"{"+r(["box-sizing:border-box"],["-webkit-","-moz-",""])+";width:100%;height:100%;border-top:3px solid #17f29b;"+r(["border-radius:50%"],s)+";-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);"+r(["animation-name:"+o+"-spin","animation-duration:1s","animation-timing-function:linear","animation-iteration-count:infinite"],s)+"}"+r(["keyframes "+o+"-spin{from{"+r(["transform:rotate(0deg)"],s)+"}to{"+r(["transform:rotate(360deg)"],s)+"}}"],s,"@","")+"."+n+"-legacy{width:100%;height:50%;padding-top:25%;text-align:center;white-space:nowrap;*zoom:1}."+n+"-legacy:after,."+n+'-legacy:before{content:" ";display:table}.'+n+"-legacy:after{clear:both}."+n+"-legacy div{width:18%;height:100%;margin:0 1%;background-color:#17f29b;float:left;visibility:hidden}."+n+"-1 div."+n+"-1,."+n+"-2 div."+n+"-1,."+n+"-2 div."+n+"-2,."+n+"-3 div."+n+"-1,."+n+"-3 div."+n+"-2,."+n+"-3 div."+n+"-3{visibility:visible}",d=function(){var t=Math.min(300,.9*(this.isBody?Math.min(this.jqWin.width(),this.jqWin.height()):Math.min(this.jqTarget.innerWidth(),this.jqTarget.innerHeight())));this.jqProgress.width(t).height(t),this.showProgress||this.jqProgress.children("."+n).css("borderTopWidth",Math.max(3,t/30))},g=function(t){var i=this;i.timer&&clearTimeout(i.timer),i.progressCnt&&i.jqProgress.removeClass(n+"-"+i.progressCnt),i.isShown&&(i.progressCnt=!t&&i.progressCnt<3?i.progressCnt+1:0,i.progressCnt&&i.jqProgress.addClass(n+"-"+i.progressCnt),i.timer=setTimeout(function(){i.showProgress()},500))};return function(r){var s,h;return"boolean"!=typeof e&&(e=function(){function t(t,i){return!!~(""+t).indexOf(i)}function r(r){var e;for(e in r)if(!t(r[e],"-")&&a[r[e]]!==i)return!0;return!1}function e(t){var i=t.charAt(0).toUpperCase()+t.slice(1),e=(t+" "+d.join(i+" ")+i).split(" ");return r(e)}var o,s,n=document.createElement("modernizr"),a=n.style,h="Webkit Moz O ms",d=h.split(" "),g={},c={}.hasOwnProperty,l=c!==i&&c.call!==i?function(t,i){return c.call(t,i)}:function(t,r){return r in t&&t.constructor.prototype[r]===i};g.borderradius=function(){return e("borderRadius")},g.cssanimations=function(){return e("animationName")},g.csstransforms=function(){return!!e("transform")},o=!1;for(s in g)if(l(g,s)&&!g[s]()){o=!0;break}return a.cssText="",n=null,o}()),r.elmDoc.getElementById(o)||(r.elmDoc.createStyleSheet?(h=r.elmDoc.createStyleSheet(),h.owningElement.id=o,h.cssText=a):(h=(r.elmDoc.getElementsByTagName("head")[0]||r.elmDoc.documentElement).appendChild(r.elmDoc.createElement("style")),h.type="text/css",h.id=o,h.textContent=a)),e?(s=t('<div><div class="'+n+'-legacy"><div class="'+n+'-3" /><div class="'+n+'-2" /><div class="'+n+'-1" /><div class="'+n+'-2" /><div class="'+n+'-3" /></div></div>'),r.showProgress=g):s=t('<div><div class="'+n+'" /></div>'),r.adjustProgress=d,s}}();r.prototype.show=function(){var r,e,o,s,n,a=this;a.reset(!0),r=a.jqTarget.get(0).style,a.orgPosition=r.position,e=a.jqTarget.css("position"),"relative"!==e&&"absolute"!==e&&"fixed"!==e&&a.jqTarget.css("position","relative"),a.orgOverflow=r.overflow,o=a.jqTarget.prop("clientWidth"),s=a.jqTarget.prop("clientHeight"),a.jqTarget.css("overflow","hidden"),o-=a.jqTarget.prop("clientWidth"),s-=a.jqTarget.prop("clientHeight"),a.addMarginR=a.addMarginB=0,0>o&&(a.addMarginR=-o),0>s&&(a.addMarginB=-s),a.isBody?(a.addMarginR&&(a.orgMarginR=r.marginRight,a.jqTarget.css("marginRight","+="+a.addMarginR)),a.addMarginB&&(a.orgMarginB=r.marginBottom,a.jqTarget.css("marginBottom","+="+a.addMarginB))):(a.addMarginR&&(a.orgMarginR=r.paddingRight,a.orgWidth=r.width),a.addMarginB&&(a.orgMarginB=r.paddingBottom,a.orgHeight=r.height)),a.jqActive=i,n=t(a.elmDoc.activeElement),a.isBody&&!a.isFrame?a.jqActive=n.blur():a.jqTarget.has(n.get(0)).length&&n.blur(),a.jqTarget.focusin(a.avoidFocus),a.scrLeft=a.jqView.scrollLeft(),a.scrTop=a.jqView.scrollTop(),a.jqView.scroll(a.avoidScroll),a.jqWin.resize(a.callAdjust),a.callAdjust(),a.isShown=!0,a.jqOverlay.stop().fadeTo(a.duration,a.opacity,function(){a.jqTargetOrg.trigger(g)}),a.jqProgress&&(a.showProgress&&a.showProgress(!0),a.jqProgress.stop().fadeIn(a.duration))},r.prototype.hide=function(t){function i(){r.reset(),r.jqTargetOrg.trigger(c)}var r=this;r.isShown&&(t?(i(),r.jqOverlay.stop().fadeOut(r.duration)):r.jqOverlay.stop().fadeOut(r.duration,i),r.jqProgress&&r.jqProgress.stop().fadeOut(r.duration))},r.prototype.adjust=function(){var t,i;this.isBody?(t=this.jqWin.width(),i=this.jqWin.height(),this.jqOverlay.width(t).height(i),this.jqProgress&&this.jqProgress.css({left:(t-this.jqProgress.outerWidth())/2,top:(i-this.jqProgress.outerHeight())/2})):(this.addMarginR&&(t=this.jqTarget.css({paddingRight:this.orgMarginR,width:this.orgWidth}).width(),this.jqTarget.css("paddingRight","+="+this.addMarginR).width(t-this.addMarginR)),this.addMarginB&&(i=this.jqTarget.css({paddingBottom:this.orgMarginB,height:this.orgHeight}).height(),this.jqTarget.css("paddingBottom","+="+this.addMarginB).height(i-this.addMarginB)),t=Math.max(this.jqTarget.prop("scrollWidth"),this.jqTarget.innerWidth()),i=Math.max(this.jqTarget.prop("scrollHeight"),this.jqTarget.innerHeight()),this.jqOverlay.width(t).height(i),this.jqProgress&&(t=this.jqTarget.innerWidth(),i=this.jqTarget.innerHeight(),this.jqProgress.css({left:(t-this.jqProgress.outerWidth())/2+this.scrLeft,top:(i-this.jqProgress.outerHeight())/2+this.scrTop})))},r.prototype.reset=function(t){t&&(this.jqOverlay.css("display","none"),this.jqProgress&&this.jqProgress.css("display","none")),this.isShown&&(this.jqTarget.css({position:this.orgPosition,overflow:this.orgOverflow}),this.isBody?(this.addMarginR&&this.jqTarget.css("marginRight",this.orgMarginR),this.addMarginB&&this.jqTarget.css("marginBottom",this.orgMarginB)):(this.addMarginR&&this.jqTarget.css({paddingRight:this.orgMarginR,width:this.orgWidth}),this.addMarginB&&this.jqTarget.css({paddingBottom:this.orgMarginB,height:this.orgHeight})),this.jqTarget.off("focusin",this.avoidFocus),this.jqActive&&this.jqActive.length&&this.jqActive.focus(),this.jqView.off("scroll",this.avoidScroll).scrollLeft(this.scrLeft).scrollTop(this.scrTop),this.jqWin.off("resize",this.callAdjust),this.isShown=!1)},r.prototype.scroll=function(t,i){var r=i?"Top":"Left";this.jqView["scroll"+r](this["scr"+r]=t),this["scr"+r]=this.jqView["scroll"+r]()},t.fn[h]=function(t,i,r){return"show"===t?o(this,i):"hide"===t?s(this,i):"scrollLeft"===t?n(this,i):"scrollTop"===t?n(this,i,!0):"option"===t?a(this,i,r):e(this,t)}}(jQuery);