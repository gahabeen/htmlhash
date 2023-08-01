import { HTML_ON_EVENT_NAMES } from '../consts'
import { Predicate, PredicateContext } from '../types'
import { escapeRegExpValue } from '../utils'

export const anyOf = (predicates: Predicate[]) => (context: PredicateContext) => {
    return predicates.some((predicate) => predicate(context))
}

export const allOf = (predicates: Predicate[]) => (context: PredicateContext) => {
    return predicates.every((predicate) => predicate(context))
}
export const matchRegex =
    (patternOrRegex: string | RegExp, flags: string = 'gim') =>
    (context: PredicateContext) => {
        return !!context.html.match(patternOrRegex instanceof RegExp ? patternOrRegex : new RegExp(patternOrRegex, flags))
    }

export const matchAny =
    (snippets: (string | RegExp)[], flags: string = 'gim') =>
    (context: PredicateContext) => {
        return snippets.some((snippet) => matchRegex(snippet, flags)(context))
    }

export const matchAll =
    (snippets: (string | RegExp)[], flags: string = 'gim') =>
    (context: PredicateContext) => {
        return snippets.every((snippet) => matchRegex(snippet, flags)(context))
    }

export const matchSelector = (selector: string) => (context: PredicateContext) => {
    return !!context.dom.querySelector(selector)
}

export const matchTagAttributesFuzzy = (tag: string, attributes: Record<string, string>) => {
    return matchSelector([tag, ...Object.entries(attributes).map(([key, value]) => `[${key}*="${value}"]`)].join(''))
}

export const matchRegexInAttribute =
    (selector: string, attribute: string, patternOrRegex: string | RegExp, flags: string = 'gim') =>
    (context: PredicateContext) => {
        const elements = context.dom.querySelectorAll(selector)
        return !!elements.some((element) => matchRegex(patternOrRegex, flags)({ html: element.getAttribute(attribute) || '', dom: element }))
    }

export const matchRegexInInnerHTML =
    (selector: string, patternOrRegex: string | RegExp, flags: string = 'gim') =>
    (context: PredicateContext) => {
        const elements = context.dom.querySelectorAll(selector)
        return !!elements.some((element) => matchRegex(patternOrRegex, flags)({ html: element.innerHTML, dom: element }))
    }

export const matchOnEventsValueFuzzy = (text: string) => (context: PredicateContext) => {
    return matchSelector(HTML_ON_EVENT_NAMES.map((name) => `[${name}*="${text}"]`).join(', '))(context)
}

export const matchJavascript = (text: string) => (context: PredicateContext) => {
    return anyOf([matchRegexInInnerHTML('script', escapeRegExpValue(text), 'gm'), matchOnEventsValueFuzzy(text)])(context)
}
