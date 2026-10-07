'use strict';
/* Safety net: the loader is always removed, even if something below fails */
setTimeout(()=>{const l=document.getElementById('loader');if(l)l.classList.add('done');},2500);
/* ===== CONTENT (edit here) ===== */
const GH='https://github.com/ihzanac/';
const NAV=['Home','About','Skills','Projects','Experience','Education','Services','Contact'];
const TITLES=['Software Engineer','Full Stack Developer','AI Application Developer','UI/UX Designer'];
const STATS=[{n:1,s:'+',l:'Years Professional Experience'},{n:8,s:'+',l:'Featured Projects'},{n:15,s:'+',l:'Technologies'},{t:'Full Stack',l:'Development'}];
const SKILLS={
'Programming Languages':['Java','Python','PHP','JavaScript','TypeScript','SQL'],
'Frontend Development':['HTML5','CSS3','React.js','Next.js','Bootstrap','Tailwind CSS','Context API','Redux'],
'Backend Development':['Laravel','Node.js','PHP','CodeIgniter','Express.js','Spring Boot','FastAPI','REST APIs'],
'Mobile Development':['Java Android','Flutter','ML Kit'],
'AI & Machine Learning':['Google Gemini API','OpenAI API','Claude API','AI Chatbots','AI Automation','Prompt Engineering','ML Integration','RAG','LangChain','Ollama','Hugging Face','n8n'],
'Databases':['MySQL','Microsoft SQL Server','PostgreSQL','Firebase'],
'UI/UX & Design':['Figma','Canva','Wireframing','Prototyping','Responsive UI Design','User-Centered Design','UI Design'],
'Tools & Platforms':['Git','GitHub','GitLab','Visual Studio','VS Code','Android Studio','Postman','Composer','Docker','GitHub Actions'],
'Other Skills':['SDLC','Agile/Scrum','Software Testing','Unit Testing','Clean Code Principles','JWT Authentication','OAuth','Payment Gateway Integration']};
/* live: set to a deployed URL to show a "Live Demo" button; leave '' while it is only a repo */
const PROJECTS=[
{name:'BikeBuddy.lk – AI-Powered Motorcycle Service Management System',cat:'AI / Full-Stack Web Application',tags:['ai','web'],img:'bikebuddy.jpg',repo:'Bike-Buddy.lk',live:'',
 desc:'BikeBuddy.lk is an AI-powered motorcycle service and marketplace platform designed for Sri Lanka. It connects bike owners with service centres, motorcycle sellers, and spare-parts shops, offering online service booking, bike sales, spare-parts discovery, Google Maps integration, AI assistance, smart search, and bike comparison.',
 features:['Online service booking','Bike sales and spare-parts discovery','Google Maps integration','AI assistance and smart search','Bike comparison'],
 tech:['Next.js','React','HTML5','CSS3','JavaScript','Firebase','Firestore','AI','Google Maps API']},
{name:'ISDN – IslandLink Sales Distribution Network',cat:'Sales & Distribution / Logistics Management',tags:['web','management'],img:'isdn.jpg',repo:'islandlink-sales-distribution-network',live:'',
 desc:'IslandLink Sales Distribution Network (ISDN) is a centralized web-based sales and distribution management system designed to digitalize and streamline the complete product distribution process. The system connects customers, Regional Distribution Centres, logistics teams, and administrators through a single integrated platform.',
 features:['Product management','Online ordering','Inventory management','Payment processing','Order tracking','Delivery coordination','GPS-based delivery monitoring','Returns','Customer reviews','Management reporting'],
 tech:['React','TypeScript','HTML5','CSS3','Responsive Web Design','Firebase','Firebase Authentication','Firebase Database','Firebase Cloud Services']},
{name:'Travel AI Chatbot',cat:'AI Travel & Tourism Management System',tags:['ai','web'],img:'travel-ai.jpg',repo:'travel-ai-chatbot',live:'',
 desc:'An AI-powered web-based travel assistant designed to help users plan trips and discover travel destinations, tourist attractions, hotels, travel budgets, and tourism activities.',
 features:['Google Gemini API','Personalized travel recommendations','Interactive chatbot','User authentication','Chat session management','Destination and tourism information','Admin panel'],
 tech:['HTML5','CSS3','JavaScript','Bootstrap 5','PHP','MySQL','AJAX','Fetch API','Google Gemini API']},
{name:'GreenLife Organic Store Management System',cat:'Retail & Inventory Management System',tags:['desktop','management'],img:'greenlife.jpg',repo:'Greenlife-organic-store-management-system',live:'',
 desc:"GreenLife Organic Store Management System is a desktop-based retail management application developed to efficiently manage an organic store's products, customers, orders, inventory, payments, and reports.",
 features:['Product management','Customer management','Order processing','Inventory monitoring','Order tracking','Payment handling','Product reviews','Report generation','Admin and customer functionality'],
 tech:['C#','.NET Framework','Windows Forms','Microsoft SQL Server','SQL Server Express','Visual Studio']},
{name:'UniManage – University Course Management System',cat:'Educational Software / Student Information System',tags:['education','web','management'],img:'unimanage.jpg',repo:'UniManage-University-Course-Management-System',live:'',
 desc:'UniManage is a comprehensive university course management system designed to streamline academic administration and enhance interaction between students, faculty, and administrators.',
 features:['Course registration and enrollment','Role management: Admin, Student, Faculty','Course content','Assignment sharing','Grade tracking','Centralized student data management'],
 tech:['HTML5','CSS3','JavaScript','Bootstrap 5','ASP.NET MVC 5','C#','Microsoft SQL Server']},
{name:'Bus Reservation System',cat:'Transportation Management / Booking System',tags:['transportation','management'],img:'bus-reservation.jpg',repo:'Bus-Reservation-System',live:'',
 desc:'Bus Reservation System is a web-based ticket booking and transport management platform designed to simplify bus schedule management, seat selection, and passenger reservations.',
 features:['Route search','Seat availability','Ticket booking','Travel itinerary management','Bus, route and booking management'],
 tech:['Java','Data Structures','Algorithms','Object-Oriented Programming','Abstract Data Types','Error Handling','Algorithm Complexity Analysis']},
{name:'Restaurant Management System',cat:'UI/UX Design',tags:['uiux'],img:'restaurant-ui.jpg',repo:'',live:'https://www.figma.com/proto/tzQrCcqHMuEZJrk1WN83cg/Untitled?node-id=2011-116&scaling=contain&content-scaling=fixed',liveLabel:'Figma Prototype',
 desc:'Modern and user-friendly UI/UX design project created to provide a clean, responsive, and engaging digital experience. The design focuses on simple navigation, attractive layouts, usability, and a consistent visual style.',
 features:['Simple navigation','Attractive layouts','Usability focus','Consistent visual style'],
 tech:['Figma','UI/UX Design','Wireframing','Prototyping','User Interface Design','Responsive Design']},
{name:'BikeBuddy.lk System (UI/UX Design)',cat:'UI/UX Design',tags:['uiux'],img:'uiux-2.jpg',repo:'',live:'https://www.figma.com/proto/tzQrCcqHMuEZJrk1WN83cg/Untitled?node-id=2018-653&p=f&t=tYYV1KBx6o4hJZV4-0&scaling=contain&content-scaling=fixed&page-id=11%3A2',liveLabel:'Figma Prototype',
 desc:'Modern and user-friendly UI/UX design project focused on creating a clean, responsive, and engaging digital experience. The design includes well-structured layouts, intuitive navigation, consistent visual elements, and user-focused interactions.',
 features:['Well-structured layouts','Intuitive navigation','Consistent visual elements','User-focused interactions'],
 tech:['Figma','UI/UX Design','Wireframing','Prototyping','User Interface Design','Responsive Design']}];
