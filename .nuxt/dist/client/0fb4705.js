(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return l})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return v})),r.d(e,"c",(function(){return d})),r.d(e,"e",(function(){return f}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},l=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},o=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},272:function(t,e,r){"use strict";r.r(e);var n=r(4),article=(r(36),r(194)),c={middleware:"authenticated",name:"UserProfile",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,console.log(r),e.next=4,Object(article.c)(r.slug);case 4:return n=e.sent,data=n.data,console.log(data),e.abrupt("return",{article:data.article});case 8:case"end":return e.stop()}}),e)})))()}},l=r(30),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}}),t._v(" "),r("h4",[t._v("Eric Simons")]),t._v(" "),r("p",[t._v("\n            Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn"},[r("i",{staticClass:"ion-plus-round"}),t._v("\n             \n            Follow Eric Simons \n          ")])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:""}},[t._v("My Articles")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Favorited Articles")])])])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:"http://i.imgur.com/Qr71crq.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v("Eric Simons")]),t._v(" "),r("span",{staticClass:"date"},[t._v("January 20th")])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[r("i",{staticClass:"ion-heart"}),t._v(" 29\n            ")])]),t._v(" "),r("a",{staticClass:"preview-link",attrs:{href:""}},[r("h1",[t._v("How to build webapps that scale")]),t._v(" "),r("p",[t._v("This is the description for the post.")]),t._v(" "),r("span",[t._v("Read more...")])])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:"http://i.imgur.com/N4VcUeJ.jpg"}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v("Albert Pai")]),t._v(" "),r("span",{staticClass:"date"},[t._v("January 20th")])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[r("i",{staticClass:"ion-heart"}),t._v(" 32\n            ")])]),t._v(" "),r("a",{staticClass:"preview-link",attrs:{href:""}},[r("h1",[t._v("The song you won't ever stop singing. No matter how hard you try.")]),t._v(" "),r("p",[t._v("This is the description for the post.")]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},[r("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("Music")]),t._v(" "),r("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("Song")])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);