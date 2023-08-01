import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mvga\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MivaVM_API'),
    matchRegexInInnerHTML('script', 'MivaVM_Version'),
    matchRegexInInnerHTML('script', 'mivaJS'),
    matchRegexInInnerHTML('script', 'mivaJS.Page'),
    matchRegexInInnerHTML('script', 'mivaJS.Product_Code'),
    matchRegexInInnerHTML('script', 'mivaJS.Product_ID'),
    matchRegexInInnerHTML('script', 'mivaJS.Screen'),
    matchRegexInInnerHTML('script', 'mivaJS.Store_Code'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
