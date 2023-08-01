import { HTMLElement } from 'node-html-parser'

export type PredicateContext = {
    html: string
    dom: HTMLElement
}

export type Predicate = (context: PredicateContext) => boolean
