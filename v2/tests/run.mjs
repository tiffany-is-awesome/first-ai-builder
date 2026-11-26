/* Runs the same tests as devtest.html, headless, and prints the results.
   Usage (from the v2 folder):  python3 -m http.server 8765 &   then   node tests/run.mjs [all|audit]
   Needs Playwright (npm i -D playwright) and a Chrome/Chromium. */
let pw;try{pw=await import('playwright')}catch(e){pw=await import('/opt/npm-tools/node_modules/playwright/index.mjs')}
const mode=process.argv[2]||'all',base=process.env.RT_URL||'http://localhost:8765';
const exe=process.env.CHROME||(await import('fs')).existsSync('/usr/bin/google-chrome')?'/usr/bin/google-chrome':undefined;
const args=['--disable-dev-shm-usage'];const b=await pw.chromium.launch(exe?{executablePath:exe,args}:{args});const p=await b.newPage({viewport:{width:1300,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(`${base}/devtest.html?run=${mode}`);
if(mode=='all'){await p.waitForFunction(()=>window.__T,null,{timeout:900000,polling:1000});
 const T=await p.evaluate(()=>window.__T);for(const [r,name,what,t] of T.rows)console.log(`${r.padEnd(5)} ${name}\n      ${what}\n`);
 console.log(JSON.stringify(T.sum));if(errs.length)console.log('PAGE ERRORS',errs);await b.close();process.exit(T.sum.fail?1:0)}
else{await p.waitForFunction(()=>window.__AUD,null,{timeout:300000,polling:1000});console.log(await p.evaluate(()=>document.querySelector('#aout').innerText.slice(0,6000)));await b.close()}
