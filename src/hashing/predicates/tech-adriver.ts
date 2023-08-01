import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.adriver\\.ru/'),
    // in dom
    matchSelector(`link[href*='.adriver.ru'], img[src*='.adriver.ru'], iframe[src*='.adriver.ru']`),
    // in js
    matchRegexInInnerHTML('script', 'AdriverCounter'),
    matchRegexInInnerHTML('script', 'AdriverPrebid'),
    matchRegexInInnerHTML('script', 'adfoxBiddersMap.adriver'),
    matchRegexInInnerHTML('script', 'adriver'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
