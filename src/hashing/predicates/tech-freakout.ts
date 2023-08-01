import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.fout\\.jp/'),
    // in dom
    matchSelector(`img[src*='.fout.jp/'], link[href*='.fout.jp']`),
    // in js
    matchRegexInInnerHTML('script', 'FOut'),
    matchRegexInInnerHTML('script', '_fout_jsurl'),
    matchRegexInInnerHTML('script', '_fout_queue'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
