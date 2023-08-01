import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'framerusercontent\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Framer'),
    matchRegexInInnerHTML('script', 'Framer.Animatable'),
    matchRegexInInnerHTML('script', 'Framer.version'),
    matchRegexInInnerHTML('script', '__framer_importFromPackage'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
