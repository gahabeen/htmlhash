import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/weaver-xtreme/.+weaverxjslib-end\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link#weaverx-style-sheet-css`),
    // in js
    matchRegexInInnerHTML('script', 'weaverxBottomFooter'),
    matchRegexInInnerHTML('script', 'weaverxMonitorContent'),
    matchRegexInInnerHTML('script', 'weaverxOnResize'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
