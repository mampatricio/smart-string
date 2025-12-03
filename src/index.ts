export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max) + "...";
}

export function removeAccents(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function camelCase(text: string): string {
  return slugify(text)
    .split("-")
    .map((w, i) => (i === 0 ? w : capitalize(w)))
    .join("");
}

export function kebabCase(text: string): string {
  return slugify(text);
}
