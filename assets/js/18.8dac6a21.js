(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{328:function(t,e,i){},374:function(t,e,i){"use strict";var s=i(328);i.n(s).a},393:function(t,e,i){"use strict";i.r(e);var s={name:"swipingRebound",data:function(){return{data:[],distanceY:0,leaveTime:0,timer:null,deltaY:0,time:0,targer:0,pageHeight:0,scrollHeight:0}},computed:{minHeight:function(){return this.pageHeight-this.scrollHeight},scale:function(){return this.pageHeight/this.scrollHeight},scrollBarDis:function(){return-this.getDistanceY*this.scale},scrollBarHeight:function(){return this.pageHeight*this.scale},bufferDis:function(){return Math.round(45*this.deltaY)},getDistanceY:function(){if(this.distanceY>0)return this.distanceY*this.getF;if(this.distanceY<this.minHeight){var t=Math.abs(this.distanceY-this.minHeight);return this.minHeight-t*this.getF}return this.distanceY},getF:function(){var t=0;this.distanceY>0?t=this.distanceY:this.distanceY<this.minHeight&&(t=Math.abs(this.distanceY-this.minHeight));var e=1-t/this.pageHeight;return e<.6?.6:e}},mounted:function(){for(var t=this,e=0;e<150;e++)this.data.push(e+1);this.$nextTick((function(){t.pageHeight=t.$refs.page.clientHeight,t.scrollHeight=t.$refs.scroll.clientHeight})),console.log(this,"---",this.data)},methods:{start:function(t){Date.now()-this.leaveTime>=150&&(this.deltaY=0,cancelAnimationFrame(this.timer))},pressMove:function(t){t.preventDefault(),this.deltaY=t.deltaY,this.distanceY+=t.deltaY,this.leaveTime=Date.now()},end:function(t){var e=this;if(this.distanceY<0&&this.distanceY+this.bufferDis<this.minHeight&&Date.now()-this.leaveTime>=150)cancelAnimationFrame(this.timer);else{var i=Math.abs(this.bufferDis)<800&&Math.abs(this.bufferDis)>50?800:Math.round(Math.abs(this.bufferDis));i>2e3&&(i=2e3);var s=Math.round(this.distanceY+this.bufferDis);s>=0?(s=0,i=500):s<this.minHeight&&(s=this.minHeight,i=500),this.targer=s,this.time=i,this.animation(this.distanceY,s-this.distanceY,i,(function(t){e.distanceY=t}),(function(){}))}},animation:function(t,e,i,s,a){var n=this,r=Math.ceil(i/16.7),h=0,c=function(){if(h>r||0==r)cancelAnimationFrame(n.timer),c=null,h=0,a&&a();else{var i=function(t,e,i,s){return-i*((t=t/s-1)*t*t*t-1)+e}(++h,t,e,r);s(i),n.timer=requestAnimationFrame(c)}};c()}}},a=(i(374),i(45)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("p",[t._v("拉力系数："+t._s(t.getF))]),t._v(" "),i("p",[t._v("滚动速度："+t._s(t.deltaY))]),t._v(" "),i("p",[t._v("滚动距离："+t._s(t.bufferDis))]),t._v(" "),i("p",[t._v("滚动时间："+t._s(t.time)+"ms")]),t._v(" "),i("p",[t._v("最大滚动高度："+t._s(-t.minHeight))]),t._v(" "),i("p",[t._v("已滚动的高度："+t._s(-t.targer))]),t._v(" "),i("div",{ref:"page",staticClass:"page"},[i("div",{directives:[{name:"gesture",rawName:"v-gesture:start",value:t.start,expression:"start",arg:"start"},{name:"gesture",rawName:"v-gesture:pressMove",value:t.pressMove,expression:"pressMove",arg:"pressMove"},{name:"gesture",rawName:"v-gesture:end",value:t.end,expression:"end",arg:"end"}],ref:"scroll",staticClass:"scroll",style:{transform:"translate3d(0,"+t.getDistanceY+"px,0)"}},t._l(t.data,(function(e){return i("p",{key:e,staticClass:"p-item",class:{fixed:1===e},style:{transform:"translate3d(0,"+(1===e?-t.getDistanceY:0)+"px,0)"}},[t._v(t._s(e))])})),0),t._v(" "),i("span",{staticClass:"scrollBar",style:{height:t.scrollBarHeight+"px",transform:"translate3d(0,"+t.scrollBarDis+"px,0)"}})])])}),[],!1,null,"1b6a9342",null);e.default=n.exports}}]);