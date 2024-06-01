import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector)
.use(initReactI18next).init({
    debug:true,
    lang:'en',
    resources:{
        en:{
            translation:{
                greeting:"Hello"
            },

        },
        ban:{
            translation:{
                greeting:"হ্যালো"
            },
        },

    }
})
