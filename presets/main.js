const { readFileSync } = require('fs')
const { resolve } = require('path')
const { transformFile } = require('@babel/core')
transformFile('./src/main.js', { filename: 'new', presets: ['@babel/env'] }, function (err, res) {
    if (err) {
        return console.log(err)
    }
    const { code, map, ast } = res
    console.log(code)
})