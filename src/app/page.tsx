"use client";
import { useState, useEffect, useRef } from "react";
const C={base:"#0E1A12",surface:"#14241A",panel:"#1A2E22",border:"rgba(240,248,244,0.08)",green:"#2D8B5A",greenGlow:"rgba(45,139,90,0.25)",lime:"#8DD44A",limeGlow:"rgba(141,212,74,0.2)",gold:"#E8C84A",goldGlow:"rgba(232,200,74,0.2)",cream:"#F0F8F4",muted:"rgba(240,248,244,0.5)",dim:"rgba(240,248,244,0.28)"};
const F={display:"'Playfair Display',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif",mono:"'DM Mono',monospace"};
const TICKETS=[{date:"Aug 8, 2026",url:"https://www.eventbrite.com/e/pawchella-summer-tickets-1983440350481",note:"Summer Edition",city:"Atlanta, GA"}];
function useInView(t=0.1){const ref=useRef<HTMLDivElement>(null);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function Reveal({children,d=0}:{children:React.ReactNode;d?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateY(0)":"translateY(40px)",opacity:v?1:0,transition:`all 1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}
const Grain=()=><div style={{position:"absolute",inset:0,opacity:0.035,pointerEvents:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>;
function Nav(){const[sc,setSc]=useState(false);useEffect(()=>{const h=()=>setSc(window.scrollY>60);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);return(<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:sc?"12px clamp(24px,4vw,60px)":"24px clamp(24px,4vw,60px)",display:"flex",justifyContent:"space-between",alignItems:"center",background:sc?`${C.base}F5`:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}`:"none",transition:"all 0.5s"}}><div><div style={{fontFamily:F.mono,fontSize:"7px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.lime,marginBottom:"2px"}}>A KHG HugLife Event</div><span style={{fontFamily:F.display,fontSize:"20px",fontWeight:700,fontStyle:"italic",color:C.cream,letterSpacing:"0.04em"}}>Pawchella</span></div><div className="nl" style={{display:"flex",gap:"24px",alignItems:"center"}}><a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.lime,padding:"10px 24px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a></div></nav>);}
function Hero(){const[ld,setLd]=useState(false);useEffect(()=>{setTimeout(()=>setLd(true),100)},[]);return(<section style={{position:"relative",width:"100%",height:"100vh",overflow:"hidden",background:C.base,display:"flex",alignItems:"flex-end"}}><div style={{position:"absolute",inset:0}}><div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 40% 60%, ${C.greenGlow} 0%, transparent 55%)`}}/><div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 70% 30%, ${C.goldGlow} 0%, transparent 50%)`}}/><Grain/></div><div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(14,26,18,0.97) 0%, rgba(14,26,18,0.45) 50%, transparent 100%)"}}/>
<div style={{position:"relative",zIndex:2,width:"100%",padding:"0 clamp(32px,5vw,80px) clamp(60px,7vh,96px)",maxWidth:"1400px",margin:"0 auto"}}>
<div style={{opacity:ld?1:0,transition:"opacity 0.8s ease 0.3s",fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.lime,marginBottom:"20px"}}>Atlanta · Pet Festival · Aug 8, 2026</div>
<h1 style={{fontFamily:F.display,fontSize:"clamp(60px,12vw,180px)",fontWeight:700,fontStyle:"italic",lineHeight:0.88,color:C.cream,margin:"0 0 12px",opacity:ld?1:0,transform:ld?"translateY(0)":"translateY(48px)",transition:"all 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s"}}>Pawchella</h1>
<p style={{fontFamily:F.display,fontSize:"clamp(16px,2vw,28px)",fontStyle:"italic",color:C.lime,marginBottom:"28px",opacity:ld?1:0,transition:"opacity 1s ease 0.9s"}}>Summer Edition</p>
<p style={{fontFamily:F.sans,fontSize:"clamp(14px,1.2vw,17px)",lineHeight:1.85,color:C.muted,maxWidth:"480px",marginBottom:"40px",opacity:ld?1:0,transition:"opacity 1s ease 1.0s"}}>Atlanta&apos;s most beloved pet festival. Bring your pup, your family, and your friends. Live music, pet vendors, food trucks, costume contests, and a full day of outdoor fun — all in one park.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",opacity:ld?1:0,transition:"opacity 1s ease 1.3s"}}><a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:C.base,background:C.lime,padding:"15px 48px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a><a href="mailto:thekollectiveworldwide@gmail.com?subject=Pawchella Vendor Inquiry" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"15px 36px",textDecoration:"none",display:"inline-block"}}>Vendor Apply</a></div>
</div></section>);}
function Tickets(){return(<section id="tickets" style={{background:C.surface,padding:"100px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 50%, ${C.limeGlow} 0%, transparent 55%)`}}/><Grain/><div style={{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.lime,marginBottom:"16px"}}>Secure Your Entry</div>
<h2 style={{fontFamily:F.display,fontSize:"clamp(36px,6vw,84px)",fontStyle:"italic",fontWeight:400,color:C.cream,marginBottom:"48px"}}>Bring Your Whole Pack</h2></Reveal>
{TICKETS.map((t,i)=><Reveal key={t.date} d={0.1}><div style={{background:C.panel,padding:"48px 40px",borderTop:`2px solid ${C.lime}`,marginBottom:"3px"}}>
<div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"}}><div style={{width:"7px",height:"7px",borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 6px #4ADE80",animation:"pulse 2s infinite"}}/><span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:"#4ADE80",textTransform:"uppercase"}}>On Sale Now</span></div>
<div style={{fontFamily:F.display,fontSize:"clamp(24px,3.5vw,48px)",fontStyle:"italic",fontWeight:400,color:C.cream,marginBottom:"6px"}}>{t.date}</div>
<div style={{fontFamily:F.sans,fontSize:"13px",color:C.lime,marginBottom:"4px"}}>{t.note}</div>
<div style={{fontFamily:F.sans,fontSize:"11px",color:C.muted,marginBottom:"28px"}}>{t.city}</div>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
<a href={t.url} target="_blank" rel="noopener noreferrer" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:C.base,background:C.lime,padding:"16px 44px",textDecoration:"none",display:"inline-block"}}>Buy Tickets →</a>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=Pawchella Group Tickets" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"16px 28px",textDecoration:"none",display:"inline-block"}}>Group Entry</a>
<a href="mailto:thekollectiveworldwide@gmail.com?subject=Pawchella Vendor Application" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"16px 28px",textDecoration:"none",display:"inline-block"}}>Vendor Apply</a>
</div></div></Reveal>)}
<div style={{marginTop:"28px",display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}}>{["Powered by Eventbrite","Secure Checkout","All Ages Welcome","Pet-Friendly Event"].map(s=><div key={s} style={{fontFamily:F.mono,fontSize:"9px",color:"rgba(255,255,255,0.2)",letterSpacing:"0.2em"}}>{s}</div>)}</div>
</div><style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}
@media(max-width:768px){
  .dg,.DG,[style*="gridTemplateColumns"]{grid-template-columns:1fr!important}
  .nl,.desktop-nav{display:none!important}
  .fg,.stat-grid,.feature-grid{grid-template-columns:1fr!important}
  .eg{grid-template-columns:1fr!important}
  h1,h2,.hero-title{word-break:break-word}
  nav{padding:16px!important}
  section{padding-left:16px!important;padding-right:16px!important}
}
</style></section>);}

