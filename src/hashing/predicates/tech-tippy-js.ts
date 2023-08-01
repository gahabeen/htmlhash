import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/tippy\\.js(?:@|/)?([\\d\\.]+)?\\;version:\\1'),
    // in dom
    matchSelector(`style[data-tippy-stylesheet]`),
    // in js
    matchRegexInInnerHTML('script', 'tippy.defaultProps'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
