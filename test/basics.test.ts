import test from "https://deno.land/x/avs@v0.1.0/mod.ts"

import {I18n} from '../source/i18n.ts'

test('can translate', t => {
  const i18n = new I18n()
  i18n.loadLocale('en', {
    greeting: 'Hello!'
  })
  console.log(i18n.t('en', 'greeting'))
  t.is(i18n.t('en', 'greeting'), 'Hello!')
})

test('allowMissing false throws', t => {
  const i18n = new I18n({
    allowMissing: false
  })
  t.throws(() => {
    i18n.t('en', 'greeting')
  })
})
