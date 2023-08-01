import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sweetalert2(?:\\.all)?(?:\\.min)?\\.js'),
    matchRegexInAttribute('script', 'src', '/npm/sweetalert2@([\\d.]+)\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'sweetalert2@([\\d.]+)/dist/sweetalert2(?:\\.all)(?:\\.min)\\.js'),
    matchRegexInAttribute('script', 'src', 'limonte-sweetalert2/([\\d.]+)/sweetalert2(?:\\.all)(?:\\.min)\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Sweetalert2'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+?href="[^"]+sweetalert2(?:\\.min)?\\.css'),
    // in text

    // in css
])
