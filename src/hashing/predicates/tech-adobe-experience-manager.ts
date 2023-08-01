import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/etc/designs/'),
    matchRegexInAttribute('script', 'src', '/etc/clientlibs/'),
    matchRegexInAttribute('script', 'src', '/etc\\.clientlibs/'),
    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'aem-(?:GridColumn|apps/)'),
    // in html
    matchRegex('<div class="[^"]*parbase'),
    matchRegex('<div[^>]+data-component-path="[^"+]jcr:'),
    matchRegex('<div class="[^"]*aem-Grid'),
    // in text

    // in css
])
