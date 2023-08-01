import { anyOf, matchSelector } from '../matchers'

export const predicate = anyOf([matchSelector('[aria-hidden]')])
