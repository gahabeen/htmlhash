import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/education-hub(?:-pro)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EducationHubScreenReaderText'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
