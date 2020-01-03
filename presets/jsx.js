const { transformFile } = require('@babel/core')

transformFile('./src/main.jsx', { presets: ['@babel/preset-env', '@babel/preset-react'] }, function (err, res) {
    if (err) {
        return console.log(err)
    }
    const { code } = res
    console.log(code)
})