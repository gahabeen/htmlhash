import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MM_preloadImages'),
    matchRegexInInnerHTML('script', 'MM_showHideLayers'),
    matchRegexInInnerHTML('script', 'MM_showMenu'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!--[^>]*(?:InstanceBeginEditable|Dreamweaver([^>]+)target|DWLayoutDefaultTable)\\;version:\\1'),
    matchRegex('<!-- #BeginTemplate\\s"[\\d_\\w/]+\\.dwt'),
    // in text

    // in css
])
