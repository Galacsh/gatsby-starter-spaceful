(self.webpackChunkgatsby_starter_spaceful=self.webpackChunkgatsby_starter_spaceful||[]).push([[161],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,n){var r=n(9489),a=n(7067);function l(t,n,o){return a()?(e.exports=l=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,n){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return n&&r(l,n.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(3646),a=n(6860),l=n(379),o=n(8206);e.exports=function(e){return r(e)||a(e)||l(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),a=n(319),l=n(9713),o=n(7316),c=["scope","children"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n(7294),m=n(4983).mdx,p=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,l=o(e,c),i=p(t),f=u.useMemo((function(){if(!n)return null;var e=s({React:u,mdx:m},i),t=Object.keys(e),l=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(l)))}),[n,t]);return u.createElement(f,s({},l))}},7407:function(e,t,n){"use strict";var r=n(7294),a=n(3271);t.Z=function(e){var t=e.children,n=(0,a.tH)(),l=n.width,o=n.height;return r.createElement("div",{style:{minWidth:l>160?l:"160px",minHeight:o},className:"app"},t)}},8674:function(e,t,n){"use strict";var r=n(7294),a=n(7332),l=n(9695),o=n(3271);t.Z=function(){var e=(0,o.vO)(),t=e.scrollBottom,n=e.scrollTop,c=e.scrolledUp;return r.createElement(a.Z,{bottom:"1rem",right:"1rem",onClick:function(){return c?n():t()},onKeyDown:function(){return c?n():t()},className:"btn btn-round btn-transparent"},r.createElement("div",{className:"fast-scroll-btn col justify-content-center align-items-center"},r.createElement(l.Z,{iconName:c?"arrow-up-thin":"arrow-down-thin"}),r.createElement("span",{className:"sr-only"},"Fast scroll")))}},7332:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.top,n=e.right,a=e.bottom,l=e.left,o=e.children,c=e.className,i=e.onClick,s=e.onKeyDown;return r.createElement("div",{className:c+" pos-fixed",style:{top:t||null,right:n||null,bottom:a||null,left:l||null},onClick:i,onKeyDown:s},o)}},4226:function(e,t,n){"use strict";var r=n(7294);t.Z=function(){return r.createElement("footer",null,r.createElement("div",{className:"pa-10 text-08 mb-10"},"© Galacsh, Built with Gatsby-starter-spaceful"))}},1836:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.className,a=void 0===n?"":n;return r.createElement("div",{className:"container "+a},r.createElement("div",null,t))}},9695:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.iconName,n=e.className,a=void 0===n?"":n;return r.createElement("i",{className:"mdi mdi-"+t+" "+a})}},2394:function(e,t,n){"use strict";var r=n(5444),a=n(7294),l=n(7332),o=n(9695);t.Z=function(e){var t=e.isHome,n=void 0!==t&&t;return a.createElement(l.Z,{top:"1rem",left:"1rem"},a.createElement("div",{className:"row"},a.createElement("div",{className:"btn btn-round btn-transparent mr-10",onClick:function(){return(0,r.navigate)(-1)},onKeyDown:function(){return(0,r.navigate)(-1)}},a.createElement("div",{className:"nav-back-btn col justify-content-center align-items-center"},a.createElement(o.Z,{iconName:"chevron-left"}))),!n&&a.createElement("div",{className:"btn btn-round btn-transparent",onClick:function(){return(0,r.navigate)("/")},onKeyDown:function(){return(0,r.navigate)("/")}},a.createElement("div",{className:"nav-home-btn col justify-content-center align-items-center"},a.createElement(o.Z,{iconName:"home-outline"})))))}},7513:function(e,t,n){"use strict";var r=n(7294),a=n(3271);t.Z=function(){var e=(0,a.vO)(0).scrollPercentage;return r.createElement("div",{className:"pos-fixed scroll-indicator"},r.createElement("div",{style:{width:e+"%"}}),r.createElement("span",{className:"sr-only"},"Scroll Percentage Indicator"))}},7429:function(e,t,n){"use strict";var r=n(7294),a=n(7332),l=n(9695),o=n(3271);t.Z=function(){var e=(0,o.Fg)(),t=e.isDarkMode,n=e.toggleTheme;return r.createElement(a.Z,{top:"1rem",right:"1rem",onClick:function(){return n()},onKeyDown:function(){return n()},className:"btn btn-round btn-transparent"},r.createElement("div",{className:"toggle-theme-btn col justify-content-center align-items-center"},r.createElement(l.Z,{iconName:t?"weather-sunny":"weather-night"}),r.createElement("span",{className:"sr-only"},"Toggle theme")))}},288:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7294),a=n(6634),l=n(7407),o=n(1836),c=n(4983),i=n(6725),s=n(4226),u=n(8674),m=n(7429),p=n(2394),f=n(7513),d=n(9695),v=function(e){var t=e.tag;return r.createElement("span",{className:"post-tag mr-10"},t)},E=function(e){return e.tags.map((function(e){return r.createElement(v,{tag:e})}))},b=function(e){var t,n=e.meta;return r.createElement("div",{className:"post-meta ma-0 mb-100 pt-100"},r.createElement("h1",{className:"post-title mt-0 mb-20 mx-10 text-30"},null==n?void 0:n.title),(null==n?void 0:n.thumbnail)&&r.createElement("img",{className:"thumbnail-img mb-10",src:null==n?void 0:n.thumbnail.publicURL,alt:"Thumbnail of this post"}),r.createElement("div",{className:"post-date mx-10 mb-10"},r.createElement(d.Z,{iconName:"calendar-month-outline",className:"mr-05 text-08"}),r.createElement("span",{className:"text-08"},null==n?void 0:n.date)),r.createElement("div",{className:"post-tags mx-10"},null!=(null==n?void 0:n.tags)&&(null===(t=n.tags)||void 0===t?void 0:t.length)>0?r.createElement(E,{tags:n.tags}):r.createElement(r.Fragment,null)))},x=n(5444),g=function(e){var t=e.items,n=e.depth,a=void 0===n?1:n;return t.map((function(e,t){return r.createElement(y,{depth:a,item:e,key:"toc-"+a+"-"+t})}))},y=function(e){var t=e.item,n=e.depth,a=void 0===n?1:n;return r.createElement(r.Fragment,null,r.createElement("div",{className:"btn toc-item",style:{marginLeft:.5*(a-1)+"rem"},onClick:function(){return(0,x.navigate)(t.url)},onKeyDown:function(){return(0,x.navigate)(t.url)}},t.title),t.items&&r.createElement(g,{depth:a+1,items:t.items}))},h=function(e){var t=e.items;return r.createElement("div",{className:t&&"toc-wrapper"},t&&r.createElement(g,{items:t}))},N=function(e){var t,n=e.prev;return r.createElement("div",{className:"mr-05 post-prev-btn"},r.createElement("div",{className:"type"},"Previous"),r.createElement("div",null,r.createElement("span",{onClick:function(){return(0,x.navigate)("/post/"+n.slug)},onKeyDown:function(){return(0,x.navigate)("/post/"+n.slug)},className:"title"},null===(t=n.frontmatter)||void 0===t?void 0:t.title)))},w=function(e){var t,n=e.next;return r.createElement("div",{className:"ml-05 post-next-btn"},r.createElement("div",{className:"type"},"Next"),r.createElement("div",null,r.createElement("span",{onClick:function(){return(0,x.navigate)("/post/"+n.slug)},onKeyDown:function(){return(0,x.navigate)("/post/"+n.slug)},className:"title"},null==n||null===(t=n.frontmatter)||void 0===t?void 0:t.title)))},_=function(){return r.createElement("div",null)},O=function(e){var t=e.prev,n=e.next;return r.createElement("div",{className:"mx-10 pb-65 row align-items-center justify-content-between"},null!=t?r.createElement(N,{prev:t}):r.createElement(_,null),null!=n?r.createElement(w,{next:n}):r.createElement(_,null))},Z=function(e){var t=e.className,n=void 0===t?"":t;return r.createElement("hr",{className:n+" mx-10 divider"})},j=function(e){var t,n,d=e.data,v=(e.pageContext,null==d?void 0:d.cur),E=null==d?void 0:d.prev,x=null==d?void 0:d.next;return r.createElement(r.Fragment,null,r.createElement(a.Z,{title:null==v||null===(t=v.frontmatter)||void 0===t?void 0:t.title,description:null==v?void 0:v.excerpt}),r.createElement(l.Z,null,r.createElement(h,{items:null==v||null===(n=v.tableOfContents)||void 0===n?void 0:n.items}),r.createElement(o.Z,null,r.createElement(b,{meta:null==v?void 0:v.frontmatter}),(null==v?void 0:v.body)&&r.createElement("div",{className:"document"},r.createElement(c.MDXProvider,null,r.createElement(i.MDXRenderer,null,v.body))),r.createElement(Z,{className:"mt-100 mb-10"}),r.createElement(O,{prev:E,next:x})),r.createElement(s.Z,null),r.createElement(u.Z,null),r.createElement(m.Z,null),r.createElement(f.Z,null),r.createElement(p.Z,null)))}}}]);
//# sourceMappingURL=component---src-layouts-post-js-dbfb1d364caca66814d9.js.map