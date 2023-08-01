import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ACC.config.commonResourcePath'),
    matchRegexInInnerHTML('script', 'ACC.config.rootPath'),
    matchRegexInInnerHTML('script', 'ACC.config.themeResourcePath'),
    matchRegexInInnerHTML('script', 'getProductAttrFromHybris'),
    matchRegexInInnerHTML('script', 'getProductAvailabilityHybris'),
    matchRegexInInnerHTML('script', 'hybrisId'),
    matchRegexInInnerHTML('script', 'passLgDataToHybris'),
    matchRegexInInnerHTML('script', 'smartedit'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+/(?:sys_master|hybr|_ui/(?:.*responsive/)?(?:desktop|common(?:/images|/img|/css|ico)?))/'),
    matchRegex('<script[^>].*hybris.*.js'),
    // in text

    // in css
])
