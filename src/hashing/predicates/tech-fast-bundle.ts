import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.fastbundle\\.co/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FastBundleConf.bundleBox'),
    matchRegexInInnerHTML('script', 'FastBundleConf.cartInfo.app_version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
