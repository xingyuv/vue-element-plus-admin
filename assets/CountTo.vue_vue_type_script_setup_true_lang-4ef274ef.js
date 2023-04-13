import{d as a,ah as t,q as l,aC as e,E as r,x as n,X as s,a as i,o,c as u,t as c,n as p,j as m,cq as d}from"./index-232518ac.js";const V=a({__name:"CountTo",props:{startVal:t.number.def(0),endVal:t.number.def(2021),duration:t.number.def(3e3),autoplay:t.bool.def(!0),decimals:t.number.validate((a=>a>=0)).def(0),decimal:t.string.def("."),separator:t.string.def(","),prefix:t.string.def(""),suffix:t.string.def(""),useEasing:t.bool.def(!0),easingFn:{type:Function,default:(a,t,l,e)=>l*(1-Math.pow(2,-10*a/e))*1024/1023+t}},emits:["mounted","callback"],setup(a,{expose:t,emit:V}){const f=a,{getPrefixCls:F}=m(),g=F("count-to"),S=a=>{const{decimals:t,decimal:l,separator:e,suffix:r,prefix:n}=f;a=Number(a).toFixed(t);const s=(a+="").split(".");let i=s[0];const o=s.length>1?l+s[1]:"",u=/(\d+)(\d{3})/;if(e&&!d(e))for(;u.test(i);)i=i.replace(u,"$1"+e+"$2");return n+i+o+r},x=l({localStartVal:f.startVal,displayValue:S(f.startVal),printVal:null,paused:!1,localDuration:f.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),A=e(x,"displayValue");r((()=>{f.autoplay&&D(),V("mounted")}));const b=n((()=>f.startVal>f.endVal));s([()=>f.startVal,()=>f.endVal],(()=>{f.autoplay&&D()}));const D=()=>{const{startVal:a,duration:t}=f;x.localStartVal=a,x.startTime=null,x.localDuration=t,x.paused=!1,x.rAF=requestAnimationFrame(q)},y=()=>{cancelAnimationFrame(x.rAF)},T=()=>{x.startTime=null,x.localDuration=+x.remaining,x.localStartVal=+x.printVal,requestAnimationFrame(q)},q=a=>{const{useEasing:t,easingFn:l,endVal:e}=f;x.startTime||(x.startTime=a),x.timestamp=a;const r=a-x.startTime;x.remaining=x.localDuration-r,t?i(b)?x.printVal=x.localStartVal-l(r,0,x.localStartVal-e,x.localDuration):x.printVal=l(r,x.localStartVal,e-x.localStartVal,x.localDuration):i(b)?x.printVal=x.localStartVal-(x.localStartVal-e)*(r/x.localDuration):x.printVal=x.localStartVal+(e-x.localStartVal)*(r/x.localDuration),i(b)?x.printVal=x.printVal<e?e:x.printVal:x.printVal=x.printVal>e?e:x.printVal,x.displayValue=S(x.printVal),r<x.localDuration?x.rAF=requestAnimationFrame(q):V("callback")};return t({pauseResume:()=>{x.paused?(T(),x.paused=!1):(y(),x.paused=!0)},reset:()=>{x.startTime=null,cancelAnimationFrame(x.rAF),x.displayValue=S(f.startVal)},start:D,pause:y}),(a,t)=>(o(),u("span",{class:p(i(g))},c(i(A)),3))}});export{V as _};
