"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[8924],{5542:function($,D,y){var P=y(96568),o=y(75271),_=y(72352),C=y(41335);function v(a){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(a)}function O(a,t){return W(a)||H(a,t)||g(a,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(a,t){if(a){if(typeof a=="string")return b(a,t);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return b(a,t)}}function b(a,t){(t==null||t>a.length)&&(t=a.length);for(var l=0,e=new Array(t);l<t;l++)e[l]=a[l];return e}function H(a,t){var l=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var e,n,r,i,s=[],f=!0,m=!1;try{if(r=(l=l.call(a)).next,t===0){if(Object(l)!==l)return;f=!1}else for(;!(f=(e=r.call(l)).done)&&(s.push(e.value),s.length!==t);f=!0);}catch(p){m=!0,n=p}finally{try{if(!f&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(m)throw n}}return s}}function W(a){if(Array.isArray(a))return a}function T(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),l.push.apply(l,e)}return l}function j(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?T(Object(l),!0).forEach(function(e){k(a,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):T(Object(l)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))})}return a}function k(a,t,l){return t=c(t),t in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function c(a){var t=d(a,"string");return v(t)==="symbol"?t:String(t)}function d(a,t){if(v(a)!=="object"||a===null)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var e=l.call(a,t||"default");if(v(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function u(a){var t=a.children;return o.createElement("span",{"data-token":t},t)}function E(a){return a.hasQuestionToken&&typeof a.type=="string"&&(a.type=a.type.replace(/\s+\|\s+undefined\s*$/i,"")),a}var h=function(t){var l,e=(0,P.YB)(),n=(0,P.WF)(),r=n.themeConfig;return(l=t.source)!==null&&l!==void 0&&l[0]&&r.sourceLink?o.createElement("a",{className:"dumi-default-api-link",href:e.formatMessage({id:"$internal.api.sourceLink"},j({},t.source[0])),target:"_blank",rel:"noreferrer"},t.className):t.className},A={toNode:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||o.createElement("span",null,t.type):"const"in t?o.createElement("span",null,t.const):"oneOf"in t?this.oneOf(t):o.createElement("span",null,"unknown")},string:function(t){return o.createElement("span",null,t.type)},number:function(t){return o.createElement("span",null,t.type)},boolean:function(t){return o.createElement("span",null,t.type)},any:function(t){return o.createElement("span",null,t.type)},object:function(t){var l=this,e=Object.entries(t.properties||{}),n=e.map(function(r,i){var s,f=O(r,2),m=f[0],p=f[1];return o.createElement("span",{key:m},o.createElement("span",null,m),!((s=t.required)!==null&&s!==void 0&&s.includes(m))&&o.createElement(u,null,"?"),o.createElement(u,null,":"),p.type==="object"?o.createElement("span",null,"object"):l.toNode(p),i<e.length-1&&o.createElement(u,null,";"))});return o.createElement("span",null,o.createElement(u,null,"{"),n,o.createElement(u,null,"}"))},array:function(t){var l=o.createElement("span",null,"any");if(t.items){var e=this.getValidClassName(t.items);l=e!=null?e:this.toNode(t.items)}return o.createElement("span",null,l,o.createElement(u,null,"["),o.createElement(u,null,"]"))},element:function(t){return o.createElement("span",null,o.createElement(u,null,"<"),o.createElement("span",null,t.componentName),o.createElement(u,null,">"))},function:function(t){var l=this,e=t.signature;if(!e)return o.createElement("span",null,"Function");var n="oneOf"in e?e.oneOf:[e];return n.map(function(r,i){return o.createElement("span",{key:"".concat(i)},r.isAsync?o.createElement(u,null,"async"):"",o.createElement(u,null,"("),r.arguments.map(function(s,f){return o.createElement("span",{key:"".concat(i).concat(f)},o.createElement("span",null,s.key),s.hasQuestionToken&&o.createElement(u,null,"?"),o.createElement(u,null,":"),l.toNode(s.schema?s.schema:E(s)),f<r.arguments.length-1&&o.createElement(u,null,","))}),o.createElement(u,null,")"),o.createElement(u,null,"=>"),l.toNode(r.returnType),i<n.length-1&&o.createElement(u,null,"|"))})},dom:function(t){return o.createElement("span",null,t.className||"DOM")},enum:function(t){var l=t.enum.map(function(e){return JSON.stringify(e)});return o.createElement("span",null,l.map(function(e,n){return o.createElement("span",{key:n},o.createElement("span",null,e),n<l.length-1&&o.createElement(u,null,"|"))}))},oneOf:function(t){var l=this;return t.oneOf.map(function(e,n){return o.createElement("span",{key:n},l.getValidClassName(e)||l.toNode(e),n<t.oneOf.length-1&&o.createElement(u,null,"|"))})},reference:function(t){var l=this,e=t.typeParameters||[],n=e.map(function(r,i){return o.createElement("span",{key:i},l.toNode(r),i<e.length-1&&o.createElement(u,null,","))});return o.createElement(o.Fragment,null,o.createElement("a",{className:"dumi-default-api-link",href:t.externalUrl,target:"_blank",rel:"noreferrer"},t.name),n.length?o.createElement(o.Fragment,null,o.createElement(u,null,"<"),n,o.createElement(u,null,">")):"")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?o.createElement(h,t):null}},L=function(t){var l=useState(function(){return A.toNode(t)}),e=O(l,2),n=e[0],r=e[1];return useEffect(function(){r(A.toNode(t))},[t]),React.createElement("code",{className:"dumi-default-api-type"},n)};function x(a){var t={};return Object.entries(a).forEach(function(l){var e,n,r=O(l,2),i=r[0],s=r[1],f=(e=s.tags)===null||e===void 0?void 0:e.modifierTags,m=(n=s.tags)===null||n===void 0?void 0:n.blockTags;f==null||f.forEach(function(p){(p==="alpha"||p==="beta"||p==="experimental")&&(t[i]=[p])}),m==null||m.forEach(function(p){var R=p.tag,w=p.content;if(R==="deprecated"||R==="since"){var M=w.map(function(K){return K.text}).join("");t[i]=[R,M]}})}),t}var N=function(t){var l=t.name,e=t.info,n=useIntl(),r=O(e,2),i=r[0],s=r[1],f=k({className:"dumi-default-api-release-modifer"},"data-release",i);s&&i==="deprecated"&&(f["data-dumi-tooltip"]=s);var m=i==="since"?"".concat(s,"+"):n.formatMessage({id:"api.component.release.".concat(i)});return React.createElement("span",{className:"dumi-default-api-release"},React.createElement("span",{className:"dumi-default-api-release-name","data-release":i},l),React.createElement("span",f,i==="deprecated"?m:React.createElement(Badge,{type:"info"},m)))},F=function(t){var l=useRouteMeta(),e=l.frontmatter,n=useAtomAssets(),r=n.components,i=t.id||e.atomId,s=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var f=r==null?void 0:r[i],m={},p=(t.type||"props").toLowerCase();if(f){var R,w="".concat(p,"Config");m=((R=f[w])===null||R===void 0?void 0:R.properties)||{}}var M=useMemo(function(){return x(m)},[m]);return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,s.formatMessage({id:"api.component.name"})),React.createElement("th",null,s.formatMessage({id:"api.component.description"})),React.createElement("th",null,s.formatMessage({id:"api.component.type"})),p==="props"&&React.createElement("th",null,s.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,Object.keys(m).length?Object.entries(m).map(function(K){var V,Y=O(K,2),I=Y[0],U=Y[1];return React.createElement("tr",{key:I},React.createElement("td",null,M[I]?React.createElement(N,{name:I,info:M[I]}):I),React.createElement("td",null,U.description||"--"),React.createElement("td",null,React.createElement(L,U)),p==="props"&&React.createElement("td",null,React.createElement("code",null,(V=f.propsConfig.required)!==null&&V!==void 0&&V.includes(I)?s.formatMessage({id:"api.component.required"}):JSON.stringify(U.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},s.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i}))))))},B=null},72352:function($,D,y){var P=y(75271);function o(){return o=Object.assign?Object.assign.bind():function(v){for(var O=1;O<arguments.length;O++){var S=arguments[O];for(var g in S)Object.prototype.hasOwnProperty.call(S,g)&&(v[g]=S[g])}return v},o.apply(this,arguments)}var _=function(O){return React.createElement("span",o({className:"dumi-default-badge"},O))},C=null},71257:function($,D,y){var P=y(43797),o=y(26858),_=y(77835),C=y(75271);function v(g){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},v(g)}function O(g){var b=g.children,H=toArray(b).filter(function(T){var j;return v(T)==="object"&&typeof T.type=="function"&&((j=T.type)===null||j===void 0?void 0:j.name)===SourceCode.name}),W=H.map(function(T,j){var k,c,d=(k=T.props)!==null&&k!==void 0?k:{},u=d.lang,E=d.title;return{key:String((c=T.key)!==null&&c!==void 0?c:j),label:E||u||"txt",children:T}});return React.createElement(Tabs,{className:"dumi-default-code-group",items:W})}var S=null},41335:function($,D,y){y.d(D,{Z:function(){return k}});var P=y(30826),o=y.n(P),_=y(75271),C=["children"];function v(c,d){return H(c)||b(c,d)||S(c,d)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(c,d){if(c){if(typeof c=="string")return g(c,d);var u=Object.prototype.toString.call(c).slice(8,-1);if(u==="Object"&&c.constructor&&(u=c.constructor.name),u==="Map"||u==="Set")return Array.from(c);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return g(c,d)}}function g(c,d){(d==null||d>c.length)&&(d=c.length);for(var u=0,E=new Array(d);u<d;u++)E[u]=c[u];return E}function b(c,d){var u=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(u!=null){var E,h,A,L,x=[],N=!0,F=!1;try{if(A=(u=u.call(c)).next,d===0){if(Object(u)!==u)return;N=!1}else for(;!(N=(E=A.call(u)).done)&&(x.push(E.value),x.length!==d);N=!0);}catch(B){F=!0,h=B}finally{try{if(!N&&u.return!=null&&(L=u.return(),Object(L)!==L))return}finally{if(F)throw h}}return x}}function H(c){if(Array.isArray(c))return c}function W(c,d){if(c==null)return{};var u=T(c,d),E,h;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(c);for(h=0;h<A.length;h++)E=A[h],!(d.indexOf(E)>=0)&&Object.prototype.propertyIsEnumerable.call(c,E)&&(u[E]=c[E])}return u}function T(c,d){if(c==null)return{};var u={},E=Object.keys(c),h,A;for(A=0;A<E.length;A++)h=E[A],!(d.indexOf(h)>=0)&&(u[h]=c[h]);return u}var j=function(d){var u=d.children,E=W(d,C),h=(0,_.useRef)(null),A=(0,_.useState)(!1),L=v(A,2),x=L[0],N=L[1],F=(0,_.useState)(!1),B=v(F,2),a=B[0],t=B[1];return(0,_.useEffect)(function(){var l=h.current;if(l){var e=o()(function(){N(l.scrollLeft>0),t(l.scrollLeft<l.scrollWidth-l.offsetWidth)},100);return e(),l.addEventListener("scroll",e),window.addEventListener("resize",e),function(){l.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}},[]),_.createElement("div",{className:"dumi-default-table"},_.createElement("div",{className:"dumi-default-table-content",ref:h,"data-left-folded":x||void 0,"data-right-folded":a||void 0},_.createElement("table",E,u)))},k=j},16295:function($,D,y){var P=y(65217),o=y(75271);function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_(e)}function C(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,i)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?C(Object(r),!0).forEach(function(i){O(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function O(e,n,r){return n=S(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e){var n=g(e,"string");return _(n)==="symbol"?n:String(n)}function g(e,n){if(_(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,n||"default");if(_(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function b(e,n){return T(e)||W(e,n)||c(e,n)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e,n){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var i,s,f,m,p=[],R=!0,w=!1;try{if(f=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;R=!1}else for(;!(R=(i=f.call(r)).done)&&(p.push(i.value),p.length!==n);R=!0);}catch(M){w=!0,s=M}finally{try{if(!R&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(w)throw s}}return p}}function T(e){if(Array.isArray(e))return e}function j(e){return u(e)||d(e)||c(e)||k()}function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(e,n){if(e){if(typeof e=="string")return E(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,n)}}function d(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function u(e){if(Array.isArray(e))return E(e)}function E(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=e[r];return i}function h(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(e).forEach(function(i,s){var f="".concat(n?"".concat(n,"-"):"").concat(s);switch(i==null?void 0:i.type){case"ul":{var m,p=((m=r[r.length-1])===null||m===void 0?void 0:m.children)||r,R=h(i.props.children||[],f);p.push.apply(p,j(R));break}case"li":{var w,M,K=(w=i.props.children)===null||w===void 0||(M=w.some)===null||M===void 0?void 0:M.call(w,function(I){var U;return I.type==="ul"&&!((U=I.props.children)!==null&&U!==void 0&&U.length)}),V=[].concat(i.props.children).filter(function(I){return I.type!=="ul"}),Y=K?[]:h(i.props.children,f);r.push({title:V,key:f,children:Y,isLeaf:!K&&!Y.length,switcherIcon:K?React.createElement("span",{className:"tree-switcher-leaf-line"}):void 0});break}default:}}),r}var A=function(n){var r=useState(h(n)),i=b(r,2),s=i[0],f=i[1];return useEffect(function(){f(h(n))},[n]),s},L=function(n){var r,i=n.isLeaf,s=n.expanded,f=n.data;return i?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):!s||!(f!=null&&(r=f.children)!==null&&r!==void 0&&r.length)?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"}))},x=function(n){var r=n.isLeaf,i=n.expanded;return r?React.createElement("span",{className:"tree-switcher-leaf-line"}):i?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},N=function(){return{height:0,opacity:0}},F=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},B=function(n){return{height:n?n.offsetHeight:0}},a=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},t={motionName:"ant-motion-collapse",onAppearStart:N,onEnterStart:N,onAppearActive:F,onEnterActive:F,onLeaveStart:B,onLeaveActive:N,onAppearEnd:a,onEnterEnd:a,onLeaveEnd:a,motionDeadline:500},l=function(e){var n=A(e.children),r=createRef(),i=function(f,m){var p,R=m.isLeaf,w=!R&&!((p=m.children)!==null&&p!==void 0&&p.length);R||w||f.shiftKey||f.metaKey||f.ctrlKey||r.current.onNodeExpand(f,m)};return React.createElement(Tree,{className:"dumi-default-tree",icon:L,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:v(v({},t),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:e.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:x})}},77835:function($,D,y){var P,o=y(26538).default;P={value:!0},P=v;var _=o(y(56148)),C=o(y(75271));function v(O){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=[];return C.default.Children.forEach(O,function(b){b==null&&!S.keepEmpty||(Array.isArray(b)?g=g.concat(v(b)):(0,_.default)(b)&&b.props?g=g.concat(v(b.props.children,S)):g.push(b))}),g}},56148:function($,D,y){var P=y(26538).default;Object.defineProperty(D,"__esModule",{value:!0}),D.default=O;var o=P(y(59668)),_=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function O(S){return S&&(0,o.default)(S)==="object"&&(S.$$typeof===_||S.$$typeof===C)&&S.type===v}}}]);