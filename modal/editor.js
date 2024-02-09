const mongoose = require("mongoose");

const editorSchema = new mongoose.Schema({
  name: { type: String },
  content: {
    type: String,
  },
  password: { type: String },
});

const EditorModel = mongoose.model("Editor", editorSchema);

module.exports = EditorModel;
