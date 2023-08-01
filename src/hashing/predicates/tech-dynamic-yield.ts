import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn(?:-eu)?\\.dynamicyield\\.\\w+/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DY.AdDetection'),
    matchRegexInInnerHTML('script', 'DYExps.sectionConfig'),
    matchRegexInInnerHTML('script', '_dy_memStore'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
