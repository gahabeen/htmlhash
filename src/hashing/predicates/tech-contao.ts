import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/typolight.css'], link[href*='/contao.css']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Contao Open Source CMS$'),
    // in scripts

    // in html

    // in text

    // in css
])
