if (self.CavalryLogger) { CavalryLogger.start_js(["sps8N"]); }

__d("CometBadgeSection_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"renderLocation",type:"StoryRenderLocation"}],kind:"Fragment",metadata:null,name:"CometBadgeSection_story",selections:[{alias:null,args:[{kind:"Variable",name:"location",variableName:"renderLocation"}],concreteType:"CometStorySections",kind:"LinkedField",name:"comet_sections",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometFeedUserVerifiedBadgeStrategy","CometFeedPageVerifiedBadgeStrategy"]}],concreteType:null,kind:"LinkedField",name:"badge",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometBadgeSection_story",fragmentName:"CometFeedUserVerifiedBadgeStrategy_badge",fragmentPropName:"badge",kind:"ModuleImport"}],type:"CometFeedUserVerifiedBadgeStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometBadgeSection_story",fragmentName:"CometFeedPageVerifiedBadgeStrategy_badge",fragmentPropName:"badge",kind:"ModuleImport"}],type:"CometFeedPageVerifiedBadgeStrategy",abstractKey:null}],storageKey:'badge(supported:["CometFeedUserVerifiedBadgeStrategy","CometFeedPageVerifiedBadgeStrategy"])'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryTitleWithActorStrategy_contextTitle$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},e={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},f={kind:"InlineFragment",selections:[e,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};e={kind:"InlineFragment",selections:[e,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null};var g=[{kind:"Variable",name:"location",variableName:"renderLocation"}],h={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},j={kind:"InlineFragment",selections:[b],type:"Node",abstractKey:"__isNode"};return{kind:"SplitOperation",metadata:{derivedFrom:"CometFeedStoryTitleWithActorStrategy_contextTitle"},name:"CometFeedStoryTitleWithActorStrategy_contextTitle$normalization",selections:[{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[a,c,b,{kind:"TypeDiscriminator",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},a,{kind:"InlineFragment",selections:[d],type:"Page",abstractKey:null},f,e],type:"Entity",abstractKey:"__isEntity"}],storageKey:null},{alias:null,args:g,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[h,i,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},j],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[h,i,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[h,i,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[a,{kind:"InlineFragment",selections:[b,c],type:"User",abstractKey:null},j],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[a,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[a,b,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[d,{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},f,e,j],storageKey:null},h,i],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:g,concreteType:"CometStorySections",kind:"LinkedField",name:"comet_sections",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["GroupMemberProfileActionLink","GroupMemberAnonProfileActionLink"]}],concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryActorLink_story",fragmentName:"CometFeedStoryTitleGroupMemberActor_groupMemberProfileActionLink",fragmentPropName:"groupMemberProfileActionLink",kind:"ModuleImport"}],type:"GroupMemberProfileActionLink",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryActorLink_story",fragmentName:"CometFeedStoryTitleGroupAnonProfileActor_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"GroupMemberAnonProfileActionLink",abstractKey:null}],storageKey:'action_link(supported:["GroupMemberProfileActionLink","GroupMemberAnonProfileActionLink"])'},{alias:null,args:[{kind:"Literal",name:"supported",value:["CometFeedUserVerifiedBadgeStrategy","CometFeedPageVerifiedBadgeStrategy"]}],concreteType:null,kind:"LinkedField",name:"badge",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"CometBadgeSection_story",fragmentName:"CometFeedUserVerifiedBadgeStrategy_badge",fragmentPropName:"badge",kind:"ModuleImport"}],type:"CometFeedUserVerifiedBadgeStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometBadgeSection_story",fragmentName:"CometFeedPageVerifiedBadgeStrategy_badge",fragmentPropName:"badge",kind:"ModuleImport"}],type:"CometFeedPageVerifiedBadgeStrategy",abstractKey:null}],storageKey:'badge(supported:["CometFeedUserVerifiedBadgeStrategy","CometFeedPageVerifiedBadgeStrategy"])'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometBadgeSection.react",["CometFeedMatchRenderer.react","CometRelay","React","CometBadgeSection_story.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c;a=h(g!==void 0?g:g=b("CometBadgeSection_story.graphql"),a.story);c=a==null?void 0:(c=a.comet_sections)==null?void 0:c.badge;return i.jsx(b("CometFeedMatchRenderer.react"),{match:c,section:"badge",trackingData:a==null?void 0:a.encrypted_tracking})}e.exports=a}),null);