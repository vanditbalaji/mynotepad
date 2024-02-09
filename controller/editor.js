const Editor = require("../modal/editor.js");

const getData = async (req, res) => {
  try {
    const name = req.query.name;
    const user = await Editor.findOne({ name: name });
    if (user) {
      const data = user;
      return res.status(200).json({ data });
    } else {
      const createUser = await Editor.create({ name: name });
      const data =
        "<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>";
      return res.status(200).json({ data });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const putData = async (req, res) => {
  try {
    const { name, content } = req.body;

    const updatedData = await Editor.findOneAndUpdate(
      { name: name },
      { content: content },
      { new: true }
    );

    return res.status(200).json({ updatedData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const setPassword = async (req, res) => {
  try {
    const { name, password } = req.body;

    const updatedData = await Editor.findOneAndUpdate(
      { name: name },
      { password: password },
      { new: true }
    );

    return res.status(200).json({ updatedData });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const setUsername = async (req, res) => {
  try {
    const { name, username } = req.body;
    const editor = await Editor.findOne({ name: username });
    const isAvailable = !!editor;
    const same = name === username;
    if (isAvailable && !same) {
      return res.status(200).json({ error: "Already Existed" });
    } else {
      const updatedData = await Editor.findOneAndUpdate(
        { name: name },
        { name: username },
        { new: true }
      );
      return res.status(200).json({ updatedData });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getData, putData, setPassword, setUsername };
