import{_ as B,r as o,o as a,d,c,w as t,e as w,a as s,F as y,D as V,b as n,g as D,f as l,t as i}from"./index.40d5e36b.js";import{R as $}from"./RatingBlock.574c4d91.js";const _=new V("fluidthoughts.net",1,"movies"),G={name:"GenreView",components:{RatingBlock:$},data(){return{genre:[]}},watch:{async"$route.params.id"(r){r&&(this.genre=await _.getGenre([r]))}},async beforeRouteEnter(r,b,g){g(async u=>{await _.openDb(),u.genre=await _.getGenre([u.$route.params.id])})},unmounted(){_.closeDb()}},N=l("br",null,null,-1),C={key:0,style:{display:"inline-block"}},j=l("br",null,null,-1);function z(r,b,g,u,m,E){const f=o("v-col"),p=o("v-row"),k=o("v-img"),h=o("v-icon"),x=o("RatingBlock"),v=o("v-card-text"),R=o("v-card");return a(),d(y,null,[m.genre.length<=0?(a(),c(p,{key:0,align:"center",justify:"center",style:{height:"95vh"}},{default:t(()=>[s(f,{cols:"12",class:"fill-height d-flex flex-column justify-center align-center"},{default:t(()=>[n(" There are no movies in this genre. ")]),_:1})]),_:1})):w("",!0),s(p,{class:"ma-4"},{default:t(()=>[(a(!0),d(y,null,D(m.genre,e=>(a(),c(f,{cols:"12",sm:"4",md:"3",class:"fill-height",key:e.title},{default:t(()=>[s(R,{to:`/movie/${e.id}`,flat:"",class:"text-center"},{default:t(()=>[s(k,{src:e.image,"max-height":"328px"},null,8,["src"]),s(v,null,{default:t(()=>[l("strong",null,i(e.title),1),n(),N,e.reviewRating?(a(),d("div",C,[e.reviewRating>=6?(a(),c(h,{key:0,color:"blue",size:"small"},{default:t(()=>[n("mdi-thumb-up")]),_:1})):(a(),c(h,{key:1,color:"brown",size:"small"},{default:t(()=>[n("mdi-emoticon-poop")]),_:1})),n(" \xA0 "),l("span",null,[l("strong",null,i(e.reviewRating),1),n(" / 10")]),j])):w("",!0),n("\xA0 "),s(x,null,{default:t(()=>[n(i(e.rating),1)]),_:2},1024),n(" - "+i(e.year),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})],64)}const L=B(G,[["render",z]]);export{L as default};
