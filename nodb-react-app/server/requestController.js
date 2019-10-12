let editList = [
  {
    id: 0,
    status: "NEW",
    name: "Pat Thibodeau",
    email: "patrick.thibodeau@gmail.com",
    beforeURL:
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    afterURL: "insert after URL here",
    comment: "Make this photo awesome!"
  }
];

let id = 1;
let status = "NEW";
let afterURL = "";

function viewEdits(req, res) {
  res.status(200).json(editList);
}

function addEdit(req, res) {
  const { name, email, beforeURL, comment } = req.body;
  editList.push({
    id,
    status,
    name,
    email,
    beforeURL,
    afterURL,
    comment
  });
  id++;
  res.status(200).json(editList);
}

function removeEdit(req, res) {
  const { id } = req.params;
  console.log(id);
  const index = editList.findIndex(element => {
    if (element.id == id) {
      return true;
    }
  });
  editList.splice(index, 1);
  res.status(200).json(editList);
}

function updateEdit(req, res) {
  const { afterURL } = req.body;
  const updateID = req.params.id;
  const index = editList.findIndex(element => element.id == updateID);
  let edit = editList[index];

  editList[index] = {
    id: edit.id,
    status: edit.status,
    afterURL: afterURL || edit.afterURL,
    name: edit.name,
    email: edit.email,
    beforeURL: edit.beforeURL,
    comment: edit.comment
  };
  res.status(200).json(editList);
}

module.exports = {
  viewEdits,
  addEdit,
  removeEdit,
  updateEdit
};
