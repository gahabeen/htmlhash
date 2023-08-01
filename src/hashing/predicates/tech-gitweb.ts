import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static/gitweb\\.js$'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'gitweb(?:/([\\d.]+\\d))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<!-- git web interface version ([\\d.]+)?\\;version:\\1'),
    // in text

    // in css
])
