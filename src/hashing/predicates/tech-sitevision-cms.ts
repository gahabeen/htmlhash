import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sitevision/system-resource/(?:[\\w\\d]+)/js/docready-min\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', 'sitevision/system-resource/(?:[\\w\\d]+)/js/AppRegistry\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', 'sitevision/system-resource/(?:[\\w\\d]+)/webapps/webapp_sdk-min\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', 'sitevision/system-resource/(?:[\\w\\d]+)/envision/envision\\.js\\;confidence'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
