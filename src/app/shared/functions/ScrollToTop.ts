// export function getCurrentSystemLanguage(): string {
//     const I18N_LANGUAGE_KEY = process.env.REACT_APP_I18N_LANGUAGE_KEY || 'i18nConfig'
//     return JSON.parse(localStorage.getItem(I18N_LANGUAGE_KEY)).selectedLang
// }
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
