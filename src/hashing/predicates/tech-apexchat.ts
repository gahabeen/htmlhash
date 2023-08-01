import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ApexChat'),
    matchRegexInInnerHTML('script', 'apexchat_dompopup_chatwindow_client'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
