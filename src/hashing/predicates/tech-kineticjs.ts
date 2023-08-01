import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'kinetic(?:-v?([\\d.]+))?(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Kinetic'),
    matchRegexInInnerHTML('script', 'Kinetic.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
