```js
assets/styles/normal.css:1:1
  ⚠ ModuleWarning: resolve-url-loader: webpack misconfiguration
  │   webpack or the upstream loader did not supply a source-map (from: /Users/codefish/Desktop/workArea/rspack/rsbuild-union/echarts/node_modules/.pnpm/@rsbuild+plugin-sass@1.0.1_@rsbuild+core@1.1.2/node_modules/@rsbuild/plugin-sass/compiled/resolve-url-loader/index.js??clonedRuleSet-22.use[4])
  │     at encodeError (/Users/codefish/Desktop/workArea/rspack/rsbuild-union/echarts/node_modules/.pnpm/@rsbuild+plugin-sass@1.0.1_@rsbuild+core@1.1.2/node_modules/@rsbuild/plugin-sass/compiled/resolve-url-loader/index.js:910:18)
```

问题
// 解决由scss文件@import进来的其他scss文件中url()相对路径不正确问题

```js
'resolve-url-loader', // 解决由scss文件@import进来的其他scss文件中url()相对路径不正确问题
 {
     loader: 'sass-loader',
     options: {
         sourceMap: true
     }
 }
```
