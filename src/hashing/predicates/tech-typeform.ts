import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'embed\\.typeform\\.com/'),
    // in dom
    matchSelector(`link[href*='.typeform.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'tf.createPopover'),
    matchRegexInInnerHTML('script', 'tf.createWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
