// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function() {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
// map('gt', 'T');

// an example to remove mapkey `Ctrl-i`
unmap('<Ctrl-i>');
unmap('og');
unmap('sg');
unmap('ow');

// Remove search alias for google and bing
removeSearchAliasX('g', 's'); // google
removeSearchAliasX('w', 's'); // bing
removeSearchAliasX('e', 's'); // wiki
removeSearchAliasX('w', 's'); // baidu


// Search engine
// ##### Other #################################################################
// ----- Wikipedia -------------------------------------------------------------
addSearchAliasX('wk',
                'wikipedia',
                'https://en.wikipedia.org/wiki/',
                's',
                'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&namespace=0&limit=40&search=',
                function(response) {
                    return JSON.parse(response.text)[1];
                });
mapkey('owk',
       '#8Open search with Wikipedia EN',
       function() {
           Front.openOmnibar({type: "SearchEngine", extra:"wk"});
       });
// ##### Google ################################################################
// ----- Google ----------------------------------------------------------------
addSearchAliasX('G',
                'google',
                'https://www.google.com/search?q=',
                's',
                'https://www.google.com/complete/search?client=chrome-omni&gs_ri=chrome-ext&oit=1&cp=1&pgcl=7&q=',
                 function(response) {
                    var res = JSON.parse(response.text);
                 return res[1];
                 });
// ----- Google mail -----------------------------------------------------------
// Add Google mail to search engine under alias gmm
addSearchAliasX('gmm',
                'Google mail',
                'https://mail.google.com/mail/u/0/#search/'
                );
mapkey('ogmm',
       '#8Open search with Google mail',
       function() {
           Front.openOmnibar({type: "SearchEngine", extra:"gmm"});
       });
// Add Google mail for work to search engine under alias gmw
addSearchAliasX('gmw',
                'Google Mail Work',
                'https://mail.google.com/mail/u/0/#search/label%3Amaxime.gachoud%40coret.ch+'
                );
mapkey('ogmw',
       '#8Open search with Google mail work',
       function() {
           Front.openOmnibar({type: "SearchEngine", extra:"gmw"});
       });
// ----- Google translation ----------------------------------------------------
// Add Google translation JP/EN to search engine under alias gtje
addSearchAliasX('tje',
                'Google translate JP/EN',
                'https://translate.google.com/#view=home&op=translate&sl=ja&tl=en&text='
                );
mapkey('ogtje',
       '#8Open search with Google translate JP/EN',
       function() {
           Front.openOmnibar({type: "SearchEngine", extra:"tje"});
       });
// Add Google translation EN/JP to search engine under alias gtej
addSearchAliasX('tej',
                'Google translate EN/JP',
                'https://translate.google.com/#view=home&op=translate&sl=en&tl=ja&text='
                );
mapkey('ogtej',
       '#8Open search with Google translate EN/JP',
       function() {
           Front.openOmnibar({type: "SearchEngine", extra:"tej"});
       });
// Add Google translation DE/EN to search engine under alias gtde
addSearchAliasX('tde',
                'Google translate DE/EN',
                'https://translate.google.com/#view=home&op=translate&sl=de&tl=en&text='
                );
mapkey('ogtde',
       '#8Open search with Google translate DE/EN',
       function() {
           Front.openOmnibar({type: "SearchEngine", extra:"tde"});
       });
// Add Google translation EN/DE to search engine under alias gted
addSearchAliasX('ted',
                'Google translate EN/DE',
                'https://translate.google.com/#view=home&op=translate&sl=de&tl=en&text='
                );
mapkey('ogted',
       '#8Open search with Google translate EN/DE',
       function() {
           Front.openOmnibar({type: "SearchEngine", extra:"ted"});
       });

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
// click `Save` button to make above settings to take effect.
