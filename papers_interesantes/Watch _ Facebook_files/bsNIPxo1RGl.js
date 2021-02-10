if (self.CavalryLogger) { CavalryLogger.start_js(["gY5HG"]); }

__d("CometSearchResultsLoggedResult_loggingModel.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSearchResultsLoggedResult_loggingModel",selections:[{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_unit_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tapped_result_id",storageKey:null}],type:"SearchResultLoggingViewModel",abstractKey:null};e.exports=a}),null);
__d("CometSearchResultsCard.react",["CometCard.react","React","TetraUnitHeader.react","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h={primary:3,secondary:4};function a(a){var c=a.content,d=a.footer,e=a.padding;e=e===void 0?"default":e;var f=a.title,i=a.titleAddOn,j=a.titleAddOnAction;a=a.titleStyle;a=a===void 0?"primary":a;f=f!=null&&f!==""?f:null;f!=null&&e==="none"&&b("recoverableViolation")("CometSearchResultsCard cannot have a title and padding simultaneously, you can only have one of these properties.","search");var k=i!=null&&j!=null;k=k?g.jsx(b("TetraUnitHeader.react"),{action:i,headline:f,level:h[a],onActionPress:j}):g.jsx(b("TetraUnitHeader.react"),{headline:f,level:h[a]});return g.jsx("div",{className:"sjgh65i0","data-testid":void 0,children:g.jsxs(b("CometCard.react"),{background:"white",dropShadow:1,children:[f!=null?g.jsxs("div",{children:[k,g.jsx("div",{className:e==="default"?"dhix69tm sjgh65i0 wkznzc2l tr9rh885":"",children:c})]}):null,f==null?g.jsx("div",{className:e==="default"?"dhix69tm sjgh65i0 wkznzc2l tr9rh885":"",children:c}):null,d!=null?g.jsx("div",{className:e==="default"?"dhix69tm sjgh65i0 wkznzc2l tr9rh885":"",children:d}):null]})})}e.exports=a}),null);
__d("cometSearchResultsWithCard",["CometSearchResultsCard.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){return function(d){return g.jsx(b("CometSearchResultsCard.react"),babelHelpers["extends"]({content:g.jsx(a,babelHelpers["extends"]({},d))},c))}}e.exports=a}),null);
__d("CometSearchResultsQueryContext",["React","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useContext,i=g.createContext();d=function(a){var b=a.children;a=a.context;return g.jsx(i.Provider,{value:a,children:b})};function a(){var a=h(i);if(a==null)throw b("unrecoverableViolation")("No query context found","search");return a}e.exports={CometSearchResultsQueryContextProvider:d,useCometSearchResultsQueryContext:a}}),null);
__d("CometSearchResultsLoggedModuleContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({logModuleClick:null,logModuleInlineAction:null,logSeeMoreClick:null,vpvdLoggerRef:null});e.exports=c}),null);
__d("CometSearchResultsLoggedProfileContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({addEntityToRecentSearches:null});e.exports=c}),null);
__d("CometSearchResultsLoggedResultContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({logResultClick:null,logResultInlineAction:null,vpvdLoggerRef:null});e.exports=c}),null);
__d("useCometSearchResultsLogger",["CometSearchResultsLoggedModuleContext","CometSearchResultsLoggedProfileContext","CometSearchResultsLoggedResultContext","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";b("React");c=b("React");var g=c.useContext,h=c.useMemo;function a(){var a;a=(a=g(b("CometSearchResultsLoggedModuleContext")))!=null?a:{};var c=a.logModuleClick,d=a.logModuleInlineAction,e=a.logSeeMoreClick,f=a.vpvdLoggerRef;a=(a=g(b("CometSearchResultsLoggedResultContext")))!=null?a:{};var i=a.logResultClick,j=a.logResultInlineAction,k=a.vpvdLoggerRef;a=(a=g(b("CometSearchResultsLoggedProfileContext")))!=null?a:{};var l=a.addEntityToRecentSearches;return h(function(){var a;return{logInlineAction:function(a){j!=null?j(a):d!=null?d(a):b("recoverableViolation")("No module or result logging context found for inline action","search")},logResultClick:function(){i!=null?i():c!=null?c():b("recoverableViolation")("No module or result logging context found for click","search"),l!=null&&l()},logSeeMoreClick:function(){if(e==null){b("recoverableViolation")("No module logging context found for see more click","search");return}e()},vpvdLoggerRef:(a=k)!=null?a:f}},[l,c,d,i,j,e,f,k])}e.exports=a}),null);
__d("CometSearchResultsEntityResultName.react",["CometLink.react","CometPageVerificationIcon.react","React","stylex","useCometSearchResultsLogger"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={link:{whiteSpace:"dkezsu63"},verifiedIconContainer:{paddingStart:"b3onmgus"}};function a(a,c){var d=a.name,e=a.url;a=a.verificationBadge;var f=b("useCometSearchResultsLogger")();f=f.logResultClick;return h.jsxs(b("CometLink.react"),{href:e,onClick:f,ref:c,xstyle:i.link,children:[h.jsx("span",{children:d}),a!=null&&a!=="NOT_VERIFIED"?h.jsx("span",{className:(g||(g=b("stylex")))(i.verifiedIconContainer),children:h.jsx(b("CometPageVerificationIcon.react"),{size:"small",verificationBadge:a})}):null]})}e.exports=h.forwardRef(a)}),null);
__d("CometSearchResultsEntityResultNameWithSnippets.react",["React","TetraTextPairing.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.level,d=a.meta,e=a.metaColor,f=a.metaLocation,h=a.name,i=a.reduceEmphasis;i=i===void 0?!1:i;a=a.snippets;return g.jsx(b("TetraTextPairing.react"),{body:a,bodyColor:"secondary",headline:h,headlineLineLimit:2,level:c,meta:d,metaColor:e,metaLocation:f,reduceEmphasis:i})}e.exports=a}),null);
__d("CometSearchResultsEntityResultProfilePicture.react",["CometImageIcon.react","CometLink.react","React","useCometSearchResultsLogger"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.auxiliary,e=a.profilePictureURL,f=a.profileURL;a=a.size;a=a===void 0?60:a;var h=b("useCometSearchResultsLogger")();h=h.logResultClick;return g.jsx(b("CometLink.react"),{"aria-hidden":!0,href:f,onClick:h,ref:c,children:g.jsx(b("CometImageIcon.react"),{auxiliary:d,size:a,src:e})})}e.exports=g.forwardRef(a)}),null);
__d("SearchResultPageLoggingInlineActionFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","search_result_page_logging_inline_action");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("SearchResultPageLoggingItemClickedFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","search_result_page_logging_item_clicked");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("CometSearchResultsLoggerUtil",["SearchResultPageLoggingInlineActionFalcoEvent","SearchResultPageLoggingItemClickedFalcoEvent","gkx"],(function(a,b,c,d,e,f){"use strict";a={logModuleClick:function(a,c){b("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){var b={click_type:"graph_search_results_module_tapped",common:{logging_unit_id:a,session_id:c,timestamp:Date.now().toString()}};return b})},logModuleInlineAction:function(a,c,d){b("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function(){var b={common:{logging_unit_id:a,session_id:c,timestamp:Date.now().toString()},inline_action_name:d};return b})},logResultClick:function(a,c,d){b("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){var b={click_type:"graph_search_results_item_in_module_tapped",common:{logging_unit_id:a,session_id:c,timestamp:Date.now().toString()},unit_id_result_id:d};return b})},logResultInlineAction:function(a,c,d){b("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function(){var b={common:{logging_unit_id:a,session_id:c,timestamp:Date.now().toString()},inline_action_name:d};return b})},logSeeMoreClick:function(a,c){b("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){var b={click_type:"graph_search_results_see_more_on_module_tapped",common:{logging_unit_id:a,session_id:c,timestamp:Date.now().toString()}};return b})}};e.exports=a}),null);
__d("SearchResultPageLoggingViewportViewFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","search_result_page_logging_viewport_view");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("useCometSearchResultsVPVdLogger",["React","SearchResultPageLoggingViewportViewFalcoEvent","gkx","useVPVDImpression"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback;function a(a){var c=a.loggingUnitID,d=a.sessionID,e=a.tappedResultID,f=g(function(a,f){b("SearchResultPageLoggingViewportViewFalcoEvent").logImmediately(function(){var b={common:{logging_unit_id:c,session_id:d,timestamp:Date.now().toString()},is_bootstrap_entity_module:!1,unit_id_result_id:e,vpv_duration:String(f),vpv_start_time:String(a)};return b})},[c,d,e]);a=g(function(a){var b=a.visibleDuration;a=a.visibleTime;f(a,b)},[f]);return b("useVPVDImpression")({isLite:!0,minVisibleTimeMs:1,onVPVDEnd:a})}e.exports=a}),null);
__d("CometSearchResultsLoggedModuleProvider.react",["CometSearchResultsLoggedModuleContext","CometSearchResultsLoggerUtil","React","useCometSearchResultsVPVdLogger"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useMemo;function a(a){var c=a.children,d=a.loggingUnitID,e=a.sessionID;a=a.shouldUseCustomVPVdRef;var f=b("useCometSearchResultsVPVdLogger")({loggingUnitID:d,sessionID:e}),i=f[0];f=h(function(){return{logModuleClick:function(){b("CometSearchResultsLoggerUtil").logModuleClick(d,e)},logModuleInlineAction:function(a){b("CometSearchResultsLoggerUtil").logModuleInlineAction(d,e,a)},logSeeMoreClick:function(){b("CometSearchResultsLoggerUtil").logSeeMoreClick(d,e)},vpvdLoggerRef:i}},[d,e,i]);return g.jsx(b("CometSearchResultsLoggedModuleContext").Provider,{value:f,children:Boolean(a)?c:g.jsx("div",{ref:i,children:c})})}e.exports=a}),null);
__d("CometSearchResultsLoggedProfileProvider.react",["CometSearchEventEmitterContext","CometSearchResultsLoggedProfileContext","CometTypeaheadDataEntryWithMetaData","React","cometUniqueID","gkx"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useContext,i=c.useMemo;d=b("gkx")("969163");function a(a){var c=a.children,d=a.id,e=a.name,f=a.type,j=a.typeaheadProfilePictureURI,k=a.url;a=h(b("CometSearchEventEmitterContext"));var l=a.publishRecentSearchEntryAdded;a=i(function(){return{addEntityToRecentSearches:function(){var a=new(b("CometTypeaheadDataEntryWithMetaData"))({key:b("cometUniqueID")(),label:e,metaData:{logging:{entityID:d,entityType:f.toLowerCase()},markers:new Set(["entity","recent"])},rawData:{id:d,profile:{pictureUrl:j,url:k},type:"recent"}});l(a)}}},[d,e,l,f,j,k]);return g.jsx(b("CometSearchResultsLoggedProfileContext").Provider,{value:a,children:c})}e.exports=a}),null);
__d("CometSearchResultsLoggedResultProvider.react",["CometSearchResultsLoggedResultContext","CometSearchResultsLoggerUtil","React","useCometSearchResultsVPVdLogger"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useMemo;function a(a){var c=a.children,d=a.loggingUnitID,e=a.sessionID,f=a.shouldUseCustomVPVdRef;f=f===void 0?!1:f;var i=a.tappedResultID;a=b("useCometSearchResultsVPVdLogger")({loggingUnitID:d,sessionID:e,tappedResultID:i});var j=a[0];a=h(function(){return{logResultClick:function(){b("CometSearchResultsLoggerUtil").logResultClick(d,e,i)},logResultInlineAction:function(a){b("CometSearchResultsLoggerUtil").logResultInlineAction(d,e,a)},vpvdLoggerRef:j}},[d,e,i,j]);return g.jsx(b("CometSearchResultsLoggedResultContext").Provider,{value:a,children:f?c:g.jsx("div",{ref:j,children:c})})}e.exports=a}),null);
__d("CometSearchResultsLoggedResult.react",["CometRelay","CometSearchResultsLoggedResultProvider.react","React","unrecoverableViolation","CometSearchResultsLoggedResult_loggingModel.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c=a.children,d=a.loggingModel;a=a.shouldUseCustomVPVdRef;if(d==null)throw b("unrecoverableViolation")("Undefined result logging model","search");d=h(g!==void 0?g:g=b("CometSearchResultsLoggedResult_loggingModel.graphql"),d);var e=d.logging_unit_id,f=d.session_id;d=d.tapped_result_id;return i.jsx(b("CometSearchResultsLoggedResultProvider.react"),{loggingUnitID:e,sessionID:f,shouldUseCustomVPVdRef:a,tappedResultID:d,children:c})}e.exports=a}),null);
__d("CometSearchResultsLogger",["React","useCometSearchResultsLogger"],(function(a,b,c,d,e,f){"use strict";b("React");function a(a){a=a.children;return a(b("useCometSearchResultsLogger")())}e.exports=a}),null);
__d("CometSearchResultsCTAButton.react",["CometTooltip.react","React","TetraCircleButton.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.disabled,d=a.icon,e=a.label,f=a.linkProps,h=a.onPress,i=a.testid;i=a.type;a=i===void 0?"normal":i;return d==null||e==null||h==null?null:g.jsx(b("CometTooltip.react"),{tooltip:e,children:g.jsx(b("TetraCircleButton.react"),{color:a==="highlight"?"highlight":"primary",disabled:c,icon:d,label:e,linkProps:f,onPress:h,size:36,testid:void 0,type:a==="highlight"?"deemphasized-overlay":"normal"})})}e.exports=a}),null);
__d("CometSearchResultsCTAButtonGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(){return g.jsx(b("BaseLoadingStateElement.react"),{children:g.jsx(b("BaseGlimmer.react"),{className:"thwo4zme tv7at329 qmr60zad inkptoze qlfml3jp e72ty7fz",index:0})})}e.exports=a}),null);
__d("useDefaultCometSearchCTAAction",["absoluteToRelative","gkx","useCometRouterDispatcher","useCometSearchResultsLogger"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("useCometRouterDispatcher")(),d=b("useCometSearchResultsLogger")(),e=d.logResultClick;return function(){c!=null&&a!=null&&(b("gkx")("1485174")&&e(),c.go(b("absoluteToRelative")(a),{}))}}e.exports=a}),null);
__d("CometSearchResultsPhotoAttribution.react",["React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.attribution;return g.jsx("div",{className:"k4urcfbm gxklfzlk s5rnanwd sj5x9vvc cb02d2ww c34c0qpc j83agx80 rq0escxv r8mrdntq",children:g.jsx(b("TetraText.react"),{color:"white",numberOfLines:2,type:"headline4",children:a})})}e.exports=a}),null);