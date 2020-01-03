const { exec } = require('child_process')
const { promisify } = require('util')
const execP = promisify(exec)
const command = 'npx babel ./src --out-dir=dist'

async function app() {
    const { stderr, stdout } = await execP(command)
    if (stderr) {
        console.log(stderr)
    } else {
        console.log(stdout)
    }
}

app()