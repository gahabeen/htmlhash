import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'service(?:2)?\\.mtcaptcha\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mtcaptcha.getVerifiedToken'),
    matchRegexInInnerHTML('script', 'mtcaptchaConfig.sitekey'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
