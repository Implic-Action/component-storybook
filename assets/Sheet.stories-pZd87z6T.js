import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r}from"./index-CTjT7uj6.js";import{$ as m,a as u,d as N,e as f,f as h,g as S,b as v,c as w}from"./index-Cm9CXpCI.js";import{c as _}from"./index-Bb4qSo10.js";import{c as i}from"./utils-C-5SdYIA.js";import{c as k}from"./createLucideIcon-BrDs6hm-.js";import{B as C}from"./button-CGqabpwf.js";import"./index-DnkvmRqu.js";import"./index-Bw8lNzcd.js";import"./index-blrNqc9R.js";import"./index-CD4l4TuI.js";import"./index-9r8iugjR.js";import"./index-DrA2xI2x.js";import"./index-DruApvgH.js";/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=k("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),g=S,R=v,b=w,n=r.forwardRef(({className:t,...s},a)=>e.jsx(m,{className:i("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s,ref:a}));n.displayName=m.displayName;const T=_("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),c=r.forwardRef(({side:t="right",className:s,children:a,...j},y)=>e.jsxs(b,{children:[e.jsx(n,{}),e.jsxs(u,{ref:y,className:i(T({side:t}),s),...j,children:[a,e.jsxs(N,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(I,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));c.displayName=u.displayName;const x=r.forwardRef(({className:t,...s},a)=>e.jsx(f,{ref:a,className:i("text-lg font-semibold text-foreground",t),...s}));x.displayName=f.displayName;const $=r.forwardRef(({className:t,...s},a)=>e.jsx(h,{ref:a,className:i("text-sm text-muted-foreground",t),...s}));$.displayName=h.displayName;n.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}}};x.__docgenInfo={description:"",methods:[]};$.__docgenInfo={description:"",methods:[]};const H={title:"Example/Sheet",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{control:{type:"select"},options:["top","bottom","left","right"]}},args:{side:"left"}},o={render:t=>e.jsxs(g,{children:[e.jsx(R,{asChild:!0,children:e.jsx(C,{children:"Open sheet"})}),e.jsx(b,{children:e.jsxs(c,{...t,children:[e.jsx("h1",{children:"Sheet content"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit, erat nec vehicula ultricies, elit purus ultricies libero, nec ultricies magna justo nec nunc. Nullam suscipit, erat nec vehicula ultricies, elit purus ultricies libero, nec ultricies magna justo nec nunc."})]})})]})};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Sheet>
      <SheetTrigger asChild>
        <Button>Open sheet</Button>
      </SheetTrigger>
      <SheetPortal>
        <SheetContent {...args}>
          <h1>Sheet content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit, erat nec vehicula ultricies, elit purus ultricies libero,
            nec ultricies magna justo nec nunc. Nullam suscipit, erat nec
            vehicula ultricies, elit purus ultricies libero, nec ultricies magna
            justo nec nunc.
          </p>
        </SheetContent>
      </SheetPortal>
    </Sheet>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const J=["Default"];export{o as Default,J as __namedExportsOrder,H as default};
