import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/chaty/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'chaty_settings.chaty_widgets'),
    matchRegexInInnerHTML('script', 'chaty_settings.object_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
