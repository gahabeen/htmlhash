import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__gwt_'),
    matchRegexInInnerHTML('script', '__gwt_activeModules'),
    matchRegexInInnerHTML('script', '__gwt_getMetaProperty'),
    matchRegexInInnerHTML('script', '__gwt_isKnownPropertyValue'),
    matchRegexInInnerHTML('script', '__gwt_stylesLoaded'),
    matchRegexInInnerHTML('script', '__gwtlistener'),
    // in meta
    matchRegexInAttribute('meta', 'gwt:property', ''),
    // in scripts

    // in html

    // in text

    // in css
])
