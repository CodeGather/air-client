
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],],undefined,{path:"./pages/personal/personal.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/personal/personal.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      