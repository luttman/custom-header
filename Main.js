/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,i,H){var V,a=arguments.length,C=a<3?e:null===H?H=Object.getOwnPropertyDescriptor(e,i):H;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)C=Reflect.decorate(t,e,i,H);else for(var n=t.length-1;n>=0;n--)(V=t[n])&&(C=(a<3?V(C):a>3?V(e,i,C):V(e,i))||C);return a>3&&C&&Object.defineProperty(e,i,C),C
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e=new WeakMap,i=t=>"function"==typeof t&&e.has(t),H=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,V=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},a={},C={},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${o}`),L="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;const i=[],H=[],V=document.createTreeWalker(e.content,133,null,!1);let a=0,C=-1,o=0;const{strings:d,values:{length:l}}=t;for(;o<l;){const t=V.nextNode();if(null!==t){if(C++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let H=0;for(let t=0;t<i;t++)s(e[t].name,L)&&H++;for(;H-- >0;){const e=d[o],i=h.exec(e)[2],H=i.toLowerCase()+L,V=t.getAttribute(H);t.removeAttribute(H);const a=V.split(r);this.parts.push({type:"attribute",index:C,name:i,strings:a}),o+=a.length-1}}"TEMPLATE"===t.tagName&&(H.push(t),V.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const H=t.parentNode,V=e.split(r),a=V.length-1;for(let e=0;e<a;e++){let i,a=V[e];if(""===a)i=M();else{const t=h.exec(a);null!==t&&s(t[2],L)&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-L.length)+t[3]),i=document.createTextNode(a)}H.insertBefore(i,t),this.parts.push({type:"node",index:++C})}""===V[a]?(H.insertBefore(M(),t),i.push(t)):t.data=V[a],o+=a}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&C!==a||(C++,e.insertBefore(M(),t)),a=C,this.parts.push({type:"node",index:C}),null===t.nextSibling?t.data="":(i.push(t),C--),o++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),o++}}else V.currentNode=H.pop()}for(const t of i)t.parentNode.removeChild(t)}}const s=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,M=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class A{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=H?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,V=document.createTreeWalker(t,133,null,!1);let a,C=0,n=0,o=V.nextNode();for(;C<i.length;)if(a=i[C],l(a)){for(;n<a.index;)n++,"TEMPLATE"===o.nodeName&&(e.push(o),V.currentNode=o.content),null===(o=V.nextNode())&&(V.currentNode=e.pop(),o=V.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(o,a.name,a.strings,this.options));C++}else this.__parts.push(void 0),C++;return H&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=` ${n} `;class p{constructor(t,e,i,H){this.strings=t,this.values=e,this.type=i,this.processor=H}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let H=0;H<t;H++){const t=this.strings[H],V=t.lastIndexOf("\x3c!--");i=(V>-1||i)&&-1===t.indexOf("--\x3e",V+1);const a=h.exec(t);e+=null===a?t+(i?g:o):t.substr(0,a.index)+a[1]+a[2]+L+a[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const c=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class f{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new m(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let H=0;H<e;H++){i+=t[H];const e=this.parts[H];if(void 0!==e){const t=e.value;if(c(t)||!u(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class m{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||c(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(M()),this.endNode=t.appendChild(M())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=M()),t.__insert(this.endNode=M())}insertAfterPart(t){t.__insert(this.startNode=M()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(c(t)?t!==this.value&&this.__commitText(t):t instanceof p?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===C?(this.value=C,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof A&&this.value.template===e)this.value.update(t.values);else{const i=new A(e,t.processor,this.options),H=i._clone();i.update(t.values),this.__commitNode(H),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,H=0;for(const V of t)i=e[H],void 0===i&&(i=new _(this.options),e.push(i),0===H?i.appendIntoPart(this):i.insertAfterPart(e[H-1])),i.setValue(V),i.commit(),H++;H<e.length&&(e.length=H,this.clear(i&&i.endNode))}clear(t=this.startNode){V(this.startNode.parentNode,t.nextSibling,this.endNode)}}class b{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class v extends f{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new y(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class y extends m{}let Z=!1;try{const t={get capture(){return Z=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class w{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,H=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),V=null!=t&&(null==e||H);H&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),V&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(Z?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=new class{handleAttributeExpressions(t,e,i,H){const V=e[0];if("."===V){return new v(t,e.slice(1),i).parts}return"@"===V?[new w(t,e.slice(1),H.eventContext)]:"?"===V?[new b(t,e.slice(1),i)]:new f(t,e,i).parts}handleTextExpression(t){return new _(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function S(t){let e=z.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},z.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const H=t.strings.join(n);return i=e.keyString.get(H),void 0===i&&(i=new d(t,t.getTemplateElement()),e.keyString.set(H,i)),e.stringsArray.set(t.strings,i),i}const z=new Map,E=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(t,...e)=>new p(t,e,"html",x),T=133;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function N(t,e){const{element:{content:i},parts:H}=t,V=document.createTreeWalker(i,T,null,!1);let a=I(H),C=H[a],n=-1,o=0;const r=[];let L=null;for(;V.nextNode();){n++;const t=V.currentNode;for(t.previousSibling===L&&(L=null),e.has(t)&&(r.push(t),null===L&&(L=t)),null!==L&&o++;void 0!==C&&C.index===n;)C.index=null!==L?-1:C.index-o,a=I(H,a),C=H[a]}r.forEach(t=>t.parentNode.removeChild(t))}const P=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,T,null,!1);for(;i.nextNode();)e++;return e},I=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const R=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const D=t=>e=>{const i=R(e.type,t);let H=z.get(i);void 0===H&&(H={stringsArray:new WeakMap,keyString:new Map},z.set(i,H));let V=H.stringsArray.get(e.strings);if(void 0!==V)return V;const a=e.strings.join(n);if(V=H.keyString.get(a),void 0===V){const i=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(i,t),V=new d(e,i),H.keyString.set(a,V)}return H.stringsArray.set(e.strings,V),V},$=["html","svg"],j=new Set,F=(t,e,i)=>{j.add(t);const H=i?i.element:document.createElement("template"),V=e.querySelectorAll("style"),{length:a}=V;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(H,t);const C=document.createElement("style");for(let t=0;t<a;t++){const e=V[t];e.parentNode.removeChild(e),C.textContent+=e.textContent}(t=>{$.forEach(e=>{const i=z.get(R(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),N(t,i)})})})(t);const n=H.content;i?function(t,e,i=null){const{element:{content:H},parts:V}=t;if(null==i)return void H.appendChild(e);const a=document.createTreeWalker(H,T,null,!1);let C=I(V),n=0,o=-1;for(;a.nextNode();){for(o++,a.currentNode===i&&(n=P(e),i.parentNode.insertBefore(e,i));-1!==C&&V[C].index===o;){if(n>0){for(;-1!==C;)V[C].index+=n,C=I(V,C);return}C=I(V,C)}}}(i,C,n.firstChild):n.insertBefore(C,n.firstChild),window.ShadyCSS.prepareTemplateStyles(H,t);const o=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==o)e.insertBefore(o.cloneNode(!0),e.firstChild);else if(i){n.insertBefore(C,n.firstChild);const t=new Set;t.add(C),N(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},U=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:U},K=Promise.resolve(!0),W=1,Q=4,G=8,J=16,X=32,tt="finalized";class et extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const H=this._attributeNameForProperty(i,e);void 0!==H&&(this._attributeToPropertyMap.set(H,i),t.push(H))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const H=this[t];this[i]=e,this._requestUpdate(t,H)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(tt)||t.finalize(),this[tt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=U){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,H=e.converter||q,V="function"==typeof H?H:H.fromAttribute;return V?V(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,H=e.converter;return(H&&H.toAttribute||q.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Y){const H=this.constructor,V=H._attributeNameForProperty(t,i);if(void 0!==V){const t=H._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|G,null==t?this.removeAttribute(V):this.setAttribute(V,t),this._updateState=this._updateState&~G}}_attributeToProperty(t,e){if(this._updateState&G)return;const i=this.constructor,H=i._attributeToPropertyMap.get(t);if(void 0!==H){const t=i._classProperties.get(H)||Y;this._updateState=this._updateState|J,this[H]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~J}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const H=this.constructor,V=H._classProperties.get(t)||Y;H._valueHasChanged(this[t],e,V.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==V.reflect||this._updateState&J||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,V))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const i=this._updatePromise;this._updatePromise=new Promise((i,H)=>{t=i,e=H});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&W}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&W||(this._updateState=this._updateState|W,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}et[tt]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const it=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:H}=e;return{kind:i,elements:H,finisher(e){window.customElements.define(t,e)}}})(t,e),Ht=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign({},e,{finisher(i){i.createProperty(e.key,t)}}),Vt=(t,e,i)=>{e.constructor.createProperty(i,t)};function at(t){return(e,i)=>void 0!==i?Vt(t,e,i):Ht(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ct="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol();class ot{constructor(t,e){if(e!==nt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Ct?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const rt=(t,...e)=>{const i=e.reduce((e,i,H)=>e+(t=>{if(t instanceof ot)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[H+1],t[0]);return new ot(i,nt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Lt=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let H=0,V=e.length;H<V;H++){const V=e[H];Array.isArray(V)?t(V,i):i.push(V)}return i}(t);class dt extends et{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){Lt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ct?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof p&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}dt.finalized=!0,dt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const H=i.scopeName,a=E.has(e),C=B&&11===e.nodeType&&!!e.host,n=C&&!j.has(H),o=n?document.createDocumentFragment():e;if(((t,e,i)=>{let H=E.get(e);void 0===H&&(V(e,e.firstChild),E.set(e,H=new _(Object.assign({templateFactory:S},i))),H.appendInto(e)),H.setValue(t),H.commit()})(t,o,Object.assign({templateFactory:D(H)},i)),n){const t=E.get(o);E.delete(o);const i=t.value instanceof A?t.value.template:void 0;F(H,o,i),V(e,e.firstChild),e.appendChild(o),E.set(e,t)}!a&&C&&window.ShadyCSS.styleElement(e.host)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const st=!(window.ShadyDOM&&window.ShadyDOM.inUse);let lt,Mt;function ht(t){lt=(!t||!t.shimcssproperties)&&(st||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Mt=window.ShadyCSS.cssBuild);const At=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?lt=window.ShadyCSS.nativeCss:window.ShadyCSS?(ht(window.ShadyCSS),window.ShadyCSS=void 0):ht(window.WebComponents&&window.WebComponents.flags);const gt=lt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class pt{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ct(t){return function t(e,i){let H=i.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=H.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;H=i.substring(t,e.start-1),H=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(H),H=H.replace(bt.multipleSpaces," "),H=H.substring(H.lastIndexOf(";")+1);let V=e.parsedSelector=e.selector=H.trim();e.atRule=0===V.indexOf(Zt),e.atRule?0===V.indexOf(yt)?e.type=ft.MEDIA_RULE:V.match(bt.keyframesRule)&&(e.type=ft.KEYFRAMES_RULE,e.keyframesName=e.selector.split(bt.multipleSpaces).pop()):0===V.indexOf(vt)?e.type=ft.MIXIN_RULE:e.type=ft.STYLE_RULE}let V=e.rules;if(V)for(let e,H=0,a=V.length;H<a&&(e=V[H]);H++)t(e,i);return e}(function(t){let e=new pt;e.start=0,e.end=t.length;let i=e;for(let H=0,V=t.length;H<V;H++)if(t[H]===mt){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new pt,i.start=H+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[H]===_t&&(i.end=H+1,i=i.parent||e);return e}(t=t.replace(bt.comments,"").replace(bt.port,"")),t)}function ut(t,e,i=""){let H="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(vt)}(i))for(let t,V=0,a=i.length;V<a&&(t=i[V]);V++)H=ut(t,e,H);else H=e?t.cssText:function(t){return function(t){return t.replace(bt.mixinApply,"").replace(bt.varApply,"")}(t=function(t){return t.replace(bt.customProp,"").replace(bt.mixinProp,"")}(t))}(t.cssText),H=H.trim(),H&&(H="  "+H+"\n")}return H&&(t.selector&&(i+=t.selector+" "+mt+"\n"),i+=H,t.selector&&(i+=_t+"\n\n")),i}const ft={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},mt="{",_t="}",bt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},vt="--",yt="@media",Zt="@",wt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,kt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,xt=/@media\s(.*)/,St=new Set,zt="shady-unscoped";function Et(t){const e=t.textContent;if(!St.has(e)){St.add(e);const i=t.cloneNode(!0);document.head.appendChild(i)}}function Ot(t){return t.hasAttribute(zt)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Tt(t,e){return t?("string"==typeof t&&(t=ct(t)),e&&Pt(t,e),ut(t,gt)):""}function Nt(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=ct(t.textContent)),t.__cssRules||null}function Pt(t,e,i,H){if(!t)return;let V=!1,a=t.type;if(H&&a===ft.MEDIA_RULE){let e=t.selector.match(xt);e&&(window.matchMedia(e[1]).matches||(V=!0))}a===ft.STYLE_RULE?e(t):i&&a===ft.KEYFRAMES_RULE?i(t):a===ft.MIXIN_RULE&&(V=!0);let C=t.rules;if(C&&!V)for(let t,V=0,a=C.length;V<a&&(t=C[V]);V++)Pt(t,e,i,H)}window.ShadyDOM&&window.ShadyDOM.wrap;const It="css-build";function Rt(t){if(void 0!==Mt)return Mt;if(void 0===t.__cssBuild){const e=t.getAttribute(It);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===It)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function Bt(t){return""!==Rt(t)}function Dt(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function $t(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const jt=/;\s*/m,Ft=/^\s*(initial)|(inherit)\s*$/,qt=/\s*!important/,Ut="_-_";class Yt{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Kt=null;class Wt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Yt}detectMixin(t){return function(t){const e=kt.test(t)||wt.test(t);return kt.lastIndex=0,wt.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const H=i[t];Ot(H)?st||(Et(H),H.parentNode.removeChild(H)):(e.push(H.textContent),H.parentNode.removeChild(H))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=Nt(t);return this.transformRules(i,e),t.textContent=Tt(i),i}transformCustomStyle(t){let e=Nt(t);return Pt(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=Tt(e),e}transformRules(t,e){this._currentElement=e,Pt(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(wt,(t,i,H,V)=>this._produceCssProperties(t,i,H,V,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let H=!1;return Pt(e,e=>{H=H||e===t,H||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=kt.exec(t);){let H=i[0],V=i[1],a=i.index,C=a+H.indexOf("@apply"),n=a+H.length,o=t.slice(0,C),r=t.slice(n),L=e?this._fallbacksFromPreviousRules(e):{};Object.assign(L,this._cssTextToMap(o));let d=this._atApplyToCssProperties(V,L);t=`${o}${d}${r}`,kt.lastIndex=a+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(jt,"");let i=[],H=this._map.get(t);if(H||(this._map.set(t,{}),H=this._map.get(t)),H){let V,a,C;this._currentElement&&(H.dependants[this._currentElement]=!0);const n=H.properties;for(V in n)C=e&&e[V],a=[V,": var(",t,Ut,V],C&&a.push(",",C.replace(qt,"")),a.push(")"),qt.test(n[V])&&a.push(" !important"),i.push(a.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=Ft.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,H,V=t.split(";"),a={};for(let t,C,n=0;n<V.length;n++)t=V[n],t&&(C=t.split(":"),C.length>1&&(i=C[0].trim(),H=C.slice(1).join(":"),e&&(H=this._replaceInitialOrInherit(i,H)),a[i]=H));return a}_invalidateMixinEntry(t){if(Kt)for(let e in t.dependants)e!==this._currentElement&&Kt(e)}_produceCssProperties(t,e,i,H,V){if(i&&function t(e,i){let H=e.indexOf("var(");if(-1===H)return i(e,"","","");let V=function(t,e){let i=0;for(let H=e,V=t.length;H<V;H++)if("("===t[H])i++;else if(")"===t[H]&&0==--i)return H;return-1}(e,H+3),a=e.substring(H+4,V),C=e.substring(0,H),n=t(e.substring(V+1),i),o=a.indexOf(",");return-1===o?i(C,a.trim(),"",n):i(C,a.substring(0,o).trim(),a.substring(o+1).trim(),n)}(i,(t,e)=>{e&&this._map.get(e)&&(H=`@apply ${e};`)}),!H)return t;let a=this._consumeCssProperties(""+H,V),C=t.slice(0,t.indexOf("--")),n=this._cssTextToMap(a,!0),o=n,r=this._map.get(e),L=r&&r.properties;L?o=Object.assign(Object.create(L),n):this._map.set(e,o);let d,s,l=[],M=!1;for(d in o)s=n[d],void 0===s&&(s="initial"),!L||d in L||(M=!0),l.push(`${e}${Ut}${d}: ${s}`);return M&&this._invalidateMixinEntry(r),r&&(r.properties=o),i&&(C=`${t};${C}`),`${C}${l.join("; ")};`}}Wt.prototype.detectMixin=Wt.prototype.detectMixin,Wt.prototype.transformStyle=Wt.prototype.transformStyle,Wt.prototype.transformCustomStyle=Wt.prototype.transformCustomStyle,Wt.prototype.transformRules=Wt.prototype.transformRules,Wt.prototype.transformRule=Wt.prototype.transformRule,Wt.prototype.transformTemplate=Wt.prototype.transformTemplate,Wt.prototype._separator=Ut,Object.defineProperty(Wt.prototype,"invalidCallback",{get:()=>Kt,set(t){Kt=t}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Qt={},Gt="_applyShimCurrentVersion",Jt="_applyShimNextVersion",Xt="_applyShimValidatingVersion",te=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ee(t){let e=Qt[t];e&&function(t){t[Gt]=t[Gt]||0,t[Xt]=t[Xt]||0,t[Jt]=(t[Jt]||0)+1}(e)}function ie(t){return t[Gt]===t[Jt]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let He,Ve=null,ae=window.HTMLImports&&window.HTMLImports.whenReady||null;function Ce(t){requestAnimationFrame((function(){ae?ae(t):(Ve||(Ve=new Promise(t=>{He=t}),"complete"===document.readyState?He():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&He()})),Ve.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ne="__seenByShadyCSS",oe="__shadyCSSCachedStyle";let re=null,Le=null;class de{constructor(){this.customStyles=[],this.enqueued=!1,Ce(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Le&&(this.enqueued=!0,Ce(Le))}addCustomStyle(t){t[ne]||(t[ne]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[oe])return t[oe];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[oe])continue;const H=this.getStyleForCustomStyle(i);if(H){const t=H.__appliedElement||H;re&&re(t),i[oe]=t}}return t}}de.prototype.addCustomStyle=de.prototype.addCustomStyle,de.prototype.getStyleForCustomStyle=de.prototype.getStyleForCustomStyle,de.prototype.processStyles=de.prototype.processStyles,Object.defineProperties(de.prototype,{transformCallback:{get:()=>re,set(t){re=t}},validateCallback:{get:()=>Le,set(t){let e=!1;Le||(e=!0),Le=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const se=new Wt;class le{constructor(){this.customStyleInterface=null,se.invalidCallback=ee}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{se.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),Bt(t))return;Qt[e]=t;let i=se.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],H=this.customStyleInterface.getStyleForCustomStyle(i);H&&se.transformCustomStyle(H)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Dt(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",H="";return e?e.indexOf("-")>-1?i=e:(H=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,H=t.extends),{is:i,typeExtension:H}}(t),i=Qt[e];if((!i||!Bt(i))&&i&&!ie(i)){(function(t){return!ie(t)&&t[Xt]===t[Jt]})(i)||(this.prepareTemplate(i,e),function(t){t[Xt]=t[Jt],t._validating||(t._validating=!0,te.then((function(){t[Gt]=t[Jt],t._validating=!1})))}(i));let H=t.shadowRoot;if(H){let t=H.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=Tt(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new le;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,H){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>$t(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:gt,nativeShadow:st,cssBuild:Mt,disableRuntime:At},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=se,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Me,he,Ae=/(url\()([^)]*)(\))/g,ge=/(^\/)|(^#)|(^[\w-\d]*:)/;function pe(t,e){if(t&&ge.test(t))return t;if(void 0===Me){Me=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",Me="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),Me?new URL(t,e).href:(he||(he=document.implementation.createHTMLDocument("temp"),he.base=he.createElement("base"),he.head.appendChild(he.base),he.anchor=he.createElement("a"),he.body.appendChild(he.anchor)),he.base.href=e,he.anchor.href=t,he.anchor.href||t)}function ce(t,e){return t.replace(Ae,(function(t,i,H,V){return i+"'"+pe(H.replace(/["']/g,""),e)+"'"+V}))}function ue(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fe=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let me=ue(document.baseURI||window.location.href),_e=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,be=!1,ve=!1,ye=!1,Ze=0;const we=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Ze++;return function(H){let V=H.__mixinSet;if(V&&V[i])return H;let a=e,C=a.get(H);C||(C=t(H),a.set(H,C));let n=Object.create(C.__mixinSet||V||null);return n[i]=!0,C.__mixinSet=n,C}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ke={},xe={};function Se(t,e){ke[t]=xe[t.toLowerCase()]=e}function ze(t){return ke[t]||xe[t.toLowerCase()]}class Ee extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=ze(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,H){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=pe(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ue(e)}return this.__assetpath}register(t){if(t=t||this.id){if(ve&&void 0!==ze(t))throw Se(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Se(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}Ee.prototype.modules=ke,customElements.define("dom-module",Ee);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Oe="link[rel=import][type~=css]",Te="include",Ne="shady-unscoped";function Pe(t){return Ee.import(t)}function Ie(t){const e=ce((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function Re(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...Be(e[t]));return i}function Be(t){const e=Pe(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...$e(e));const i=e.querySelector("template");i&&t.push(...De(i,e.assetpath)),e._styles=t}return e._styles}function De(t,e){if(!t._styles){const i=[],H=t.content.querySelectorAll("style");for(let t=0;t<H.length;t++){let V=H[t],a=V.getAttribute(Te);a&&i.push(...Re(a).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(V.textContent=ce(V.textContent,e)),i.push(V)}t._styles=i}return t._styles}function $e(t){const e=[],i=t.querySelectorAll(Oe);for(let t=0;t<i.length;t++){let H=i[t];if(H.import){const t=H.import,i=H.hasAttribute(Ne);if(i&&!t._unscopedStyle){const e=Ie(t);e.setAttribute(Ne,""),t._unscopedStyle=e}else t._style||(t._style=Ie(t));e.push(i?t._unscopedStyle:t._style)}}return e}function je(t){let e=Pe(t);if(e&&void 0===e._cssText){let t=function(t){let e="",i=$e(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const H=De(t,e);for(let t=0;t<H.length;t++){let e=H[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Fe(t){return t.indexOf(".")>=0}function qe(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function Ue(t,e){return 0===t.indexOf(e+".")}function Ye(t,e){return 0===e.indexOf(t+".")}function Ke(t,e,i){return e+i.slice(t.length)}function We(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let H=t[i].toString().split(".");for(let t=0;t<H.length;t++)e.push(H[t])}return e.join(".")}return t}function Qe(t){return Array.isArray(t)?We(t).split("."):t.toString().split(".")}function Ge(t,e,i){let H=t,V=Qe(e);for(let t=0;t<V.length;t++){if(!H)return;H=H[V[t]]}return i&&(i.path=V.join(".")),H}function Je(t,e,i){let H=t,V=Qe(e),a=V[V.length-1];if(V.length>1){for(let t=0;t<V.length-1;t++){if(H=H[V[t]],!H)return}H[a]=i}else H[e]=i;return V.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xe={},ti=/-[a-z]/g,ei=/([A-Z])/g;function ii(t){return Xe[t]||(Xe[t]=t.indexOf("-")<0?t:t.replace(ti,t=>t[1].toUpperCase()))}function Hi(t){return Xe[t]||(Xe[t]=t.replace(ei,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Vi=0,ai=0,Ci=[],ni=0,oi=document.createTextNode("");new window.MutationObserver((function(){const t=Ci.length;for(let e=0;e<t;e++){let t=Ci[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Ci.splice(0,t),ai+=t})).observe(oi,{characterData:!0});const ri={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Li={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},di={run:t=>(oi.textContent=ni++,Ci.push(t),Vi++),cancel(t){const e=t-ai;if(e>=0){if(!Ci[e])throw new Error("invalid async handle: "+t);Ci[e]=null}}},si=di,li=we(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let H=this.__data[t],V=this._shouldPropertyChange(t,e,H);return V&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=H),this.__data[t]=e,this.__dataPending[t]=e),V}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,si.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i))}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,H){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,H)}_attributeToProperty(t,e,i){if(!this.__serializing){const H=this.__dataAttributes,V=H&&H[t]||t;this[V]=this._deserializeValue(e,i||this.constructor.typeForProperty(V))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const H=this._serializeValue(e);void 0===H?t.removeAttribute(i):t.setAttribute(i,H)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}}),Mi={};let hi=HTMLElement.prototype;for(;hi;){let t=Object.getOwnPropertyNames(hi);for(let e=0;e<t.length;e++)Mi[t[e]]=!0;hi=Object.getPrototypeOf(hi)}const Ai=we(t=>{const e=li(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(ii(t[e]))}static attributeNameForProperty(t){return Hi(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!Mi[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),gi={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function pi(t){let e=t.getAttribute("is");if(e&&gi[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function ci(t,e){let i=e.parentInfo&&ci(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,H=0;t;t=t.nextSibling)if(e.parentIndex===H++)return t}function ui(t,e,i,H){H.id&&(e[H.id]=i)}function fi(t,e,i){if(i.events&&i.events.length)for(let H,V=0,a=i.events;V<a.length&&(H=a[V]);V++)t._addMethodEventListenerToNode(e,H.name,H.value,t)}function mi(t,e,i){i.templateInfo&&(e._templateInfo=i.templateInfo)}const _i=we(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let H,V=t;return"template"!=V.localName||V.hasAttribute("preserve-content")?"slot"===V.localName&&(e.hasInsertionPoint=!0):H=this._parseTemplateNestedTemplate(V,e,i)||H,V.firstChild&&(H=this._parseTemplateChildNodes(V,e,i)||H),V.hasAttributes&&V.hasAttributes()&&(H=this._parseTemplateNodeAttributes(V,e,i)||H),H}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let H,V=t.firstChild,a=0;V;V=H){if("template"==V.localName&&(V=pi(V)),H=V.nextSibling,V.nodeType===Node.TEXT_NODE){let i=H;for(;i&&i.nodeType===Node.TEXT_NODE;)V.textContent+=i.textContent,H=i.nextSibling,t.removeChild(i),i=H;if(e.stripWhiteSpace&&!V.textContent.trim()){t.removeChild(V);continue}}let C={parentIndex:a,parentInfo:i};this._parseTemplateNode(V,e,C)&&(C.infoIndex=e.nodeInfoList.push(C)-1),V.parentNode&&a++}}static _parseTemplateNestedTemplate(t,e,i){let H=this._parseTemplate(t,e);return(H.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),i.templateInfo=H,!0}static _parseTemplateNodeAttributes(t,e,i){let H=!1,V=Array.from(t.attributes);for(let a,C=V.length-1;a=V[C];C--)H=this._parseTemplateNodeAttribute(t,e,i,a.name,a.value)||H;return H}static _parseTemplateNodeAttribute(t,e,i,H,V){return"on-"===H.slice(0,3)?(t.removeAttribute(H),i.events=i.events||[],i.events.push({name:H.slice(3),value:V}),!0):"id"===H&&(i.id=V,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),i=e.nodeInfoList,H=e.content||t.content,V=document.importNode(H,!0);V.__noInsertionPoint=!e.hasInsertionPoint;let a=V.nodeList=new Array(i.length);V.$={};for(let t,e=0,H=i.length;e<H&&(t=i[e]);e++){let i=a[e]=ci(V,t);ui(0,V.$,i,t),mi(0,i,t),fi(this,i,t)}return V=V,V}_addMethodEventListenerToNode(t,e,i,H){let V=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(H=H||t,0,i);return this._addEventListenerToNode(t,e,V),V}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let bi=0;const vi={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},yi=/[A-Z]/;function Zi(t,e){let i=t[e];if(i){if(!t.hasOwnProperty(e)){i=t[e]=Object.create(t[e]);for(let t in i){let e=i[t],H=i[t]=Array(e.length);for(let t=0;t<e.length;t++)H[t]=e[t]}}}else i=t[e]={};return i}function wi(t,e,i,H,V,a){if(e){let C=!1,n=bi++;for(let o in i)ki(t,e,n,o,i,H,V,a)&&(C=!0);return C}return!1}function ki(t,e,i,H,V,a,C,n){let o=!1,r=e[C?qe(H):H];if(r)for(let e,L=0,d=r.length;L<d&&(e=r[L]);L++)e.info&&e.info.lastRun===i||C&&!xi(H,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,H,V,a,e.info,C,n),o=!0);return o}function xi(t,e){if(e){let i=e.name;return i==t||e.structured&&Ue(i,t)||e.wildcard&&Ye(i,t)}return!0}function Si(t,e,i,H,V){let a="string"==typeof V.method?t[V.method]:V.method,C=V.property;a?a.call(t,t.__data[C],H[C]):V.dynamicFn||console.warn("observer method `"+V.method+"` not defined")}function zi(t,e,i){let H=qe(e);if(H!==e){return Ei(t,Hi(H)+"-changed",i[e],e),!0}return!1}function Ei(t,e,i,H){let V={value:i,queueProperty:!0};H&&(V.path=H),t.dispatchEvent(new CustomEvent(e,{detail:V}))}function Oi(t,e,i,H,V,a){let C=(a?qe(e):e)!=e?e:null,n=C?Ge(t,C):t.__data[e];C&&void 0===n&&(n=i[e]),Ei(t,V.eventName,n,C)}function Ti(t,e,i,H,V){let a=t.__data[e];_e&&(a=_e(a,V.attrName,"attribute",t)),t._propertyToAttribute(e,V.attrName,a)}function Ni(t,e,i,H,V){let a=ji(t,e,i,H,V),C=V.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[C]?t._setPendingProperty(C,a,!0):t[C]=a}function Pi(t,e,i,H,V,a,C){i.bindings=i.bindings||[];let n={kind:H,target:V,parts:a,literal:C,isCompound:1!==a.length};if(i.bindings.push(n),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(n)){let{event:t,negate:e}=n.parts[0];n.listenerEvent=t||Hi(V)+"-changed",n.listenerNegate=e}let o=e.nodeInfoList.length;for(let i=0;i<n.parts.length;i++){let H=n.parts[i];H.compoundIndex=i,Ii(t,e,n,H,o)}}function Ii(t,e,i,H,V){if(!H.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let a=H.dependencies,C={index:V,binding:i,part:H,evaluator:t};for(let i=0;i<a.length;i++){let H=a[i];"string"==typeof H&&(H=Ki(H),H.wildcard=!0),t._addTemplatePropertyEffect(e,H.rootProperty,{fn:Ri,info:C,trigger:H})}}}function Ri(t,e,i,H,V,a,C){let n=C[V.index],o=V.binding,r=V.part;if(a&&r.source&&e.length>r.source.length&&"property"==o.kind&&!o.isCompound&&n.__isPropertyEffectsClient&&n.__dataHasAccessor&&n.__dataHasAccessor[o.target]){let H=i[e];e=Ke(r.source,o.target,e),n._setPendingPropertyOrPath(e,H,!1,!0)&&t._enqueueClient(n)}else{!function(t,e,i,H,V){V=function(t,e,i,H){if(i.isCompound){let V=t.__dataCompoundStorage[i.target];V[H.compoundIndex]=e,e=V.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,V,i,H),_e&&(V=_e(V,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,V,i.target);else{let H=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[H]?e[vi.READ_ONLY]&&e[vi.READ_ONLY][H]||e._setPendingProperty(H,V)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,H,V)}}(t,n,o,r,V.evaluator._evaluateBinding(t,r,e,i,H,a))}}function Bi(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),H=e.parts,V=new Array(H.length);for(let t=0;t<H.length;t++)V[t]=H[t].literal;let a=e.target;i[a]=V,e.literal&&"property"==e.kind&&(t[a]=e.literal)}}function Di(t,e,i){if(i.listenerEvent){let H=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,H,V){let a,C=t.detail,n=C&&C.path;n?(H=Ke(i,H,n),a=C&&C.value):a=t.currentTarget[i],a=V?!a:a,e[vi.READ_ONLY]&&e[vi.READ_ONLY][H]||!e._setPendingPropertyOrPath(H,a,!0,Boolean(n))||C&&C.queueProperty||e._invalidateProperties()}(t,e,i.target,H.source,H.negate)}))}}function $i(t,e,i,H,V,a){a=e.static||a&&("object"!=typeof a||a[e.methodName]);let C={methodName:e.methodName,args:e.args,methodInfo:V,dynamicFn:a};for(let V,a=0;a<e.args.length&&(V=e.args[a]);a++)V.literal||t._addPropertyEffect(V.rootProperty,i,{fn:H,info:C,trigger:V});a&&t._addPropertyEffect(e.methodName,i,{fn:H,info:C})}function ji(t,e,i,H,V){let a=t._methodHost||t,C=a[V.methodName];if(C){let H=t._marshalArgs(V.args,e,i);return C.apply(a,H)}V.dynamicFn||console.warn("method `"+V.methodName+"` not defined")}const Fi=[],qi=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Ui(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function Yi(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:Fi};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=Ki(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function Ki(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},H=e[0];switch("-"===H&&(H=e[1]),H>="0"&&H<="9"&&(H="#"),H){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=qe(e),i.structured=Fe(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function Wi(t,e,i,H){let V=i+".splices";t.notifyPath(V,{indexSplices:H}),t.notifyPath(i+".length",e.length),t.__data[V]={indexSplices:null}}function Qi(t,e,i,H,V,a){Wi(t,e,i,[{index:H,addedCount:V,removed:a,object:e,type:"splice"}])}const Gi=we(t=>{const e=_i(Ai(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return vi}_initializeProperties(){super._initializeProperties(),Ji.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[vi.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==vi.READ_ONLY);let H=Zi(this,e)[t];H||(H=this[e][t]=[]),H.push(i)}_removePropertyEffect(t,e,i){let H=Zi(this,e)[t],V=H.indexOf(i);V>=0&&H.splice(V,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,vi.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,vi.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,vi.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,vi.COMPUTE)}_setPendingPropertyOrPath(t,e,i,H){if(H||qe(Array.isArray(t)?t[0]:t)!==t){if(!H){let i=Ge(this,t);if(!(t=Je(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let H=t.__dataLinkedPaths;if(H){let V;for(let a in H){let C=H[a];Ye(a,e)?(V=Ke(a,C,e),t._setPendingPropertyOrPath(V,i,!0,!0)):Ye(C,e)&&(V=Ke(C,a,e),t._setPendingPropertyOrPath(V,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||(t[e]=i)}_setPendingProperty(t,e,i){let H=this.__dataHasPaths&&Fe(t),V=H?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,V[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),H?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(H||this[vi.NOTIFY]&&this[vi.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[vi.READ_ONLY]&&this[vi.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let H=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,i,H){let V=t[vi.COMPUTE];if(V){let a=e;for(;wi(t,V,a,i,H);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),a=t.__dataPending,t.__dataPending=null}}(this,e,i,H);let V=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,i,H),this._flushClients(),wi(this,this[vi.REFLECT],e,i,H),wi(this,this[vi.OBSERVE],e,i,H),V&&function(t,e,i,H,V){let a,C,n=t[vi.NOTIFY],o=bi++;for(let C in e)e[C]&&(n&&ki(t,n,o,C,i,H,V)?a=!0:V&&zi(t,C,i)&&(a=!0));a&&(C=t.__dataHost)&&C._invalidateProperties&&C._invalidateProperties()}(this,V,e,i,H),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[vi.PROPAGATE]&&wi(this,this[vi.PROPAGATE],t,e,i);let H=this.__templateInfo;for(;H;)wi(this,H.propertyEffects,t,e,i,H.nodeList),H=H.nextTemplateInfo}linkPaths(t,e){t=We(t),e=We(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=We(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};Wi(this,Ge(this,t,i),i.path,e)}get(t,e){return Ge(e||this,t)}set(t,e,i){i?Je(i,t,e):this[vi.READ_ONLY]&&this[vi.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},H=Ge(this,t,i),V=H.length,a=H.push(...e);return e.length&&Qi(this,H,i.path,V,e.length,[]),a}pop(t){let e={path:""},i=Ge(this,t,e),H=Boolean(i.length),V=i.pop();return H&&Qi(this,i,e.path,i.length,0,[V]),V}splice(t,e,i,...H){let V,a={path:""},C=Ge(this,t,a);return e<0?e=C.length-Math.floor(-e):e&&(e=Math.floor(e)),V=2===arguments.length?C.splice(e):C.splice(e,i,...H),(H.length||V.length)&&Qi(this,C,a.path,e,H.length,V),V}shift(t){let e={path:""},i=Ge(this,t,e),H=Boolean(i.length),V=i.shift();return H&&Qi(this,i,e.path,0,0,[V]),V}unshift(t,...e){let i={path:""},H=Ge(this,t,i),V=H.unshift(...e);return e.length&&Qi(this,H,i.path,0,e.length,[]),V}notifyPath(t,e){let i;if(1==arguments.length){let H={path:""};e=Ge(this,t,H),i=H.path}else i=Array.isArray(t)?We(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,vi.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let H={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,vi.OBSERVE,{fn:Si,info:H,trigger:{name:t}}),i&&this._addPropertyEffect(e,vi.OBSERVE,{fn:Si,info:H,trigger:{name:e}})}_createMethodObserver(t,e){let i=Yi(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");$i(this,i,vi.OBSERVE,ji,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,vi.NOTIFY,{fn:Oi,info:{eventName:Hi(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,vi.REFLECT,{fn:Ti,info:{attrName:e}})}_createComputedProperty(t,e,i){let H=Yi(e);if(!H)throw new Error("Malformed computed expression '"+e+"'");$i(this,H,vi.COMPUTE,Ni,t,i)}_marshalArgs(t,e,i){const H=this.__data;let V=[];for(let a=0,C=t.length;a<C;a++){let C,n=t[a],o=n.name;if(n.literal?C=n.value:n.structured?(C=Ge(H,o),void 0===C&&(C=i[o])):C=H[o],n.wildcard){let t=0===o.indexOf(e+"."),H=0===e.indexOf(o)&&!t;V[a]={path:H?e:o,value:H?i[e]:C,base:C}}else V[a]=C}return V}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),H=this.__templateInfo==i;if(!H)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e&&(i=Object.create(i),i.wasPreBound=H,!H&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=i,i.previousTemplateInfo=t,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let H=t.propertyEffects=t.propertyEffects||{};(H[e]=H[e]||[]).push(i)}_stampTemplate(t){Ji.beginHosting(this);let e=super._stampTemplate(t);Ji.endHosting(this);let i=this._bindTemplate(t,!0);if(i.nodeList=e.nodeList,!i.wasPreBound){let t=i.childNodes=[];for(let i=e.firstChild;i;i=i.nextSibling)t.push(i)}return e.templateInfo=i,function(t,e){let{nodeList:i,nodeInfoList:H}=e;if(H.length)for(let e=0;e<H.length;e++){let V=H[e],a=i[e],C=V.bindings;if(C)for(let e=0;e<C.length;e++){let i=C[e];Bi(a,i),Di(a,t,i)}a.__dataHost=t}}(this,i),this.__dataReady&&wi(this,i.propertyEffects,this.__data,null,!1,i.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,i){let H=super._parseTemplateNode(t,e,i);if(t.nodeType===Node.TEXT_NODE){let V=this._parseBindings(t.textContent,e);V&&(t.textContent=Ui(V)||" ",Pi(this,e,i,"text","textContent",V),H=!0)}return H}static _parseTemplateNodeAttribute(t,e,i,H,V){let a=this._parseBindings(V,e);if(a){let V=H,C="property";yi.test(H)?C="attribute":"$"==H[H.length-1]&&(H=H.slice(0,-1),C="attribute");let n=Ui(a);return n&&"attribute"==C&&t.setAttribute(H,n),"input"===t.localName&&"value"===V&&t.setAttribute(V,""),t.removeAttribute(V),"property"===C&&(H=ii(H)),Pi(this,e,i,C,H,a,n),!0}return super._parseTemplateNodeAttribute(t,e,i,H,V)}static _parseTemplateNestedTemplate(t,e,i){let H=super._parseTemplateNestedTemplate(t,e,i),V=i.templateInfo.hostProps;for(let t in V){Pi(this,e,i,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return H}static _parseBindings(t,e){let i,H=[],V=0;for(;null!==(i=qi.exec(t));){i.index>V&&H.push({literal:t.slice(V,i.index)});let a=i[1][0],C=Boolean(i[2]),n=i[3].trim(),o=!1,r="",L=-1;"{"==a&&(L=n.indexOf("::"))>0&&(r=n.substring(L+2),n=n.substring(0,L),o=!0);let d=Yi(n),s=[];if(d){let{args:t,methodName:i}=d;for(let e=0;e<t.length;e++){let i=t[e];i.literal||s.push(i)}let H=e.dynamicFns;(H&&H[i]||d.static)&&(s.push(i),d.dynamicFn=!0)}else s.push(n);H.push({source:n,mode:a,negate:C,customEvent:o,signature:d,dependencies:s,event:r}),V=qi.lastIndex}if(V&&V<t.length){let e=t.substring(V);e&&H.push({literal:e})}return H.length?H:null}static _evaluateBinding(t,e,i,H,V,a){let C;return C=e.signature?ji(t,i,H,0,e.signature):i!=e.source?Ge(t,e.source):a&&Fe(i)?Ge(t,i):t.__data[i],e.negate&&(C=!C),C}}});const Ji=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xi=we(t=>{const e=li(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof V?e:null}function H(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=function(t){const e={};for(let i in t){const H=t[i];e[i]="function"==typeof H?{type:H}:H}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class V extends e{static get observedAttributes(){const t=this._properties;return t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=H(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,H(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return V}),tH="3.0.5",eH=we(t=>{const e=Xi(Gi(t));function i(t,e,i,H){i.computed&&(i.readOnly=!0),i.computed&&!t._hasReadOnlyEffect(e)&&t._createComputedProperty(e,i.computed,H),i.readOnly&&!t._hasReadOnlyEffect(e)&&t._createReadOnlyProperty(e,!i.computed),i.reflectToAttribute&&!t._hasReflectEffect(e)&&t._createReflectedProperty(e),i.notify&&!t._hasNotifyEffect(e)&&t._createNotifyingProperty(e),i.observer&&t._createPropertyObserver(e,i.observer,H[i.observer]),t._addPropertyToAttributeMap(e)}function H(t,e,i,H){const V=e.content.querySelectorAll("style"),a=De(e),C=function(t){let e=Pe(t);return e?$e(e):[]}(i),n=e.content.firstElementChild;for(let i=0;i<C.length;i++){let V=C[i];V.textContent=t._processStyleText(V.textContent,H),e.content.insertBefore(V,n)}let o=0;for(let e=0;e<a.length;e++){let i=a[e],C=V[o];C!==i?(i=i.cloneNode(!0),C.parentNode.insertBefore(i,C)):o++,i.textContent=t._processStyleText(i.textContent,H)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i)}return class extends e{static get polymerElementVersion(){return tH}static _finalizeClass(){super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&this.prototype;const t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);var e;t&&this.createObservers(t,this._properties);let i=this.template;i&&("string"==typeof i?(console.error("template getter must return HTMLTemplateElement"),i=null):i=i.cloneNode(!0)),this.prototype._template=i}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let H=0;H<t.length;H++)i._createMethodObserver(t[H],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!ve||ye)&&(e=Ee.import(t,"template"),ve&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=ue(t.url);else{const t=Ee.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=me,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let H=e[i];"value"in H&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=H)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return ce(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;H(this,e,t,i?pe(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){if(this.attachShadow)return t?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=pe(this.importPath)),pe(t,e)}static _parseTemplateContent(t,e,i){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,i)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class iH{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof iH?t.cancel():t=new iH,t.setConfig(e,i),t}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let HH="string"==typeof document.head.style.touchAction,VH="__polymerGestures",aH="__polymerGesturesHandled",CH="__polymerGesturesTouchAction",nH=25,oH=5,rH=2500,LH=["mousedown","mousemove","mouseup","click"],dH=[0,1,4,2],sH=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function lH(t){return LH.indexOf(t)>-1}let MH=!1;function hH(t){if(!lH(t)&&"touchend"!==t)return HH&&MH&&be?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){MH=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let AH=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const gH=[],pH={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},cH={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function uH(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let H=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<H.length;t++)e.push(H[t])}}return e}let fH=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[aH]={skip:!0},"click"===t.type)){let e=!1,H=t.composedPath&&t.composedPath();if(H)for(let t=0;t<H.length;t++){if(H[t].nodeType===Node.ELEMENT_NODE)if("label"===H[t].localName)gH.push(H[t]);else if(i=H[t],pH[i.localName]){let i=uH(H[t]);for(let t=0;t<i.length;t++)e=e||gH.indexOf(i[t])>-1}if(H[t]===bH.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function mH(t){let e=AH?["click"]:LH;for(let i,H=0;H<e.length;H++)i=e[H],t?(gH.length=0,document.addEventListener(i,fH,!0)):document.removeEventListener(i,fH,!0)}function _H(t){let e=t.type;if(!lH(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!sH&&(e=dH[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let bH={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function vH(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function yH(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){bH.mouse.mouseIgnoreJob||mH(!0),bH.mouse.target=t.composedPath()[0],bH.mouse.mouseIgnoreJob=iH.debounce(bH.mouse.mouseIgnoreJob,ri.after(rH),(function(){mH(),bH.mouse.target=null,bH.mouse.mouseIgnoreJob=null}))}),!!MH&&{passive:!0});const ZH={},wH=[];function kH(t){if(t.composedPath){const e=t.composedPath();return e.length>0?e[0]:t.target}return t.target}function xH(t){let e,i=t.type,H=t.currentTarget[VH];if(!H)return;let V=H[i];if(V){if(!t[aH]&&(t[aH]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(bH.touch.id=e.identifier),bH.touch.id!==e.identifier)return;HH||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)bH.touch.x=e.clientX,bH.touch.y=e.clientY,bH.touch.scrollDecided=!1;else if("touchmove"===i){if(bH.touch.scrollDecided)return;bH.touch.scrollDecided=!0;let i=function(t){let e="auto",i=t.composedPath&&t.composedPath();if(i)for(let t,H=0;H<i.length;H++)if(t=i[H],t[CH]){e=t[CH];break}return e}(t),H=!1,V=Math.abs(bH.touch.x-e.clientX),a=Math.abs(bH.touch.y-e.clientY);t.cancelable&&("none"===i?H=!0:"pan-x"===i?H=a>V:"pan-y"===i&&(H=V>a)),H?t.preventDefault():NH("track")}}(t)}if(e=t[aH],!e.skip){for(let i,H=0;H<wH.length;H++)i=wH[H],V[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let H,a=0;a<wH.length;a++)H=wH[a],V[H.name]&&!e[H.name]&&(e[H.name]=!0,H[i](t))}}}function SH(t,e,i){return!!ZH[e]&&(function(t,e,i){let H=ZH[e],V=H.deps,a=H.name,C=t[VH];C||(t[VH]=C={});for(let e,i,H=0;H<V.length;H++)e=V[H],AH&&lH(e)&&"click"!==e||(i=C[e],i||(C[e]=i={_count:0}),0===i._count&&t.addEventListener(e,xH,hH(e)),i[a]=(i[a]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),H.touchAction&&OH(t,H.touchAction)}(t,e,i),!0)}function zH(t,e,i){return!!ZH[e]&&(function(t,e,i){let H=ZH[e],V=H.deps,a=H.name,C=t[VH];if(C)for(let e,i,H=0;H<V.length;H++)e=V[H],i=C[e],i&&i[a]&&(i[a]=(i[a]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,xH,hH(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function EH(t){wH.push(t);for(let e=0;e<t.emits.length;e++)ZH[t.emits[e]]=t}function OH(t,e){HH&&t instanceof HTMLElement&&di.run(()=>{t.style.touchAction=e}),t[CH]=e}function TH(t,e,i){let H=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(H.detail=i,t.dispatchEvent(H),H.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function NH(t){let e=function(t){for(let e,i=0;i<wH.length;i++){e=wH[i];for(let i,H=0;H<e.emits.length;H++)if(i=e.emits[H],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function PH(t,e,i,H){e&&TH(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:H,prevent:function(t){return NH(t)}})}function IH(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let H=Math.abs(t.x-e),V=Math.abs(t.y-i);return H>=oH||V>=oH}function RH(t,e,i){if(!e)return;let H,V=t.moves[t.moves.length-2],a=t.moves[t.moves.length-1],C=a.x-t.x,n=a.y-t.y,o=0;V&&(H=a.x-V.x,o=a.y-V.y),TH(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:C,dy:n,ddx:H,ddy:o,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),H=i;for(;H&&H.shadowRoot&&!window.ShadyDOM;){let V=H;if(H=H.shadowRoot.elementFromPoint(t,e),V===H)break;H&&(i=H)}return i}(i.clientX,i.clientY)}})}function BH(t,e,i){let H=Math.abs(e.clientX-t.x),V=Math.abs(e.clientY-t.y),a=kH(i||e);!a||cH[a.localName]&&a.hasAttribute("disabled")||(isNaN(H)||isNaN(V)||H<=nH&&V<=nH||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=kH(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),H=t.pageX,V=t.pageY;return!(H>=i.left&&H<=i.right&&V>=i.top&&V<=i.bottom)}return!1}(e))&&(t.prevent||TH(a,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}EH({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){yH(this.info)},mousedown:function(t){if(!_H(t))return;let e=kH(t),i=this;vH(this.info,(function(t){_H(t)||(PH("up",e,t),yH(i.info))}),(function(t){_H(t)&&PH("up",e,t),yH(i.info)})),PH("down",e,t)},touchstart:function(t){PH("down",kH(t),t.changedTouches[0],t)},touchend:function(t){PH("up",kH(t),t.changedTouches[0],t)}}),EH({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,yH(this.info)},mousedown:function(t){if(!_H(t))return;let e=kH(t),i=this,H=function(t){let H=t.clientX,V=t.clientY;IH(i.info,H,V)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&NH("tap"),i.info.addMove({x:H,y:V}),_H(t)||(i.info.state="end",yH(i.info)),e&&RH(i.info,e,t),i.info.started=!0)};vH(this.info,H,(function(t){i.info.started&&H(t),yH(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=kH(t),i=t.changedTouches[0],H=i.clientX,V=i.clientY;IH(this.info,H,V)&&("start"===this.info.state&&NH("tap"),this.info.addMove({x:H,y:V}),RH(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=kH(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),RH(this.info,e,i))}}),EH({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){_H(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){_H(t)&&BH(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){BH(this.info,t.changedTouches[0],t)}});const DH=kH,$H=SH,jH=we(t=>{return class extends t{_addEventListenerToNode(t,e,i){SH(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){zH(t,e,i)||super._removeEventListenerFromNode(t,e,i)}}}),FH=/:host\(:dir\((ltr|rtl)\)\)/g,qH=':host([dir="$1"])',UH=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,YH=':host([dir="$2"]) $1',KH=[];let WH=null,QH="";function GH(){QH=document.documentElement.getAttribute("dir")}function JH(t){if(!t.__autoDirOptOut){t.setAttribute("dir",QH)}}function XH(){GH(),QH=document.documentElement.getAttribute("dir");for(let t=0;t<KH.length;t++)JH(KH[t])}const tV=we(t=>{WH||(GH(),WH=new MutationObserver(XH),WH.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Ai(t);class i extends e{static _processStyleText(t,e){return t=super._processStyleText(t,e),t=this._replaceDirInCssText(t)}static _replaceDirInCssText(t){let e=t;return e=e.replace(FH,qH),e=e.replace(UH,YH),t!==e&&(this.__activateDir=!0),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(WH&&WH.takeRecords().length&&XH(),KH.push(this),JH(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=KH.indexOf(this);t>-1&&KH.splice(t,1)}}}return i.__activateDir=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function eV(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function iV(t,e,i){return{index:t,removed:e,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?eV():window.addEventListener("DOMContentLoaded",eV);const HV=0,VV=1,aV=2,CV=3;function nV(t,e,i,H,V,a){let C,n=0,o=0,r=Math.min(i-e,a-V);if(0==e&&0==V&&(n=function(t,e,i){for(let H=0;H<i;H++)if(!rV(t[H],e[H]))return H;return i}(t,H,r)),i==t.length&&a==H.length&&(o=function(t,e,i){let H=t.length,V=e.length,a=0;for(;a<i&&rV(t[--H],e[--V]);)a++;return a}(t,H,r-n)),V+=n,a-=o,(i-=o)-(e+=n)==0&&a-V==0)return[];if(e==i){for(C=iV(e,[],0);V<a;)C.removed.push(H[V++]);return[C]}if(V==a)return[iV(e,[],i-e)];let L=function(t){let e=t.length-1,i=t[0].length-1,H=t[e][i],V=[];for(;e>0||i>0;){if(0==e){V.push(aV),i--;continue}if(0==i){V.push(CV),e--;continue}let a,C=t[e-1][i-1],n=t[e-1][i],o=t[e][i-1];a=n<o?n<C?n:C:o<C?o:C,a==C?(C==H?V.push(HV):(V.push(VV),H=C),e--,i--):a==n?(V.push(CV),e--,H=n):(V.push(aV),i--,H=o)}return V.reverse(),V}(function(t,e,i,H,V,a){let C=a-V+1,n=i-e+1,o=new Array(C);for(let t=0;t<C;t++)o[t]=new Array(n),o[t][0]=t;for(let t=0;t<n;t++)o[0][t]=t;for(let i=1;i<C;i++)for(let a=1;a<n;a++)if(rV(t[e+a-1],H[V+i-1]))o[i][a]=o[i-1][a-1];else{let t=o[i-1][a]+1,e=o[i][a-1]+1;o[i][a]=t<e?t:e}return o}(t,e,i,H,V,a));C=void 0;let d=[],s=e,l=V;for(let t=0;t<L.length;t++)switch(L[t]){case HV:C&&(d.push(C),C=void 0),s++,l++;break;case VV:C||(C=iV(s,[],0)),C.addedCount++,s++,C.removed.push(H[l]),l++;break;case aV:C||(C=iV(s,[],0)),C.addedCount++,s++;break;case CV:C||(C=iV(s,[],0)),C.removed.push(H[l]),l++}return C&&d.push(C),d}function oV(t,e){return nV(t,0,t.length,e,0,e.length)}function rV(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function LV(t){return"slot"===t.localName}class dV{static getFlattenedNodes(t){return LV(t)?(t=t).assignedNodes({flatten:!0}):Array.from(t.childNodes).map(t=>LV(t)?(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){LV(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){LV(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,di.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=oV(e,this._effectiveNodes);for(let e,H=0;H<i.length&&(e=i[H]);H++)for(let i,H=0;H<e.removed.length&&(i=e.removed[H]);H++)t.removedNodes.push(i);for(let H,V=0;V<i.length&&(H=i[V]);V++)for(let i=H.index;i<H.index+H.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let H=!1;return(t.addedNodes.length||t.removedNodes.length)&&(H=!0,this.callback.call(this._target,t)),H}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];LV(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];LV(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let sV=[];const lV=function(t){sV.push(t)};function MV(){const t=Boolean(sV.length);for(;sV.length;)try{sV.shift().flush()}catch(t){setTimeout(()=>{throw t})}return t}const hV=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=MV()}while(t||e)},AV=Element.prototype,gV=AV.matches||AV.matchesSelector||AV.mozMatchesSelector||AV.msMatchesSelector||AV.oMatchesSelector||AV.webkitMatchesSelector,pV=function(t,e){return gV.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class cV{constructor(t){this.node=t}observeNodes(t){return new dV(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(this.node.contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=e.parentNode||e.host;return e===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=this.node.assignedSlot;for(;e;)t.push(e),e=e.assignedSlot;return t}importNode(t,e){return(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(t,e)}getEffectiveChildNodes(){return dV.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let H,V=0,a=e.length;V<a&&(H=e[V]);V++)H.nodeType===Node.ELEMENT_NODE&&pV(H,t)&&i.push(H);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}class uV{constructor(t){this.event=t}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}cV.prototype.cloneNode,cV.prototype.appendChild,cV.prototype.insertBefore,cV.prototype.removeChild,cV.prototype.replaceChild,cV.prototype.setAttribute,cV.prototype.removeAttribute,cV.prototype.querySelector,cV.prototype.querySelectorAll,cV.prototype.parentNode,cV.prototype.firstChild,cV.prototype.lastChild,cV.prototype.nextSibling,cV.prototype.previousSibling,cV.prototype.firstElementChild,cV.prototype.lastElementChild,cV.prototype.nextElementSibling,cV.prototype.previousElementSibling,cV.prototype.childNodes,cV.prototype.children,cV.prototype.classList,cV.prototype.textContent,cV.prototype.innerHTML,function(t,e){for(let i=0;i<e.length;i++){let H=e[i];t[H]=function(){return this.node[H].apply(this.node,arguments)}}}(cV.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),function(t,e){for(let i=0;i<e.length;i++){let H=e[i];Object.defineProperty(t,H,{get:function(){return this.node[H]},configurable:!0})}}(cV.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let H=e[i];Object.defineProperty(t,H,{get:function(){return this.node[H]},set:function(t){this.node[H]=t},configurable:!0})}}(cV.prototype,["textContent","innerHTML"]);const fV=function(t){if(!(t=t||document).__domApi){let e;e=t instanceof Event?new uV(t):new cV(t),t.__domApi=e}return t.__domApi};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let mV=window.ShadyCSS;const _V=we(t=>{const e=tV(jH(eH(t))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class H extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this._applyListeners()}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,i,H){e!==i&&(super.attributeChangedCallback(t,e,i,H),this.attributeChanged(t,e,i))}attributeChanged(t,e,i){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(t.__hasRegisterFinished=!0,this._registered()),super._initializeProperties(),this.root=this,this.created()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let H,V=0;V<i.length&&(H=i[V]);V++){let i=Object.getOwnPropertyDescriptor(e,H);i&&Object.defineProperty(t,H,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let H=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return H.detail=e,(i.node||this).dispatchEvent(H),H}listen(t,e,i){t=t||this;let H=this.__boundListeners||(this.__boundListeners=new WeakMap),V=H.get(t);V||(V={},H.set(t,V));let a=e+i;V[a]||(V[a]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let H=this.__boundListeners&&this.__boundListeners.get(t),V=e+i,a=H&&H[V];a&&(this._removeEventListenerFromNode(t,e,a),H[V]=null)}setScrollDirection(t,e){OH(e||this,i[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=this.getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return fV(this).getEffectiveChildNodes()}queryDistributedElements(t){return fV(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,H=0;i=t[H];H++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?fV(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&this.contains(t)&&this.getRootNode()===t.getRootNode()}isLocalDescendant(t){return this.root===t.getRootNode()}scopeSubtree(t,e){}getComputedStyleValue(t){return mV.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=iH.debounce(this._debouncers[t],i>0?ri.after(i):di,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?ri.run(t.bind(this),e):~di.run(t.bind(this))}cancelAsync(t){t<0?di.cancel(~t):ri.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return pV(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(i.setAttribute(t,""),!0):(i.removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,H){H=H||this,this.transform("translate3d("+t+","+e+","+i+")",H)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else{if(i=Ge(this,t).indexOf(e),i>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return H.prototype.is="",H});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let bV={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};function vV(t,e){if(!t)return e=e;e=_V(e),Array.isArray(t)||(t=[t]);let i=e.prototype.behaviors;return e=function t(e,i){for(let H=0;H<e.length;H++){let V=e[H];V&&(i=Array.isArray(V)?t(V,i):yV(V,i))}return i}(t=function t(e,i,H){i=i||[];for(let V=e.length-1;V>=0;V--){let a=e[V];a?Array.isArray(a)?t(a,i):i.indexOf(a)<0&&(!H||H.indexOf(a)<0)&&i.unshift(a):console.warn("behavior is null, check for missing or 404 import")}return i}(t,null,i),e),i&&(t=i.concat(t)),e.prototype.behaviors=t,e}function yV(t,e){class i extends e{static get properties(){return t.properties}static get observers(){return t.observers}created(){super.created(),t.created&&t.created.call(this)}_registered(){super._registered(),t.beforeRegister&&t.beforeRegister.call(Object.getPrototypeOf(this)),t.registered&&t.registered.call(Object.getPrototypeOf(this))}_applyListeners(){if(super._applyListeners(),t.listeners)for(let e in t.listeners)this._addMethodEventListenerToNode(this,e,t.listeners[e])}_ensureAttributes(){if(t.hostAttributes)for(let e in t.hostAttributes)this._ensureAttribute(e,t.hostAttributes[e]);super._ensureAttributes()}ready(){super.ready(),t.ready&&t.ready.call(this)}attached(){super.attached(),t.attached&&t.attached.call(this)}detached(){super.detached(),t.detached&&t.detached.call(this)}attributeChanged(e,i,H){super.attributeChanged(e,i,H),t.attributeChanged&&t.attributeChanged.call(this,e,i,H)}}i.generatedFrom=t;for(let e in t)if(!(e in bV)){let H=Object.getOwnPropertyDescriptor(t,e);H&&Object.defineProperty(i.prototype,e,H)}return i}const ZV=function(t){let e;return e="function"==typeof t?t:ZV.Class(t),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function wV(t,e,i,H,V){let a;V&&(a="object"==typeof i&&null!==i,a&&(H=t.__dataTemp[e]));let C=H!==i&&(H==H||i==i);return a&&C&&(t.__dataTemp[e]=i),C}ZV.Class=function(t,e){t||console.warn("Polymer's Class function requires `info` argument");const i=t.behaviors?vV(t.behaviors,HTMLElement):_V(HTMLElement),H=yV(t,e?e(i):i);return H.is=t.is,H};const kV=we(t=>{return class extends t{_shouldPropertyChange(t,e,i){return wV(this,t,e,i,!0)}}}),xV=we(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return wV(this,t,e,i,this.mutableData)}}});kV._mutablePropertyChange=wV;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let SV=null;function zV(){return SV}zV.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:zV,writable:!0}});const EV=Gi(zV),OV=kV(EV);const TV=Gi(class{});class NV extends TV{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=this.children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let H=this.__dataHost.__dataHost;H&&H._addEventListenerToNode(t,e,i)}}_showHideChildren(t){let e=this.children;for(let i=0;i<e.length;i++){let H=e[i];if(Boolean(t)!=Boolean(H.__hideTemplateChildren__))if(H.nodeType===Node.TEXT_NODE)t?(H.__polymerTextContent__=H.textContent,H.textContent=""):H.textContent=H.__polymerTextContent__;else if("slot"===H.localName)if(t)H.__polymerReplaced__=document.createComment("hidden-slot"),H.parentNode.replaceChild(H.__polymerReplaced__,H);else{const t=H.__polymerReplaced__;t&&t.parentNode.replaceChild(H,t)}else H.style&&(t?(H.__polymerDisplay__=H.style.display,H.style.display="none"):H.style.display=H.__polymerDisplay__);H.__hideTemplateChildren__=t,H._showHideChildren&&H._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}NV.prototype.__dataHost,NV.prototype.__templatizeOptions,NV.prototype._methodHost,NV.prototype.__templatizeOwner,NV.prototype.__hostProps;const PV=kV(NV);function IV(t){let e=t.__dataHost;return e&&e._methodHost||e}function RV(t,e,i){let H=i.mutableData?PV:NV,V=class extends H{};return V.prototype.__templatizeOptions=i,V.prototype._bindTemplate(t),function(t,e,i,H){let V=i.hostProps||{};for(let e in H.instanceProps){delete V[e];let i=H.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:$V(e,i)})}if(H.forwardHostProp&&e.__dataHost)for(let e in V)t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(V,t,e,i),V}function BV(t,e,i){let H=i.forwardHostProp;if(H){let V=e.templatizeTemplateClass;if(!V){let t=i.mutableData?OV:EV;V=e.templatizeTemplateClass=class extends t{};let a=e.hostProps;for(let t in a)V.prototype._addPropertyEffect("_host_"+t,V.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:DV(t,H)}),V.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){SV=t,Object.setPrototypeOf(t,e.prototype),new e,SV=null}(t,V),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function DV(t,e){return function(t,i,H){e.call(t.__templatizeOwner,i.substring("_host_".length),H[i])}}function $V(t,e){return function(t,i,H){e.call(t.__templatizeOwner,t,i,H[i])}}function jV(t,e,i){if(ve&&!IV(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let H=(e?e.constructor:NV)._parseTemplate(t),V=H.templatizeInstanceClass;V||(V=RV(t,H,i),H.templatizeInstanceClass=V),BV(t,H,i);let a=class extends V{};return a.prototype._methodHost=IV(t),a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=H.hostProps,a=a,a}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const FV=jH(xV(Gi(HTMLElement)));customElements.define("dom-bind",class extends FV{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),ve)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class qV{constructor(t){this.value=t.toString()}toString(){return this.value}}function UV(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof qV)return function(t){if(t instanceof qV)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const YV=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce((e,i,H)=>e+UV(i)+t[H+1],t[0]),i},KV=eH(HTMLElement),WV=xV(KV);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class QV extends WV{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let t=this.parentNode;for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=jV(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let i=this.__instances;for(let H,V=0;V<i.length&&(H=i[V]);V++)H.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if(function(t,e){return t===e||Ue(t,e)||Ye(t,e)}(this.as,e)){let H=t[this.itemsIndexAs];e==this.as&&(this.items[H]=i);let V=Ke(this.as,"items."+H,e);this.notifyPath(V,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=iH.debounce(this.__renderDebouncer,e>0?ri.after(e):di,t.bind(this)),lV(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),hV()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;this.__filterFn&&(e=e.filter((e,i,H)=>this.__filterFn(t[e],i,H))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i]));const i=this.__itemsIdxToInstIdx={};let H=0;const V=Math.min(e.length,this.__limit);for(;H<V;H++){let V=this.__instances[H],a=e[H],C=t[a];i[a]=H,V?(V._setPendingProperty(this.as,C),V._setPendingProperty(this.indexAs,H),V._setPendingProperty(this.itemsIndexAs,a),V._flushProperties()):this.__insertInstance(C,H,a)}for(let t=this.__instances.length-1;t>=H;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];for(let t=0;t<e.children.length;t++){let i=e.children[t];e.root.appendChild(i)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,i){let H={};return H[this.as]=t,H[this.indexAs]=e,H[this.itemsIndexAs]=i,new this.__ctor(H)}__insertInstance(t,e,i){let H=this.__pool.pop();H?(H._setPendingProperty(this.as,t),H._setPendingProperty(this.indexAs,e),H._setPendingProperty(this.itemsIndexAs,i),H._flushProperties()):H=this.__stampInstance(t,e,i);let V=this.__instances[e+1],a=V?V.children[0]:this;return this.parentNode.insertBefore(H.root,a),this.__instances[e]=H,H}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),H=i.indexOf("."),V=H<0?i:i.substring(0,H);if(V==parseInt(V,10)){let t=H<0?"":i.substring(H+1);this.__handleObservedPaths(t);let a=this.__itemsIdxToInstIdx[V],C=this.__instances[a];if(C){let i=this.as+(t?"."+t:"");C._setPendingPropertyOrPath(i,e,!1,!0),C._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let i;for(;e;)if(i=e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=e.parentNode;return null}(this.template,t)}}customElements.define(QV.is,QV);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class GV extends KV{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=iH.debounce(this.__renderDebouncer,di,()=>this.__render()),lV(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){hV()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=this.parentNode;if(t){if(!this.__ctor){let t=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=jV(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[qe(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(this.previousSibling!==e[e.length-1])for(let i,H=0;H<e.length&&(i=e[H]);H++)t.insertBefore(i,this)}}else this.__instance=new this.__ctor,t.insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=t[0].parentNode;if(e)for(let i,H=0;H<t.length&&(i=t[H]);H++)e.removeChild(i)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(GV.is,GV);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let JV=we(t=>{let e=eH(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if("items"==i){let i=e.base||[],H=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),H){let t=oV(i,H);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if("items.splices"==e.path)this.__applySplices(e.value.indexSplices);else{let t=i.slice("items.".length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let i=0;i<t.length;i++){let H=t[i];e.forEach((t,i)=>{t<H.index||(t>=H.index+H.removed.length?e.set(i,t+H.addedCount-H.removed.length):e.set(i,-1))});for(let t=0;t<H.addedCount;t++){let i=H.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.__updateLinks();let i=0;e.forEach((t,H)=>{t<0?(this.multi?this.splice("selected",i,1):this.selected=this.selectedItem=null,e.delete(H)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths("items."+e,"selected."+t++)})}else this.__selectedMap.forEach(t=>{this.linkPaths("selected","items."+t),this.linkPaths("selectedItem","items."+t)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,H)=>{e==t++&&this.deselect(H)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths["items."+t];if(e)return parseInt(e.slice("selected.".length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice("selected",i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push("selected",e):this.selected=this.selectedItem=e)}}})(KV);class XV extends JV{static get is(){return"array-selector"}}customElements.define(XV.is,XV);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ta=new de;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){ta.processStyles(),Dt(t,e)},styleElement(t){ta.processStyles()},styleDocument(t){ta.processStyles(),Dt(document.body,t)},getComputedStyleValue:(t,e)=>$t(t,e),flushCustomStyles(){},nativeCss:gt,nativeShadow:st,cssBuild:Mt,disableRuntime:At}),window.ShadyCSS.CustomStyleInterface=ta;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ea="include",ia=window.ShadyCSS.CustomStyleInterface;class Ha extends HTMLElement{constructor(){super(),this._style=null,ia.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(ea);return e&&(t.removeAttribute(ea),t.textContent=function(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=je(e[t]);return i}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Ha);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Va=_V(HTMLElement).prototype,aa=YV`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/aa.setAttribute("style","display: none;"),document.head.appendChild(aa.content);var Ca=document.createElement("style");Ca.textContent="[hidden] { display: none !important; }",document.head.appendChild(Ca);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var na=new Set;const oa={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(na.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():fe||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=fV(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(na.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?na.delete(this):na.add(this)}},ra=[oa,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(t){fV(t).path[0]!==this&&(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var t=this._updateLayoutStates.bind(this);this._layoutDebouncer=iH.debounce(this._layoutDebouncer,Li,t),lV(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var t=this;requestAnimationFrame((function(){t.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this)}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[ra],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return fV(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),i=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=i+"px"}.bind(this));var i=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(i.marginTop=e+"px",i.paddingTop=""):(i.paddingTop=e+"px",i.marginTop="")}}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const La={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[t]:fV(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var i;"object"==typeof t?(i=t.left,e=t.top):i=t,i=i||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(i,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var i=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}},da={},sa=function(t,e){if(null!=da[t])throw new Error("effect `"+t+"` is already registered.");da[t]=e},la=[La,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var i=da[t];if(!i)throw new ReferenceError(this._getUndefinedMsg(t));var H=this._boundEffect(i,e||{});return H.setUp(),H},_effectsChanged:function(t,e,i){this._tearDownEffects(),t&&i&&(t.split(" ").forEach((function(t){var i;""!==t&&((i=da[t])?this._effects.push(this._boundEffect(i,e[t])):console.warn(this._getUndefinedMsg(t)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var i=parseFloat(e.startsAt||0),H=parseFloat(e.endsAt||1),V=H-i,a=function(){},C=0===i&&1===H?t.run:function(e,H){t.run.call(this,Math.max(0,(e-i)/V),H)};return{setUp:t.setUp?t.setUp.bind(this,e):a,run:t.run?C.bind(this):a,tearDown:t.tearDown?t.tearDown.bind(this):a}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(t){t.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(t,e)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[la,ra],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,e=fV(this.$.slot).getDistributedNodes(),i=0;t=e[i];i++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(t,e){if(0!==this._height){var i=0,H=0,V=this._top,a=(this._lastScrollTop,this._maxHeaderTop),C=t-this._lastScrollTop,n=Math.abs(C),o=t>this._lastScrollTop,r=performance.now();if(this._mayMove()&&(H=this._clamp(this.reveals?V+C:t,0,a)),t>=this._dHeight&&(H=this.condenses&&!this.fixed?Math.max(this._dHeight,H):H,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&n<100&&((r-this._initTimestamp>300||this._wasScrollingDown!==o)&&(this._initScrollTop=t,this._initTimestamp=r),t>=a))if(Math.abs(this._initScrollTop-t)>30||n>10){o&&t>=a?H=a:!o&&t>=this._dHeight&&(H=this.condenses&&!this.fixed?this._dHeight:0);var L=C/(r-this._lastTimestamp);this.style.transitionDuration=this._clamp((H-V)/L,0,300)+"ms"}else H=this._top;i=0===this._dHeight?t>0?1:0:H/this._dHeight,e||(this._lastScrollTop=t,this._top=H,this._wasScrollingDown=o,this._lastTimestamp=r),(e||i!==this._progress||V!==H||0===t)&&(this._progress=i,this._runEffects(i,H),this._transformHeader(H))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),fV(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return fV(this).querySelector("[main-title]");case"condensedTitle":return fV(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
sa("blend-background",{setUp:function(){var t={};t.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),t.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),t.backgroundFrontLayer.style.willChange="opacity",t.backgroundFrontLayer.style.transform="translateZ(0)",t.backgroundRearLayer.style.willChange="opacity",t.backgroundRearLayer.style.transform="translateZ(0)",t.backgroundRearLayer.style.opacity=0,this._fxBlendBackground=t},run:function(t,e){var i=this._fxBlendBackground;i.backgroundFrontLayer.style.opacity=1-t,i.backgroundRearLayer.style.opacity=t},tearDown:function(){delete this._fxBlendBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
sa("fade-background",{setUp:function(t){var e={},i=t.duration||"0.5s";e.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),e.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),e.backgroundFrontLayer.style.willChange="opacity",e.backgroundFrontLayer.style.webkitTransform="translateZ(0)",e.backgroundFrontLayer.style.transitionProperty="opacity",e.backgroundFrontLayer.style.transitionDuration=i,e.backgroundRearLayer.style.willChange="opacity",e.backgroundRearLayer.style.webkitTransform="translateZ(0)",e.backgroundRearLayer.style.transitionProperty="opacity",e.backgroundRearLayer.style.transitionDuration=i,this._fxFadeBackground=e},run:function(t,e){var i=this._fxFadeBackground;t>=1?(i.backgroundFrontLayer.style.opacity=0,i.backgroundRearLayer.style.opacity=1):(i.backgroundFrontLayer.style.opacity=1,i.backgroundRearLayer.style.opacity=0)},tearDown:function(){delete this._fxFadeBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
sa("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}}),sa("resize-title",{setUp:function(){var t=this._getDOMRef("mainTitle"),e=this._getDOMRef("condensedTitle");if(!e)return console.warn("Scroll effect `resize-title`: undefined `condensed-title`"),!1;if(!t)return console.warn("Scroll effect `resize-title`: undefined `main-title`"),!1;e.style.willChange="opacity",e.style.webkitTransform="translateZ(0)",e.style.transform="translateZ(0)",e.style.webkitTransformOrigin="left top",e.style.transformOrigin="left top",t.style.willChange="opacity",t.style.webkitTransformOrigin="left top",t.style.transformOrigin="left top",t.style.webkitTransform="translateZ(0)",t.style.transform="translateZ(0)";var i=t.getBoundingClientRect(),H=e.getBoundingClientRect(),V={};V.scale=parseInt(window.getComputedStyle(e)["font-size"],10)/parseInt(window.getComputedStyle(t)["font-size"],10),V.titleDX=i.left-H.left,V.titleDY=i.top-H.top,V.condensedTitle=e,V.title=t,this._fxResizeTitle=V},run:function(t,e){var i,H,V=this._fxResizeTitle;this.condenses||(e=0),t>=1?(V.title.style.opacity=0,V.condensedTitle.style.opacity=1):(V.title.style.opacity=1,V.condensedTitle.style.opacity=0),i=Math.min(1,t),H=[[1,V.scale],[0,-V.titleDX],[e,e-V.titleDY]],function(t,e,i){this.transform("translate("+e+"px, "+i+"px) scale3d("+t+", "+t+", 1)",V.title)}.apply(this,H.map((function(t){return t[0]+(t[1]-t[0])*i})))},tearDown:function(){delete this._fxResizeTitle}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
sa("parallax-background",{setUp:function(t){var e={},i=parseFloat(t.scalar);e.background=this._getDOMRef("background"),e.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),e.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),e.deltaBg=e.backgroundFrontLayer.offsetHeight-e.background.offsetHeight,0===e.deltaBg?(isNaN(i)&&(i=.8),e.deltaBg=(this._dHeight||0)*i):(isNaN(i)&&(i=1),e.deltaBg=e.deltaBg*i),this._fxParallaxBackground=e},run:function(t,e){var i=this._fxParallaxBackground;this.transform("translate3d(0px, "+i.deltaBg*Math.min(1,t)+"px, 0px)",i.backgroundFrontLayer),i.backgroundRearLayer&&this.transform("translate3d(0px, "+i.deltaBg*Math.min(1,t)+"px, 0px)",i.backgroundRearLayer)},tearDown:function(){delete this._fxParallaxBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
sa("material",{setUp:function(){return this.effects="waterfall resize-title blend-background parallax-background",!1}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
sa("resize-snapped-title",{setUp:function(t){var e=this._getDOMRef("mainTitle"),i=this._getDOMRef("condensedTitle"),H=t.duration||"0.2s",V={};return i?e?(e.style.transitionProperty="opacity",e.style.transitionDuration=H,i.style.transitionProperty="opacity",i.style.transitionDuration=H,V.condensedTitle=i,V.title=e,void(this._fxResizeSnappedTitle=V)):(console.warn("Scroll effect `resize-snapped-title`: undefined `main-title`"),!1):(console.warn("Scroll effect `resize-snapped-title`: undefined `condensed-title`"),!1)},run:function(t,e){var i=this._fxResizeSnappedTitle;t>0?(i.title.style.opacity=0,i.condensedTitle.style.opacity=1):(i.title.style.opacity=1,i.condensedTitle.style.opacity=0)},tearDown:function(){var t=this._fxResizeSnappedTitle;t.title.style.transition="",t.condensedTitle.style.transition="",delete this._fxResizeSnappedTitle}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Ma{constructor(t){Ma[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return Ma.types[t]&&Ma.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=Ma.types[e]=Ma.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=Ma.types[this.type];return t?Object.keys(t).map((function(t){return ha[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}Ma[" "]=function(){},Ma.types={};var ha=Ma.types;ZV({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var H=new Ma({type:t,key:e});return void 0!==i&&i!==H.value?H.value=i:this.value!==H.value&&(this.value=H.value),H},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new Ma({type:this.type,key:t}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Va.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&fV(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,fV(this.root).appendChild(this._img))}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Aa=YV`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Aa.setAttribute("style","display: none;"),document.head.appendChild(Aa.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ga=YV`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;ga.setAttribute("style","display: none;"),document.head.appendChild(ga.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const pa={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ca={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},ua={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},fa={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},ma=/[a-z0-9*]/,_a=/U\+/,ba=/^arrow/,va=/^space(bar)?/,ya=/^escape$/;function Za(t,e){var i="";if(t){var H=t.toLowerCase();" "===H||va.test(H)?i="space":ya.test(H)?i="esc":1==H.length?e&&!ma.test(H)||(i=H):i=ba.test(H)?H.replace("arrow",""):"multiply"==H?"*":H}return i}function wa(t,e){return t.key?Za(t.key,e):t.detail&&t.detail.key?Za(t.detail.key,e):(i=t.keyIdentifier,H="",i&&(i in ca?H=ca[i]:_a.test(i)?(i=parseInt(i.replace("U+","0x"),16),H=String.fromCharCode(i).toLowerCase()):H=i.toLowerCase()),H||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):ua[t]),e}(t.keyCode)||"");var i,H}function ka(t,e){return wa(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function xa(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var i=e.split(":"),H=i[0],V=i[1];return H in fa?(t[fa[H]]=!0,t.hasModifiers=!0):(t.key=H,t.event=V||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const Sa={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=xa(e),H=0;H<i.length;++H)if(ka(i[H],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var i=t[0].hasModifiers;return i===e[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(t,e){xa(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,i,H;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],i=t[1],H=t[2],e.removeEventListener(i,H)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var H=t[i][0],V=t[i][1];if(ka(H,e)&&(this._triggerKeyHandler(H,V,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var H=Object.create(t);H.keyboardEvent=i;var V=new CustomEvent(t.event,{detail:H,cancelable:!0});this[e].call(this,V),V.defaultPrevented&&i.preventDefault()}},za={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,i=fV(e).localTarget;this.isLightDescendant(i)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,i=fV(e).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Ea=[Sa,za];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Oa={distance:function(t,e,i,H){var V=t-i,a=e-H;return Math.sqrt(V*V+a*a)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Ta(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Na(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),fV(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}Ta.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var i=Oa.distance(t,e,0,0),H=Oa.distance(t,e,this.width,0),V=Oa.distance(t,e,0,this.height),a=Oa.distance(t,e,this.width,this.height);return Math.max(i,H,V,a)}},Na.MAX_RADIUS=300,Na.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=Oa.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?Oa.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(t+e),Na.MAX_RADIUS)+5,H=1.1-i/Na.MAX_RADIUS*.2,V=this.mouseInteractionSeconds/H,a=i*(1-Math.pow(80,-V));return Math.abs(a)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Na.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Na.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Ta(this.element)},draw:function(){var t,e,i;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Oa.now(),this.center?(this.xStart=e,this.yStart=i,this.slideDistance=Oa.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=i,this.slideDistance=Oa.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=Oa.now())},remove:function(){fV(this.waveContainer.parentNode).removeChild(this.waveContainer)}},ZV({_template:YV`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Sa],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=fV(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach((function(e){e.upAction(t)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var t=new Na(this);return fV(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Pa={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){za._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&fV(e).appendChild(this._ripple),t){var i=fV(this._rippleContainer||this),H=fV(t).rootTarget;i.deepContains(H)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}},Ia={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=Pa._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({is:"paper-icon-button",_template:YV`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[[Ea,pa,Pa,Ia]],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var i=this.getAttribute("aria-label");i&&e!=i||this.setAttribute("aria-label",t)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new Ma({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var H=fV(t.root||t);return H.insertBefore(i,H.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(fV(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return fV(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var H=t.cloneNode(!0),V=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=H.getAttribute("viewBox")||"0 0 "+e+" "+e,C="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&H.hasAttribute("mirror-in-rtl")&&(C+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),V.setAttribute("viewBox",a),V.setAttribute("preserveAspectRatio","xMidYMid meet"),V.setAttribute("focusable","false"),V.style.cssText=C,V.appendChild(H).removeAttribute("id"),V}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ra=YV`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Ra.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ba=YV`<iron-iconset-svg name="av" size="24">
<svg><defs>
<g id="add-to-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></g>
<g id="airplay"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="album"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="art-track"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></g>
<g id="av-timer"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></g>
<g id="branding-watermark"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></g>
<g id="call-to-action"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></g>
<g id="closed-caption"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></g>
<g id="equalizer"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></g>
<g id="explicit"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></g>
<g id="fast-forward"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></g>
<g id="fast-rewind"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></g>
<g id="featured-play-list"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></g>
<g id="featured-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></g>
<g id="fiber-dvr"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></g>
<g id="fiber-manual-record"><circle cx="12" cy="12" r="8"></circle></g>
<g id="fiber-new"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></g>
<g id="fiber-pin"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></g>
<g id="fiber-smart-record"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></g>
<g id="forward-10"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="forward-30"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></g>
<g id="forward-5"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></g>
<g id="games"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="hd"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></g>
<g id="hearing"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"></path></g>
<g id="high-quality"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></g>
<g id="library-add"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="library-books"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></g>
<g id="library-music"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></g>
<g id="loop"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-none"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-off"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></g>
<g id="movie"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="music-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path></g>
<g id="new-releases"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="not-interested"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="note"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></g>
<g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>
<g id="pause-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></g>
<g id="pause-circle-outline"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></g>
<g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>
<g id="play-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></g>
<g id="play-circle-outline"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="playlist-add"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></g>
<g id="playlist-add-check"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></g>
<g id="playlist-play"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></g>
<g id="queue"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="queue-music"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></g>
<g id="queue-play-next"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></g>
<g id="radio"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></g>
<g id="recent-actors"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></g>
<g id="remove-from-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></g>
<g id="repeat"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>
<g id="repeat-one"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></g>
<g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>
<g id="replay-10"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-30"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-5"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></g>
<g id="shuffle"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></g>
<g id="skip-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></g>
<g id="skip-previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></g>
<g id="slow-motion-video"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></g>
<g id="snooze"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></g>
<g id="sort-by-alpha"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></g>
<g id="stop"><path d="M6 6h12v12H6z"></path></g>
<g id="subscriptions"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></g>
<g id="subtitles"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></g>
<g id="surround-sound"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="video-call"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
<g id="video-label"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></g>
<g id="video-library"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
<g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
<g id="videocam-off"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></g>
<g id="volume-down"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></g>
<g id="volume-mute"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></g>
<g id="volume-off"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></g>
<g id="volume-up"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g>
<g id="web"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></g>
<g id="web-asset"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Ba.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;

        @apply --paper-tab-content-focused;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,is:"paper-tab",behaviors:[pa,Ea,Pa],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=fV(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(t){if(this.link){var e=this.queryEffectiveChildren("a");if(!e)return;if(t.target===e)return;e.click()}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Da=YV`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Da.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class $a{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach((function(e){(!t||t.indexOf(e)<0)&&this.setItemSelected(e,!1)}),this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,e){if(null!=t&&e!==this.isSelected(t)){if(e)this.selection.push(t);else{var i=this.selection.indexOf(t);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(t,e)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ja={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new $a(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&fV(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=fV(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return null==t?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(!this.attrForSelected)return Number(t);for(var e,i=0;e=this.items[i];i++)if(this._valueForItem(e)==t)return i},_indexToValue:function(t){if(!this.attrForSelected)return t;var e=this.items[t];return e?this._valueForItem(e):void 0},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return-1===e?null:e}var i=t[ii(this.attrForSelected)];return null!=i?i:t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return fV(t).observeNodes((function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(t){for(var e=t.target,i=this.items;e&&e!=this;){var H=i.indexOf(e);if(H>=0){var V=this._indexToValue(H);return void this._itemActivate(V,e)}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}},Fa={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(t){this.multi?this._toggleSelected(t):this.selected=t},multiChanged:function(t){this._selection.multi=t,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&this.selectedItems.length>0&&(this.selectedValues=this.selectedItems.map((function(t){return this._indexToValue(this.indexOf(t))}),this).filter((function(t){return null!=t}),this)):ja._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(t){t=t||[];var e=(this._valuesToItems(t)||[]).filter((function(t){return null!=t}));this._selection.clear(e);for(var i=0;i<e.length;i++)this._selection.setItemSelected(e[i],!0);this.fallbackSelection&&!this._selection.get().length&&(this._valueToItem(this.fallbackSelection)&&this.select(this.fallbackSelection))},_selectionChange:function(){var t=this._selection.get();this.multi?(this._setSelectedItems(t),this._setSelectedItem(t.length?t[0]:null)):null!=t?(this._setSelectedItems([t]),this._setSelectedItem(t)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(t){var e=this.selectedValues.indexOf(t);e<0?this.push("selectedValues",t):this.splice("selectedValues",e,1)},_valuesToItems:function(t){return null==t?null:t.map((function(t){return this._valueToItem(t)}),this)}},qa={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(t){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var e=this._valueToItem(t);e&&e.hasAttribute("disabled")||(this._setFocusedItem(e),Fa.select.apply(this,arguments))},_resetTabindices:function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach((function(e){e.setAttribute("tabindex",e===t?"0":"-1"),e.setAttribute("aria-selected",this._selection.isSelected(e))}),this)},_updateMultiselectable:function(t){t?this.setAttribute("aria-multiselectable","true"):this.removeAttribute("aria-multiselectable")},_focusWithKeyboardEvent:function(t){if(-1===this._MODIFIER_KEYS.indexOf(t.key)){this.cancelDebouncer("_clearSearchText");for(var e,i=this._searchText||"",H=(i+=(t.key&&1==t.key.length?t.key:String.fromCharCode(t.keyCode)).toLocaleLowerCase()).length,V=0;e=this.items[V];V++)if(!e.hasAttribute("disabled")){var a=this.attrForItemTitle||"textContent",C=(e[a]||e.getAttribute(a)||"").trim();if(!(C.length<H)&&C.slice(0,H).toLocaleLowerCase()==i){this._setFocusedItem(e);break}}this._searchText=i,this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),i=1;i<t+1;i++){var H=this.items[(e-i+t)%t];if(!H.hasAttribute("disabled")){var V=fV(H).getOwnerRoot()||document;if(this._setFocusedItem(H),fV(V).activeElement==H)return}}},_focusNext:function(){for(var t=this.items.length,e=Number(this.indexOf(this.focusedItem)),i=1;i<t+1;i++){var H=this.items[(e+i)%t];if(!H.hasAttribute("disabled")){var V=fV(H).getOwnerRoot()||document;if(this._setFocusedItem(H),fV(V).activeElement==H)return}}},_applySelection:function(t,e){e?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false"),ja._applySelection.apply(this,arguments)},_focusedItemChanged:function(t,e){e&&e.setAttribute("tabindex","-1"),!t||t.hasAttribute("disabled")||this.disabled||(t.setAttribute("tabindex","0"),t.focus())},_onIronItemsChanged:function(t){t.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");qa._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),qa._shiftTabPressed=!1}),1)},_onFocus:function(t){if(!qa._shiftTabPressed){var e=fV(t).rootTarget;(e===this||void 0===e.tabIndex||this.isLightDescendant(e))&&(this._defaultFocusAsync=this.async((function(){var t=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),t?this._setFocusedItem(t):this.items[0]&&this._focusNext()})))}},_onUpKey:function(t){this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onEscKey:function(t){var e=this.focusedItem;e&&e.blur()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down esc")||this._focusWithKeyboardEvent(t),t.stopPropagation()},_activateHandler:function(t){ja._activateHandler.call(this,t),t.stopPropagation()},_disabledChanged:function(t){t?(this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.removeAttribute("tabindex")):this.hasAttribute("tabindex")||this.setAttribute("tabindex",this._previousTabIndex)},_shiftTabPressed:!1},Ua=[[ja,Fa],Sa,qa];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,is:"paper-tabs",behaviors:[oa,[Ua,{hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},_onDownKey:function(t){this.focusedItem.click(),t.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(t){this._isRTL?this._focusNext():this._focusPrevious(),t.detail.keyboardEvent.preventDefault()},_onRightKey:function(t){this._isRTL?this._focusPrevious():this._focusNext(),t.detail.keyboardEvent.preventDefault()},_onKeydown:function(t){this.keyboardEventMatchesKeys(t,"up down left right esc")||this._focusWithKeyboardEvent(t)}}]],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){fV(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(t){t.setAttribute("noink","")},_removeNoinkAttribute:function(t){t.removeAttribute("noink")},_computeScrollButtonClass:function(t,e,i){return!e||i?"hidden":t?"not-visible":""},_computeTabsContentClass:function(t,e){return t?"scrollable"+(e?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(t,e){return t?"hidden":e?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",(function(){this._scroll(),this._tabChanged(this.selectedItem)}),10)},_onIronSelect:function(t){this._tabChanged(t.detail.item,this._previousTab),this._previousTab=t.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(t){this.debounce("tab-changed",(function(){this._tabChanged(null,this._previousTab),this._previousTab=null}),1)},_activateHandler:function(){this._cancelPendingActivation(),qa._activateHandler.apply(this,arguments)},_scheduleActivation:function(t,e){this._pendingActivationItem=t,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,e)},_delayedActivationHandler:function(){var t=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,t.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(t){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(t){t.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(t,e){if(this.scrollable){var i=e&&-e.ddx||0;this._affectScroll(i)}},_down:function(t){this.async((function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)}),1)},_affectScroll:function(t){this.$.tabsContainer.scrollLeft+=t;var e=this.$.tabsContainer.scrollLeft;this._leftHidden=0===e,this._rightHidden=e===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(t,e){if(!t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var i=this.$.tabsContent.getBoundingClientRect(),H=i.width,V=t.getBoundingClientRect(),a=V.left-i.left;if(this._pos={width:this._calcPercent(V.width,H),left:this._calcPercent(a,H)},this.noSlide||null==e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var C=e.getBoundingClientRect(),n=this.items.indexOf(e),o=this.items.indexOf(t);this.$.selectionBar.classList.add("expand");var r=n<o;this._isRTL&&(r=!r),r?this._positionBar(this._calcPercent(V.left+V.width-C.left,H)-5,this._left):this._positionBar(this._calcPercent(C.left+C.width-V.left,H)-5,this._calcPercent(a,H)+5),this.scrollable&&this._scrollToSelectedIfNeeded(V.width,a)},_scrollToSelectedIfNeeded:function(t,e){var i=e-this.$.tabsContainer.scrollLeft;i<0?this.$.tabsContainer.scrollLeft+=i:(i+=t-this.$.tabsContainer.offsetWidth)>0&&(this.$.tabsContainer.scrollLeft+=i)},_calcPercent:function(t,e){return 100*t/e},_positionBar:function(t,e){t=t||0,e=e||0,this._width=t,this._left=e,this.transform("translateX("+e+"%) scaleX("+t/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(t){var e=this.$.selectionBar.classList;e.contains("expand")?(e.remove("expand"),e.add("contract"),this._positionBar(this._pos.width,this._pos.left)):e.contains("contract")&&e.remove("contract")}}),!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ya=YV`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;Ya.setAttribute("style","display: none;"),document.head.appendChild(Ya.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ka=document.createElement("template");Ka.setAttribute("style","display: none;"),Ka.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(Ka.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[[Ea,pa,{hostAttributes:{role:"option",tabindex:"0"}}]]});var Wa="Custom Header",Qa="intro",Ga="https://github.com/maykar/custom-header",Ja="docs",Xa=[{category:"intro",icon:"mdi:home"},{category:"installation",icon:"mdi:download"},{category:"configuration",icon:"mdi:lead-pencil"},{category:"styling",icon:"mdi:palette"},{category:"templates",icon:"mdi:code-braces-box"},{category:"issues",icon:"mdi:alert"}],tC=[{category:"development",icon:"mdi:code-tags"},{category:"support",icon:"mdi:cards-heart"}],eC=[{link:"https://github.com/maykar/custom-header",caption:"GitHub",icon:"mdi:github-circle"}];const iC=rt`
  app-header {
    position: fixed !important;
    top: 0;
    margin-left: 55px;
    display: block;
    transition-timing-function: linear;
    z-index: 1;
    width: stretch;
    font-family: var(--primary-font-family);
  }

  app-toolbar {
    height: 49px !important;
  }

  app-toolbar .icon {
    width: 24px;
    height: 24px;
    z-index: 2;
  }

  .main-title {
    margin-left: 51px;
    white-space: nowrap;
  }

  app-header,
  app-toolbar {
    background-color: var(--header-background);
    font-weight: 400;
    color: var(--header-text-color);
  }

  app-toolbar {
    transform: initial !important;
  }

  app-header {
    transition: margin-top 0 !important;
    transition: margin-left 0.4s ease-in-out !important;
  }

  paper-tabs {
    text-transform: uppercase;
  }

  paper-tab {
    font-family: var(--primary-font-family);
  }
`,HC=rt`
  .sidebarTopItems {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .sidebarTopItems::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  .sidebarTopItems::-webkit-scrollbar {
    width: 6px;
  }

  .sidebarTopItems::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--divider-color);
  }

  .sidebarBottomItems {
    bottom: 0;
    padding-bottom: 8px;
    width: 100%;
    position: absolute;
  }

  .menu {
    height: 48px;
    display: flex;
    white-space: nowrap;
    font-weight: 400;
    color: var(--text-color);
    background-color: var(--sidebar-secondary-background);
    font-size: 20px;
    align-items: center;
    border-bottom: 1px solid var(--divider-color);
  }

  .sidebarLinkItems {
    text-decoration: none !important;
  }

  paper-listbox .icon {
    margin-left: -5px !important;
  }

  paper-item {
    font-family: var(--primary-font-family);
    box-sizing: border-box;
    padding-left: 12px;
    cursor: pointer;
    --paper-item-min-height: 40px;
    width: 48px;
    margin: 4px 8px;
    border-radius: 4px;
    color: var(--text-color);
    white-space: nowrap;
  }

  .sidebar .icon {
    margin-right: 23px;
    margin-left: -5px;
    margin-top: -2px;
    width: 24px;
    height: 24px;
    min-width: 24px;
    color: var(--sidebar-icon-color);
  }

  .selected {
    color: var(--sidebar-selected-text-color);
    background: transparent !important;
    font-weight: 700;
  }

  iron-icon.selected {
    color: var(--sidebar-selected-icon-color) !important;
  }

  paper-item:focus:before {
    background: transparent !important;
  }

  .item-text {
    text-transform: uppercase;
    white-space: nowrap;
  }

  .divider {
    padding: 8px 0;
  }

  .divider::before {
    content: ' ';
    display: block;
    height: 1px;
    background-color: var(--divider-color);
  }

  .sidebar {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    margin: 0;
    background-color: var(--sidebar-background);
    border-right: 1px solid var(--divider-color);
    width: 55px;
    height: 100%;
    text-align: left;
    box-sizing: border-box;
    overflow: hidden;
  }

  .sidebarExpanded {
    margin-left: 254px;
  }

  .sidebarText {
    color: var(--sidebar-text-color);
    padding-left: 3px;
    padding-bottom: -5px;
    text-align: left;
    margin-top: -37.7px;
    margin-left: 254px;
    margin-bottom: 3px;
    opacity: 0.4;
    cursor: pointer;
  }

  .sidebarBottom {
    margin: 0;
    margin-left: -4px;
  }

  .footer {
    position: absolute;
    bottom: 12px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    border-top: 1px solid var(--divider-color);
    width: 100%;
    bottom: 0;
    padding: 5px 0;
    background: var(--sidebar-secondary-background);
    font-family: var(--primary-font-family);
  }

  .footer a,
  i {
    color: #939393;
    text-decoration: none;
    margin-left: 16px;
    opacity: 1;
    transition: all 0.4s ease-in-out;
  }
`,VC=[rt`
  .sidebarBottomItems {
    bottom: 16px;
    margin-bottom: 24px;
    width: 100%;
    position: absolute;
    background: var(--sidebar-background);
  }

  .expanded {
    width: 254px !important;
  }

  .sidebar {
    transition: all 0.4s ease-in-out;
  }

  .view {
    display: flex;
    margin-left: 55px;
    padding-top: 24px;
    background: var(--content-container-background);
    height: calc(100vh - 96px);
    min-height: fit-content;
    transition: margin-left 0.4s ease-in-out;
  }

  .no-tabs {
    height: calc(100vh - 48px);
  }

  .content {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 24px;
  }

  docs-search {
    display: contents;
  }
`,iC,HC];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var i=this._resolveSrc(t);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=pe(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&(e=(location.origin||location.protocol+"//"+location.host)+e),e}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const aC=YV`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;aC.setAttribute("style","display: none;"),document.head.appendChild(aC.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const CC=YV`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;CC.setAttribute("style","display: none;"),document.head.appendChild(CC.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(t){return t?"false":"true"},_headingChanged:function(t){var e=this.getAttribute("heading"),i=this.getAttribute("aria-label");"string"==typeof i&&i!==e||this.setAttribute("aria-label",t)},_computeHeadingClass:function(t){return t?" over-image":""},_computeAnimated:function(t){return t}});var nC="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function oC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function rC(t,e){return t(e={exports:{}},e.exports),e.exports}var LC=rC((function(t,e){!function(e){var i={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:A,table:A,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};function H(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||m.defaults,this.rules=i.normal,this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.rules=i.gfm)}i._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,i._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,i.def=s(i.def).replace("label",i._label).replace("title",i._title).getRegex(),i.bullet=/(?:[*+-]|\d{1,9}\.)/,i.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,i.item=s(i.item,"gm").replace(/bull/g,i.bullet).getRegex(),i.list=s(i.list).replace(/bull/g,i.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+i.def.source+")").getRegex(),i._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",i._comment=/<!--(?!-?>)[\s\S]*?-->/,i.html=s(i.html,"i").replace("comment",i._comment).replace("tag",i._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),i.paragraph=s(i._paragraph).replace("hr",i.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",i._tag).getRegex(),i.blockquote=s(i.blockquote).replace("paragraph",i.paragraph).getRegex(),i.normal=g({},i),i.gfm=g({},i.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),i.pedantic=g({},i.normal,{html:s("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",i._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:A,paragraph:s(i.normal._paragraph).replace("hr",i.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",i.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),H.rules=i,H.lex=function(t,e){return new H(e).lex(t)},H.prototype.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},H.prototype.token=function(t,e){var H,V,a,C,n,o,r,d,s,l,M,h,A,g,u,f;for(t=t.replace(/^ +$/gm,"");t;)if((a=this.rules.newline.exec(t))&&(t=t.substring(a[0].length),a[0].length>1&&this.tokens.push({type:"space"})),a=this.rules.code.exec(t)){var m=this.tokens[this.tokens.length-1];t=t.substring(a[0].length),m&&"paragraph"===m.type?m.text+="\n"+a[0].trimRight():(a=a[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?a:c(a,"\n")}))}else if(a=this.rules.fences.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"code",lang:a[2]?a[2].trim():a[2],text:a[3]||""});else if(a=this.rules.heading.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"heading",depth:a[1].length,text:a[2]});else if((a=this.rules.nptable.exec(t))&&(o={type:"table",header:p(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(t=t.substring(a[0].length),M=0;M<o.align.length;M++)/^ *-+: *$/.test(o.align[M])?o.align[M]="right":/^ *:-+: *$/.test(o.align[M])?o.align[M]="center":/^ *:-+ *$/.test(o.align[M])?o.align[M]="left":o.align[M]=null;for(M=0;M<o.cells.length;M++)o.cells[M]=p(o.cells[M],o.header.length);this.tokens.push(o)}else if(a=this.rules.hr.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"hr"});else if(a=this.rules.blockquote.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"blockquote_start"}),a=a[0].replace(/^ *> ?/gm,""),this.token(a,e),this.tokens.push({type:"blockquote_end"});else if(a=this.rules.list.exec(t)){for(t=t.substring(a[0].length),r={type:"list_start",ordered:g=(C=a[2]).length>1,start:g?+C:"",loose:!1},this.tokens.push(r),d=[],H=!1,A=(a=a[0].match(this.rules.item)).length,M=0;M<A;M++)l=(o=a[M]).length,~(o=o.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(l-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+l+"}","gm"),"")),M!==A-1&&(n=i.bullet.exec(a[M+1])[0],(C.length>1?1===n.length:n.length>1||this.options.smartLists&&n!==C)&&(t=a.slice(M+1).join("\n")+t,M=A-1)),V=H||/\n\n(?!\s*$)/.test(o),M!==A-1&&(H="\n"===o.charAt(o.length-1),V||(V=H)),V&&(r.loose=!0),f=void 0,(u=/^\[[ xX]\] /.test(o))&&(f=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),s={type:"list_item_start",task:u,checked:f,loose:V},d.push(s),this.tokens.push(s),this.token(o,!1),this.tokens.push({type:"list_item_end"});if(r.loose)for(A=d.length,M=0;M<A;M++)d[M].loose=!0;this.tokens.push({type:"list_end"})}else if(a=this.rules.html.exec(t))t=t.substring(a[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):L(a[0]):a[0]});else if(e&&(a=this.rules.def.exec(t)))t=t.substring(a[0].length),a[3]&&(a[3]=a[3].substring(1,a[3].length-1)),h=a[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[h]||(this.tokens.links[h]={href:a[2],title:a[3]});else if((a=this.rules.table.exec(t))&&(o={type:"table",header:p(a[1].replace(/^ *| *\| *$/g,"")),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3]?a[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(t=t.substring(a[0].length),M=0;M<o.align.length;M++)/^ *-+: *$/.test(o.align[M])?o.align[M]="right":/^ *:-+: *$/.test(o.align[M])?o.align[M]="center":/^ *:-+ *$/.test(o.align[M])?o.align[M]="left":o.align[M]=null;for(M=0;M<o.cells.length;M++)o.cells[M]=p(o.cells[M].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(a=this.rules.lheading.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"heading",depth:"="===a[2].charAt(0)?1:2,text:a[1]});else if(e&&(a=this.rules.paragraph.exec(t)))t=t.substring(a[0].length),this.tokens.push({type:"paragraph",text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1]});else if(a=this.rules.text.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"text",text:a[0]});else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return this.tokens};var V={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:A,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:A,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function a(t,e){if(this.options=e||m.defaults,this.links=t,this.rules=V.normal,this.renderer=this.options.renderer||new C,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=V.pedantic:this.options.gfm&&(this.options.breaks?this.rules=V.breaks:this.rules=V.gfm)}function C(t){this.options=t||m.defaults}function n(){}function o(t){this.tokens=[],this.token=null,this.options=t||m.defaults,this.options.renderer=this.options.renderer||new C,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new r}function r(){this.seen={}}function L(t,e){if(e){if(L.escapeTest.test(t))return t.replace(L.escapeReplace,(function(t){return L.replacements[t]}))}else if(L.escapeTestNoEncode.test(t))return t.replace(L.escapeReplaceNoEncode,(function(t){return L.replacements[t]}));return t}function d(t){return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(t,e){return"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""}))}function s(t,e){return t=t.source||t,e=e||"",{replace:function(e,i){return i=(i=i.source||i).replace(/(^|[^\[])\^/g,"$1"),t=t.replace(e,i),this},getRegex:function(){return new RegExp(t,e)}}}function l(t,e,i){if(t){try{var H=decodeURIComponent(d(i)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return null}if(0===H.indexOf("javascript:")||0===H.indexOf("vbscript:")||0===H.indexOf("data:"))return null}e&&!h.test(i)&&(i=function(t,e){M[" "+t]||(/^[^:]+:\/*[^/]*$/.test(t)?M[" "+t]=t+"/":M[" "+t]=c(t,"/",!0));return t=M[" "+t],"//"===e.slice(0,2)?t.replace(/:[\s\S]*/,":")+e:"/"===e.charAt(0)?t.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+e:t+e}(e,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(t){return null}return i}V._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",V.em=s(V.em).replace(/punctuation/g,V._punctuation).getRegex(),V._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,V._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,V._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,V.autolink=s(V.autolink).replace("scheme",V._scheme).replace("email",V._email).getRegex(),V._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,V.tag=s(V.tag).replace("comment",i._comment).replace("attribute",V._attribute).getRegex(),V._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,V._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,V._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,V.link=s(V.link).replace("label",V._label).replace("href",V._href).replace("title",V._title).getRegex(),V.reflink=s(V.reflink).replace("label",V._label).getRegex(),V.normal=g({},V),V.pedantic=g({},V.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:s(/^!?\[(label)\]\((.*?)\)/).replace("label",V._label).getRegex(),reflink:s(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",V._label).getRegex()}),V.gfm=g({},V.normal,{escape:s(V.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),V.gfm.url=s(V.gfm.url,"i").replace("email",V.gfm._extended_email).getRegex(),V.breaks=g({},V.gfm,{br:s(V.br).replace("{2,}","*").getRegex(),text:s(V.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),a.rules=V,a.output=function(t,e,i){return new a(e,i).output(t)},a.prototype.output=function(t){for(var e,i,H,V,C,n,o="";t;)if(C=this.rules.escape.exec(t))t=t.substring(C[0].length),o+=L(C[1]);else if(C=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(C[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(C[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(C[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(C[0])&&(this.inRawBlock=!1),t=t.substring(C[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(C[0]):L(C[0]):C[0];else if(C=this.rules.link.exec(t)){var r=u(C[2],"()");if(r>-1){var d=4+C[1].length+r;C[2]=C[2].substring(0,r),C[0]=C[0].substring(0,d).trim(),C[3]=""}t=t.substring(C[0].length),this.inLink=!0,H=C[2],this.options.pedantic?(e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(H))?(H=e[1],V=e[3]):V="":V=C[3]?C[3].slice(1,-1):"",H=H.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(C,{href:a.escapes(H),title:a.escapes(V)}),this.inLink=!1}else if((C=this.rules.reflink.exec(t))||(C=this.rules.nolink.exec(t))){if(t=t.substring(C[0].length),e=(C[2]||C[1]).replace(/\s+/g," "),!(e=this.links[e.toLowerCase()])||!e.href){o+=C[0].charAt(0),t=C[0].substring(1)+t;continue}this.inLink=!0,o+=this.outputLink(C,e),this.inLink=!1}else if(C=this.rules.strong.exec(t))t=t.substring(C[0].length),o+=this.renderer.strong(this.output(C[4]||C[3]||C[2]||C[1]));else if(C=this.rules.em.exec(t))t=t.substring(C[0].length),o+=this.renderer.em(this.output(C[6]||C[5]||C[4]||C[3]||C[2]||C[1]));else if(C=this.rules.code.exec(t))t=t.substring(C[0].length),o+=this.renderer.codespan(L(C[2].trim(),!0));else if(C=this.rules.br.exec(t))t=t.substring(C[0].length),o+=this.renderer.br();else if(C=this.rules.del.exec(t))t=t.substring(C[0].length),o+=this.renderer.del(this.output(C[1]));else if(C=this.rules.autolink.exec(t))t=t.substring(C[0].length),H="@"===C[2]?"mailto:"+(i=L(this.mangle(C[1]))):i=L(C[1]),o+=this.renderer.link(H,null,i);else if(this.inLink||!(C=this.rules.url.exec(t))){if(C=this.rules.text.exec(t))t=t.substring(C[0].length),this.inRawBlock?o+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(C[0]):L(C[0]):C[0]):o+=this.renderer.text(L(this.smartypants(C[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===C[2])H="mailto:"+(i=L(C[0]));else{do{n=C[0],C[0]=this.rules._backpedal.exec(C[0])[0]}while(n!==C[0]);i=L(C[0]),H="www."===C[1]?"http://"+i:i}t=t.substring(C[0].length),o+=this.renderer.link(H,null,i)}return o},a.escapes=function(t){return t?t.replace(a.rules._escapes,"$1"):t},a.prototype.outputLink=function(t,e){var i=e.href,H=e.title?L(e.title):null;return"!"!==t[0].charAt(0)?this.renderer.link(i,H,this.output(t[1])):this.renderer.image(i,H,L(t[1]))},a.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):t},a.prototype.mangle=function(t){if(!this.options.mangle)return t;for(var e,i="",H=t.length,V=0;V<H;V++)e=t.charCodeAt(V),Math.random()>.5&&(e="x"+e.toString(16)),i+="&#"+e+";";return i},C.prototype.code=function(t,e,i){var H=(e||"").match(/\S*/)[0];if(this.options.highlight){var V=this.options.highlight(t,H);null!=V&&V!==t&&(i=!0,t=V)}return H?'<pre><code class="'+this.options.langPrefix+L(H,!0)+'">'+(i?t:L(t,!0))+"</code></pre>\n":"<pre><code>"+(i?t:L(t,!0))+"</code></pre>"},C.prototype.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},C.prototype.html=function(t){return t},C.prototype.heading=function(t,e,i,H){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+H.slug(i)+'">'+t+"</h"+e+">\n":"<h"+e+">"+t+"</h"+e+">\n"},C.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},C.prototype.list=function(t,e,i){var H=e?"ol":"ul";return"<"+H+(e&&1!==i?' start="'+i+'"':"")+">\n"+t+"</"+H+">\n"},C.prototype.listitem=function(t){return"<li>"+t+"</li>\n"},C.prototype.checkbox=function(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},C.prototype.paragraph=function(t){return"<p>"+t+"</p>\n"},C.prototype.table=function(t,e){return e&&(e="<tbody>"+e+"</tbody>"),"<table>\n<thead>\n"+t+"</thead>\n"+e+"</table>\n"},C.prototype.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},C.prototype.tablecell=function(t,e){var i=e.header?"th":"td";return(e.align?"<"+i+' align="'+e.align+'">':"<"+i+">")+t+"</"+i+">\n"},C.prototype.strong=function(t){return"<strong>"+t+"</strong>"},C.prototype.em=function(t){return"<em>"+t+"</em>"},C.prototype.codespan=function(t){return"<code>"+t+"</code>"},C.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},C.prototype.del=function(t){return"<del>"+t+"</del>"},C.prototype.link=function(t,e,i){if(null===(t=l(this.options.sanitize,this.options.baseUrl,t)))return i;var H='<a href="'+L(t)+'"';return e&&(H+=' title="'+e+'"'),H+=">"+i+"</a>"},C.prototype.image=function(t,e,i){if(null===(t=l(this.options.sanitize,this.options.baseUrl,t)))return i;var H='<img src="'+t+'" alt="'+i+'"';return e&&(H+=' title="'+e+'"'),H+=this.options.xhtml?"/>":">"},C.prototype.text=function(t){return t},n.prototype.strong=n.prototype.em=n.prototype.codespan=n.prototype.del=n.prototype.text=function(t){return t},n.prototype.link=n.prototype.image=function(t,e,i){return""+i},n.prototype.br=function(){return""},o.parse=function(t,e){return new o(e).parse(t)},o.prototype.parse=function(t){this.inline=new a(t.links,this.options),this.inlineText=new a(t.links,g({},this.options,{renderer:new n})),this.tokens=t.reverse();for(var e="";this.next();)e+=this.tok();return e},o.prototype.next=function(){return this.token=this.tokens.pop(),this.token},o.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},o.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text;return this.inline.output(t)},o.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,d(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,e,i,H,V="",a="";for(i="",t=0;t<this.token.header.length;t++)i+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(V+=this.renderer.tablerow(i),t=0;t<this.token.cells.length;t++){for(e=this.token.cells[t],i="",H=0;H<e.length;H++)i+=this.renderer.tablecell(this.inline.output(e[H]),{header:!1,align:this.token.align[H]});a+=this.renderer.tablerow(i)}return this.renderer.table(V,a);case"blockquote_start":for(a="";"blockquote_end"!==this.next().type;)a+=this.tok();return this.renderer.blockquote(a);case"list_start":a="";for(var C=this.token.ordered,n=this.token.start;"list_end"!==this.next().type;)a+=this.tok();return this.renderer.list(a,C,n);case"list_item_start":a="";var o=this.token.loose,r=this.token.checked,L=this.token.task;for(this.token.task&&(a+=this.renderer.checkbox(r));"list_item_end"!==this.next().type;)a+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(a,L,r);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var s='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(s);console.log(s)}},r.prototype.slug=function(t){var e=t.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(e)){var i=e;do{this.seen[i]++,e=i+"-"+this.seen[i]}while(this.seen.hasOwnProperty(e))}return this.seen[e]=0,e},L.escapeTest=/[&<>"']/,L.escapeReplace=/[&<>"']/g,L.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},L.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,L.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var M={},h=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function A(){}function g(t){for(var e,i,H=1;H<arguments.length;H++)for(i in e=arguments[H])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}function p(t,e){var i=t.replace(/\|/g,(function(t,e,i){for(var H=!1,V=e;--V>=0&&"\\"===i[V];)H=!H;return H?"|":" |"})).split(/ \|/),H=0;if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;H<i.length;H++)i[H]=i[H].trim().replace(/\\\|/g,"|");return i}function c(t,e,i){if(0===t.length)return"";for(var H=0;H<t.length;){var V=t.charAt(t.length-H-1);if(V!==e||i){if(V===e||!i)break;H++}else H++}return t.substr(0,t.length-H)}function u(t,e){if(-1===t.indexOf(e[1]))return-1;for(var i=0,H=0;H<t.length;H++)if("\\"===t[H])H++;else if(t[H]===e[0])i++;else if(t[H]===e[1]&&--i<0)return H;return-1}function f(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function m(t,e,i){if(null==t)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(i||"function"==typeof e){i||(i=e,e=null),f(e=g({},m.defaults,e||{}));var V,a,C=e.highlight,n=0;try{V=H.lex(t,e)}catch(t){return i(t)}a=V.length;var r=function(t){if(t)return e.highlight=C,i(t);var H;try{H=o.parse(V,e)}catch(e){t=e}return e.highlight=C,t?i(t):i(null,H)};if(!C||C.length<3)return r();if(delete e.highlight,!a)return r();for(;n<V.length;n++)!function(t){"code"!==t.type?--a||r():C(t.text,t.lang,(function(e,i){return e?r(e):null==i||i===t.text?--a||r():(t.text=i,t.escaped=!0,void(--a||r()))}))}(V[n])}else try{return e&&(e=g({},m.defaults,e)),f(e),o.parse(H.lex(t,e),e)}catch(t){if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",(e||m.defaults).silent)return"<p>An error occurred:</p><pre>"+L(t.message+"",!0)+"</pre>";throw t}}A.exec=A,m.options=m.setOptions=function(t){return g(m.defaults,t),m},m.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new C,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},m.defaults=m.getDefaults(),m.Parser=o,m.parser=o.parse,m.Renderer=C,m.TextRenderer=n,m.Lexer=H,m.lexer=H.lex,m.InlineLexer=a,m.inlineLexer=a.output,m.Slugger=r,m.parse=m,t.exports=m}()})),dC=9007199254740991,sC="[object Arguments]",lC="[object Function]",MC="[object GeneratorFunction]",hC="[object Map]",AC="[object Set]",gC="[object String]",pC=/^\[object .+?Constructor\]$/,cC=/^(?:0|[1-9]\d*)$/,uC="[\\ud800-\\udfff]",fC="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",mC="\\ud83c[\\udffb-\\udfff]",_C="[^\\ud800-\\udfff]",bC="(?:\\ud83c[\\udde6-\\uddff]){2}",vC="[\\ud800-\\udbff][\\udc00-\\udfff]",yC="(?:"+fC+"|"+mC+")"+"?",ZC="[\\ufe0e\\ufe0f]?"+yC+("(?:\\u200d(?:"+[_C,bC,vC].join("|")+")[\\ufe0e\\ufe0f]?"+yC+")*"),wC="(?:"+[_C+fC+"?",fC,bC,vC,uC].join("|")+")",kC=RegExp(mC+"(?="+mC+")|"+wC+ZC,"g"),xC=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),SC="object"==typeof nC&&nC&&nC.Object===Object&&nC,zC="object"==typeof self&&self&&self.Object===Object&&self,EC=SC||zC||Function("return this")();function OC(t,e){return function(t,e){for(var i=-1,H=t?t.length:0,V=Array(H);++i<H;)V[i]=e(t[i],i,t);return V}(e,(function(e){return t[e]}))}function TC(t){var e=-1,i=Array(t.size);return t.forEach((function(t,H){i[++e]=[H,t]})),i}function NC(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=t})),i}function PC(t){return function(t){return xC.test(t)}(t)?function(t){return t.match(kC)||[]}(t):function(t){return t.split("")}(t)}var IC,RC,BC,DC=Function.prototype,$C=Object.prototype,jC=EC["__core-js_shared__"],FC=(IC=/[^.]+$/.exec(jC&&jC.keys&&jC.keys.IE_PROTO||""))?"Symbol(src)_1."+IC:"",qC=DC.toString,UC=$C.hasOwnProperty,YC=$C.toString,KC=RegExp("^"+qC.call(UC).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),WC=EC.Symbol,QC=WC?WC.iterator:void 0,GC=$C.propertyIsEnumerable,JC=(RC=Object.keys,BC=Object,function(t){return RC(BC(t))}),XC=ln(EC,"DataView"),tn=ln(EC,"Map"),en=ln(EC,"Promise"),Hn=ln(EC,"Set"),Vn=ln(EC,"WeakMap"),an=An(XC),Cn=An(tn),nn=An(en),on=An(Hn),rn=An(Vn);function Ln(t,e){var i=gn(t)||function(t){return function(t){return fn(t)&&pn(t)}(t)&&UC.call(t,"callee")&&(!GC.call(t,"callee")||YC.call(t)==sC)}(t)?function(t,e){for(var i=-1,H=Array(t);++i<t;)H[i]=e(i);return H}(t.length,String):[],H=i.length,V=!!H;for(var a in t)!e&&!UC.call(t,a)||V&&("length"==a||hn(a,H))||i.push(a);return i}function dn(t){return!(!un(t)||function(t){return!!FC&&FC in t}(t))&&(cn(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?KC:pC).test(An(t))}function sn(t){if(!function(t){var e=t&&t.constructor,i="function"==typeof e&&e.prototype||$C;return t===i}(t))return JC(t);var e=[];for(var i in Object(t))UC.call(t,i)&&"constructor"!=i&&e.push(i);return e}function ln(t,e){var i=function(t,e){return null==t?void 0:t[e]}(t,e);return dn(i)?i:void 0}var Mn=function(t){return YC.call(t)};function hn(t,e){return!!(e=null==e?dC:e)&&("number"==typeof t||cC.test(t))&&t>-1&&t%1==0&&t<e}function An(t){if(null!=t){try{return qC.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(XC&&"[object DataView]"!=Mn(new XC(new ArrayBuffer(1)))||tn&&Mn(new tn)!=hC||en&&"[object Promise]"!=Mn(en.resolve())||Hn&&Mn(new Hn)!=AC||Vn&&"[object WeakMap]"!=Mn(new Vn))&&(Mn=function(t){var e=YC.call(t),i="[object Object]"==e?t.constructor:void 0,H=i?An(i):void 0;if(H)switch(H){case an:return"[object DataView]";case Cn:return hC;case nn:return"[object Promise]";case on:return AC;case rn:return"[object WeakMap]"}return e});var gn=Array.isArray;function pn(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=dC}(t.length)&&!cn(t)}function cn(t){var e=un(t)?YC.call(t):"";return e==lC||e==MC}function un(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function fn(t){return!!t&&"object"==typeof t}function mn(t){return t?OC(t,function(t){return pn(t)?Ln(t):sn(t)}(t)):[]}var _n,bn=function(t){if(!t)return[];if(pn(t))return function(t){return"string"==typeof t||!gn(t)&&fn(t)&&YC.call(t)==gC}(t)?PC(t):function(t,e){var i=-1,H=t.length;for(e||(e=Array(H));++i<H;)e[i]=t[i];return e}(t);if(QC&&t[QC])return function(t){for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}(t[QC]());var e=Mn(t);return(e==hC?TC:e==AC?NC:mn)(t)},vn={100:"💯",1234:"🔢",umbrella_with_rain_drops:"☔",coffee:"☕",aries:"♈",taurus:"♉",sagittarius:"♐",capricorn:"♑",aquarius:"♒",pisces:"♓",anchor:"⚓",white_check_mark:"✅",sparkles:"✨",question:"❓",grey_question:"❔",grey_exclamation:"❕",exclamation:"❗",heavy_exclamation_mark:"❗",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",hash:"#️⃣",keycap_star:"*️⃣",zero:"0️⃣",one:"1️⃣",two:"2️⃣",three:"3️⃣",four:"4️⃣",five:"5️⃣",six:"6️⃣",seven:"7️⃣",eight:"8️⃣",nine:"9️⃣",copyright:"©️",registered:"®️",mahjong:"🀄",black_joker:"🃏",a:"🅰️",b:"🅱️",o2:"🅾️",parking:"🅿️",ab:"🆎",cl:"🆑",cool:"🆒",free:"🆓",id:"🆔",new:"🆕",ng:"🆖",ok:"🆗",sos:"🆘",up:"🆙",vs:"🆚","flag-ac":"🇦🇨","flag-ad":"🇦🇩","flag-ae":"🇦🇪","flag-af":"🇦🇫","flag-ag":"🇦🇬","flag-ai":"🇦🇮","flag-al":"🇦🇱","flag-am":"🇦🇲","flag-ao":"🇦🇴","flag-aq":"🇦🇶","flag-ar":"🇦🇷","flag-as":"🇦🇸","flag-at":"🇦🇹","flag-au":"🇦🇺","flag-aw":"🇦🇼","flag-ax":"🇦🇽","flag-az":"🇦🇿","flag-ba":"🇧🇦","flag-bb":"🇧🇧","flag-bd":"🇧🇩","flag-be":"🇧🇪","flag-bf":"🇧🇫","flag-bg":"🇧🇬","flag-bh":"🇧🇭","flag-bi":"🇧🇮","flag-bj":"🇧🇯","flag-bl":"🇧🇱","flag-bm":"🇧🇲","flag-bn":"🇧🇳","flag-bo":"🇧🇴","flag-bq":"🇧🇶","flag-br":"🇧🇷","flag-bs":"🇧🇸","flag-bt":"🇧🇹","flag-bv":"🇧🇻","flag-bw":"🇧🇼","flag-by":"🇧🇾","flag-bz":"🇧🇿","flag-ca":"🇨🇦","flag-cc":"🇨🇨","flag-cd":"🇨🇩","flag-cf":"🇨🇫","flag-cg":"🇨🇬","flag-ch":"🇨🇭","flag-ci":"🇨🇮","flag-ck":"🇨🇰","flag-cl":"🇨🇱","flag-cm":"🇨🇲",cn:"🇨🇳","flag-cn":"🇨🇳","flag-co":"🇨🇴","flag-cp":"🇨🇵","flag-cr":"🇨🇷","flag-cu":"🇨🇺","flag-cv":"🇨🇻","flag-cw":"🇨🇼","flag-cx":"🇨🇽","flag-cy":"🇨🇾","flag-cz":"🇨🇿",de:"🇩🇪","flag-de":"🇩🇪","flag-dg":"🇩🇬","flag-dj":"🇩🇯","flag-dk":"🇩🇰","flag-dm":"🇩🇲","flag-do":"🇩🇴","flag-dz":"🇩🇿","flag-ea":"🇪🇦","flag-ec":"🇪🇨","flag-ee":"🇪🇪","flag-eg":"🇪🇬","flag-eh":"🇪🇭","flag-er":"🇪🇷",es:"🇪🇸","flag-es":"🇪🇸","flag-et":"🇪🇹","flag-eu":"🇪🇺","flag-fi":"🇫🇮","flag-fj":"🇫🇯","flag-fk":"🇫🇰","flag-fm":"🇫🇲","flag-fo":"🇫🇴",fr:"🇫🇷","flag-fr":"🇫🇷","flag-ga":"🇬🇦",gb:"🇬🇧",uk:"🇬🇧","flag-gb":"🇬🇧","flag-gd":"🇬🇩","flag-ge":"🇬🇪","flag-gf":"🇬🇫","flag-gg":"🇬🇬","flag-gh":"🇬🇭","flag-gi":"🇬🇮","flag-gl":"🇬🇱","flag-gm":"🇬🇲","flag-gn":"🇬🇳","flag-gp":"🇬🇵","flag-gq":"🇬🇶","flag-gr":"🇬🇷","flag-gs":"🇬🇸","flag-gt":"🇬🇹","flag-gu":"🇬🇺","flag-gw":"🇬🇼","flag-gy":"🇬🇾","flag-hk":"🇭🇰","flag-hm":"🇭🇲","flag-hn":"🇭🇳","flag-hr":"🇭🇷","flag-ht":"🇭🇹","flag-hu":"🇭🇺","flag-ic":"🇮🇨","flag-id":"🇮🇩","flag-ie":"🇮🇪","flag-il":"🇮🇱","flag-im":"🇮🇲","flag-in":"🇮🇳","flag-io":"🇮🇴","flag-iq":"🇮🇶","flag-ir":"🇮🇷","flag-is":"🇮🇸",it:"🇮🇹","flag-it":"🇮🇹","flag-je":"🇯🇪","flag-jm":"🇯🇲","flag-jo":"🇯🇴",jp:"🇯🇵","flag-jp":"🇯🇵","flag-ke":"🇰🇪","flag-kg":"🇰🇬","flag-kh":"🇰🇭","flag-ki":"🇰🇮","flag-km":"🇰🇲","flag-kn":"🇰🇳","flag-kp":"🇰🇵",kr:"🇰🇷","flag-kr":"🇰🇷","flag-kw":"🇰🇼","flag-ky":"🇰🇾","flag-kz":"🇰🇿","flag-la":"🇱🇦","flag-lb":"🇱🇧","flag-lc":"🇱🇨","flag-li":"🇱🇮","flag-lk":"🇱🇰","flag-lr":"🇱🇷","flag-ls":"🇱🇸","flag-lt":"🇱🇹","flag-lu":"🇱🇺","flag-lv":"🇱🇻","flag-ly":"🇱🇾","flag-ma":"🇲🇦","flag-mc":"🇲🇨","flag-md":"🇲🇩","flag-me":"🇲🇪","flag-mf":"🇲🇫","flag-mg":"🇲🇬","flag-mh":"🇲🇭","flag-mk":"🇲🇰","flag-ml":"🇲🇱","flag-mm":"🇲🇲","flag-mn":"🇲🇳","flag-mo":"🇲🇴","flag-mp":"🇲🇵","flag-mq":"🇲🇶","flag-mr":"🇲🇷","flag-ms":"🇲🇸","flag-mt":"🇲🇹","flag-mu":"🇲🇺","flag-mv":"🇲🇻","flag-mw":"🇲🇼","flag-mx":"🇲🇽","flag-my":"🇲🇾","flag-mz":"🇲🇿","flag-na":"🇳🇦","flag-nc":"🇳🇨","flag-ne":"🇳🇪","flag-nf":"🇳🇫","flag-ng":"🇳🇬","flag-ni":"🇳🇮","flag-nl":"🇳🇱","flag-no":"🇳🇴","flag-np":"🇳🇵","flag-nr":"🇳🇷","flag-nu":"🇳🇺","flag-nz":"🇳🇿","flag-om":"🇴🇲","flag-pa":"🇵🇦","flag-pe":"🇵🇪","flag-pf":"🇵🇫","flag-pg":"🇵🇬","flag-ph":"🇵🇭","flag-pk":"🇵🇰","flag-pl":"🇵🇱","flag-pm":"🇵🇲","flag-pn":"🇵🇳","flag-pr":"🇵🇷","flag-ps":"🇵🇸","flag-pt":"🇵🇹","flag-pw":"🇵🇼","flag-py":"🇵🇾","flag-qa":"🇶🇦","flag-re":"🇷🇪","flag-ro":"🇷🇴","flag-rs":"🇷🇸",ru:"🇷🇺","flag-ru":"🇷🇺","flag-rw":"🇷🇼","flag-sa":"🇸🇦","flag-sb":"🇸🇧","flag-sc":"🇸🇨","flag-sd":"🇸🇩","flag-se":"🇸🇪","flag-sg":"🇸🇬","flag-sh":"🇸🇭","flag-si":"🇸🇮","flag-sj":"🇸🇯","flag-sk":"🇸🇰","flag-sl":"🇸🇱","flag-sm":"🇸🇲","flag-sn":"🇸🇳","flag-so":"🇸🇴","flag-sr":"🇸🇷","flag-ss":"🇸🇸","flag-st":"🇸🇹","flag-sv":"🇸🇻","flag-sx":"🇸🇽","flag-sy":"🇸🇾","flag-sz":"🇸🇿","flag-ta":"🇹🇦","flag-tc":"🇹🇨","flag-td":"🇹🇩","flag-tf":"🇹🇫","flag-tg":"🇹🇬","flag-th":"🇹🇭","flag-tj":"🇹🇯","flag-tk":"🇹🇰","flag-tl":"🇹🇱","flag-tm":"🇹🇲","flag-tn":"🇹🇳","flag-to":"🇹🇴","flag-tr":"🇹🇷","flag-tt":"🇹🇹","flag-tv":"🇹🇻","flag-tw":"🇹🇼","flag-tz":"🇹🇿","flag-ua":"🇺🇦","flag-ug":"🇺🇬","flag-um":"🇺🇲","flag-un":"🇺🇳",us:"🇺🇸","flag-us":"🇺🇸","flag-uy":"🇺🇾","flag-uz":"🇺🇿","flag-va":"🇻🇦","flag-vc":"🇻🇨","flag-ve":"🇻🇪","flag-vg":"🇻🇬","flag-vi":"🇻🇮","flag-vn":"🇻🇳","flag-vu":"🇻🇺","flag-wf":"🇼🇫","flag-ws":"🇼🇸","flag-xk":"🇽🇰","flag-ye":"🇾🇪","flag-yt":"🇾🇹","flag-za":"🇿🇦","flag-zm":"🇿🇲","flag-zw":"🇿🇼",koko:"🈁",sa:"🈂️",u7121:"🈚",u6307:"🈯",u7981:"🈲",u7a7a:"🈳",u5408:"🈴",u6e80:"🈵",u6709:"🈶",u6708:"🈷️",u7533:"🈸",u5272:"🈹",u55b6:"🈺",ideograph_advantage:"🉐",accept:"🉑",cyclone:"🌀",foggy:"🌁",closed_umbrella:"🌂",night_with_stars:"🌃",sunrise_over_mountains:"🌄",sunrise:"🌅",city_sunset:"🌆",city_sunrise:"🌇",rainbow:"🌈",bridge_at_night:"🌉",ocean:"🌊",volcano:"🌋",milky_way:"🌌",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",globe_with_meridians:"🌐",new_moon:"🌑",waxing_crescent_moon:"🌒",first_quarter_moon:"🌓",moon:"🌔",waxing_gibbous_moon:"🌔",full_moon:"🌕",waning_gibbous_moon:"🌖",last_quarter_moon:"🌗",waning_crescent_moon:"🌘",crescent_moon:"🌙",new_moon_with_face:"🌚",first_quarter_moon_with_face:"🌛",last_quarter_moon_with_face:"🌜",full_moon_with_face:"🌝",sun_with_face:"🌞",star2:"🌟",stars:"🌠",thermometer:"🌡️",mostly_sunny:"🌤️",sun_small_cloud:"🌤️",barely_sunny:"🌥️",sun_behind_cloud:"🌥️",partly_sunny_rain:"🌦️",sun_behind_rain_cloud:"🌦️",rain_cloud:"🌧️",snow_cloud:"🌨️",lightning:"🌩️",lightning_cloud:"🌩️",tornado:"🌪️",tornado_cloud:"🌪️",fog:"🌫️",wind_blowing_face:"🌬️",hotdog:"🌭",taco:"🌮",burrito:"🌯",chestnut:"🌰",seedling:"🌱",evergreen_tree:"🌲",deciduous_tree:"🌳",palm_tree:"🌴",cactus:"🌵",hot_pepper:"🌶️",tulip:"🌷",cherry_blossom:"🌸",rose:"🌹",hibiscus:"🌺",sunflower:"🌻",blossom:"🌼",corn:"🌽",ear_of_rice:"🌾",herb:"🌿",four_leaf_clover:"🍀",maple_leaf:"🍁",fallen_leaf:"🍂",leaves:"🍃",mushroom:"🍄",tomato:"🍅",eggplant:"🍆",grapes:"🍇",melon:"🍈",watermelon:"🍉",tangerine:"🍊",lemon:"🍋",banana:"🍌",pineapple:"🍍",apple:"🍎",green_apple:"🍏",pear:"🍐",peach:"🍑",cherries:"🍒",strawberry:"🍓",hamburger:"🍔",pizza:"🍕",meat_on_bone:"🍖",poultry_leg:"🍗",rice_cracker:"🍘",rice_ball:"🍙",rice:"🍚",curry:"🍛",ramen:"🍜",spaghetti:"🍝",bread:"🍞",fries:"🍟",sweet_potato:"🍠",dango:"🍡",oden:"🍢",sushi:"🍣",fried_shrimp:"🍤",fish_cake:"🍥",icecream:"🍦",shaved_ice:"🍧",ice_cream:"🍨",doughnut:"🍩",cookie:"🍪",chocolate_bar:"🍫",candy:"🍬",lollipop:"🍭",custard:"🍮",honey_pot:"🍯",cake:"🍰",bento:"🍱",stew:"🍲",fried_egg:"🍳",cooking:"🍳",fork_and_knife:"🍴",tea:"🍵",sake:"🍶",wine_glass:"🍷",cocktail:"🍸",tropical_drink:"🍹",beer:"🍺",beers:"🍻",baby_bottle:"🍼",knife_fork_plate:"🍽️",champagne:"🍾",popcorn:"🍿",ribbon:"🎀",gift:"🎁",birthday:"🎂",jack_o_lantern:"🎃",christmas_tree:"🎄",santa:"🎅",fireworks:"🎆",sparkler:"🎇",balloon:"🎈",tada:"🎉",confetti_ball:"🎊",tanabata_tree:"🎋",crossed_flags:"🎌",bamboo:"🎍",dolls:"🎎",flags:"🎏",wind_chime:"🎐",rice_scene:"🎑",school_satchel:"🎒",mortar_board:"🎓",medal:"🎖️",reminder_ribbon:"🎗️",studio_microphone:"🎙️",level_slider:"🎚️",control_knobs:"🎛️",film_frames:"🎞️",admission_tickets:"🎟️",carousel_horse:"🎠",ferris_wheel:"🎡",roller_coaster:"🎢",fishing_pole_and_fish:"🎣",microphone:"🎤",movie_camera:"🎥",cinema:"🎦",headphones:"🎧",art:"🎨",tophat:"🎩",circus_tent:"🎪",ticket:"🎫",clapper:"🎬",performing_arts:"🎭",video_game:"🎮",dart:"🎯",slot_machine:"🎰","8ball":"🎱",game_die:"🎲",bowling:"🎳",flower_playing_cards:"🎴",musical_note:"🎵",notes:"🎶",saxophone:"🎷",guitar:"🎸",musical_keyboard:"🎹",trumpet:"🎺",violin:"🎻",musical_score:"🎼",running_shirt_with_sash:"🎽",tennis:"🎾",ski:"🎿",basketball:"🏀",checkered_flag:"🏁",snowboarder:"🏂","woman-running":"🏃‍♀️","man-running":"🏃‍♂️",runner:"🏃‍♂️",running:"🏃‍♂️","woman-surfing":"🏄‍♀️","man-surfing":"🏄‍♂️",surfer:"🏄‍♂️",sports_medal:"🏅",trophy:"🏆",horse_racing:"🏇",football:"🏈",rugby_football:"🏉","woman-swimming":"🏊‍♀️","man-swimming":"🏊‍♂️",swimmer:"🏊‍♂️","woman-lifting-weights":"🏋️‍♀️","man-lifting-weights":"🏋️‍♂️",weight_lifter:"🏋️‍♂️","woman-golfing":"🏌️‍♀️","man-golfing":"🏌️‍♂️",golfer:"🏌️‍♂️",racing_motorcycle:"🏍️",racing_car:"🏎️",cricket_bat_and_ball:"🏏",volleyball:"🏐",field_hockey_stick_and_ball:"🏑",ice_hockey_stick_and_puck:"🏒",table_tennis_paddle_and_ball:"🏓",snow_capped_mountain:"🏔️",camping:"🏕️",beach_with_umbrella:"🏖️",building_construction:"🏗️",house_buildings:"🏘️",cityscape:"🏙️",derelict_house_building:"🏚️",classical_building:"🏛️",desert:"🏜️",desert_island:"🏝️",national_park:"🏞️",stadium:"🏟️",house:"🏠",house_with_garden:"🏡",office:"🏢",post_office:"🏣",european_post_office:"🏤",hospital:"🏥",bank:"🏦",atm:"🏧",hotel:"🏨",love_hotel:"🏩",convenience_store:"🏪",school:"🏫",department_store:"🏬",factory:"🏭",izakaya_lantern:"🏮",lantern:"🏮",japanese_castle:"🏯",european_castle:"🏰","rainbow-flag":"🏳️‍🌈",waving_white_flag:"🏳️","flag-england":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","flag-scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","flag-wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿",waving_black_flag:"🏴",rosette:"🏵️",label:"🏷️",badminton_racquet_and_shuttlecock:"🏸",bow_and_arrow:"🏹",amphora:"🏺","skin-tone-2":"🏻","skin-tone-3":"🏼","skin-tone-4":"🏽","skin-tone-5":"🏾","skin-tone-6":"🏿",rat:"🐀",mouse2:"🐁",ox:"🐂",water_buffalo:"🐃",cow2:"🐄",tiger2:"🐅",leopard:"🐆",rabbit2:"🐇",cat2:"🐈",dragon:"🐉",crocodile:"🐊",whale2:"🐋",snail:"🐌",snake:"🐍",racehorse:"🐎",ram:"🐏",goat:"🐐",sheep:"🐑",monkey:"🐒",rooster:"🐓",chicken:"🐔",dog2:"🐕",pig2:"🐖",boar:"🐗",elephant:"🐘",octopus:"🐙",shell:"🐚",bug:"🐛",ant:"🐜",bee:"🐝",honeybee:"🐝",beetle:"🐞",fish:"🐟",tropical_fish:"🐠",blowfish:"🐡",turtle:"🐢",hatching_chick:"🐣",baby_chick:"🐤",hatched_chick:"🐥",bird:"🐦",penguin:"🐧",koala:"🐨",poodle:"🐩",dromedary_camel:"🐪",camel:"🐫",dolphin:"🐬",flipper:"🐬",mouse:"🐭",cow:"🐮",tiger:"🐯",rabbit:"🐰",cat:"🐱",dragon_face:"🐲",whale:"🐳",horse:"🐴",monkey_face:"🐵",dog:"🐶",pig:"🐷",frog:"🐸",hamster:"🐹",wolf:"🐺",bear:"🐻",panda_face:"🐼",pig_nose:"🐽",feet:"🐾",paw_prints:"🐾",chipmunk:"🐿️",eyes:"👀","eye-in-speech-bubble":"👁️‍🗨️",eye:"👁️",ear:"👂",nose:"👃",lips:"👄",tongue:"👅",point_up_2:"👆",point_down:"👇",point_left:"👈",point_right:"👉",facepunch:"👊",punch:"👊",wave:"👋",ok_hand:"👌","+1":"👍",thumbsup:"👍","-1":"👎",thumbsdown:"👎",clap:"👏",open_hands:"👐",crown:"👑",womans_hat:"👒",eyeglasses:"👓",necktie:"👔",shirt:"👕",tshirt:"👕",jeans:"👖",dress:"👗",kimono:"👘",bikini:"👙",womans_clothes:"👚",purse:"👛",handbag:"👜",pouch:"👝",mans_shoe:"👞",shoe:"👞",athletic_shoe:"👟",high_heel:"👠",sandal:"👡",boot:"👢",footprints:"👣",bust_in_silhouette:"👤",busts_in_silhouette:"👥",boy:"👦",girl:"👧","male-farmer":"👨‍🌾","male-cook":"👨‍🍳","male-student":"👨‍🎓","male-singer":"👨‍🎤","male-artist":"👨‍🎨","male-teacher":"👨‍🏫","male-factory-worker":"👨‍🏭","man-boy-boy":"👨‍👦‍👦","man-boy":"👨‍👦","man-girl-boy":"👨‍👧‍👦","man-girl-girl":"👨‍👧‍👧","man-girl":"👨‍👧","man-man-boy":"👨‍👨‍👦","man-man-boy-boy":"👨‍👨‍👦‍👦","man-man-girl":"👨‍👨‍👧","man-man-girl-boy":"👨‍👨‍👧‍👦","man-man-girl-girl":"👨‍👨‍👧‍👧","man-woman-boy":"👨‍👩‍👦",family:"👨‍👩‍👦","man-woman-boy-boy":"👨‍👩‍👦‍👦","man-woman-girl":"👨‍👩‍👧","man-woman-girl-boy":"👨‍👩‍👧‍👦","man-woman-girl-girl":"👨‍👩‍👧‍👧","male-technologist":"👨‍💻","male-office-worker":"👨‍💼","male-mechanic":"👨‍🔧","male-scientist":"👨‍🔬","male-astronaut":"👨‍🚀","male-firefighter":"👨‍🚒","male-doctor":"👨‍⚕️","male-judge":"👨‍⚖️","male-pilot":"👨‍✈️","man-heart-man":"👨‍❤️‍👨","man-kiss-man":"👨‍❤️‍💋‍👨",man:"👨","female-farmer":"👩‍🌾","female-cook":"👩‍🍳","female-student":"👩‍🎓","female-singer":"👩‍🎤","female-artist":"👩‍🎨","female-teacher":"👩‍🏫","female-factory-worker":"👩‍🏭","woman-boy-boy":"👩‍👦‍👦","woman-boy":"👩‍👦","woman-girl-boy":"👩‍👧‍👦","woman-girl-girl":"👩‍👧‍👧","woman-girl":"👩‍👧","woman-woman-boy":"👩‍👩‍👦","woman-woman-boy-boy":"👩‍👩‍👦‍👦","woman-woman-girl":"👩‍👩‍👧","woman-woman-girl-boy":"👩‍👩‍👧‍👦","woman-woman-girl-girl":"👩‍👩‍👧‍👧","female-technologist":"👩‍💻","female-office-worker":"👩‍💼","female-mechanic":"👩‍🔧","female-scientist":"👩‍🔬","female-astronaut":"👩‍🚀","female-firefighter":"👩‍🚒","female-doctor":"👩‍⚕️","female-judge":"👩‍⚖️","female-pilot":"👩‍✈️","woman-heart-man":"👩‍❤️‍👨",couple_with_heart:"👩‍❤️‍👨","woman-heart-woman":"👩‍❤️‍👩","woman-kiss-man":"👩‍❤️‍💋‍👨",couplekiss:"👩‍❤️‍💋‍👨","woman-kiss-woman":"👩‍❤️‍💋‍👩",woman:"👩",couple:"👫",man_and_woman_holding_hands:"👫",two_men_holding_hands:"👬",two_women_holding_hands:"👭","female-police-officer":"👮‍♀️","male-police-officer":"👮‍♂️",cop:"👮‍♂️","woman-with-bunny-ears-partying":"👯‍♀️",dancers:"👯‍♀️","man-with-bunny-ears-partying":"👯‍♂️",bride_with_veil:"👰","blond-haired-woman":"👱‍♀️","blond-haired-man":"👱‍♂️",person_with_blond_hair:"👱‍♂️",man_with_gua_pi_mao:"👲","woman-wearing-turban":"👳‍♀️","man-wearing-turban":"👳‍♂️",man_with_turban:"👳‍♂️",older_man:"👴",older_woman:"👵",baby:"👶","female-construction-worker":"👷‍♀️","male-construction-worker":"👷‍♂️",construction_worker:"👷‍♂️",princess:"👸",japanese_ogre:"👹",japanese_goblin:"👺",ghost:"👻",angel:"👼",alien:"👽",space_invader:"👾",imp:"👿",skull:"💀","woman-tipping-hand":"💁‍♀️",information_desk_person:"💁‍♀️","man-tipping-hand":"💁‍♂️","female-guard":"💂‍♀️","male-guard":"💂‍♂️",guardsman:"💂‍♂️",dancer:"💃",lipstick:"💄",nail_care:"💅","woman-getting-massage":"💆‍♀️",massage:"💆‍♀️","man-getting-massage":"💆‍♂️","woman-getting-haircut":"💇‍♀️",haircut:"💇‍♀️","man-getting-haircut":"💇‍♂️",barber:"💈",syringe:"💉",pill:"💊",kiss:"💋",love_letter:"💌",ring:"💍",gem:"💎",bouquet:"💐",wedding:"💒",heartbeat:"💓",broken_heart:"💔",two_hearts:"💕",sparkling_heart:"💖",heartpulse:"💗",cupid:"💘",blue_heart:"💙",green_heart:"💚",yellow_heart:"💛",purple_heart:"💜",gift_heart:"💝",revolving_hearts:"💞",heart_decoration:"💟",diamond_shape_with_a_dot_inside:"💠",bulb:"💡",anger:"💢",bomb:"💣",zzz:"💤",boom:"💥",collision:"💥",sweat_drops:"💦",droplet:"💧",dash:"💨",hankey:"💩",poop:"💩",shit:"💩",muscle:"💪",dizzy:"💫",speech_balloon:"💬",thought_balloon:"💭",white_flower:"💮",moneybag:"💰",currency_exchange:"💱",heavy_dollar_sign:"💲",credit_card:"💳",yen:"💴",dollar:"💵",euro:"💶",pound:"💷",money_with_wings:"💸",chart:"💹",seat:"💺",computer:"💻",briefcase:"💼",minidisc:"💽",floppy_disk:"💾",cd:"💿",dvd:"📀",file_folder:"📁",open_file_folder:"📂",page_with_curl:"📃",page_facing_up:"📄",date:"📅",calendar:"📆",card_index:"📇",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",bar_chart:"📊",clipboard:"📋",pushpin:"📌",round_pushpin:"📍",paperclip:"📎",straight_ruler:"📏",triangular_ruler:"📐",bookmark_tabs:"📑",ledger:"📒",notebook:"📓",notebook_with_decorative_cover:"📔",closed_book:"📕",book:"📖",open_book:"📖",green_book:"📗",blue_book:"📘",orange_book:"📙",books:"📚",name_badge:"📛",scroll:"📜",memo:"📝",pencil:"📝",telephone_receiver:"📞",pager:"📟",fax:"📠",satellite_antenna:"📡",loudspeaker:"📢",mega:"📣",outbox_tray:"📤",inbox_tray:"📥",package:"📦","e-mail":"📧",incoming_envelope:"📨",envelope_with_arrow:"📩",mailbox_closed:"📪",mailbox:"📫",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",postbox:"📮",postal_horn:"📯",newspaper:"📰",iphone:"📱",calling:"📲",vibration_mode:"📳",mobile_phone_off:"📴",no_mobile_phones:"📵",signal_strength:"📶",camera:"📷",camera_with_flash:"📸",video_camera:"📹",tv:"📺",radio:"📻",vhs:"📼",film_projector:"📽️",prayer_beads:"📿",twisted_rightwards_arrows:"🔀",repeat:"🔁",repeat_one:"🔂",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",low_brightness:"🔅",high_brightness:"🔆",mute:"🔇",speaker:"🔈",sound:"🔉",loud_sound:"🔊",battery:"🔋",electric_plug:"🔌",mag:"🔍",mag_right:"🔎",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",key:"🔑",lock:"🔒",unlock:"🔓",bell:"🔔",no_bell:"🔕",bookmark:"🔖",link:"🔗",radio_button:"🔘",back:"🔙",end:"🔚",on:"🔛",soon:"🔜",top:"🔝",underage:"🔞",keycap_ten:"🔟",capital_abcd:"🔠",abcd:"🔡",symbols:"🔣",abc:"🔤",fire:"🔥",flashlight:"🔦",wrench:"🔧",hammer:"🔨",nut_and_bolt:"🔩",hocho:"🔪",knife:"🔪",gun:"🔫",microscope:"🔬",telescope:"🔭",crystal_ball:"🔮",six_pointed_star:"🔯",beginner:"🔰",trident:"🔱",black_square_button:"🔲",white_square_button:"🔳",red_circle:"🔴",large_blue_circle:"🔵",large_orange_diamond:"🔶",large_blue_diamond:"🔷",small_orange_diamond:"🔸",small_blue_diamond:"🔹",small_red_triangle:"🔺",small_red_triangle_down:"🔻",arrow_up_small:"🔼",arrow_down_small:"🔽",om_symbol:"🕉️",dove_of_peace:"🕊️",kaaba:"🕋",mosque:"🕌",synagogue:"🕍",menorah_with_nine_branches:"🕎",clock1:"🕐",clock2:"🕑",clock3:"🕒",clock4:"🕓",clock5:"🕔",clock6:"🕕",clock7:"🕖",clock8:"🕗",clock9:"🕘",clock10:"🕙",clock11:"🕚",clock12:"🕛",clock130:"🕜",clock230:"🕝",clock330:"🕞",clock430:"🕟",clock530:"🕠",clock630:"🕡",clock730:"🕢",clock830:"🕣",clock930:"🕤",clock1030:"🕥",clock1130:"🕦",clock1230:"🕧",candle:"🕯️",mantelpiece_clock:"🕰️",hole:"🕳️",man_in_business_suit_levitating:"🕴️","female-detective":"🕵️‍♀️","male-detective":"🕵️‍♂️",sleuth_or_spy:"🕵️‍♂️",dark_sunglasses:"🕶️",spider:"🕷️",spider_web:"🕸️",joystick:"🕹️",man_dancing:"🕺",linked_paperclips:"🖇️",lower_left_ballpoint_pen:"🖊️",lower_left_fountain_pen:"🖋️",lower_left_paintbrush:"🖌️",lower_left_crayon:"🖍️",raised_hand_with_fingers_splayed:"🖐️",middle_finger:"🖕",reversed_hand_with_middle_finger_extended:"🖕","spock-hand":"🖖",black_heart:"🖤",desktop_computer:"🖥️",printer:"🖨️",three_button_mouse:"🖱️",trackball:"🖲️",frame_with_picture:"🖼️",card_index_dividers:"🗂️",card_file_box:"🗃️",file_cabinet:"🗄️",wastebasket:"🗑️",spiral_note_pad:"🗒️",spiral_calendar_pad:"🗓️",compression:"🗜️",old_key:"🗝️",rolled_up_newspaper:"🗞️",dagger_knife:"🗡️",speaking_head_in_silhouette:"🗣️",left_speech_bubble:"🗨️",right_anger_bubble:"🗯️",ballot_box_with_ballot:"🗳️",world_map:"🗺️",mount_fuji:"🗻",tokyo_tower:"🗼",statue_of_liberty:"🗽",japan:"🗾",moyai:"🗿",grinning:"😀",grin:"😁",joy:"😂",smiley:"😃",smile:"😄",sweat_smile:"😅",laughing:"😆",satisfied:"😆",innocent:"😇",smiling_imp:"😈",wink:"😉",blush:"😊",yum:"😋",relieved:"😌",heart_eyes:"😍",sunglasses:"😎",smirk:"😏",neutral_face:"😐",expressionless:"😑",unamused:"😒",sweat:"😓",pensive:"😔",confused:"😕",confounded:"😖",kissing:"😗",kissing_heart:"😘",kissing_smiling_eyes:"😙",kissing_closed_eyes:"😚",stuck_out_tongue:"😛",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",disappointed:"😞",worried:"😟",angry:"😠",rage:"😡",cry:"😢",persevere:"😣",triumph:"😤",disappointed_relieved:"😥",frowning:"😦",anguished:"😧",fearful:"😨",weary:"😩",sleepy:"😪",tired_face:"😫",grimacing:"😬",sob:"😭",open_mouth:"😮",hushed:"😯",cold_sweat:"😰",scream:"😱",astonished:"😲",flushed:"😳",sleeping:"😴",dizzy_face:"😵",no_mouth:"😶",mask:"😷",smile_cat:"😸",joy_cat:"😹",smiley_cat:"😺",heart_eyes_cat:"😻",smirk_cat:"😼",kissing_cat:"😽",pouting_cat:"😾",crying_cat_face:"😿",scream_cat:"🙀",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",upside_down_face:"🙃",face_with_rolling_eyes:"🙄","woman-gesturing-no":"🙅‍♀️",no_good:"🙅‍♀️","man-gesturing-no":"🙅‍♂️","woman-gesturing-ok":"🙆‍♀️",ok_woman:"🙆‍♀️","man-gesturing-ok":"🙆‍♂️","woman-bowing":"🙇‍♀️","man-bowing":"🙇‍♂️",bow:"🙇‍♂️",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊","woman-raising-hand":"🙋‍♀️",raising_hand:"🙋‍♀️","man-raising-hand":"🙋‍♂️",raised_hands:"🙌","woman-frowning":"🙍‍♀️",person_frowning:"🙍‍♀️","man-frowning":"🙍‍♂️","woman-pouting":"🙎‍♀️",person_with_pouting_face:"🙎‍♀️","man-pouting":"🙎‍♂️",pray:"🙏",rocket:"🚀",helicopter:"🚁",steam_locomotive:"🚂",railway_car:"🚃",bullettrain_side:"🚄",bullettrain_front:"🚅",train2:"🚆",metro:"🚇",light_rail:"🚈",station:"🚉",tram:"🚊",train:"🚋",bus:"🚌",oncoming_bus:"🚍",trolleybus:"🚎",busstop:"🚏",minibus:"🚐",ambulance:"🚑",fire_engine:"🚒",police_car:"🚓",oncoming_police_car:"🚔",taxi:"🚕",oncoming_taxi:"🚖",car:"🚗",red_car:"🚗",oncoming_automobile:"🚘",blue_car:"🚙",truck:"🚚",articulated_lorry:"🚛",tractor:"🚜",monorail:"🚝",mountain_railway:"🚞",suspension_railway:"🚟",mountain_cableway:"🚠",aerial_tramway:"🚡",ship:"🚢","woman-rowing-boat":"🚣‍♀️","man-rowing-boat":"🚣‍♂️",rowboat:"🚣‍♂️",speedboat:"🚤",traffic_light:"🚥",vertical_traffic_light:"🚦",construction:"🚧",rotating_light:"🚨",triangular_flag_on_post:"🚩",door:"🚪",no_entry_sign:"🚫",smoking:"🚬",no_smoking:"🚭",put_litter_in_its_place:"🚮",do_not_litter:"🚯",potable_water:"🚰","non-potable_water":"🚱",bike:"🚲",no_bicycles:"🚳","woman-biking":"🚴‍♀️","man-biking":"🚴‍♂️",bicyclist:"🚴‍♂️","woman-mountain-biking":"🚵‍♀️","man-mountain-biking":"🚵‍♂️",mountain_bicyclist:"🚵‍♂️","woman-walking":"🚶‍♀️","man-walking":"🚶‍♂️",walking:"🚶‍♂️",no_pedestrians:"🚷",children_crossing:"🚸",mens:"🚹",womens:"🚺",restroom:"🚻",baby_symbol:"🚼",toilet:"🚽",wc:"🚾",shower:"🚿",bath:"🛀",bathtub:"🛁",passport_control:"🛂",customs:"🛃",baggage_claim:"🛄",left_luggage:"🛅",couch_and_lamp:"🛋️",sleeping_accommodation:"🛌",shopping_bags:"🛍️",bellhop_bell:"🛎️",bed:"🛏️",place_of_worship:"🛐",octagonal_sign:"🛑",shopping_trolley:"🛒",hammer_and_wrench:"🛠️",shield:"🛡️",oil_drum:"🛢️",motorway:"🛣️",railway_track:"🛤️",motor_boat:"🛥️",small_airplane:"🛩️",airplane_departure:"🛫",airplane_arriving:"🛬",satellite:"🛰️",passenger_ship:"🛳️",scooter:"🛴",motor_scooter:"🛵",canoe:"🛶",sled:"🛷",flying_saucer:"🛸",zipper_mouth_face:"🤐",money_mouth_face:"🤑",face_with_thermometer:"🤒",nerd_face:"🤓",thinking_face:"🤔",face_with_head_bandage:"🤕",robot_face:"🤖",hugging_face:"🤗",the_horns:"🤘",sign_of_the_horns:"🤘",call_me_hand:"🤙",raised_back_of_hand:"🤚","left-facing_fist":"🤛","right-facing_fist":"🤜",handshake:"🤝",crossed_fingers:"🤞",hand_with_index_and_middle_fingers_crossed:"🤞",i_love_you_hand_sign:"🤟",face_with_cowboy_hat:"🤠",clown_face:"🤡",nauseated_face:"🤢",rolling_on_the_floor_laughing:"🤣",drooling_face:"🤤",lying_face:"🤥","woman-facepalming":"🤦‍♀️","man-facepalming":"🤦‍♂️",face_palm:"🤦",sneezing_face:"🤧",face_with_raised_eyebrow:"🤨",face_with_one_eyebrow_raised:"🤨","star-struck":"🤩",grinning_face_with_star_eyes:"🤩",zany_face:"🤪",grinning_face_with_one_large_and_one_small_eye:"🤪",shushing_face:"🤫",face_with_finger_covering_closed_lips:"🤫",face_with_symbols_on_mouth:"🤬",serious_face_with_symbols_covering_mouth:"🤬",face_with_hand_over_mouth:"🤭",smiling_face_with_smiling_eyes_and_hand_covering_mouth:"🤭",face_vomiting:"🤮",face_with_open_mouth_vomiting:"🤮",exploding_head:"🤯",shocked_face_with_exploding_head:"🤯",pregnant_woman:"🤰","breast-feeding":"🤱",palms_up_together:"🤲",selfie:"🤳",prince:"🤴",man_in_tuxedo:"🤵",mrs_claus:"🤶",mother_christmas:"🤶","woman-shrugging":"🤷‍♀️","man-shrugging":"🤷‍♂️",shrug:"🤷","woman-cartwheeling":"🤸‍♀️","man-cartwheeling":"🤸‍♂️",person_doing_cartwheel:"🤸","woman-juggling":"🤹‍♀️","man-juggling":"🤹‍♂️",juggling:"🤹",fencer:"🤺","woman-wrestling":"🤼‍♀️","man-wrestling":"🤼‍♂️",wrestlers:"🤼","woman-playing-water-polo":"🤽‍♀️","man-playing-water-polo":"🤽‍♂️",water_polo:"🤽","woman-playing-handball":"🤾‍♀️","man-playing-handball":"🤾‍♂️",handball:"🤾",wilted_flower:"🥀",drum_with_drumsticks:"🥁",clinking_glasses:"🥂",tumbler_glass:"🥃",spoon:"🥄",goal_net:"🥅",first_place_medal:"🥇",second_place_medal:"🥈",third_place_medal:"🥉",boxing_glove:"🥊",martial_arts_uniform:"🥋",curling_stone:"🥌",croissant:"🥐",avocado:"🥑",cucumber:"🥒",bacon:"🥓",potato:"🥔",carrot:"🥕",baguette_bread:"🥖",green_salad:"🥗",shallow_pan_of_food:"🥘",stuffed_flatbread:"🥙",egg:"🥚",glass_of_milk:"🥛",peanuts:"🥜",kiwifruit:"🥝",pancakes:"🥞",dumpling:"🥟",fortune_cookie:"🥠",takeout_box:"🥡",chopsticks:"🥢",bowl_with_spoon:"🥣",cup_with_straw:"🥤",coconut:"🥥",broccoli:"🥦",pie:"🥧",pretzel:"🥨",cut_of_meat:"🥩",sandwich:"🥪",canned_food:"🥫",crab:"🦀",lion_face:"🦁",scorpion:"🦂",turkey:"🦃",unicorn_face:"🦄",eagle:"🦅",duck:"🦆",bat:"🦇",shark:"🦈",owl:"🦉",fox_face:"🦊",butterfly:"🦋",deer:"🦌",gorilla:"🦍",lizard:"🦎",rhinoceros:"🦏",shrimp:"🦐",squid:"🦑",giraffe_face:"🦒",zebra_face:"🦓",hedgehog:"🦔",sauropod:"🦕","t-rex":"🦖",cricket:"🦗",cheese_wedge:"🧀",face_with_monocle:"🧐",adult:"🧑",child:"🧒",older_adult:"🧓",bearded_person:"🧔",person_with_headscarf:"🧕",woman_in_steamy_room:"🧖‍♀️",man_in_steamy_room:"🧖‍♂️",person_in_steamy_room:"🧖‍♂️",woman_climbing:"🧗‍♀️",person_climbing:"🧗‍♀️",man_climbing:"🧗‍♂️",woman_in_lotus_position:"🧘‍♀️",person_in_lotus_position:"🧘‍♀️",man_in_lotus_position:"🧘‍♂️",female_mage:"🧙‍♀️",mage:"🧙‍♀️",male_mage:"🧙‍♂️",female_fairy:"🧚‍♀️",fairy:"🧚‍♀️",male_fairy:"🧚‍♂️",female_vampire:"🧛‍♀️",vampire:"🧛‍♀️",male_vampire:"🧛‍♂️",mermaid:"🧜‍♀️",merman:"🧜‍♂️",merperson:"🧜‍♂️",female_elf:"🧝‍♀️",male_elf:"🧝‍♂️",elf:"🧝‍♂️",female_genie:"🧞‍♀️",male_genie:"🧞‍♂️",genie:"🧞‍♂️",female_zombie:"🧟‍♀️",male_zombie:"🧟‍♂️",zombie:"🧟‍♂️",brain:"🧠",orange_heart:"🧡",billed_cap:"🧢",scarf:"🧣",gloves:"🧤",coat:"🧥",socks:"🧦",bangbang:"‼️",interrobang:"⁉️",tm:"™️",information_source:"ℹ️",left_right_arrow:"↔️",arrow_up_down:"↕️",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrow_lower_right:"↘️",arrow_lower_left:"↙️",leftwards_arrow_with_hook:"↩️",arrow_right_hook:"↪️",watch:"⌚",hourglass:"⌛",keyboard:"⌨️",eject:"⏏️",fast_forward:"⏩",rewind:"⏪",arrow_double_up:"⏫",arrow_double_down:"⏬",black_right_pointing_double_triangle_with_vertical_bar:"⏭️",black_left_pointing_double_triangle_with_vertical_bar:"⏮️",black_right_pointing_triangle_with_double_vertical_bar:"⏯️",alarm_clock:"⏰",stopwatch:"⏱️",timer_clock:"⏲️",hourglass_flowing_sand:"⏳",double_vertical_bar:"⏸️",black_square_for_stop:"⏹️",black_circle_for_record:"⏺️",m:"Ⓜ️",black_small_square:"▪️",white_small_square:"▫️",arrow_forward:"▶️",arrow_backward:"◀️",white_medium_square:"◻️",black_medium_square:"◼️",white_medium_small_square:"◽",black_medium_small_square:"◾",sunny:"☀️",cloud:"☁️",umbrella:"☂️",snowman:"☃️",comet:"☄️",phone:"☎️",telephone:"☎️",ballot_box_with_check:"☑️",shamrock:"☘️",point_up:"☝️",skull_and_crossbones:"☠️",radioactive_sign:"☢️",biohazard_sign:"☣️",orthodox_cross:"☦️",star_and_crescent:"☪️",peace_symbol:"☮️",yin_yang:"☯️",wheel_of_dharma:"☸️",white_frowning_face:"☹️",relaxed:"☺️",female_sign:"♀️",male_sign:"♂️",gemini:"♊",cancer:"♋",leo:"♌",virgo:"♍",libra:"♎",scorpius:"♏",spades:"♠️",clubs:"♣️",hearts:"♥️",diamonds:"♦️",hotsprings:"♨️",recycle:"♻️",wheelchair:"♿",hammer_and_pick:"⚒️",crossed_swords:"⚔️",medical_symbol:"⚕️",staff_of_aesculapius:"⚕️",scales:"⚖️",alembic:"⚗️",gear:"⚙️",atom_symbol:"⚛️",fleur_de_lis:"⚜️",warning:"⚠️",zap:"⚡",white_circle:"⚪",black_circle:"⚫",coffin:"⚰️",funeral_urn:"⚱️",soccer:"⚽",baseball:"⚾",snowman_without_snow:"⛄",partly_sunny:"⛅",thunder_cloud_and_rain:"⛈️",ophiuchus:"⛎",pick:"⛏️",helmet_with_white_cross:"⛑️",chains:"⛓️",no_entry:"⛔",shinto_shrine:"⛩️",church:"⛪",mountain:"⛰️",umbrella_on_ground:"⛱️",fountain:"⛲",golf:"⛳",ferry:"⛴️",boat:"⛵",sailboat:"⛵",skier:"⛷️",ice_skate:"⛸️","woman-bouncing-ball":"⛹️‍♀️","man-bouncing-ball":"⛹️‍♂️",person_with_ball:"⛹️‍♂️",tent:"⛺",fuelpump:"⛽",scissors:"✂️",airplane:"✈️",email:"✉️",envelope:"✉️",fist:"✊",hand:"✋",raised_hand:"✋",v:"✌️",writing_hand:"✍️",pencil2:"✏️",black_nib:"✒️",heavy_check_mark:"✔️",heavy_multiplication_x:"✖️",latin_cross:"✝️",star_of_david:"✡️",eight_spoked_asterisk:"✳️",eight_pointed_black_star:"✴️",snowflake:"❄️",sparkle:"❇️",x:"❌",negative_squared_cross_mark:"❎",heavy_heart_exclamation_mark_ornament:"❣️",heart:"❤️",arrow_right:"➡️",curly_loop:"➰",loop:"➿",arrow_heading_up:"⤴️",arrow_heading_down:"⤵️",arrow_left:"⬅️",arrow_up:"⬆️",arrow_down:"⬇️",black_large_square:"⬛",white_large_square:"⬜",star:"⭐",o:"⭕",wavy_dash:"〰️",part_alternation_mark:"〽️",congratulations:"㊗️",secret:"㊙️"},yn=(_n=Object.freeze({__proto__:null,umbrella_with_rain_drops:"☔",coffee:"☕",aries:"♈",taurus:"♉",sagittarius:"♐",capricorn:"♑",aquarius:"♒",pisces:"♓",anchor:"⚓",white_check_mark:"✅",sparkles:"✨",question:"❓",grey_question:"❔",grey_exclamation:"❕",exclamation:"❗",heavy_exclamation_mark:"❗",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",hash:"#️⃣",keycap_star:"*️⃣",zero:"0️⃣",one:"1️⃣",two:"2️⃣",three:"3️⃣",four:"4️⃣",five:"5️⃣",six:"6️⃣",seven:"7️⃣",eight:"8️⃣",nine:"9️⃣",copyright:"©️",registered:"®️",mahjong:"🀄",black_joker:"🃏",a:"🅰️",b:"🅱️",o2:"🅾️",parking:"🅿️",ab:"🆎",cl:"🆑",cool:"🆒",free:"🆓",id:"🆔",ng:"🆖",ok:"🆗",sos:"🆘",up:"🆙",vs:"🆚",cn:"🇨🇳",de:"🇩🇪",es:"🇪🇸",fr:"🇫🇷",gb:"🇬🇧",uk:"🇬🇧",it:"🇮🇹",jp:"🇯🇵",kr:"🇰🇷",ru:"🇷🇺",us:"🇺🇸",koko:"🈁",sa:"🈂️",u7121:"🈚",u6307:"🈯",u7981:"🈲",u7a7a:"🈳",u5408:"🈴",u6e80:"🈵",u6709:"🈶",u6708:"🈷️",u7533:"🈸",u5272:"🈹",u55b6:"🈺",ideograph_advantage:"🉐",accept:"🉑",cyclone:"🌀",foggy:"🌁",closed_umbrella:"🌂",night_with_stars:"🌃",sunrise_over_mountains:"🌄",sunrise:"🌅",city_sunset:"🌆",city_sunrise:"🌇",rainbow:"🌈",bridge_at_night:"🌉",ocean:"🌊",volcano:"🌋",milky_way:"🌌",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",globe_with_meridians:"🌐",new_moon:"🌑",waxing_crescent_moon:"🌒",first_quarter_moon:"🌓",moon:"🌔",waxing_gibbous_moon:"🌔",full_moon:"🌕",waning_gibbous_moon:"🌖",last_quarter_moon:"🌗",waning_crescent_moon:"🌘",crescent_moon:"🌙",new_moon_with_face:"🌚",first_quarter_moon_with_face:"🌛",last_quarter_moon_with_face:"🌜",full_moon_with_face:"🌝",sun_with_face:"🌞",star2:"🌟",stars:"🌠",thermometer:"🌡️",mostly_sunny:"🌤️",sun_small_cloud:"🌤️",barely_sunny:"🌥️",sun_behind_cloud:"🌥️",partly_sunny_rain:"🌦️",sun_behind_rain_cloud:"🌦️",rain_cloud:"🌧️",snow_cloud:"🌨️",lightning:"🌩️",lightning_cloud:"🌩️",tornado:"🌪️",tornado_cloud:"🌪️",fog:"🌫️",wind_blowing_face:"🌬️",hotdog:"🌭",taco:"🌮",burrito:"🌯",chestnut:"🌰",seedling:"🌱",evergreen_tree:"🌲",deciduous_tree:"🌳",palm_tree:"🌴",cactus:"🌵",hot_pepper:"🌶️",tulip:"🌷",cherry_blossom:"🌸",rose:"🌹",hibiscus:"🌺",sunflower:"🌻",blossom:"🌼",corn:"🌽",ear_of_rice:"🌾",herb:"🌿",four_leaf_clover:"🍀",maple_leaf:"🍁",fallen_leaf:"🍂",leaves:"🍃",mushroom:"🍄",tomato:"🍅",eggplant:"🍆",grapes:"🍇",melon:"🍈",watermelon:"🍉",tangerine:"🍊",lemon:"🍋",banana:"🍌",pineapple:"🍍",apple:"🍎",green_apple:"🍏",pear:"🍐",peach:"🍑",cherries:"🍒",strawberry:"🍓",hamburger:"🍔",pizza:"🍕",meat_on_bone:"🍖",poultry_leg:"🍗",rice_cracker:"🍘",rice_ball:"🍙",rice:"🍚",curry:"🍛",ramen:"🍜",spaghetti:"🍝",bread:"🍞",fries:"🍟",sweet_potato:"🍠",dango:"🍡",oden:"🍢",sushi:"🍣",fried_shrimp:"🍤",fish_cake:"🍥",icecream:"🍦",shaved_ice:"🍧",ice_cream:"🍨",doughnut:"🍩",cookie:"🍪",chocolate_bar:"🍫",candy:"🍬",lollipop:"🍭",custard:"🍮",honey_pot:"🍯",cake:"🍰",bento:"🍱",stew:"🍲",fried_egg:"🍳",cooking:"🍳",fork_and_knife:"🍴",tea:"🍵",sake:"🍶",wine_glass:"🍷",cocktail:"🍸",tropical_drink:"🍹",beer:"🍺",beers:"🍻",baby_bottle:"🍼",knife_fork_plate:"🍽️",champagne:"🍾",popcorn:"🍿",ribbon:"🎀",gift:"🎁",birthday:"🎂",jack_o_lantern:"🎃",christmas_tree:"🎄",santa:"🎅",fireworks:"🎆",sparkler:"🎇",balloon:"🎈",tada:"🎉",confetti_ball:"🎊",tanabata_tree:"🎋",crossed_flags:"🎌",bamboo:"🎍",dolls:"🎎",flags:"🎏",wind_chime:"🎐",rice_scene:"🎑",school_satchel:"🎒",mortar_board:"🎓",medal:"🎖️",reminder_ribbon:"🎗️",studio_microphone:"🎙️",level_slider:"🎚️",control_knobs:"🎛️",film_frames:"🎞️",admission_tickets:"🎟️",carousel_horse:"🎠",ferris_wheel:"🎡",roller_coaster:"🎢",fishing_pole_and_fish:"🎣",microphone:"🎤",movie_camera:"🎥",cinema:"🎦",headphones:"🎧",art:"🎨",tophat:"🎩",circus_tent:"🎪",ticket:"🎫",clapper:"🎬",performing_arts:"🎭",video_game:"🎮",dart:"🎯",slot_machine:"🎰",game_die:"🎲",bowling:"🎳",flower_playing_cards:"🎴",musical_note:"🎵",notes:"🎶",saxophone:"🎷",guitar:"🎸",musical_keyboard:"🎹",trumpet:"🎺",violin:"🎻",musical_score:"🎼",running_shirt_with_sash:"🎽",tennis:"🎾",ski:"🎿",basketball:"🏀",checkered_flag:"🏁",snowboarder:"🏂",runner:"🏃‍♂️",running:"🏃‍♂️",surfer:"🏄‍♂️",sports_medal:"🏅",trophy:"🏆",horse_racing:"🏇",football:"🏈",rugby_football:"🏉",swimmer:"🏊‍♂️",weight_lifter:"🏋️‍♂️",golfer:"🏌️‍♂️",racing_motorcycle:"🏍️",racing_car:"🏎️",cricket_bat_and_ball:"🏏",volleyball:"🏐",field_hockey_stick_and_ball:"🏑",ice_hockey_stick_and_puck:"🏒",table_tennis_paddle_and_ball:"🏓",snow_capped_mountain:"🏔️",camping:"🏕️",beach_with_umbrella:"🏖️",building_construction:"🏗️",house_buildings:"🏘️",cityscape:"🏙️",derelict_house_building:"🏚️",classical_building:"🏛️",desert:"🏜️",desert_island:"🏝️",national_park:"🏞️",stadium:"🏟️",house:"🏠",house_with_garden:"🏡",office:"🏢",post_office:"🏣",european_post_office:"🏤",hospital:"🏥",bank:"🏦",atm:"🏧",hotel:"🏨",love_hotel:"🏩",convenience_store:"🏪",school:"🏫",department_store:"🏬",factory:"🏭",izakaya_lantern:"🏮",lantern:"🏮",japanese_castle:"🏯",european_castle:"🏰",waving_white_flag:"🏳️",waving_black_flag:"🏴",rosette:"🏵️",label:"🏷️",badminton_racquet_and_shuttlecock:"🏸",bow_and_arrow:"🏹",amphora:"🏺",rat:"🐀",mouse2:"🐁",ox:"🐂",water_buffalo:"🐃",cow2:"🐄",tiger2:"🐅",leopard:"🐆",rabbit2:"🐇",cat2:"🐈",dragon:"🐉",crocodile:"🐊",whale2:"🐋",snail:"🐌",snake:"🐍",racehorse:"🐎",ram:"🐏",goat:"🐐",sheep:"🐑",monkey:"🐒",rooster:"🐓",chicken:"🐔",dog2:"🐕",pig2:"🐖",boar:"🐗",elephant:"🐘",octopus:"🐙",shell:"🐚",bug:"🐛",ant:"🐜",bee:"🐝",honeybee:"🐝",beetle:"🐞",fish:"🐟",tropical_fish:"🐠",blowfish:"🐡",turtle:"🐢",hatching_chick:"🐣",baby_chick:"🐤",hatched_chick:"🐥",bird:"🐦",penguin:"🐧",koala:"🐨",poodle:"🐩",dromedary_camel:"🐪",camel:"🐫",dolphin:"🐬",flipper:"🐬",mouse:"🐭",cow:"🐮",tiger:"🐯",rabbit:"🐰",cat:"🐱",dragon_face:"🐲",whale:"🐳",horse:"🐴",monkey_face:"🐵",dog:"🐶",pig:"🐷",frog:"🐸",hamster:"🐹",wolf:"🐺",bear:"🐻",panda_face:"🐼",pig_nose:"🐽",feet:"🐾",paw_prints:"🐾",chipmunk:"🐿️",eyes:"👀",eye:"👁️",ear:"👂",nose:"👃",lips:"👄",tongue:"👅",point_up_2:"👆",point_down:"👇",point_left:"👈",point_right:"👉",facepunch:"👊",punch:"👊",wave:"👋",ok_hand:"👌",thumbsup:"👍",thumbsdown:"👎",clap:"👏",open_hands:"👐",crown:"👑",womans_hat:"👒",eyeglasses:"👓",necktie:"👔",shirt:"👕",tshirt:"👕",jeans:"👖",dress:"👗",kimono:"👘",bikini:"👙",womans_clothes:"👚",purse:"👛",handbag:"👜",pouch:"👝",mans_shoe:"👞",shoe:"👞",athletic_shoe:"👟",high_heel:"👠",sandal:"👡",boot:"👢",footprints:"👣",bust_in_silhouette:"👤",busts_in_silhouette:"👥",boy:"👦",girl:"👧",family:"👨‍👩‍👦",man:"👨",couple_with_heart:"👩‍❤️‍👨",couplekiss:"👩‍❤️‍💋‍👨",woman:"👩",couple:"👫",man_and_woman_holding_hands:"👫",two_men_holding_hands:"👬",two_women_holding_hands:"👭",cop:"👮‍♂️",dancers:"👯‍♀️",bride_with_veil:"👰",person_with_blond_hair:"👱‍♂️",man_with_gua_pi_mao:"👲",man_with_turban:"👳‍♂️",older_man:"👴",older_woman:"👵",baby:"👶",construction_worker:"👷‍♂️",princess:"👸",japanese_ogre:"👹",japanese_goblin:"👺",ghost:"👻",angel:"👼",alien:"👽",space_invader:"👾",imp:"👿",skull:"💀",information_desk_person:"💁‍♀️",guardsman:"💂‍♂️",dancer:"💃",lipstick:"💄",nail_care:"💅",massage:"💆‍♀️",haircut:"💇‍♀️",barber:"💈",syringe:"💉",pill:"💊",kiss:"💋",love_letter:"💌",ring:"💍",gem:"💎",bouquet:"💐",wedding:"💒",heartbeat:"💓",broken_heart:"💔",two_hearts:"💕",sparkling_heart:"💖",heartpulse:"💗",cupid:"💘",blue_heart:"💙",green_heart:"💚",yellow_heart:"💛",purple_heart:"💜",gift_heart:"💝",revolving_hearts:"💞",heart_decoration:"💟",diamond_shape_with_a_dot_inside:"💠",bulb:"💡",anger:"💢",bomb:"💣",zzz:"💤",boom:"💥",collision:"💥",sweat_drops:"💦",droplet:"💧",dash:"💨",hankey:"💩",poop:"💩",shit:"💩",muscle:"💪",dizzy:"💫",speech_balloon:"💬",thought_balloon:"💭",white_flower:"💮",moneybag:"💰",currency_exchange:"💱",heavy_dollar_sign:"💲",credit_card:"💳",yen:"💴",dollar:"💵",euro:"💶",pound:"💷",money_with_wings:"💸",chart:"💹",seat:"💺",computer:"💻",briefcase:"💼",minidisc:"💽",floppy_disk:"💾",cd:"💿",dvd:"📀",file_folder:"📁",open_file_folder:"📂",page_with_curl:"📃",page_facing_up:"📄",date:"📅",calendar:"📆",card_index:"📇",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",bar_chart:"📊",clipboard:"📋",pushpin:"📌",round_pushpin:"📍",paperclip:"📎",straight_ruler:"📏",triangular_ruler:"📐",bookmark_tabs:"📑",ledger:"📒",notebook:"📓",notebook_with_decorative_cover:"📔",closed_book:"📕",book:"📖",open_book:"📖",green_book:"📗",blue_book:"📘",orange_book:"📙",books:"📚",name_badge:"📛",scroll:"📜",memo:"📝",pencil:"📝",telephone_receiver:"📞",pager:"📟",fax:"📠",satellite_antenna:"📡",loudspeaker:"📢",mega:"📣",outbox_tray:"📤",inbox_tray:"📥",incoming_envelope:"📨",envelope_with_arrow:"📩",mailbox_closed:"📪",mailbox:"📫",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",postbox:"📮",postal_horn:"📯",newspaper:"📰",iphone:"📱",calling:"📲",vibration_mode:"📳",mobile_phone_off:"📴",no_mobile_phones:"📵",signal_strength:"📶",camera:"📷",camera_with_flash:"📸",video_camera:"📹",tv:"📺",radio:"📻",vhs:"📼",film_projector:"📽️",prayer_beads:"📿",twisted_rightwards_arrows:"🔀",repeat:"🔁",repeat_one:"🔂",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",low_brightness:"🔅",high_brightness:"🔆",mute:"🔇",speaker:"🔈",sound:"🔉",loud_sound:"🔊",battery:"🔋",electric_plug:"🔌",mag:"🔍",mag_right:"🔎",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",key:"🔑",lock:"🔒",unlock:"🔓",bell:"🔔",no_bell:"🔕",bookmark:"🔖",link:"🔗",radio_button:"🔘",back:"🔙",end:"🔚",on:"🔛",soon:"🔜",top:"🔝",underage:"🔞",keycap_ten:"🔟",capital_abcd:"🔠",abcd:"🔡",symbols:"🔣",abc:"🔤",fire:"🔥",flashlight:"🔦",wrench:"🔧",hammer:"🔨",nut_and_bolt:"🔩",hocho:"🔪",knife:"🔪",gun:"🔫",microscope:"🔬",telescope:"🔭",crystal_ball:"🔮",six_pointed_star:"🔯",beginner:"🔰",trident:"🔱",black_square_button:"🔲",white_square_button:"🔳",red_circle:"🔴",large_blue_circle:"🔵",large_orange_diamond:"🔶",large_blue_diamond:"🔷",small_orange_diamond:"🔸",small_blue_diamond:"🔹",small_red_triangle:"🔺",small_red_triangle_down:"🔻",arrow_up_small:"🔼",arrow_down_small:"🔽",om_symbol:"🕉️",dove_of_peace:"🕊️",kaaba:"🕋",mosque:"🕌",synagogue:"🕍",menorah_with_nine_branches:"🕎",clock1:"🕐",clock2:"🕑",clock3:"🕒",clock4:"🕓",clock5:"🕔",clock6:"🕕",clock7:"🕖",clock8:"🕗",clock9:"🕘",clock10:"🕙",clock11:"🕚",clock12:"🕛",clock130:"🕜",clock230:"🕝",clock330:"🕞",clock430:"🕟",clock530:"🕠",clock630:"🕡",clock730:"🕢",clock830:"🕣",clock930:"🕤",clock1030:"🕥",clock1130:"🕦",clock1230:"🕧",candle:"🕯️",mantelpiece_clock:"🕰️",hole:"🕳️",man_in_business_suit_levitating:"🕴️",sleuth_or_spy:"🕵️‍♂️",dark_sunglasses:"🕶️",spider:"🕷️",spider_web:"🕸️",joystick:"🕹️",man_dancing:"🕺",linked_paperclips:"🖇️",lower_left_ballpoint_pen:"🖊️",lower_left_fountain_pen:"🖋️",lower_left_paintbrush:"🖌️",lower_left_crayon:"🖍️",raised_hand_with_fingers_splayed:"🖐️",middle_finger:"🖕",reversed_hand_with_middle_finger_extended:"🖕",black_heart:"🖤",desktop_computer:"🖥️",printer:"🖨️",three_button_mouse:"🖱️",trackball:"🖲️",frame_with_picture:"🖼️",card_index_dividers:"🗂️",card_file_box:"🗃️",file_cabinet:"🗄️",wastebasket:"🗑️",spiral_note_pad:"🗒️",spiral_calendar_pad:"🗓️",compression:"🗜️",old_key:"🗝️",rolled_up_newspaper:"🗞️",dagger_knife:"🗡️",speaking_head_in_silhouette:"🗣️",left_speech_bubble:"🗨️",right_anger_bubble:"🗯️",ballot_box_with_ballot:"🗳️",world_map:"🗺️",mount_fuji:"🗻",tokyo_tower:"🗼",statue_of_liberty:"🗽",japan:"🗾",moyai:"🗿",grinning:"😀",grin:"😁",joy:"😂",smiley:"😃",smile:"😄",sweat_smile:"😅",laughing:"😆",satisfied:"😆",innocent:"😇",smiling_imp:"😈",wink:"😉",blush:"😊",yum:"😋",relieved:"😌",heart_eyes:"😍",sunglasses:"😎",smirk:"😏",neutral_face:"😐",expressionless:"😑",unamused:"😒",sweat:"😓",pensive:"😔",confused:"😕",confounded:"😖",kissing:"😗",kissing_heart:"😘",kissing_smiling_eyes:"😙",kissing_closed_eyes:"😚",stuck_out_tongue:"😛",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",disappointed:"😞",worried:"😟",angry:"😠",rage:"😡",cry:"😢",persevere:"😣",triumph:"😤",disappointed_relieved:"😥",frowning:"😦",anguished:"😧",fearful:"😨",weary:"😩",sleepy:"😪",tired_face:"😫",grimacing:"😬",sob:"😭",open_mouth:"😮",hushed:"😯",cold_sweat:"😰",scream:"😱",astonished:"😲",flushed:"😳",sleeping:"😴",dizzy_face:"😵",no_mouth:"😶",mask:"😷",smile_cat:"😸",joy_cat:"😹",smiley_cat:"😺",heart_eyes_cat:"😻",smirk_cat:"😼",kissing_cat:"😽",pouting_cat:"😾",crying_cat_face:"😿",scream_cat:"🙀",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",upside_down_face:"🙃",face_with_rolling_eyes:"🙄",no_good:"🙅‍♀️",ok_woman:"🙆‍♀️",bow:"🙇‍♂️",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",raising_hand:"🙋‍♀️",raised_hands:"🙌",person_frowning:"🙍‍♀️",person_with_pouting_face:"🙎‍♀️",pray:"🙏",rocket:"🚀",helicopter:"🚁",steam_locomotive:"🚂",railway_car:"🚃",bullettrain_side:"🚄",bullettrain_front:"🚅",train2:"🚆",metro:"🚇",light_rail:"🚈",station:"🚉",tram:"🚊",train:"🚋",bus:"🚌",oncoming_bus:"🚍",trolleybus:"🚎",busstop:"🚏",minibus:"🚐",ambulance:"🚑",fire_engine:"🚒",police_car:"🚓",oncoming_police_car:"🚔",taxi:"🚕",oncoming_taxi:"🚖",car:"🚗",red_car:"🚗",oncoming_automobile:"🚘",blue_car:"🚙",truck:"🚚",articulated_lorry:"🚛",tractor:"🚜",monorail:"🚝",mountain_railway:"🚞",suspension_railway:"🚟",mountain_cableway:"🚠",aerial_tramway:"🚡",ship:"🚢",rowboat:"🚣‍♂️",speedboat:"🚤",traffic_light:"🚥",vertical_traffic_light:"🚦",construction:"🚧",rotating_light:"🚨",triangular_flag_on_post:"🚩",door:"🚪",no_entry_sign:"🚫",smoking:"🚬",no_smoking:"🚭",put_litter_in_its_place:"🚮",do_not_litter:"🚯",potable_water:"🚰",bike:"🚲",no_bicycles:"🚳",bicyclist:"🚴‍♂️",mountain_bicyclist:"🚵‍♂️",walking:"🚶‍♂️",no_pedestrians:"🚷",children_crossing:"🚸",mens:"🚹",womens:"🚺",restroom:"🚻",baby_symbol:"🚼",toilet:"🚽",wc:"🚾",shower:"🚿",bath:"🛀",bathtub:"🛁",passport_control:"🛂",customs:"🛃",baggage_claim:"🛄",left_luggage:"🛅",couch_and_lamp:"🛋️",sleeping_accommodation:"🛌",shopping_bags:"🛍️",bellhop_bell:"🛎️",bed:"🛏️",place_of_worship:"🛐",octagonal_sign:"🛑",shopping_trolley:"🛒",hammer_and_wrench:"🛠️",shield:"🛡️",oil_drum:"🛢️",motorway:"🛣️",railway_track:"🛤️",motor_boat:"🛥️",small_airplane:"🛩️",airplane_departure:"🛫",airplane_arriving:"🛬",satellite:"🛰️",passenger_ship:"🛳️",scooter:"🛴",motor_scooter:"🛵",canoe:"🛶",sled:"🛷",flying_saucer:"🛸",zipper_mouth_face:"🤐",money_mouth_face:"🤑",face_with_thermometer:"🤒",nerd_face:"🤓",thinking_face:"🤔",face_with_head_bandage:"🤕",robot_face:"🤖",hugging_face:"🤗",the_horns:"🤘",sign_of_the_horns:"🤘",call_me_hand:"🤙",raised_back_of_hand:"🤚",handshake:"🤝",crossed_fingers:"🤞",hand_with_index_and_middle_fingers_crossed:"🤞",i_love_you_hand_sign:"🤟",face_with_cowboy_hat:"🤠",clown_face:"🤡",nauseated_face:"🤢",rolling_on_the_floor_laughing:"🤣",drooling_face:"🤤",lying_face:"🤥",face_palm:"🤦",sneezing_face:"🤧",face_with_raised_eyebrow:"🤨",face_with_one_eyebrow_raised:"🤨",grinning_face_with_star_eyes:"🤩",zany_face:"🤪",grinning_face_with_one_large_and_one_small_eye:"🤪",shushing_face:"🤫",face_with_finger_covering_closed_lips:"🤫",face_with_symbols_on_mouth:"🤬",serious_face_with_symbols_covering_mouth:"🤬",face_with_hand_over_mouth:"🤭",smiling_face_with_smiling_eyes_and_hand_covering_mouth:"🤭",face_vomiting:"🤮",face_with_open_mouth_vomiting:"🤮",exploding_head:"🤯",shocked_face_with_exploding_head:"🤯",pregnant_woman:"🤰",palms_up_together:"🤲",selfie:"🤳",prince:"🤴",man_in_tuxedo:"🤵",mrs_claus:"🤶",mother_christmas:"🤶",shrug:"🤷",person_doing_cartwheel:"🤸",juggling:"🤹",fencer:"🤺",wrestlers:"🤼",water_polo:"🤽",handball:"🤾",wilted_flower:"🥀",drum_with_drumsticks:"🥁",clinking_glasses:"🥂",tumbler_glass:"🥃",spoon:"🥄",goal_net:"🥅",first_place_medal:"🥇",second_place_medal:"🥈",third_place_medal:"🥉",boxing_glove:"🥊",martial_arts_uniform:"🥋",curling_stone:"🥌",croissant:"🥐",avocado:"🥑",cucumber:"🥒",bacon:"🥓",potato:"🥔",carrot:"🥕",baguette_bread:"🥖",green_salad:"🥗",shallow_pan_of_food:"🥘",stuffed_flatbread:"🥙",egg:"🥚",glass_of_milk:"🥛",peanuts:"🥜",kiwifruit:"🥝",pancakes:"🥞",dumpling:"🥟",fortune_cookie:"🥠",takeout_box:"🥡",chopsticks:"🥢",bowl_with_spoon:"🥣",cup_with_straw:"🥤",coconut:"🥥",broccoli:"🥦",pie:"🥧",pretzel:"🥨",cut_of_meat:"🥩",sandwich:"🥪",canned_food:"🥫",crab:"🦀",lion_face:"🦁",scorpion:"🦂",turkey:"🦃",unicorn_face:"🦄",eagle:"🦅",duck:"🦆",bat:"🦇",shark:"🦈",owl:"🦉",fox_face:"🦊",butterfly:"🦋",deer:"🦌",gorilla:"🦍",lizard:"🦎",rhinoceros:"🦏",shrimp:"🦐",squid:"🦑",giraffe_face:"🦒",zebra_face:"🦓",hedgehog:"🦔",sauropod:"🦕",cricket:"🦗",cheese_wedge:"🧀",face_with_monocle:"🧐",adult:"🧑",child:"🧒",older_adult:"🧓",bearded_person:"🧔",person_with_headscarf:"🧕",woman_in_steamy_room:"🧖‍♀️",man_in_steamy_room:"🧖‍♂️",person_in_steamy_room:"🧖‍♂️",woman_climbing:"🧗‍♀️",person_climbing:"🧗‍♀️",man_climbing:"🧗‍♂️",woman_in_lotus_position:"🧘‍♀️",person_in_lotus_position:"🧘‍♀️",man_in_lotus_position:"🧘‍♂️",female_mage:"🧙‍♀️",mage:"🧙‍♀️",male_mage:"🧙‍♂️",female_fairy:"🧚‍♀️",fairy:"🧚‍♀️",male_fairy:"🧚‍♂️",female_vampire:"🧛‍♀️",vampire:"🧛‍♀️",male_vampire:"🧛‍♂️",mermaid:"🧜‍♀️",merman:"🧜‍♂️",merperson:"🧜‍♂️",female_elf:"🧝‍♀️",male_elf:"🧝‍♂️",elf:"🧝‍♂️",female_genie:"🧞‍♀️",male_genie:"🧞‍♂️",genie:"🧞‍♂️",female_zombie:"🧟‍♀️",male_zombie:"🧟‍♂️",zombie:"🧟‍♂️",brain:"🧠",orange_heart:"🧡",billed_cap:"🧢",scarf:"🧣",gloves:"🧤",coat:"🧥",socks:"🧦",bangbang:"‼️",interrobang:"⁉️",tm:"™️",information_source:"ℹ️",left_right_arrow:"↔️",arrow_up_down:"↕️",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrow_lower_right:"↘️",arrow_lower_left:"↙️",leftwards_arrow_with_hook:"↩️",arrow_right_hook:"↪️",watch:"⌚",hourglass:"⌛",keyboard:"⌨️",eject:"⏏️",fast_forward:"⏩",rewind:"⏪",arrow_double_up:"⏫",arrow_double_down:"⏬",black_right_pointing_double_triangle_with_vertical_bar:"⏭️",black_left_pointing_double_triangle_with_vertical_bar:"⏮️",black_right_pointing_triangle_with_double_vertical_bar:"⏯️",alarm_clock:"⏰",stopwatch:"⏱️",timer_clock:"⏲️",hourglass_flowing_sand:"⏳",double_vertical_bar:"⏸️",black_square_for_stop:"⏹️",black_circle_for_record:"⏺️",m:"Ⓜ️",black_small_square:"▪️",white_small_square:"▫️",arrow_forward:"▶️",arrow_backward:"◀️",white_medium_square:"◻️",black_medium_square:"◼️",white_medium_small_square:"◽",black_medium_small_square:"◾",sunny:"☀️",cloud:"☁️",umbrella:"☂️",snowman:"☃️",comet:"☄️",phone:"☎️",telephone:"☎️",ballot_box_with_check:"☑️",shamrock:"☘️",point_up:"☝️",skull_and_crossbones:"☠️",radioactive_sign:"☢️",biohazard_sign:"☣️",orthodox_cross:"☦️",star_and_crescent:"☪️",peace_symbol:"☮️",yin_yang:"☯️",wheel_of_dharma:"☸️",white_frowning_face:"☹️",relaxed:"☺️",female_sign:"♀️",male_sign:"♂️",gemini:"♊",cancer:"♋",leo:"♌",virgo:"♍",libra:"♎",scorpius:"♏",spades:"♠️",clubs:"♣️",hearts:"♥️",diamonds:"♦️",hotsprings:"♨️",recycle:"♻️",wheelchair:"♿",hammer_and_pick:"⚒️",crossed_swords:"⚔️",medical_symbol:"⚕️",staff_of_aesculapius:"⚕️",scales:"⚖️",alembic:"⚗️",gear:"⚙️",atom_symbol:"⚛️",fleur_de_lis:"⚜️",warning:"⚠️",zap:"⚡",white_circle:"⚪",black_circle:"⚫",coffin:"⚰️",funeral_urn:"⚱️",soccer:"⚽",baseball:"⚾",snowman_without_snow:"⛄",partly_sunny:"⛅",thunder_cloud_and_rain:"⛈️",ophiuchus:"⛎",pick:"⛏️",helmet_with_white_cross:"⛑️",chains:"⛓️",no_entry:"⛔",shinto_shrine:"⛩️",church:"⛪",mountain:"⛰️",umbrella_on_ground:"⛱️",fountain:"⛲",golf:"⛳",ferry:"⛴️",boat:"⛵",sailboat:"⛵",skier:"⛷️",ice_skate:"⛸️",person_with_ball:"⛹️‍♂️",tent:"⛺",fuelpump:"⛽",scissors:"✂️",airplane:"✈️",email:"✉️",envelope:"✉️",fist:"✊",hand:"✋",raised_hand:"✋",v:"✌️",writing_hand:"✍️",pencil2:"✏️",black_nib:"✒️",heavy_check_mark:"✔️",heavy_multiplication_x:"✖️",latin_cross:"✝️",star_of_david:"✡️",eight_spoked_asterisk:"✳️",eight_pointed_black_star:"✴️",snowflake:"❄️",sparkle:"❇️",x:"❌",negative_squared_cross_mark:"❎",heavy_heart_exclamation_mark_ornament:"❣️",heart:"❤️",arrow_right:"➡️",curly_loop:"➰",loop:"➿",arrow_heading_up:"⤴️",arrow_heading_down:"⤵️",arrow_left:"⬅️",arrow_up:"⬆️",arrow_down:"⬇️",black_large_square:"⬛",white_large_square:"⬜",star:"⭐",o:"⭕",wavy_dash:"〰️",part_alternation_mark:"〽️",congratulations:"㊗️",secret:"㊙️",default:vn}))&&_n.default||_n,Zn=/:([a-zA-Z0-9_\-\+]+):/g,wn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function kn(t){var e=t.indexOf(":");return e>-1?e===t.length-1?kn(t=t.substring(0,e)):kn(t=t.substr(e+1)):t}function xn(t){return"string"==typeof t&&t.length>0?":"+t+":":t}var Sn=String.fromCharCode(65039),zn=new RegExp(Sn,"g");function En(t){return t.replace(zn,"")}var On=Object.keys(yn).reduce((function(t,e){return t[En(yn[e])]=e,t}),{}),Tn={emoji:yn};Tn._get=function(t){return yn.hasOwnProperty(t)?yn[t]:"string"==typeof(e=t)&&":"!==e[0]?xn(e):e;var e},Tn.get=function(t){return t=kn(t),Tn._get(t)},Tn.find=function(t){return Tn.findByName(t)||Tn.findByCode(t)},Tn.findByName=function(t){var e=kn(t),i=yn[e];return i?{emoji:i,key:e}:void 0},Tn.findByCode=function(t){var e=En(t),i=On[e];return i?{emoji:yn[i],key:i}:void 0},Tn.hasEmoji=function(t){return Tn.hasEmojiByName(t)||Tn.hasEmojiByCode(t)},Tn.hasEmojiByName=function(t){var e=Tn.findByName(t);return!!e&&e.key===kn(t)},Tn.hasEmojiByCode=function(t){var e=Tn.findByCode(t);return!!e&&En(e.emoji)===En(t)},Tn.which=function(t,e){var i=En(t),H=On[i];return e?xn(H):H},Tn.emojify=function(t,e,i){return t?t.split(Zn).map((function(t,H){if(H%2==0)return t;var V=Tn._get(t),a=V.indexOf(":")>-1;return a&&"function"==typeof e?e(t):a||"function"!=typeof i?V:i(V,t)})).join(""):""},Tn.random=function(){var t=Object.keys(yn),e=t[Math.floor(Math.random()*t.length)];return{key:e,emoji:Tn._get(e)}},Tn.search=function(t){var e=Object.keys(yn),i=kn(t);return e.filter((function(t){return 0===t.toString().indexOf(i)})).map((function(t){return{key:t,emoji:Tn._get(t)}}))},Tn.unemojify=function(t){return t?bn(t).map((function(t){return Tn.which(t,!0)||t})).join(""):""},Tn.replace=function(t,e,i){if(!t)return"";var H="function"==typeof e?e:function(){return e},V=bn(t),a=V.map((function(t,e){var a=Tn.findByCode(t);return a&&i&&" "===V[e+1]&&(V[e+1]=""),a?H(a):t})).join("");return i?a.replace(wn,""):a},Tn.strip=function(t){return Tn.replace(t,"",!0)};var Nn=Tn,Pn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Type=e.Char=void 0;e.Char={ANCHOR:"&",COMMENT:"#",TAG:"!",DIRECTIVES_END:"-",DOCUMENT_END:"."};e.Type={ALIAS:"ALIAS",BLANK_LINE:"BLANK_LINE",BLOCK_FOLDED:"BLOCK_FOLDED",BLOCK_LITERAL:"BLOCK_LITERAL",COMMENT:"COMMENT",DIRECTIVE:"DIRECTIVE",DOCUMENT:"DOCUMENT",FLOW_MAP:"FLOW_MAP",FLOW_SEQ:"FLOW_SEQ",MAP:"MAP",MAP_KEY:"MAP_KEY",MAP_VALUE:"MAP_VALUE",PLAIN:"PLAIN",QUOTE_DOUBLE:"QUOTE_DOUBLE",QUOTE_SINGLE:"QUOTE_SINGLE",SEQ:"SEQ",SEQ_ITEM:"SEQ_ITEM"}}));oC(Pn);Pn.Type,Pn.Char;var In=rC((function(t,e){function i(t){const e=[0];let i=t.indexOf("\n");for(;-1!==i;)i+=1,e.push(i),i=t.indexOf("\n",i);return e}function H(t){let e,H;return"string"==typeof t?(e=i(t),H=t):(Array.isArray(t)&&(t=t[0]),t&&t.context&&(t.lineStarts||(t.lineStarts=i(t.context.src)),e=t.lineStarts,H=t.context.src)),{lineStarts:e,src:H}}function V(t,e){const{lineStarts:i,src:V}=H(e);if(!i||!(t>=1)||t>i.length)return null;const a=i[t-1];let C=i[t];for(;C&&C>a&&"\n"===V[C-1];)--C;return V.slice(a,C)}Object.defineProperty(e,"__esModule",{value:!0}),e.getLinePos=function(t,e){if("number"!=typeof t||t<0)return null;const{lineStarts:i,src:V}=H(e);if(!i||!V||t>V.length)return null;for(let e=0;e<i.length;++e){const H=i[e];if(t<H)return{line:e,col:t-i[e-1]+1};if(t===H)return{line:e+1,col:1}}const a=i.length;return{line:a,col:t-i[a-1]+1}},e.getLine=V,e.getPrettyContext=function({start:t,end:e},i,H=80){let a=V(t.line,i);if(!a)return null;let{col:C}=t;if(a.length>H)if(C<=H-10)a=a.substr(0,H-1)+"…";else{const t=Math.round(H/2);a.length>C+t&&(a=a.substr(0,C+t-1)+"…"),C-=a.length-H,a="…"+a.substr(1-H)}let n=1,o="";e&&(e.line===t.line&&C+(e.col-t.col)<=H+1?n=e.col-t.col:(n=Math.min(a.length+1,H)-C,o="…"));const r=C>1?" ".repeat(C-1):"",L="^".repeat(n);return`${a}\n${r}${L}${o}`}}));oC(In);In.getLinePos,In.getLine,In.getPrettyContext;var Rn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;class i{static copy(t){return new i(t.start,t.end)}constructor(t,e){this.start=t,this.end=e||t}isEmpty(){return"number"!=typeof this.start||!this.end||this.end<=this.start}setOrigRange(t,e){const{start:i,end:H}=this;if(0===t.length||H<=t[0])return this.origStart=i,this.origEnd=H,e;let V=e;for(;V<t.length&&!(t[V]>i);)++V;this.origStart=i+V;const a=V;for(;V<t.length&&!(t[V]>=H);)++V;return this.origEnd=H+V,a}}e.default=i}));oC(Rn);var Bn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,H=(i=Rn)&&i.__esModule?i:{default:i};class V{static addStringTerminator(t,e,i){if("\n"===i[i.length-1])return i;const H=V.endOfWhiteSpace(t,e);return H>=t.length||"\n"===t[H]?i+"\n":i}static atDocumentBoundary(t,e,i){const H=t[e];if(!H)return!0;const V=t[e-1];if(V&&"\n"!==V)return!1;if(i){if(H!==i)return!1}else if(H!==Pn.Char.DIRECTIVES_END&&H!==Pn.Char.DOCUMENT_END)return!1;const a=t[e+1],C=t[e+2];if(a!==H||C!==H)return!1;const n=t[e+3];return!n||"\n"===n||"\t"===n||" "===n}static endOfIdentifier(t,e){let i=t[e];const H="<"===i,V=H?["\n","\t"," ",">"]:["\n","\t"," ","[","]","{","}",","];for(;i&&-1===V.indexOf(i);)i=t[e+=1];return H&&">"===i&&(e+=1),e}static endOfIndent(t,e){let i=t[e];for(;" "===i;)i=t[e+=1];return e}static endOfLine(t,e){let i=t[e];for(;i&&"\n"!==i;)i=t[e+=1];return e}static endOfWhiteSpace(t,e){let i=t[e];for(;"\t"===i||" "===i;)i=t[e+=1];return e}static startOfLine(t,e){let i=t[e-1];if("\n"===i)return e;for(;i&&"\n"!==i;)i=t[e-=1];return e+1}static endOfBlockIndent(t,e,i){const H=V.endOfIndent(t,i);if(H>i+e)return H;{const e=V.endOfWhiteSpace(t,H),i=t[e];if(!i||"\n"===i)return e}return null}static atBlank(t,e,i){const H=t[e];return"\n"===H||"\t"===H||" "===H||i&&!H}static atCollectionItem(t,e){const i=t[e];return("?"===i||":"===i||"-"===i)&&V.atBlank(t,e+1,!0)}static nextNodeIsIndented(t,e,i){return!(!t||e<0)&&(e>0||i&&"-"===t)}static normalizeOffset(t,e){const i=t[e];return i?"\n"!==i&&"\n"===t[e-1]?e-1:V.endOfWhiteSpace(t,e):e}static foldNewline(t,e,i){let H=0,a=!1,C="",n=t[e+1];for(;" "===n||"\t"===n||"\n"===n;){switch(n){case"\n":H=0,e+=1,C+="\n";break;case"\t":H<=i&&(a=!0),e=V.endOfWhiteSpace(t,e+2)-1;break;case" ":H+=1,e+=1}n=t[e+1]}return C||(C=" "),n&&H<=i&&(a=!0),{fold:C,offset:e,error:a}}constructor(t,e,i){Object.defineProperty(this,"context",{value:i||null,writable:!0}),this.error=null,this.range=null,this.valueRange=null,this.props=e||[],this.type=t,this.value=null}getPropValue(t,e,i){if(!this.context)return null;const{src:H}=this.context,V=this.props[t];return V&&H[V.start]===e?H.slice(V.start+(i?1:0),V.end):null}get anchor(){for(let t=0;t<this.props.length;++t){const e=this.getPropValue(t,Pn.Char.ANCHOR,!0);if(null!=e)return e}return null}get comment(){const t=[];for(let e=0;e<this.props.length;++e){const i=this.getPropValue(e,Pn.Char.COMMENT,!0);null!=i&&t.push(i)}return t.length>0?t.join("\n"):null}commentHasRequiredWhitespace(t){const{src:e}=this.context;if(this.header&&t===this.header.end)return!1;if(!this.valueRange)return!1;const{end:i}=this.valueRange;return t!==i||V.atBlank(e,i-1)}get hasComment(){if(this.context){const{src:t}=this.context;for(let e=0;e<this.props.length;++e)if(t[this.props[e].start]===Pn.Char.COMMENT)return!0}return!1}get hasProps(){if(this.context){const{src:t}=this.context;for(let e=0;e<this.props.length;++e)if(t[this.props[e].start]!==Pn.Char.COMMENT)return!0}return!1}get includesTrailingLines(){return!1}get jsonLike(){return-1!==[Pn.Type.FLOW_MAP,Pn.Type.FLOW_SEQ,Pn.Type.QUOTE_DOUBLE,Pn.Type.QUOTE_SINGLE].indexOf(this.type)}get rangeAsLinePos(){if(!this.range||!this.context)return;const t=(0,In.getLinePos)(this.range.start,this.context.root);return t?{start:t,end:(0,In.getLinePos)(this.range.end,this.context.root)}:void 0}get rawValue(){if(!this.valueRange||!this.context)return null;const{start:t,end:e}=this.valueRange;return this.context.src.slice(t,e)}get tag(){for(let t=0;t<this.props.length;++t){const e=this.getPropValue(t,Pn.Char.TAG,!1);if(null!=e){if("<"===e[1])return{verbatim:e.slice(2,-1)};{const[t,i,H]=e.match(/^(.*!)([^!]*)$/);return{handle:i,suffix:H}}}}return null}get valueRangeContainsNewline(){if(!this.valueRange||!this.context)return!1;const{start:t,end:e}=this.valueRange,{src:i}=this.context;for(let H=t;H<e;++H)if("\n"===i[H])return!0;return!1}parseComment(t){const{src:e}=this.context;if(e[t]===Pn.Char.COMMENT){const i=V.endOfLine(e,t+1),a=new H.default(t,i);return this.props.push(a),i}return t}setOrigRanges(t,e){return this.range&&(e=this.range.setOrigRange(t,e)),this.valueRange&&this.valueRange.setOrigRange(t,e),this.props.forEach(i=>i.setOrigRange(t,e)),e}toString(){const{context:{src:t},range:e,value:i}=this;if(null!=i)return i;const H=t.slice(e.start,e.end);return V.addStringTerminator(t,e.end,H)}}e.default=V}));oC(Bn);var Dn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.YAMLWarning=e.YAMLSyntaxError=e.YAMLSemanticError=e.YAMLReferenceError=e.YAMLError=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends Error{constructor(t,e,H){if(!(H&&e instanceof i.default))throw new Error(`Invalid arguments for new ${t}`);super(),this.name=t,this.message=H,this.source=e}makePretty(){if(!this.source)return;this.nodeType=this.source.type;const t=this.source.context&&this.source.context.root;if("number"==typeof this.offset){this.range=new H.default(this.offset,this.offset+1);const e=t&&(0,In.getLinePos)(this.offset,t);if(e){const t={line:e.line,col:e.col+1};this.linePos={start:e,end:t}}delete this.offset}else this.range=this.source.range,this.linePos=this.source.rangeAsLinePos;if(this.linePos){const{line:e,col:i}=this.linePos.start;this.message+=` at line ${e}, column ${i}`;const H=t&&(0,In.getPrettyContext)(this.linePos,t);H&&(this.message+=`:\n\n${H}\n`)}delete this.source}}e.YAMLError=a;e.YAMLReferenceError=class extends a{constructor(t,e){super("YAMLReferenceError",t,e)}};e.YAMLSemanticError=class extends a{constructor(t,e){super("YAMLSemanticError",t,e)}};e.YAMLSyntaxError=class extends a{constructor(t,e){super("YAMLSyntaxError",t,e)}};e.YAMLWarning=class extends a{constructor(t,e){super("YAMLWarning",t,e)}}}));oC(Dn);Dn.YAMLWarning,Dn.YAMLSyntaxError,Dn.YAMLSemanticError,Dn.YAMLReferenceError,Dn.YAMLError;var $n=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends i.default{constructor(){super(Pn.Type.BLANK_LINE)}get includesTrailingLines(){return!0}parse(t,e){this.context=t;const{src:V}=t;let a=e+1;for(;i.default.atBlank(V,a);){const t=i.default.endOfWhiteSpace(V,a);if("\n"!==t)break;a=t+1}return this.range=new H.default(e,a),a}}e.default=a}));oC($n);var jn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a($n),H=a(Bn),V=a(Rn);function a(t){return t&&t.__esModule?t:{default:t}}class C extends H.default{constructor(t,e){super(t,e),this.node=null}get includesTrailingLines(){return!!this.node&&this.node.includesTrailingLines}parse(t,e){this.context=t;const{parseNode:a,src:C}=t;let{atLineStart:n,lineStart:o}=t;n||this.type!==Pn.Type.SEQ_ITEM||(this.error=new Dn.YAMLSemanticError(this,"Sequence items must not have preceding content on the same line"));const r=n?e-o:t.indent;let L=H.default.endOfWhiteSpace(C,e+1),d=C[L];const s="#"===d,l=[];let M=null;for(;"\n"===d||"#"===d;){if("#"===d){const t=H.default.endOfLine(C,L+1);l.push(new V.default(L,t)),L=t}else{n=!0,o=L+1,"\n"===C[H.default.endOfWhiteSpace(C,o)]&&0===l.length&&(M=new i.default,o=M.parse({src:C},o)),L=H.default.endOfIndent(C,o)}d=C[L]}if(H.default.nextNodeIsIndented(d,L-(o+r),this.type!==Pn.Type.SEQ_ITEM)?this.node=a({atLineStart:n,inCollection:!1,indent:r,lineStart:o,parent:this},L):d&&o>e+1&&(L=o-1),this.node){if(M){const e=t.parent.items||t.parent.contents;e&&e.push(M)}l.length&&Array.prototype.push.apply(this.props,l),L=this.node.range.end}else if(s){const t=l[0];this.props.push(t),L=t.end}else L=H.default.endOfLine(C,e+1);const h=this.node?this.node.valueRange.end:L;return this.valueRange=new V.default(e,h),L}setOrigRanges(t,e){return e=super.setOrigRanges(t,e),this.node?this.node.setOrigRanges(t,e):e}toString(){const{context:{src:t},node:e,range:i,value:V}=this;if(null!=V)return V;const a=e?t.slice(i.start,e.range.start)+String(e):t.slice(i.start,i.end);return H.default.addStringTerminator(t,i.end,a)}}e.default=C}));oC(jn);var Fn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends i.default{constructor(){super(Pn.Type.COMMENT)}parse(t,e){this.context=t;const i=this.parseComment(e);return this.range=new H.default(e,i),i}}e.default=a}));oC(Fn);var qn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.grabCollectionEndComments=o,e.default=void 0;var i=n($n),H=n(jn),V=n(Fn),a=n(Bn),C=n(Rn);function n(t){return t&&t.__esModule?t:{default:t}}function o(t){let e=t;for(;e instanceof H.default;)e=e.node;if(!(e instanceof r))return null;const i=e.items.length;let V=-1;for(let t=i-1;t>=0;--t){const i=e.items[t];if(i.type===Pn.Type.COMMENT){const{indent:e,lineStart:H}=i.context;if(e>0&&i.range.start>=H+e)break;V=t}else{if(i.type!==Pn.Type.BLANK_LINE)break;V=t}}if(-1===V)return null;const a=e.items.splice(V,i-V),C=a[0].range.start;for(;e.range.end=C,e.valueRange&&e.valueRange.end>C&&(e.valueRange.end=C),e!==t;)e=e.context.parent;return a}class r extends a.default{static nextContentHasIndent(t,e,i){const H=a.default.endOfLine(t,e)+1,V=t[e=a.default.endOfWhiteSpace(t,H)];return!!V&&(e>=H+i||("#"===V||"\n"===V)&&r.nextContentHasIndent(t,e,i))}constructor(t){super(t.type===Pn.Type.SEQ_ITEM?Pn.Type.SEQ:Pn.Type.MAP);for(let e=t.props.length-1;e>=0;--e)if(t.props[e].start<t.context.lineStart){this.props=t.props.slice(0,e+1),t.props=t.props.slice(e+1);const i=t.props[0]||t.valueRange;t.range.start=i.start;break}this.items=[t];const e=o(t);e&&Array.prototype.push.apply(this.items,e)}get includesTrailingLines(){return this.items.length>0}parse(t,e){this.context=t;const{parseNode:H,src:n}=t;let L=a.default.startOfLine(n,e);const d=this.items[0];d.context.parent=this,this.valueRange=C.default.copy(d.valueRange);const s=d.range.start-d.context.lineStart;let l=e;l=a.default.normalizeOffset(n,l);let M=n[l],h=a.default.endOfWhiteSpace(n,L)===l,A=!1;for(;M;){for(;"\n"===M||"#"===M;){if(h&&"\n"===M&&!A){const t=new i.default;if(l=t.parse({src:n},l),this.valueRange.end=l,l>=n.length){M=null;break}this.items.push(t),l-=1}else if("#"===M){if(l<L+s&&!r.nextContentHasIndent(n,l,s))return l;const t=new V.default;if(l=t.parse({indent:s,lineStart:L,src:n},l),this.items.push(t),this.valueRange.end=l,l>=n.length){M=null;break}}if(L=l+1,l=a.default.endOfIndent(n,L),a.default.atBlank(n,l)){const t=a.default.endOfWhiteSpace(n,l),e=n[t];e&&"\n"!==e&&"#"!==e||(l=t)}M=n[l],h=!0}if(!M)break;if(l!==L+s&&(h||":"!==M)){L>e&&(l=L);break}if(d.type===Pn.Type.SEQ_ITEM!=("-"===M)){let t=!0;if("-"===M){const e=n[l+1];t=!e||"\n"===e||"\t"===e||" "===e}if(t){L>e&&(l=L);break}}const t=H({atLineStart:h,inCollection:!0,indent:s,lineStart:L,parent:this},l);if(!t)return l;if(this.items.push(t),this.valueRange.end=t.valueRange.end,l=a.default.normalizeOffset(n,t.range.end),M=n[l],h=!1,A=t.includesTrailingLines,M){let t=l-1,e=n[t];for(;" "===e||"\t"===e;)e=n[--t];"\n"===e&&(L=t+1,h=!0)}const C=o(t);C&&Array.prototype.push.apply(this.items,C)}return l}setOrigRanges(t,e){return e=super.setOrigRanges(t,e),this.items.forEach(i=>{e=i.setOrigRanges(t,e)}),e}toString(){const{context:{src:t},items:e,range:i,value:H}=this;if(null!=H)return H;let V=t.slice(i.start,e[0].range.start)+String(e[0]);for(let t=1;t<e.length;++t){const i=e[t],{atLineStart:H,indent:a}=i.context;if(H)for(let t=0;t<a;++t)V+=" ";V+=String(i)}return a.default.addStringTerminator(t,i.end,V)}}e.default=r}));oC(qn);qn.grabCollectionEndComments;var Un=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends i.default{static endOfDirective(t,e){let i=t[e];for(;i&&"\n"!==i&&"#"!==i;)i=t[e+=1];for(i=t[e-1];" "===i||"\t"===i;)i=t[(e-=1)-1];return e}constructor(){super(Pn.Type.DIRECTIVE),this.name=null}get parameters(){const t=this.rawValue;return t?t.trim().split(/[ \t]+/):[]}parseName(t){const{src:e}=this.context;let i=t,H=e[i];for(;H&&"\n"!==H&&"\t"!==H&&" "!==H;)H=e[i+=1];return this.name=e.slice(t,i),i}parseParameters(t){const{src:e}=this.context;let i=t,V=e[i];for(;V&&"\n"!==V&&"#"!==V;)V=e[i+=1];return this.valueRange=new H.default(t,i),i}parse(t,e){this.context=t;let i=this.parseName(e+1);return i=this.parseParameters(i),i=this.parseComment(i),this.range=new H.default(e,i),i}}e.default=a}));oC(Un);var Yn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n($n),H=n(Fn),V=n(Un),a=n(Bn),C=n(Rn);function n(t){return t&&t.__esModule?t:{default:t}}class o extends a.default{static startCommentOrEndBlankLine(t,e){const i=a.default.endOfWhiteSpace(t,e),H=t[i];return"#"===H||"\n"===H?i:e}constructor(){super(Pn.Type.DOCUMENT),this.directives=null,this.contents=null,this.directivesEndMarker=null,this.documentEndMarker=null}parseDirectives(t){const{src:e}=this.context;this.directives=[];let n=!0,r=!1,L=t;for(;!a.default.atDocumentBoundary(e,L,Pn.Char.DIRECTIVES_END);)switch(L=o.startCommentOrEndBlankLine(e,L),e[L]){case"\n":if(n){const t=new i.default;L=t.parse({src:e},L),L<e.length&&this.directives.push(t)}else L+=1,n=!0;break;case"#":{const t=new H.default;L=t.parse({src:e},L),this.directives.push(t),n=!1}break;case"%":{const t=new V.default;L=t.parse({parent:this,src:e},L),this.directives.push(t),r=!0,n=!1}break;default:return r?this.error=new Dn.YAMLSemanticError(this,"Missing directives-end indicator line"):this.directives.length>0&&(this.contents=this.directives,this.directives=[]),L}return e[L]?(this.directivesEndMarker=new C.default(L,L+3),L+3):(r?this.error=new Dn.YAMLSemanticError(this,"Missing directives-end indicator line"):this.directives.length>0&&(this.contents=this.directives,this.directives=[]),L)}parseContents(t){const{parseNode:e,src:V}=this.context;this.contents||(this.contents=[]);let n=t;for(;"-"===V[n-1];)n-=1;let r=a.default.endOfWhiteSpace(V,t),L=n===t;for(this.valueRange=new C.default(r);!a.default.atDocumentBoundary(V,r,Pn.Char.DOCUMENT_END);){switch(V[r]){case"\n":if(L){const t=new i.default;r=t.parse({src:V},r),r<V.length&&this.contents.push(t)}else r+=1,L=!0;n=r;break;case"#":{const t=new H.default;r=t.parse({src:V},r),this.contents.push(t),L=!1}break;default:{const t=a.default.endOfIndent(V,r),i=e({atLineStart:L,indent:-1,inFlow:!1,inCollection:!1,lineStart:n,parent:this},t);if(!i)return this.valueRange.end=t;this.contents.push(i),r=i.range.end,L=!1;const H=(0,qn.grabCollectionEndComments)(i);H&&Array.prototype.push.apply(this.contents,H)}}r=o.startCommentOrEndBlankLine(V,r)}if(this.valueRange.end=r,V[r]&&(this.documentEndMarker=new C.default(r,r+3),r+=3,V[r])){if(r=a.default.endOfWhiteSpace(V,r),"#"===V[r]){const t=new H.default;r=t.parse({src:V},r),this.contents.push(t)}switch(V[r]){case"\n":r+=1;break;case void 0:break;default:this.error=new Dn.YAMLSyntaxError(this,"Document end marker line cannot have a non-comment suffix")}}return r}parse(t,e){t.root=this,this.context=t;const{src:i}=t;let H=65279===i.charCodeAt(e)?e+1:e;return H=this.parseDirectives(H),H=this.parseContents(H),H}setOrigRanges(t,e){return e=super.setOrigRanges(t,e),this.directives.forEach(i=>{e=i.setOrigRanges(t,e)}),this.directivesEndMarker&&(e=this.directivesEndMarker.setOrigRange(t,e)),this.contents.forEach(i=>{e=i.setOrigRanges(t,e)}),this.documentEndMarker&&(e=this.documentEndMarker.setOrigRange(t,e)),e}toString(){const{contents:t,directives:e,value:i}=this;if(null!=i)return i;let H=e.join("");return t.length>0&&((e.length>0||t[0].type===Pn.Type.COMMENT)&&(H+="---\n"),H+=t.join("")),"\n"!==H[H.length-1]&&(H+="\n"),H}}e.default=o}));oC(Yn);var Kn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends i.default{parse(t,e){this.context=t;const{src:V}=t;let a=i.default.endOfIdentifier(V,e+1);return this.valueRange=new H.default(e+1,a),a=i.default.endOfWhiteSpace(V,a),a=this.parseComment(a),a}}e.default=a}));oC(Kn);var Wn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Chomp=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}const a={CLIP:"CLIP",KEEP:"KEEP",STRIP:"STRIP"};e.Chomp=a;class C extends i.default{constructor(t,e){super(t,e),this.blockIndent=null,this.chomping=a.CLIP,this.header=null}get includesTrailingLines(){return this.chomping===a.KEEP}get strValue(){if(!this.valueRange||!this.context)return null;let{start:t,end:e}=this.valueRange;const{indent:H,src:V}=this.context;if(this.valueRange.isEmpty())return"";let C=null,n=V[e-1];for(;"\n"===n||"\t"===n||" "===n;){if(e-=1,e<=t){if(this.chomping===a.KEEP)break;return""}"\n"===n&&(C=e),n=V[e-1]}let o=e+1;C&&(this.chomping===a.KEEP?(o=C,e=this.valueRange.end):e=C);const r=H+this.blockIndent,L=this.type===Pn.Type.BLOCK_FOLDED;let d=!0,s="",l="",M=!1;for(let H=t;H<e;++H){for(let t=0;t<r&&" "===V[H];++t)H+=1;const t=V[H];if("\n"===t)"\n"===l?s+="\n":l="\n";else{const a=i.default.endOfLine(V,H),C=V.slice(H,a);H=a,L&&(" "===t||"\t"===t)&&H<o?(" "===l?l="\n":M||d||"\n"!==l||(l="\n\n"),s+=l+C,l=a<e&&V[a]||"",M=!0):(s+=l+C,l=L&&H<o?" ":"\n",M=!1),d&&""!==C&&(d=!1)}}return this.chomping===a.STRIP?s:s+"\n"}parseBlockHeader(t){const{src:e}=this.context;let i=t+1,V="";for(;;){const C=e[i];switch(C){case"-":this.chomping=a.STRIP;break;case"+":this.chomping=a.KEEP;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":V+=C;break;default:return this.blockIndent=Number(V)||null,this.header=new H.default(t,i),i}i+=1}}parseBlockValue(t){const{indent:e,src:V}=this.context;let C=t,n=t,o=this.blockIndent?e+this.blockIndent-1:e,r=1;for(let t=V[C];"\n"===t&&(C+=1,!i.default.atDocumentBoundary(V,C));t=V[C]){const t=i.default.endOfBlockIndent(V,o,C);if(null===t)break;if(!this.blockIndent){const i=t-(C+e);if("\n"!==V[t]){if(i<r){C-=1;break}this.blockIndent=i,o=e+this.blockIndent-1}else i>r&&(r=i)}C="\n"===V[t]?t:n=i.default.endOfLine(V,t)}return this.chomping!==a.KEEP&&(C=V[n]?n+1:n),this.valueRange=new H.default(t+1,C),C}parse(t,e){this.context=t;const{src:H}=t;let V=this.parseBlockHeader(e);return V=i.default.endOfWhiteSpace(H,V),V=this.parseComment(V),V=this.parseBlockValue(V),V}setOrigRanges(t,e){return e=super.setOrigRanges(t,e),this.header?this.header.setOrigRange(t,e):e}}e.default=C}));oC(Wn);Wn.Chomp;var Qn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=C($n),H=C(Fn),V=C(Bn),a=C(Rn);function C(t){return t&&t.__esModule?t:{default:t}}class n extends V.default{constructor(t,e){super(t,e),this.items=null}prevNodeIsJsonLike(t=this.items.length){const e=this.items[t-1];return!!e&&(e.jsonLike||e.type===Pn.Type.COMMENT&&this.nodeIsJsonLike(t-1))}parse(t,e){this.context=t;const{parseNode:C,src:n}=t;let{indent:o,lineStart:r}=t,L=n[e];this.items=[{char:L,offset:e}];let d=V.default.endOfWhiteSpace(n,e+1);for(L=n[d];L&&"]"!==L&&"}"!==L;){switch(L){case"\n":if(r=d+1,"\n"===n[V.default.endOfWhiteSpace(n,r)]){const t=new i.default;r=t.parse({src:n},r),this.items.push(t)}if(d=V.default.endOfIndent(n,r),d<=r+o&&(L=n[d],d<r+o||"]"!==L&&"}"!==L)){const t="Insufficient indentation in flow collection";this.error=new Dn.YAMLSemanticError(this,t)}break;case",":this.items.push({char:L,offset:d}),d+=1;break;case"#":{const t=new H.default;d=t.parse({src:n},d),this.items.push(t)}break;case"?":case":":{const t=n[d+1];if("\n"===t||"\t"===t||" "===t||","===t||":"===L&&this.prevNodeIsJsonLike()){this.items.push({char:L,offset:d}),d+=1;break}}default:{const t=C({atLineStart:!1,inCollection:!1,inFlow:!0,indent:-1,lineStart:r,parent:this},d);if(!t)return this.valueRange=new a.default(e,d),d;this.items.push(t),d=V.default.normalizeOffset(n,t.range.end)}}d=V.default.endOfWhiteSpace(n,d),L=n[d]}return this.valueRange=new a.default(e,d+1),L&&(this.items.push({char:L,offset:d}),d=V.default.endOfWhiteSpace(n,d+1),d=this.parseComment(d)),d}setOrigRanges(t,e){return e=super.setOrigRanges(t,e),this.items.forEach(i=>{if(i instanceof V.default)e=i.setOrigRanges(t,e);else if(0===t.length)i.origOffset=i.offset;else{let H=e;for(;H<t.length&&!(t[H]>i.offset);)++H;i.origOffset=i.offset+H,e=H}}),e}toString(){const{context:{src:t},items:e,range:i,value:H}=this;if(null!=H)return H;const a=e.filter(t=>t instanceof V.default);let C="",n=i.start;return a.forEach(e=>{const i=t.slice(n,e.range.start);n=e.range.end,C+=i+String(e),"\n"===C[C.length-1]&&"\n"!==t[n-1]&&"\n"===t[n]&&(n+=1)}),C+=t.slice(n,i.end),V.default.addStringTerminator(t,i.end,C)}}e.default=n}));oC(Qn);var Gn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends i.default{static endOfLine(t,e,i){let H=t[e],V=e;for(;H&&"\n"!==H&&(!i||"["!==H&&"]"!==H&&"{"!==H&&"}"!==H&&","!==H);){const e=t[V+1];if(":"===H&&(!e||"\n"===e||"\t"===e||" "===e||i&&","===e))break;if((" "===H||"\t"===H)&&"#"===e)break;V+=1,H=e}return V}get strValue(){if(!this.valueRange||!this.context)return null;let{start:t,end:e}=this.valueRange;const{src:H}=this.context;let V=H[e-1];for(;t<e&&("\n"===V||"\t"===V||" "===V);)V=H[--e-1];for(V=H[t];t<e&&("\n"===V||"\t"===V||" "===V);)V=H[++t];let a="";for(let V=t;V<e;++V){const t=H[V];if("\n"===t){const{fold:t,offset:e}=i.default.foldNewline(H,V,-1);a+=t,V=e}else if(" "===t||"\t"===t){const i=V;let C=H[V+1];for(;V<e&&(" "===C||"\t"===C);)V+=1,C=H[V+1];"\n"!==C&&(a+=V>i?H.slice(i,V+1):t)}else a+=t}return a}parseBlockValue(t){const{indent:e,inFlow:H,src:V}=this.context;let C=t,n=t;for(let t=V[C];"\n"===t&&!i.default.atDocumentBoundary(V,C+1);t=V[C]){const t=i.default.endOfBlockIndent(V,e,C+1);if(null===t||"#"===V[t])break;"\n"===V[t]?C=t:(n=a.endOfLine(V,t,H),C=n)}return this.valueRange.isEmpty()&&(this.valueRange.start=t),this.valueRange.end=n,n}parse(t,e){this.context=t;const{inFlow:V,src:C}=t;let n=e;const o=C[n];return o&&"#"!==o&&"\n"!==o&&(n=a.endOfLine(C,e,V)),this.valueRange=new H.default(e,n),n=i.default.endOfWhiteSpace(C,n),n=this.parseComment(n),this.hasComment&&!this.valueRange.isEmpty()||(n=this.parseBlockValue(n)),n}}e.default=a}));oC(Gn);var Jn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends i.default{static endOfQuote(t,e){let i=t[e];for(;i&&'"'!==i;)i=t[e+="\\"===i?2:1];return e+1}get strValue(){if(!this.valueRange||!this.context)return null;const t=[],{start:e,end:H}=this.valueRange,{indent:V,src:a}=this.context;'"'!==a[H-1]&&t.push(new Dn.YAMLSyntaxError(this,'Missing closing "quote'));let C="";for(let n=e+1;n<H-1;++n){const e=a[n];if("\n"===e){i.default.atDocumentBoundary(a,n+1)&&t.push(new Dn.YAMLSemanticError(this,"Document boundary indicators are not allowed within string values"));const{fold:e,offset:H,error:o}=i.default.foldNewline(a,n,V);C+=e,n=H,o&&t.push(new Dn.YAMLSemanticError(this,"Multi-line double-quoted string needs to be sufficiently indented"))}else if("\\"===e)switch(n+=1,a[n]){case"0":C+="\0";break;case"a":C+="";break;case"b":C+="\b";break;case"e":C+="";break;case"f":C+="\f";break;case"n":C+="\n";break;case"r":C+="\r";break;case"t":C+="\t";break;case"v":C+="\v";break;case"N":C+="";break;case"_":C+=" ";break;case"L":C+="\u2028";break;case"P":C+="\u2029";break;case" ":C+=" ";break;case'"':C+='"';break;case"/":C+="/";break;case"\\":C+="\\";break;case"\t":C+="\t";break;case"x":C+=this.parseCharCode(n+1,2,t),n+=2;break;case"u":C+=this.parseCharCode(n+1,4,t),n+=4;break;case"U":C+=this.parseCharCode(n+1,8,t),n+=8;break;case"\n":for(;" "===a[n+1]||"\t"===a[n+1];)n+=1;break;default:t.push(new Dn.YAMLSyntaxError(this,`Invalid escape sequence ${a.substr(n-1,2)}`)),C+="\\"+a[n]}else if(" "===e||"\t"===e){const t=n;let i=a[n+1];for(;" "===i||"\t"===i;)n+=1,i=a[n+1];"\n"!==i&&(C+=n>t?a.slice(t,n+1):e)}else C+=e}return t.length>0?{errors:t,str:C}:C}parseCharCode(t,e,i){const{src:H}=this.context,V=H.substr(t,e),a=V.length===e&&/^[0-9a-fA-F]+$/.test(V)?parseInt(V,16):NaN;return isNaN(a)?(i.push(new Dn.YAMLSyntaxError(this,`Invalid escape sequence ${H.substr(t-2,e+2)}`)),H.substr(t-2,e+2)):String.fromCodePoint(a)}parse(t,e){this.context=t;const{src:V}=t;let C=a.endOfQuote(V,e+1);return this.valueRange=new H.default(e,C),C=i.default.endOfWhiteSpace(V,C),C=this.parseComment(C),C}}e.default=a}));oC(Jn);var Xn=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Bn),H=V(Rn);function V(t){return t&&t.__esModule?t:{default:t}}class a extends i.default{static endOfQuote(t,e){let i=t[e];for(;i;)if("'"===i){if("'"!==t[e+1])break;i=t[e+=2]}else i=t[e+=1];return e+1}get strValue(){if(!this.valueRange||!this.context)return null;const t=[],{start:e,end:H}=this.valueRange,{indent:V,src:a}=this.context;"'"!==a[H-1]&&t.push(new Dn.YAMLSyntaxError(this,"Missing closing 'quote"));let C="";for(let n=e+1;n<H-1;++n){const e=a[n];if("\n"===e){i.default.atDocumentBoundary(a,n+1)&&t.push(new Dn.YAMLSemanticError(this,"Document boundary indicators are not allowed within string values"));const{fold:e,offset:H,error:o}=i.default.foldNewline(a,n,V);C+=e,n=H,o&&t.push(new Dn.YAMLSemanticError(this,"Multi-line single-quoted string needs to be sufficiently indented"))}else if("'"===e)C+=e,n+=1,"'"!==a[n]&&t.push(new Dn.YAMLSyntaxError(this,"Unescaped single quote? This should not happen."));else if(" "===e||"\t"===e){const t=n;let i=a[n+1];for(;" "===i||"\t"===i;)n+=1,i=a[n+1];"\n"!==i&&(C+=n>t?a.slice(t,n+1):e)}else C+=e}return t.length>0?{errors:t,str:C}:C}parse(t,e){this.context=t;const{src:V}=t;let C=a.endOfQuote(V,e+1);return this.valueRange=new H.default(e,C),C=i.default.endOfWhiteSpace(V,C),C=this.parseComment(C),C}}e.default=a}));oC(Xn);var to=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(Kn),H=s(Wn),V=s(qn),a=s(jn),C=s(Qn),n=s(Bn),o=s(Gn),r=s(Jn),L=s(Xn),d=s(Rn);function s(t){return t&&t.__esModule?t:{default:t}}class l{static parseType(t,e,i){switch(t[e]){case"*":return Pn.Type.ALIAS;case">":return Pn.Type.BLOCK_FOLDED;case"|":return Pn.Type.BLOCK_LITERAL;case"{":return Pn.Type.FLOW_MAP;case"[":return Pn.Type.FLOW_SEQ;case"?":return!i&&n.default.atBlank(t,e+1,!0)?Pn.Type.MAP_KEY:Pn.Type.PLAIN;case":":return!i&&n.default.atBlank(t,e+1,!0)?Pn.Type.MAP_VALUE:Pn.Type.PLAIN;case"-":return!i&&n.default.atBlank(t,e+1,!0)?Pn.Type.SEQ_ITEM:Pn.Type.PLAIN;case'"':return Pn.Type.QUOTE_DOUBLE;case"'":return Pn.Type.QUOTE_SINGLE;default:return Pn.Type.PLAIN}}constructor(t={},{atLineStart:e,inCollection:s,inFlow:M,indent:h,lineStart:A,parent:g}={}){!function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(this,"parseNode",(t,e)=>{if(n.default.atDocumentBoundary(this.src,e))return null;const s=new l(this,t),{props:M,type:h,valueStart:A}=s.parseProps(e);let g;switch(h){case Pn.Type.ALIAS:g=new i.default(h,M);break;case Pn.Type.BLOCK_FOLDED:case Pn.Type.BLOCK_LITERAL:g=new H.default(h,M);break;case Pn.Type.FLOW_MAP:case Pn.Type.FLOW_SEQ:g=new C.default(h,M);break;case Pn.Type.MAP_KEY:case Pn.Type.MAP_VALUE:case Pn.Type.SEQ_ITEM:g=new a.default(h,M);break;case Pn.Type.COMMENT:case Pn.Type.PLAIN:g=new o.default(h,M);break;case Pn.Type.QUOTE_DOUBLE:g=new r.default(h,M);break;case Pn.Type.QUOTE_SINGLE:g=new L.default(h,M);break;default:return g.error=new Dn.YAMLSyntaxError(g,`Unknown node type: ${JSON.stringify(h)}`),g.range=new d.default(e,e+1),g}let p=g.parse(s,A);if(g.range=new d.default(e,p),p<=e&&(g.error=new Error("Node#parse consumed no characters"),g.error.parseEnd=p,g.error.source=g,g.range.end=e+1),s.nodeStartsCollection(g)){g.error||s.atLineStart||s.parent.type!==Pn.Type.DOCUMENT||(g.error=new Dn.YAMLSyntaxError(g,"Block collection must not have preceding content here (e.g. directives-end indicator)"));const t=new V.default(g);return p=t.parse(new l(s),p),t.range=new d.default(e,p),t}return g}),this.atLineStart=null!=e?e:t.atLineStart||!1,this.inCollection=null!=s?s:t.inCollection||!1,this.inFlow=null!=M?M:t.inFlow||!1,this.indent=null!=h?h:t.indent,this.lineStart=null!=A?A:t.lineStart,this.parent=null!=g?g:t.parent||{},this.root=t.root,this.src=t.src}get pretty(){const t={start:`${this.lineStart} + ${this.indent}`,in:[],parent:this.parent.type};return this.atLineStart||(t.start+=" + N"),this.inCollection&&t.in.push("collection"),this.inFlow&&t.in.push("flow"),t}nodeStartsCollection(t){const{inCollection:e,inFlow:i,src:H}=this;if(e||i)return!1;if(t instanceof a.default)return!0;let V=t.range.end;return"\n"!==H[V]&&"\n"!==H[V-1]&&(V=n.default.endOfWhiteSpace(H,V),":"===H[V])}parseProps(t){const{inFlow:e,parent:i,src:H}=this,V=[];let a=!1,C=H[t=n.default.endOfWhiteSpace(H,t)];for(;C===Pn.Char.ANCHOR||C===Pn.Char.COMMENT||C===Pn.Char.TAG||"\n"===C;){if("\n"===C){const e=t+1,V=n.default.endOfIndent(H,e),C=V-(e+this.indent),o=i.type===Pn.Type.SEQ_ITEM&&i.context.atLineStart;if(!n.default.nextNodeIsIndented(H[V],C,!o))break;this.atLineStart=!0,this.lineStart=e,a=!1,t=V}else if(C===Pn.Char.COMMENT){const e=n.default.endOfLine(H,t+1);V.push(new d.default(t,e)),t=e}else{let e=n.default.endOfIdentifier(H,t+1);C===Pn.Char.TAG&&","===H[e]&&/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(H.slice(t+1,e+13))&&(e=n.default.endOfIdentifier(H,e+5)),V.push(new d.default(t,e)),a=!0,t=n.default.endOfWhiteSpace(H,e)}C=H[t]}return a&&":"===C&&n.default.atBlank(H,t+1,!0)&&(t-=1),{props:V,type:l.parseType(H,t,e),valueStart:t}}}e.default=l}));oC(to);var eo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const e=[];-1!==t.indexOf("\r")&&(t=t.replace(/\r\n?/g,(t,i)=>(t.length>1&&e.push(i),"\n")));const V=[];let a=0;do{const e=new i.default,C=new H.default({src:t});a=e.parse(C,a),V.push(e)}while(a<t.length);return V.setOrigRanges=()=>{if(0===e.length)return!1;for(let t=1;t<e.length;++t)e[t]-=t;let t=0;for(let i=0;i<V.length;++i)t=V[i].setOrigRanges(e,t);return e.splice(0,e.length),!0},V.toString=()=>V.join("...\n"),V};var i=V(Yn),H=V(to);function V(t){return t&&t.__esModule?t:{default:t}}}));oC(eo);var io=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.addCommentBefore=function(t,e,i){if(!i)return t;return`#${i.replace(/[\s\S]^/gm,`$&${e}#`)}\n${e}${t}`},e.default=function(t,e,i){return i?-1===i.indexOf("\n")?`${t} #${i}`:`${t}\n`+i.replace(/^/gm,`${e||""}#`):t}}));oC(io);io.addCommentBefore;var Ho=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function t(e,i,H){if(Array.isArray(e))return e.map((e,i)=>t(e,String(i),H));if(e&&"function"==typeof e.toJSON){const t=H&&H.anchors&&H.anchors.find(t=>t.node===e);t&&(H.onCreate=e=>{t.res=e,delete H.onCreate});const V=e.toJSON(i,H);return t&&H.onCreate&&H.onCreate(V),V}return e}}));oC(Ho);var Vo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=class{}}));oC(Vo);var ao=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(Ho),H=V(Vo);function V(t){return t&&t.__esModule?t:{default:t}}class a extends H.default{constructor(t){super(),this.value=t}toJSON(t,e){return e&&e.keep?this.value:(0,i.default)(this.value,t,e)}toString(){return String(this.value)}}e.default=a}));oC(ao);var Co=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(io),H=n(Ho),V=n(no),a=n(Vo),C=n(ao);function n(t){return t&&t.__esModule?t:{default:t}}const o=(t,e,i)=>null===e?"":"object"!=typeof e?String(e):t instanceof a.default&&i&&i.doc?t.toString({anchors:{},doc:i.doc,indent:"",inFlow:!0,inStringifyKey:!0}):JSON.stringify(e);class r extends a.default{constructor(t,e=null){super(),this.key=t,this.value=e,this.type="PAIR"}get commentBefore(){return this.key&&this.key.commentBefore}set commentBefore(t){null==this.key&&(this.key=new C.default(null)),this.key.commentBefore=t}addToJSMap(t,e){const i=(0,H.default)(this.key,"",t);if(e instanceof Map){const V=(0,H.default)(this.value,i,t);e.set(i,V)}else if(e instanceof Set)e.add(i);else{const V=o(this.key,i,t);e[V]=(0,H.default)(this.value,V,t)}return e}toJSON(t,e){const i=e&&e.mapAsMap?new Map:{};return this.addToJSMap(e,i)}toString(t,e,H){if(!t||!t.doc)return JSON.stringify(this);const{simpleKeys:C}=t.doc.options;let{key:n,value:o}=this,r=n instanceof a.default&&n.comment;if(C){if(r)throw new Error("With simple keys, key nodes cannot have comments");if(n instanceof V.default){throw new Error("With simple keys, collection cannot be used as a key value")}}const L=!C&&(!n||r||n instanceof V.default||n.type===Pn.Type.BLOCK_FOLDED||n.type===Pn.Type.BLOCK_LITERAL),{doc:d,indent:s}=t;t=Object.assign({},t,{implicitKey:!L,indent:s+"  "});let l=!1,M=d.schema.stringify(n,t,()=>r=null,()=>l=!0);if(M=(0,i.default)(M,t.indent,r),t.allNullValues&&!C)return this.comment?(M=(0,i.default)(M,t.indent,this.comment),e&&e()):l&&!r&&H&&H(),t.inFlow?M:`? ${M}`;M=L?`? ${M}\n${s}:`:`${M}:`,this.comment&&(M=(0,i.default)(M,t.indent,this.comment),e&&e());let h="",A=null;if(o instanceof a.default){if(o.spaceBefore&&(h="\n"),o.commentBefore){h+=`\n${o.commentBefore.replace(/^/gm,`${t.indent}#`)}`}A=o.comment}else o&&"object"==typeof o&&(o=d.schema.createNode(o,!0));t.implicitKey=!1,l=!1;const g=d.schema.stringify(o,t,()=>A=null,()=>l=!0);let p=" ";if(h||this.comment)p=`${h}\n${t.indent}`;else if(!L&&o instanceof V.default){("["===g[0]||"{"===g[0])&&!g.includes("\n")||(p=`\n${t.indent}`)}return l&&!A&&H&&H(),(0,i.default)(M+p+g,t.indent,A)}}e.default=r}));oC(Co);var no=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.isEmptyPath=void 0;var i=C(io),H=C(Vo),V=C(Co),a=C(ao);function C(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const o=t=>null==t||"object"==typeof t&&t[Symbol.iterator]().next().done;e.isEmptyPath=o;class r extends H.default{constructor(...t){super(...t),n(this,"items",[])}addIn(t,e){if(o(t))this.add(e);else{const[i,...H]=t,V=this.get(i,!0);if(!(V instanceof r))throw new Error(`Expected YAML collection at ${i}. Remaining path: ${H}`);V.addIn(H,e)}}deleteIn([t,...e]){if(0===e.length)return this.delete(t);const i=this.get(t,!0);if(i instanceof r)return i.deleteIn(e);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${e}`)}getIn([t,...e],i){const H=this.get(t,!0);return 0===e.length?!i&&H instanceof a.default?H.value:H:H instanceof r?H.getIn(e,i):void 0}hasAllNullValues(){return this.items.every(t=>{if(!(t instanceof V.default))return!1;const e=t.value;return null==e||e instanceof a.default&&null==e.value&&!e.commentBefore&&!e.comment&&!e.tag})}hasIn([t,...e]){if(0===e.length)return this.has(t);const i=this.get(t,!0);return i instanceof r&&i.hasIn(e)}setIn([t,...e],i){if(0===e.length)this.set(t,i);else{const H=this.get(t,!0);if(!(H instanceof r))throw new Error(`Expected YAML collection at ${t}. Remaining path: ${e}`);H.setIn(e,i)}}toJSON(){return null}toString(t,{blockItem:e,flowChars:H,isMap:V,itemIndent:a},C,n){const{doc:o,indent:L}=t,d=this.type&&"FLOW"===this.type.substr(0,4)||t.inFlow;d&&(a+="  ");const s=V&&this.hasAllNullValues();t=Object.assign({},t,{allNullValues:s,indent:a,inFlow:d,type:null});let l=!1,M=!1;const h=this.items.reduce((e,H,V)=>{let C;H&&(!l&&H.spaceBefore&&e.push({type:"comment",str:""}),H.commentBefore&&H.commentBefore.match(/^.*$/gm).forEach(t=>{e.push({type:"comment",str:`#${t}`})}),H.comment&&(C=H.comment),d&&(!l&&H.spaceBefore||H.commentBefore||H.comment||H.key&&(H.key.commentBefore||H.key.comment)||H.value&&(H.value.commentBefore||H.value.comment))&&(M=!0)),l=!1;let n=o.schema.stringify(H,t,()=>C=null,()=>l=!0);return d&&!M&&n.includes("\n")&&(M=!0),d&&V<this.items.length-1&&(n+=","),n=(0,i.default)(n,a,C),l&&(C||d)&&(l=!1),e.push({type:"item",str:n}),e},[]);let A;if(0===h.length)A=H.start+H.end;else if(d){const{start:t,end:e}=H,i=h.map(t=>t.str);if(M||i.reduce((t,e)=>t+e.length+2,2)>r.maxFlowStringSingleLineLength){A=t;for(const t of i)A+=t?`\n  ${L}${t}`:"\n";A+=`\n${L}${e}`}else A=`${t} ${i.join(" ")} ${e}`}else{const t=h.map(e);A=t.shift();for(const e of t)A+=e?`\n${L}${e}`:"\n"}return this.comment?(A+="\n"+this.comment.replace(/^/gm,`${L}#`),C&&C()):l&&n&&n(),A}}e.default=r,n(r,"maxFlowStringSingleLineLength",60)}));oC(no);no.isEmptyPath;var oo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=C(Ho),H=C(no),V=C(Vo),a=C(Co);function C(t){return t&&t.__esModule?t:{default:t}}const n=(t,e)=>{if(t instanceof o){const i=e.find(e=>e.node===t.source);return i.count*i.aliasCount}if(t instanceof H.default){let i=0;for(const H of t.items){const t=n(H,e);t>i&&(i=t)}return i}if(t instanceof a.default){const i=n(t.key,e),H=n(t.value,e);return Math.max(i,H)}return 1};class o extends V.default{static stringify({range:t,source:e},{anchors:i,doc:H,implicitKey:V,inStringifyKey:a}){let C=Object.keys(i).find(t=>i[t]===e);if(!C&&a&&(C=H.anchors.getName(e)||H.anchors.newName()),C)return`*${C}${V?" ":""}`;const n=H.anchors.getName(e)?"Alias node must be after source node":"Source node not found for alias node";throw new Error(`${n} [${t}]`)}constructor(t){super(),this.source=t,this.type=Pn.Type.ALIAS}set tag(t){throw new Error("Alias nodes cannot have tags")}toJSON(t,e){if(!e)return(0,i.default)(this.source,t,e);const{anchors:H,maxAliasCount:V}=e,a=H.find(t=>t.node===this.source);if(!a||void 0===a.res){const t="This should not happen: Alias anchor was not resolved?";throw this.cstNode?new Dn.YAMLReferenceError(this.cstNode,t):new ReferenceError(t)}if(V>=0&&(a.count+=1,0===a.aliasCount&&(a.aliasCount=n(this.source,H)),a.count*a.aliasCount>V)){const t="Excessive alias count indicates a resource exhaustion attack";throw this.cstNode?new Dn.YAMLReferenceError(this.cstNode,t):new ReferenceError(t)}return a.res}toString(t){return o.stringify(this,t)}}e.default=o,function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(o,"default",!0)}));oC(oo);var ro=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.findPair=C,e.default=void 0;var i=a(no),H=a(Co),V=a(ao);function a(t){return t&&t.__esModule?t:{default:t}}function C(t,e){const i=e instanceof V.default?e.value:e;for(const V of t)if(V instanceof H.default){if(V.key===e||V.key===i)return V;if(V.key&&V.key.value===i)return V}}class n extends i.default{add(t){if(t?t instanceof H.default||(t=new H.default(t.key||t,t.value)):t=new H.default(t),C(this.items,t.key))throw new Error(`Key ${t.key} already set`);this.items.push(t)}delete(t){const e=C(this.items,t);return!!e&&this.items.splice(this.items.indexOf(e),1).length>0}get(t,e){const i=C(this.items,t),H=i&&i.value;return!e&&H instanceof V.default?H.value:H}has(t){return!!C(this.items,t)}set(t,e){const i=C(this.items,t);i?i.value=e:this.items.push(new H.default(t,e))}toJSON(t,e,i){const H=i?new i:e&&e.mapAsMap?new Map:{};e&&e.onCreate&&e.onCreate(H);for(const t of this.items)t.addToJSMap(e,H);return H}toString(t,e,i){if(!t)return JSON.stringify(this);for(const t of this.items)if(!(t instanceof H.default))throw new Error(`Map items must all be pairs; found ${JSON.stringify(t)} instead`);return super.toString(t,{blockItem:t=>t.str,flowChars:{start:"{",end:"}"},isMap:!0,itemIndent:t.indent||""},e,i)}}e.default=n}));oC(ro);ro.findPair;var Lo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(Ho),H=a(no),V=a(ao);function a(t){return t&&t.__esModule?t:{default:t}}function C(t){let e=t instanceof V.default?t.value:t;return e&&"string"==typeof e&&(e=Number(e)),Number.isInteger(e)&&e>=0?e:null}class n extends H.default{add(t){this.items.push(t)}delete(t){const e=C(t);return"number"==typeof e&&this.items.splice(e,1).length>0}get(t,e){const i=C(t);if("number"!=typeof i)return;const H=this.items[i];return!e&&H instanceof V.default?H.value:H}has(t){const e=C(t);return"number"==typeof e&&e<this.items.length}set(t,e){const i=C(t);if("number"!=typeof i)throw new Error(`Expected a valid index, not ${t}.`);this.items[i]=e}toJSON(t,e){const H=[];e&&e.onCreate&&e.onCreate(H);let V=0;for(const t of this.items)H.push((0,i.default)(t,String(V++),e));return H}toString(t,e,i){return t?super.toString(t,{blockItem:t=>"comment"===t.type?t.str:`- ${t.str}`,flowChars:{start:"[",end:"]"},isMap:!1,itemIndent:(t.indent||"")+"  "},e,i):JSON.stringify(this)}}e.default=n}));oC(Lo);var so=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.MERGE_KEY=void 0;var i=C(ro),H=C(Co),V=C(ao),a=C(Lo);function C(t){return t&&t.__esModule?t:{default:t}}const n="<<";e.MERGE_KEY=n;class o extends H.default{constructor(t){if(t instanceof H.default){let e=t.value;e instanceof a.default||(e=new a.default,e.items.push(t.value),e.range=t.value.range),super(t.key,e),this.range=t.range}else super(new V.default(n),new a.default);this.type="MERGE_PAIR"}addToJSMap(t,e){for(const{source:H}of this.value.items){if(!(H instanceof i.default))throw new Error("Merge sources must be maps");const V=H.toJSON(null,t,Map);for(const[t,i]of V)e instanceof Map?e.has(t)||e.set(t,i):e instanceof Set?e.add(t):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=i)}return e}toString(t,e){const i=this.value;if(i.items.length>1)return super.toString(t,e);this.value=i.items[0];const H=super.toString(t,e);return this.value=i,H}}e.default=o}));oC(so);so.MERGE_KEY;var lo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(oo),H=n(ro),V=n(so),a=n(ao),C=n(Lo);function n(t){return t&&t.__esModule?t:{default:t}}class o{static validAnchorNode(t){return t instanceof a.default||t instanceof C.default||t instanceof H.default}constructor(t){!function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(this,"map",{}),this.prefix=t}createAlias(t,e){return this.setAnchor(t,e),new i.default(t)}createMergePair(...t){const e=new V.default;return e.value.items=t.map(t=>{if(t instanceof i.default){if(t.source instanceof H.default)return t}else if(t instanceof H.default)return this.createAlias(t);throw new Error("Merge sources must be Map nodes or their Aliases")}),e}getName(t){const{map:e}=this;return Object.keys(e).find(i=>e[i]===t)}getNode(t){return this.map[t]}newName(t){t||(t=this.prefix);const e=Object.keys(this.map);for(let i=1;;++i){const H=`${t}${i}`;if(!e.includes(H))return H}}resolveNodes(){const{map:t,_cstAliases:e}=this;Object.keys(t).forEach(e=>{t[e]=t[e].resolved}),e.forEach(t=>{t.source=t.source.resolved}),delete this._cstAliases}setAnchor(t,e){if(null!=t&&!o.validAnchorNode(t))throw new Error("Anchors may only be set for Scalar, Seq and Map nodes");if(e&&/[\x00-\x19\s,[\]{}]/.test(e))throw new Error("Anchor names must not contain whitespace or control characters");const{map:i}=this,H=t&&Object.keys(i).find(e=>i[e]===t);if(H){if(!e)return H;H!==e&&(delete i[H],i[e]=t)}else{if(!e){if(!t)return null;e=this.newName()}i[e]=t}return e}}e.default=o}));oC(lo);var Mo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(no),H=a(Co),V=a(ao);function a(t){return t&&t.__esModule?t:{default:t}}const C=(t,e)=>{if(t&&"object"==typeof t){const{tag:a}=t;t instanceof i.default?(a&&(e[a]=!0),t.items.forEach(t=>C(t,e))):t instanceof H.default?(C(t.key,e),C(t.value,e)):t instanceof V.default&&a&&(e[a]=!0)}return e};e.default=t=>Object.keys(C(t,{}))}));oC(Mo);var ho=rC((function(t,e){function i(t,e){if(nC&&nC._YAML_SILENCE_WARNINGS)return;const{emitWarning:i}=nC&&nC.process;i?i(t,e):console.warn(e?`${e}: ${t}`:t)}Object.defineProperty(e,"__esModule",{value:!0}),e.warn=i,e.warnFileDeprecation=function(t){if(nC&&nC._YAML_SILENCE_DEPRECATION_WARNINGS)return;i(`The endpoint 'yaml/${t.replace(/.*yaml[/\\]/i,"").replace(/\.js$/,"").replace(/\\/g,"/")}' will be removed in a future release.`,"DeprecationWarning")},e.warnOptionDeprecation=function(t,e){if(nC&&nC._YAML_SILENCE_DEPRECATION_WARNINGS)return;if(H[t])return;H[t]=!0;let V=`The option '${t}' will be removed in a future release`;V+=e?`, use '${e}' instead.`:".",i(V,"DeprecationWarning")};const H={}}));oC(ho);ho.warn,ho.warnFileDeprecation,ho.warnOptionDeprecation;var Ao=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a,{indentAtStart:C,lineWidth:n=80,minContentWidth:o=20,onFold:r,onOverflow:L}){if(!n||n<0)return t;const d=Math.max(1+o,1+n-e.length);if(t.length<=d)return t;const s=[],l={};let M,h=n-("number"==typeof C?C:e.length),A=void 0,g=void 0,p=!1,c=-1;a===i&&(c=V(t,c),-1!==c&&(h=c+d));for(;M=t[c+=1];){if(a===H&&"\\"===M)switch(t[c+1]){case"x":c+=3;break;case"u":c+=5;break;case"U":c+=9;break;default:c+=1}if("\n"===M)a===i&&(c=V(t,c)),h=c+d,A=void 0;else{if(" "===M&&g&&" "!==g&&"\n"!==g&&"\t"!==g){const e=t[c+1];e&&" "!==e&&"\n"!==e&&"\t"!==e&&(A=c)}if(c>=h)if(A)s.push(A),h=A+d,A=void 0;else if(a===H){for(;" "===g||"\t"===g;)g=M,M=t[c+=1],p=!0;s.push(c-2),l[c-2]=!0,h=c-2+d,A=void 0}else p=!0}g=M}p&&L&&L();if(0===s.length)return t;r&&r();let u=t.slice(0,s[0]);for(let i=0;i<s.length;++i){const V=s[i],C=s[i+1]||t.length;a===H&&l[V]&&(u+=`${t[V]}\\`),u+=`\n${e}${t.slice(V+1,C)}`}return u},e.FOLD_QUOTED=e.FOLD_BLOCK=e.FOLD_FLOW=void 0;e.FOLD_FLOW="flow";const i="block";e.FOLD_BLOCK=i;const H="quoted";e.FOLD_QUOTED=H;const V=(t,e)=>{let i=t[e+1];for(;" "===i||"\t"===i;){do{i=t[e+=1]}while(i&&"\n"!==i);i=t[e+1]}return e}}));oC(Ao);Ao.FOLD_QUOTED,Ao.FOLD_BLOCK,Ao.FOLD_FLOW;var go=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.strOptions=e.nullOptions=e.boolOptions=e.binaryOptions=void 0;const i={defaultType:Pn.Type.BLOCK_LITERAL,lineWidth:76};e.binaryOptions=i;e.boolOptions={trueStr:"true",falseStr:"false"};e.nullOptions={nullStr:"null"};const H={defaultType:Pn.Type.PLAIN,doubleQuoted:{jsonEncoding:!1,minMultiLineLength:40},fold:{lineWidth:80,minContentWidth:20}};e.strOptions=H}));oC(go);go.strOptions,go.nullOptions,go.boolOptions,go.binaryOptions;var po=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.stringifyNumber=function({format:t,minFractionDigits:e,tag:i,value:H}){if(!isFinite(H))return isNaN(H)?".nan":H<0?"-.inf":".inf";let V=JSON.stringify(H);if(!t&&e&&(!i||"tag:yaml.org,2002:float"===i)&&/^\d/.test(V)){let t=V.indexOf(".");t<0&&(t=V.length,V+=".");let i=e-(V.length-t-1);for(;i-- >0;)V+="0"}return V},e.stringifyString=function(t,e,H,n){const{defaultType:o}=go.strOptions,{implicitKey:r,inFlow:L}=e;let{type:d,value:s}=t;"string"!=typeof s&&(s=String(s),t=Object.assign({},t,{value:s}));const l=o=>{switch(o){case Pn.Type.BLOCK_FOLDED:case Pn.Type.BLOCK_LITERAL:return C(t,e,H,n);case Pn.Type.QUOTE_DOUBLE:return V(s,e);case Pn.Type.QUOTE_SINGLE:return a(s,e);case Pn.Type.PLAIN:return function(t,e,H,n){const{comment:o,type:r,value:L}=t,{actualString:d,implicitKey:s,indent:l,inFlow:M,tags:h}=e;if(s&&/[\n[\]{},]/.test(L)||M&&/[[\]{},]/.test(L))return V(L,e);if(!L||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(L))return s||M||-1===L.indexOf("\n")?-1!==L.indexOf('"')&&-1===L.indexOf("'")?a(L,e):V(L,e):C(t,e,H,n);if(!s&&!M&&r!==Pn.Type.PLAIN&&-1!==L.indexOf("\n"))return C(t,e,H,n);const A=L.replace(/\n+/g,`$&\n${l}`);if(d&&"string"!=typeof h.resolveScalar(A).value)return V(L,e);const g=s?A:(0,i.default)(A,l,i.FOLD_FLOW,go.strOptions.fold);if(o&&!M&&(-1!==g.indexOf("\n")||-1!==o.indexOf("\n")))return H&&H(),(0,io.addCommentBefore)(g,l,o);return g}(t,e,H,n);default:return null}};d!==Pn.Type.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(s)?d=Pn.Type.QUOTE_DOUBLE:!r&&!L||d!==Pn.Type.BLOCK_FOLDED&&d!==Pn.Type.BLOCK_LITERAL||(d=Pn.Type.QUOTE_DOUBLE);let M=l(d);if(null===M&&(M=l(o),null===M))throw new Error(`Unsupported default string type ${o}`);return M};var i=function(t){if(t&&t.__esModule)return t;var e=H();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var C=V?Object.getOwnPropertyDescriptor(t,a):null;C&&(C.get||C.set)?Object.defineProperty(i,a,C):i[a]=t[a]}}i.default=t,e&&e.set(t,i);return i}(Ao);function H(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return H=function(){return t},t}function V(t,{implicitKey:e,indent:H}){const{jsonEncoding:V,minMultiLineLength:a}=go.strOptions.doubleQuoted,C=JSON.stringify(t);if(V)return C;let n="",o=0;for(let t=0,i=C[t];i;i=C[++t])if(" "===i&&"\\"===C[t+1]&&"n"===C[t+2]&&(n+=C.slice(o,t)+"\\ ",t+=1,o=t,i="\\"),"\\"===i)switch(C[t+1]){case"u":{n+=C.slice(o,t);const e=C.substr(t+2,4);switch(e){case"0000":n+="\\0";break;case"0007":n+="\\a";break;case"000b":n+="\\v";break;case"001b":n+="\\e";break;case"0085":n+="\\N";break;case"00a0":n+="\\_";break;case"2028":n+="\\L";break;case"2029":n+="\\P";break;default:"00"===e.substr(0,2)?n+="\\x"+e.substr(2):n+=C.substr(t,6)}t+=5,o=t+1}break;case"n":if(e||'"'===C[t+2]||C.length<a)t+=1;else{for(n+=C.slice(o,t)+"\n\n";"\\"===C[t+2]&&"n"===C[t+3]&&'"'!==C[t+4];)n+="\n",t+=2;n+=H," "===C[t+2]&&(n+="\\"),t+=1,o=t+1}break;default:t+=1}return n=o?n+C.slice(o):C,e?n:(0,i.default)(n,H,i.FOLD_QUOTED,go.strOptions.fold)}function a(t,e){const{indent:H,implicitKey:a}=e;if(a){if(/\n/.test(t))return V(t,e)}else if(/[ \t]\n|\n[ \t]/.test(t))return V(t,e);const C="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&\n${H}`)+"'";return a?C:(0,i.default)(C,H,i.FOLD_FLOW,go.strOptions.fold)}function C({comment:t,type:e,value:H},a,C,n){if(/\n[\t ]+$/.test(H)||/^\s*$/.test(H))return V(H,a);const o=a.indent||(a.forceBlockIndent?" ":""),r=o?"2":"1",L=e!==Pn.Type.BLOCK_FOLDED&&(e===Pn.Type.BLOCK_LITERAL||!function(t,e){const i=t.length;if(i<=e)return!1;for(let H=0,V=0;H<i;++H)if("\n"===t[H]){if(H-V>e)return!0;if(V=H+1,i-V<=e)return!1}return!0}(H,go.strOptions.fold.lineWidth-o.length));let d=L?"|":">";if(!H)return d+"\n";let s="",l="";if(H=H.replace(/[\n\t ]*$/,t=>{const e=t.indexOf("\n");return-1===e?d+="-":H!==t&&e===t.length-1||(d+="+",n&&n()),l=t.replace(/\n$/,""),""}).replace(/^[\n ]*/,t=>{-1!==t.indexOf(" ")&&(d+=r);const e=t.match(/ +$/);return e?(s=t.slice(0,-e[0].length),e[0]):(s=t,"")}),l&&(l=l.replace(/\n+(?!\n|$)/g,`$&${o}`)),s&&(s=s.replace(/\n+/g,`$&${o}`)),t&&(d+=" #"+t.replace(/ ?[\r\n]+/g," "),C&&C()),!H)return`${d}${r}\n${o}${l}`;if(L)return H=H.replace(/\n+/g,`$&${o}`),`${d}\n${o}${s}${H}${l}`;H=H.replace(/\n+/g,"\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${o}`);const M=(0,i.default)(`${s}${H}${l}`,o,i.FOLD_BLOCK,go.strOptions.fold);return`${d}\n${o}${M}`}}));oC(po);po.stringifyNumber,po.stringifyString;var co=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.checkFlowCollectionEnd=function(t,e){let i,H,V;switch(e.type){case Pn.Type.FLOW_MAP:i="}",H="flow map";break;case Pn.Type.FLOW_SEQ:i="]",H="flow sequence";break;default:return void t.push(new Dn.YAMLSemanticError(e,"Not a flow collection!?"))}for(let t=e.items.length-1;t>=0;--t){const i=e.items[t];if(!i||i.type!==Pn.Type.COMMENT){V=i;break}}if(V&&V.char!==i){const a=`Expected ${H} to end with ${i}`;let C;"number"==typeof V.offset?(C=new Dn.YAMLSemanticError(e,a),C.offset=V.offset+1):(C=new Dn.YAMLSemanticError(V,a),V.range&&V.range.end&&(C.offset=V.range.end-V.range.start)),t.push(C)}},e.checkKeyLength=function(t,e,i,H,V){if(!H||"number"!=typeof V)return;const a=e.items[i];let C=a&&a.range&&a.range.start;if(!C)for(let t=i-1;t>=0;--t){const H=e.items[t];if(H&&H.range){C=H.range.end+2*(i-t);break}}if(C>V+1024){const i=String(H).substr(0,8)+"..."+String(H).substr(-8);t.push(new Dn.YAMLSemanticError(e,`The "${i}" key is too long`))}},e.resolveComments=function(t,e){for(const{afterKey:i,before:H,comment:V}of e){let e=t.items[H];e?(i&&e.value&&(e=e.value),void 0===V?!i&&e.commentBefore||(e.spaceBefore=!0):e.commentBefore?e.commentBefore+="\n"+V:e.commentBefore=V):void 0!==V&&(t.comment?t.comment+="\n"+V:t.comment=V)}}}));oC(co);co.checkFlowCollectionEnd,co.checkKeyLength,co.resolveComments;var uo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(e.type!==Pn.Type.MAP&&e.type!==Pn.Type.FLOW_MAP){const i=`A ${e.type} node cannot be resolved as a mapping`;return t.errors.push(new Dn.YAMLSyntaxError(e,i)),null}const{comments:o,items:r}=e.type===Pn.Type.FLOW_MAP?function(t,e){const i=[],H=[];let V=void 0,C=null,n=!1,o="{";for(let r=0;r<e.items.length;++r){(0,co.checkKeyLength)(t.errors,e,r,V,C);const L=e.items[r];if("string"==typeof L.char){const{char:i,offset:d}=L;if("?"===i&&void 0===V&&!n){n=!0,o=":";continue}if(":"===i){if(void 0===V&&(V=null),":"===o){o=",";continue}}else if(n&&(void 0===V&&","!==i&&(V=null),n=!1),void 0!==V&&(H.push(new a.default(V)),V=void 0,C=null,","===i)){o=":";continue}if("}"===i){if(r===e.items.length-1)continue}else if(i===o){o=":";continue}const s=`Flow map contains an unexpected ${i}`,l=new Dn.YAMLSyntaxError(e,s);l.offset=d,t.errors.push(l)}else L.type===Pn.Type.BLANK_LINE?i.push({afterKey:!!V,before:H.length}):L.type===Pn.Type.COMMENT?i.push({afterKey:!!V,before:H.length,comment:L.comment}):void 0===V?(","===o&&t.errors.push(new Dn.YAMLSemanticError(L,"Separator , missing in flow map")),V=t.resolveNode(L),C=n?null:L.range.start):(","!==o&&t.errors.push(new Dn.YAMLSemanticError(L,"Indicator : missing in flow map entry")),H.push(new a.default(V,t.resolveNode(L))),V=void 0,n=!1)}(0,co.checkFlowCollectionEnd)(t.errors,e),void 0!==V&&H.push(new a.default(V));return{comments:i,items:H}}(t,e):function(t,e){const H=[],V=[];let C=void 0,n=null;for(let o=0;o<e.items.length;++o){const r=e.items[o];switch(r.type){case Pn.Type.BLANK_LINE:H.push({afterKey:!!C,before:V.length});break;case Pn.Type.COMMENT:H.push({afterKey:!!C,before:V.length,comment:r.comment});break;case Pn.Type.MAP_KEY:void 0!==C&&V.push(new a.default(C)),r.error&&t.errors.push(r.error),C=t.resolveNode(r.node),n=null;break;case Pn.Type.MAP_VALUE:{if(void 0===C&&(C=null),r.error&&t.errors.push(r.error),!r.context.atLineStart&&r.node&&r.node.type===Pn.Type.MAP&&!r.node.context.atLineStart){const e="Nested mappings are not allowed in compact mappings";t.errors.push(new Dn.YAMLSemanticError(r.node,e))}let H=r.node;if(!H&&r.props.length>0){H=new i.default(Pn.Type.PLAIN,[]),H.context={parent:r,src:r.context.src};const t=r.range.start+1;if(H.range={start:t,end:t},H.valueRange={start:t,end:t},"number"==typeof r.range.origStart){const t=r.range.origStart+1;H.range.origStart=H.range.origEnd=t,H.valueRange.origStart=H.valueRange.origEnd=t}}const L=new a.default(C,t.resolveNode(H));d(r,L),V.push(L),(0,co.checkKeyLength)(t.errors,e,o,C,n),C=void 0,n=null}break;default:void 0!==C&&V.push(new a.default(C)),C=t.resolveNode(r),n=r.range.start,r.error&&t.errors.push(r.error);t:for(let i=o+1;;++i){const H=e.items[i];switch(H&&H.type){case Pn.Type.BLANK_LINE:case Pn.Type.COMMENT:continue t;case Pn.Type.MAP_VALUE:break t;default:t.errors.push(new Dn.YAMLSemanticError(r,"Implicit map keys need to be followed by map values"));break t}}if(r.valueRangeContainsNewline){const e="Implicit map keys need to be on a single line";t.errors.push(new Dn.YAMLSemanticError(r,e))}}}void 0!==C&&V.push(new a.default(C));return{comments:H,items:V}}(t,e),L=new H.default;L.items=r,(0,co.resolveComments)(L,o);let s=!1;for(let i=0;i<r.length;++i){const{key:H}=r[i];if(H instanceof n.default&&(s=!0),t.schema.merge&&H&&H.value===V.MERGE_KEY){r[i]=new V.default(r[i]);const H=r[i].value.items;let a=null;H.some(t=>{if(t instanceof C.default){const{type:e}=t.source;return e!==Pn.Type.MAP&&e!==Pn.Type.FLOW_MAP&&(a="Merge nodes aliases can only point to maps")}return a="Merge nodes can only have Alias nodes as values"}),a&&t.errors.push(new Dn.YAMLSemanticError(e,a))}else for(let V=i+1;V<r.length;++V){const{key:i}=r[V];if(H===i||H&&i&&Object.prototype.hasOwnProperty.call(H,"value")&&H.value===i.value){const i=`Map keys must be unique; "${H}" is repeated`;t.errors.push(new Dn.YAMLSemanticError(e,i));break}}}if(s&&!t.options.mapAsMap){const i="Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";t.warnings.push(new Dn.YAMLWarning(e,i))}return e.resolved=L,L};var i=r(Gn),H=r(ro),V=function(t){if(t&&t.__esModule)return t;var e=o();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var H=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var V in t)if(Object.prototype.hasOwnProperty.call(t,V)){var a=H?Object.getOwnPropertyDescriptor(t,V):null;a&&(a.get||a.set)?Object.defineProperty(i,V,a):i[V]=t[V]}}i.default=t,e&&e.set(t,i);return i}(so),a=r(Co),C=r(oo),n=r(no);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function r(t){return t&&t.__esModule?t:{default:t}}const L=({context:{lineStart:t,node:e,src:i},props:H})=>{if(0===H.length)return!1;const{start:V}=H[0];if(e&&V>e.valueRange.start)return!1;if(i[V]!==Pn.Char.COMMENT)return!1;for(let e=t;e<V;++e)if("\n"===i[e])return!1;return!0};function d(t,e){if(!L(t))return;const i=t.getPropValue(0,Pn.Char.COMMENT,!0);let H=!1;const V=e.value.commentBefore;if(V&&V.startsWith(i))e.value.commentBefore=V.substr(i.length+1),H=!0;else{const V=e.value.comment;!t.node&&V&&V.startsWith(i)&&(e.value.comment=V.substr(i.length+1),H=!0)}H&&(e.comment=i)}}));oC(uo);var fo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(ro),H=V(uo);function V(t){return t&&t.__esModule?t:{default:t}}var a={createNode:function(t,e,H){const V=new i.default;if(e instanceof Map)for(const[i,a]of e)V.items.push(t.createPair(i,a,H));else if(e&&"object"==typeof e)for(const i of Object.keys(e))V.items.push(t.createPair(i,e[i],H));return V},default:!0,nodeClass:i.default,tag:"tag:yaml.org,2002:map",resolve:H.default};e.default=a}));oC(fo);var mo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(e.type!==Pn.Type.SEQ&&e.type!==Pn.Type.FLOW_SEQ){const i=`A ${e.type} node cannot be resolved as a sequence`;return t.errors.push(new Dn.YAMLSyntaxError(e,i)),null}const{comments:a,items:C}=e.type===Pn.Type.FLOW_SEQ?function(t,e){const H=[],V=[];let a=!1,C=void 0,n=null,o="[";for(let r=0;r<e.items.length;++r){const L=e.items[r];if("string"==typeof L.char){const{char:H,offset:d}=L;if(":"===H||!a&&void 0===C||(a&&void 0===C&&(C=o?V.pop():null),V.push(new i.default(C)),a=!1,C=void 0,n=null),H===o)o=null;else if(o||"?"!==H){if("["!==o&&":"===H&&void 0===C){if(","===o){if(C=V.pop(),C instanceof i.default){const i="Chaining flow sequence pairs is invalid",H=new Dn.YAMLSemanticError(e,i);H.offset=d,t.errors.push(H)}a||(0,co.checkKeyLength)(t.errors,e,r,C,n)}else C=null;n=null,a=!1,o=null}else if("["===o||"]"!==H||r<e.items.length-1){const i=`Flow sequence contains an unexpected ${H}`,V=new Dn.YAMLSyntaxError(e,i);V.offset=d,t.errors.push(V)}}else a=!0}else if(L.type===Pn.Type.BLANK_LINE)H.push({before:V.length});else if(L.type===Pn.Type.COMMENT)H.push({comment:L.comment,before:V.length});else{if(o){const e=`Expected a ${o} in flow sequence`;t.errors.push(new Dn.YAMLSemanticError(L,e))}const e=t.resolveNode(L);void 0===C?V.push(e):(V.push(new i.default(C,e)),C=void 0),n=L.range.start,o=","}}(0,co.checkFlowCollectionEnd)(t.errors,e),void 0!==C&&V.push(new i.default(C));return{comments:H,items:V}}(t,e):function(t,e){const i=[],H=[];for(let V=0;V<e.items.length;++V){const a=e.items[V];switch(a.type){case Pn.Type.BLANK_LINE:i.push({before:H.length});break;case Pn.Type.COMMENT:i.push({comment:a.comment,before:H.length});break;case Pn.Type.SEQ_ITEM:if(a.error&&t.errors.push(a.error),H.push(t.resolveNode(a.node)),a.hasProps){const e="Sequence items cannot have tags or anchors before the - indicator";t.errors.push(new Dn.YAMLSemanticError(a,e))}break;default:a.error&&t.errors.push(a.error),t.errors.push(new Dn.YAMLSyntaxError(a,`Unexpected ${a.type} node in sequence`))}}return{comments:i,items:H}}(t,e),n=new H.default;if(n.items=C,(0,co.resolveComments)(n,a),!t.options.mapAsMap&&C.some(t=>t instanceof i.default&&t.key instanceof V.default)){const i="Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";t.warnings.push(new Dn.YAMLWarning(e,i))}return e.resolved=n,n};var i=a(Co),H=a(Lo),V=a(no);function a(t){return t&&t.__esModule?t:{default:t}}}));oC(mo);var _o=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=V(mo),H=V(Lo);function V(t){return t&&t.__esModule?t:{default:t}}var a={createNode:function(t,e,i){const V=new H.default;if(e&&e[Symbol.iterator])for(const H of e){const e=t.createNode(H,i.wrapScalars,null,i);V.items.push(e)}return V},default:!0,nodeClass:H.default,tag:"tag:yaml.org,2002:seq",resolve:i.default};e.default=a}));oC(_o);var bo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.resolveString=void 0;const i=(t,e)=>{const i=e.strValue;return i?"string"==typeof i?i:(i.errors.forEach(i=>{i.source||(i.source=e),t.errors.push(i)}),i.str):""};e.resolveString=i;var H={identify:t=>"string"==typeof t,default:!0,tag:"tag:yaml.org,2002:str",resolve:i,stringify:(t,e,i,H)=>(e=Object.assign({actualString:!0},e),(0,po.stringifyString)(t,e,i,H)),options:go.strOptions};e.default=H}));oC(bo);bo.resolveString;var vo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(fo),H=a(_o),V=a(bo);function a(t){return t&&t.__esModule?t:{default:t}}var C=[i.default,H.default,V.default];e.default=C}));oC(vo);var yo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=H(ao);function H(t){return t&&t.__esModule?t:{default:t}}var V=H(vo).default.concat([{identify:t=>null==t,createNode:(t,e,H)=>H.wrapScalars?new i.default(null):null,default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>null,options:go.nullOptions,stringify:()=>go.nullOptions.nullStr},{identify:t=>"boolean"==typeof t,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>"t"===t[0]||"T"===t[0],options:go.boolOptions,stringify:({value:t})=>t?go.boolOptions.trueStr:go.boolOptions.falseStr},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o([0-7]+)$/,resolve:(t,e)=>parseInt(e,8),stringify:({value:t})=>"0o"+t.toString(8)},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:t=>parseInt(t,10),stringify:po.stringifyNumber},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x([0-9a-fA-F]+)$/,resolve:(t,e)=>parseInt(e,16),stringify:({value:t})=>"0x"+t.toString(16)},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.inf|(\.nan))$/i,resolve:(t,e)=>e?NaN:"-"===t[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:po.stringifyNumber},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:0|[1-9][0-9]*)(\.[0-9]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify:({value:t})=>Number(t).toExponential()},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:0|[1-9][0-9]*)\.([0-9]*)$/,resolve(t,e){const H=new i.default(parseFloat(t));return e&&"0"===e[e.length-1]&&(H.minFractionDigits=e.length),H},stringify:po.stringifyNumber}]);e.default=V}));oC(yo);var Zo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(fo),H=a(_o),V=a(ao);function a(t){return t&&t.__esModule?t:{default:t}}const C=[i.default,H.default,{identify:t=>"string"==typeof t,default:!0,tag:"tag:yaml.org,2002:str",resolve:bo.resolveString,stringify:t=>JSON.stringify(t)},{identify:t=>null==t,createNode:(t,e,i)=>i.wrapScalars?new V.default(null):null,default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:t=>JSON.stringify(t)},{identify:t=>"boolean"==typeof t,default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$/,resolve:()=>!0,stringify:t=>JSON.stringify(t)},{identify:t=>"boolean"==typeof t,default:!0,tag:"tag:yaml.org,2002:bool",test:/^false$/,resolve:()=>!1,stringify:t=>JSON.stringify(t)},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:t=>parseInt(t,10),stringify:t=>JSON.stringify(t)},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:t=>JSON.stringify(t)}];C.scalarFallback=t=>{throw new SyntaxError(`Unresolved plain scalar ${JSON.stringify(t)}`)};var n=C;e.default=n}));oC(Zo);var wo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve:(t,e)=>{if("function"==typeof Buffer){const i=(0,bo.resolveString)(t,e);return Buffer.from(i,"base64")}if("function"==typeof atob){const i=atob((0,bo.resolveString)(t,e)),H=new Uint8Array(i.length);for(let t=0;t<i.length;++t)H[t]=i.charCodeAt(t);return H}return t.errors.push(new Dn.YAMLReferenceError(e,"This environment does not support reading binary tags; either Buffer or atob is required")),null},options:go.binaryOptions,stringify:({comment:t,type:e,value:i},H,V,a)=>{let C;if("function"==typeof Buffer)C=i instanceof Buffer?i.toString("base64"):Buffer.from(i.buffer).toString("base64");else{if("function"!=typeof btoa)throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");{let t="";for(let e=0;e<i.length;++e)t+=String.fromCharCode(i[e]);C=btoa(t)}}if(e||(e=go.binaryOptions.defaultType),e===Pn.Type.QUOTE_DOUBLE)i=C;else{const{lineWidth:t}=go.binaryOptions,H=Math.ceil(C.length/t),V=new Array(H);for(let e=0,i=0;e<H;++e,i+=t)V[e]=C.substr(i,t);i=V.join(e===Pn.Type.BLOCK_LITERAL?"\n":" ")}return(0,po.stringifyString)({comment:t,type:e,value:i},H,V,a)}};e.default=i}));oC(wo);var ko=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.parsePairs=n,e.createPairs=o,e.default=void 0;var i=C(ro),H=C(Co),V=C(mo),a=C(Lo);function C(t){return t&&t.__esModule?t:{default:t}}function n(t,e){const a=(0,V.default)(t,e);for(let t=0;t<a.items.length;++t){let V=a.items[t];if(!(V instanceof H.default)){if(V instanceof i.default){if(V.items.length>1){const t="Each pair must have its own sequence indicator";throw new Dn.YAMLSemanticError(e,t)}const t=V.items[0]||new H.default;V.commentBefore&&(t.commentBefore=t.commentBefore?`${V.commentBefore}\n${t.commentBefore}`:V.commentBefore),V.comment&&(t.comment=t.comment?`${V.comment}\n${t.comment}`:V.comment),V=t}a.items[t]=V instanceof H.default?V:new H.default(V)}}return a}function o(t,e,i){const H=new a.default;H.tag="tag:yaml.org,2002:pairs";for(const V of e){let e,a;if(Array.isArray(V)){if(2!==V.length)throw new TypeError(`Expected [key, value] tuple: ${V}`);e=V[0],a=V[1]}else if(V&&V instanceof Object){const t=Object.keys(V);if(1!==t.length)throw new TypeError(`Expected { key: value } tuple: ${V}`);e=t[0],a=V[e]}else e=V;const C=t.createPair(e,a,i);H.items.push(C)}return H}var r={default:!1,tag:"tag:yaml.org,2002:pairs",resolve:n,createNode:o};e.default=r}));oC(ko);ko.parsePairs,ko.createPairs;var xo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.YAMLOMap=void 0;var i=n(Ho),H=n(ro),V=n(Co),a=n(ao),C=n(Lo);function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class r extends C.default{constructor(){super(),o(this,"add",H.default.prototype.add.bind(this)),o(this,"delete",H.default.prototype.delete.bind(this)),o(this,"get",H.default.prototype.get.bind(this)),o(this,"has",H.default.prototype.has.bind(this)),o(this,"set",H.default.prototype.set.bind(this)),this.tag=r.tag}toJSON(t,e){const H=new Map;e&&e.onCreate&&e.onCreate(H);for(const t of this.items){let a,C;if(t instanceof V.default?(a=(0,i.default)(t.key,"",e),C=(0,i.default)(t.value,a,e)):a=(0,i.default)(t,"",e),H.has(a))throw new Error("Ordered maps must not include duplicate keys");H.set(a,C)}return H}}e.YAMLOMap=r,o(r,"tag","tag:yaml.org,2002:omap");var L={identify:t=>t instanceof Map,nodeClass:r,default:!1,tag:"tag:yaml.org,2002:omap",resolve:function(t,e){const i=(0,ko.parsePairs)(t,e),H=[];for(const{key:t}of i.items)if(t instanceof a.default){if(H.includes(t.value)){const t="Ordered maps must not include duplicate keys";throw new Dn.YAMLSemanticError(e,t)}H.push(t.value)}return Object.assign(new r,i)},createNode:function(t,e,i){const H=(0,ko.createPairs)(t,e,i),V=new r;return V.items=H.items,V}};e.default=L}));oC(xo);xo.YAMLOMap;var So=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.YAMLSet=void 0;var i=function(t){if(t&&t.__esModule)return t;var e=n();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var H=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var V in t)if(Object.prototype.hasOwnProperty.call(t,V)){var a=H?Object.getOwnPropertyDescriptor(t,V):null;a&&(a.get||a.set)?Object.defineProperty(i,V,a):i[V]=t[V]}}i.default=t,e&&e.set(t,i);return i}(ro),H=C(Co),V=C(uo),a=C(ao);function C(t){return t&&t.__esModule?t:{default:t}}function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}class o extends i.default{constructor(){super(),this.tag=o.tag}add(t){const e=t instanceof H.default?t:new H.default(t);(0,i.findPair)(this.items,e.key)||this.items.push(e)}get(t,e){const V=(0,i.findPair)(this.items,t);return!e&&V instanceof H.default?V.key instanceof a.default?V.key.value:V.key:V}set(t,e){if("boolean"!=typeof e)throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof e}`);const V=(0,i.findPair)(this.items,t);V&&!e?this.items.splice(this.items.indexOf(V),1):!V&&e&&this.items.push(new H.default(t))}toJSON(t,e){return super.toJSON(t,e,Set)}toString(t,e,i){if(!t)return JSON.stringify(this);if(this.hasAllNullValues())return super.toString(t,e,i);throw new Error("Set items must all have null values")}}e.YAMLSet=o,function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(o,"tag","tag:yaml.org,2002:set");var r={identify:t=>t instanceof Set,nodeClass:o,default:!1,tag:"tag:yaml.org,2002:set",resolve:function(t,e){const i=(0,V.default)(t,e);if(!i.hasAllNullValues())throw new Dn.YAMLSemanticError(e,"Set items must all have null values");return Object.assign(new o,i)},createNode:function(t,e,i){const H=new o;for(const V of e)H.items.push(t.createPair(V,null,i));return H}};e.default=r}));oC(So);So.YAMLSet;var zo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.timestamp=e.floatTime=e.intTime=void 0;const i=(t,e)=>{const i=e.split(":").reduce((t,e)=>60*t+Number(e),0);return"-"===t?-i:i},H=({value:t})=>{if(isNaN(t)||!isFinite(t))return(0,po.stringifyNumber)(t);let e="";t<0&&(e="-",t=Math.abs(t));const i=[t%60];return t<60?i.unshift(0):(t=Math.round((t-i[0])/60),i.unshift(t%60),t>=60&&(t=Math.round((t-i[0])/60),i.unshift(t))),e+i.map(t=>t<10?"0"+String(t):String(t)).join(":").replace(/000000\d*$/,"")},V={identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,resolve:(t,e,H)=>i(e,H.replace(/_/g,"")),stringify:H};e.intTime=V;const a={identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,resolve:(t,e,H)=>i(e,H.replace(/_/g,"")),stringify:H};e.floatTime=a;const C={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$"),resolve:(t,e,H,V,a,C,n,o,r)=>{o&&(o=(o+"00").substr(1,3));let L=Date.UTC(e,H-1,V,a||0,C||0,n||0,o||0);if(r&&"Z"!==r){let t=i(r[0],r.slice(1));Math.abs(t)<30&&(t*=60),L-=6e4*t}return new Date(L)},stringify:({value:t})=>t.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")};e.timestamp=C}));oC(zo);zo.timestamp,zo.floatTime,zo.intTime;var Eo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(ao),H=o(vo),V=o(wo),a=o(xo),C=o(ko),n=o(So);function o(t){return t&&t.__esModule?t:{default:t}}var r=H.default.concat([{identify:t=>null==t,createNode:(t,e,H)=>H.wrapScalars?new i.default(null):null,default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>null,options:go.nullOptions,stringify:()=>go.nullOptions.nullStr},{identify:t=>"boolean"==typeof t,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>!0,options:go.boolOptions,stringify:({value:t})=>t?go.boolOptions.trueStr:go.boolOptions.falseStr},{identify:t=>"boolean"==typeof t,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>!1,options:go.boolOptions,stringify:({value:t})=>t?go.boolOptions.trueStr:go.boolOptions.falseStr},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^0b([0-1_]+)$/,resolve:(t,e)=>parseInt(e.replace(/_/g,""),2),stringify:({value:t})=>"0b"+t.toString(2)},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0([0-7_]+)$/,resolve:(t,e)=>parseInt(e.replace(/_/g,""),8),stringify:({value:t})=>(t<0?"-0":"0")+t.toString(8)},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:t=>parseInt(t.replace(/_/g,""),10),stringify:po.stringifyNumber},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x([0-9a-fA-F_]+)$/,resolve:(t,e)=>parseInt(e.replace(/_/g,""),16),stringify:({value:t})=>(t<0?"-0x":"0x")+t.toString(16)},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.inf|(\.nan))$/i,resolve:(t,e)=>e?NaN:"-"===t[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:po.stringifyNumber},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify:({value:t})=>Number(t).toExponential()},{identify:t=>"number"==typeof t,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,resolve(t,e){const H=new i.default(parseFloat(t.replace(/_/g,"")));if(e){const t=e.replace(/_/g,"");"0"===t[t.length-1]&&(H.minFractionDigits=t.length)}return H},stringify:po.stringifyNumber}],V.default,a.default,C.default,n.default,zo.intTime,zo.floatTime,zo.timestamp);e.default=r}));oC(Eo);var Oo=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.tags=e.schemas=void 0;var i=s(yo),H=s(vo),V=s(Zo),a=s(Eo),C=s(fo),n=s(_o),o=s(wo),r=s(xo),L=s(ko),d=s(So);function s(t){return t&&t.__esModule?t:{default:t}}const l={core:i.default,failsafe:H.default,json:V.default,yaml11:a.default};e.schemas=l;const M={binary:o.default,floatTime:zo.floatTime,intTime:zo.intTime,map:C.default,omap:r.default,pairs:L.default,seq:n.default,set:d.default,timestamp:zo.timestamp};e.tags=M}));oC(Oo);Oo.tags,Oo.schemas;var To=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(oo),H=n(no),V=n(Vo),a=n(Co),C=n(ao);function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const r=({type:t})=>t===Pn.Type.FLOW_MAP||t===Pn.Type.MAP,L=({type:t})=>t===Pn.Type.FLOW_SEQ||t===Pn.Type.SEQ;class d{constructor({customTags:t,merge:e,schema:i,tags:H}){if(this.merge=!!e,this.name=i,this.tags=Oo.schemas[i.replace(/\W/g,"")],!this.tags){const t=Object.keys(Oo.schemas).map(t=>JSON.stringify(t)).join(", ");throw new Error(`Unknown schema "${i}"; use one of ${t}`)}if(!t&&H&&(t=H,(0,ho.warnOptionDeprecation)("tags","customTags")),Array.isArray(t))for(const e of t)this.tags=this.tags.concat(e);else"function"==typeof t&&(this.tags=t(this.tags.slice()));for(let t=0;t<this.tags.length;++t){const e=this.tags[t];if("string"==typeof e){const i=Oo.tags[e];if(!i){const t=Object.keys(Oo.tags).map(t=>JSON.stringify(t)).join(", ");throw new Error(`Unknown custom tag "${e}"; use one of ${t}`)}this.tags[t]=i}}}createNode(t,e,H,a){if(t instanceof V.default)return t;let n;if(H){H.startsWith("!!")&&(H=d.defaultPrefix+H.slice(2));const t=this.tags.filter(t=>t.tag===H);if(n=t.find(t=>!t.format)||t[0],!n)throw new Error(`Tag ${H} not found`)}else if(n=this.tags.find(e=>(e.identify&&e.identify(t)||e.class&&t instanceof e.class)&&!e.format),!n){if("function"==typeof t.toJSON&&(t=t.toJSON()),"object"!=typeof t)return e?new C.default(t):t;n=t instanceof Map?Oo.tags.map:t[Symbol.iterator]?Oo.tags.seq:Oo.tags.map}a?a.wrapScalars=e:a={wrapScalars:e},a.onTagObj&&(a.onTagObj(n),delete a.onTagObj);const o={};if(t&&"object"==typeof t&&a.prevObjects){const e=a.prevObjects.find(e=>e.value===t);if(e){const t=new i.default(e);return a.aliasNodes.push(t),t}o.value=t,a.prevObjects.push(o)}return o.node=n.createNode?n.createNode(this,t,a):e?new C.default(t):t,o.node}createPair(t,e,i){const H=this.createNode(t,i.wrapScalars,null,i),V=this.createNode(e,i.wrapScalars,null,i);return new a.default(H,V)}resolveScalar(t,e){e||(e=this.tags);for(let i=0;i<e.length;++i){const{format:H,test:V,resolve:a}=e[i];if(V){const e=t.match(V);if(e){let t=a.apply(null,e);return t instanceof C.default||(t=new C.default(t)),H&&(t.format=H),t}}}return this.tags.scalarFallback&&(t=this.tags.scalarFallback(t)),new C.default(t)}resolveNode(t,e,i){const V=this.tags.filter(({tag:t})=>t===i),a=V.find(({test:t})=>!t);e.error&&t.errors.push(e.error);try{if(a){let i=a.resolve(t,e);i instanceof H.default||(i=new C.default(i)),e.resolved=i}else{const i=(0,bo.resolveString)(t,e);"string"==typeof i&&V.length>0&&(e.resolved=this.resolveScalar(i,V))}}catch(i){i.source||(i.source=e),t.errors.push(i),e.resolved=null}return e.resolved?(i&&e.tag&&(e.resolved.tag=i),e.resolved):null}resolveNodeWithFallback(t,e,i){const H=this.resolveNode(t,e,i);if(Object.prototype.hasOwnProperty.call(e,"resolved"))return H;const V=r(e)?d.defaultTags.MAP:L(e)?d.defaultTags.SEQ:d.defaultTags.STR;if(V){t.warnings.push(new Dn.YAMLWarning(e,`The tag ${i} is unavailable, falling back to ${V}`));const H=this.resolveNode(t,e,V);return H.tag=i,H}return t.errors.push(new Dn.YAMLReferenceError(e,`The tag ${i} is unavailable`)),null}getTagObject(t){if(t instanceof i.default)return i.default;if(t.tag){const e=this.tags.filter(e=>e.tag===t.tag);if(e.length>0)return e.find(e=>e.format===t.format)||e[0]}let e,H;if(t instanceof C.default){H=t.value;const i=this.tags.filter(t=>t.identify&&t.identify(H)||t.class&&H instanceof t.class);e=i.find(e=>e.format===t.format)||i.find(t=>!t.format)}else H=t,e=this.tags.find(t=>t.nodeClass&&H instanceof t.nodeClass);if(!e){const t=H&&H.constructor?H.constructor.name:typeof H;throw new Error(`Tag not resolved for ${t} value`)}return e}stringifyProps(t,e,{anchors:i,doc:H}){const V=[],a=H.anchors.getName(t);return a&&(i[a]=t,V.push(`&${a}`)),t.tag?V.push(H.stringifyTag(t.tag)):e.default||V.push(H.stringifyTag(e.tag)),V.join(" ")}stringify(t,e,i,C){let n;if(!(t instanceof V.default)){const i={aliasNodes:[],onTagObj:t=>n=t,prevObjects:[]};t=this.createNode(t,!0,null,i);const{anchors:H}=e.doc;for(const t of i.aliasNodes){t.source=t.source.node;let e=H.getName(t.source);e||(e=H.newName(),H.map[e]=t.source)}}if(e.tags=this,t instanceof a.default)return t.toString(e,i,C);n||(n=this.getTagObject(t));const o=this.stringifyProps(t,n,e),r="function"==typeof n.stringify?n.stringify(t,e,i,C):t instanceof H.default?t.toString(e,i,C):(0,po.stringifyString)(t,e,i,C);return o?t instanceof H.default&&"{"!==r[0]&&"["!==r[0]?`${o}\n${e.indent}${r}`:`${o} ${r}`:r}}e.default=d,o(d,"defaultPrefix","tag:yaml.org,2002:"),o(d,"defaultTags",{MAP:"tag:yaml.org,2002:map",SEQ:"tag:yaml.org,2002:seq",STR:"tag:yaml.org,2002:str"})}));oC(To);var No=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(io),H=s(lo),V=s(Mo),a=s(To),C=s(oo),n=function(t){if(t&&t.__esModule)return t;var e=d();if(e&&e.has(t))return e.get(t);var i={};if(null!=t){var H=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var V in t)if(Object.prototype.hasOwnProperty.call(t,V)){var a=H?Object.getOwnPropertyDescriptor(t,V):null;a&&(a.get||a.set)?Object.defineProperty(i,V,a):i[V]=t[V]}}i.default=t,e&&e.set(t,i);return i}(no),o=s(Vo),r=s(ao),L=s(Ho);function d(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return d=function(){return t},t}function s(t){return t&&t.__esModule?t:{default:t}}const l=t=>t&&[Pn.Type.MAP_KEY,Pn.Type.MAP_VALUE,Pn.Type.SEQ_ITEM].includes(t.type);class M{constructor(t){this.anchors=new H.default(t.anchorPrefix),this.commentBefore=null,this.comment=null,this.contents=null,this.directivesEndMarker=null,this.errors=[],this.options=t,this.schema=null,this.tagPrefixes=[],this.version=null,this.warnings=[]}assertCollectionContents(){if(this.contents instanceof n.default)return!0;throw new Error("Expected a YAML collection as document contents")}add(t){return this.assertCollectionContents(),this.contents.add(t)}addIn(t,e){this.assertCollectionContents(),this.contents.addIn(t,e)}delete(t){return this.assertCollectionContents(),this.contents.delete(t)}deleteIn(t){return(0,n.isEmptyPath)(t)?null!=this.contents&&(this.contents=null,!0):(this.assertCollectionContents(),this.contents.deleteIn(t))}getDefaults(){return M.defaults[this.version]||M.defaults[this.options.version]||{}}get(t,e){return this.contents instanceof n.default?this.contents.get(t,e):void 0}getIn(t,e){return(0,n.isEmptyPath)(t)?!e&&this.contents instanceof r.default?this.contents.value:this.contents:this.contents instanceof n.default?this.contents.getIn(t,e):void 0}has(t){return this.contents instanceof n.default&&this.contents.has(t)}hasIn(t){return(0,n.isEmptyPath)(t)?void 0!==this.contents:this.contents instanceof n.default&&this.contents.hasIn(t)}set(t,e){this.assertCollectionContents(),this.contents.set(t,e)}setIn(t,e){(0,n.isEmptyPath)(t)?this.contents=e:(this.assertCollectionContents(),this.contents.setIn(t,e))}setSchema(t,e){if(!t&&!e&&this.schema)return;"number"==typeof t&&(t=t.toFixed(1)),"1.0"===t||"1.1"===t||"1.2"===t?(this.version?this.version=t:this.options.version=t,delete this.options.schema):t&&"string"==typeof t&&(this.options.schema=t),Array.isArray(e)&&(this.options.customTags=e);const i=Object.assign({},this.getDefaults(),this.options);this.schema=new a.default(i)}parse(t,e){this.options.keepCstNodes&&(this.cstNode=t),this.options.keepNodeTypes&&(this.type="DOCUMENT");const{directives:i=[],contents:H=[],directivesEndMarker:V,error:a,valueRange:C}=t;if(a&&(a.source||(a.source=this),this.errors.push(a)),this.parseDirectives(i,e),V&&(this.directivesEndMarker=!0),this.range=C?[C.start,C.end]:null,this.setSchema(),this.anchors._cstAliases=[],this.parseContents(H),this.anchors.resolveNodes(),this.options.prettyErrors){for(const t of this.errors)t instanceof Dn.YAMLError&&t.makePretty();for(const t of this.warnings)t instanceof Dn.YAMLError&&t.makePretty()}return this}parseDirectives(t,e){const i=[];let H=!1;if(t.forEach(t=>{const{comment:e,name:V}=t;switch(V){case"TAG":this.resolveTagDirective(t),H=!0;break;case"YAML":case"YAML:1.0":this.resolveYamlDirective(t),H=!0;break;default:if(V){const e=`YAML only supports %TAG and %YAML directives, and not %${V}`;this.warnings.push(new Dn.YAMLWarning(t,e))}}e&&i.push(e)}),e&&!H&&"1.1"===(this.version||e.version||this.options.version)){const t=({handle:t,prefix:e})=>({handle:t,prefix:e});this.tagPrefixes=e.tagPrefixes.map(t),this.version=e.version}this.commentBefore=i.join("\n")||null}parseContents(t){const e={before:[],after:[]},i=[];let H=!1;switch(t.forEach(t=>{if(t.valueRange){if(1===i.length){const e="Document is not valid YAML (bad indentation?)";this.errors.push(new Dn.YAMLSyntaxError(t,e))}const e=this.resolveNode(t);H&&(e.spaceBefore=!0,H=!1),i.push(e)}else if(null!==t.comment){(0===i.length?e.before:e.after).push(t.comment)}else t.type===Pn.Type.BLANK_LINE&&(H=!0,0===i.length&&e.before.length>0&&!this.commentBefore&&(this.commentBefore=e.before.join("\n"),e.before=[]))}),i.length){case 0:this.contents=null,e.after=e.before;break;case 1:if(this.contents=i[0],this.contents){const t=e.before.join("\n")||null;if(t){const e=this.contents instanceof n.default&&this.contents.items[0]?this.contents.items[0]:this.contents;e.commentBefore=e.commentBefore?`${t}\n${e.commentBefore}`:t}}else e.after=e.before.concat(e.after);break;default:this.contents=i,this.contents[0]?this.contents[0].commentBefore=e.before.join("\n")||null:e.after=e.before.concat(e.after)}this.comment=e.after.join("\n")||null}resolveTagDirective(t){const[e,i]=t.parameters;if(e&&i)if(this.tagPrefixes.every(t=>t.handle!==e))this.tagPrefixes.push({handle:e,prefix:i});else{const e="The %TAG directive must only be given at most once per handle in the same document.";this.errors.push(new Dn.YAMLSemanticError(t,e))}else{const e="Insufficient parameters given for %TAG directive";this.errors.push(new Dn.YAMLSemanticError(t,e))}}resolveYamlDirective(t){let[e]=t.parameters;if("YAML:1.0"===t.name&&(e="1.0"),this.version){const e="The %YAML directive must only be given at most once per document.";this.errors.push(new Dn.YAMLSemanticError(t,e))}if(e){if(!M.defaults[e]){const i=`Document will be parsed as YAML ${this.version||this.options.version} rather than YAML ${e}`;this.warnings.push(new Dn.YAMLWarning(t,i))}this.version=e}else{const e="Insufficient parameters given for %YAML directive";this.errors.push(new Dn.YAMLSemanticError(t,e))}}resolveTagName(t){const{tag:e,type:i}=t;let H=!1;if(e){const{handle:i,suffix:V,verbatim:a}=e;if(a){if("!"!==a&&"!!"!==a)return a;const e=`Verbatim tags aren't resolved, so ${a} is invalid.`;this.errors.push(new Dn.YAMLSemanticError(t,e))}else if("!"!==i||V){let e=this.tagPrefixes.find(t=>t.handle===i);if(!e){const t=this.getDefaults().tagPrefixes;t&&(e=t.find(t=>t.handle===i))}if(e){if(V){if("!"===i&&"1.0"===(this.version||this.options.version)){if("^"===V[0])return V;if(/[:/]/.test(V)){const t=V.match(/^([a-z0-9-]+)\/(.*)/i);return t?`tag:${t[1]}.yaml.org,2002:${t[2]}`:`tag:${V}`}}return e.prefix+decodeURIComponent(V)}this.errors.push(new Dn.YAMLSemanticError(t,`The ${i} tag has no suffix.`))}else{const e=`The ${i} tag handle is non-default and was not declared.`;this.errors.push(new Dn.YAMLSemanticError(t,e))}}else H=!0}switch(i){case Pn.Type.BLOCK_FOLDED:case Pn.Type.BLOCK_LITERAL:case Pn.Type.QUOTE_DOUBLE:case Pn.Type.QUOTE_SINGLE:return a.default.defaultTags.STR;case Pn.Type.FLOW_MAP:case Pn.Type.MAP:return a.default.defaultTags.MAP;case Pn.Type.FLOW_SEQ:case Pn.Type.SEQ:return a.default.defaultTags.SEQ;case Pn.Type.PLAIN:return H?a.default.defaultTags.STR:null;default:return null}}resolveNode(t){if(!t)return null;const{anchors:e,errors:i,schema:H}=this;let V=!1,a=!1;const n={before:[],after:[]},o=l(t.context.parent)?t.context.parent.props.concat(t.props):t.props;for(const{start:e,end:H}of o)switch(t.context.src[e]){case Pn.Char.COMMENT:{if(!t.commentHasRequiredWhitespace(e)){const e="Comments must be separated from other tokens by white space characters";i.push(new Dn.YAMLSemanticError(t,e))}const V=t.context.src.slice(e+1,H),{header:a,valueRange:C}=t;C&&(e>C.start||a&&e>a.start)?n.after.push(V):n.before.push(V)}break;case Pn.Char.ANCHOR:if(V){const e="A node can have at most one anchor";i.push(new Dn.YAMLSemanticError(t,e))}V=!0;break;case Pn.Char.TAG:if(a){const e="A node can have at most one tag";i.push(new Dn.YAMLSemanticError(t,e))}a=!0}if(V){const i=t.anchor,H=e.getNode(i);H&&(e.map[e.newName(i)]=H),e.map[i]=t}let r;if(t.type===Pn.Type.ALIAS){if(V||a){const e="An alias node must not specify any properties";i.push(new Dn.YAMLSemanticError(t,e))}const H=t.rawValue,n=e.getNode(H);if(!n){const e=`Aliased anchor not found: ${H}`;return i.push(new Dn.YAMLReferenceError(t,e)),null}r=new C.default(n),e._cstAliases.push(r)}else{const e=this.resolveTagName(t);if(e)r=H.resolveNodeWithFallback(this,t,e);else{if(t.type!==Pn.Type.PLAIN){const e=`Failed to resolve ${t.type} node here`;return i.push(new Dn.YAMLSyntaxError(t,e)),null}try{r=H.resolveScalar(t.strValue||"")}catch(e){return e.source||(e.source=t),i.push(e),null}}}if(r){r.range=[t.range.start,t.range.end],this.options.keepCstNodes&&(r.cstNode=t),this.options.keepNodeTypes&&(r.type=t.type);const e=n.before.join("\n");e&&(r.commentBefore=r.commentBefore?`${r.commentBefore}\n${e}`:e);const i=n.after.join("\n");i&&(r.comment=r.comment?`${r.comment}\n${i}`:i)}return t.resolved=r}listNonDefaultTags(){return(0,V.default)(this.contents).filter(t=>0!==t.indexOf(a.default.defaultPrefix))}setTagPrefix(t,e){if("!"!==t[0]||"!"!==t[t.length-1])throw new Error("Handle must start and end with !");if(e){const i=this.tagPrefixes.find(e=>e.handle===t);i?i.prefix=e:this.tagPrefixes.push({handle:t,prefix:e})}else this.tagPrefixes=this.tagPrefixes.filter(e=>e.handle!==t)}stringifyTag(t){if("1.0"===(this.version||this.options.version)){const e=t.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);if(e)return"!"+e[1];const i=t.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);return i?`!${i[1]}/${i[2]}`:`!${t.replace(/^tag:/,"")}`}{let e=this.tagPrefixes.find(e=>0===t.indexOf(e.prefix));if(!e){const i=this.getDefaults().tagPrefixes;e=i&&i.find(e=>0===t.indexOf(e.prefix))}if(!e)return"!"===t[0]?t:`!<${t}>`;const i=t.substr(e.prefix.length).replace(/[!,[\]{}]/g,t=>({"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"})[t]);return e.handle+i}}toJSON(t){const{keepBlobsInJSON:e,mapAsMap:i,maxAliasCount:H}=this.options,V=e&&("string"!=typeof t||!(this.contents instanceof r.default)),a={doc:this,keep:V,mapAsMap:V&&!!i,maxAliasCount:H},C=Object.keys(this.anchors.map);return C.length>0&&(a.anchors=C.map(t=>({alias:[],aliasCount:0,count:1,node:this.anchors.map[t]}))),(0,L.default)(this.contents,t,a)}toString(){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");this.setSchema();const t=[];let e=!1;if(this.version){let i="%YAML 1.2";"yaml-1.1"===this.schema.name&&("1.0"===this.version?i="%YAML:1.0":"1.1"===this.version&&(i="%YAML 1.1")),t.push(i),e=!0}const H=this.listNonDefaultTags();this.tagPrefixes.forEach(({handle:i,prefix:V})=>{H.some(t=>0===t.indexOf(V))&&(t.push(`%TAG ${i} ${V}`),e=!0)}),(e||this.directivesEndMarker)&&t.push("---"),this.commentBefore&&(!e&&this.directivesEndMarker||t.unshift(""),t.unshift(this.commentBefore.replace(/^/gm,"#")));const V={anchors:{},doc:this,indent:""};let a=!1,C=null;if(this.contents){this.contents instanceof o.default&&(this.contents.spaceBefore&&(e||this.directivesEndMarker)&&t.push(""),this.contents.commentBefore&&t.push(this.contents.commentBefore.replace(/^/gm,"#")),V.forceBlockIndent=!!this.comment,C=this.contents.comment);const H=C?null:()=>a=!0,n=this.schema.stringify(this.contents,V,()=>C=null,H);t.push((0,i.default)(n,"",C))}else void 0!==this.contents&&t.push(this.schema.stringify(this.contents,V));return this.comment&&(a&&!C||""===t[t.length-1]||t.push(""),t.push(this.comment.replace(/^/gm,"#"))),t.join("\n")+"\n"}}e.default=M,function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i}(M,"defaults",{"1.0":{schema:"yaml-1.1",merge:!0,tagPrefixes:[{handle:"!",prefix:a.default.defaultPrefix},{handle:"!!",prefix:"tag:private.yaml.org,2002:"}]},1.1:{schema:"yaml-1.1",merge:!0,tagPrefixes:[{handle:"!",prefix:"!"},{handle:"!!",prefix:a.default.defaultPrefix}]},1.2:{schema:"core",merge:!1,tagPrefixes:[{handle:"!",prefix:"!"},{handle:"!!",prefix:a.default.defaultPrefix}]}})}));oC(No);var Po=rC((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(eo),H=a(No),V=a(To);function a(t){return t&&t.__esModule?t:{default:t}}const C={anchorPrefix:"a",customTags:null,keepCstNodes:!1,keepNodeTypes:!0,keepBlobsInJSON:!0,mapAsMap:!1,maxAliasCount:100,prettyErrors:!1,simpleKeys:!1,version:"1.2"};class n extends H.default{constructor(t){super(Object.assign({},C,t))}}function o(t,e){const H=(0,i.default)(t),V=new n(e).parse(H[0]);if(H.length>1){const t="Source contains multiple documents; please use YAML.parseAllDocuments()";V.errors.unshift(new Dn.YAMLSemanticError(H[1],t))}return V}var r={createNode:function(t,e=!0,i){void 0===i&&"string"==typeof e&&(i=e,e=!0);const a=Object.assign({},H.default.defaults[C.version],C);return new V.default(a).createNode(t,e,i)},defaultOptions:C,Document:n,parse:function(t,e){const i=o(t,e);if(i.warnings.forEach(t=>(0,ho.warn)(t)),i.errors.length>0)throw i.errors[0];return i.toJSON()},parseAllDocuments:function(t,e){const H=[];let V;for(const a of(0,i.default)(t)){const t=new n(e);t.parse(a,V),H.push(t),V=t}return H},parseCST:i.default,parseDocument:o,stringify:function(t,e){const i=new n(e);return i.contents=t,String(i)}};e.default=r}));oC(Po);var Io=Po.default,Ro=rC((function(t,e){!function(t){var i="object"==typeof window&&window||"object"==typeof self&&self;e.nodeType?i&&(i.hljs=t({})):t(e)}((function(t){var e=[],i=Object.keys,H={},V={},a=!0,C=/^(no-?highlight|plain|text)$/i,n=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,r="</span>",L="Could not find the language '{}', did you forget to load/include a language module?",d={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},s="of and for in not or if then".split(" ");function l(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M(t){return t.nodeName.toLowerCase()}function h(t){return C.test(t)}function A(t){var e,i={},H=Array.prototype.slice.call(arguments,1);for(e in t)i[e]=t[e];return H.forEach((function(t){for(e in t)i[e]=t[e]})),i}function g(t){var e=[];return function t(i,H){for(var V=i.firstChild;V;V=V.nextSibling)3===V.nodeType?H+=V.nodeValue.length:1===V.nodeType&&(e.push({event:"start",offset:H,node:V}),H=t(V,H),M(V).match(/br|hr|img|input/)||e.push({event:"stop",offset:H,node:V}));return H}(t,0),e}function p(t){return t.variants&&!t.cached_variants&&(t.cached_variants=t.variants.map((function(e){return A(t,{variants:null},e)}))),t.cached_variants?t.cached_variants:function t(e){return!!e&&(e.endsWithParent||t(e.starts))}(t)?[A(t,{starts:t.starts?A(t.starts):null})]:Object.isFrozen(t)?[A(t)]:[t]}function c(t,e){return e?Number(e):(i=t,-1!=s.indexOf(i.toLowerCase())?0:1);var i}function u(t){function e(t){return t&&t.source||t}function H(i,H){return new RegExp(e(i),"m"+(t.case_insensitive?"i":"")+(H?"g":""))}function V(t){var i,V,a={},C=[],n={},o=1;function r(t,e){a[o]=t,C.push([t,e]),o+=function(t){return new RegExp(t.toString()+"|").exec("").length-1}(e)+1}for(var L=0;L<t.contains.length;L++){r(V=t.contains[L],V.beginKeywords?"\\.?(?:"+V.begin+")\\.?":V.begin)}t.terminator_end&&r("end",t.terminator_end),t.illegal&&r("illegal",t.illegal);var d=C.map((function(t){return t[1]}));return i=H(function(t,i){for(var H=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,V=0,a="",C=0;C<t.length;C++){var n=V+=1,o=e(t[C]);for(C>0&&(a+=i),a+="(";o.length>0;){var r=H.exec(o);if(null==r){a+=o;break}a+=o.substring(0,r.index),o=o.substring(r.index+r[0].length),"\\"==r[0][0]&&r[1]?a+="\\"+String(Number(r[1])+n):(a+=r[0],"("==r[0]&&V++)}a+=")"}return a}(d,"|"),!0),n.lastIndex=0,n.exec=function(e){var H;if(0===C.length)return null;i.lastIndex=n.lastIndex;var V=i.exec(e);if(!V)return null;for(var o=0;o<V.length;o++)if(null!=V[o]&&null!=a[""+o]){H=a[""+o];break}return"string"==typeof H?(V.type=H,V.extra=[t.illegal,t.terminator_end]):(V.type="begin",V.rule=H),V},n}if(t.contains&&-1!=t.contains.indexOf("self")){if(!a)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");t.contains=t.contains.filter((function(t){return"self"!=t}))}!function a(C,n){C.compiled||(C.compiled=!0,C.keywords=C.keywords||C.beginKeywords,C.keywords&&(C.keywords=function(t,e){var H={};return"string"==typeof t?V("keyword",t):i(t).forEach((function(e){V(e,t[e])})),H;function V(t,i){e&&(i=i.toLowerCase()),i.split(" ").forEach((function(e){var i=e.split("|");H[i[0]]=[t,c(i[0],i[1])]}))}}(C.keywords,t.case_insensitive)),C.lexemesRe=H(C.lexemes||/\w+/,!0),n&&(C.beginKeywords&&(C.begin="\\b("+C.beginKeywords.split(" ").join("|")+")\\b"),C.begin||(C.begin=/\B|\b/),C.beginRe=H(C.begin),C.endSameAsBegin&&(C.end=C.begin),C.end||C.endsWithParent||(C.end=/\B|\b/),C.end&&(C.endRe=H(C.end)),C.terminator_end=e(C.end)||"",C.endsWithParent&&n.terminator_end&&(C.terminator_end+=(C.end?"|":"")+n.terminator_end)),C.illegal&&(C.illegalRe=H(C.illegal)),null==C.relevance&&(C.relevance=1),C.contains||(C.contains=[]),C.contains=Array.prototype.concat.apply([],C.contains.map((function(t){return p("self"===t?C:t)}))),C.contains.forEach((function(t){a(t,C)})),C.starts&&a(C.starts,n),C.terminators=V(C))}(t)}function f(t,e,i,V){function C(t,e){var i=p.case_insensitive?e[0].toLowerCase():e[0];return t.keywords.hasOwnProperty(i)&&t.keywords[i]}function n(t,e,i,H){if(!i&&""===e)return"";if(!t)return e;var V='<span class="'+(H?"":d.classPrefix);return(V+=t+'">')+e+(i?"":r)}function o(){v+=null!=_.subLanguage?function(){var t="string"==typeof _.subLanguage;if(t&&!H[_.subLanguage])return l(y);var e=t?f(_.subLanguage,y,!0,b[_.subLanguage]):m(y,_.subLanguage.length?_.subLanguage:void 0);return _.relevance>0&&(w+=e.relevance),t&&(b[_.subLanguage]=e.top),n(e.language,e.value,!1,!0)}():function(){var t,e,i,H;if(!_.keywords)return l(y);for(H="",e=0,_.lexemesRe.lastIndex=0,i=_.lexemesRe.exec(y);i;)H+=l(y.substring(e,i.index)),(t=C(_,i))?(w+=t[1],H+=n(t[0],l(i[0]))):H+=l(i[0]),e=_.lexemesRe.lastIndex,i=_.lexemesRe.exec(y);return H+l(y.substr(e))}(),y=""}function s(t){v+=t.className?n(t.className,"",!0):"",_=Object.create(t,{parent:{value:_}})}function M(t){var e=t[0],i=t.rule;return i&&i.endSameAsBegin&&(i.endRe=function(t){return new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}(e)),i.skip?y+=e:(i.excludeBegin&&(y+=e),o(),i.returnBegin||i.excludeBegin||(y=e)),s(i),i.returnBegin?0:e.length}function h(t){var i=t[0],H=e.substr(t.index),V=function t(e,i){if(function(t,e){var i=t&&t.exec(e);return i&&0===i.index}(e.endRe,i)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return t(e.parent,i)}(_,H);if(V){var a=_;a.skip?y+=i:(a.returnEnd||a.excludeEnd||(y+=i),o(),a.excludeEnd&&(y=i));do{_.className&&(v+=r),_.skip||_.subLanguage||(w+=_.relevance),_=_.parent}while(_!==V.parent);return V.starts&&(V.endSameAsBegin&&(V.starts.endRe=V.endRe),s(V.starts)),a.returnEnd?0:i.length}}var A={};function g(t,H){var V=H&&H[0];if(y+=t,null==V)return o(),0;if("begin"==A.type&&"end"==H.type&&A.index==H.index&&""===V)return y+=e.slice(H.index,H.index+1),1;if(A=H,"begin"===H.type)return M(H);if("illegal"===H.type&&!i)throw new Error('Illegal lexeme "'+V+'" for mode "'+(_.className||"<unnamed>")+'"');if("end"===H.type){var a=h(H);if(null!=a)return a}return y+=V,V.length}var p=Z(t);if(!p)throw console.error(L.replace("{}",t)),new Error('Unknown language: "'+t+'"');u(p);var c,_=V||p,b={},v="";for(c=_;c!==p;c=c.parent)c.className&&(v=n(c.className,"",!0)+v);var y="",w=0;try{for(var k,x,S=0;_.terminators.lastIndex=S,k=_.terminators.exec(e);)x=g(e.substring(S,k.index),k),S=k.index+x;for(g(e.substr(S)),c=_;c.parent;c=c.parent)c.className&&(v+=r);return{relevance:w,value:v,illegal:!1,language:t,top:_}}catch(i){if(i.message&&-1!==i.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:l(e)};if(a)return{relevance:0,value:l(e),language:t,top:_,errorRaised:i};throw i}}function m(t,e){e=e||d.languages||i(H);var V={relevance:0,value:l(t)},a=V;return e.filter(Z).filter(w).forEach((function(e){var i=f(e,t,!1);i.language=e,i.relevance>a.relevance&&(a=i),i.relevance>V.relevance&&(a=V,V=i)})),a.language&&(V.second_best=a),V}function _(t){return d.tabReplace||d.useBR?t.replace(o,(function(t,e){return d.useBR&&"\n"===t?"<br>":d.tabReplace?e.replace(/\t/g,d.tabReplace):""})):t}function b(t){var i,H,a,C,o,r=function(t){var e,i,H,V,a=t.className+" ";if(a+=t.parentNode?t.parentNode.className:"",i=n.exec(a)){var C=Z(i[1]);return C||(console.warn(L.replace("{}",i[1])),console.warn("Falling back to no-highlight mode for this block.",t)),C?i[1]:"no-highlight"}for(e=0,H=(a=a.split(/\s+/)).length;e<H;e++)if(h(V=a[e])||Z(V))return V}(t);h(r)||(d.useBR?(i=document.createElement("div")).innerHTML=t.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):i=t,o=i.textContent,a=r?f(r,o,!0):m(o),(H=g(i)).length&&((C=document.createElement("div")).innerHTML=a.value,a.value=function(t,i,H){var V=0,a="",C=[];function n(){return t.length&&i.length?t[0].offset!==i[0].offset?t[0].offset<i[0].offset?t:i:"start"===i[0].event?t:i:t.length?t:i}function o(t){a+="<"+M(t)+e.map.call(t.attributes,(function(t){return" "+t.nodeName+'="'+l(t.value).replace(/"/g,"&quot;")+'"'})).join("")+">"}function r(t){a+="</"+M(t)+">"}function L(t){("start"===t.event?o:r)(t.node)}for(;t.length||i.length;){var d=n();if(a+=l(H.substring(V,d[0].offset)),V=d[0].offset,d===t){C.reverse().forEach(r);do{L(d.splice(0,1)[0]),d=n()}while(d===t&&d.length&&d[0].offset===V);C.reverse().forEach(o)}else"start"===d[0].event?C.push(d[0].node):C.pop(),L(d.splice(0,1)[0])}return a+l(H.substr(V))}(H,g(C),o)),a.value=_(a.value),t.innerHTML=a.value,t.className=function(t,e,i){var H=e?V[e]:i,a=[t.trim()];return t.match(/\bhljs\b/)||a.push("hljs"),-1===t.indexOf(H)&&a.push(H),a.join(" ").trim()}(t.className,r,a.language),t.result={language:a.language,re:a.relevance},a.second_best&&(t.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function v(){if(!v.called){v.called=!0;var t=document.querySelectorAll("pre code");e.forEach.call(t,b)}}var y={disableAutodetect:!0};function Z(t){return t=(t||"").toLowerCase(),H[t]||H[V[t]]}function w(t){var e=Z(t);return e&&!e.disableAutodetect}return t.highlight=f,t.highlightAuto=m,t.fixMarkup=_,t.highlightBlock=b,t.configure=function(t){d=A(d,t)},t.initHighlighting=v,t.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",v,!1),window.addEventListener("load",v,!1)},t.registerLanguage=function(e,i){var C;try{C=i(t)}catch(t){if(console.error("Language definition for '{}' could not be registered.".replace("{}",e)),!a)throw t;console.error(t),C=y}H[e]=C,C.rawDefinition=i.bind(null,t),C.aliases&&C.aliases.forEach((function(t){V[t]=e}))},t.listLanguages=function(){return i(H)},t.getLanguage=Z,t.requireLanguage=function(t){var e=Z(t);if(e)return e;throw new Error("The '{}' language is required, but not loaded.".replace("{}",t))},t.autoDetection=w,t.inherit=A,t.debugMode=function(){a=!1},t.IDENT_RE="[a-zA-Z]\\w*",t.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",t.NUMBER_RE="\\b\\d+(\\.\\d+)?",t.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",t.BINARY_NUMBER_RE="\\b(0b[01]+)",t.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",t.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},t.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},t.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},t.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},t.COMMENT=function(e,i,H){var V=t.inherit({className:"comment",begin:e,end:i,contains:[]},H||{});return V.contains.push(t.PHRASAL_WORDS_MODE),V.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),V},t.C_LINE_COMMENT_MODE=t.COMMENT("//","$"),t.C_BLOCK_COMMENT_MODE=t.COMMENT("/\\*","\\*/"),t.HASH_COMMENT_MODE=t.COMMENT("#","$"),t.NUMBER_MODE={className:"number",begin:t.NUMBER_RE,relevance:0},t.C_NUMBER_MODE={className:"number",begin:t.C_NUMBER_RE,relevance:0},t.BINARY_NUMBER_MODE={className:"number",begin:t.BINARY_NUMBER_RE,relevance:0},t.CSS_NUMBER_MODE={className:"number",begin:t.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},t.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[t.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[t.BACKSLASH_ESCAPE]}]},t.TITLE_MODE={className:"title",begin:t.IDENT_RE,relevance:0},t.UNDERSCORE_TITLE_MODE={className:"title",begin:t.UNDERSCORE_IDENT_RE,relevance:0},t.METHOD_GUARD={begin:"\\.\\s*"+t.UNDERSCORE_IDENT_RE,relevance:0},[t.BACKSLASH_ESCAPE,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,t.PHRASAL_WORDS_MODE,t.COMMENT,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.HASH_COMMENT_MODE,t.NUMBER_MODE,t.C_NUMBER_MODE,t.BINARY_NUMBER_MODE,t.CSS_NUMBER_MODE,t.REGEXP_MODE,t.TITLE_MODE,t.UNDERSCORE_TITLE_MODE,t.METHOD_GUARD].forEach((function(t){!function t(e){Object.freeze(e);var i="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(H){!e.hasOwnProperty(H)||null===e[H]||"object"!=typeof e[H]&&"function"!=typeof e[H]||i&&("caller"===H||"callee"===H||"arguments"===H)||Object.isFrozen(e[H])||t(e[H])})),e}(t)})),t}))})),Bo=function(t){var e="[A-Za-z$_][0-9A-Za-z$_]*",i={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},H={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:t.C_NUMBER_RE+"n?"}],relevance:0},V={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},a={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,V],subLanguage:"xml"}},C={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,V],subLanguage:"css"}},n={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,V]};V.contains=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,a,C,n,H,t.REGEXP_MODE];var o=V.contains.concat([t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx","mjs","cjs"],keywords:i,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,a,C,n,t.C_LINE_COMMENT_MODE,t.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:e+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,H,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:e+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:e,relevance:0}]}]},{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+e+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:o}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{begin:/</,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,subLanguage:"xml",contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},{begin:/<[A-Za-z0-9\\._:-]+/,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,skip:!0,contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[t.inherit(t.TITLE_MODE,{begin:e}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},t.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},t.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}},Do=function(t){return{aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$"},{begin:"^.+?\\n[=-]{2,}$"}]},{begin:"<",end:">",subLanguage:"xml",relevance:0},{className:"bullet",begin:"^\\s*([*+-]|(\\d+\\.))\\s+"},{className:"strong",begin:"[*_]{2}.+?[*_]{2}"},{className:"emphasis",variants:[{begin:"\\*.+?\\*"},{begin:"_.+?_",relevance:0}]},{className:"quote",begin:"^>\\s+",end:"$"},{className:"code",variants:[{begin:"^```\\w*\\s*$",end:"^```[ ]*$"},{begin:"`.+?`"},{begin:"^( {4}|\\t)",end:"$",relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},{begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}},$o=function(t){var e={begin:/\|[A-Za-z]+:?/,keywords:{name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"},contains:[t.QUOTE_STRING_MODE,t.APOS_STRING_MODE]};return{aliases:["jinja"],case_insensitive:!0,subLanguage:"xml",contains:[t.COMMENT(/\{%\s*comment\s*%}/,/\{%\s*endcomment\s*%}/),t.COMMENT(/\{#/,/#}/),{className:"template-tag",begin:/\{%/,end:/%}/,contains:[{className:"name",begin:/\w+/,keywords:{name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"},starts:{endsWithParent:!0,keywords:"in by as",contains:[e],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/}}/,contains:[e]}]}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const jo=new WeakMap,Fo=(t=>(...i)=>{const H=t(...i);return e.set(H,!0),H})(t=>e=>{if(!(e instanceof _))throw new Error("unsafeHTML can only be used in text bindings");const i=jo.get(e);if(void 0!==i&&c(t)&&t===i.value&&e.value===i.fragment)return;const H=document.createElement("template");H.innerHTML=t;const V=document.importNode(H.content,!0);e.setValue(V),jo.set(e,{value:t,fragment:V})}),qo=[rt`
  @font-face {
    font-family: octicons-link;
    src: url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAZwABAAAAAACFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEU0lHAAAGaAAAAAgAAAAIAAAAAUdTVUIAAAZcAAAACgAAAAoAAQAAT1MvMgAAAyQAAABJAAAAYFYEU3RjbWFwAAADcAAAAEUAAACAAJThvmN2dCAAAATkAAAABAAAAAQAAAAAZnBnbQAAA7gAAACyAAABCUM+8IhnYXNwAAAGTAAAABAAAAAQABoAI2dseWYAAAFsAAABPAAAAZwcEq9taGVhZAAAAsgAAAA0AAAANgh4a91oaGVhAAADCAAAABoAAAAkCA8DRGhtdHgAAAL8AAAADAAAAAwGAACfbG9jYQAAAsAAAAAIAAAACABiATBtYXhwAAACqAAAABgAAAAgAA8ASm5hbWUAAAToAAABQgAAAlXu73sOcG9zdAAABiwAAAAeAAAAME3QpOBwcmVwAAAEbAAAAHYAAAB/aFGpk3jaTY6xa8JAGMW/O62BDi0tJLYQincXEypYIiGJjSgHniQ6umTsUEyLm5BV6NDBP8Tpts6F0v+k/0an2i+itHDw3v2+9+DBKTzsJNnWJNTgHEy4BgG3EMI9DCEDOGEXzDADU5hBKMIgNPZqoD3SilVaXZCER3/I7AtxEJLtzzuZfI+VVkprxTlXShWKb3TBecG11rwoNlmmn1P2WYcJczl32etSpKnziC7lQyWe1smVPy/Lt7Kc+0vWY/gAgIIEqAN9we0pwKXreiMasxvabDQMM4riO+qxM2ogwDGOZTXxwxDiycQIcoYFBLj5K3EIaSctAq2kTYiw+ymhce7vwM9jSqO8JyVd5RH9gyTt2+J/yUmYlIR0s04n6+7Vm1ozezUeLEaUjhaDSuXHwVRgvLJn1tQ7xiuVv/ocTRF42mNgZGBgYGbwZOBiAAFGJBIMAAizAFoAAABiAGIAznjaY2BkYGAA4in8zwXi+W2+MjCzMIDApSwvXzC97Z4Ig8N/BxYGZgcgl52BCSQKAA3jCV8CAABfAAAAAAQAAEB42mNgZGBg4f3vACQZQABIMjKgAmYAKEgBXgAAeNpjYGY6wTiBgZWBg2kmUxoDA4MPhGZMYzBi1AHygVLYQUCaawqDA4PChxhmh/8ODDEsvAwHgMKMIDnGL0x7gJQCAwMAJd4MFwAAAHjaY2BgYGaA4DAGRgYQkAHyGMF8NgYrIM3JIAGVYYDT+AEjAwuDFpBmA9KMDEwMCh9i/v8H8sH0/4dQc1iAmAkALaUKLgAAAHjaTY9LDsIgEIbtgqHUPpDi3gPoBVyRTmTddOmqTXThEXqrob2gQ1FjwpDvfwCBdmdXC5AVKFu3e5MfNFJ29KTQT48Ob9/lqYwOGZxeUelN2U2R6+cArgtCJpauW7UQBqnFkUsjAY/kOU1cP+DAgvxwn1chZDwUbd6CFimGXwzwF6tPbFIcjEl+vvmM/byA48e6tWrKArm4ZJlCbdsrxksL1AwWn/yBSJKpYbq8AXaaTb8AAHja28jAwOC00ZrBeQNDQOWO//sdBBgYGRiYWYAEELEwMTE4uzo5Zzo5b2BxdnFOcALxNjA6b2ByTswC8jYwg0VlNuoCTWAMqNzMzsoK1rEhNqByEyerg5PMJlYuVueETKcd/89uBpnpvIEVomeHLoMsAAe1Id4AAAAAAAB42oWQT07CQBTGv0JBhagk7HQzKxca2sJCE1hDt4QF+9JOS0nbaaYDCQfwCJ7Au3AHj+LO13FMmm6cl7785vven0kBjHCBhfpYuNa5Ph1c0e2Xu3jEvWG7UdPDLZ4N92nOm+EBXuAbHmIMSRMs+4aUEd4Nd3CHD8NdvOLTsA2GL8M9PODbcL+hD7C1xoaHeLJSEao0FEW14ckxC+TU8TxvsY6X0eLPmRhry2WVioLpkrbp84LLQPGI7c6sOiUzpWIWS5GzlSgUzzLBSikOPFTOXqly7rqx0Z1Q5BAIoZBSFihQYQOOBEdkCOgXTOHA07HAGjGWiIjaPZNW13/+lm6S9FT7rLHFJ6fQbkATOG1j2OFMucKJJsxIVfQORl+9Jyda6Sl1dUYhSCm1dyClfoeDve4qMYdLEbfqHf3O/AdDumsjAAB42mNgYoAAZQYjBmyAGYQZmdhL8zLdDEydARfoAqIAAAABAAMABwAKABMAB///AA8AAQAAAAAAAAAAAAAAAAABAAAAAA==)
      format('woff');
  }
`,rt`
  .markdown-body .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }

  .markdown-body .anchor {
    float: left;
    line-height: 1;
    margin-left: -20px;
    padding-right: 4px;
  }

  .markdown-body .anchor:focus {
    outline: none;
  }

  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .markdown-body h1:hover .anchor,
  .markdown-body h2:hover .anchor,
  .markdown-body h3:hover .anchor,
  .markdown-body h4:hover .anchor,
  .markdown-body h5:hover .anchor,
  .markdown-body h6:hover .anchor {
    text-decoration: none;
  }

  .markdown-body h1:hover .anchor .octicon-link,
  .markdown-body h2:hover .anchor .octicon-link,
  .markdown-body h3:hover .anchor .octicon-link,
  .markdown-body h4:hover .anchor .octicon-link,
  .markdown-body h5:hover .anchor .octicon-link,
  .markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }
  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: var(--markdown-text-color);
    font-family: var(--markdown-font-family);
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .markdown-body .pl-c {
    color: #6a737d;
  }

  .markdown-body .pl-c1,
  .markdown-body .pl-s .pl-v {
    color: #005cc5;
  }

  .markdown-body .pl-e,
  .markdown-body .pl-en {
    color: #6f42c1;
  }

  .markdown-body .pl-s .pl-s1,
  .markdown-body .pl-smi {
    color: #24292e;
  }

  .markdown-body .pl-ent {
    color: #22863a;
  }

  .markdown-body .pl-k {
    color: #d73a49;
  }

  .markdown-body .pl-pds,
  .markdown-body .pl-s,
  .markdown-body .pl-s .pl-pse .pl-s1,
  .markdown-body .pl-sr,
  .markdown-body .pl-sr .pl-cce,
  .markdown-body .pl-sr .pl-sra,
  .markdown-body .pl-sr .pl-sre {
    color: #032f62;
  }

  .markdown-body .pl-smw,
  .markdown-body .pl-v {
    color: #e36209;
  }

  .markdown-body .pl-bu {
    color: #b31d28;
  }

  .markdown-body .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .markdown-body .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .markdown-body .pl-c2:before {
    content: '^M';
  }

  .markdown-body .pl-sr .pl-cce {
    font-weight: 700;
    color: #22863a;
  }

  .markdown-body .pl-ml {
    color: #735c0f;
  }

  .markdown-body .pl-mh,
  .markdown-body .pl-mh .pl-en,
  .markdown-body .pl-ms {
    font-weight: 700;
    color: #005cc5;
  }

  .markdown-body .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .markdown-body .pl-mb {
    font-weight: 700;
    color: #24292e;
  }

  .markdown-body .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .markdown-body .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .markdown-body .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .markdown-body .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .markdown-body .pl-mdr {
    font-weight: 700;
    color: #6f42c1;
  }

  .markdown-body .pl-ba {
    color: #586069;
  }

  .markdown-body .pl-sg {
    color: #959da5;
  }

  .markdown-body .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .markdown-body details {
    display: block;
  }

  .markdown-body summary {
    display: list-item;
  }

  .markdown-body a {
    background-color: initial;
  }

  .markdown-body a:active,
  .markdown-body a:hover {
    outline-width: 0;
  }

  .markdown-body strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  .markdown-body h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  .markdown-body img {
    border-style: none;
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  .markdown-body hr {
    box-sizing: initial;
    height: 0;
    overflow: visible;
  }

  .markdown-body input {
    font: inherit;
    margin: 0;
  }

  .markdown-body input {
    overflow: visible;
  }

  .markdown-body [type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  .markdown-body * {
    box-sizing: border-box;
  }

  .markdown-body input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .markdown-body a {
    color: var(--markdown-link-color);
    text-decoration: none;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--markdown-divider-color);
  }

  .markdown-body hr:after,
  .markdown-body hr:before {
    display: table;
    content: '';
  }

  .markdown-body hr:after {
    clear: both;
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body details summary {
    cursor: pointer;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--markdown-heading-color);
  }

  .markdown-body h1 {
    font-size: 32px;
  }

  .markdown-body h1,
  .markdown-body h2 {
    font-weight: 600;
  }

  .markdown-body h2 {
    font-size: 24px;
  }

  .markdown-body h3 {
    font-size: 20px;
  }

  .markdown-body h3,
  .markdown-body h4 {
    font-weight: 600;
  }

  .markdown-body h4 {
    font-size: 16px;
  }

  .markdown-body h5 {
    font-size: 14px;
  }

  .markdown-body h5,
  .markdown-body h6 {
    font-weight: 600;
  }

  .markdown-body h6 {
    font-size: 12px;
  }

  .markdown-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .markdown-body blockquote {
    margin: 0;
  }

  .markdown-body ol,
  .markdown-body ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body ol ol,
  .markdown-body ul ol {
    list-style-type: lower-roman;
  }

  .markdown-body ol ol ol,
  .markdown-body ol ul ol,
  .markdown-body ul ol ol,
  .markdown-body ul ul ol {
    list-style-type: lower-alpha;
  }

  .markdown-body dd {
    margin-left: 0;
  }

  .markdown-body code,
  .markdown-body pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
  }

  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 0;
    background: var(--markdown-pre-background) !important;
  }

  .markdown-body input::-webkit-inner-spin-button,
  .markdown-body input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body .border {
    border: 1px solid #e1e4e8 !important;
  }

  .markdown-body .border-0 {
    border: 0 !important;
  }

  .markdown-body .border-bottom {
    border-bottom: 1px solid #e1e4e8 !important;
  }

  .markdown-body .rounded-1 {
    border-radius: 3px !important;
  }

  .markdown-body .bg-white {
    background-color: #fff !important;
  }

  .markdown-body .bg-gray-light {
    background-color: #fafbfc !important;
  }

  .markdown-body .text-gray-light {
    color: #6a737d !important;
  }

  .markdown-body .mb-0 {
    margin-bottom: 0 !important;
  }

  .markdown-body .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .markdown-body .pl-0 {
    padding-left: 0 !important;
  }

  .markdown-body .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .markdown-body .pl-1 {
    padding-left: 4px !important;
  }

  .markdown-body .pl-2 {
    padding-left: 8px !important;
  }

  .markdown-body .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .markdown-body .pl-3,
  .markdown-body .px-3 {
    padding-left: 16px !important;
  }

  .markdown-body .px-3 {
    padding-right: 16px !important;
  }

  .markdown-body .pl-4 {
    padding-left: 24px !important;
  }

  .markdown-body .pl-5 {
    padding-left: 32px !important;
  }

  .markdown-body .pl-6 {
    padding-left: 40px !important;
  }

  .markdown-body .f6 {
    font-size: 12px !important;
  }

  .markdown-body .lh-condensed {
    line-height: 1.25 !important;
  }

  .markdown-body .text-bold {
    font-weight: 600 !important;
  }

  .markdown-body .pl-7 {
    padding-left: 48px !important;
  }

  .markdown-body .pl-8 {
    padding-left: 64px !important;
  }

  .markdown-body .pl-9 {
    padding-left: 80px !important;
  }

  .markdown-body .pl-10 {
    padding-left: 96px !important;
  }

  .markdown-body .pl-11 {
    padding-left: 112px !important;
  }

  .markdown-body .pl-12 {
    padding-left: 128px !important;
  }

  .markdown-body hr {
    border-bottom-color: #eee;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .markdown-body:after,
  .markdown-body:before {
    display: table;
    content: '';
  }

  .markdown-body:after {
    clear: both;
  }

  .markdown-body > :first-child {
    margin-top: 0 !important;
  }

  .markdown-body > :last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }
`,rt`
  .markdown-body blockquote,
  .markdown-body details,
  .markdown-body dl,
  .markdown-body ol,
  .markdown-body p,
  .markdown-body pre,
  .markdown-body table,
  .markdown-body ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .markdown-body hr {
    height: 1px;
    padding: 0;
    margin: 24px 0;
    background: var(--markdown-divider-color);
    border: 0;
  }

  .markdown-body blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  .markdown-body blockquote > :first-child {
    margin-top: 0;
  }

  .markdown-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .markdown-body h1 {
    font-size: 2em;
  }

  .markdown-body h1,
  .markdown-body h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--markdown-divider-color);
  }

  .markdown-body h2 {
    font-size: 1.5em;
  }

  .markdown-body h3 {
    font-size: 1.25em;
  }

  .markdown-body h4 {
    font-size: 1em;
  }

  .markdown-body h5 {
    font-size: 0.875em;
  }

  .markdown-body h6 {
    font-size: 0.85em;
    color: #6a737d;
  }

  .markdown-body ol,
  .markdown-body ul {
    padding-left: 2em;
  }

  .markdown-body ol ol,
  .markdown-body ol ul,
  .markdown-body ul ol,
  .markdown-body ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li {
    word-wrap: break-all;
  }

  .markdown-body li > p {
    margin-top: 16px;
  }

  .markdown-body li + li {
    margin-top: 0.25em;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .markdown-body table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  .markdown-body table th {
    font-weight: 600;
    background: var(--markdown-secondary-background);
  }

  .markdown-body table td,
  .markdown-body table th {
    padding: 6px 13px;
    border: 1px solid var(--markdown-divider-color);
  }

  .markdown-body table tr {
    background: var(--markdown-primary-background);
    border-top: 1px solid var(--markdown-divider-color);
  }

  .markdown-body table tr:nth-child(2n) {
    background: var(--markdown-secondary-background);
  }

  .markdown-body img {
    max-width: 100%;
    box-sizing: initial;
    background-color: #fff;
  }

  .markdown-body img[align='right'] {
    padding-left: 20px;
  }

  .markdown-body img[align='left'] {
    padding-right: 20px;
  }

  .markdown-body code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: var(--markdown-code-background);
    border-radius: 3px;
  }

  .markdown-body pre {
    word-wrap: normal;
  }

  .markdown-body pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .markdown-body .highlight {
    margin-bottom: 16px;
  }

  .markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .markdown-body .highlight pre,
  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background: var(--markdown-secondary-background);
    border-radius: 3px;
    border: 1px solid var(--markdown-divider-color);
  }

  .markdown-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: initial;
    border: 0;
  }

  .markdown-body .commit-tease-sha {
    display: inline-block;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 90%;
    color: #444d56;
  }

  .markdown-body .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .markdown-body .blob-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .markdown-body .blob-wrapper-embedded {
    max-height: 240px;
    overflow-y: auto;
  }

  .markdown-body .blob-num {
    width: 1%;
    min-width: 50px;
    padding-right: 10px;
    padding-left: 10px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    line-height: 20px;
    color: rgba(27, 31, 35, 0.3);
    text-align: right;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .markdown-body .blob-num:hover {
    color: rgba(27, 31, 35, 0.6);
  }

  .markdown-body .blob-num:before {
    content: attr(data-line-number);
  }

  .markdown-body .blob-code {
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 20px;
    vertical-align: top;
  }

  .markdown-body .blob-code-inner {
    overflow: visible;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
  }

  .markdown-body .pl-token.active,
  .markdown-body .pl-token:hover {
    cursor: pointer;
    background: #ffea7f;
  }

  .markdown-body :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .markdown-body .select-menu-item input[type='radio']:not(:checked) + .octicon-check,
  .markdown-body .select-menu-item input[type='radio']:not(:checked) + .octicon-circle-slash {
    visibility: hidden;
  }

  .markdown-body .pl-7 {
    padding-left: 48px !important;
  }

  .markdown-body .pl-8 {
    padding-left: 64px !important;
  }

  .markdown-body .pl-9 {
    padding-left: 80px !important;
  }

  .markdown-body .pl-10 {
    padding-left: 96px !important;
  }

  .markdown-body .pl-11 {
    padding-left: 112px !important;
  }

  .markdown-body .pl-12 {
    padding-left: 128px !important;
  }

  .markdown-body .tab-size[data-tab-size='1'] {
    -moz-tab-size: 1;
    tab-size: 1;
  }

  .markdown-body .tab-size[data-tab-size='2'] {
    -moz-tab-size: 2;
    tab-size: 2;
  }

  .markdown-body .tab-size[data-tab-size='3'] {
    -moz-tab-size: 3;
    tab-size: 3;
  }

  .markdown-body .tab-size[data-tab-size='4'] {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  .markdown-body .tab-size[data-tab-size='5'] {
    -moz-tab-size: 5;
    tab-size: 5;
  }

  .markdown-body .tab-size[data-tab-size='6'] {
    -moz-tab-size: 6;
    tab-size: 6;
  }

  .markdown-body .tab-size[data-tab-size='7'] {
    -moz-tab-size: 7;
    tab-size: 7;
  }

  .markdown-body .tab-size[data-tab-size='8'] {
    -moz-tab-size: 8;
    tab-size: 8;
  }

  .markdown-body .tab-size[data-tab-size='9'] {
    -moz-tab-size: 9;
    tab-size: 9;
  }

  .markdown-body .tab-size[data-tab-size='10'] {
    -moz-tab-size: 10;
    tab-size: 10;
  }

  .markdown-body .tab-size[data-tab-size='11'] {
    -moz-tab-size: 11;
    tab-size: 11;
  }

  .markdown-body .tab-size[data-tab-size='12'] {
    -moz-tab-size: 12;
    tab-size: 12;
  }

  .markdown-body .task-list-item {
    list-style-type: none;
  }

  .markdown-body .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .markdown-body .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }
`],Uo=rt`
/*
Monokai style - ported by Luigi Maselli - http://grigio.org
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #272822; color: #ddd;
}

.hljs-tag,
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-strong,
.hljs-name {
  color: #f92672;
}

.hljs-code {
  color: #66d9ef;
}

.hljs-class .hljs-title {
  color: white;
}

.hljs-attribute,
.hljs-symbol,
.hljs-regexp,
.hljs-link {
  color: #bf79db;
}

.hljs-string,
.hljs-bullet,
.hljs-subst,
.hljs-title,
.hljs-section,
.hljs-emphasis,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #a6e22e;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-selector-id {
  font-weight: bold;
}
`;Ro.registerLanguage("yaml",(function(t){var e={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[t.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[{className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!"+t.UNDERSCORE_IDENT_RE},{className:"type",begin:"!!"+t.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+t.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+t.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"\\-(?=[ ]|$)",relevance:0},t.HASH_COMMENT_MODE,{beginKeywords:"true false yes no null",keywords:{literal:"true false yes no null"}},{className:"number",begin:t.C_NUMBER_RE+"\\b"},e]}})),Ro.registerLanguage("css",(function(t){var e={begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,t.CSS_NUMBER_MODE]}]},t.CSS_NUMBER_MODE,t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,t.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[t.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",illegal:/:/,returnBegin:!0,contains:[{className:"keyword",begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,className:"attribute"},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,t.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[t.C_BLOCK_COMMENT_MODE,e]}]}})),Ro.registerLanguage("js",Bo),Ro.registerLanguage("javascript",Bo),Ro.registerLanguage("md",Do),Ro.registerLanguage("markdown",Do),Ro.registerLanguage("jinja",$o),Ro.registerLanguage("django",$o);const Yo=Ro,Ko=LC;Ko.setOptions({highlight:function(t,e){return e&&Yo.getLanguage(e)?Yo.highlight(e,t,!0).value:Yo.highlightAuto(t).value},breaks:!0,gfm:!0,tables:!0,langPrefix:""});class Wo{static html(t,e={}){if(t.includes("---\n")){var i=t.split("---\n");t=i.slice(2).join("---\n")}return t=t.replace(/\:\w+:/g,t=>Nn.emojify(t)),O`
      <!-- prettier-ignore -->
      <style>${qo} ${Uo}</style>
      <div class="markdown-body">
        ${Fo(Ko(t,e))}
      </div>
    `}static settings(t){var e={};return t.includes("---\n")&&3===t.split("---\n").length&&(e=Io.parse(t.split("---\n")[1])),e}}let Qo=class extends dt{render(){const t=Wo.html(this.content.content_html);return O`
      <paper-card>
        <div class="card-content">
          ${t}
        </div>
      </paper-card>
    `}static get styles(){return rt`
      paper-card {
        position: relative;
        width: 100%;
        height: fit-content;
        border-radius: 3px;
        background: var(--card-background);
      }
    `}};t([at()],Qo.prototype,"content",void 0),Qo=t([it("docs-card")],Qo);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Go=ZV({_template:YV`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){Go.instance||(Go.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(t){this._text="",this.async((function(){this._text=t}),100)},_onIronAnnounce:function(t){t.detail&&t.detail.text&&this.announce(t.detail.text)}});Go.instance=null,Go.requestAvailability=function(){Go.instance||(Go.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(Go.instance)};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let Jo=null;const Xo={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){Jo=new Ma({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return Jo&&Jo.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ZV({_template:YV`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[Xo],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){Go.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=fV(this).observeNodes(function(t){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(fV(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var t;if(this.allowedPattern)t=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":t=/[0-9.,e-]/}return t},_bindValueChanged:function(t,e){e&&(void 0===t?e.value=null:t!==e.value&&(this.inputElement.value=t),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:t}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(t){var e=8==t.keyCode||9==t.keyCode||13==t.keyCode||27==t.keyCode,i=19==t.keyCode||20==t.keyCode||45==t.keyCode||46==t.keyCode||144==t.keyCode||145==t.keyCode||t.keyCode>32&&t.keyCode<41||t.keyCode>111&&t.keyCode<124;return!(e||0==t.charCode&&i)},_onKeypress:function(t){if(this.allowedPattern||"number"===this.inputElement.type){var e=this._patternRegExp;if(e&&!(t.metaKey||t.ctrlKey||t.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(t.charCode);this._isPrintable(t)&&!e.test(i)&&(t.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var t=this._patternRegExp;if(!t)return!0;for(var e=0;e<this.inputElement.value.length;e++)if(!t.test(this.inputElement.value[e]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var t=this.inputElement.checkValidity();return t&&(this.required&&""===this.bindValue?t=!1:this.hasValidator()&&(t=Xo.validate.call(this,this.bindValue))),this.invalid=!t,this.fire("iron-input-validate"),t},_announceInvalidCharacter:function(t){this.fire("iron-announce",{text:t})},_computeValue:function(t){return t}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const tr={attached:function(){this.fire("addon-attached")},update:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ZV({_template:YV`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[tr],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const er=YV`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;er.setAttribute("style","display: none;"),document.head.appendChild(er.content),ZV({_template:YV`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return ii(this.attrForValue)},get _inputElement(){return fV(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;-1===this._addons.indexOf(e)&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===e.value||""===e.value)||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||0===e||"number"===t.type&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){var e;this.autoValidate&&t&&(e=t.validate?t.validate(this._inputElementValue):t.checkValidity(),this.invalid=!e);this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,H,V){var a="input-content";if(t)V&&(a+=" label-is-hidden"),H&&(a+=" is-invalid");else{var C=this.querySelector("label");e||V?(a+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",H?a+=" is-invalid":i&&(a+=" label-is-highlighted")):(C&&(this.$.labelAndInputContainer.style.position="relative"),H&&(a+=" is-invalid"))}return i&&(a+=" focused"),a},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[tr],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ir={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}},Hr={NextLabelID:1,NextAddonID:1,NextInputID:1},Vr={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!KV&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t=t?t+" "+e:e},_onAddonAttached:function(t){var e=fV(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+Hr.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){pa._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(e){this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t,e=fV(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+Hr.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+Hr.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement;t instanceof HTMLElement&&t!==document.body&&t!==document.documentElement||this._focusableElement.focus()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({is:"paper-input",_template:YV`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[[pa,Sa,Vr],ir],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ar={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var t=fV(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function(){void 0===this._isRTL&&(this._isRTL="rtl"==window.getComputedStyle(this).direction),this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==t.top?"top":"auto"!==t.bottom?"bottom":null,horizontally:"auto"!==t.left?"left":"auto"!==t.right?"right":null},sizedBy:{height:"none"!==e.maxHeight,width:"none"!==e.maxWidth,minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto),H=this._fitInfo.margin,V={width:t.width+H.left+H.right,height:t.height+H.top+H.bottom},a=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,V,t,e,i),C=a.left+H.left,n=a.top+H.top,o=Math.min(i.right-H.right,C+t.width),r=Math.min(i.bottom-H.bottom,n+t.height);C=Math.max(i.left+H.left,Math.min(C,o-this._fitInfo.sizedBy.minWidth)),n=Math.max(i.top+H.top,Math.min(n,r-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(o-C,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(r-n,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=C-t.left+"px",this.style.top=n-t.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,H,V){this.__sizeDimension(t,e,i,H,V)},__sizeDimension:function(t,e,i,H,V){var a=this._fitInfo,C=this.__getNormalizedRect(this.fitInto),n="Width"===V?C.width:C.height,o=e===H,r=o?n-t[H]:t[i],L=a.margin[o?i:H],d="offset"+V,s=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+V]=n-L-r-s+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!t.vertically||!t.horizontally){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var H=i.top-e.top+(i.height-e.height)/2;this.style.top=H+"px"}if(!t.horizontally){var V=i.left-e.left+(i.width-e.width)/2;this.style.left=V+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var H=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),V=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(H)*e.width+Math.abs(V)*e.height},__getPosition:function(t,e,i,H,V,a){var C,n=[{verticalAlign:"top",horizontalAlign:"left",top:V.top+this.verticalOffset,left:V.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:V.top+this.verticalOffset,left:V.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:V.bottom-i.height-this.verticalOffset,left:V.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:V.bottom-i.height-this.verticalOffset,left:V.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var o=0,r=n.length;o<r;o++){var L={};for(var d in n[o])L[d]=n[o][d];n.push(L)}n[0].top=n[1].top+=V.height,n[2].top=n[3].top-=V.height,n[4].left=n[6].left+=V.width,n[5].left=n[7].left-=V.width}e="auto"===e?null:e,(t="auto"===t?null:t)&&"center"!==t||(n.push({verticalAlign:"top",horizontalAlign:"center",top:V.top+this.verticalOffset+(this.noOverlap?V.height:0),left:V.left-H.width/2+V.width/2+this.horizontalOffset}),n.push({verticalAlign:"bottom",horizontalAlign:"center",top:V.bottom-i.height-this.verticalOffset-(this.noOverlap?V.height:0),left:V.left-H.width/2+V.width/2+this.horizontalOffset})),e&&"middle"!==e||(n.push({verticalAlign:"middle",horizontalAlign:"left",top:V.top-H.height/2+V.height/2+this.verticalOffset,left:V.left+this.horizontalOffset+(this.noOverlap?V.width:0)}),n.push({verticalAlign:"middle",horizontalAlign:"right",top:V.top-H.height/2+V.height/2+this.verticalOffset,left:V.right-i.width-this.horizontalOffset-(this.noOverlap?V.width:0)})),"middle"===e&&"center"===t&&n.push({verticalAlign:"middle",horizontalAlign:"center",top:V.top-H.height/2+V.height/2+this.verticalOffset,left:V.left-H.width/2+V.width/2+this.horizontalOffset});for(o=0;o<n.length;o++){var s=n[o],l=s.verticalAlign===e,M=s.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&l&&M){C=s;break}var h=(!e||l)&&(!t||M);if(this.dynamicAlign||h){if(s.offscreenArea=this.__getOffscreenArea(s,i,a),0===s.offscreenArea&&h){C=s;break}C=C||s;var A=s.offscreenArea-C.offscreenArea;(A<0||0===A&&(l||M))&&(C=s)}}return C}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Cr=Element.prototype,nr=Cr.matches||Cr.matchesSelector||Cr.mozMatchesSelector||Cr.msMatchesSelector||Cr.oMatchesSelector||Cr.webkitMatchesSelector;const or={getTabbableNodes:function(t){var e=[];return this._collectTabbableNodes(t,e)?this._sortByTabIndex(e):e},isFocusable:function(t){return nr.call(t,"input, select, textarea, button, object")?nr.call(t,":not([disabled])"):nr.call(t,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(t){return this.isFocusable(t)&&nr.call(t,':not([tabindex="-1"])')&&this._isVisible(t)},_normalizedTabIndex:function(t){if(this.isFocusable(t)){var e=t.getAttribute("tabindex")||0;return Number(e)}return-1},_collectTabbableNodes:function(t,e){if(t.nodeType!==Node.ELEMENT_NODE||!this._isVisible(t))return!1;var i,H=t,V=this._normalizedTabIndex(H),a=V>0;V>=0&&e.push(H),i="content"===H.localName||"slot"===H.localName?fV(H).getDistributedNodes():fV(H.root||H).children;for(var C=0;C<i.length;C++)a=this._collectTabbableNodes(i[C],e)||a;return a},_isVisible:function(t){var e=t.style;return"hidden"!==e.visibility&&"none"!==e.display&&("hidden"!==(e=window.getComputedStyle(t)).visibility&&"none"!==e.display)},_sortByTabIndex:function(t){var e=t.length;if(e<2)return t;var i=Math.ceil(e/2),H=this._sortByTabIndex(t.slice(0,i)),V=this._sortByTabIndex(t.slice(i));return this._mergeSortByTabIndex(H,V)},_mergeSortByTabIndex:function(t,e){for(var i=[];t.length>0&&e.length>0;)this._hasLowerTabOrder(t[0],e[0])?i.push(e.shift()):i.push(t.shift());return i.concat(t,e)},_hasLowerTabOrder:function(t,e){var i=Math.max(t.tabIndex,0),H=Math.max(e.tabIndex,0);return 0===i||0===H?H>i:i>H}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ZV({_template:YV`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&fV(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||fV(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);"0s"!==e.transitionDuration&&0!=e.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const rr=function(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,$H(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};rr.prototype={constructor:rr,get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement},get deepActiveElement(){var t=document.activeElement;for(t&&t instanceof Element!=!1||(t=document.body);t.root&&fV(t.root).activeElement;)t=fV(t.root).activeElement;return t},_bringOverlayAtIndexToFront:function(t){var e=this._overlays[t];if(e){var i=this._overlays.length-1,H=this._overlays[i];if(H&&this._shouldBeBehindOverlay(e,H)&&i--,!(t>=i)){var V=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(e)<=V&&this._applyOverlayZ(e,V);t<i;)this._overlays[t]=this._overlays[t+1],t++;this._overlays[i]=e}}},addOrRemoveOverlay:function(t){t.opened?this.addOverlay(t):this.removeOverlay(t)},addOverlay:function(t){var e=this._overlays.indexOf(t);if(e>=0)return this._bringOverlayAtIndexToFront(e),void this.trackBackdrop();var i=this._overlays.length,H=this._overlays[i-1],V=Math.max(this._getZ(H),this._minimumZ),a=this._getZ(t);if(H&&this._shouldBeBehindOverlay(t,H)){this._applyOverlayZ(H,V),i--;var C=this._overlays[i-1];V=Math.max(this._getZ(C),this._minimumZ)}a<=V&&this._applyOverlayZ(t,V),this._overlays.splice(i,0,t),this.trackBackdrop()},removeOverlay:function(t){var e=this._overlays.indexOf(t);-1!==e&&(this._overlays.splice(e,1),this.trackBackdrop())},currentOverlay:function(){var t=this._overlays.length-1;return this._overlays[t]},currentOverlayZ:function(){return this._getZ(this.currentOverlay())},ensureMinimumZ:function(t){this._minimumZ=Math.max(this._minimumZ,t)},focusOverlay:function(){var t=this.currentOverlay();t&&t._applyFocus()},trackBackdrop:function(){var t=this._overlayWithBackdrop();(t||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(t)-1,this.backdropElement.opened=!!t,this.backdropElement.prepare())},getBackdrops:function(){for(var t=[],e=0;e<this._overlays.length;e++)this._overlays[e].withBackdrop&&t.push(this._overlays[e]);return t},backdropZ:function(){return this._getZ(this._overlayWithBackdrop())-1},_overlayWithBackdrop:function(){for(var t=this._overlays.length-1;t>=0;t--)if(this._overlays[t].withBackdrop)return this._overlays[t]},_getZ:function(t){var e=this._minimumZ;if(t){var i=Number(t.style.zIndex||window.getComputedStyle(t).zIndex);i==i&&(e=i)}return e},_setZ:function(t,e){t.style.zIndex=e},_applyOverlayZ:function(t,e){this._setZ(t,e+2)},_overlayInPath:function(t){t=t||[];for(var e=0;e<t.length;e++)if(t[e]._manager===this)return t[e]},_onCaptureClick:function(t){var e=this._overlays.length-1;if(-1!==e)for(var i,H=fV(t).path;(i=this._overlays[e])&&this._overlayInPath(H)!==i&&(i._onCaptureClick(t),i.allowClickThrough);)e--},_onCaptureFocus:function(t){var e=this.currentOverlay();e&&e._onCaptureFocus(t)},_onCaptureKeyDown:function(t){var e=this.currentOverlay();e&&(Sa.keyboardEventMatchesKeys(t,"esc")?e._onCaptureEsc(t):Sa.keyboardEventMatchesKeys(t,"tab")&&e._onCaptureTab(t))},_shouldBeBehindOverlay:function(t,e){return!t.alwaysOnTop&&e.alwaysOnTop}};const Lr=new rr;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var dr,sr,lr={pageX:0,pageY:0},Mr=null,hr=[],Ar=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function gr(t){cr.indexOf(t)>=0||(0===cr.length&&function(){dr=dr||ur.bind(void 0);for(var t=0,e=Ar.length;t<e;t++)document.addEventListener(Ar[t],dr,{capture:!0,passive:!1})}(),cr.push(t),sr=cr[cr.length-1])}function pr(t){var e=cr.indexOf(t);-1!==e&&(cr.splice(e,1),sr=cr[cr.length-1],0===cr.length&&function(){for(var t=0,e=Ar.length;t<e;t++)document.removeEventListener(Ar[t],dr,{capture:!0,passive:!1})}())}const cr=[];function ur(t){if(t.cancelable&&function(t){var e=fV(t).rootTarget;"touchmove"!==t.type&&Mr!==e&&(Mr=e,hr=function(t){for(var e=[],i=t.indexOf(sr),H=0;H<=i;H++)if(t[H].nodeType===Node.ELEMENT_NODE){var V=t[H],a=V.style;"scroll"!==a.overflow&&"auto"!==a.overflow&&(a=window.getComputedStyle(V)),"scroll"!==a.overflow&&"auto"!==a.overflow||e.push(V)}return e}(fV(t).path));if(!hr.length)return!0;if("touchstart"===t.type)return!1;var i=function(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if("deltaX"in t);else if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=1===t.axis?t.detail:0,e.deltaY=2===t.axis?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=lr.pageX-i.pageX,e.deltaY=lr.pageY-i.pageY}return e}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/(t);return!function(t,e,i){if(!e&&!i)return;for(var H=Math.abs(i)>=Math.abs(e),V=0;V<t.length;V++){var a=t[V];if(H?i<0?a.scrollTop>0:a.scrollTop<a.scrollHeight-a.clientHeight:e<0?a.scrollLeft>0:a.scrollLeft<a.scrollWidth-a.clientWidth)return a}}(hr,i.deltaX,i.deltaY)}(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];lr.pageX=e.pageX,lr.pageY=e.pageY}}const fr={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:Lr},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||fV(this).querySelector("[autofocus]")||this},get _focusableNodes(){return or.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=fV(this).observeNodes(this._onNodesChange)},detached:function(){for(var t in fV(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[t]&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){this.fire("iron-overlay-canceled",t,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||fV(this).deepContains(t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=fV(t).path;-1===e.indexOf(this)?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,H=e?this.__lastFocusableNode:this.__firstFocusableNode,V=!1;if(i===H)V=!0;else{var a=this._manager.deepActiveElement;V=a===i||a===this}V&&(t.preventDefault(),this._focusedChild=H,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;null!==i[t]&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame(function(){i[t]=null,e.call(this)}.bind(this))},__updateScrollObservers:function(t,e,i){t&&e&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),gr(this)),this.__addScrollListeners()):(pr(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],fe)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(t){t.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return"lock"===t||"refit"===t||"cancel"===t},__onCaptureScroll:function(t){if(!(this.__isAnimating||fV(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[pa,Sa,[ar,oa,fr],[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){var H;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(H=t?this.animationConfig[t]:this.animationConfig,Array.isArray(H)||(H=[H]),H)for(var V,a=0;V=H[a];a++)if(V.animatable)V.animatable._getAnimationConfigRecursive(V.type||t,e,i);else if(V.id){var C=e[V.id];C?(C.isClone||(e[V.id]=this._cloneConfig(C),C=e[V.id]),this._copyProperties(C,V)):e[V.id]=V}else i.push(V)},getAnimationConfig:function(t){var e={},i=[];for(var H in this._getAnimationConfigRecursive(t,e,i),e)i.push(e[H]);return i}},{_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let e,H=0;e=t[H];H++){let t=document.createElement(e.name);if(t.isNeonAnimation){let H=null;t.configure||(t.configure=function(t){return null}),H=t.configure(e),i.push({result:H,config:e,neonAnimation:t})}else console.warn(this.is+":",e.name,"not found!")}for(var H=0;H<i.length;H++){let t=i[H].result,V=i[H].config,a=i[H].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(e){t=null,console.warn("Couldnt play","(",V.name,").",e)}t&&e.push({neonAnimation:a,config:V,animation:t})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if("finished"!=t[i].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var H=this._configureAnimations(i);if(0!=H.length){this._active[t]=H;for(var V=0;V<H.length;V++)H[V].animation.onfinish=function(){this._shouldComplete(H)&&(this._complete(H),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}}]],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=fV(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),fr._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):fr._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):fr._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():fr._applyFocus.apply(this,arguments)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const mr={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var H,V={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],a=0;H=V[a];a++)t.style[H]=i;t.style[e]=i},complete:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ZV({is:"fade-in-animation",behaviors:[mr],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({is:"fade-out-animation",behaviors:[mr],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({is:"paper-menu-grow-height-animation",behaviors:[mr],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this._effect=new KeyframeEffect(e,[{height:i/2+"px"},{height:i+"px"}],this.timingFromConfig(t)),this._effect}}),ZV({is:"paper-menu-grow-width-animation",behaviors:[mr],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i/2+"px"},{width:i+"px"}],this.timingFromConfig(t)),this._effect}}),ZV({is:"paper-menu-shrink-width-animation",behaviors:[mr],configure:function(t){var e=t.node,i=e.getBoundingClientRect().width;return this._effect=new KeyframeEffect(e,[{width:i+"px"},{width:i-i/20+"px"}],this.timingFromConfig(t)),this._effect}}),ZV({is:"paper-menu-shrink-height-animation",behaviors:[mr],configure:function(t){var e=t.node,i=e.getBoundingClientRect().height;return this.setPrefixedProperty(e,"transformOrigin","0 0"),this._effect=new KeyframeEffect(e,[{height:i+"px",transform:"translateY(0)"},{height:i/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(t)),this._effect}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var _r={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const br=ZV({_template:YV`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[Sa,pa],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:_r.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:_r.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:_r.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var t=fV(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},toggle:function(){this.opened?this.close():this.open()},open:function(){this.disabled||this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(t){this.ignoreSelect||this.close()},_onIronActivate:function(t){this.closeOnActivate&&this.close()},_openedChanged:function(t,e){t?(this._dropdownContent=this.contentElement,this.fire("paper-dropdown-open")):null!=e&&this.fire("paper-dropdown-close")},_disabledChanged:function(t){pa._disabledChanged.apply(this,arguments),t&&this.opened&&this.close()},__onIronOverlayCanceled:function(t){var e=t.detail,i=this.$.trigger;fV(e).path.indexOf(i)>-1&&t.preventDefault()}});Object.keys(_r).forEach((function(t){br[t]=_r[t]}));
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const vr=document.createElement("template");vr.setAttribute("style","display: none;"),vr.innerHTML='<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(vr.content);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const yr=document.createElement("template");yr.setAttribute("style","display: none;"),yr.innerHTML='<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(yr.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[Ea,pa,ir,Xo],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var t=this.contentElement;t&&t.selectedItem&&this._setSelectedItem(t.selectedItem)},get contentElement(){for(var t=fV(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(t){this._setSelectedItem(t.detail.item)},_onIronDeselect:function(t){this._setSelectedItem(null)},_onTap:function(t){DH(t)===this&&this.open()},_selectedItemChanged:function(t){var e="";e=t?t.label||t.getAttribute("label")||t.textContent.trim():"",this.value=e,this._setSelectedItemLabel(e)},_computeMenuVerticalOffset:function(t,e){return e||(t?-4:8)},_getValidity:function(t){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var t=this.opened?"true":"false",e=this.contentElement;e&&e.setAttribute("aria-expanded",t)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
ZV({_template:YV`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[Ua],hostAttributes:{role:"listbox"}});let Zr=class extends dt{render(){return O`
      <paper-menu-button
        no-animations
        horizontal-align="right"
        role="group"
        aria-haspopup="true"
        vertical-align="top"
        aria-disabled="false"
      >
        <paper-icon-button icon="icons:more-vert" slot="dropdown-trigger" role="button"></paper-icon-button>
        <paper-listbox slot="dropdown-content" role="listbox" tabindex="0">
          <paper-item @click=${this.editOnGithub}>
            Edit this page on GitHub
          </paper-item>
        </paper-listbox>
      </paper-menu-button>
    `}editOnGithub(){window.open(`${Ga}/edit/${Ja}/docs/${this.category}/${this.page}.md`,"_blank")}static get styles(){return[rt`
        paper-menu-button {
          float: right;
        }

        paper-item {
          cursor: pointer;
        }
      `]}};t([at()],Zr.prototype,"category",void 0),t([at()],Zr.prototype,"page",void 0),Zr=t([it("docs-dot-menu")],Zr);let wr=class extends dt{constructor(){super(...arguments),this.search=!1,this.searchterm=""}render(){return O`
      <div class="search ${this.search?"":"collapse fade"}">
        ${this.search?O`
              <input @input=${this.Search} type="text" class="searchbox" autofocus />
            `:""}
      </div>
      <iron-icon @click=${this.toggleSearch} class="icon" icon="icons:search"></iron-icon>
      ${this.searchterm.length?O`
            <paper-card class="result-container">
              <div class="result">
                <p>${Wo.html("## Search results:")}</p>
                ${Object.entries(this.docs).map(t=>t[1].map(t=>t.content_html.toLowerCase().includes(this.searchterm.toLowerCase())?O`
                        <a class="result-item" href="${t.url}" @click=${this.searchClick}>${t.title}</a></br>
                      `:void 0))}
              </div>
            </paper-card>
          `:""}
    `}firstUpdated(){document.addEventListener("click",(t=>{if(!this.search)return;const e=t.path||t.composedPath&&t.composedPath(),i=["APP-HEADER-LAYOUT","APP-TOOLBAR","DOCS-CARD","APP-HEADER"];for(const t of e){if("DOCS-SEARCH"===t.nodeName)return;if(i.indexOf(t.nodeName)>-1)break}this.search=!1}).bind(this))}updated(){this.search?document.querySelector("docs-main").shadowRoot.querySelector("docs-search").shadowRoot.querySelector("input").focus():this.searchterm=""}toggleSearch(){this.search=!this.search}searchClick(t){window.open(t.composedPath()[0].href,"_self"),window.location.reload()}Search(t){this.searchterm=t.composedPath()[0].value}static get styles(){return[VC,rt`
        .result-item {
          cursor: pointer;
          text-decoration: none;
          color: var(--primary-color);
        }

        .result-container {
          position: absolute;
          top: 43px;
          right: 27px;
          width: 278px;
          background: var(--search-results-background);
          color: var(--text-color);
          z-index: 1337;
          border-radius: 20px;
          border: 1px solid var(--divider-color);
        }

        .result {
          padding-right: 16px;
          padding-left: 16px;
          padding-bottom: 16px;
          height: fit-content;
        }

        .search {
          width: 200px;
          background: var(--search-input-background);
          z-index: 2;
          border-radius: 20px;
          margin-right: 8px;
          height: 25px;
          opacity: 1;
          overflow: hidden;
          padding-bottom: 6px;
        }

        .collapse {
          width: 0px;
        }

        .fade {
          opacity: 0;
        }

        .searchbox {
          width: 90%;
          margin: -2px 5px 5px 10px;
          border-width: 0;
          outline: none;
          opacity: 1;
        }

        .icon {
          min-width: 24px;
        }

        paper-card,
        .search {
          transition: all 0.4s ease-in-out;
        }

        .search input {
          background: var(--search-input-background);
          color: var(--search-input-text-color);
        }

        .result-item {
          color: var(--search-result-item-color);
        }
      <app-header-layout has-scrolling-region fullbleed>
        <div class="sidebar ${this.expanded?"expanded":""}">
          <div class="menu" @click=${this.toggleSidebar}>
            <paper-item>
              <iron-icon class="icon" icon=${this.expanded?"mdi:menu-open":"mdi:menu"}></iron-icon>
              <span>${"MENU"}</span>
            </paper-item>
          </div>
          <div class="sidebarTopItems">
            ${Xa.map(t=>O`
                <paper-item
                  @click=${this.changeCategory}
                  title=${t.category}
                  class="${this.category===t.category?"selected":""}"
                >
                  <iron-icon
                    class="icon ${this.category===t.category?"selected":""}"
                    icon=${t.icon||"mdi:page-next"}
                  ></iron-icon>
                  <span class="item-text">${t.category}</span>
                </paper-item>
              `)}
          </div>

          <div class="sidebarBottomItems">
            ${tC.map(t=>O`
                <paper-item
                  @click=${this.changeCategory}
                  title=${t.category}
                  class="${this.category===t.category?"selected":""}"
                >
                  <iron-icon
                    class="icon ${this.category===t.category?"selected":""}"
                    icon=${t.icon||"mdi:page-next"}
                  ></iron-icon>
                  <span class="item-text">${t.category}</span>
                </paper-item>
              `)}
            <div class="divider"></div>
            ${eC.map(t=>O`
                <a class="sidebarLinkItems" href="${t.link}" target="_blank">
                  <paper-item title=${t.caption}>
                    <iron-icon class="icon" icon=${t.icon||"icons:open-in-new"}></iron-icon>
                    <span class="item-text">${t.caption}</span>
                  </paper-item>
                </a>
              `)}
          </div>
          <div class="footer">
            <a href="" title="To be released soon!" style=${this.expanded?"":"opacity: 0;"}
              >Docs site by @ludeeus & @maykar</a
            >
          </div>
        </div>

        <app-header class="${this.expanded?"sidebarExpanded":""}" fixed slot="header">
          <app-toolbar scroll="false">
            <div main-title class="main-title">${Wa}</div>
            <docs-search .docs=${this.docs}></docs-search>
            <docs-dot-menu .category=${this.category} .page=${this.page}></docs-dot-menu>
          </app-toolbar>
          <paper-tabs
            style=${this.tabs?"":"display: none;"}
            .selected=${this.page}
            @iron-activate=${this.changePage}
            attr-for-selected="page-name"
            scrollable
          >
            ${this.docs[this.category].length>1?O`
                  ${this.docs[this.category].sort((t,e)=>t.index>e.index?1:-1).map(t=>O`
                        <paper-tab page-name="${t.id}">${t.title}</paper-tab>
                      `)}
                `:""}
          </paper-tabs>
        </app-header>
        <div class="view ${this.expanded?"sidebarExpanded":""} ${this.tabs?"":"no-tabs"}">
          <div class="content">
            ${this.docs[this.category].map(t=>t.id===this.page?O`
                  <docs-card .content=${t}> </docs-card>
                `:void 0)}
          </div>
        </div>
      </app-header-layout>
    `)}static get styles(){return VC}};t([at()],kr.prototype,"docs",void 0),t([at()],kr.prototype,"page",void 0),t([at()],kr.prototype,"category",void 0),t([at()],kr.prototype,"expanded",void 0),t([at()],kr.prototype,"tabs",void 0),kr=t([it("docs-main")],kr);export{kr as Main};