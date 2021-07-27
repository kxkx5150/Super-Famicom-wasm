# Super-Famicom-wasm
 スーパーファミコン WASM Emulator  
jsでは実行速度が問題になりますが、wasmだと全然大丈夫。  
wasmのデモ＆勉強用です。

<br><br>

DEMO  
https://kxkx5150.github.io/Super-Famicom-wasm/  

  

比較用 js版 (マッパー対応少数)  
https://kxkx5150.github.io/Super-Famicom.js/



<br><br><br><br>

xnesさんがsnes9xをwasm化  
https://github.com/tjwei/xnes

wasmの元となったエミュレータ  snes9x  
https://github.com/snes9xgit/snes9x

<br><br><br>


スクリプトに　-s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \　  
追加してコンパイル出来ました。  
WindowsならWSL2の環境が前提です。
