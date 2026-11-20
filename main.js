document.addEventListener("DOMContentLoaded",()=>{const data={corporate:{n:"A",title:"Corporate Interiors",desc:"Purpose-built business environments that balance brand identity, productivity, privacy, collaboration and customer experience.",groups:[
{title:"Office Interiors",tag:"01",desc:"Everything from the front door to the boardroom, including work, meeting, leadership, support and event spaces.",items:[
["Reception & Waiting","Reception desk, visitor seating, brand wall, arrival circulation and first impressions.","livingroom-11.jpg"],
["Open Workspaces","Team neighbourhoods, desk planning, circulation, storage and daylight-aware layouts.","office-2.jpg"],
["Private Cabins","Manager, department head and leadership cabins with privacy and focused work zones.","office-9.jpg"],
["CEO / Director Office","Executive office planning with meeting corner, storage, display and premium detailing.","office-3.jpg"],
["Conference Room","Conference tables, presentation walls, AV integration, acoustics and meeting circulation.","office-10.jpg"],
["Boardroom","Formal leadership meeting environments with presentation, technology and hospitality support.","office-7.jpg"],
["Focus / Phone Rooms","Quiet rooms for calls, focused work and confidential conversations.","office-8.jpg"],
["Training Room","Flexible seating, presentation, writable surfaces and technology-ready layouts.","office-12.jpg"],
["Breakout & Collaboration","Informal meeting points, lounge seating, brainstorming and team interaction zones.","office-1.jpg"],
["Cafeteria / Pantry","Employee dining, pantry, refreshment counters, storage and easy-maintenance finishes.","kitchen-6.jpg"],
["Server / Utility / Support","Practical support rooms planned around access, maintenance and operational needs.","office-11.jpg"],
["Corporate Events","Launches, brand activations, stages, backdrops, temporary installations and event experience zones.","office-5.jpg"]
]},{title:"Banking Interiors",tag:"02",desc:"Banking environments planned around customer flow, staff privacy, controlled access, security and operational efficiency.",items:[
["Banking Hall","Customer circulation, service counters, seating, signage and clear wayfinding.","office-4.jpg"],
["Teller / Cash Counter","Customer-facing transaction zones with ergonomic staff layouts and controlled circulation.","office-6.jpg"],
["Manager Cabin","Private banking discussions, approvals and leadership workspaces.","art-2.jpg"],
["Relationship Manager Cabin","Client consultation, account discussions and semi-private meeting areas.","office-3.jpg"],
["Loan / Consultation Room","Confidential customer meetings with comfortable seating and document handling.","office-9.jpg"],
["Customer Waiting Area","Organised queue and waiting experience with accessible circulation.","livingroom-9.jpg"],
["ATM / Self-Service Zone","ATM lobby, self-service machines, access control and customer safety planning.","office-8.jpg"],
["Vault / Locker Area","Security-sensitive zones with controlled access and functional circulation planning.","office-11.jpg"],
["Security / Access Control","Controlled entry, surveillance support, secure staff movement and security-conscious zoning.","office-5.jpg"],
["Back Office / Staff Area","Operations desks, records, staff workspaces, pantry and support functions.","office-2.jpg"]
]}
]
},residential:{n:"B",title:"Residences Interiors",desc:"Residential interiors organised by property type, so every room shown under a home type actually belongs to that home.",groups:[
{title:"Villa",tag:"01",desc:"A complete villa journey—from arrival and social spaces to private rooms, entertainment and service areas.",items:[
["Entrance / Foyer","Arrival, shoe/storage zone, statement wall and transition into the home.","livingroom-1.jpg"],
["Living Room","Main social space with seating, TV wall, feature lighting, art and circulation.","livingroom-12.jpg"],
["Dining Room","Formal or everyday dining with serving/storage support and connected circulation.","kitchen-10.jpg"],
["Guest Room","Comfortable guest bedroom with wardrobe, bedside storage and layered lighting.","bedroom-5.jpg"],
["Kids Room","Sleep, study, storage and play zones with flexible planning.","kidsroom-1.jpg"],
["Kitchen","Modular kitchen, work triangle, storage, appliances, lighting and ventilation.","kitchen-2.jpg"],
["Master Bedroom","Private suite with bed wall, bedside units, seating, lighting and calm material palette.","bedroom-7.jpg"],
["Wardrobe & Dressing","Built-in wardrobes, walk-in dressing, mirrors, accessories and organised storage.","bedroom-4.jpg"],
["Study Room","Home office, reading, study desk, storage and focused lighting.","office-9.jpg"],
["Home Theatre","Screen wall, AV, acoustic treatment, recliner/seating and ambient lighting.","livingroom-3.jpg"],
["Showroom / Display Room","Personal collection, art, display cabinetry or premium product-style room.","livingroom-4.jpg"],
["Bathrooms","Guest, family and master bathrooms with fittings, storage, ventilation and lighting.","bathroom-8.jpg"],
["Utility / Service Area","Laundry, utility storage and practical household support functions.","kitchen-5.jpg"]
]},{title:"1RK",tag:"02",desc:"Only the spaces that naturally belong in a compact 1RK/studio plan.",items:[
["Combined Living / Sleeping Area","One flexible main room planned for living, sleeping, storage and movement.","bedroom-3.jpg"],
["Compact Kitchen","Efficient single-wall, L-shaped or compact modular kitchen planning.","kitchen-6.jpg"],
["Attached Bathroom","Space-efficient bathroom with shower, WC, basin, ventilation and storage.","bathroom-4.jpg"],
["Entry & Storage","Compact entrance, wardrobe/storage and clutter-control planning.","livingroom-2.jpg"]
]},{title:"1BHK",tag:"03",desc:"A focused one-bedroom home with clear separation between living, private and service areas.",items:[
["Living / Dining","Main social zone with seating, TV, dining and efficient circulation.","livingroom-9.jpg"],
["Bedroom","Private sleeping space with wardrobe, bedside storage and lighting.","bedroom-9.jpg"],
["Kitchen","Cooking, storage, appliance and work-surface planning.","kitchen-11.jpg"],
["Bathroom","Functional bathroom with storage, ventilation, lighting and durable finishes.","bathroom-5.jpg"],
["Balcony / Utility","Where provided, a practical extension for utility, plants or seating.","livingroom-8.jpg"]
]},{title:"2BHK",tag:"04",desc:"A two-bedroom family layout with balanced public, private and service spaces.",items:[
["Living / Dining","Central family and guest zone with TV, seating and dining.","livingroom-11.jpg"],
["Master Bedroom","Primary bedroom with wardrobe/dressing and comfortable circulation.","bedroom-2.jpg"],
["Bedroom 2","Secondary bedroom suitable for child, guest or flexible family use.","kidsroom-5.jpg"],
["Kitchen","Modular kitchen with storage, appliance planning and service movement.","kitchen-3.jpg"],
["Bathrooms","Master/common bathroom planning with fittings, storage and ventilation.","bathroom-2.jpg"],
["Balcony / Utility","Practical outdoor or utility extension where the apartment provides it.","livingroom-8.jpg"]
]},{title:"3BHK",tag:"05",desc:"A larger family home with three bedrooms and supporting social, work and service spaces.",items:[
["Living / Dining","Larger social space for family use and guests.","livingroom-10.jpg"],
["Master Bedroom","Primary suite with wardrobe/dressing and private bathroom where applicable.","bedroom-10.jpg"],
["Bedroom 2","Family bedroom with storage and flexible study/sleeping use.","kidsroom-3.jpg"],
["Bedroom 3","Guest, child or flexible bedroom with wardrobe and study support.","bedroom-11.jpg"],
["Kitchen","Full modular kitchen with storage, appliance and work-zone planning.","kitchen-8.jpg"],
["Bathrooms","Master and common bathrooms planned for daily family use.","bathroom-9.jpg"],
["Utility / Balcony","Laundry, utility or balcony zones integrated into the home plan.","livingroom-8.jpg"]
]},{title:"4BHK",tag:"06",desc:"A premium four-bedroom residence with layered family, guest, work and service zones.",items:[
["Living / Formal Lounge","Large social zone for everyday family life and formal hosting.","livingroom-6.jpg"],
["Dining Area","Dedicated dining with storage/display and kitchen connection.","kitchen-7.jpg"],
["Master Suite","Premium private suite with bedroom, dressing/wardrobe and bathroom.","bedroom-8.jpg"],
["Bedroom 2","Secondary family bedroom with storage and study support.","kidsroom-11.jpg"],
["Bedroom 3","Flexible bedroom for family or guests.","bedroom-6.jpg"],
["Bedroom 4","Guest, child or multi-purpose bedroom.","bedroom-1.jpg"],
["Kitchen & Utility","Full kitchen plus utility/service planning for a larger household.","kitchen-12.jpg"],
["Study / Family Lounge","Quiet work or family zone depending on the floor plan.","livingroom-4.jpg"],
["Bathrooms","Master, attached and common bathroom planning.","bathroom-12.jpg"],
["Balcony / Terrace","Outdoor seating, greenery and entertainment where available.","livingroom-8.jpg"]
]}
]
},hospitality:{n:"C",title:"Restaurants / Hotel Interiors",desc:"Two distinct hospitality tracks: restaurant spaces built around dining journeys, and hotel interiors built around the complete guest stay.",groups:[
{title:"Restaurants",tag:"01",desc:"Front-of-house, dining, service and operational zones for restaurants and cafés.",items:[
["Entrance & Host Desk","Arrival, brand identity, waiting and first-impression zone.","art-4.jpg"],
["Dining Area","Table planning, circulation, lighting, acoustics and guest comfort.","livingroom-8.jpg"],
["Private Dining","Intimate dining rooms for celebrations, business meals and premium guests.","kitchen-7.jpg"],
["Café / Lounge","Relaxed seating, counter/service zones and social atmosphere.","livingroom-9.jpg"],
["Bar / Beverage Counter","Beverage service, display, back counter and customer circulation.","kitchen-8.jpg"],
["Restaurant Kitchen","Cooking, prep, storage, washing and service-flow planning.","kitchen-4.jpg"],
["Service / Back-of-House","Staff circulation, storage, dishwashing and operational support.","kitchen-5.jpg"],
["Washrooms","Guest washrooms with durable finishes, lighting, ventilation and wayfinding.","bathroom-3.jpg"],
["Outdoor / Terrace Dining","Al fresco seating, lighting, planting and weather-aware planning.","kitchen-10.jpg"],
["Restaurant Events","Private parties, launches, themed evenings and temporary event layouts.","art-1.jpg"]
]},{title:"Hotel Interiors",tag:"02",desc:"Guest-facing and operational hotel spaces from arrival through rooms, events, wellness and service.",items:[
["Hotel Lobby & Reception","Arrival, reception, concierge, waiting, luggage and statement feature design.","livingroom-1.jpg"],
["Guest Rooms","Sleep, work, storage, lighting and relaxation zones for everyday stays.","bedroom-11.jpg"],
["Suites","Bedroom, lounge, wardrobe and bathroom integration for larger guest units.","art-3.jpg"],
["Corridors & Lift Lobbies","Wayfinding, lighting, wall finishes and consistent hotel identity.","office-5.jpg"],
["Hotel Restaurant","Dining, breakfast, buffet and service circulation within the property.","livingroom-8.jpg"],
["Banquet / Event Hall","Flexible spaces for weddings, conferences, launches and hosted functions.","livingroom-12.jpg"],
["Conference / Meeting Rooms","Business meeting environments with AV, acoustics and flexible seating.","office-10.jpg"],
["Hotel Spa / Wellness","Reception, treatment, relaxation and wellness spaces within the hotel.","bathroom-6.jpg"],
["Recreation / Lounge","Guest lounges, social areas and leisure spaces.","livingroom-6.jpg"],
["Back-of-House","Staff areas, service corridors, storage and operational support.","kitchen-6.jpg"]
]}
]
},spa:{n:"D",title:"Hospitality & Spa Division",desc:"A dedicated category for hospitality environments and spa/wellness experiences where privacy, hygiene, sensory design and circulation matter.",groups:[
{title:"Hospitality",tag:"01",desc:"Hospitality environments beyond the restaurant/hotel category—resorts, lounges, guest experiences and leisure spaces.",items:[
["Resort / Property Arrival","Arrival court, entrance, reception and first-touch guest experience.","art-4.jpg"],
["Guest Lounge","Comfortable social zones with layered lighting and relaxed seating.","livingroom-5.jpg"],
["Guest Services","Concierge, service desk, waiting and guest assistance areas.","office-4.jpg"],
["Guest Rooms & Suites","Comfort-led accommodation spaces with storage, lighting and premium detailing.","bedroom-10.jpg"],
["Banquet & Celebration","Wedding, conference and celebration environments with flexible planning.","livingroom-12.jpg"],
["Conference & Business Lounge","Meeting, waiting and business-support environments for guests.","office-7.jpg"],
["Recreation Spaces","Leisure lounges, activity areas and guest social spaces.","livingroom-6.jpg"],
["Wellness Areas","Yoga, meditation, fitness and quiet recovery spaces.","bathroom-11.jpg"]
]},{title:"Spa Division",tag:"02",desc:"Purpose-built spa and wellness spaces with calming visual language and practical service flow.",items:[
["Spa Reception","Reception counter, retail display, waiting and arrival experience.","livingroom-11.jpg"],
["Treatment Rooms","Private rooms with treatment bed, storage, controlled lighting and calming finishes.","bedroom-1.jpg"],
["Couple Treatment Rooms","Larger treatment suites with privacy and coordinated circulation.","bedroom-6.jpg"],
["Steam & Sauna","Heat-area planning with suitable materials, ventilation and privacy.","bathroom-7.jpg"],
["Wet Area / Shower","Hygienic wet zones with drainage, ventilation, fittings and durable finishes.","bathroom-8.jpg"],
["Relaxation Lounge","Quiet recovery area with soft seating, low visual noise and ambient lighting.","livingroom-5.jpg"],
["Beauty / Salon","Service stations, mirrors, storage, lighting and customer movement.","bathroom-5.jpg"],
["Changing / Locker Rooms","Guest changing, lockers, vanity and circulation planning.","bathroom-9.jpg"],
["Spa Retail","Product display and checkout integrated into the guest journey.","livingroom-2.jpg"],
["Wellness Studio","Yoga, meditation, breathwork or movement studio with uncluttered planning.","livingroom-10.jpg"]
]}
]
},special:{n:"E",title:"Specialised Spaces",desc:"Special project types that sit outside the four core divisions while still using the same design, detailing and project-management workflow.",groups:[
{title:"Specialised Spaces",tag:"01",desc:"Showrooms, outdoor extensions, event environments and specialist commercial spaces.",items:[
["Showrooms","Product-led layouts, display systems, feature zones, customer flow and brand experience.","livingroom-2.jpg"],
["Retail / Experience Zones","Merchandising, feature displays and customer journey planning.","livingroom-5.jpg"],
["Out House","Detached guest, leisure or utility structures designed as part of the property.","livingroom-8.jpg"],
["Events & Exhibitions","Stages, booths, backdrops, temporary installations and branded environments.","office-5.jpg"],
["Medical / Professional Spaces","Reception, consultation, waiting and support spaces with clear circulation.","office-8.jpg"],
["Project Management","Planning, procurement, installation, supervision, quality checks and delivery coordination.","office-2.jpg"]
]}
]
}
};function cardTemplate(item){return`<article class="space-card">
    <div class="space-card-media"><img src="${item[2]}" alt="${item[0]} interior design by Dhaka Decor" loading="lazy"></div>
    <div class="space-card-copy"><span>EXPLORE SPACE</span><h4>${item[0]}</h4><p>${item[1]}</p></div>
  </article>`;
}
function render(cat){const d=data[cat],panel=document.getElementById("categoryPanel");panel.innerHTML=`
    <div class="cat-intro">
      <div><div class="cat-number">${d.n}</div><h3 class="cat-title">${d.title}</h3></div>
      <p class="cat-desc">${d.desc}<br><strong>Open one collection at a time.</strong></p>
    </div>
    <div class="category-accordion">
      ${d.groups.map((g,i)=>`
        <section class="category-group ${i===0?"is-open":""}">
          <button class="group-trigger" type="button" aria-expanded="${i===0}">
            <span class="group-index">${g.tag}</span>
            <span class="group-name">${g.title}</span>
            <span class="group-desc">${g.desc}</span>
            <span class="group-plus">+</span>
          </button>
          <div class="group-content">
            <div class="space-grid">${g.items.map(cardTemplate).join("")}</div>
          </div>
        </section>`).join("")}
    </div>`;
const groups=[...panel.querySelectorAll(".category-group")];groups.forEach(group=>{const trigger=group.querySelector(".group-trigger"),content=group.querySelector(".group-content");trigger.addEventListener("click",()=>{const wasOpen=group.classList.contains("is-open");groups.forEach(other=>{other.classList.remove("is-open");other.querySelector(".group-trigger").setAttribute("aria-expanded","false");});if(!wasOpen){group.classList.add("is-open");trigger.setAttribute("aria-expanded","true");if(window.gsap)gsap.fromTo(group.querySelectorAll(".space-card"),{y:28,opacity:0,rotateX:4},{y:0,opacity:1,rotateX:0,stagger:.045,duration:.55,ease:"power3.out"});}
});});if(window.gsap)gsap.fromTo(panel.querySelectorAll(".category-group"),{y:25,opacity:0},{y:0,opacity:1,stagger:.05,duration:.6,ease:"power3.out"});}
render("corporate");document.querySelectorAll(".cat-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".cat-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.cat);}));const menuButton=document.querySelector(".menu");const mainNav=document.getElementById("mainNav");menuButton?.addEventListener("click",()=>{const open=document.querySelector(".nav").classList.toggle("is-menu-open");menuButton.setAttribute("aria-expanded",open?"true":"false");});mainNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav")?.classList.remove("is-menu-open")));function init(){const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(window.Lenis&&!reduceMotion){const lenis=new Lenis({duration:1.15,smoothWheel:true});function raf(t){lenis.raf(t);requestAnimationFrame(raf)}
requestAnimationFrame(raf);}
if(window.gsap&&window.ScrollTrigger&&!reduceMotion){gsap.registerPlugin(ScrollTrigger);gsap.utils.toArray(".display").forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 86%"},y:70,opacity:0,duration:1,ease:"power3.out"}));gsap.utils.toArray(".section-kicker").forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 88%"},x:-25,opacity:0,duration:.7}));gsap.to(".hero-media img",{yPercent:12,scale:1.08,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});gsap.to(".hero-copy",{yPercent:-14,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});gsap.to(".hero-orbit",{rotation:70,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});gsap.to(".visual-break-bg img",{scale:1.12,yPercent:7,scrollTrigger:{trigger:".visual-break",start:"top bottom",end:"bottom top",scrub:true}});gsap.utils.toArray(".step").forEach((el,i)=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 88%"},x:35,opacity:0,duration:.7,delay:i*.03}));gsap.utils.toArray(".service-grid article").forEach((el,i)=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 92%"},y:25,opacity:0,duration:.55,delay:(i%4)*.06}));gsap.utils.toArray(".gallery-card").forEach((el,i)=>gsap.from(el,{scrollTrigger:{trigger:el,start:"top 90%"},y:60,opacity:0,rotation:i%2?-1.5:1.5,duration:.9,delay:i*.08,ease:"power3.out"}));}
document.querySelectorAll(".gallery-card").forEach(el=>el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*4}deg) rotateX(${y*-4}deg)`;
}));document.querySelectorAll(".gallery-card").forEach(el=>el.addEventListener("mouseleave",()=>el.style.transform=""));}
let siteStarted=false;function startSite(){if(siteStarted)return;siteStarted=true;const loader=document.getElementById("loader"),line=loader.querySelector("i");if(window.gsap)gsap.to(line,{width:"100%",duration:.6,ease:"power2.inOut",onComplete:()=>gsap.to(loader,{autoAlpha:0,duration:.5,pointerEvents:"none"})});else{line.style.width="100%";setTimeout(()=>loader.style.display="none",700)}
init();}
window.addEventListener("load",startSite);setTimeout(()=>{if(!siteStarted&&window.gsap)startSite();},2500);document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const f=e.currentTarget;const subject=encodeURIComponent("New interior project enquiry — "+f.project.value);const body=encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\nProject: ${f.project.value}\n\nMessage:\n${f.message.value}`);
if(window.self!==window.top){if(window.__ddToast)window.__ddToast("Preview only: on the live site this opens your email app, ready to send to info@dhakadecor.com");return;}
window.location.href=`mailto:info@dhakadecor.com?subject=${subject}&body=${body}`;
});});const themeButtons=[document.getElementById("themeToggle"),document.getElementById("themeToggleMobile")].filter(Boolean);let savedTheme=null;try{savedTheme=localStorage.getItem("dhakaDecorTheme")}catch(e){}
if(savedTheme)document.body.dataset.theme=savedTheme;function syncThemeButtons(){const dark=document.body.dataset.theme==="dark";themeButtons.forEach(btn=>{btn.setAttribute("aria-pressed",dark?"true":"false");btn.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");btn.title=dark?"Switch to light mode":"Switch to dark mode";btn.querySelector(".theme-icon").textContent=dark?"☀":"☾";btn.querySelector(".theme-label").textContent=dark?"Light":"Dark";});}
syncThemeButtons();themeButtons.forEach(btn=>btn.addEventListener("click",()=>{const next=document.body.dataset.theme==="dark"?"light":"dark";document.body.dataset.theme=next;try{localStorage.setItem("dhakaDecorTheme",next)}catch(e){}
syncThemeButtons();}));