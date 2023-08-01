import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.yoomoney\\.ru/'),
    // in dom
    matchSelector(`a[href*='yoomoney.ru'][target='_blank'], iframe[src*='yoomoney.ru'], img[src*='yoomoney.ru']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
