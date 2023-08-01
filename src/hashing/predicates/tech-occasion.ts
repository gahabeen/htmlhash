import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.getoccasion\\.com'),
    // in dom
    matchSelector(`iframe[src*='app.getoccasion.com']`),
    matchSelector(`a[href*='app.getoccasion.com']`),
    // in js
    matchRegexInInnerHTML('script', 'OCCSN.stack'),
    matchRegexInInnerHTML('script', 'occsnMerchantToken'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
