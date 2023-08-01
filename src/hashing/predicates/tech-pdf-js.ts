import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PDFJS'),
    matchRegexInInnerHTML('script', 'PDFJS.version'),
    matchRegexInInnerHTML('script', '_pdfjsCompatibilityChecked'),
    matchRegexInInnerHTML('script', 'pdfjsDistBuildPdf.version'),
    matchRegexInInnerHTML('script', 'pdfjsLib.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<\\/div>\\s*<!-- outerContainer -->\\s*<div\\s*id="printContainer"><\\/div>'),
    // in text

    // in css
])
