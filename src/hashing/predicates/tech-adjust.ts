import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div[data-adjust*='app.adjust.com/'], a[href*='app.adjust.com/'], a[href*='.adj.st/'], form[action*='app.adjust.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Adjust.initSdk'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
