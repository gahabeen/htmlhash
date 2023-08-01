import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/revslider/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RS_MODULES.main.version'),
    matchRegexInInnerHTML('script', 'revapi1'),
    matchRegexInInnerHTML('script', 'revapi2'),
    matchRegexInInnerHTML('script', 'revapi3'),
    matchRegexInInnerHTML('script', 'revapi4'),
    matchRegexInInnerHTML('script', 'revapi5'),
    matchRegexInInnerHTML('script', 'revslider_showDoubleJqueryError'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Powered\\sby\\sSlider Revolution\\s([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
