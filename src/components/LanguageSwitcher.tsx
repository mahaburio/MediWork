import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  return (
    <div aria-label="language switcher" className="flex items-center gap-1 text-sm">
      <button
        className={isFr ? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}
        aria-current={isFr ? 'true' : undefined}
        onClick={() => i18n.changeLanguage('fr')}
      >
        FR
      </button>
      <span aria-hidden className="text-slate-400">|</span>
      <button
        className={!isFr ? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}
        aria-current={!isFr ? 'true' : undefined}
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}


