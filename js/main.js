"use strict";window.addEventListener("DOMContentLoaded",function(){KEEP.themeInfo={theme:"Keep v".concat(KEEP.theme_config.version),author:"XPoet",repository:"https://github.com/XPoet/hexo-theme-keep"},KEEP.localStorageKey="KEEP-THEME-STATUS",KEEP.styleStatus={isExpandPageWidth:!1,isDark:!1,fontSizeLevel:0,isOpenPageAside:!0},KEEP.printThemeInfo=function(){console.log("\n %c ".concat(KEEP.themeInfo.theme," %c ").concat(KEEP.themeInfo.repository," \n"),"color: #fadfa3; background: #333; padding: 5px 0;","background: #fadfa3; padding: 5px 0;")},KEEP.setStyleStatus=function(){localStorage.setItem(KEEP.localStorageKey,JSON.stringify(KEEP.styleStatus))},KEEP.getStyleStatus=function(){var e=localStorage.getItem(KEEP.localStorageKey);if(e){for(var t in e=JSON.parse(e),KEEP.styleStatus)KEEP.styleStatus[t]=e[t];return e}return null},KEEP.refresh=function(){KEEP.initUtils(),KEEP.initHeaderShrink(),KEEP.initModeToggle(),KEEP.initBack2Top(),!0===KEEP.theme_config.local_search.enable&&KEEP.initLocalSearch(),!0===KEEP.theme_config.code_copy.enable&&KEEP.initCodeCopy(),!0===KEEP.theme_config.lazyload.enable&&KEEP.initLazyLoad()},KEEP.printThemeInfo(),KEEP.refresh()});