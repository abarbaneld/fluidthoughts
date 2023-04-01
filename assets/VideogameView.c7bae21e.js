import{_ as u,r as n,o as l,d as _,a as t,w as e,f as o,t as d,c as v,e as f}from"./index.9d56e0ff.js";const w={name:"VideogameView",data(){return{game:{id:"",title:"",tagLine:"",image:"",esrbRating:"",year:null,developers:[],genre:[],platforms:[],description:"",trailer:"",reviewRating:null,reviewComments:""}}},async created(){try{const a={id:"Destiny2",title:"Destiny 2&colon; Light Fall",tagLine:"",image:"/data/videogames/Destiny2LightFallPoster.png",esrbRating:"T",year:2023,developers:[{name:"Bungie",link:"https://www.bungie.net/"}],genre:["Adventure","Arcade","Shooter"],platforms:[{release:"Feb 28, 2023",name:"Xbox One",link:""},{release:"Feb 28, 2023",name:"PlayStation 4",link:""},{release:"Feb 28, 2023",name:"PlayStation 5",link:""},{release:"Feb 28, 2023",name:"PC (Microsoft Windows)",link:""},{release:"Feb 28, 2023",platform:"Xbox Series X|S",link:""}],description:"<p>Shattered glass glints in the starlight. Soldiers of the Shadow Legion battle with Guardians under the unmistakable shadows of the fleet overhead\u2014the Witness and its newest disciple are here. Find strength in the Light, arm yourself with Darkness, and peer beyond the veil as you raise the stakes on an already unforgettable campaign. Travel to a destination unlike any you've explored in Destiny 2. Cross paths with bone-chilling Tormentors and valiant Cloud Striders, join the fight against the Shadow Legion, and prevent devastation in the technologically advanced secret city of Neomuna.</p>",trailer:"https://www.youtube.com/embed/i-7Cq7LLPr4",reviewRating:9,reviewComments:"<p></p><p></p>"};this.game=a;return}catch{console.error(`${this.$route.params.id} JSON not found`)}this.$router.push("/NotFound")}},y={id:"page"},b={style:{"font-size":"124px"},class:"white--text"},k={style:{"font-size":"28px","font-weight":"bold"},class:"white--text"},x=["innerHTML"];function S(a,L,C,F,i,V){const s=n("v-card"),r=n("v-row"),c=n("v-sheet"),h=n("v-img"),g=n("v-card-text"),m=n("v-col"),p=n("v-container");return l(),_("div",y,[t(h,{src:i.game.image,height:"300px",cover:""},{default:e(()=>[t(c,{color:"rgba(0, 0, 0, 0.5)",transparent:"",height:"100%",tile:""},{default:e(()=>[t(r,{class:"fill-height",align:"center",justify:"center"},{default:e(()=>[t(s,{flat:"",class:"display-3 px-4",color:"rgba(0, 0, 0, 0.5)"},{default:e(()=>[o("div",b,d(i.game.title),1),o("div",k,d(a.subTitle),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["src"]),t(p,null,{default:e(()=>[t(r,null,{default:e(()=>[t(m,null,{default:e(()=>[t(s,null,{default:e(()=>[a.body?(l(),v(g,{key:0},{default:e(()=>[o("div",{innerHTML:a.body},null,8,x)]),_:1})):f("",!0)]),_:1})]),_:1})]),_:1})]),_:1})])}const N=u(w,[["render",S]]);export{N as default};
