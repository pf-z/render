import{a as l}from"./B_ePb_Ig.js";import{d as z,t as o,v as i,x as a,L as e,y as v,M,N as r,B as C,_ as k,J as x,f as b,o as _,K as F,P as E,O as B}from"./DUNcu2Za.js";const T=[{title:"如何理解行列式的几何意义",url:"/program/How-to-understand-the-geometric-meaning-of-determinant",date:"2020-08-21T04:42:05.000Z"},{title:"动态规划算法",url:"/program/Dynamic-programming-algorithm",date:"2020-04-15T02:47:37.000Z"},{title:"Racket - 列表、递归与迭代",url:"/program/Lists-Iteration-and-Recursion",date:"2020-04-01T12:23:14.000Z"},{title:"Racket - 定义与表达式",url:"/program/Definitions-and-Expressions",date:"2020-03-29T14:00:00.000Z"},{title:"The essence, structure and application of recursive algorithm",url:"/program/The-essence-structure-and-application-of-recursive-algorithm",date:"2020-02-04T02:28:14.000Z"},{title:"Class文件结构",url:"/program/Class-file-structure",date:"2019-04-22T07:43:25.000Z"}],L={class:"container"},$={class:"header"},A=["src"],H={style:{"font-size":"2rem"}},I={class:"social-icons"},D=["href"],S=["href"],Z=["href"],N=["href"],R=["href"],q={style:{"font-size":"2rem"}},J={class:"pub-date"},V=["innerHTML"],P={key:0,style:{"font-size":"1.75rem",color:"#333"}},j={key:1,style:{"background-color":"black",padding:"0.8rem 0.6rem"}},O=["innerHTML"],U=z({__name:"Main",props:["metaInfo","htmlContent","showCite"],setup(n){function u(){window.location.href="https://pfzh.me"}function d(){window.location.href="https://pfzh.me/dynamic"}function w(s){const t=new Date(s),c=t.getFullYear(),h=String(t.getMonth()+1).padStart(2,"0"),m=String(t.getDate()).padStart(2,"0");return`${c} 年 ${h} 月 ${m} 日`}const f=s=>{const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(s>=1&&s<=12)return t[s-1];throw new Error("Invalid month number. Please provide a number between 1 and 12.")},p=(({author:s,title:t,journal:c,year:h,month:m,url:y})=>`@article{${s.toLowerCase().replace(" ","")}${h}${m},
    &nbsp;&nbsp;title   = "${t}",
    &nbsp;&nbsp;author  = "${s}",
    &nbsp;&nbsp;journal = "${c}",
    &nbsp;&nbsp;year    = "${h}",
    &nbsp;&nbsp;month   = "${m}",
    &nbsp;&nbsp;url     = "${y}"
  }`)({author:"Zhang, Pengfei",title:n.metaInfo.url.replaceAll("-"," ").substring(1).split("/")[1],journal:"pfzh.me",year:n.metaInfo.date.split("-")[0],month:f(n.metaInfo.date.split("-")[1].split("-")[0]),url:"https://pfzh.me/render/"+n.metaInfo.url});return(s,t)=>(o(),i("div",L,[a("div",$,[a("div",{class:"header-left",onClick:u},[a("img",{alt:"avatar",src:e(l).avatar,class:"avatar"},null,8,A),a("h1",H,v(e(l).name),1)]),a("div",I,[a("a",{target:"_self",onClick:d},t[0]||(t[0]=[M('<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" data-v-9ea02367><path d="M342.307397 635.336011l-132.507294 326.144023h407.085421l-152.626421-262.993129" fill="#70C4FF" data-v-9ea02367></path><path d="M323.802949 625.934357L191.295654 952.07838a20.762506 20.762506 0 0 0 18.504449 30.16001h407.085421a20.745903 20.745903 0 1 0 17.948236-31.172816l-152.630571-262.993129-35.892322 20.841372 152.630571 262.988979a20.754205 20.754205 0 0 1 17.944086-31.172815H209.800103c7.218312 0 13.92192 3.744059 17.690884 9.899755a20.770808 20.770808 0 0 1 0.813565 20.260255l132.507294-326.144023-37.008897-18.811611z" fill="#6E6E96" data-v-9ea02367></path><path d="M243.621155 940.72583l146.545438-179.748015 190.677179 179.748015-130.564701-224.975578-100.097528-50.096499z" fill="#5CA9E0" data-v-9ea02367></path><path d="M532.374403 259.655853l268.671479-133.017848-137.023409 264.682522" fill="#F0F0FF" data-v-9ea02367></path><path d="M541.580968 278.255771l268.679781-133.021998a20.737601 20.737601 0 0 1-24.012615-4.063674 20.741752 20.741752 0 0 1-3.623684-24.083179l-137.023409 264.682522 36.863618 19.085566 137.023409-264.682521a20.745903 20.745903 0 0 0-3.623684-24.083179 20.766657 20.766657 0 0 0-24.020916-4.059522l-268.679781 133.021998 18.417281 37.203987z" fill="#6E6E96" data-v-9ea02367></path><path d="M352.053572 640.765311c154.162231 127.684017 416.902159 66.185158 516.642715-33.555398L318.498174 57.007649C166.564944 208.949181 128.530789 462.993097 352.053572 640.765311" fill="#F0F0FF" data-v-9ea02367></path><path d="M338.81654 656.746049c161.720913 133.951787 437.535989 72.162369 544.55297-34.858762a20.745903 20.745903 0 0 0 0-29.346445L333.171396 42.330276a20.741752 20.741752 0 0 0-29.346445 0C215.013559 131.141668 167.806045 247.64747 174.314564 361.986534c6.383993 112.325906 63.37919 214.345274 164.821591 295.025169l25.838985-32.484481c-91.924523-73.100459-143.523626-164.705367-149.210279-264.885913-5.827781-102.542374 36.963238-207.496386 117.414837-287.947985a20.741752 20.741752 0 0 1-29.346445 0l550.193963 550.189812a20.750054 20.750054 0 0 1 0-29.342294c-94.028999 94.028999-346.263149 150.235536-488.728311 32.256184l-26.482365 31.949023z" fill="#6E6E96" data-v-9ea02367></path><path d="M788.456382 538.193882c-100.973356 76.765652-303.567599 114.310008-426.909837 7.645849-144.366247-119.888738-164.294434-277.662201-111.545548-408.06502-96.021403 151.58871-94.207485 356.673458 94.97124 507.124838 154.162231 127.688168 416.902159 66.185158 516.642716-33.555398l-73.158571-73.150269zM625.25777 334.412498l175.788112-207.774493-130.826204 252.736402z" fill="#6E6E96" opacity=".15" data-v-9ea02367></path><path d="M583.446349 445.459945c-63.989363 61.40754-169.719583 55.073357-236.141339-14.150217-66.413455-69.223574-68.385104-175.123978-4.387439-236.527367" fill="#FFFFFF" opacity=".66" data-v-9ea02367></path></svg>',1)])),e(l).social.orcid?(o(),i("a",{key:0,href:e(l).social.orcid.url,target:"_blank"},t[1]||(t[1]=[a("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[a("path",{d:"M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM314.4 186.784c22.4 0 40.416 18.4 40.416 40.416s-18.016 40.416-40.416 40.416a40.544 40.544 0 0 1-40.416-40.384c0-22.4 18.016-40.416 40.416-40.416z m-30.784 129.632h61.6v428.416H283.616z m151.968 0h166.4c158.368 0 228 113.184 228 214.4 0 109.984-86.016 214.4-227.2 214.4h-167.2z m61.6 55.584v317.6H595.2c139.616 0 171.616-105.984 171.616-158.816 0-86.016-54.784-158.816-174.816-158.816z",fill:"#A6CE39"})],-1)]),8,D)):r("",!0),e(l).social.wechat?(o(),i("a",{key:1,href:e(l).social.wechat.url,target:"_blank"},t[2]||(t[2]=[a("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[a("path",{d:"M118.438 395.821c2.369-6.149 33.678 183.946 178.428 278.972l-15.978 88.06c40.236 1.303 78.704-16.536 103.663-48.072l-0.086-0.086c84.842 23.606 196.817 17.2 343.246-47.298 0 0-43.24 143.184-125.283 194.781-152.07 95.37-391.61 50.738-483.258-107.495-26.056-44.976-68.305-170.702-0.732-358.862z m624.476-100.788c148.088 53.771 229.99 212.072 188.204 363.764-14.73 49.792-44.489 149.376-227.525 229.61-9.82 4.386 293.331-368.45-161.674-588.472a367.37 367.37 0 0 1 200.995-4.902z m49.484-62.69c6.89 8.34-416.676-105.991-518.918 322.485v-0.215l-0.1-0.113c-3.226-3.672-83.855-96.422-80.479-191.444C211.493 203.351 345.881 82.208 506.905 80c52.068 0 156.248 0 285.493 152.342z",fill:"#1FC372"})],-1)]),8,S)):r("",!0),e(l).social.github?(o(),i("a",{key:2,href:e(l).social.github.url,target:"_blank"},t[3]||(t[3]=[a("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[a("path",{d:"M682.215454 981.446137c-25.532318 0-42.553863-17.021545-42.553864-42.553864v-165.960067c4.255386-34.043091-8.510773-59.575409-29.787704-80.852341-12.766159-12.766159-17.021545-29.787704-8.510773-42.553864 4.255386-17.021545 21.276932-25.532318 34.043091-29.787704 123.406204-12.766159 238.301635-55.320023 238.301635-255.323181 0-46.80925-17.021545-93.6185-51.064636-131.916976-12.766159-12.766159-12.766159-29.787704-8.510772-42.553864 12.766159-34.043091 12.766159-68.086182 4.255386-102.129272-21.276932 4.255386-55.320023 17.021545-110.640045 55.320022-8.510773 8.510773-21.276932 8.510773-34.043091 4.255387-89.363113-25.532318-187.236999-25.532318-276.600112 0-12.766159 4.255386-25.532318 4.255386-38.298477-4.255387C307.741455 104.836549 269.442978 92.07039 248.166047 87.815004c-8.510773 34.043091-8.510773 68.086182 4.255386 102.129272 4.255386 17.021545 4.255386 34.043091-8.510773 42.553864-34.043091 38.298477-51.064636 85.107727-51.064636 131.916976 0 200.003158 114.895431 242.557022 238.301635 255.323181 17.021545 0 29.787704 12.766159 34.043091 29.787704 4.255386 17.021545 0 34.043091-8.510773 42.553864-21.276932 21.276932-29.787704 46.80925-29.787704 76.596954v165.960068c0 25.532318-17.021545 42.553863-42.553863 42.553863s-42.553863-17.021545-42.553864-42.553863v-72.341568c-127.66159 21.276932-182.981613-51.064636-221.28009-97.873886-17.021545-21.276932-29.787704-38.298477-46.80925-42.553864-21.276932-4.255386-38.298477-29.787704-29.787704-51.064636 4.255386-21.276932 29.787704-38.298477 51.064636-29.787704 42.553863 12.766159 68.086182 42.553863 93.6185 72.341568 34.043091 46.80925 63.830795 80.852341 153.193908 63.830795v-4.255386c0-25.532318 4.255386-55.320023 12.766159-76.596955-119.150818-25.532318-246.812408-102.129272-246.812408-327.664748 0-63.830795 21.276932-123.406204 59.575409-170.215454-17.021545-59.575409-12.766159-114.895431 12.766159-170.215454 4.255386-12.766159 12.766159-21.276932 25.532318-25.532318 17.021545-4.255386 72.341568-12.766159 187.236999 59.575409 93.6185-21.276932 191.492386-21.276932 280.855499 0 110.640045-72.341568 170.215454-63.830795 187.236999-59.575409 12.766159 4.255386 21.276932 12.766159 25.532319 25.532318 21.276932 55.320023 25.532318 110.640045 12.766159 165.960067 38.298477 46.80925 59.575409 106.384659 59.575408 170.215454 0 242.557022-144.683136 306.387817-246.812408 331.920135 8.510773 25.532318 12.766159 55.320023 12.766159 80.852341V938.892273c0 25.532318-17.021545 42.553863-42.553863 42.553864z",fill:"#2c2c2c"})],-1)]),8,Z)):r("",!0),e(l).social.leetcode?(o(),i("a",{key:3,href:e(l).social.leetcode.url,target:"_blank"},t[4]||(t[4]=[M('<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200" data-v-9ea02367><path d="M1023.522548 511.96634c0 163.697987 0 327.395973 0.477452 491.093959 0 17.051874-3.887827 20.939701-20.939701 20.871494q-491.09396-0.81849-982.187919 0c-17.051874 0-20.939701-3.81962-20.871493-20.871494q0.81849-491.09396 0-982.187919C-0.067321 3.820506 3.820506-0.067321 20.87238 0.000887q491.09396 0.81849 982.187919 0c17.051874 0 21.007908 3.81962 20.939701 20.871493-0.477452 163.697987-0.477452 327.395973-0.477452 491.09396z" fill="#FEFEFE" data-v-9ea02367></path><path d="M454.876667 321.735638c-61.386745 61.386745-124.819715 121.068303-184.774103 184.160235-44.403079 46.722134-40.924497 113.906516 5.593015 161.924591 55.179863 56.680428 111.996706 111.723876 168.063266 167.449399 21.212531 21.962813 20.939701 47.063171 5.388392 70.390134-14.391781 21.485361-35.058652 34.649407-63.091932 22.576681a132.663577 132.663577 0 0 1-35.67252-25.577811c-51.769488-52.315148-104.766711-103.470769-155.990539-156.399784-89.897478-92.8304-90.92059-232.451141-0.477453-324.667673C320.985355 291.72434 449.965727 163.903496 578.400439 35.536991c28.30611-28.30611 63.842215-30.147713 87.032763-6.002259s21.007908 55.657315-6.411504 84.509085q-43.175344 45.426191-86.691726 90.443138c-30.693372 47.608831-71.822492 84.645501-117.453305 117.248683z" fill="#070706" data-v-9ea02367></path><path d="M677.028476 641.014919H493.413901c-40.924497 0-70.185512-24.75932-69.503437-58.112785 0.613867-32.262145 27.965073-55.998353 68.207495-56.134768q187.02495-0.886697 374.049899 0c39.833177 0 62.34165 22.031021 62.682687 56.475805 0 35.740727-23.054133 57.294295-64.933534 57.70354-62.137027 0.54566-124.546885 0.068207-186.888535 0.068208z" fill="#B4B2B1" data-v-9ea02367></path><path d="M386.055305 928.100263c60.568255-7.366409 79.052486-37.241292 57.70354-92.966815 63.842215 33.48988 110.837178 26.055263 162.470252-25.57781 26.464508-26.464508 52.519771-53.338261 79.598146-79.188901s57.43071-26.464508 81.439748-2.7283 23.531586 54.565996-1.978017 81.439748c-34.103747 35.195067-67.457212 70.594757-103.470769 103.266147-76.938054 69.776267-199.916166 75.914941-275.7629 15.755931z" fill="#EAA240" data-v-9ea02367></path><path d="M454.876667 321.735638a1295.942393 1295.942393 0 0 1 117.453305-117.248683c89.692855 27.828658 142.349041 101.151714 202.371636 164.925721 19.575551 20.871493 11.663482 53.747506-10.776784 72.777397a53.338261 53.338261 0 0 1-73.868717-2.18264 821.627477 821.627477 0 0 1-74.414376-74.277961c-44.130249-52.315148-96.854642-66.502307-160.765064-43.993834z" fill="#EAA340" data-v-9ea02367></path></svg>',1)]),8,N)):r("",!0),e(l).social.twitter?(o(),i("a",{key:4,href:e(l).social.twitter.url,target:"_blank"},t[5]||(t[5]=[a("svg",{class:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[a("path",{d:"M918.784 901.568L609.536 450.752l0.512 0.384L888.96 128h-93.184L568.576 391.04 388.224 128H143.808l288.704 420.928L128 901.568h93.184l252.544-292.608 200.704 292.608h244.352zM351.36 198.4l433.92 632.96h-73.856L277.12 198.272h74.176z",fill:"#2c2c2c","fill-opacity":"1"})],-1)]),8,R)):r("",!0)])]),a("h1",q,[C(v(n.metaInfo.title),1),t[6]||(t[6]=a("span",{class:"origin"},"原创 / original",-1))]),a("p",J,"发表于 「"+v(w(n.metaInfo.date))+"」",1),t[7]||(t[7]=a("div",{class:"dashed"},null,-1)),a("div",{innerHTML:n.htmlContent,class:"content"},null,8,V),n.showCite?(o(),i("h2",P,"Citation")):r("",!0),n.showCite?(o(),i("pre",j,[a("code",{class:"language-bibtex",innerHTML:e(p),style:{"background-color":"black"}},null,8,O)])):r("",!0),t[8]||(t[8]=a("p",{style:{"text-align":"center",color:"#757575"}},"Copyright © 2025 pfzh. All Rights Reserved.",-1))]))}}),X=k(U,[["__scopeId","data-v-9ea02367"]]),G={__name:"[filename]",setup(n){const u=x(),{filename:d}=u.params,f=((s,t)=>{const c=s.find(h=>h.url===t);return c||null})(T,"/program/"+d),g=b("正在加载中..."),p=b(!1);return _(async()=>{const s=await fetch(`/render/articles/${d}.html`);g.value=await s.text(),p.value=!0,await F(()=>{E.highlightAll(),MathJax.typeset()})}),(s,t)=>(o(),B(X,{"meta-info":e(f),"html-content":e(g),"show-cite":e(p)},null,8,["meta-info","html-content","show-cite"]))}};export{G as default};
