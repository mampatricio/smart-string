"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  camelCase: () => camelCase,
  capitalize: () => capitalize,
  kebabCase: () => kebabCase,
  removeAccents: () => removeAccents,
  slugify: () => slugify,
  truncate: () => truncate
});
module.exports = __toCommonJS(index_exports);
function slugify(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function truncate(text, max) {
  return text.length <= max ? text : text.slice(0, max) + "...";
}
function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function camelCase(text) {
  return slugify(text).split("-").map((w, i) => i === 0 ? w : capitalize(w)).join("");
}
function kebabCase(text) {
  return slugify(text);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  camelCase,
  capitalize,
  kebabCase,
  removeAccents,
  slugify,
  truncate
});
