import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sdk\\.postscript\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Postscript.isSubscriberInputChecked'),
    matchRegexInInnerHTML('script', 'postscript.getSubscriberId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
