import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.StudioCanvas, .publish-studio-style`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^STUDIO$'),
    // in scripts

    // in html

    // in text

    // in css
])
