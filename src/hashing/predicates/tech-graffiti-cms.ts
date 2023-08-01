import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/graffiti\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Graffiti CMS ([^"]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
