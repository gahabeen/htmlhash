import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/sinatra/.+sinatra\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sinatraSlideUp'),
    matchRegexInInnerHTML('script', 'sinatra_vars.nonce'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
