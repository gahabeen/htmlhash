import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/semplice(?:\\d+)?(?:-child)?(?:-theme)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'semplice.template_dir'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
