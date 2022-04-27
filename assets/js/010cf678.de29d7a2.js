"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[739],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,f=d["".concat(s,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1652:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},s="What is a Deck?",u={unversionedId:"deck/deck",id:"deck/deck",title:"What is a Deck?",description:"Deck is a new concept coming with Getdeck. A simple attempt to explain it would be:",source:"@site/docs/deck/deck.md",sourceDirName:"deck",slug:"/deck/",permalink:"/docs/deck/",editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/deck/deck.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Getdeck Documentation",permalink:"/docs/deck/intro"},next:{title:"Installation",permalink:"/docs/deck/installation"}},l={},p=[],d={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-a-deck"},"What is a Deck?"),(0,i.kt)("p",null,"Deck is a new concept coming with ",(0,i.kt)("strong",{parentName:"p"},"Getdeck"),". A simple attempt to explain it would be:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A Deck is the smallest installable unit in Getdeck")),(0,i.kt)("p",null,"To stay with the nautical metaphor around Kubernetes: You may work on a large ship and that very ship is\ndivided into multiple decks. You can work one day on deck A - and on deck B the other day. However, since both decks\nare on the same ship they share a common ground. The Getdeck team decided to call installable units a deck,\nbecause even the smallest ships has at least one deck. Decks on a ship usually serve different purposes or offer\ncertain capabilities and so are decks in Getdeck."),(0,i.kt)("p",null,"Decks do share common components which might end up as a production platform playing together. However, since it is not\nalways feasible to run the entire production infrastructure on your Pentium 3 notebook, decks form a certain excerpt for\nyou to work on. Just enough to get your work done in the required context. If you need another deck, ask your operators\nto create it upon your requirements or go on and define it yourself."),(0,i.kt)("p",null,"Find deck examples at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/deckfile/specs"},"Deckfile specification")," page."),(0,i.kt)("p",null,"Providing a ",(0,i.kt)("em",{parentName:"p"},"Deckfile")," is crucial for working with Getdeck. It's like a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," for Kubernetes-based development\nenvironments. However, it is more difficult to compose a Kubernetes workload than a docker-compose file, as it requires\nthe knowledge of a Kubernetes practitioner. Please read on how to write a Deckfile to specify a Kubernetes-based development\nwhich is close to your production system by using the workload descriptors you potentially already use."))}k.isMDXComponent=!0}}]);