# `htmlhash`

Fast HTML hasher to compare and cluster HTML files.

`pnpm install htmlhash`

## Usage

```ts
import { hash, compare } from 'htmlhash'

const html1 = '<html><body><h1>Hello, world!</h1></body></html>'
const vector1 = hash(html1)
console.log(vector1) // [0, 0.293, ...]

const html2 = '<html><body><h2>Hello, world!</h2></body></html>'
const vector2 = hash(html2)
console.log(vector2) // [0.2, 0.110, ...]

const { similarity } = compare(hash1, hash2)
console.log(similarity) // 0.9995708154506437
```

## Hashers

### A. **Composition Hasher**

Hashes the HTML by the composition of the tags and their attributes.

```ts
import { HTMLCompositionHasher } from 'htmlhash';
const hasher = new HTMLCompositionHasher();
```

### B. **References Hasher**

Hashes the HTML by the ids, classes and more.

```ts
import { HTMLReferencesHasher } from 'htmlhash';
const hasher = new HTMLReferencesHasher();
```

### C. **Texts Hasher**

Hashes the HTML by the text content.

```ts
import { HTMLTextHasher } from 'htmlhash';
const hasher = new HTMLTextHasher();
```


### D. **Filenames Hasher**

Hashes the HTML by the filenames.

```ts
import { HTMLFilenamesHasher } from 'htmlhash';
const hasher = new HTMLFilenamesHasher();
```

### E. **Classes Hasher**

Hashes the HTML by the classes.

```ts
import { HTMLClassesHasher } from 'htmlhash';
const hasher = new HTMLClassesHasher();
```

### F. **Ids Hasher**

Hashes the HTML by the ids.

```ts
import { HTMLIdsHasher } from 'htmlhash';
const hasher = new HTMLIdsHasher();
```

### G. **Javascript Hasher**

Hashes the HTML by the found variables/functions as Javascript.

```ts
import { HTMLJavascriptHasher } from 'htmlhash';
const hasher = new HTMLJavascriptHasher();
```

## Use cases

1. **Compare or group HTML files to find similarities** (ex: to find similar pages of a website, find similar pages of different websites, find similar websites)
2. **Compare if a HTML file is the same as a previous version**
   ex: to periodically check if a website has changed
3. **Create reverse search engine to find domains by HTML hashes**
   ex: to find domains that have the same HTML as a given domain

## Prerequisites

Make sure you have the following dependencies installed:

-   Node.js
-   bun (`npm install -g bun`)

## Repository

1. Clone the repository. `git clone https://github.com/gahabeen/htmlhash.git`
2. `cd htmlhash`
3. Run the command `bun` to install the required dependencies.
4. Run the command `bun example` to run the example.

## License

This project is licensed under the MIT license. Please see the `LICENSE` file for more information.

## Disclaimer

This tool is provided as-is without any warranty. Use it at your own risk.

For any issues or suggestions, please create an issue on the GitHub repository.
