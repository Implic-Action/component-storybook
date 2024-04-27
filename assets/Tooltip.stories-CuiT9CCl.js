import{j as T}from"./jsx-runtime-Cw0GR0a5.js";import{r as o}from"./index-CTjT7uj6.js";import{_ as y,$ as G,b as K}from"./index-DnkvmRqu.js";import{$ as U,b as Y,a as g}from"./index-Bw8lNzcd.js";import{$ as X,a as J}from"./index-blrNqc9R.js";import{$ as F,a as Q,b as W,c as Z,d as ee}from"./index-DaYy6uT9.js";import{$ as te}from"./index-DruApvgH.js";import{$ as oe}from"./index-CD4l4TuI.js";import{c as ne}from"./utils-C-5SdYIA.js";import{B as re}from"./button-CGqabpwf.js";import"./index-9r8iugjR.js";import"./index-2vmuQIce.js";import"./index-Bb4qSo10.js";const[D,Ge]=U("Tooltip",[F]),k=F(),ae="TooltipProvider",ce=700,R="tooltip.open",[se,L]=D(ae),ie=e=>{const{__scopeTooltip:n,delayDuration:t=ce,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:l}=e,[s,u]=o.useState(!0),c=o.useRef(!1),d=o.useRef(0);return o.useEffect(()=>{const i=d.current;return()=>window.clearTimeout(i)},[]),o.createElement(se,{scope:n,isOpenDelayed:s,delayDuration:t,onOpen:o.useCallback(()=>{window.clearTimeout(d.current),u(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:o.useCallback(i=>{c.current=i},[]),disableHoverableContent:a},l)},I="Tooltip",[le,O]=D(I),ue=e=>{const{__scopeTooltip:n,children:t,open:r,defaultOpen:a=!1,onOpenChange:l,disableHoverableContent:s,delayDuration:u}=e,c=L(I,e.__scopeTooltip),d=k(n),[i,p]=o.useState(null),m=J(),f=o.useRef(0),$=s??c.disableHoverableContent,b=u??c.delayDuration,v=o.useRef(!1),[h=!1,x]=Y({prop:r,defaultProp:a,onChange:M=>{M?(c.onOpen(),document.dispatchEvent(new CustomEvent(R))):c.onClose(),l==null||l(M)}}),C=o.useMemo(()=>h?v.current?"delayed-open":"instant-open":"closed",[h]),E=o.useCallback(()=>{window.clearTimeout(f.current),v.current=!1,x(!0)},[x]),w=o.useCallback(()=>{window.clearTimeout(f.current),x(!1)},[x]),H=o.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{v.current=!0,x(!0)},b)},[b,x]);return o.useEffect(()=>()=>window.clearTimeout(f.current),[]),o.createElement(Z,d,o.createElement(le,{scope:n,contentId:m,open:h,stateAttribute:C,trigger:i,onTriggerChange:p,onTriggerEnter:o.useCallback(()=>{c.isOpenDelayed?H():E()},[c.isOpenDelayed,H,E]),onTriggerLeave:o.useCallback(()=>{$?w():window.clearTimeout(f.current)},[w,$]),onOpen:E,onClose:w,disableHoverableContent:$},t))},j="TooltipTrigger",de=o.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,a=O(j,t),l=L(j,t),s=k(t),u=o.useRef(null),c=G(n,u,a.onTriggerChange),d=o.useRef(!1),i=o.useRef(!1),p=o.useCallback(()=>d.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),o.createElement(ee,y({asChild:!0},s),o.createElement(oe.button,y({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:c,onPointerMove:g(e.onPointerMove,m=>{m.pointerType!=="touch"&&!i.current&&!l.isPointerInTransitRef.current&&(a.onTriggerEnter(),i.current=!0)}),onPointerLeave:g(e.onPointerLeave,()=>{a.onTriggerLeave(),i.current=!1}),onPointerDown:g(e.onPointerDown,()=>{d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:g(e.onFocus,()=>{d.current||a.onOpen()}),onBlur:g(e.onBlur,a.onClose),onClick:g(e.onClick,a.onClose)})))}),pe="TooltipPortal",[Fe,fe]=D(pe,{forceMount:void 0}),P="TooltipContent",$e=o.forwardRef((e,n)=>{const t=fe(P,e.__scopeTooltip),{forceMount:r=t.forceMount,side:a="top",...l}=e,s=O(P,e.__scopeTooltip);return o.createElement(te,{present:r||s.open},s.disableHoverableContent?o.createElement(V,y({side:a},l,{ref:n})):o.createElement(me,y({side:a},l,{ref:n})))}),me=o.forwardRef((e,n)=>{const t=O(P,e.__scopeTooltip),r=L(P,e.__scopeTooltip),a=o.useRef(null),l=G(n,a),[s,u]=o.useState(null),{trigger:c,onClose:d}=t,i=a.current,{onPointerInTransitChange:p}=r,m=o.useCallback(()=>{u(null),p(!1)},[p]),f=o.useCallback(($,b)=>{const v=$.currentTarget,h={x:$.clientX,y:$.clientY},x=be(h,v.getBoundingClientRect()),C=xe(h,x),E=he(b.getBoundingClientRect()),w=ge([...C,...E]);u(w),p(!0)},[p]);return o.useEffect(()=>()=>m(),[m]),o.useEffect(()=>{if(c&&i){const $=v=>f(v,i),b=v=>f(v,c);return c.addEventListener("pointerleave",$),i.addEventListener("pointerleave",b),()=>{c.removeEventListener("pointerleave",$),i.removeEventListener("pointerleave",b)}}},[c,i,f,m]),o.useEffect(()=>{if(s){const $=b=>{const v=b.target,h={x:b.clientX,y:b.clientY},x=(c==null?void 0:c.contains(v))||(i==null?void 0:i.contains(v)),C=!Te(h,s);x?m():C&&(m(),d())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[c,i,s,d,m]),o.createElement(V,y({},e,{ref:l}))}),[ve,Ve]=D(I,{isInside:!1}),V=o.forwardRef((e,n)=>{const{__scopeTooltip:t,children:r,"aria-label":a,onEscapeKeyDown:l,onPointerDownOutside:s,...u}=e,c=O(P,t),d=k(t),{onClose:i}=c;return o.useEffect(()=>(document.addEventListener(R,i),()=>document.removeEventListener(R,i)),[i]),o.useEffect(()=>{if(c.trigger){const p=m=>{const f=m.target;f!=null&&f.contains(c.trigger)&&i()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,i]),o.createElement(X,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:i},o.createElement(Q,y({"data-state":c.stateAttribute},d,u,{ref:n,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),o.createElement(K,null,r),o.createElement(ve,{scope:t,isInside:!0},o.createElement(W,{id:c.contentId,role:"tooltip"},a||r))))});function be(e,n){const t=Math.abs(n.top-e.y),r=Math.abs(n.bottom-e.y),a=Math.abs(n.right-e.x),l=Math.abs(n.left-e.x);switch(Math.min(t,r,a,l)){case l:return"left";case a:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function xe(e,n,t=5){const r=[];switch(n){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function he(e){const{top:n,right:t,bottom:r,left:a}=e;return[{x:a,y:n},{x:t,y:n},{x:t,y:r},{x:a,y:r}]}function Te(e,n){const{x:t,y:r}=e;let a=!1;for(let l=0,s=n.length-1;l<n.length;s=l++){const u=n[l].x,c=n[l].y,d=n[s].x,i=n[s].y;c>r!=i>r&&t<(d-u)*(r-c)/(i-c)+u&&(a=!a)}return a}function ge(e){const n=e.slice();return n.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),ye(n)}function ye(e){if(e.length<=1)return e.slice();const n=[];for(let r=0;r<e.length;r++){const a=e[r];for(;n.length>=2;){const l=n[n.length-1],s=n[n.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))n.pop();else break}n.push(a)}n.pop();const t=[];for(let r=e.length-1;r>=0;r--){const a=e[r];for(;t.length>=2;){const l=t[t.length-1],s=t[t.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))t.pop();else break}t.push(a)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}const Ce=ie,Ee=ue,we=de,q=$e,Pe=Ce,z=Ee,_e=we,A=o.forwardRef(({className:e,sideOffset:n=4,...t},r)=>T.jsx(q,{ref:r,sideOffset:n,className:ne("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));A.displayName=q.displayName;A.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const qe={title:"Example/Tooltip",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:{type:"text"}}},args:{children:"Tooltip content"}},_={render:e=>T.jsx(Pe,{children:T.jsxs(z,{children:[T.jsx(_e,{asChild:!0,children:T.jsx(re,{variant:"outline",children:"Hover"})}),T.jsx(A,{children:T.jsx("p",{children:e.children})})]})})};var N,S,B;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{args.children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(B=(S=_.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const ze=["Default"];export{_ as Default,ze as __namedExportsOrder,qe as default};