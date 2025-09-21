(()=>{var a={};a.id=746,a.ids=[746],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14985:a=>{"use strict";a.exports=require("dns")},21111:(a,b,c)=>{"use strict";c.d(b,{Z:()=>e,_:()=>f});let d=c(49526).createTransport({host:"smtp.gmail.com",port:587,secure:!1,auth:{user:"bishop@truerankdigital.com",pass:"mhxy xjoa jrlx uacr"},tls:{rejectUnauthorized:!1}});async function e({to:a,subject:b,html:c,from:e}){try{let f=await d.sendMail({from:e||"JP Auto Leasing LLC <bishop@truerankdigital.com>",to:a,subject:b,html:c});return{success:!0,messageId:f.messageId}}catch(a){return{success:!1,error:a instanceof Error?a.message:"Unknown error"}}}function f(a,b="JP Auto Leasing LLC"){return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${b}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          color: #ffffff;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(0, 15, 30, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 255, 200, 0.2);
          border-radius: 16px;
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, rgb(34 197 94) 0%, rgb(59 130 246) 100%);
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          color: white;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .header p {
          margin: 8px 0 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
        }
        .content {
          padding: 40px 30px;
        }
        .content h2 {
          color: rgb(34 197 94);
          font-size: 22px;
          margin-bottom: 20px;
        }
        .content p {
          margin: 16px 0;
          color: #e5e5e5;
        }
        .info-grid {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
          border: 1px solid rgba(100, 255, 200, 0.1);
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(100, 255, 200, 0.1);
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          font-weight: 600;
          color: rgb(59 130 246);
          min-width: 120px;
        }
        .info-value {
          color: #ffffff;
          flex: 1;
          text-align: right;
        }
        .footer {
          background: rgba(0, 0, 0, 0.5);
          padding: 30px;
          text-align: center;
          border-top: 1px solid rgba(100, 255, 200, 0.1);
        }
        .footer p {
          margin: 8px 0;
          color: #888;
          font-size: 14px;
        }
        .footer a {
          color: rgb(34 197 94);
          text-decoration: none;
        }
        .highlight {
          color: rgb(34 197 94);
          font-weight: 600;
        }
        .timestamp {
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
          text-align: center;
          font-size: 14px;
          color: rgb(147, 197, 253);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>JP AUTO LEASING</h1>
          <p>Premium Automotive Solutions</p>
        </div>
        <div class="content">
          ${a}
          <div class="timestamp">
            <strong>Received:</strong> ${new Date().toLocaleString("en-US",{timeZone:"America/New_York",dateStyle:"full",timeStyle:"long"})}
          </div>
        </div>
        <div class="footer">
          <p><strong>JP Auto Leasing LLC</strong></p>
          <p>Phone: <a href="tel:+19084163008">(908) 416-3008</a></p>
          <p>Email: <a href="mailto:jpautoleasingllc@gmail.com">jpautoleasingllc@gmail.com</a></p>
          <p><em>10+ Years of Automotive Expertise</em></p>
        </div>
      </div>
    </body>
    </html>
  `}},21820:a=>{"use strict";a.exports=require("os")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31156:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>C,patchFetch:()=>B,routeModule:()=>x,serverHooks:()=>A,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>z});var d={};c.r(d),c.d(d,{POST:()=>w});var e=c(96559),f=c(48088),g=c(37719),h=c(26191),i=c(81289),j=c(261),k=c(92603),l=c(39893),m=c(14823),n=c(47220),o=c(66946),p=c(47912),q=c(99786),r=c(46143),s=c(86439),t=c(43365),u=c(32190),v=c(21111);async function w(a){try{let{name:b,email:c,phone:d,vehicleType:e,budget:f,timeframe:g,message:h}=await a.json();if(!b||!c||!d)return u.NextResponse.json({error:"Missing required fields"},{status:400});let i=`
      <h2>New Contact Form Submission</h2>
      <p>You've received a new inquiry through the JP Auto Leasing website contact form.</p>
      
      <div class="info-grid">
        <div class="info-row">
          <span class="info-label">Name:</span>
          <span class="info-value">${b}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email:</span>
          <span class="info-value"><a href="mailto:${c}" style="color: rgb(34 197 94);">${c}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone:</span>
          <span class="info-value"><a href="tel:${d}" style="color: rgb(34 197 94);">${d}</a></span>
        </div>
        ${e?`
        <div class="info-row">
          <span class="info-label">Vehicle Type:</span>
          <span class="info-value">${e}</span>
        </div>
        `:""}
        ${f?`
        <div class="info-row">
          <span class="info-label">Budget:</span>
          <span class="info-value">${f}</span>
        </div>
        `:""}
        ${g?`
        <div class="info-row">
          <span class="info-label">Timeframe:</span>
          <span class="info-value">${g}</span>
        </div>
        `:""}
      </div>

      ${h?`
      <h3 style="color: rgb(59 130 246); margin-top: 30px;">Message:</h3>
      <div class="info-grid">
        <p style="margin: 0; white-space: pre-wrap;">${h}</p>
      </div>
      `:""}

      <p style="margin-top: 30px; padding: 20px; background: rgba(34, 197, 94, 0.1); border-left: 4px solid rgb(34 197 94); border-radius: 8px;">
        <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service standards.
      </p>
    `,j=(0,v._)(i,"New Contact Form Submission - JP Auto Leasing"),k=await (0,v.Z)({to:"jpautoleasingllc@gmail.com",subject:`New Contact Inquiry from ${b} - JP Auto Leasing`,html:j});if(k.success)return u.NextResponse.json({success:!0,message:"Contact form submitted successfully"});throw Error(k.error||"Failed to send email")}catch(a){return u.NextResponse.json({error:"Failed to submit contact form"},{status:500})}}let x=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},distDir:".next",projectDir:"",resolvedPagePath:"/Users/matthewbishop/True Rank Digital/trd-joseperdomo/src/app/api/contact/route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:y,workUnitAsyncStorage:z,serverHooks:A}=x;function B(){return(0,g.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:z})}async function C(a,b,c){var d;let e="/api/contact/route";"/index"===e&&(e="/");let g=await x.prepare(a,b,{srcPage:e,multiZoneDraftMode:"false"});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:y,prerenderManifest:z,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(z.dynamicRoutes[E]||z.routes[D]);if(F&&!y){let a=!!z.routes[D],b=z.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||x.isDev||y||(G="/index"===(G=D)?"/":G);let H=!0===x.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:z,renderOpts:{experimental:{dynamicIO:!!w.experimental.dynamicIO,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>x.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>x.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await x.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await x.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:z,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),y&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||await x.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:a=>{"use strict";a.exports=require("zlib")},78335:()=>{},79551:a=>{"use strict";a.exports=require("url")},79646:a=>{"use strict";a.exports=require("child_process")},81630:a=>{"use strict";a.exports=require("http")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[985,55,526],()=>b(b.s=31156));module.exports=c})();