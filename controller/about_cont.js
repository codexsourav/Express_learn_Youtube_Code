const home = (req, res) => {
  res.send("Hello World");
};

const about = (req, res) => {
  const name = req.params.name;
  const id = req.params.id;
  res.send("Hello About " + name + id);
};

module.exports.about = about;
module.exports.home = home;
