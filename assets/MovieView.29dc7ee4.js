import{_ as p,o as c,d as _,g as V,r as s,f as i,c as g,w as t,b as l,t as r,e as B,R as H,a as e,h as I,F}from"./index.00cebd3a.js";const S={name:"RatingBlock"},j={class:"rating"};function D(n,h,a,f,o,k){return c(),_("div",j,[V(n.$slots,"default",{},void 0,!0)])}const E=p(S,[["render",D],["__scopeId","data-v-af143218"]]);const G={name:"RankingBlock",props:["rating"]},O={key:0},P={class:"ma-2"},W={class:"pr-2 pt-2 pb=2 ranking"},Y={key:0},q={key:1};function z(n,h,a,f,o,k){const d=s("v-icon");return a.rating!==null?(c(),_("div",O,[i("div",null,[i("span",P,[a.rating>=6?(c(),g(d,{key:0,color:"blue"},{default:t(()=>[l("mdi-thumb-up")]),_:1})):(c(),g(d,{key:1,color:"brown"},{default:t(()=>[l("mdi-emoticon-poop")]),_:1}))]),i("span",W,[i("strong",null,r(a.rating),1),l("/10 ")])]),i("div",null,[a.rating>=6?(c(),_("strong",Y,"It's good!")):(c(),_("strong",q,"It sucked!"))])])):B("",!0)}const A=p(G,[["render",z],["__scopeId","data-v-93d9c46c"]]),J={name:"PageView",components:{RatingBlock:E,RankingBlock:A},data(){return{title:"",tagLine:"",image:"",rating:"",description:"",year:"",genre:[],length:"",featured:!1,reviewRating:0,reviewComments:"",services:[]}},async created(){try{const n=await H.loadMovie(this.$route.params.id);console.log("Movie",n,this.$route.params.id),this.title=n.title,this.tagLine=n.tagLine,this.image=n.image,this.rating=n.rating,this.description=n.description,this.year=n.year,this.genre=n.genre,this.length=n.length,this.featured=n.featured,this.services=n.services,this.reviewRating=n.reviewRating,this.reviewComments=n.reviewComments;return}catch{console.error(`${this.$route.params.id} Movie not found`)}this.$router.push("/NotFound")}},K={key:0},Q=["innerHTML"],U=i("strong",null,"Year:",-1),X=i("strong",null,"Genre:",-1),Z=i("strong",null,"Length:",-1),ee=i("h3",null,"Review",-1),te=["innerHTML"],ne={key:1},oe={class:"mr-2"};function se(n,h,a,f,o,k){const d=s("v-img"),u=s("v-col"),L=s("RatingBlock"),m=s("v-list-item-title"),v=s("v-list-item"),y=s("v-list"),$=s("RankingBlock"),w=s("v-row"),b=s("v-list-subheader"),x=s("v-icon"),C=s("v-btn"),M=s("v-divider"),N=s("v-card");return c(),g(N,{class:"ma-4"},{default:t(()=>[e(w,null,{default:t(()=>[e(u,{cols:"6",sm:"12",md:"6"},{default:t(()=>[e(d,{src:o.image},null,8,["src"])]),_:1}),e(u,{cols:"6",sm:"12",md:"6"},{default:t(()=>[i("h2",null,r(o.title),1),o.tagLine?(c(),_("h4",K,r(o.tagLine),1)):B("",!0),i("h4",null,[l("Rated: "),e(L,null,{default:t(()=>[l(r(o.rating),1)]),_:1})]),i("div",{class:"mt-4",innerHTML:o.description},null,8,Q),e(y,{density:"compact"},{default:t(()=>[e(v,null,{default:t(()=>[e(m,null,{default:t(()=>[U,l(" "+r(o.year),1)]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(m,null,{default:t(()=>[X,l(" "+r(o.genre.join(", ")),1)]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(m,null,{default:t(()=>[Z,l(" "+r(o.length),1)]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(u,{cols:"2"},{default:t(()=>[e($,{rating:o.reviewRating},null,8,["rating"])]),_:1}),e(u,{class:"pt-4"},{default:t(()=>[ee,o.reviewComments?(c(),_("div",{key:0,innerHTML:o.reviewComments},null,8,te)):(c(),_("div",ne,"Opps sorry! There is no review."))]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(b,null,{default:t(()=>[l("Services")]),_:1}),(c(!0),_(F,null,I(o.services,(R,T)=>(c(),g(v,{key:T},{default:t(()=>[e(m,null,{default:t(()=>[i("strong",oe,r(R.service),1),e(C,{href:R.serviceLink,color:"blue",variant:"outlined",rounded:"pill"},{default:t(()=>[e(x,{icon:"mdi-play-circle"}),l(" Watch Now ")]),_:2},1032,["href"])]),_:2},1024),e(M,{class:"mt-2"})]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}const ce=p(J,[["render",se]]);export{ce as default};