const EDU=[{t:'BEng (Hons) Software Engineering',s:'London Metropolitan University',d:'2025 – 2026'},
{t:'Higher National Diploma in Computing (Software Engineering)',s:'ESOFT Metro Campus',d:'2023 – 2025'},
{t:'Professional Diploma in English',s:'ESOFT Metro Campus',d:'2023 – 2024'}];
const META={'Programming Languages':['fa-code','Core languages for diverse application development.'],'Frontend Development':['fa-palette','Responsive, accessible and performant user interfaces.'],'Backend Development':['fa-gear','Scalable APIs and robust server-side applications.'],'Mobile Development':['fa-mobile-screen','Android and cross-platform mobile apps.'],'Desktop Development':['fa-desktop','Windows and Java desktop applications.'],'AI & Machine Learning':['fa-brain','Chatbots, automation and intelligent features with LLM APIs.'],'Databases':['fa-database','Relational and cloud databases for data-driven apps.'],'UI/UX & Design':['fa-pen-ruler','User-centered design, wireframes and prototypes.'],'Tools & Platforms':['fa-screwdriver-wrench','Version control, testing and deployment tooling.'],'Other Skills':['fa-lock','Architecture, security, testing and working practices.']};
const SERVICES=[['fa-globe','Web Development','Responsive, fast websites and web apps.'],['fa-layer-group','Full Stack Development','End-to-end applications, frontend to database.'],['fa-brain','AI Application Development','Apps powered by Gemini, OpenAI and Claude APIs.'],['fa-robot','AI Chatbot Development','Chatbots with sessions, auth and custom knowledge.'],['fa-pen-ruler','UI/UX Design','Wireframes, prototypes and clean interfaces.'],['fa-database','Database Development','Schema design, queries and optimisation.'],['fa-plug','API Development','REST APIs, authentication and integrations.'],['fa-screwdriver-wrench','Website Maintenance','Updates, bug fixes and performance tuning.'],['fa-headset','Technical Support','Troubleshooting and practical technical help.']];

