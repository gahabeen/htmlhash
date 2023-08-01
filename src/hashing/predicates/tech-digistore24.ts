import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'digistore/digistore\\.js'),
    matchRegexInAttribute('script', 'src', 'www\\.digistore24\\.com'),
    // in dom
    matchSelector(`a[href*='www.digistore24.com'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'DIGISTORE_LINK_ID_KEY'),
    matchRegexInInnerHTML('script', 'DIGISTORE_VENDORKEY'),
    matchRegexInInnerHTML('script', 'getTheSourceForDigistoreLinks'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
