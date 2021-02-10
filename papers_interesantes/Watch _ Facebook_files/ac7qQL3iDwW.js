if (self.CavalryLogger) { CavalryLogger.start_js(["5wWNR"]); }

__d("CometMenuItemSelectable.react",["ix","CometMenuItemBase.react","CometMenuItemIcon.react","CometToggle.react","React","TetraIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function i(a,c){return!a?null:c?h.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("498146"),20)}):h.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(g("477820"),20)})}function a(a,c){a.aux;var d=a.icon,e=a.iconColor,f=a.iconStyle,g=a.isSelected,j=babelHelpers.objectWithoutPropertiesLoose(a,["aux","icon","iconColor","iconStyle","isSelected"]);if(d)return h.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},j,{"aria-checked":g,aux:a.aux!=null?a.aux(g):i(g,!0),iconNode:h.jsx(b("CometMenuItemIcon.react"),{icon:d,iconColor:e,use:f}),ref:c}));else{d=a.aux!=null?a.aux(g):i(g,!1);return h.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},j,{"aria-checked":g,aux:d?h.jsx("div",{className:"irj2b8pg ew0dbk1b",children:d}):void 0,ref:c}))}}e.exports=h.forwardRef(a)}),null);
__d("CometStickyHeader.react",["BaseScrollableAreaContext","CometBase.react","CometContextualLayerAnchorRoot.react","CometViewportMarginsContext","HiddenSubtreePassiveContext","React","intersectionObserverEntryIsIntersecting","stylex","useIntersectionObserver"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useContext,j=c.useMemo,k=c.useRef,l={root:{overflowAnchor:"rek2kq2y",position:"lpgh02oy",zIndex:"tkr6xdv7"}};function a(a,c){var d=a.children,e=a.onStickyActive,f=a.onStickyChange,m=a.onStickyInactive;a.style;var n=a.topOffset;n=n===void 0?0:n;var o=a.xstyle,p=babelHelpers.objectWithoutPropertiesLoose(a,["children","onStickyActive","onStickyChange","onStickyInactive","style","topOffset","xstyle"]),q=k(!1),r=i(b("BaseScrollableAreaContext")),s=i(b("CometViewportMarginsContext")),t=r[r.length-1],u=i(b("HiddenSubtreePassiveContext")),v=n+(t!=null?0:s.top);r=b("useIntersectionObserver")(h(function(a){var c=u.getCurrentState();c=c.hiddenOrBackgrounded;if(c)return;c=!b("intersectionObserverEntryIsIntersecting")(a);q.current!==c&&(f&&f(c),c?e&&e():m&&m(),q.current=c)},[u,e,f,m]),j(function(){return{root:function(){return t!=null?t.getDOMNode():null},rootMargin:{bottom:0,left:0,right:0,top:-v},threshold:0}},[t,v]));return g.jsxs(g.Fragment,{children:[g.jsx(b("CometBase.react"),{ref:r}),g.jsx(b("CometBase.react"),babelHelpers["extends"]({},p,{ref:c,style:babelHelpers["extends"]({},a.style,{top:v}),xstyle:[l.root,o],children:g.jsx(b("CometContextualLayerAnchorRoot.react"),{children:d})}))]})}e.exports=g.forwardRef(a)}),null);
__d("CometResponsiveColumns.react",["BaseRow.react","BaseRowItem.react","CometFeedWidthStyles","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g;d=b("CometFeedWidthStyles").getResponsiveColumnWidthStyles;var h=b("React"),i={container:{boxSizing:"rq0escxv",maxWidth:"d2edcug0",width:"k4urcfbm"},containerPadding:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},content:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"lhclo0ds",justifyContent:"taijpn5t"},negativeMargin:{marginTop:"sv5sfqaa",marginEnd:"o22cckgh",marginBottom:"obtkqiv7",marginStart:"fop5sh7t"},reverse:{flexWrap:"kbz25j0m"}},j=d();function a(a){var c=a.children,d=a.containerWidth,e=a.reverseColumns;e=e===void 0?!1:e;var f=a.testid;f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","containerWidth","reverseColumns","testid","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(i.container,d==="DEFAULT"&&j.container,d==="DEFAULT"&&i.containerPadding,f),"data-testid":void 0,children:h.jsx(b("BaseRow.react"),{xstyle:[i.content,e&&i.reverse,i.negativeMargin],children:c})}))}var k={base:{marginTop:"aov4n071",marginEnd:"oi9244e8",marginBottom:"bi6gxh9e",marginStart:"h676nmdw",":empty":{display:"aghb5jc5"}}};function c(a){var c=a.children,d=a.columnType,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","columnType","xstyle"]);return h.jsx(b("BaseRowItem.react"),babelHelpers["extends"]({},a,{expanding:!0,useDeprecatedStyles:!0,xstyle:[k.base,d==="FEED"&&j.FEED,d==="FULL"&&j.FULL,d==="SECONDARY"&&j.SECONDARY,e],children:c}))}e.exports={Column:c,Container:a}}),null);
__d("CometStickyView.react",["CometRouteRenderType","CometContextualLayerAnchorRoot.react","CometViewportMarginsContext","HiddenSubtreePassiveContext","React","mergeRefs","stylex","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";var g,h=b("CometRouteRenderType").useIsPushView,i=b("React");c=b("React");var j=c.useCallback,k=c.useContext,l=c.useEffect,m=c.useMemo,n=c.useRef,o=c.useState,p={sticky:{position:"lpgh02oy"}},q=((d=window.CSS)==null?void 0:d.supports)&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"));function a(a){var c=a.bottom,d=a.children,e=a.tagName;e=e===void 0?"div":e;var f=a.top,r=a.topOffset;a=a.xstyle;var s=k(b("HiddenSubtreePassiveContext")),t=h(),u=k(b("CometViewportMarginsContext")),v=r!=null?r+u.top:(r=f)!=null?r:t?16:76;u=o(c==null?v:null);f=u[0];var w=u[1],x=j(function(a){return c!=null&&w(Math.floor(Math.min(v,window.innerHeight-c-a)))},[c,v]),y=b("useResizeObserver")(function(a){var b=s.getCurrentState();b=b.hiddenOrBackgrounded;if(b)return;c!=null&&x(a.height)}),z=n(null);r=m(function(){return b("mergeRefs")(y,z)},[y]);l(function(){if(c!=null){var a=function(){var a=s.getCurrentState();a=a.hidden;if(a)return;a=z.current;if(a==null)return;x(a.getBoundingClientRect().height)};window.addEventListener("resize",a,{passive:!0});return function(){window.removeEventListener("resize",a,{passive:!0})}}},[c,s,x]);t=f!=null&&q?{top:f}:{};return i.jsx(e,{className:(g||(g=b("stylex")))(a,p.sticky),ref:c!=null?r:null,style:t,children:i.jsx(b("CometContextualLayerAnchorRoot.react"),{children:d})})}e.exports=a}),null);
__d("CometTabMenu.react",["CometMenu.react","CometMenuItemSelectable.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.menuItems;return g.jsx(b("CometMenu.react"),{children:a.map(function(a,c){var d=a.badge,e=a.disabled,f=a.icon,h=a.label,i=a.linkProps,j=a.onHoverIn,k=a.onHoverOut,l=a.onPress,m=a.onPressIn;a=a.selected;return g.jsx(b("CometMenuItemSelectable.react"),{badge:d,disabled:e,href:(d=i==null?void 0:i.url)!=null?d:void 0,icon:f,isSelected:(e=a)!=null?e:!1,onClick:l,onHoverIn:j,onHoverOut:k,onPressIn:m,primaryText:h,role:"menuitemradio",routeTarget:i==null?void 0:i.routeTarget,target:i==null?void 0:i.target,testid:void 0},c)})})}e.exports=a}),null);
__d("TetraishEntityHeaderScrollToContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.createContext({scrollToTop:function(a,b){}})}),null);