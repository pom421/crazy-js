/* eloquentjavascript.net/chapter7.html */


var routes = {};

// les routes sont des arguments supplémentaires, de la forme ["nom", distance]
var creerRoutes = function creerRoute(depart) {
    // on récupère la liste de toutes les routes
    var liste = Array.prototype.slice.call(arguments, 1);

    // fonction interne qui ajoute 1 route unitaire
    var ajouterRoute = function(depart, arrivee, distance) {
        // on ajoute une entrée, si besoin
        if (!routes[depart]) {
            routes[depart] = [];
        }
        
        routes[depart].push({to: arrivee,distance: distance});
    }
    
    for (var i = 0, len = liste.length; i < len; ++i) {
        var to = liste[i];
        
        ajouterRoute(depart, to[0], to[1]);
        ajouterRoute(to[0], depart, to[1]);
    }
    
    return routes;
};

//construction des routes
creerRoutes("Point Kiukiu", ["Hanaiapa", 19], ["Mont Feani", 15], ["Taaoa", 15]);
creerRoutes("Airport", ["Hanaiapa", 6], ["Mont Feani", 5], ["Atuona", 4], ["Mont Ootua", 11]);
creerRoutes("Mont Temetiu", ["Mont Feani", 8], ["Taaoa", 4]);
creerRoutes("Atuona", ["Taaoa", 3], ["Hanakee pearl lodge", 1]);
creerRoutes("Cemetery", ["Hanakee pearl lodge", 6], ["Mont Ootua", 5]);
creerRoutes("Hanapaoa", ["Mont Ootua", 3]);
creerRoutes("Puamua", ["Mont Ootua", 13], ["Point Teohotepapapa", 14]);

console.log(routes);

var routesDepuis = function routesDepuis(lieu) {
    if (routes[lieu] == undefined) {
        throw new Error("Lieu " + lieu + " non trouvé");
    }
    return routes[lieu];
};

console.log(routesDepuis("Hanaiapa"));
//console.log(routesDepuis("Seigy"));

var trouveCheminOptimal = function trouveCheminOptimal(depart, arrivee) {
    //var distanceMin = undefined;
    /* de la forme
      [{lieu: xxx, distance: xxx}, { lieu: xxx, distance: xxx}],
      [{lieu: xxx, distance: xxx}, { lieu: xxx, distance: xxx}]
     */
    var parcoursPossibles = [];
    
    var estPresent = function estPresent(lieu, lieux) {
        for (var i = 0, len = lieux.length; i < len; ++i) {
            var temp = lieux[i];
            if (temp.nom === lieu) {
                return true;
            }
        }
        return false;
    }

    // cheminsParcourus doit avoir au moins une longueur 1 (départ)
    var chercheVoisins = function chercheVoisins(but, cheminsParcourus) {
        var routes = routesDepuis(cheminsParcourus[cheminsParcourus.length - 1].nom);
        
        for (var i = 0, len = routes.length; i < len; ++i) {
            var escale = routes[i];
            if (!estPresent(escale.to, cheminsParcourus)) {
                var newTableau = cheminsParcourus.slice(0);
                newTableau.push({nom: escale.to,distance: escale.distance});

                //var dist = calculeDistance(cheminsParcourus);
                
                if (escale.to === but) {
                    //if (!distanceMin || distance <= distanceMin) {
                    //distanceMin = distance;
                    parcoursPossibles.push(newTableau);
                //}
                } 
                else {
                    chercheVoisins(but, newTableau);
                }
            }
        }
    }
    
    chercheVoisins(arrivee, [{nom: depart,distance: 0}]);
    
    return parcoursPossibles;
};

var affichage = function affichage(solutions) {
    var num = 1;
    
    var afficheRoute = function afficheRoute(listePoints) {
        var cout = 0;
        var msg = "";
        
        for (var i = 0, len = listePoints.length; i < len; ++i) {
            var escale = listePoints[i];
            msg += "/" + escale.nom
            cout += escale.distance;
        }
        console.log(num++ + " : " + cout + " : " + msg);
    };
    
    console.log("Chemins trouvés ----------------------------------------------");
    
    for (var i = 0, len = solutions.length; i < len; ++i) {
        afficheRoute(solutions[i]);
    }

}


//var chemin = trouveCheminOptimal("Hanaiapa", "Mont Ootua");
var res = trouveCheminOptimal("Point Kiukiu", "Airport");

affichage(res);