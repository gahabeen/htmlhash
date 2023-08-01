import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'apps\\.mypurecloud\\.\\w+/widgets/([\\d.]+)\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'apps\\.mypurecloud\\.\\w+'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PURECLOUD_WEBCHAT_FRAME_CONFIG'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
