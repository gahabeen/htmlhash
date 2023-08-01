import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'koken(?:\\.js\\?([\\d.]+)|/storage)\\;version:\\1'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Koken ([\\d.]+)\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<html lang="en" class="k-source-essays k-lens-essays">'),
    matchRegex('<!--\\s+KOKEN DEBUGGING'),
    // in text

    // in css
])