/* ===== HELPERS ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const links=p=>(p.repo?`<a class="btn" href="${GH+p.repo}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>`:'')+(p.live?`<a class="btn" href="${p.live}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> ${p.liveLabel||'Live Demo'}</a>`:'');
const IMG=''; // images are in the same folder as index.html
function img(src,label,alt,cls=''){ // image with graceful placeholder
  return `<img src="${IMG+src.split('/').pop()}" alt="${esc(alt)}" loading="lazy" data-ph="${esc(label)}" class="${cls}">`;}
document.addEventListener('error',e=>{const t=e.target;if(t.tagName==='IMG'&&t.dataset.ph){
  const d=document.createElement('div');d.className='ph '+(t.className||'');d.setAttribute('role','img');d.setAttribute('aria-label',t.alt);d.textContent=t.dataset.ph;t.replaceWith(d);}},true);

/* ===== RENDER ===== */
function render(){
  const $=s=>document.querySelector(s)||{insertAdjacentHTML(){},set innerHTML(v){}}; // tolerate missing elements
  const mq=['Java','PHP','Laravel','JavaScript','TypeScript','React.js','Next.js','Node.js','Python','SQL','MySQL','Firebase','Gemini API','OpenAI API','Claude API','Figma','Docker','Git'].map(t=>`<span>${t}</span>`).join('');
  $('#marquee').innerHTML=mq+mq;
  $('#links').innerHTML=NAV.map(n=>`<li><a href="#${n.toLowerCase()}">${n}</a></li>`).join('');
  $('#heroImg').insertAdjacentHTML('afterbegin',img('profile.jpg','MI','Portrait of Mohammadhu Ihzan'));
  $('#aboutImg').innerHTML=img('about.jpg','Mohammadhu Ihzan','About Mohammadhu Ihzan');
  $('#stats').innerHTML=STATS.map(s=>`<div class="card stat reveal"><b ${s.n?`data-count="${s.n}" data-suffix="${s.s}"`:''}>${s.t||'0'}</b><span>${s.l}</span></div>`).join('');
  $('#skillGrid').innerHTML=Object.entries(SKILLS).map(([k,v])=>`<article class="card skill-card reveal"><div class="sk-ico"><i class="fas ${META[k][0]}"></i></div><h3>${esc(k)}</h3><p class="sk-desc">${META[k][1]}</p><div class="tags">${v.map(x=>`<span class="badge">${esc(x)}</span>`).join('')}</div></article>`).join('');
  const cats=['all','ai','web','desktop','management','education','transportation','uiux'];
  $('#filters').innerHTML=cats.map((c,i)=>`<button data-f="${c}" class="${i?'':'on'}">${c==='uiux'?'UI/UX':c.toUpperCase()}</button>`).join('');
  $('#projectGrid').innerHTML=PROJECTS.map((p,i)=>`<article class="card project-card" data-tags="${p.tags.join(' ')}">${img('projects/'+p.img,p.name,p.name+' screenshot')}
   <div class="pc-body"><span class="pc-cat">${esc(p.cat)}</span><h3>${esc(p.name)}</h3><p>${esc(p.desc.slice(0,125))}…</p>
   <div class="tags">${p.tech.slice(0,4).map(t=>`<span class="badge">${esc(t)}</span>`).join('')}</div>
   <div class="pc-btns">${links(p)}<button class="btn btn-p" data-i="${i}">View Details</button></div></div></article>`).join('');
  $('#eduList').innerHTML=EDU.map(e=>`<article class="tl-item reveal"><h3>${esc(e.t)}</h3><p class="muted">${esc(e.s)}${e.d?' · '+e.d:''}</p></article>`).join('');
  $('#svcGrid').innerHTML=SERVICES.map(s=>`<article class="card svc reveal"><i class="fas ${s[0]}"></i><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join('');
}

/* ===== NAV / MENU / SCROLL ===== */
function initNav(){
  const nav=$('#nav'),links=$('#links'),burger=$('#burger'),top=$('#top');
  const close=()=>{links.classList.remove('open');burger.setAttribute('aria-expanded','false');};
  burger.onclick=()=>burger.setAttribute('aria-expanded',links.classList.toggle('open'));
  links.onclick=e=>{if(e.target.closest('a'))close();};
  const onScroll=()=>{nav.classList.toggle('scrolled',scrollY>20);top.classList.toggle('show',scrollY>600);};
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('.links a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}),{rootMargin:'-45% 0px -50% 0px'});
  $$('main section[id]').forEach(s=>io.observe(s));
}

/* ===== THEME ===== */
function initTheme(){
  const sel=$('#theme');let t='midnight';
  try{t=localStorage.getItem('theme')||t;}catch(e){}
  const apply=v=>{document.documentElement.dataset.theme=v;sel.value=v;};
  apply(sel.querySelector(`[value="${t}"]`)?t:'midnight');
  sel.onchange=()=>{apply(sel.value);try{localStorage.setItem('theme',sel.value);}catch(e){}};
}

/* ===== TYPING ===== */
function initTyping(){
  const el=$('#typed');let i=0,j=0,del=false;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=TITLES[0];return;}
  (function tick(){const w=TITLES[i];el.textContent=w.slice(0,j+=del?-1:1);
    let d=del?40:85;if(!del&&j===w.length){del=true;d=1400;}else if(del&&j===0){del=false;i=(i+1)%TITLES.length;d=300;}
    setTimeout(tick,d);})();
}

/* ===== REVEAL + COUNTERS ===== */
function initReveal(){
  const count=el=>{const n=+el.dataset.count,s=el.dataset.suffix||'';let k=0;const st=()=>{k++;el.textContent=Math.round(n*k/30)+s;if(k<30)requestAnimationFrame(st);};st();};
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
    const c=$('[data-count]',e.target);if(c)count(c);io.unobserve(e.target);}),{threshold:.12});
  $$('.reveal').forEach(el=>io.observe(el));
}

/* ===== PARTICLES (light) ===== */
function initDots(){
  const cv=$('#dots'),cx=cv.getContext('2d');if(!cx||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  let w,h,P=[];const size=()=>{w=cv.width=cv.offsetWidth;h=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(40,w/25)},()=>({x:Math.random()*w,y:Math.random()*h,v:.1+Math.random()*.3,r:1+Math.random()*1.5}));};
  size();addEventListener('resize',size);
  (function f(){cx.clearRect(0,0,w,h);cx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--accent');cx.globalAlpha=.5;
    P.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=h;cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill();});requestAnimationFrame(f);})();
}

/* ===== FILTER + MODALS ===== */
function openModal(m,html){const box=$('.modal-box',m);box.innerHTML=html;m.previousFocus=document.activeElement;m.hidden=false;requestAnimationFrame(()=>{m.classList.add('open');const x=$('.x',m);x&&x.focus();});}
function closeModals(){$$('.modal.open').forEach(m=>{m.classList.remove('open');setTimeout(()=>{m.hidden=true;},300);m.previousFocus&&m.previousFocus.focus();});}
function initProjects(){
  $('#filters').onclick=e=>{const b=e.target.closest('button');if(!b)return;
    $$('#filters button').forEach(x=>x.classList.toggle('on',x===b));
    $$('.project-card').forEach(c=>{c.hidden=!(b.dataset.f==='all'||c.dataset.tags.split(' ').includes(b.dataset.f));});};
  const modal=$('#modal');
  $('#projectGrid').onclick=e=>{const b=e.target.closest('[data-i]');if(!b)return;const p=PROJECTS[+b.dataset.i];
    openModal($('#modal'),`<button class="icon-btn x" aria-label="Close">&times;</button>${img('projects/'+p.img,p.name,p.name+' screenshot')}
     <h3 id="mTitle">${esc(p.name)}</h3><span class="pc-cat">${esc(p.cat)}</span><p>${esc(p.desc)}</p>
     <h4>Features</h4><ul class="list">${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>
     <h4>Technologies</h4><div class="tags">${p.tech.map(t=>`<span class="badge">${esc(t)}</span>`).join('')}</div>
     <div class="btns">${links(p)}</div>`);
  };
  $$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m||e.target.closest('.x'))closeModals();}));
  addEventListener('keydown',e=>{if(e.key==='Escape')closeModals();});
}

/* ===== FORM ===== */
function initForm(){
  const f=$('#form'),msg=$('#formMsg');
  f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
    $$('input,textarea',f).forEach(i=>{const v=i.value.trim();let m='';
      if(!v)m='This field is required.';
      else if(i.name==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))m='Enter a valid email address.';
      else if(i.name==='message'&&v.length<10)m='Message must be at least 10 characters.';
      i.closest('label').nextElementSibling.textContent=m;i.setAttribute('aria-invalid',!!m);if(m)ok=false;});
    msg.className=ok?'ok':'';
    if(ok){const d=Object.fromEntries(new FormData(f));
      msg.innerHTML=`Looks good. This site has no backend, so the form can't send mail itself. <a href="mailto:ihzanac0@gmail.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message+'\n\n'+d.name+' ('+d.email+')')}">Open it in your email app</a>.`;}
    else msg.textContent='Please fix the highlighted fields.';});
}


