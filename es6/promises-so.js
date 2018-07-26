# see https://stackoverflow.com/questions/36355604/promise-all-in-node-js-doesnt-call-the-then-function

const fs = require("fs-extra")

const DIR = __dirname + "/images/"
const SUFFIX = "_"

// lister les fichiers du répteroire images

function readDir(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) reject(err)
            else resolve(files)
        })
    })
}

// pour chacun des fichiers, renommer avec le suffixe
function rename(filename, newFilename) {
    console.log("ancien nom", filename, "nouveau nom", newFilename)
    return new Promise((resolve, reject) => {
        fs.rename(filename, newFilename, (err, res) => {
            if (err) reject(err)
            else resolve(newFilename) // on renvoie ce qui nous arrange en cas de réussite. Ici le nouveau nom de fichier
        })
    })
}


readDir(DIR)
    .then(files => {
        // Promise.all est résolue quand toutes les promesses ont été résolues ou dès qu'une promess a échoué
        return Promise.all(files.map(file => {
            return rename(DIR + file, DIR + file + SUFFIX)
                .then((newFilename) => {
                    console.log("Renommage ok pour fichier ", file)
                    // on peut rendre ou pas newFilename. Si on ne le rend pas, il sera rendu quoi qu'il arrive une promise contenant null
                    // Donc si on renomme 2 fichiers, on aura en sortie de Promise.all.then, un objet [null, null] => suffisant pour faire un .length et savoir le nombre de fichier modifiés !!! 
                    //return newFilename 
                }, err => { // utiliser la syntaxe .then(successCb, errorCb) fait qu'on fait l'un ou l'autre mais pas les 2
                    console.error("KO pour renommage du fichier ", file, err)
                })
        }))
    })
    .then((res) => {
        console.log("tous les fichiers ont été renommés")
        console.log("res.length", JSON.stringify(res))
    })
    .catch((err) => {
        console.error("Erreur lors du renommage", err)
    })

/*
    let promesse = Promise.resolve(10)
    
    let autre = promesse.then(res => {
        console.log("on trouve", res)
        throw new Error("Y a un bleme")
    }).then(res => {
        console.log("et maintenant on trouve", res)
    }).catch(err => {
        console.error("Erreur finale", err)
    }).then(res => {
        console.log("A la finXXX", res)
    })
    */