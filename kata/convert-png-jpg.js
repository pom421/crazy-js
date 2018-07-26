
'use strict';

/**
 * Outil pour renommer des copies d'écrans OS X png en fichiers jpg.
 *
 * But :
 * - renommer les fichiers pour éviter les espaces
 * - supprimer caractères inutiles
 * - convertir en jpg pour être inséré dans LibreOffice (les png sont pixelisés)
 *
 * Requis : ImageMagick (brew install ImageMagick; sudo npm install -g imagemagick)
 */

const im = require('imagemagick');
const fs = require('fs');

// Depending on the environement. Modify it for your needs
const dir = "/Users/pomauguet/Desktop/copie d'écrans/";
var regex = /^Capture d’écran (\d{4}-\d{2}-\d{2}) à (\d{2}.\d{2}.\d{2}).*\.(png)$/; // french on OS X 10.11

var readdir = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

readdir(dir).then(files =>
  Promise.all(
    files
    .map(filename => ({
      from: dir + filename,
      to: dir + filename.replace(regex, '$1-$2.jpg')
    }))
    .filter(obj => obj.from != obj.to)
    .map(obj => {
      im.convert([obj.from, obj.to], (err, stdout) => {
        if (err) {
          console.error(err);
          throw err;
        }
      });
      return obj;
    })
  )
  .then(res => console.log('Number of files renamed : ' + res.length ))
  .catch(err => console.error('Problem during the renaming operation'))
);
