(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[8610],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),i=a(6742),m=a(9732),c=a(7277),o=a(1217),u=a(6146),d="blogPostTitle_d4p0",g="blogPostData_-Im+",h="blogPostDetailsFull_xD8n";var p=function(e){var t,a,p,b=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,v=e.frontMatter,f=e.metadata,N=e.truncated,_=e.isBlogPostPage,k=void 0!==_&&_,Z=f.date,w=f.formattedDate,T=f.permalink,P=f.tags,I=f.readingTime,M=f.title,y=f.editUrl,L=v.author,x=v.image,C=v.keywords,U=v.author_url||v.authorURL,z=v.author_title||v.authorTitle,F=v.author_image_url||v.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:C,image:x}),r.createElement("article",{className:k?void 0:"margin-bottom--xl"},(p=k?"h1":"h2",r.createElement("header",null,r.createElement(p,{className:d},k?M:r.createElement(i.Z,{to:T},M)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:Z},w),I&&r.createElement(r.Fragment,null," \xb7 ",b(I))),r.createElement("div",{className:"avatar margin-vert--md"},F&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:U},r.createElement("img",{src:F,alt:L})),r.createElement("div",{className:"avatar__intro"},L&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:U},L)),r.createElement("small",{className:"avatar__subtitle"},z)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},E)),(P.length>0||N)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[h]=k,t))},P.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return r.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&y&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:y})),!k&&N&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+M},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),l=a(6010),n=a(6742),s="sidebar_q+wC",i="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",c="sidebarItem_cjdF",o="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:u},e.title))}))))}},9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(2135),n=a(3146),s=a(6742),i=a(5601),m=a(4973),c=a(9732);t.default=function(e){var t,a=e.metadata,o=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,h=a.count,p=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),b=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(h),tagName:g});return r.createElement(l.Z,{title:b,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(i.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,b),r.createElement(s.Z,{href:d},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(7294),l=a(4973),n=a(2122),s=a(9756),i=a(6010),m="iconEdit_mS5F",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(o,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);