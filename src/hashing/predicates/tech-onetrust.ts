import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.cookielaw\\.org'),
    matchRegexInAttribute('script', 'src', 'optanon\\.blob\\.core\\.windows\\.net'),
    matchRegexInAttribute('script', 'src', 'otSDKStub\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn\\.cookielaw\\.org'),
    matchRegexInAttribute('script', 'src', 'optanon\\.blob\\.core\\.windows\\.net'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
