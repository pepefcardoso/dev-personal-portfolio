
import { LanguagesData } from '@/types/languages';

export const languagesData: LanguagesData = {
  supported: [
    {
      id: "en",
      code: "en",
      name: {
        en: "English",
        pt: "Inglês",
        es: "Inglés",
        fr: "Anglais",
        it: "Inglese",
        zh: "英语"
      },
      nativeName: "English",
      flag: "🇺🇸",
      isDefault: false,
      rtl: false
    },
    {
      id: "pt",
      code: "pt",
      name: {
        en: "Portuguese",
        pt: "Português",
        es: "Portugués",
        fr: "Portugais",
        it: "Portoghese",
        zh: "葡萄牙语"
      },
      nativeName: "Português",
      flag: "🇧🇷",
      isDefault: true,
      rtl: false
    },
    {
      id: "es",
      code: "es",
      name: {
        en: "Spanish",
        pt: "Espanhol",
        es: "Español",
        fr: "Espagnol",
        it: "Spagnolo",
        zh: "西班牙语"
      },
      nativeName: "Español",
      flag: "🇪🇸",
      isDefault: false,
      rtl: false
    },
    {
      id: "fr",
      code: "fr",
      name: {
        en: "French",
        pt: "Francês",
        es: "Francés",
        fr: "Français",
        it: "Francese",
        zh: "法语"
      },
      nativeName: "Français",
      flag: "🇫🇷",
      isDefault: false,
      rtl: false
    },
    {
      id: "it",
      code: "it",
      name: {
        en: "Italian",
        pt: "Italiano",
        es: "Italiano",
        fr: "Italien",
        it: "Italiano",
        zh: "意大利语"
      },
      nativeName: "Italiano",
      flag: "🇮🇹",
      isDefault: false,
      rtl: false
    },
    {
      id: "zh",
      code: "zh",
      name: {
        en: "Chinese",
        pt: "Chinês",
        es: "Chino",
        fr: "Chinois",
        it: "Cinese",
        zh: "中文"
      },
      nativeName: "中文",
      flag: "🇨🇳",
      isDefault: false,
      rtl: false
    }
  ]
};
