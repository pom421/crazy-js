const fetch = require("node-fetch")

// 1. Création d'une promesse portant une valeur simple
  function promise1() {
    const promise = Promise.resolve(10);

    // Utilisation d'une promesse

    promise.then(value => {
      console.log("value = ", value)
    })
  }

  // Res : value =  10


  // 2. Création d'une promesse portant une erreur
  function promise2() {
    const promise = Promise.reject(new Error("Problem !!!"))

    promise.then(value => {
      console.log("value = ", value)
    }).catch(err => {
      console.error("Error ", err)
    })

  }

  // Res Error  Error: Problem !!!
  //    at Object.<anonymous> (/Users/pomauguet/lab/node/kata/promise.js:13:26)
  //    at Module._compile (module.js:624:30)
  //    at Object.Module._extensions..js (module.js:635:10)
  //    at Module.load (module.js:545:32)
  //    at tryModuleLoad (module.js:508:12)
  //    at Function.Module._load (module.js:500:3)
  //    at Function.Module.runMain (module.js:665:10)
  //    at startup (bootstrap_node.js:187:16)
  //    at bootstrap_node.js:608:3

  // 3. Création d'une promesse classique pour encapsuler un traitement asynchrone

  function promise3() {
    // only for break boring tests
    const chance = require("chance").Chance()

    function getName(id) {
      const duration = chance.integer({ min: 0, max: 1000 })

      console.log("id", id, "duration", duration)

      return new Promise((resolve, reject) => {
        setTimeout(function ajaxFake() {
          // mock to get a person from an API
          const name = chance.name()
          resolve(id + ":" + name)
        }, duration)
      })
    }

    // appel simple
    //getName(1).then(name => {
    //  console.log("Id", name)
    //})


    // appel multiple
    Promise.all([
      getName(1),
      getName(2),
      getName(3), 
      getName(4),
      getName(5)
    ]).then(names => {
      names.forEach(name => {
        console.log("Id", name)
      })
    })
  }


  function promise4() {

    function runPromise() {
        return Promise.reject("Technical error")
    }
    
    let myPromise = runPromise().then(val => {
      console.log("Result", val)
    }, err => {
      console.error("Erreur ", err)
      return "12"
    }).then(val => {
      console.log("Finale result", val)
    }).catch(err => {
      console.error("Final error", err)
    })

    console.log("myPromise", myPromise)

  }

  function promise5(){
    console.log("fichier :" +  __dirname + "/test.json:")
    fetch("http://127.0.0.1:8081/test.json").then(res => {
      return res.json()
  }).then(json => {
      console.log("JSON ", json)
    }).catch(err => {
      console.error("Erreur lors de la lecture du JSON", err)
    })

  }

  function promise6() {
    fetch('https://api.github.com/users/github')
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
  }

promise6()