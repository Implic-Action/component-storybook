import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{c as D}from"./index-Bb4qSo10.js";import{c as S}from"./utils-C-5SdYIA.js";import"./index-CTjT7uj6.js";const O=D("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function v({className:y,variant:x,...h}){return b.jsx("div",{className:S(O({variant:x}),y),...h})}v.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]};const V={title:"Example/Badge",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:["default","secondary","destructive","outline"],control:{type:"select"}},children:{control:{type:"text"}}},args:{variant:"default",children:"Badge Content"}},e={args:{variant:"default",children:"Default"}},r={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"destructive",children:"Destructive"}},a={args:{variant:"outline",children:"Outline"}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "Default"
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const N=["Default","Secondary","Destructive","Outline"];export{e as Default,t as Destructive,a as Outline,r as Secondary,N as __namedExportsOrder,V as default};
