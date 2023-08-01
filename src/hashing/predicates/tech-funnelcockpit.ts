import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.funnelcockpit\\.com/'),
    // in dom
    matchSelector(`a[href*='.funnelcockpit.com/'][target='_blank'], iframe[src*='.funnelcockpit.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
