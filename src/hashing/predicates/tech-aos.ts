import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'unpkg\\.com/aos@([\\d\\.]+)/dist/aos\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/typo3conf/ext/udem_vendor/Resources/Public/aos-([\\d\\.]+)\\;version:\\1'),
    // in dom
    matchSelector(` body[data-aos-easing]`),
    // in js
    matchRegexInInnerHTML('script', 'AOS.init'),
    matchRegexInInnerHTML('script', 'AOS.refresh'),
    matchRegexInInnerHTML('script', 'AOS.refreshHard'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
