import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '$.fn.gallery_valign'),
    matchRegexInInnerHTML('script', 'galleryAuthToken'),
    // in meta

    // in scripts

    // in html
    matchRegex('<div id="gsNavBar" class="gcBorder1">'),
    matchRegex('<a href="http://gallery\\.sourceforge\\.net"><img[^>]+Powered by Gallery\\s*(?:(?:v|Version)\\s*([0-9.]+))?\\;version:\\1'),
    // in text

    // in css
])
