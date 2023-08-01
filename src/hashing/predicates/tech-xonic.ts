import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'core/jslib/jquery\\.xonic\\.js\\.php'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'keywords', 'xonic-solutions'),
    // in scripts

    // in html
    matchRegex('Powered by <a href="http://www\\.xonic-solutions\\.de/index\\.php" target="_blank">xonic-solutions Shopsoftware</a>'),
    // in text

    // in css
])
