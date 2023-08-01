import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.amocrm\\.(?:ru|com)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AMOCRM'),
    matchRegexInInnerHTML('script', 'AMO_PIXEL_CLIENT'),
    matchRegexInInnerHTML('script', 'amoFormsWidget'),
    matchRegexInInnerHTML('script', 'amoSocialButton'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
