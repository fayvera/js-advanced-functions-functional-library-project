const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newColl = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newColl.length; i++)
        callback(newColl[i])
      return collection
    },


    map: function(collection, callback) {

      if (!(collection instanceof Array))
      collection = Object.values(collection)

      const newArr = []
      for (let i = 0; i < collection.length; i++){
        newArr.push(callback(collection[i]))
      }
      return newArr
    },

    reduce: function(c = [], callback = () => {}, acc) {

      let collection = [...c]
      if (!acc){
        let acc = collection[0]
        debugger 
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },



    functions: function() {

    },


  }
})()

fi.libraryMethod()



// fi.reduce([1, 2, 3, 4], function(acc, val, collection) { return acc + val; })