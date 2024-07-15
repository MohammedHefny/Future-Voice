
export function getCurrentSystemLanguage(): string {
    const I18N_LANGUAGE_KEY = process.env.REACT_APP_I18N_LANGUAGE_KEY || 'i18nConfig';
    const storedLang = localStorage.getItem(I18N_LANGUAGE_KEY);
    
    if (storedLang !== null) {
        const parsedLang = JSON.parse(storedLang);
        if (parsedLang && typeof parsedLang.selectedLang === 'string') {
            return parsedLang.selectedLang;
        }
    }

    // Return a default language or handle the null case as needed
    return 'en'; // Default language
}
