import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/modules/oney(?:/)?/views/js/front\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OneyMarketplace'),
    matchRegexInInnerHTML('script', 'isOneyActive'),
    matchRegexInInnerHTML('script', 'openOneyLayer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