/* ===== EXTRA EFFECTS ===== */
function initFx(){
  const bar=document.createElement('div');bar.className='progress';document.body.prepend(bar);
  const upd=()=>{const m=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${m>0?scrollY/m:0})`;};
  addEventListener('scroll',upd,{passive:true});upd();
  $$('.reveal').forEach(el=>{const i=[...el.parentElement.children].indexOf(el);el.style.transitionDelay=Math.min(i,8)*70+'ms';});
  if(!matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches)return;
  document.addEventListener('mousemove',e=>{const c=e.target.closest&&e.target.closest('.card');if(!c)return;
    const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px');});
  const tilt=(el,max)=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      el.classList.add('tilting');el.style.transform=`perspective(800px) rotateX(${-y*max}deg) rotateY(${x*max}deg) translateY(-4px)`;});
    el.addEventListener('mouseleave',()=>{el.classList.remove('tilting');el.style.transform='';});};
  $$('.project-card').forEach(c=>tilt(c,6));tilt($('.avatar'),10);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded',()=>{
  const run=f=>{try{f();}catch(err){console.error('Init error in '+f.name+':',err);}};
  [render,initTheme,initNav,initTyping,initReveal,initDots,initProjects,initForm,initFx].forEach(run);
  run(()=>{const y=$('#year');if(y)y.textContent=new Date().getFullYear();});
  setTimeout(()=>{const l=$('#loader');if(l)l.classList.add('done');},500);
});
