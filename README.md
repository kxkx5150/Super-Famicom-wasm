# Super-Famicom-wasm
 スーパーファミコン WASM Emulator  
jsでは実行速度が問題になりますが、wasmだと全然大丈夫。  
wasmのデモ＆勉強用です。







<br><br><br>

xnesさんがwasm化した物をコンパイルしました。  
https://github.com/tjwei/xnes

wasmの元となったエミュレータ  
snes9x  
https://github.com/snes9xgit/snes9x

<br><br>

Emscriptenの最新ではコンパイルできません。  
Emscripten 1.38.33  
スクリプトに　-s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \　追加してコンパイル出来ました。

