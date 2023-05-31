const tasks = [];
const addElement = function () {
  const number = document.getElementById("num-task").value;
  const title = document.getElementById("title-task").value;
  let task = {number:number, title:title};
  if (!task) {
    alert("Please enter a valid data");
  } else {
    task = createTr(number,title)
  }
};
function createTr(number, title) {
  const empTable = document.querySelector(".list");
  const emp_tr = empTable.insertRow(empTable.length);
  const emp_td1 = emp_tr.insertCell(0);
  const emp_td2 = emp_tr.insertCell(1);
  const emp_td3 = emp_tr.insertCell(2);
  const emp_td4 = emp_tr.insertCell(3);
  // const totalRowCount = document.querySelector(".list tr").length;
  emp_td1.innerHTML = empTable.rows.length - 1;
  //Note:- .rows.length = return no of row

  emp_td2.innerHTML = number;
  emp_td3.innerHTML = title;
  emp_td4.innerHTML =
    '<button class="edt" onClick="onEdit(this)">Edit</button>   <button class="dlt" onClick="onDelete(this)">Delete</button>';
    return removeValue();
}

function removeValue(){
  document.getElementById("num-task").value = "";
  document.getElementById("title-task").value = "";
}

function onEdit(){
  let data = document.querySelector(".edt");
  editRow = data.parentElement.parentElement;
  document.querySelector("#num-task").value = editRow.cells[2].innerHTML;
  document.querySelector("#title-task").value = editRow.cells[3].innerHTML;
}
function onDelete() {
  if (confirm('Are you sure to delete this record ?')) {
      let selectdelete = document.querySelector(".dlt");
      selectdelete = selectdelete.parentElement.parentElement.remove(0);
  }
}

