const router = require("express").Router();
const volunteerData = require("../../models/volunteerSchema");

router.get("/", async (req, res) => {
  const id = req.query.particular;

  console.log("SR:router-volunteerList try ", id);
  try {
    if (id) {
      const volunteer = await volunteerData
        .findById(id)
        .populate('works.workDetails')
        .exec();
      if (volunteer) {
        console.log(volunteer.works);
        res.status(200).send({ data: volunteer.works });
      } else {
        res.status(404).json({ message: "Volunteer not found" });
      }
    } else {
      const volunteers = await volunteerData.find({});
      res.status(200).json(volunteers);
    }
  } catch (err) {
    console.log("SR:router-volunteerList: error", err);
    res.status(500).json({ message: "Error retrieving volunteers" });
  }
});

module.exports = router;
