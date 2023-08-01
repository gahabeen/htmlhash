import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.commercetools.com/'], body[data-commerce-tools-host*='.commercetools.com']`),
    // in js
    matchRegexInInnerHTML('script', 'COMMERCE_TOOLS_HOST_ATT'),
    matchRegexInInnerHTML('script', 'COMMERCE_TOOLS_PROJECT_KEY_ATT'),
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.commercetoolsEntity'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
