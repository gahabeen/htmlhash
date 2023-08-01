import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(` a[href*='.elluciancrmrecruit.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Ellucian.Recruit'),
    matchRegexInInnerHTML('script', 'ellucianAddressChooseLabel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
