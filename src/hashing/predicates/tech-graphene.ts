import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/graphene(?:-plus)?/.+graphene\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'grapheneGetInfScrollBtnLbl'),
    matchRegexInInnerHTML('script', 'grapheneJS.templateUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
