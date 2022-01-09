"use strict";(self.webpackChunkgatsby_starter_spaceful=self.webpackChunkgatsby_starter_spaceful||[]).push([[77],{7407:function(e,t,n){var a=n(7294),r=n(3271);t.Z=function(e){var t=e.children,n=(0,r.tH)(),l=n.width,c=n.height;return a.createElement("div",{style:{minWidth:l>160?l:"160px",minHeight:c},className:"app"},t)}},8674:function(e,t,n){var a=n(7294),r=n(7332),l=n(9695),c=n(3271);t.Z=function(){var e=(0,c.vO)(),t=e.scrollBottom,n=e.scrollTop,s=e.scrolledUp;return a.createElement(r.Z,{bottom:"1rem",right:"1rem",onClick:function(){return s?n():t()},onKeyDown:function(){return s?n():t()},className:"btn btn-round btn-transparent"},a.createElement("div",{className:"fast-scroll-btn col justify-content-center align-items-center"},a.createElement(l.Z,{iconName:s?"arrow-up-thin":"arrow-down-thin"}),a.createElement("span",{className:"sr-only"},"Fast scroll")))}},7332:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.top,n=e.right,r=e.bottom,l=e.left,c=e.children,s=e.className,o=e.onClick,i=e.onKeyDown;return a.createElement("div",{className:s+" pos-fixed",style:{top:t||null,right:n||null,bottom:r||null,left:l||null},onClick:o,onKeyDown:i},c)}},4226:function(e,t,n){var a=n(7294);t.Z=function(){return a.createElement("footer",null,a.createElement("div",{className:"pa-10 text-08 mb-10"},"© Galacsh, Built with Gatsby-starter-spaceful"))}},1836:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return a.createElement("div",{className:"container "+r},a.createElement("div",null,t))}},9695:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.iconName,n=e.className,r=void 0===n?"":n;return a.createElement("i",{className:"mdi mdi-"+t+" "+r})}},9439:function(e,t,n){var a=n(7294),r=n(5444),l=function(e){var t=e.post;return a.createElement("div",{className:"post-item row",onClick:function(){return(0,r.navigate)(t.path)}},a.createElement("div",{className:"pa-10 row justify-content-center align-items-center font-400"},t.month," ",t.day),a.createElement("div",{className:"col justify-content-center flex-1 font-700"},t.title))};t.Z=function(e){var t=e.posts;if(null==t||0===t.length)return a.createElement("div",{className:"px-10 ma-0 post-list"},"No posts yet");var n=null;return a.createElement("div",{className:"ma-0 post-list"},t.map((function(e,t){return n===e.year?a.createElement(l,{post:e,key:"post-"+t}):(n=e.year,a.createElement("div",{key:"post-"+t},a.createElement("h2",{className:"text-10 font-700 mt-20 mb-10 mx-10 post-year"},e.year),a.createElement(l,{post:e})))})))}},2394:function(e,t,n){var a=n(5444),r=n(7294),l=n(7332),c=n(9695);t.Z=function(e){var t=e.isHome,n=void 0!==t&&t;return r.createElement(l.Z,{top:"1rem",left:"1rem"},r.createElement("div",{className:"row"},r.createElement("div",{className:"btn btn-round btn-transparent mr-10",onClick:function(){return(0,a.navigate)(-1)},onKeyDown:function(){return(0,a.navigate)(-1)}},r.createElement("div",{className:"nav-back-btn col justify-content-center align-items-center"},r.createElement(c.Z,{iconName:"chevron-left"}))),!n&&r.createElement("div",{className:"btn btn-round btn-transparent",onClick:function(){return(0,a.navigate)("/")},onKeyDown:function(){return(0,a.navigate)("/")}},r.createElement("div",{className:"nav-home-btn col justify-content-center align-items-center"},r.createElement(c.Z,{iconName:"home-outline"})))))}},7513:function(e,t,n){var a=n(7294),r=n(3271);t.Z=function(){var e=(0,r.vO)(0).scrollPercentage;return a.createElement("div",{className:"pos-fixed scroll-indicator"},a.createElement("div",{style:{width:e+"%"}}),a.createElement("span",{className:"sr-only"},"Scroll Percentage Indicator"))}},7429:function(e,t,n){var a=n(7294),r=n(7332),l=n(9695),c=n(3271);t.Z=function(){var e=(0,c.Fg)(),t=e.isDarkMode,n=e.toggleTheme;return a.createElement(r.Z,{top:"1rem",right:"1rem",onClick:function(){return n()},onKeyDown:function(){return n()},className:"btn btn-round btn-transparent"},a.createElement("div",{className:"toggle-theme-btn col justify-content-center align-items-center"},a.createElement(l.Z,{iconName:t?"weather-sunny":"weather-night"}),a.createElement("span",{className:"sr-only"},"Toggle theme")))}},666:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),r=n(6634),l=n(7407),c=n(1836),s=n.p+"static/profile-87198e829b91c75ffbdc08829f409e6b.png",o=function(){return a.createElement("div",{className:"profile-area col justify-content-center align-items-center mx-10 pt-100 mb-100"},a.createElement("div",{className:"col justify-content-center"},a.createElement("div",{className:"col align-items-center"},a.createElement("img",{className:"profile-img mb-10",src:s,alt:"Profile"}),a.createElement("h1",{className:"profile-name text-30 font-700"},"Galacsh"),a.createElement("h2",{className:"profile-mail text-10 font-400"},"galacsh.dev@gmail.com"))))},i=function(){return a.createElement("div",{className:"mb-50 mx-10"},a.createElement("h1",{className:"home-intro"},a.createElement("span",{className:"highlight"},"Hello!👋 I'm Galacsh. "),"This site is a demo of Gatsby starter 🚀 for blogging. This starter,"," ",a.createElement("span",{className:"highlight"},"Gatsby-Starter-Spaceful ")," supports minimal functionalities for blogging."))},m=n(5444),u=n(9695),f=function(){return a.createElement("div",{className:"row justify-content-center mb-50 mx-10"},a.createElement("div",{className:"px-10 py-05 btn btn-round btn-primary font-500 row align-items-center",onClick:function(){return(0,m.navigate)("/search")},onKeyDown:function(){return(0,m.navigate)("/search")}},"Search Posts",a.createElement(u.Z,{iconName:"arrow-right",className:"text-15 ml-05"})))},p=n(9439),d=n(4050),h=function(){return a.createElement("div",{className:"py-50 mb-65"},a.createElement("h1",{className:"text-15 mx-10 pb-0 ma-0 mb-10 post-list-title"},"All posts"),a.createElement(p.Z,{posts:d.posts}))},v=n(4226),E=n(8674),g=n(7429),N=n(7513),y=n(2394),b=function(){return a.createElement(a.Fragment,null,a.createElement(r.Z,{title:"Home"}),a.createElement(l.Z,null,a.createElement(c.Z,null,a.createElement(o,null),a.createElement(i,null),a.createElement(f,null)),a.createElement(c.Z,null,a.createElement(h,null)),a.createElement(v.Z,null),a.createElement(E.Z,null),a.createElement(g.Z,null),a.createElement(N.Z,null),a.createElement(y.Z,{isHome:!0})))}},4050:function(e){e.exports=JSON.parse('{"count":4,"posts":[{"path":"/post/sample/markdown","title":"Markdown Sample","year":"2022","month":"Jan","day":"09","tags":["Markdown","MD","With tag"]},{"path":"/post/see","title":"See","year":"2021","month":"Mar","day":"01","tags":null},{"path":"/post/02_how/slugs","title":"How Slugs","year":"2021","month":"Feb","day":"01","tags":["With tag"]},{"path":"/post/are-configured","title":"Are Configured","year":"2021","month":"Jan","day":"01","tags":null}],"tags":["Markdown","MD","With tag"]}')}}]);
//# sourceMappingURL=component---src-layouts-home-js-c0259a78835b72f55187.js.map