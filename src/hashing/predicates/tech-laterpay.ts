import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https?://connectormwi\\.laterpay\\.net/([0-9.]+)[a-zA-z-]*/live/[\\w-]+\\.js\\;version:\\1'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'laterpay:connector:callbacks:on_user_has_access', 'deobfuscateText'),
    // in scripts

    // in html

    // in text

    // in css
])
