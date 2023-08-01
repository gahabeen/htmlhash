import { anyOf } from '../matchers'
import { matchSelector } from '../matchers'

export const predicate = anyOf([matchSelector('[style*="line-height:"]')])
