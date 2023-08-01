import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'serving-sys\\.com/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:<a [^>]*href="[^/]*//[^/]*serving-sys\\.com/|<img [^>]*src="[^/]*//[^/]*serving-sys\\.com/)'),
    // in text

    // in css
])
