const {Router} = require("express");
const controller  = require("./controller")


const router = Router();

router.get("/", controller.getTasks);
router.get("/:id", controller.getById);
router.get("/user/:username" ,controller.getUserByUsername);
router.post("/", controller.addTask);
router.put("/:id/toggle", controller.toggleTask);
router.put("/:id/update", controller.updateTask); 
router.delete("/:id/remove", controller.removeTask); 
router.post('/addUser', controller.addUser);

module.exports = router;