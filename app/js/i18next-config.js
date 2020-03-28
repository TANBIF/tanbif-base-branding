var settings = require('./settings');
var i18n = require('i18next');
var jqueryI18next = require('jquery-i18next');
// var backend = require('i18next-xhr-backend');
var Backend = require('i18next-service-backend').default;
var lngDetector = require('i18next-browser-languagedetector');
var cache = require('i18next-localstorage-cache');
var Url = require('domurl');
var Cookies = require('js-cookie');

// We use this backend as remote because subdomains.l-a.site should request to l-a.site domain
const backOpts = {
  // service url to the backend service
  // i.e. https://api.spacetranslate.com or https://api.locize.io
  service: '$_LOCALES_URL',
  projectId: '',
  apiKey: '',
  referenceLng: 'en',
  version: 'locales'
}
const backend = new Backend();
backend.init(null, backOpts);

var currentUrl  = new Url;

const laSessionCookie = 'la-lang-session';

const i18nOpts = {
  backend: backOpts,
  //  lng: 'es',
  fallbackLng: {
    "sw-TZ": ['en'],
    default: ['en']
  },
  sendMissingTo: 'fallback',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: function f(value, format, lng) {
      // https://www.i18next.com/formatting.html
      // console.log(`Value: ${value} with format: ${format} to lang: ${lng}`);
      if (format === 'uppercase') return value.toUpperCase();
      if (value instanceof Date) return moment(value).format(format);
      if (format === 'number') return Intl.NumberFormat(lng).format(value);
      return value;
    }
  },
  whitelist: settings.enabledLangs,
  load: 'languageOnly', // 'es' o 'en', previously: 'all', // es-ES -> es, en-US -> en
  debug: true,
  ns: 'common',
  defaultNS: 'common',
  saveMissing: true, // if true seems it's fails to getResourceBundle
  saveMissingTo: 'en',
  keySeparator: 'ß',
  nsSeparator: 'ð',
  pluralSeparator: 'đ'
};

const detectorOptions = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'navigator', 'localStorage', 'htmlTag'],

  // keys or params to lookup language from
  lookupQuerystring: 'lang',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  cookieMinutes: 525600, // a year
  // cache user language on
  caches: ['cookie'],
  excludeCacheFor: ['cimode'] // languages to not persist (cookie, localStorage)
};

if (document.location.host !== 'localhost:3333') {
  // We set the upper domain in production so all ALA modules get the same locale
  detectorOptions.cookieDomain = settings.mainDomain;
}

const cacheOptions = {
  // turn on or off
  enabled: false,
  // prefix for stored languages
  prefix: 'i18next_res_',
  // expiration
  expirationTime: 7 * 24 * 60 * 60 * 1000,
  // language versions
  versions: {}
};

i18nOpts.cache = cacheOptions;
i18nOpts.detection = detectorOptions;

i18nOpts.sendMissing = false;
i18nOpts.missingKeyHandler = function miss(lng, ns, key, defaultValue) {
  // call to some API here
  console.log(`"${key}": "${defaultValue}"`);
};

i18n.on('languageChanged', function (lng) {
  if (i18n.services.languageDetector) {
    console.log(`On lang changed ${lng}`);
    // Store in the cookie the selection
    i18n.services.languageDetector.cacheUserLanguage(lng);
  }
});

i18n.use(backend)
    .use(lngDetector)
    .use(cache)
    .init(i18nOpts, (err, t) => {
      // initialized and ready to
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Language initialized: ${i18n.language}`);
      jqueryI18next.init(i18n, $);
      $("body").localize();

      $('.locale-link').on('click', function(e) {
        e.preventDefault();
        const lang = $(this).data('locale');
        console.log(`Lang clicked ${lang}`);

        i18n.changeLanguage(lang);

        // Change ?lang param and reload
        currentUrl.query.lang = lang;
        document.location.search = currentUrl.query;
      });

      if (typeof Cookies.get(laSessionCookie) === 'undefined' && typeof currentUrl.query.lang === 'undefined') {
        // Workaround to set grails locale
        // This will use to do a unique lang redirect (to force grails to set the lang for the session)
        var in30Minutes = 1/48;
        // grails default session lifetime is 30min
        Cookies.set(laSessionCookie, '/', { expires: in30Minutes });
        currentUrl.query.lang = i18n.language;
        document.location.search = currentUrl.query;
      }

      // cookies eu consent
      /* const cookiesOpt = {
       *   cookieTitle: t('Uso de Cookies'),
       *   cookieMessage: t('Utilizamos cookies para asegurar un mejor uso de nuestra web. Si continúas navegando, consideramos que aceptas su uso'),
       *   showLink: false,
       *   position: 'bottom',
       *   linkText: 'Lee más',
       *   linkRouteName: '/privacy',
       *   acceptButtonText: t('Aceptar'),
       *   html: false,
       *   expirationInDays: 70,
       *   forceShow: false
       * };
       */
      // CookieConsent.init(cookiesOpt);
    });
