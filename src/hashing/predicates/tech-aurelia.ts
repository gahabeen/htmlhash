import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/aurelia[\\d\\w\\-\\.]+\\.js'),
    // in dom
    matchSelector(`div[aurelia-app], body[aurelia-app], a[au-target-id]`),
    // in js
    matchRegexInInnerHTML('script', '_aureliaConfigureModuleLoader'),
    matchRegexInInnerHTML('script', 'localAurelia'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
