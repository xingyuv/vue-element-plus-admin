import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-a6dc0d19.js";import{J as a,K as t,L as s,M as n,N as o,d as i,O as l,P as u,Q as r,R as c,S as d,U as m,r as f,V as p,W as v,x as g,X as b,Y as k,E as w,o as h,h as _,g as x,w as y,e as I,n as C,a as z,Z as O,_ as j,G as T,$ as N,a0 as L,c as A,F as V,a1 as E,a2 as R,a3 as X,a4 as Y,a5 as B,a6 as D,a7 as M,C as W,a8 as $,a9 as F,aa as S,i as P,ab as Z,ac as G,ad as H,ae as J,af as K,ag as Q,ah as U,ai as q,aj as ee,ak as ae,B as te,t as se,k as ne}from"./index-232518ac.js";import{d as oe}from"./debounce-2f51f5f8.js";import{E as ie}from"./el-button-50f44e45.js";import"./el-card-f061d5a9.js";import"./el-popper-0215728f.js";import"./constants-ced2da04.js";import"./use-form-item-0aae54cc.js";import"./use-form-common-props-1163223d.js";function le(e,t,s){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(s)&&(n="leading"in s?!!s.leading:n,o="trailing"in s?!!s.trailing:o),oe(e,t,{leading:n,maxWait:t,trailing:o})}const ue=t({urlList:{type:s(Array),default:()=>n([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),re={close:()=>!0,switch:e=>o(e)},ce=["src"],de=i({name:"ElImageViewer"});const me=Q(G(i({...de,props:ue,emits:re,setup(e,{expose:a,emit:t}){const s=e,n={CONTAIN:{name:"contain",icon:l(u)},ORIGINAL:{name:"original",icon:l(r)}},{t:i}=c(),G=d("image-viewer"),{nextZIndex:Q}=m(),U=f(),q=f([]),ee=p(),ae=f(!0),te=f(s.initialIndex),se=v(n.CONTAIN),ne=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),oe=g((()=>{const{urlList:e}=s;return e.length<=1})),ie=g((()=>0===te.value)),ue=g((()=>te.value===s.urlList.length-1)),re=g((()=>s.urlList[te.value])),de=g((()=>{const{scale:e,deg:a,offsetX:t,offsetY:s,enableTransition:o}=ne.value;let i=t/e,l=s/e;switch(a%360){case 90:case-270:[i,l]=[l,-i];break;case 180:case-180:[i,l]=[-i,-l];break;case 270:case-90:[i,l]=[-l,i]}const u={transform:`scale(${e}) rotate(${a}deg) translate(${i}px, ${l}px)`,transition:o?"transform .3s":""};return se.value.name===n.CONTAIN.name&&(u.maxWidth=u.maxHeight="100%"),u})),me=g((()=>o(s.zIndex)?s.zIndex:Q()));function fe(){ee.stop(),t("close")}function pe(){ae.value=!1}function ve(e){ae.value=!1,e.target.alt=i("el.image.error")}function ge(e){if(ae.value||0!==e.button||!U.value)return;ne.value.enableTransition=!1;const{offsetX:a,offsetY:t}=ne.value,s=e.pageX,n=e.pageY,o=le((e=>{ne.value={...ne.value,offsetX:a+e.pageX-s,offsetY:t+e.pageY-n}})),i=H(document,"mousemove",o);H(document,"mouseup",(()=>{i()})),e.preventDefault()}function be(){ne.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ke(){if(ae.value)return;const e=K(n),a=Object.values(n),t=se.value.name,s=(a.findIndex((e=>e.name===t))+1)%e.length;se.value=n[e[s]],be()}function we(e){const a=s.urlList.length;te.value=(e+a)%a}function he(){ie.value&&!s.infinite||we(te.value-1)}function _e(){ue.value&&!s.infinite||we(te.value+1)}function xe(e,a={}){if(ae.value)return;const{zoomRate:t,rotateDeg:n,enableTransition:o}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ne.value.scale>.2&&(ne.value.scale=Number.parseFloat((ne.value.scale/t).toFixed(3)));break;case"zoomIn":ne.value.scale<7&&(ne.value.scale=Number.parseFloat((ne.value.scale*t).toFixed(3)));break;case"clockwise":ne.value.deg+=n;break;case"anticlockwise":ne.value.deg-=n}ne.value.enableTransition=o}return b(re,(()=>{k((()=>{const e=q.value[0];(null==e?void 0:e.complete)||(ae.value=!0)}))})),b(te,(e=>{be(),t("switch",e)})),w((()=>{var e,a;!function(){const e=le((e=>{switch(e.code){case J.esc:s.closeOnPressEscape&&fe();break;case J.space:ke();break;case J.left:he();break;case J.up:xe("zoomIn");break;case J.right:_e();break;case J.down:xe("zoomOut")}})),a=le((e=>{xe((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})}));ee.run((()=>{H(document,"keydown",e),H(document,"wheel",a)}))}(),null==(a=null==(e=U.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:we}),(e,a)=>(h(),_(Z,{to:"body",disabled:!e.teleported},[x(P,{name:"viewer-fade",appear:""},{default:y((()=>[I("div",{ref_key:"wrapper",ref:U,tabindex:-1,class:C(z(G).e("wrapper")),style:O({zIndex:z(me)})},[I("div",{class:C(z(G).e("mask")),onClick:a[0]||(a[0]=j((a=>e.hideOnClickModal&&fe()),["self"]))},null,2),T(" CLOSE "),I("span",{class:C([z(G).e("btn"),z(G).e("close")]),onClick:fe},[x(z(N),null,{default:y((()=>[x(z(L))])),_:1})],2),T(" ARROW "),z(oe)?T("v-if",!0):(h(),A(V,{key:0},[I("span",{class:C([z(G).e("btn"),z(G).e("prev"),z(G).is("disabled",!e.infinite&&z(ie))]),onClick:he},[x(z(N),null,{default:y((()=>[x(z(E))])),_:1})],2),I("span",{class:C([z(G).e("btn"),z(G).e("next"),z(G).is("disabled",!e.infinite&&z(ue))]),onClick:_e},[x(z(N),null,{default:y((()=>[x(z(R))])),_:1})],2)],64)),T(" ACTIONS "),I("div",{class:C([z(G).e("btn"),z(G).e("actions")])},[I("div",{class:C(z(G).e("actions__inner"))},[x(z(N),{onClick:a[1]||(a[1]=e=>xe("zoomOut"))},{default:y((()=>[x(z(X))])),_:1}),x(z(N),{onClick:a[2]||(a[2]=e=>xe("zoomIn"))},{default:y((()=>[x(z(Y))])),_:1}),I("i",{class:C(z(G).e("actions__divider"))},null,2),x(z(N),{onClick:ke},{default:y((()=>[(h(),_(B(z(se).icon)))])),_:1}),I("i",{class:C(z(G).e("actions__divider"))},null,2),x(z(N),{onClick:a[3]||(a[3]=e=>xe("anticlockwise"))},{default:y((()=>[x(z(D))])),_:1}),x(z(N),{onClick:a[4]||(a[4]=e=>xe("clockwise"))},{default:y((()=>[x(z(M))])),_:1})],2)],2),T(" CANVAS "),I("div",{class:C(z(G).e("canvas"))},[(h(!0),A(V,null,W(e.urlList,((e,a)=>$((h(),A("img",{ref_for:!0,ref:e=>q.value[a]=e,key:e,src:e,style:O(z(de)),class:C(z(G).e("img")),onLoad:pe,onError:ve,onMousedown:ge},null,46,ce)),[[F,a===te.value]]))),128))],2),S(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]])),fe=i({__name:"ImageViewer",props:{urlList:{type:Array,default:()=>[]},zIndex:U.number.def(200),initialIndex:U.number.def(0),infinite:U.bool.def(!0),hideOnClickModal:U.bool.def(!1),appendToBody:U.bool.def(!1),show:U.bool.def(!1)},setup(e){const a=e,t=g((()=>{const e={...a};return delete e.show,e})),s=f(a.show),n=()=>{s.value=!1};return(e,a)=>s.value?(h(),_(z(me),q({key:0},z(t),{onClose:n}),null,16)):T("",!0)}});let pe=null;const ve=i({__name:"ImageViewer",setup(a){const{t:t}=ne(),s=()=>{!function(e){if(!ee)return;const{urlList:a,initialIndex:t=0,infinite:s=!0,hideOnClickModal:n=!1,appendToBody:o=!1,zIndex:i=2e3,show:l=!0}=e,u={},r=document.createElement("div");u.urlList=a,u.initialIndex=t,u.infinite=s,u.hideOnClickModal=n,u.appendToBody=o,u.zIndex=i,u.show=l,document.body.appendChild(r),pe=x(fe,u),ae(pe,r)}({urlList:["https://img1.baidu.com/it/u=657828739,1486746195&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=3114228356,677481409&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=508846955,3814747122&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=3536647690,3616605490&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=4087287201,1148061266&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=3429163260,2974496379&fm=26&fmt=auto&gp=0.jpg"]})};return(a,n)=>(h(),_(z(e),{title:z(t)("imageViewerDemo.imageViewer"),message:z(t)("imageViewerDemo.imageViewerDes")},{default:y((()=>[x(z(ie),{type:"primary",onClick:s},{default:y((()=>[te(se(z(t)("imageViewerDemo.open")),1)])),_:1})])),_:1},8,["title","message"]))}});export{ve as default};
