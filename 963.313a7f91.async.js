(self.webpackChunk_ant_design_pro_flow_editor=self.webpackChunk_ant_design_pro_flow_editor||[]).push([[963],{22578:function(x,O,t){"use strict";t.d(O,{Z:function(){return b}});var u=t(4386),p=t(78411),e=t(27641),l=t(29208),m=t(72270),g=t(70284),h=t(96766),T=t(61111),z,I,X,Z=(0,T.kc)(function(A,a){var P=A.token,M=A.css,D=A.cx,k=a.size,J=a.className,K=a.prefixCls,Y=typeof k=="number"?M(z||(z=(0,h.Z)([`
          width: `,`px !important;
          height: `,`px !important;
        `])),k,k):"",it=M(I||(I=(0,h.Z)([`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: `,` !important;
    }

    &:active {
      scale: 0.8;
      color: `,`;
    }

    transition: color 600ms `,", scale 400ms ",`,
      background-color 100ms `,`;
  `])),P.colorText,P.colorText,P.motionEaseOut,P.motionEaseOut,P.motionEaseOut);return{container:D(K,it,Y,J),tooltip:M(X||(X=(0,h.Z)([`
      pointer-events: none;
    `])))}}),c=t(11527),f=["placement","title","icon","cursor","onClick","className","size","prefixCls"],y=function(a){var P=a.placement,M=a.title,D=a.icon,k=a.cursor,J=a.onClick,K=a.className,Y=a.size,it=a.prefixCls,vt=(0,p.Z)(a,f),mt=(0,g.k2)("actionicon",it),F=Z({size:Y,prefixCls:mt}),at=F.styles,q=F.theme,pt=F.cx,lt=(0,c.jsx)(e.ZP,(0,u.Z)((0,u.Z)({icon:D,className:pt(K,at.container),type:"text",style:{cursor:k},size:"small"},vt),{},{onClick:J}));return(0,c.jsx)(m.iV,{componentToken:{Button:{colorText:q.colorTextTertiary,colorBgTextHover:q.colorFillSecondary,colorBgTextActive:q.colorFill}},children:M?(0,c.jsx)(l.Z,{arrow:!1,overlayClassName:at.tooltip,title:M,placement:P,children:lt}):lt})},b=y},72270:function(x,O,t){"use strict";t.d(O,{iV:function(){return I}});var u=t(4386),p=t(37869),e=t(38439),l=t(89742),m=t(52084),g=function(c,f){var y=m.Z.darkAlgorithm(c,f);return(0,u.Z)((0,u.Z)({},y),{},{colorBgLayout:"#20252b",colorBgContainer:"#282c34",colorBgElevated:"#32363e"})},h=function(c){var f={algorithm:[m.Z.compactAlgorithm]};return c==="dark"&&f.algorithm.push(g),f},T=t(11527),z=function(c){var f=(0,e.S)(),y=h(c),b={colorBgContainer:f==null?void 0:f.colorFillQuaternary,colorBorder:"transparent",controlHeightSM:24,controlOutline:"transparent"};return y.components={Input:b,InputNumber:b,Select:b,Tree:{colorBgContainer:"transparent",controlHeightSM:24},TreeSelect:b},y},I=function(c){var f=c.children,y=c.componentToken,b=(0,l.r)(),A=b.appearance,a=z(A);return y&&(a.components=(0,u.Z)((0,u.Z)({},a.components),y)),(0,T.jsx)(p.ZP,{prefixCls:"studio",theme:a,children:f})},X=function(c){return function(f){return _jsx(I,{children:_jsx(c,_objectSpread({},f))})}}},70284:function(x,O,t){"use strict";t.d(O,{k2:function(){return p}});var u="studio";function p(e,l){return l||(e?"".concat(u,"-").concat(e):u)}},17454:function(x,O,t){"use strict";t.d(O,{Z:function(){return yt}});var u=t(84875),p=t.n(u),e=t(50959),l=t(92172),m=t(52175),g=t(20265),T=n=>{const{getPrefixCls:d,direction:r}=(0,e.useContext)(l.E_),{prefixCls:o,className:s}=n,C=d("input-group",o),Q=d("input"),[E,V]=(0,g.ZP)(Q),G=p()(C,{[`${C}-lg`]:n.size==="large",[`${C}-sm`]:n.size==="small",[`${C}-compact`]:n.compact,[`${C}-rtl`]:r==="rtl"},V,s),L=(0,e.useContext)(m.aM),N=(0,e.useMemo)(()=>Object.assign(Object.assign({},L),{isFormItemInput:!1}),[L]);return E(e.createElement("span",{className:G,style:n.style,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,onFocus:n.onFocus,onBlur:n.onBlur},e.createElement(m.aM.Provider,{value:N},n.children)))},z=t(9158),I=t(47622),X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},Z=X,c=t(89011),f=function(d,r){return e.createElement(c.Z,(0,I.Z)({},d,{ref:r,icon:Z}))},y=e.forwardRef(f),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},A=b,a=function(d,r){return e.createElement(c.Z,(0,I.Z)({},d,{ref:r,icon:A}))},P=e.forwardRef(a),M=t(54331),D=t(93355),k=t(82889),J=function(n,d){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&d.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(n);s<o.length;s++)d.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(n,o[s])&&(r[o[s]]=n[o[s]]);return r};const K=n=>n?e.createElement(P,null):e.createElement(y,null),Y={click:"onClick",hover:"onMouseOver"};var vt=e.forwardRef((n,d)=>{const{visibilityToggle:r=!0}=n,o=typeof r=="object"&&r.visible!==void 0,[s,C]=(0,e.useState)(()=>o?r.visible:!1),Q=(0,e.useRef)(null);e.useEffect(()=>{o&&C(r.visible)},[o,r]);const E=(0,k.Z)(Q),V=()=>{const{disabled:nt}=n;nt||(s&&E(),C(S=>{var j;const W=!S;return typeof r=="object"&&((j=r.onVisibleChange)===null||j===void 0||j.call(r,W)),W}))},G=nt=>{const{action:S="click",iconRender:j=K}=n,W=Y[S]||"",H=j(s),ot={[W]:V,className:`${nt}-icon`,key:"passwordIcon",onMouseDown:rt=>{rt.preventDefault()},onMouseUp:rt=>{rt.preventDefault()}};return e.cloneElement(e.isValidElement(H)?H:e.createElement("span",null,H),ot)},{className:L,prefixCls:N,inputPrefixCls:ct,size:B}=n,tt=J(n,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:ut}=e.useContext(l.E_),ft=ut("input",ct),U=ut("input-password",N),et=r&&G(U),R=p()(U,L,{[`${U}-${B}`]:!!B}),dt=Object.assign(Object.assign({},(0,M.Z)(tt,["suffix","iconRender","visibilityToggle"])),{type:s?"text":"password",className:R,prefixCls:ft,suffix:et});return B&&(dt.size=B),e.createElement(z.Z,Object.assign({ref:(0,D.sQ)(d,Q)},dt))}),mt=t(88179),F=t(19881),at=t(27641),q=t(78893),pt=t(60725),lt=function(n,d){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&d.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(n);s<o.length;s++)d.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(n,o[s])&&(r[o[s]]=n[o[s]]);return r},gt=e.forwardRef((n,d)=>{const{prefixCls:r,inputPrefixCls:o,className:s,size:C,suffix:Q,enterButton:E=!1,addonAfter:V,loading:G,disabled:L,onSearch:N,onChange:ct,onCompositionStart:B,onCompositionEnd:tt}=n,ut=lt(n,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:ft,direction:U}=e.useContext(l.E_),et=e.useRef(!1),R=ft("input-search",r),dt=ft("input",o),{compactSize:nt}=(0,pt.ri)(R,U),S=(0,q.Z)(i=>{var v;return(v=C!=null?C:nt)!==null&&v!==void 0?v:i}),j=e.useRef(null),W=i=>{i&&i.target&&i.type==="click"&&N&&N(i.target.value,i),ct&&ct(i)},H=i=>{var v;document.activeElement===((v=j.current)===null||v===void 0?void 0:v.input)&&i.preventDefault()},ot=i=>{var v,w;N&&N((w=(v=j.current)===null||v===void 0?void 0:v.input)===null||w===void 0?void 0:w.value,i)},rt=i=>{et.current||G||ot(i)},Ot=typeof E=="boolean"?e.createElement(mt.Z,null):null,xt=`${R}-button`;let st;const $=E||{},Ct=$.type&&$.type.__ANT_BUTTON===!0;Ct||$.type==="button"?st=(0,F.Tm)($,Object.assign({onMouseDown:H,onClick:i=>{var v,w;(w=(v=$==null?void 0:$.props)===null||v===void 0?void 0:v.onClick)===null||w===void 0||w.call(v,i),ot(i)},key:"enterButton"},Ct?{className:xt,size:S}:{})):st=e.createElement(at.ZP,{className:xt,type:E?"primary":void 0,size:S,disabled:L,key:"enterButton",onMouseDown:H,onClick:ot,loading:G,icon:Ot},E),V&&(st=[st,(0,F.Tm)(V,{key:"addonAfter"})]);const bt=p()(R,{[`${R}-rtl`]:U==="rtl",[`${R}-${S}`]:!!S,[`${R}-with-button`]:!!E},s),Pt=i=>{et.current=!0,B==null||B(i)},Et=i=>{et.current=!1,tt==null||tt(i)};return e.createElement(z.Z,Object.assign({ref:(0,D.sQ)(j,d),onPressEnter:rt},ut,{size:S,onCompositionStart:Pt,onCompositionEnd:Et,prefixCls:dt,addonAfter:st,suffix:Q,onChange:W,className:bt,disabled:L}))}),ht=t(85531);const _=z.Z;_.Group=T,_.Search=gt,_.TextArea=ht.Z,_.Password=vt;var yt=_},12342:function(x,O,t){var u=t(20006);function p(e,l){if(e==null)return{};var m=u(e,l),g,h;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(e);for(h=0;h<T.length;h++)g=T[h],!(l.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(e,g)&&(m[g]=e[g])}return m}x.exports=p,x.exports.__esModule=!0,x.exports.default=x.exports},20006:function(x){function O(t,u){if(t==null)return{};var p={},e=Object.keys(t),l,m;for(m=0;m<e.length;m++)l=e[m],!(u.indexOf(l)>=0)&&(p[l]=t[l]);return p}x.exports=O,x.exports.__esModule=!0,x.exports.default=x.exports}}]);
