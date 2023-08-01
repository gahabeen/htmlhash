import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'pge\\.segmanta\\.com/widget_embed_js(?:/widgetEmbed-v([\\d.]+)\\.min\\.js)?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SEGMANTA__DYNAMIC_EMBED_CONFIG'),
    matchRegexInInnerHTML('script', 'SEGMANTA__USER_METADATA'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
