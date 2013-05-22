/*!
 * jQuery-runner - v2.1.3 - 2013-05-22
 * https://github.com/jylauril/jquery-runner/
 * Copyright (c) 2013 Jyrki Laurila <https://github.com/jylauril>
 */
(function(){var t,i,s,n,e,r,o;if(s={version:"2.1.3",name:"jQuery-runner"},e={},o=1,n=function(t){return(10>t?"0":"")+t},r=function(){return"runner"+o++},i=function(t,i){var s,e,r,o,a,h,u,p,l,f,c;for(i=i||{},p=[36e5,6e4,1e3,10],h=["",":",":","."],a="",o="",r=i.milliseconds,e=p.length,l=0,0>t&&(t=Math.abs(t),a="-"),s=f=0,c=p.length;c>f;s=++f)u=p[s],t>=u&&(l=Math.floor(t/u),t-=l*u),(l||s>1||o)&&(s!==e-1||r)&&(o+=(o?h[s]:"")+n(l));return a+o},t=function(){function t(i,s,n){var o;return this instanceof t?(this.items=i,o=this.id=r(),this.settings=$.extend({},this.settings,s),e[o]=this,i.each(function(t,i){$(i).data("runner",o)}),this.value(this.settings.startAt),(n||this.settings.autostart)&&this.start(),void 0):new t(i,s,n)}return t.prototype.running=!1,t.prototype.updating=!1,t.prototype.finished=!1,t.prototype.interval=null,t.prototype.total=0,t.prototype.lastTime=0,t.prototype.startTime=0,t.prototype.lastLap=0,t.prototype.lapTime=0,t.prototype.settings={autostart:!1,interval:20,countdown:!1,stopAt:null,startAt:0,milliseconds:!0,format:null},t.prototype.value=function(t){var i=this;this.items.each(function(s,n){var e;s=$(n),e=s.is("input")?"val":"text",s[e](i.format(t))})},t.prototype.format=function(t){var s;return s=this.settings.format,s=$.isFunction(s)?s:i,s(t,this.settings)},t.prototype.update=function(){var t,i,s,n,e;this.updating||(this.updating=!0,s=this.settings,e=$.now(),n=s.stopAt,t=s.countdown,i=e-this.lastTime,this.lastTime=e,t?this.total-=i:this.total+=i,null!==n&&(t&&n>=this.total||!t&&this.total>=n)&&(this.total=n,this.finished=!0,this.stop(),this.fire("runnerFinish")),this.value(this.total),this.updating=!1)},t.prototype.fire=function(t){this.items.trigger(t,this.info())},t.prototype.start=function(){var t=this;this.running||(this.running=!0,(!this.startTime||this.finished)&&this.reset(),this.lastTime=$.now(),this.interval=setInterval(function(){t.update()},this.settings.interval),this.fire("runnerStart"))},t.prototype.stop=function(){this.running&&(this.running=!1,clearInterval(this.interval),this.update(),this.fire("runnerStop"))},t.prototype.toggle=function(){this.running?this.stop():this.start()},t.prototype.lap=function(){var t,i;return i=this.lastTime,t=i-this.lapTime,(this.running||t)&&(this.lastLap=t,this.lapTime=i),i=this.format(this.lastLap),this.fire("runnerLap"),i},t.prototype.reset=function(t){t&&this.stop(),this.startTime=this.lapTime=this.lastTime=$.now(),this.total=this.settings.startAt,this.value(this.total),this.finished=!1,this.fire("runnerReset")},t.prototype.info=function(){var t;return t=this.lastLap||0,{running:this.running,finished:this.finished,time:this.total,formattedTime:this.format(this.total),startTime:this.startTime,lapTime:t,formattedLapTime:this.format(t),settings:this.settings}},t}(),!$)throw"["+s.name+"] jQuery library is required for this plugin to work";$.fn.runner=function(i,n,r){var o,a;switch(i||(i="init"),"object"==typeof i&&(r=n,n=i,i="init"),o=this.data("runner"),a=o?e[o]:!1,i){case"init":new t(this,n,r);break;case"info":if(a)return a.info();break;case"reset":a&&a.reset(n);break;case"lap":if(a)return a.lap();break;case"start":case"stop":case"toggle":if(a)return a[i]();break;case"version":return s.version;default:$.error("["+s.name+"] Method "+i+" does not exist")}return this},$.fn.runner.format=i}).call(this);