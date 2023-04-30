//import * as locales from './locales.json'
import { Rule } from 'sanity'
export const locales = [
  {
    id: 'en',
    label: 'English',
    shortLabel: 'EN',
    isDefault: true,
  },
]

export const validateLocaleString = (max: number, isRequired: boolean) => {
  return isRequired
    ? (Rule: Rule) =>
        Rule.required().fields(
          locales.reduce(
            (acc, lang) => ({
              ...acc,
              [lang.id]: (fieldRule: Rule) => [
                fieldRule.required(),
                fieldRule.max(max).warning(),
              ],
            }),
            {},
          ),
        )
    : (Rule: Rule) =>
        Rule.fields(
          locales.reduce(
            (acc, lang) => ({
              ...acc,
              [lang.id]: (fieldRule: Rule) => fieldRule.max(max).warning(),
            }),
            {},
          ),
        )
}
