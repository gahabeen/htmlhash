import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'vue[.-]([\\d.]*\\d)[^/]*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '(?:/([\\d.]+))?/vue(?:\\.min)?\\.js\\;version:\\1'),
    // in dom
    matchSelector(`.vue-app`),
    // in js
    matchRegexInInnerHTML('script', 'Vue'),
    matchRegexInInnerHTML('script', 'Vue.version'),
    matchRegexInInnerHTML('script', 'VueRoot'),
    matchRegexInInnerHTML('script', '__VUE_HOT_MAP__'),
    matchRegexInInnerHTML('script', '__VUE__'),
    matchRegexInInnerHTML('script', 'vueDLL'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+\\sdata-v(?:ue)?-'),
    // in text

    // in css
    matchRegex('\\.vue-notification-group'),
])
