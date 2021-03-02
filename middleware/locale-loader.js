/*
**  Lazy loads locales, will also load game locale if needed.
*/

const loadedLanguages = ['en']

function setI18nLanguage (i18n, lang) {
  i18n.locale = lang
  return lang
}

function loadGeneralLocale (lang) {
  // Loads locale and update list of loaded locale.
  // Previously loaded locales stay loaded.
  const locale = require(`@/src/locales/${ lang }.js`)
  return locale.default
}

function loadGameLocale (path, lang) {
  // Load game locale.
  // TODO: Handle failure state if lang doesn't have game locale.
  const locale = require(`@/src/locales${ path }/${ lang }.js`)
  return { game: locale.default }
}

export default async function ({ route, app, store }) {
  const isGame = route.name !== 'play-explore' && route.name.match(/^play-.*/g)
  const lang = app.i18n.locale

  let msgObj = {}

  // Load game locale if it's a game.
  if (isGame) {
    const gameObj = await loadGameLocale(route.path, lang)
    msgObj = { ...gameObj }
  }

  // Load general locale.
  const generalObj = await loadGeneralLocale(lang)
  msgObj = { ...msgObj, ...generalObj }

  // Add loaded locale to loaded list.
  loadedLanguages.push(lang)

  // Set active locale list.
  app.i18n.setLocaleMessage(lang, msgObj)

  // Set active locale lang.
  setI18nLanguage(app.i18n, lang)
}
