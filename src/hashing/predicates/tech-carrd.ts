import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', "\\(\\!section\\s\\|\\|\\ssection\\.tagName\\s\\!\\=\\s\\'SECTION\\'\\)"),
    // in html

    // in text

    // in css
])
