# @marcospatricio/smart-string

Utilities for manipulating strings in a clean, reliable and framework-agnostic way.

## Install

```sh
pnpm add @marcospatricio/smart-string

import { slugify, capitalize } from "@marcospatricio/smart-string";

slugify("Olá Mundo");
// → "ola-mundo"

capitalize("mARcoS");
// → "Marcos"

Methods
slugify(text)

Converts text into a URL-friendly slug.

truncate(text, max)

Cuts long strings with ellipsis.

removeAccents(text)

Removes diacritics from characters.

camelCase(text)

Converts to camelCase.

kebabCase(text)

Converts to kebab-case.