function FAQ(){
  const[open,setOpen]=useState<number|null>(null);
  const items=[
    {q:"What is Pawchella?",a:"Pawchella is Atlanta's premier pet-friendly festival — live entertainment, gourmet pet vendors, adoption partners, and a vibe for pets and their people."},
    {q:"Can I bring my pet?",a:"Yes! Pawchella is designed for pets. Dogs welcome on leash. Please ensure your pet is up to date on vaccinations."},
    {q:"Is this a family-friendly event?",a:"Absolutely. Pawchella is all-ages and family-friendly — bring the kids, the dogs, and the whole crew."},
    {q:"What should I bring?",a:"Your pet, a leash, water bowl, and good energy. Vendors on-site will have food and treats for both you and your animal."},
    {q:"Are tickets required?",a:"Yes. General admission tickets are available on Eventbrite. Purchase early — Pawchella regularly sells out."},
    {q:"Can I be a vendor?",a:"Yes! Apply via thekollectiveworldwide@gmail.com with subject 'Pawchella Vendor'. We prioritize pet-focused and family brands."}
  ];
  return(
<section id="faq" style={{background:C.base,padding:"80px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<Grain/>
<div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal>
<div style={{fontFamily:F.sans,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.lime,marginBottom:"16px"}}>Frequently Asked</div>
<h2 style={{fontFamily:F.sans,fontSize:"clamp(32px,5vw,64px)",fontWeight:400,fontStyle:"italic",color:C.cream,marginBottom:"48px",lineHeight:0.95}}>Common Questions</h2>
</Reveal>
<div style={{display:"flex",flexDirection:"column",gap:"2px",background:`${C.lime}20`}}>
{items.map((item,i)=>(
<Reveal key={i} d={i*0.05}>
<div onClick={()=>setOpen(open===i?null:i)}
style={{background:open===i?C.panel:C.surface,padding:"24px 28px",cursor:"pointer",
borderLeft:`3px solid ${open===i?C.lime:"transparent"}`,transition:"all 0.3s"}}
onMouseEnter={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=`${C.lime}08`}}
onMouseLeave={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=C.surface}}
>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px"}}>
<div style={{fontFamily:F.sans,fontSize:"clamp(14px,1.5vw,18px)",fontStyle:"italic",color:C.cream,lineHeight:1.3}}>{item.q}</div>
<div style={{color:C.lime,fontSize:"20px",flexShrink:0,transition:"transform 0.3s",transform:open===i?"rotate(45deg)":"rotate(0deg)"}}>+</div>
</div>
{open===i&&<div style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,lineHeight:1.75,marginTop:"12px",paddingRight:"32px"}}>{item.a}</div>}
</div>
</Reveal>
))}</div>
</div>
</section>
);}

function Footer(){return(<footer style={{background:"#0A1210",borderTop:`1px solid ${C.border}`,padding:"48px clamp(32px,5vw,80px) 32px"}}><div style={{maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"}}><div><div style={{fontFamily:F.display,fontSize:"22px",fontStyle:"italic",color:C.cream,marginBottom:"4px"}}>Pawchella</div><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.3em",color:C.lime}}>A KHG HUGLIFE EVENT</div></div><div style={{fontFamily:F.mono,fontSize:"10px",color:"rgba(255,255,255,0.18)"}}>© 2026 Pawchella. A KHG Enterprise.</div></div></footer>);}
export default function PawchellaSite(){return(<div style={{background:C.base,overflowX:'hidden'}}><Nav/><Hero/><Tickets/><FAQ/><Footer/></div>);}
