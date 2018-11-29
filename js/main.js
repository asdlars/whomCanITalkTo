function init() {
  inliner();
  console.log("Tooltips!");
  jQuery('.land').tooltip();
  jQuery('.language').on( "click", function() {
    selectLang($(this).val());
  });
};

jQuery( document ).ready(function() {
  init();
});


//DB
var mainLang = {
  spa: ["CL","AR","ES","MX","UY","PY","BO","PE","EC","CO","VE","GT","BZ","NI","SV","HN","CR","PA","CU","DO","PR","GQ","PH"],
  eng: ["US","CA","UK","IE","AU","NZ","LR"]
}
var partialLang = {
  spa: ["BR","US","FR","NC","GF"],
  eng: ["GY","PG","LS","ZA","NA","BW","ZW","ZM","MW","TZ","KE","UG","RW","NG","CM","GH","SL","SD","ER","PK","IN","PH","SZ"]
}
var otherLang = {
  spa: ["AU","CA","NZ","JP","UK","IE","NO","SW","SJ","EH","MA","CM","SN","CI","IT","DE","BE","NL","AT","PL"]
}


function selectLang(lang) {
  for (country of mainLang[lang]) {
    console.log(country);
    jQuery('#'+country).toggleClass('main-lang')
  }
  for (country of partialLang[lang]) {
    console.log(country);
    jQuery('#'+country).toggleClass('partial-lang')
  }
  for (country of otherLang[lang]) {
    console.log(country);
    jQuery('#'+country).toggleClass('other-lang')
  }
}
