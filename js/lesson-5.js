var obj = {
    locales: {
        en: 'English',
        ru: 'Russian',
        es: 'Spanish',
        fr: 'French',
        cn: 'Simplified Chinese',
        jp: 'Japanese',
        de: 'German',
        ua: 'Ukrainian'
    },
    getLocales: function (data) {
        var locales = this.locales;

        if (typeof data !== 'undefined') {
            if (data.select) {
                data.select.unshift(locales);
                locales = _.pick.apply(_, data.select);
            }
            if (data.ignore) {
                data.ignore.unshift(locales);
                locales = _.omit.apply(_, data.ignore);
            }
        }

        return _.extend(locales);
    }
};

var localesManager = {
    locales: {
        en: 'English',
        ru: 'Russian',
        es: 'Spanish',
        fr: 'French',
        cn: 'Simplified Chinese'
    },
    getLocales: function(obj) {
        var result = this.locales;

        if (typeof obj !== 'undefined') {

            if (obj.select) {
                result = {};
                var toSelect = obj.select,
                    arrLength = toSelect.length,
                    i = 0;

                for (i; i < arrLength; i++) {
                    result[toSelect[i]] = this.locales[toSelect[i]];
                }
            }

            if (obj.ignore) {

                var toIgnore = obj.ignore;
                var resultClone = {};

                for (var key in result) {
                    if (toIgnore.indexOf(key) === -1) {
                        resultClone[key] = result[key];
                    }
                }

                result = resultClone;
            }

            if (obj.desc === "asc") {
              var arr = [];
              var resultClone = {};

              for (var key in result) {
                arr.push(key);
              }

              arr = arr.reverse();

              for (var i = 0; i < arr.length; i++) {
                resultClone[arr[i]] = result[arr[i]];
              }

              result = resultClone;

              // вопрос: тут пришлось перекладывать данные из объекта в массив, а оптом обратно в объект
              // это ок или все же есть решение отсортировать данные сразу в объекте?
              // п.с. не хватило времени на рефакторинг
            }

        }

        return result;
    }
};

var empty = localesManager.getLocales();
var select = localesManager.getLocales({ select: ['en', 'ru', 'es']});
var ignore = localesManager.getLocales({ ignore: ['en', 'ru', 'es']});
var desc = localesManager.getLocales({ desc: "asc" });
var mix = localesManager.getLocales({ select: ['en', 'ru', 'es'], ignore: ['en']});
var descMix = localesManager.getLocales({select: ['en', 'ru', 'es'], ignore: ['en'], desc: "asc" });
var descIgnore = localesManager.getLocales({ignore: ['en'], desc: "asc" });

console.log(empty);
console.log(select);
console.log(ignore);
console.log(desc);
console.log(mix);
console.log(descMix);
console.log(descIgnore);
