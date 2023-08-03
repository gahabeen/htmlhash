# `htmlhash`

Create a hash value of a HTML file to use it for comparisons.
Hash is based on the HTML structure and technologies, not the content.

```md
> This is experimental subject to change until a stable version is released.
```


## Use cases

1. **Compare or group HTML files to find similarities** (ex: to find similar pages of a website, find similar pages of different websites, find similar websites)
2. **Compare if a HTML file is the same as a previous version**
ex: to periodically check if a website has changed
3. **Create reverse search engine to find domains by HTML hashes**

## Prerequisites

Make sure you have the following dependencies installed:

-   Node.js
-   bun (`npm install -g bun`)

## Installation

1. Clone the repository. `git clone https://github.com/gahabeen/htmlhash.git`
2. `cd htmlhash`
3. Run the command `bun` to install the required dependencies.
4. Run the command `bun example` to run the example.

## Usage

```ts
import * as hh from 'htmlhash'

const html1 = '<html><body><h1>Hello, world!</h1></body></html>'
const hash1 = hh.hash(html1)
console.log(hash1) // Z0O01Z0U08Z0Z0Z0h02Z0Z0Z0Z0h02Z0Z0Z0S04Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0J0

const html2 = '<html><body><h2>Hello, world!</h2></body></html>'
const hash2 = hh.hash(html2)
console.log(hash2) // Z0O01Z0U08Z0Z0Z0h02Z0Z0j04Z0W02v08Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z00

const score = hh.similarity(hh.toBinary(hash1), hh.toBinary(hash2))
console.log(score) // 0.9995708154506437

console.log('dif', hh.differences(hash1, hash2)) // [ "tag-h2", "tag-h1" ]
```

## Predicates groups

All predicates are considered equal. Also, for clarity they've been grouped by the following prefixes:

- `tag-`: tags
  * `tag-meta-`: meta related attributes
  * `tag-link-`: link related attributes
  * `tag-a-`: a related attributes
  * `tag-html-lang-`: html lang attributes
  * `tag-<tag>-in-<tag>`: <tag1> in another <tag2> as in [tag1] > [tag2]
- `attr-`: attribute name
  * `attr-id-`: id
  * `attr-class-`: classes
  * `attr-style-`: inline-styles attributes
  * `attr-role-`: [role](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) attributes
  * `attr-itemprop-`: [itemprop](https://www.w3.org/TR/microdata/#names:-the-itemprop-attribute) attributes
- `js-`: javascript code snippets
  * `js-array`: some array related accessors/methods
  * `js-object`: some object related accessors/methods
  * `js-document`: some document related accessors/methods

- `css-`: css code snippets
- `tech-`: detected technologies (originally based on Wappalyzer)

Think of them as a way to organize the predicates in a trackable way (and avoid duplicates).

Have ideas for more predicates? Please create an issue on the GitHub repository.

## License

This project is licensed under the MIT license. Please see the `LICENSE` file for more information.

## Disclaimer

This tool is provided as-is without any warranty. Use it at your own risk.

For any issues or suggestions, please create an issue on the GitHub repository.
