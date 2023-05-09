import{j as s}from"./jsx-runtime-6eef64cc.js";import{c as i}from"./index-778010da.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const N="_loaderWrap_1gbp5_1",w="_loader_1gbp5_1",j="_rotate_1gbp5_1",P="_path_1gbp5_12",k="_backPath_1gbp5_19",L="_small_1gbp5_26",V="_medium_1gbp5_31",W="_large_1gbp5_36",q="_xlarge_1gbp5_41",a={loaderWrap:N,loader:w,rotate:j,path:P,backPath:k,small:L,"dash-small":"_dash-small_1gbp5_1",medium:V,large:W,"dash-medium":"_dash-medium_1gbp5_1",xlarge:q,"dash-large":"_dash-large_1gbp5_1"},m=({className:r,style:v,size:n="medium"})=>{const e=M(n);return s.jsx("div",{className:i(a.loaderWrap,r),style:{...v,width:e,height:e},children:s.jsxs("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,fill:"none",className:i(a.loader,a[n]),xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("circle",{className:a.path,cx:e/2,cy:e/2,r:e/2-3}),s.jsx("circle",{className:a.backPath,cx:e/2,cy:e/2,r:e/2-3})]})})};m.defaultProps={className:"",style:{},size:"large"};const M=r=>{switch(r){case"small":return 24;case"medium":return 32;case"large":return 40;case"xlarge":return 80;default:return 32}};try{m.displayName="Spinner",m.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xlarge"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const C={title:"Misc/Spinner",component:m,tags:["autodocs"]},t={args:{size:"small"}},l={args:{size:"medium"}},o={args:{size:"large"}},c={args:{size:"xlarge"}};var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,_,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(h=(_=l.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var x,b,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,S,z;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'xlarge'
  }
}`,...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const I=["Small","Medium","Large","XLarge"];export{o as Large,l as Medium,t as Small,c as XLarge,I as __namedExportsOrder,C as default};
//# sourceMappingURL=Spinner.stories-70c19872.js.map
