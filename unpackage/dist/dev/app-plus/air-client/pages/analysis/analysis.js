
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],],undefined,{path:"./pages/analysis/analysis.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/analysis/analysis.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      