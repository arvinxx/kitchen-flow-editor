"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[9199],{47975:function(K,A,t){t.r(A),t.d(A,{default:function(){return F}});var h=t(26068),S=t.n(h),p=t(48305),c=t.n(p),y=t(53649),j=t.n(y),o=t(73496),b=t(80424),x=t(34047),u=t(50959),D=t(60354),d=t(11527),P=function(i){var n=i.score;return(0,d.jsx)(D.Z,{style:{fontSize:"6px",textAlign:"center"},type:"circle",trailColor:"white",percent:n===0?1:n*20,strokeColor:n*20>60?"#30a46c":"#e5484d",format:function(){return"".concat(n)},size:28})},E=[{id:"b1",label:"titleSlot-left",data:{title:"XXX_API1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API",titleSlot:{type:"left",value:(0,d.jsx)("div",{className:"dangerLogo",children:(0,d.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*wkEJRbSowekAAAAAAAAAAAAADvuvAQ/original",alt:""})})}}},{id:"b2",label:"titleSlot-right",data:{title:"XXX_APIddddddddddddddddddddddddddddddddddddddddddddddddddd_b2",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API",titleSlot:{type:"right",value:(0,d.jsx)(P,{score:4})}}},{id:"b3",label:"default",data:{title:"XXX_API_b3",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}}],Q=[{id:"b12",source:"b1",target:"b2"},{id:"b23",source:"b2",target:"b3"}],g,T=(0,x.kc)(function(s){var i=s.css;return{container:i(g||(g=j()([`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `])))}}),U=function(){var i=(0,u.useState)(E),n=c()(i,2),l=n[0],v=n[1],L=(0,u.useState)(Q),f=c()(L,2),r=f[0],X=f[1],I=T(),N=I.styles,H=function(e){v(l.map(function(a){return a.id===e.id&&(a.select=o.Q.SELECT),a})),X(r.map(function(a){return(a.source===e.id||a.target===e.id)&&(a.select=o.Q.SUB_SELECT),S()({},a)}))},R=function(){v(l.map(function(e){return e.select=o.Q.DEFAULT,e})),X(r.map(function(e){return e.select=o.Q.DEFAULT,e}))};return(0,d.jsx)("div",{className:N.container,children:(0,d.jsx)(b.Z,{onNodeDragStart:function(e,a){return H(a)},onPaneClick:R,nodes:l,edges:r})})},C=function(){return(0,d.jsx)(U,{})},F=C}}]);
