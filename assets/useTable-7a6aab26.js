import{q as e,x as a,X as t,r as n,a as s,bG as o,aq as i,k as l,Y as r}from"./index-232518ac.js";import{E as c}from"./el-message-box-84553b14.js";import"./el-button-50f44e45.js";import"./el-input-d4093d1a.js";import"./el-overlay-8e623d54.js";const{t:u}=l(),g=l=>{const g=e({pageSize:10,currentPage:1,total:10,tableList:[],params:{...(null==l?void 0:l.defaultParams)||{}},loading:!0,currentRow:null}),p=a((()=>({...g.params,pageSize:g.pageSize,pageIndex:g.currentPage})));t((()=>g.currentPage),(()=>{w.getList()})),t((()=>g.pageSize),(()=>{1===g.currentPage||(g.currentPage=1),w.getList()}));const m=n(),d=n(),v=async()=>{await r();const e=s(m);return e},P=async e=>{if(await((null==l?void 0:l.delListApi)&&(null==l?void 0:l.delListApi(e)))){i.success(u("common.delSuccess"));const a=(g.total%g.pageSize===e.length||1===g.pageSize)&&g.currentPage>1?g.currentPage-1:g.currentPage;g.currentPage=a,w.getList()}},w={getList:async()=>{var e;g.loading=!0;const a=await(null==l?void 0:l.getListApi(s(p)).finally((()=>{g.loading=!1})));a&&(g.tableList=o(a.data||{},null==l?void 0:l.response.list),g.total=o(a.data||{},null==(e=null==l?void 0:l.response)?void 0:e.total)||0)},setProps:async(e={})=>{const a=await v();null==a||a.setProps(e)},setColumn:async e=>{const a=await v();null==a||a.setColumn(e)},getSelections:async()=>{const e=await v();return(null==e?void 0:e.selections)||[]},setSearchParams:e=>{g.currentPage=1,g.params=Object.assign(g.params,{pageSize:g.pageSize,pageIndex:g.currentPage,...e}),w.getList()},delList:async(e,a,t=!0)=>{const n=await v();if(a){if(!(null==n?void 0:n.selections.length))return void i.warning(u("common.delNoData"))}else if(!g.currentRow)return void i.warning(u("common.delNoData"));t?c.confirm(u("common.delMessage"),u("common.delWarning"),{confirmButtonText:u("common.delOk"),cancelButtonText:u("common.delCancel"),type:"warning"}).then((async()=>{await P(e)})):await P(e)}};return(null==l?void 0:l.props)&&w.setProps(l.props),{register:(e,a)=>{m.value=e,d.value=s(a)},elTableRef:d,tableObject:g,methods:w}};export{g as u};
