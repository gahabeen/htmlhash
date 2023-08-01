import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.kaltura\\.(?:nordu\\.net|com)/'),
    // in dom
    matchSelector(`link[href*='.kaltura.com'], div.kaltura-zone`),
    // in js
    matchRegexInInnerHTML('script', 'Kplayer'),
    matchRegexInInnerHTML('script', 'kGetKalturaEmbedSettings'),
    matchRegexInInnerHTML('script', 'kGetKalturaPlayerList'),
    matchRegexInInnerHTML('script', 'kalturaIframeEmbed'),
    matchRegexInInnerHTML('script', 'restoreKalturaKDPCallback'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'kalturaPlayer'),
    // in html

    // in text

    // in css
])
