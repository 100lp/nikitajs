var localesManager = {
    en: 'English',
    ru: 'Russian',
    es: 'Spanish',
    fr: 'French',
    cn: 'Simplified Chinese',
    jp: 'Japanese',
    de: 'German',
    ua: 'Ukrainian',
    pt: 'Portuguese',
    getLocales: function(obj) {
      var result = {};

      if (obj["select"]) {
        var toSelect = obj["select"], selecteKey, selectValue, i;

        for (i = 0; i < toSelect.length; i++) {
          selecteKey = toSelect[i];
          selectValue = localesManager[toSelect[i]];

          result[selecteKey] = selectValue;
        }
      }

      if (obj["ignore"]) {
        // var toIgnore = obj["ignore"], ignoreKey, i;

        // for (i = 0; i < toIgnore.length; i++) {

        // }


        // for (var key in localesManager) {
        //   if (key !== toIgnore[key]) {
        //     result[key] = localesManager[key];
        //   }
        // }
      }

      if (obj["select"] && obj["ignore"]) {
        console.log("ignore and select");
      }


      // for (var key in obj) {
      //   if (key === "select") {
      //     var selectedFieldKey,
      //         selectedFieldValue,
      //         i;
      //     for (i = 0; i < obj[key].length; i++) {
      //       selectedFieldKey = obj[key][i];
      //       selectedFieldValue = localesManager[obj[key][i]];

      //       console.log(selectedFieldKey + ": " + selectedFieldValue);
      //     }
      // }
      return result;
    }
};

var obj = { select: ['en', 'ru', 'es'], ignore: ['en'] };
var test = localesManager.getLocales(obj);

console.log(test);
