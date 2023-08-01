# `htmlhash`

Calculate the hash value of HTML files and compare them for similarity.
Hash is based on the HTML structure and technologies, not the content.

```md
> This is fully experimental and still subject to have breaking changes until stable release.
```

## Prerequisites

Make sure you have the following dependencies installed:

-   Node.js
-   bun (`npm install -g bun`)

## Installation

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the command `bun` to install the required dependencies.

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
console.log(score) // 0.9998385012919897

console.log('dif', hh.differences(hash1, hash2)) // [ "tag-h2", "tag-h1" ]
```

## Predicates groups

All predicates are considered equal. Also, for clarity they've been grouped by the following prefixes:

-   `tag`: the tag name
-   `meta`: the meta related attributes
-   `attr`: the attribute name
-   `attr-id`: the id
-   `attr-class`: the classes
-   `attr-itemprop`: the itemprop attributes
-   `js`: the javascript code snippets
-   `css`: the css code snippets
-   `tech`: the detected technologies (originally based on Wappalyzer)

Think of them as a way to organize the predicates in a trackable way (and avoid duplicates).

Have ideas for more predicates? Please create an issue on the GitHub repository.

## Remaining before stable

1. Review all technologies (a lot of them are missing or should be simplified)
2. Set up tests suite
3. Add more verticals
4. Add more predicates

## License

This project is licensed under the MIT license. Please see the `LICENSE` file for more information.

## Disclaimer

This tool is provided as-is without any warranty. Use it at your own risk.

For any issues or suggestions, please create an issue on the GitHub repository.
