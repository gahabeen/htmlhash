import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/js/ljvt_v(\\d+)/\\;version:\\1\\;confidence'),
    matchRegexInAttribute('script', 'src', 'cdn1\\.solojavirtual\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'id_loja_virtual'),
    matchRegexInInnerHTML('script', 'link_loja_virtual'),
    matchRegexInInnerHTML('script', 'loja_sem_dominio'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
