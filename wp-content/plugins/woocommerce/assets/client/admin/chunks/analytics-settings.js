"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[2953],{43177:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var r=o(12314),a=o(69307),s=o(65736),i=o(55609),n=o(94333),c=o(9818),l=o(86020),m=o(67221),d=o(14599),p=o(16235),u=o(37708),h=o(7862),g=o.n(h),_=o(92819);class w extends a.Component{constructor(e){super(e),(0,u.Z)(this,"renderInput",(()=>{const{handleChange:e,name:t,inputText:o,inputType:s,options:n,value:c,component:l}=this.props,{disabled:m}=this.state;switch(s){case"checkboxGroup":return n.map((e=>e.options.length>0&&(0,a.createElement)("div",{className:"woocommerce-setting__options-group",key:e.key,"aria-labelledby":t+"-label"},e.label&&(0,a.createElement)("span",{className:"woocommerce-setting__options-group-label"},e.label),this.renderCheckboxOptions(e.options))));case"checkbox":return this.renderCheckboxOptions(n);case"button":return(0,a.createElement)(i.Button,{isSecondary:!0,onClick:this.handleInputCallback,disabled:m},o);case"component":const s=l;return(0,a.createElement)(s,(0,r.Z)({value:c,onChange:e},this.props));case"select":return(0,a.createElement)(i.SelectControl,{options:n,value:c,onChange:o=>e({target:{name:t,type:"select",value:o}})});default:const d=(0,_.uniqueId)(t);return(0,a.createElement)("input",{id:d,type:"text",name:t,onChange:e,value:c,placeholder:o,disabled:m})}})),(0,u.Z)(this,"handleInputCallback",(()=>{const{createNotice:e,callback:t}=this.props;if("function"==typeof t)return new Promise(((o,r)=>{this.setState({disabled:!0}),t(o,r,e)})).then((()=>{this.setState({disabled:!1})})).catch((()=>{this.setState({disabled:!1})}))})),this.state={disabled:!1}}renderCheckboxOptions(e){const{handleChange:t,name:o,value:r}=this.props,{disabled:s}=this.state;return e.map((e=>(0,a.createElement)(i.CheckboxControl,{key:o+"-"+e.value,label:e.label,name:o,checked:r&&r.includes(e.value),onChange:r=>t({target:{checked:r,name:o,type:"checkbox",value:e.value}}),disabled:s})))}render(){const{helpText:e,label:t,name:o}=this.props;return(0,a.createElement)("div",{className:"woocommerce-setting"},(0,a.createElement)("div",{className:"woocommerce-setting__label",id:o+"-label"},t),(0,a.createElement)("div",{className:"woocommerce-setting__input"},this.renderInput(),e&&(0,a.createElement)("span",{className:"woocommerce-setting__help"},e)))}}w.propTypes={callback:g().func,handleChange:g().func.isRequired,helpText:g().oneOfType([g().string,g().array]),inputText:g().string,inputType:g().oneOf(["button","checkbox","checkboxGroup","text","component","select"]),label:g().string.isRequired,name:g().string.isRequired,options:g().arrayOf(g().shape({value:g().string,label:g().string,description:g().string,key:g().string,options:g().array})),value:g().oneOfType([g().string,g().array])};const v=(0,n.compose)((0,c.withDispatch)((e=>{const{createNotice:t}=e("core/notices");return{createNotice:t}})))(w);var I=o(76292),S=o.n(I);const b=(e,t,o)=>{const r={};if(o&&(r.skip_existing=!0),"all"!==t.label)if("custom"===t.label){const o=S()().diff(S()(t.date,e),"days",!0);r.days=Math.floor(o)}else r.days=parseInt(t.label,10);return r};var E=o(96483);const k=(0,n.compose)([(0,c.withSelect)((e=>{const{getFormSettings:t}=e(m.IMPORT_STORE_NAME),{period:o,skipPrevious:r}=t();return{selectedPeriod:o,skipChecked:r}})),(0,c.withDispatch)((e=>{const{updateImportation:t,setImportStarted:o}=e(m.IMPORT_STORE_NAME),{createNotice:r}=e("core/notices");return{createNotice:r,setImportStarted:o,updateImportation:t}}))])((function({clearStatusAndTotalsCache:e,createNotice:t,dateFormat:o,importDate:r,onImportStarted:n,selectedPeriod:c,stopImport:l,skipChecked:m,status:p,setImportStarted:u,updateImportation:h}){const g=(e,o,r=!1)=>{h(e,r).then((e=>{"success"===e.status?t("success",e.message):(t("error",o),u(!1),l())})).catch((e=>{e&&e.message&&(t("error",e.message),u(!1),l())}))},_=()=>{const e=(0,E.addQueryArgs)("/wc-analytics/reports/import",b(o,c,m)),t=(0,s.__)("There was a problem rebuilding your report data.","woocommerce");g(e,t,!0),n()},w=()=>{l();const e=(0,s.__)("There was a problem stopping your current import.","woocommerce");g("/wc-analytics/reports/import/cancel",e)},v=()=>{const e=(0,s.__)("There was a problem deleting your previous data.","woocommerce");g("/wc-analytics/reports/import/delete",e),(0,d.recordEvent)("analytics_import_delete_previous"),u(!1)},I=()=>{u(!1),e()};return(0,a.createElement)("div",{className:"woocommerce-settings__actions woocommerce-settings-historical-data__actions"},(()=>{const e="ready"!==p;return["initializing","customers","orders","finalizing"].includes(p)?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.Button,{className:"woocommerce-settings-historical-data__action-button",isPrimary:!0,onClick:w},(0,s.__)("Stop Import","woocommerce")),(0,a.createElement)("div",{className:"woocommerce-setting__help woocommerce-settings-historical-data__action-help"},(0,s.__)("Imported data will not be lost if the import is stopped.","woocommerce"),(0,a.createElement)("br",null),(0,s.__)("Navigating away from this page will not affect the import.","woocommerce"))):["ready","nothing"].includes(p)?r?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.Button,{isPrimary:!0,onClick:_,disabled:e},(0,s.__)("Start","woocommerce")),(0,a.createElement)(i.Button,{isSecondary:!0,onClick:v},(0,s.__)("Delete Previously Imported Data","woocommerce"))):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.Button,{isPrimary:!0,onClick:_,disabled:e},(0,s.__)("Start","woocommerce"))):("error"===p&&t("error",(0,s.__)("Something went wrong with the importation process.","woocommerce")),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.Button,{isSecondary:!0,onClick:I},(0,s.__)("Re-import Data","woocommerce")),(0,a.createElement)(i.Button,{isSecondary:!0,onClick:v},(0,s.__)("Delete Previously Imported Data","woocommerce"))))})())}));var y=o(81921);const C=(0,c.withDispatch)((e=>{const{setImportPeriod:t}=e(m.IMPORT_STORE_NAME);return{setImportPeriod:t}}))((function({dateFormat:e,disabled:t,setImportPeriod:o,value:r}){const n=t=>{t.date&&t.date.isValid?o(t.date.format(e),!0):o(t.text,!0)},c=t=>t.isValid()&&r.date.length===e.length?t.isAfter(new Date,"day")?y.dateValidationMessages.future:null:y.dateValidationMessages.invalid;return(0,a.createElement)("div",{className:"woocommerce-settings-historical-data__columns"},(0,a.createElement)("div",{className:"woocommerce-settings-historical-data__column"},(0,a.createElement)(i.SelectControl,{label:(0,s.__)("Import historical data","woocommerce"),value:r.label,disabled:t,onChange:e=>{o(e)},options:[{label:"All",value:"all"},{label:"Last 365 days",value:"365"},{label:"Last 90 days",value:"90"},{label:"Last 30 days",value:"30"},{label:"Last 7 days",value:"7"},{label:"Last 24 hours",value:"1"},{label:"Custom",value:"custom"}]})),"custom"===r.label&&(()=>{const o=S()(r.date,e);return(0,a.createElement)("div",{className:"woocommerce-settings-historical-data__column"},(0,a.createElement)("div",{className:"woocommerce-settings-historical-data__column-label"},(0,s.__)("Beginning on","woocommerce")),(0,a.createElement)(l.DatePicker,{date:o.isValid()?o.toDate():null,dateFormat:e,disabled:t,error:c(o),isInvalidDate:e=>S()(e).isAfter(new Date,"day"),onUpdate:n,text:r.date}))})())})),N=function({label:e,progress:t,total:o}){const r=(0,s.sprintf)((0,s.__)("Imported %(label)s","woocommerce"),{label:e}),i=(0,_.isNil)(o)?null:(0,s.sprintf)((0,s.__)("%(progress)s of %(total)s","woocommerce"),{progress:t||0,total:o});return(0,a.createElement)("div",{className:"woocommerce-settings-historical-data__progress"},(0,a.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},r),i&&(0,a.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},i),(0,a.createElement)("progress",{className:"woocommerce-settings-historical-data__progress-bar",max:o,value:t||0}))};var T=o(92694);const f=function({importDate:e,status:t}){const o=(0,T.applyFilters)("woocommerce_admin_import_status",{nothing:(0,s.__)("Nothing To Import","woocommerce"),ready:(0,s.__)("Ready To Import","woocommerce"),initializing:[(0,s.__)("Initializing","woocommerce"),(0,a.createElement)(i.Spinner,{key:"spinner"})],customers:[(0,s.__)("Importing Customers","woocommerce"),(0,a.createElement)(i.Spinner,{key:"spinner"})],orders:[(0,s.__)("Importing Orders","woocommerce"),(0,a.createElement)(i.Spinner,{key:"spinner"})],finalizing:[(0,s.__)("Finalizing","woocommerce"),(0,a.createElement)(i.Spinner,{key:"spinner"})],finished:-1===e?(0,s.__)("All historical data imported","woocommerce"):(0,s.sprintf)((0,s.__)("Historical data from %s onward imported","woocommerce"),S()(e).format("YYYY-MM-DD"))});return(0,a.createElement)("span",{className:"woocommerce-settings-historical-data__status"},(0,s.__)("Status:","woocommerce")+" ",o[t])},P=(0,c.withDispatch)((e=>{const{setSkipPrevious:t}=e(m.IMPORT_STORE_NAME);return{setSkipPrevious:t}}))((function({checked:e,disabled:t,setSkipPrevious:o}){return(0,a.createElement)(i.CheckboxControl,{className:"woocommerce-settings-historical-data__skip-checkbox",checked:e,disabled:t,label:(0,s.__)("Skip previously imported customers and orders","woocommerce"),onChange:e=>{o(e)}})}));class A extends a.Component{render(){const{customersProgress:e,customersTotal:t,dateFormat:o,importDate:r,inProgress:i,lastImportStartTimestamp:n,clearStatusAndTotalsCache:c,ordersProgress:m,ordersTotal:d,onImportStarted:p,period:u,stopImport:h,skipChecked:g,status:_}=this.props;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.SectionHeader,{title:(0,s.__)("Import historical data","woocommerce")}),(0,a.createElement)("div",{className:"woocommerce-settings__wrapper"},(0,a.createElement)("div",{className:"woocommerce-setting"},(0,a.createElement)("div",{className:"woocommerce-setting__input"},(0,a.createElement)("span",{className:"woocommerce-setting__help"},(0,s.__)("This tool populates historical analytics data by processing customers and orders created prior to activating WooCommerce Admin.","woocommerce")),"finished"!==_&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(C,{dateFormat:o,disabled:i,value:u}),(0,a.createElement)(P,{disabled:i,checked:g}),(0,a.createElement)(N,{label:(0,s.__)("Registered Customers","woocommerce"),progress:e,total:t}),(0,a.createElement)(N,{label:(0,s.__)("Orders and Refunds","woocommerce"),progress:m,total:d})),(0,a.createElement)(f,{importDate:r,status:_})))),(0,a.createElement)(k,{clearStatusAndTotalsCache:c,dateFormat:o,importDate:r,lastImportStartTimestamp:n,onImportStarted:p,stopImport:h,status:_}))}}const D=(0,c.withSelect)(((e,t)=>{const{getImportError:o,getImportStatus:r,getImportTotals:a}=e(m.IMPORT_STORE_NAME),{activeImport:s,cacheNeedsClearing:i,dateFormat:n,inProgress:c,onImportStarted:l,onImportFinished:d,period:p,startStatusCheckInterval:u,skipChecked:h}=t,g=b(n,p,h),{customers:w,orders:v,lastImportStartTimestamp:I}=a(g),{customers:S,imported_from:E,is_importing:k,orders:y}=r(I),{imported:C,total:N}=S||{},{imported:T,total:f}=y||{},P=Boolean(o(I)||o(g));Boolean(!I&&!c&&!0===k)&&l();const A=Boolean(c&&!i&&!1===k&&(N>0||f>0)&&C===N&&T===f);let D={customersTotal:w,isError:P,ordersTotal:v};s&&(D={cacheNeedsClearing:i,customersProgress:C,customersTotal:(0,_.isNil)(N)?w:N,inProgress:c,isError:P,ordersProgress:T,ordersTotal:(0,_.isNil)(f)?v:f});const O=(({cacheNeedsClearing:e,customersProgress:t,customersTotal:o,isError:r,inProgress:a,ordersProgress:s,ordersTotal:i})=>r?"error":a?(0,_.isNil)(t)||(0,_.isNil)(s)||(0,_.isNil)(o)||(0,_.isNil)(i)||e?"initializing":t<o?"customers":s<i?"orders":"finalizing":o>0||i>0?t===o&&s===i?"finished":"ready":"nothing")(D);return"initializing"===O&&u(),A&&d(),{...D,importDate:E,status:O}}))(A);class O extends a.Component{constructor(){super(...arguments),this.dateFormat=(0,s.__)("MM/DD/YYYY","woocommerce"),this.intervalId=-1,this.lastImportStopTimestamp=0,this.cacheNeedsClearing=!0,this.onImportFinished=this.onImportFinished.bind(this),this.onImportStarted=this.onImportStarted.bind(this),this.clearStatusAndTotalsCache=this.clearStatusAndTotalsCache.bind(this),this.stopImport=this.stopImport.bind(this),this.startStatusCheckInterval=this.startStatusCheckInterval.bind(this),this.cancelStatusCheckInterval=this.cancelStatusCheckInterval.bind(this)}startStatusCheckInterval(){this.intervalId<0&&(this.cacheNeedsClearing=!0,this.intervalId=setInterval((()=>{this.clearCache("getImportStatus")}),3*m.SECOND))}cancelStatusCheckInterval(){clearInterval(this.intervalId),this.intervalId=-1}clearCache(e,t){const{invalidateResolution:o,lastImportStartTimestamp:r}=this.props;o(e,["getImportStatus"===e?r:t]).then((()=>{this.cacheNeedsClearing=!1}))}stopImport(){this.cancelStatusCheckInterval(),this.lastImportStopTimestamp=Date.now()}onImportFinished(){const{debouncedSpeak:e}=this.props;this.cacheNeedsClearing||(e("Import complete"),this.stopImport())}onImportStarted(){const{notes:e,setImportStarted:t,updateNote:o}=this.props,r=e.find((e=>"wc-admin-historical-data"===e.name));r&&o(r.id,{status:"actioned"}),t(!0)}clearStatusAndTotalsCache(){const{selectedPeriod:e,skipChecked:t}=this.props,o=b(this.dateFormat,e,t);this.clearCache("getImportTotals",o),this.clearCache("getImportStatus")}isImportationInProgress(){const{lastImportStartTimestamp:e}=this.props;return void 0!==e&&void 0===this.lastImportStopTimestamp||e>this.lastImportStopTimestamp}render(){const{activeImport:e,createNotice:t,lastImportStartTimestamp:o,selectedPeriod:r,skipChecked:s}=this.props;return(0,a.createElement)(D,{activeImport:e,cacheNeedsClearing:this.cacheNeedsClearing,createNotice:t,dateFormat:this.dateFormat,inProgress:this.isImportationInProgress(),onImportFinished:this.onImportFinished,onImportStarted:this.onImportStarted,lastImportStartTimestamp:o,clearStatusAndTotalsCache:this.clearStatusAndTotalsCache,period:r,skipChecked:s,startStatusCheckInterval:this.startStatusCheckInterval,stopImport:this.stopImport})}}const R=(0,n.compose)([(0,c.withSelect)((e=>{const{getNotes:t}=e(m.NOTES_STORE_NAME),{getImportStarted:o,getFormSettings:r}=e(m.IMPORT_STORE_NAME),a=t({page:1,per_page:m.QUERY_DEFAULTS.pageSize,type:"update",status:"unactioned"}),{activeImport:s,lastImportStartTimestamp:i}=o(),{period:n,skipPrevious:c}=r();return{activeImport:s,lastImportStartTimestamp:i,notes:a,selectedPeriod:n,skipChecked:c}})),(0,c.withDispatch)((e=>{const{updateNote:t}=e(m.NOTES_STORE_NAME),{invalidateResolution:o,setImportStarted:r}=e(m.IMPORT_STORE_NAME);return{invalidateResolution:o,setImportStarted:r,updateNote:t}})),i.withSpokenMessages])(O),F=(0,n.compose)((0,c.withDispatch)((e=>{const{createNotice:t}=e("core/notices");return{createNotice:t}})))((({createNotice:e,query:t})=>{const{settingsError:o,isRequesting:n,isDirty:c,persistSettings:u,updateAndPersistSettings:h,updateSettings:g,wcAdminSettings:_}=(0,m.useSettings)("wc_admin",["wcAdminSettings"]),w=(0,a.useRef)(!1);(0,a.useEffect)((()=>{function e(e){if(c)return e.returnValue=(0,s.__)("You have unsaved changes. If you proceed, they will be lost.","woocommerce"),e.returnValue}return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)}),[c]),(0,a.useEffect)((()=>{n?w.current=!0:!n&&w.current&&(o?e("error",(0,s.__)("There was an error saving your settings. Please try again.","woocommerce")):e("success",(0,s.__)("Your settings have been successfully saved.","woocommerce")),w.current=!1)}),[n,o,e]);const I=e=>{const{checked:t,name:o,type:r,value:a}=e.target,s={..._};s[o]="checkbox"===r?t?[...s[o],a]:s[o].filter((e=>e!==a)):a,g("wcAdminSettings",s)};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.SectionHeader,{title:(0,s.__)("Analytics settings","woocommerce")}),(0,a.createElement)("div",{className:"woocommerce-settings__wrapper"},Object.keys(p.vc).map((e=>(0,a.createElement)(v,(0,r.Z)({handleChange:I,value:_[e],key:e,name:e},p.vc[e])))),(0,a.createElement)("div",{className:"woocommerce-settings__actions"},(0,a.createElement)(i.Button,{isSecondary:!0,onClick:()=>{if(window.confirm((0,s.__)("Are you sure you want to reset all settings to default values?","woocommerce"))){const e=Object.keys(p.vc).reduce(((e,t)=>(e[t]=p.vc[t].defaultValue,e)),{});h("wcAdminSettings",e),(0,d.recordEvent)("analytics_settings_reset_defaults")}}},(0,s.__)("Reset defaults","woocommerce")),(0,a.createElement)(i.Button,{isPrimary:!0,isBusy:n,onClick:()=>{u(),(0,d.recordEvent)("analytics_settings_save",_),t.period=void 0,t.compare=void 0,t.before=void 0,t.after=void 0,t.interval=void 0,t.type=void 0,window.wpNavMenuUrlUpdate(t)}},(0,s.__)("Save settings","woocommerce")))),"true"===t.import?(0,a.createElement)(l.ScrollTo,{offset:"-56"},(0,a.createElement)(R,{createNotice:e})):(0,a.createElement)(R,{createNotice:e}))}))}}]);