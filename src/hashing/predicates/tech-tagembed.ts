import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//widget\\.tagembed\\.com/'),
    // in dom
    matchSelector(`script[data-src*='widget.tagembed.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'TagembedWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
