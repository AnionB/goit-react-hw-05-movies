"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{1341:function(t,e,n){n.d(e,{HI:function(){return f},Je:function(){return s},Tn:function(){return _},t2:function(){return l},yO:function(){return v}});var r=n(5861),a=n(7757),i=n.n(a),u=n(4569),c=n.n(u),o="666fc90c25c7aa270f86bc901474e203";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o),t.abrupt("return",c().get(e).then((function(t){return t.data.results.map((function(t){return{id:t.id,original_title:t.original_title}}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&").concat(e,"&page=1&include_adult=false"),t.abrupt("return",c().get(n).then((function(t){return t.data.results.map((function(t){return{id:t.id,original_title:t.original_title}}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=" https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"),t.abrupt("return",c().get(n).then((function(t){var e=t.data;return{original_title:e.original_title,vote_average:e.vote_average,overview:e.overview,genres:e.genres,poster_path:e.poster_path,release_date:e.release_date}})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=" https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US "),t.abrupt("return",c().get(n).then((function(t){return t.data.cast.map((function(t){return{id:t.id,name:t.name,character:t.character,profile_path:t.profile_path}}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=" https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US "),t.abrupt("return",c().get(n).then((function(t){return t.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},6785:function(t,e,n){n.r(e);var r=n(885),a=n(2791),i=n(6871),u=n(1341),c=n(184);e.default=function(){var t=(0,i.UO)().movieId,e=(0,a.useState)(),n=(0,r.Z)(e,2),o=n[0],s=n[1];if((0,a.useEffect)((function(){(0,u.Tn)(t).then(s)}),[t]),o)return o.length>0?(0,c.jsx)("ul",{children:o.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,c.jsxs)("li",{children:[(0,c.jsxs)("h3",{children:[" Author: ",e]}),(0,c.jsxs)("p",{children:[" ",n]})]},r)}))}):(0,c.jsx)("p",{children:"We don't have any reviews for this movie"})}}}]);
//# sourceMappingURL=785.9246099d.chunk.js.map