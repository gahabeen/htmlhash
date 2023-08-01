import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/__data/assets/(js_file_folder|git_bridge|js_file)/'),
    // in dom
    matchSelector(`link[href*='/__data/assets/css_file/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Squiz Matrix'),
    // in scripts

    // in html
    matchRegex('<!--\\s+Running (?:MySource|Squiz) Matrix'),
    // in text

    // in css
])
