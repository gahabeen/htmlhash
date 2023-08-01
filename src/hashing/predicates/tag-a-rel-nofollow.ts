import { anyOf, matchTagAttributesFuzzy } from '../matchers'

export const predicate = anyOf([
    matchTagAttributesFuzzy('link', {
        rel: 'noffolow',
    }),
])

export const tests = {
    success: ['<a rel="noffolow" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>'],
    failure: [],
}
