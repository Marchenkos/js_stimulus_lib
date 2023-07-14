import{Controller as e}from"@hotwired/stimulus";import{get as t}from"@rails/request.js";class a extends e{connect(){if(!this.hasParentTarget)return;if(!this.hasCountTarget)return;const e=this.parentTarget,t=this.setSelectedCount.bind(this);this.childTargets.forEach(a=>{a.addEventListener("change",s=>{a.checked||(e.checked=!1),t()})})}matchAll(e){e.preventDefault(),this.childTargets.forEach(t=>{t.checked=e.currentTarget.checked}),this.setSelectedCount(!!e.currentTarget.checked)}deselectAll(e){e.preventDefault(),this.childTargets.forEach(e=>{e.checked=!1}),this.setSelectedCount()}selectAll(e){e.preventDefault(),this.childTargets.forEach(e=>{e.checked=!0}),this.setSelectedCount()}setSelectedCount(e=!1){const t=Array.from(this.childTargets).filter(e=>e.checked).length;this.countTarget.innerHTML=(e?this.totalValue:t).toLocaleString()}}a.targets=["parent","child","count"],a.values={total:Number};class s extends e{clear(e){e.preventDefault(),this.inputTargets.forEach(e=>{e.value=null}),this.element.closest("form").requestSubmit()}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},r.apply(this,arguments)}s.targets=["input"];class n extends e{async update(e){if(e instanceof KeyboardEvent&&"Enter"!==e.key)return;const t=e.target instanceof HTMLFormElement?e.target:e.target.closest("form");await t.requestSubmit()}async abort(e){e.preventDefault(),await this.requestEdit(e.target,{book_edit:"false"})}async edit(e){this.clearSelection(),await this.requestEdit(e.target,{book_edit:"true"})}async requestEdit(e,a={}){const{editUrl:s,attribute:n}=e.closest("td, th").dataset;await t(s,{query:r({},a,{book_attribute:n}),responseKind:"turbo-stream"})}clearSelection(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}tooltipTargetDisconnected(e){this.popper.destroy()}}n.targets=["tooltip","tooltipTemplate"];class i extends e{connect(){this.element.addEventListener("toggle",e=>{this.buttonTarget.setAttribute("aria-expanded",e.currentTarget.open)})}hide(e){e&&this.element.contains(e.target)||(this.buttonTarget.setAttribute("aria-expanded","false"),this.element.removeAttribute("open"))}}i.targets=["button"];class l extends e{connect(){this.childTargets.forEach(e=>e.addEventListener("toggle",e=>{e.currentTarget.open&&this.childTargets.forEach(t=>{t!=e.currentTarget&&t.removeAttribute("open")})}))}}l.targets=["child"];class c extends e{click(){this.clickTargets.forEach(e=>e.click())}}c.targets=["click"];class o extends e{connect(){this.element[this.identifier]=this}addFields(e){e.preventDefault(),e.stopPropagation();const t=e.currentTarget,a=t.dataset.fieldType,s=t.dataset.content,r=(new Date).getTime(),n=new RegExp("new_"+a,"g"),i=s.replace(n,r);t.insertAdjacentHTML("beforebegin",i)}removeFields(e){e.preventDefault(),e.stopPropagation(),e.currentTarget.closest(".fields").remove()}nestFields(e){e.preventDefault(),e.stopPropagation();const t=e.currentTarget,a=t.dataset.fieldType,s=(new Date).getTime(),r=new RegExp("new_"+a,"g"),n=t.closest(".fields").dataset.objectName,i=n.replace(/\]\[|[^-a-zA-Z0-9:.]/g,"_").replace(/_$/,"");let l=this.templateTarget.innerHTML;l=l.replace(/new_object_name\[/g,n+"["),l=l.replace(/new_object_name_/,i+"_"),l=l.replace(r,s),t.insertAdjacentHTML("beforebegin",l)}}o.targets=["template"];class d extends e{connect(){}toggle(e){const t=e.currentTarget,a=this.rowTargets.filter(e=>this.element.contains(e)),s="sr-only";"true"==t.getAttribute("aria-expanded")?(t.setAttribute("aria-expanded","false"),a.forEach(e=>e.classList.add(s))):(t.setAttribute("aria-expanded","true"),a.forEach(e=>e.classList.remove(s)))}}d.targets=["row"];class h extends e{connect(){const e=this.element.querySelector(".pagy-info b:nth-child(2)");if(e){const t=Number(e.innerText);e.innerText=t.toLocaleString()}}}h.targets=[];class u extends e{connect(){0===this.fieldTargets.length&&this.appendChild()}add(e){e.preventDefault(),this.appendChild()}remove(e){e.preventDefault(),e.stopPropagation(),e.target.closest(".fields").remove(),this.updateIndexes()}appendChild(){const e=this.fieldTarget.cloneNode(!0);e.querySelectorAll("select").forEach(e=>e.value=null),this.itemsTarget.appendChild(e),this.updateIndexes()}updateIndexes(){this.fieldTargets.forEach(e=>{const[t,a]=e.querySelectorAll("select");t.name=`q[s][${this.fieldTargets.indexOf(e)}][name]`,t.id=`q_s_[${this.fieldTargets.indexOf(e)}]_name`,a.name=`q[s][${this.fieldTargets.indexOf(e)}][dir]`,a.id=`q_s_[${this.fieldTargets.indexOf(e)}]_dir`})}clear(e){e.preventDefault(),this.element.querySelectorAll("select").forEach(e=>e.value=null),this.element.closest("form").requestSubmit()}}u.targets=["items","field"];export{a as SmartTableCheckboxSet,s as SmartTableClearable,n as SmartTableColumn,i as SmartTableDetailsPopover,l as SmartTableDetailsSet,c as SmartTableElement,o as SmartTableFilterBy,d as SmartTableGroupable,h as SmartTablePagy,u as SmartTableSortBy};
//# sourceMappingURL=index.modern.js.map
