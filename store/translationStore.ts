import { makeAutoObservable } from "mobx";
import Cookies from 'js-cookie';

class TranslationStore {
  router: any;
  currentLanguage: string;

  constructor(router:any) {
    makeAutoObservable(this);
    this.router = router;
    this.currentLanguage = router.locale;
  }

  onToggleLanguageClick(newLocale: string) {
    const { pathname, asPath, query } = this.router;
    this.router.push({ pathname, query }, asPath, { locale: newLocale });
    this.currentLanguage = newLocale;
  }
}

export default TranslationStore
