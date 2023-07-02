const express = require("express");
const router = express.Router();
const Coffee = require("../model/coffee");
const coffeesController = require("../controllers/coffees-controller");

router.get("/", coffeesController.getAllCoffees);
router.post("/", coffeesController.addCoffee);
router.get("/:id", coffeesController.getById);
router.put("/:id", coffeesController.updateCoffee);
router.delete("/:id", coffeesController.deleteCoffee);

module.exports = router;
