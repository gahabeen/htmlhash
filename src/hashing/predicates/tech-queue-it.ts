import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.queue-it\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'QueueIt.Javascript.Version'),
    matchRegexInInnerHTML('script', 'queueit_clientside_config'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
