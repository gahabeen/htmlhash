import { anyOf, matchSelector } from '../matchers'

export const predicate = anyOf([matchSelector('html[data-adblockkey]')])
