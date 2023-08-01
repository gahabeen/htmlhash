import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'service\\.maxymiser\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'maxy'),
    matchRegexInInnerHTML('script', 'mmsystem.getConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
