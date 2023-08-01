import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'www\\.vcita\\.com/widgets/'),
    matchRegexInAttribute('script', 'src', 'widgets\\.vcdnita\\.com/'),
    // in dom
    matchSelector(`iframe[src*='www.vcita.com/widgets/']`),
    // in js
    matchRegexInInnerHTML('script', 'LiveSite.btCheckout'),
    matchRegexInInnerHTML('script', 'Vcita'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
