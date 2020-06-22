import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from "./lang/en.json"
import pt from "./lang/pt.json"

addMessages('en', en)
addMessages('pt', pt)

export function initI18n() {
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator() //? "pt" : "en" // uncomment ternary for quick testing
  });
}