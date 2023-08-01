import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.whatfix\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_wfx_add_logger'),
    matchRegexInInnerHTML('script', '_wfx_settings'),
    matchRegexInInnerHTML('script', 'wfx_is_playing__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
