loader

css-loader style-loader

npm install --save-dev style-loader css-loader

less-loader

npm install --save-dev less-loader less

```js
module: {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader", // creates style nodes from JS strings
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
        },
      ],
    },
  ];
}

// loader链式写法 从后往前
```


# 处理图片
npm install --save-dev file-loader