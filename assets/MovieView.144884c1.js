import{_ as w,R as L,r as l,o as u,c as y,w as e,a as t,f as m,t as o,d,e as v,b as _}from"./index.d886bc38.js";const R={name:"PageView",data(){return{title:"",tagLine:"",image:"",rating:"",description:"",year:"",genre:[],length:"",featured:!1,reviewRating:0,reviewComments:""}},async created(){try{const n=await L.loadMovie(this.$route.params.id);console.log("Movie",n,this.$route.params.id),this.title=n.title,this.tagLine=n.tagLine,this.image=n.image,this.rating=n.rating,this.description=n.description,this.year=n.year,this.genre=n.genre,this.length=n.length,this.featured=n.featured,this.reviewRating=n.reviewRating,this.reviewComments=n.reviewComments;return}catch{console.error(`${this.$route.params.id} Movie not found`)}this.$router.push("/NotFound")}},C={key:0},M=["innerHTML"],V=["innerHTML"];function k(n,x,N,T,i,B){const f=l("v-img"),c=l("v-col"),s=l("v-list-item-title"),r=l("v-list-item-content"),a=l("v-list-item"),g=l("v-list"),h=l("v-row"),p=l("v-card");return u(),y(p,{class:"ma-4"},{default:e(()=>[t(h,null,{default:e(()=>[t(c,null,{default:e(()=>[t(f,{src:i.image},null,8,["src"])]),_:1}),t(c,null,{default:e(()=>[m("h2",null,o(i.title),1),i.tagLine?(u(),d("h4",C,o(i.tagLine),1)):v("",!0),m("div",{innerHTML:i.description},null,8,M),t(g,null,{default:e(()=>[t(a,null,{default:e(()=>[t(r,null,{default:e(()=>[t(s,null,{default:e(()=>[_("Rated: "+o(i.rating),1)]),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(r,null,{default:e(()=>[t(s,null,{default:e(()=>[_("Year: "+o(i.year),1)]),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(r,null,{default:e(()=>[t(s,null,{default:e(()=>[_("Genre: "+o(i.genre.join(", ")),1)]),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(r,null,{default:e(()=>[t(s,null,{default:e(()=>[_("Length: "+o(i.length),1)]),_:1})]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(r,null,{default:e(()=>[t(s,null,{default:e(()=>[_("Review Rating: "+o(i.reviewRating),1)]),_:1})]),_:1})]),_:1})]),_:1}),i.reviewComments?(u(),d("div",{key:1,innerHTML:i.reviewComments},null,8,V)):v("",!0)]),_:1})]),_:1})]),_:1})}const b=w(R,[["render",k]]);export{b as default};
