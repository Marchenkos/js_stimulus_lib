import{Controller as t}from"@hotwired/stimulus";import{get as e}from"@rails/request.js";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}var o=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.connect=function(){if(this.hasParentTarget&&this.hasCountTarget){var t=this.parentTarget,e=this.setSelectedCount.bind(this);this.childTargets.forEach(function(r){r.addEventListener("change",function(n){r.checked||(t.checked=!1),e()})})}},r.matchAll=function(t){t.preventDefault(),this.childTargets.forEach(function(e){e.checked=t.currentTarget.checked}),this.setSelectedCount(!!t.currentTarget.checked)},r.deselectAll=function(t){t.preventDefault(),this.childTargets.forEach(function(t){t.checked=!1}),this.setSelectedCount()},r.selectAll=function(t){t.preventDefault(),this.childTargets.forEach(function(t){t.checked=!0}),this.setSelectedCount()},r.setSelectedCount=function(t){void 0===t&&(t=!1);var e=Array.from(this.childTargets).filter(function(t){return t.checked}).length;this.countTarget.innerHTML=(t?this.totalValue:e).toLocaleString()},e}(t);o.targets=["parent","child","count"],o.values={total:Number};var a=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.clear=function(t){t.preventDefault(),this.inputTargets.forEach(function(t){t.value=null}),this.element.closest("form").requestSubmit()},e}(t);a.targets=["input"];var c=/*#__PURE__*/function(t){function i(){return t.apply(this,arguments)||this}n(i,t);var o=i.prototype;return o.update=function(t){try{if(t instanceof KeyboardEvent&&"Enter"!==t.key)return Promise.resolve();var e=t.target instanceof HTMLFormElement?t.target:t.target.closest("form");return Promise.resolve(e.requestSubmit()).then(function(){})}catch(t){return Promise.reject(t)}},o.abort=function(t){try{return t.preventDefault(),Promise.resolve(this.requestEdit(t.target,{book_edit:"false"})).then(function(){})}catch(t){return Promise.reject(t)}},o.edit=function(t){try{return this.clearSelection(),Promise.resolve(this.requestEdit(t.target,{book_edit:"true"})).then(function(){})}catch(t){return Promise.reject(t)}},o.requestEdit=function(t,n){void 0===n&&(n={});try{var i=t.closest("td, th").dataset;return Promise.resolve(e(i.editUrl,{query:r({},n,{book_attribute:i.attribute}),responseKind:"turbo-stream"})).then(function(){})}catch(t){return Promise.reject(t)}},o.clearSelection=function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},o.tooltipTargetDisconnected=function(t){this.popper.destroy()},i}(t);c.targets=["tooltip","tooltipTemplate"];var s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.connect=function(){var t=this;this.childTargets.forEach(function(e){return e.addEventListener("toggle",function(e){e.currentTarget.open&&t.childTargets.forEach(function(t){t!=e.currentTarget&&t.removeAttribute("open")})})})},e}(t);s.targets=["child"];var u=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.click=function(){this.clickTargets.forEach(function(t){return t.click()})},e}(t);u.targets=["click"];var l=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.connect=function(){this.element[this.identifier]=this},r.addFields=function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget,r=e.dataset.fieldType,n=e.dataset.content,i=(new Date).getTime(),o=new RegExp("new_"+r,"g"),a=n.replace(o,i);e.insertAdjacentHTML("beforebegin",a)},r.removeFields=function(t){t.preventDefault(),t.stopPropagation(),t.currentTarget.closest(".fields").remove()},r.nestFields=function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget,r=e.dataset.fieldType,n=(new Date).getTime(),i=new RegExp("new_"+r,"g"),o=e.closest(".fields").dataset.objectName,a=o.replace(/\]\[|[^-a-zA-Z0-9:.]/g,"_").replace(/_$/,""),c=this.templateTarget.innerHTML;c=(c=(c=c.replace(/new_object_name\[/g,o+"[")).replace(/new_object_name_/,a+"_")).replace(i,n),e.insertAdjacentHTML("beforebegin",c)},e}(t);l.targets=["template"];var f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.connect=function(){console.log("hello2")},r.toggle=function(t){var e=t.currentTarget,r="sr-only";"true"==e.getAttribute("data-expanded")?(e.setAttribute("data-expanded",!1),this.rowTargets.forEach(function(t){return t.classList.add(r)})):(e.setAttribute("data-expanded",!0),this.rowTargets.forEach(function(t){return t.classList.remove(r)}))},e}(t);f.targets=["row"];var h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.connect=function(){var t=this.element.querySelector(".pagy-info b:nth-child(2)");if(t){var e=Number(t.innerText);t.innerText=e.toLocaleString()}},e}(t);h.targets=[];var p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.connect=function(){0===this.fieldTargets.length&&this.appendChild()},r.add=function(t){t.preventDefault(),this.appendChild()},r.remove=function(t){t.preventDefault(),t.stopPropagation(),t.target.closest(".fields").remove(),this.updateIndexes()},r.appendChild=function(){var t=this.fieldTarget.cloneNode(!0);t.querySelectorAll("select").forEach(function(t){return t.value=null}),this.itemsTarget.appendChild(t),this.updateIndexes()},r.updateIndexes=function(){var t=this;this.fieldTargets.forEach(function(e){var r=e.querySelectorAll("select"),n=r[0],i=r[1];n.name="q[s]["+t.fieldTargets.indexOf(e)+"][name]",n.id="q_s_["+t.fieldTargets.indexOf(e)+"]_name",i.name="q[s]["+t.fieldTargets.indexOf(e)+"][dir]",i.id="q_s_["+t.fieldTargets.indexOf(e)+"]_dir"})},r.clear=function(t){t.preventDefault(),this.element.querySelectorAll("select").forEach(function(t){return t.value=null}),this.element.closest("form").requestSubmit()},e}(t);p.targets=["items","field"];export{o as SmartTableCheckboxSet,a as SmartTableClearable,c as SmartTableColumn,s as SmartTableDetailsSet,u as SmartTableElement,l as SmartTableFilterBy,f as SmartTableGroupable,h as SmartTablePagy,p as SmartTableSortBy};
//# sourceMappingURL=index.module.js.map