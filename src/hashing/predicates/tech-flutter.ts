import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_flutter.loader'),
    matchRegexInInnerHTML('script', '_flutter_web_set_location_strategy'),
    matchRegexInInnerHTML('script', 'flutterCanvasKit'),
    // in meta
    matchRegexInAttribute('meta', 'id', '^flutterweb-theme$'),
    // in scripts

    // in html

    // in text

    // in css
])
