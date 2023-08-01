import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'gumroad\\.com/js/gumroad\\.js'),
    matchRegexInAttribute('script', 'src', 'gumroad\\.com/js/gumroad-embed\\.js'),
    matchRegexInAttribute('script', 'src', 'gumroad\\.com/packs/js/'),
    // in dom
    matchSelector(`iframe[src^='https://gumroad.com/l/']`),
    // in js
    matchRegexInInnerHTML('script', 'GumroadOverlay'),
    matchRegexInInnerHTML('script', 'createGumroadOverlay'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
