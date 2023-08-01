import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'bootstrap(.js|.min.js)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bootstrap.Alert.VERSION'),
    matchRegexInInnerHTML('script', 'jQuery.fn.tooltip.Constructor.VERSION'),
    // in meta

    // in scripts

    // in html
    matchRegex('<style>\\s+/\\*!\\s+\\* Bootstrap v(\\d\\.\\d\\.\\d)\\;version:\\1'),
    matchRegex('<link[^>]* href=[^>]*?bootstrap(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>-]*?(?:\\.min)?\\.css\\;version:\\1'),
    // in text

    // in css
])
