declare function slugify(text: string): string;
declare function capitalize(text: string): string;
declare function truncate(text: string, max: number): string;
declare function removeAccents(text: string): string;
declare function camelCase(text: string): string;
declare function kebabCase(text: string): string;

export { camelCase, capitalize, kebabCase, removeAccents, slugify, truncate };
