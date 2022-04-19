module.exports = app => {
    const penerima = require("../controllers/penerima.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", penerima.create);
  
    // Retrieve all Tutorials
    router.get("/:userId", penerima.findAll);

    // Retrieve a single Tutorial with id
    router.get("/", penerima.findName);

    router.get("/:userId/:id", penerima.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", penerima.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", penerima.delete);
  
    // Delete all Tutorials
    router.delete("/", penerima.deleteAll);
  
    app.use('/api/penerima', router);
  };