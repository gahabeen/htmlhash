import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/popper(?:\\.min)?\\.js(?:/([0-9.]+))?\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'popperjs(?:/|-)core(?:@|-)([\\d\\.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Popper.Defaults'),
    matchRegexInInnerHTML('script', 'Popper.applyStyles'),
    matchRegexInInnerHTML('script', 'createPopper'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
