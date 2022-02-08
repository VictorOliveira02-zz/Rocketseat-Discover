function getFlags(flag) {
    if (flag == '--name') {
        process.argv.push('--name')
        let pos = process.argv.indexOf('--name')
        process.argv.push('victor')
        console.log(process.argv[pos + 1]);
    }
    else if (flag == '--greetings') {
        process.argv.push('--greetings')
        let pos = process.argv.indexOf('--greetings')
        process.argv.push('Olá, como vai?')
        console.log(process.argv[pos + 1]);
    } else {
        console.log('Não foi possível encontrar a flag solicitada');
    }

}

module.exports = getFlags;