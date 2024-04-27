import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{$ as q,_ as y}from"./index-DnkvmRqu.js";import{$ as B,b as A,a as _}from"./index-Bw8lNzcd.js";import{$ as K}from"./index-CoblVKo6.js";import{$ as L}from"./index-2vmuQIce.js";import{$ as T}from"./index-DruApvgH.js";import{$ as j}from"./index-CD4l4TuI.js";import{c as w}from"./utils-C-5SdYIA.js";import{C as H}from"./check-CEVRnpVN.js";import"./index-9r8iugjR.js";import"./createLucideIcon-BrDs6hm-.js";const N="Checkbox",[X,ie]=B(N),[z,F]=X(N),G=t.forwardRef((e,n)=>{const{__scopeCheckbox:o,name:d,checked:b,defaultChecked:a,required:p,disabled:i,value:f="on",onCheckedChange:x,...g}=e,[c,k]=t.useState(null),M=q(n,r=>k(r)),C=t.useRef(!1),E=c?!!c.closest("form"):!0,[l=!1,v]=A({prop:b,defaultProp:a,onChange:x}),O=t.useRef(l);return t.useEffect(()=>{const r=c==null?void 0:c.form;if(r){const u=()=>v(O.current);return r.addEventListener("reset",u),()=>r.removeEventListener("reset",u)}},[c,v]),t.createElement(z,{scope:o,state:l,disabled:i},t.createElement(j.button,y({type:"button",role:"checkbox","aria-checked":s(l)?"mixed":l,"aria-required":p,"data-state":D(l),"data-disabled":i?"":void 0,disabled:i,value:f},g,{ref:M,onKeyDown:_(e.onKeyDown,r=>{r.key==="Enter"&&r.preventDefault()}),onClick:_(e.onClick,r=>{v(u=>s(u)?!0:!u),E&&(C.current=r.isPropagationStopped(),C.current||r.stopPropagation())})})),E&&t.createElement(U,{control:c,bubbles:!C.current,name:d,value:f,checked:l,required:p,disabled:i,style:{transform:"translateX(-100%)"}}))}),J="CheckboxIndicator",Q=t.forwardRef((e,n)=>{const{__scopeCheckbox:o,forceMount:d,...b}=e,a=F(J,o);return t.createElement(T,{present:d||s(a.state)||a.state===!0},t.createElement(j.span,y({"data-state":D(a.state),"data-disabled":a.disabled?"":void 0},b,{ref:n,style:{pointerEvents:"none",...e.style}})))}),U=e=>{const{control:n,checked:o,bubbles:d=!0,...b}=e,a=t.useRef(null),p=K(o),i=L(n);return t.useEffect(()=>{const f=a.current,x=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(x,"checked").set;if(p!==o&&c){const k=new Event("click",{bubbles:d});f.indeterminate=s(o),c.call(f,s(o)?!1:o),f.dispatchEvent(k)}},[p,o,d]),t.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:s(o)?!1:o},b,{tabIndex:-1,ref:a,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function s(e){return e==="indeterminate"}function D(e){return s(e)?"indeterminate":e?"checked":"unchecked"}const S=G,V=Q,h=t.forwardRef(({className:e,...n},o)=>m.jsx(S,{ref:o,className:w("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...n,children:m.jsx(V,{className:w("flex items-center justify-center text-current"),children:m.jsx(H,{className:"h-4 w-4"})})}));h.displayName=S.displayName;h.__docgenInfo={description:"",methods:[]};const fe={title:"Example/Checkbox",component:h,parameters:{layout:"centered"},argTypes:{checked:{control:{type:"boolean"},description:"Indicates if the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Indicates if the checkbox is disabled"}},args:{disabled:!1}},$={render:e=>m.jsx(h,{...e})};var P,R,I;$.parameters={...$.parameters,docs:{...(P=$.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} />
}`,...(I=(R=$.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const le=["Default"];export{$ as Default,le as __namedExportsOrder,fe as default};