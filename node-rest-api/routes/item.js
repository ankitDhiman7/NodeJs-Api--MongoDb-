const express = require("express");
const itemModel = require("../models/item");
const authenticateToken = require("../middleware/auth");
const logRequestDetails = require("../middleware/log");
const router = express.Router();

async function getItem (req, res, next) {
  let item;
  try {
    item = await itemModel.findById(req.params.id);
    
    if (item == null) return res.status(404).json({ message: "No Item Found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.item = item;
  next();
};

/*==== GET : /item =====*/
router.get("/", logRequestDetails, authenticateToken, async (req, res) => {
  try {
    const items = await itemModel.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/:id", logRequestDetails, authenticateToken, getItem, async (req, res) => {
  try {
   
    return res.status(200).json(res.item);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", logRequestDetails, authenticateToken, async (req, res) => {
  const item = new itemModel({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newItem = await item.save();
    return res.status(200).json(newItem);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.put(
  "/:id",
  logRequestDetails,
  authenticateToken,
  getItem,
  async (req, res) => {
    if (req.body.name != null) {
      res.item.name = req.body.name;
    }
    if (req.body.description != null) {
      res.item.description = req.body.description;
    }

    try {
      const updatedItem = await res.item.save();
      return res.status(200).json(updatedItem);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

router.delete(
  "/:id",
  logRequestDetails,
  authenticateToken,
  getItem,
  async (req, res) => {
    try {
      await itemModel.deleteOne(res.item);
      return res.status(200).json("Item Deleted");
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
