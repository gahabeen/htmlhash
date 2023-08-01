import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'embedsocial\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EMBEDSOCIALHASHTAG'),
    matchRegexInInnerHTML('script', 'EmbedSocialIframeLightbox'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
