import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/echarts\\.min\\.[a-zA-Z0-9]*\\.js'),
    matchRegexInAttribute('script', 'src', '/echarts(?:\\.simple)?(?:\\.esm)?(?:\\.common)?(?:\\.min)?\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn\\.jsdelivr\\.net/(?:npm|gh/apache)/echarts@([\\d.]+(?:-[^/]+)?|latest)/dist/echarts.*\\.js\\;version:\\1'),
    // in dom
    matchSelector(`div[_echarts_instance_]`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
