import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as g}from"./index-CTjT7uj6.js";const r=g.forwardRef(({className:e,children:i,onClick:p},l)=>a.jsx("button",{className:`px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${e}`,ref:l,onClick:p,children:i}));r.displayName="Button";r.__docgenInfo={description:"",methods:[],displayName:"Button"};const b={title:"Example/Test",component:r,parameters:{layout:"centered"},argTypes:{onClick:{action:"clicked"}},args:{children:"Click me"}},s={render:e=>a.jsx(r,{...e})},t={render:e=>a.jsx(r,{...e}),args:{className:"bg-red-500"}};var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Button {...args} />
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,m,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Button {...args} />,
  args: {
    className: "bg-red-500"
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const h=["Default","WithCustomClass"];export{s as Default,t as WithCustomClass,h as __namedExportsOrder,b as default};
