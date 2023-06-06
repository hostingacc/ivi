import { makeAutoObservable } from "mobx";
import Cookies from "js-cookie";

class TranslationStore {
  router: any;
  currentLanguage: string;

  constructor(router: any) {
    makeAutoObservable(this);
    this.router = router;
    this.currentLanguage = router.locale;
    Cookies.set("currentLanguage", router.locale, {
      sameSite: "None",
      secure: true,
    });
  }

  onToggleLanguageClick(newLocale: string) {
    const { pathname, asPath, query } = this.router;
    this.router.push({ pathname, query }, asPath, { locale: newLocale });
    this.currentLanguage = newLocale;
    Cookies.set("currentLanguage", newLocale, {
      sameSite: "None",
      secure: true,
    });
  }
}

export default TranslationStore;
