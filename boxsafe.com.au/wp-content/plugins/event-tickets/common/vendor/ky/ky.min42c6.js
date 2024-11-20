/**
 * Bundled by jsDelivr using Rollup v2.60.2 and Terser v5.10.0.
 * Original file: /npm/ky@0.29.0/distribution/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
class t extends Error{constructor(t,e,s){const o=`${t.status||0===t.status?t.status:""} ${t.statusText||""}`.trim();super(`Request failed with ${o?`status code ${o}`:"an unknown error"}`),this.name="HTTPError",this.response=t,this.request=e,this.options=s}}class e extends Error{constructor(t){super("Request timed out"),this.name="TimeoutError",this.request=t}}const s=t=>null!==t&&"object"==typeof t,o=(...t)=>{for(const e of t)if((!s(e)||Array.isArray(e))&&void 0!==e)throw new TypeError("The `options` argument must be an object");return n({},...t)},r=(t={},e={})=>{const s=new globalThis.Headers(t),o=e instanceof globalThis.Headers,r=new globalThis.Headers(e);for(const[t,e]of r.entries())o&&"undefined"===e||void 0===e?s.delete(t):s.set(t,e);return s},n=(...t)=>{let e={},o={};for(const i of t)if(Array.isArray(i))Array.isArray(e)||(e=[]),e=[...e,...i];else if(s(i)){for(let[t,o]of Object.entries(i))s(o)&&t in e&&(o=n(e[t],o)),e={...e,[t]:o};s(i.headers)&&(o=r(o,i.headers),e.headers=o)}return e},i="function"==typeof globalThis.AbortController,a="function"==typeof globalThis.ReadableStream,h="function"==typeof globalThis.FormData,u=["get","post","put","patch","head","delete"],p={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},l=Symbol("stop"),c=t=>u.includes(t)?t.toUpperCase():t,f=[413,429,503],d={limit:2,methods:["get","put","head","delete","options","trace"],statusCodes:[408,413,429,500,502,503,504],afterStatusCodes:f,maxRetryAfter:Number.POSITIVE_INFINITY},y=(t={})=>{if("number"==typeof t)return{...d,limit:t};if(t.methods&&!Array.isArray(t.methods))throw new Error("retry.methods must be an array");if(t.statusCodes&&!Array.isArray(t.statusCodes))throw new Error("retry.statusCodes must be an array");return{...d,...t,afterStatusCodes:f}};class _{constructor(t,e={}){var s,o;if(this._retryCount=0,this._input=t,this._options={credentials:this._input.credentials||"same-origin",...e,headers:r(this._input.headers,e.headers),hooks:n({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},e.hooks),method:c(null!==(s=e.method)&&void 0!==s?s:this._input.method),prefixUrl:String(e.prefixUrl||""),retry:y(e.retry),throwHttpErrors:!1!==e.throwHttpErrors,timeout:void 0===e.timeout?1e4:e.timeout,fetch:null!==(o=e.fetch)&&void 0!==o?o:globalThis.fetch.bind(globalThis)},"string"!=typeof this._input&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&"string"==typeof this._input){if(this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(i&&(this.abortController=new globalThis.AbortController,this._options.signal&&this._options.signal.addEventListener("abort",(()=>{this.abortController.abort()})),this._options.signal=this.abortController.signal),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){const t="?"+("string"==typeof this._options.searchParams?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString()),e=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,t);!(h&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)||this._options.headers&&this._options.headers["content-type"]||this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(e,this.request),this._options)}void 0!==this._options.json&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type","application/json"),this.request=new globalThis.Request(this.request,{body:this._options.body}))}static create(e,s){const o=new _(e,s),r=async()=>{if(o._options.timeout>2147483647)throw new RangeError("The `timeout` option cannot be greater than 2147483647");await Promise.resolve();let e=await o._fetch();for(const t of o._options.hooks.afterResponse){const s=await t(o.request,o._options,o._decorateResponse(e.clone()));s instanceof globalThis.Response&&(e=s)}if(o._decorateResponse(e),!e.ok&&o._options.throwHttpErrors){let s=new t(e,o.request,o._options);for(const t of o._options.hooks.beforeError)s=await t(s);throw s}if(o._options.onDownloadProgress){if("function"!=typeof o._options.onDownloadProgress)throw new TypeError("The `onDownloadProgress` option must be a function");if(!a)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return o._stream(e.clone(),o._options.onDownloadProgress)}return e},n=o._options.retry.methods.includes(o.request.method.toLowerCase())?o._retry(r):r();for(const[t,e]of Object.entries(p))n[t]=async()=>{o.request.headers.set("accept",o.request.headers.get("accept")||e);const r=(await n).clone();if("json"===t){if(204===r.status)return"";if(s.parseJson)return s.parseJson(await r.text())}return r[t]()};return n}_calculateRetryDelay(s){if(this._retryCount++,this._retryCount<this._options.retry.limit&&!(s instanceof e)){if(s instanceof t){if(!this._options.retry.statusCodes.includes(s.response.status))return 0;const t=s.response.headers.get("Retry-After");if(t&&this._options.retry.afterStatusCodes.includes(s.response.status)){let e=Number(t);return Number.isNaN(e)?e=Date.parse(t)-Date.now():e*=1e3,void 0!==this._options.retry.maxRetryAfter&&e>this._options.retry.maxRetryAfter?0:e}if(413===s.response.status)return 0}return.3*2**(this._retryCount-1)*1e3}return 0}_decorateResponse(t){return this._options.parseJson&&(t.json=async()=>this._options.parseJson(await t.text())),t}async _retry(t){try{return await t()}catch(e){const s=Math.min(this._calculateRetryDelay(e),2147483647);if(0!==s&&this._retryCount>0){await(async t=>new Promise((e=>{setTimeout(e,t)})))(s);for(const t of this._options.hooks.beforeRetry){if(await t({request:this.request,options:this._options,error:e,retryCount:this._retryCount})===l)return}return this._retry(t)}throw e}}async _fetch(){for(const t of this._options.hooks.beforeRequest){const e=await t(this.request,this._options);if(e instanceof Request){this.request=e;break}if(e instanceof Response)return e}return!1===this._options.timeout?this._options.fetch(this.request.clone()):(async(t,s,o)=>new Promise(((r,n)=>{const i=setTimeout((()=>{s&&s.abort(),n(new e(t))}),o.timeout);o.fetch(t).then(r).catch(n).then((()=>{clearTimeout(i)}))})))(this.request.clone(),this.abortController,this._options)}_stream(t,e){const s=Number(t.headers.get("content-length"))||0;let o=0;return new globalThis.Response(new globalThis.ReadableStream({async start(r){const n=t.body.getReader();e&&e({percent:0,transferredBytes:0,totalBytes:s},new Uint8Array),await async function t(){const{done:i,value:a}=await n.read();if(i)r.close();else{if(e){o+=a.byteLength;e({percent:0===s?0:o/s,transferredBytes:o,totalBytes:s},a)}r.enqueue(a),await t()}}()}}))}}
/*! MIT License © Sindre Sorhus */const m=t=>{const e=(e,s)=>_.create(e,o(t,s));for(const s of u)e[s]=(e,r)=>_.create(e,o(t,r,{method:s}));return e.create=t=>m(o(t)),e.extend=e=>m(o(t,e)),e.stop=l,e},b=m();export{t as HTTPError,e as TimeoutError,b as default};