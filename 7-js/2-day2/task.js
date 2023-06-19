const addElement = function () {
  const number = document.getElementById("num-task").value;
  const title = document.getElementById("title-task").value;
  let task = { number: number, title: title };
  if (!task) {
    alert("Please enter a valid data");
  } else {
    task = createTr(number, title);
  }
};

const tasks = [];
function createTr(number, title) {
  const empTable = document.querySelector(".list");
  const emp_tr = empTable.insertRow(empTable.length);
  const emp_td1 = emp_tr.insertCell(0);
  const emp_td2 = emp_tr.insertCell(1);
  const emp_td3 = emp_tr.insertCell(2);
  const emp_td4 = emp_tr.insertCell(3);

  // const totalRowCount = document.querySelector(".list tr").length;
  emp_td1.innerHTML = empTable.rows.length - 1;
  tasks.push({id: emp_td1.innerHTML, number, title});
  // console.log(tasks);
  //Note:- .rows.length = return no of row

  emp_td2.innerHTML = `<input class="number_input" type="number" value="${number}" disabled/>`;
  emp_td3.innerHTML = `<input class="priority_input" type="text" value="${title}" disabled/>`;
  emp_td4.innerHTML =
    '<button class="edt" onClick="onEdit(this)">Edit</button>   <button class="dlt" onClick="onDelete(this)">Delete</button>';
  removeValue();
  sortData();
  console.log(tasks);
}

function sortData() {
  tasks.sort((a, b) => a.number - b.number)
  const empTable = document.querySelector(".list");
  const sortTr2 = tasks.number;
  // empTable.children[1].innerHTML = sortTr2;
  // sortTr2.innerHTML = createTr(emp_td2);
}


function removeValue() {
  document.getElementById("num-task").value = "";
  document.getElementById("title-task").value = "";
}

function onEdit(e) {
  let editRow = e.parentElement.parentElement;
  if (editRow.cells[1].children[0].disabled) {
    e.innerHTML = "Save";
    e.parentElement.querySelector(".dlt").style.display = "none";
    editRow.cells[1].children[0].disabled = false;
    editRow.cells[2].children[0].disabled = false;
  } else {
    e.innerHTML = "Edit";
    e.parentElement.querySelector(".dlt").style.display = "inline-block";
    editRow.cells[1].children[0].disabled = true;
    editRow.cells[2].children[0].disabled = true;
  }
  // editRow = data.target.parentElement[i];
}

function onDelete(e) {
  if (confirm("Are you sure to delete this record ?")) {
    let selectdelete = e.parentElement.parentElement;
    selectdelete = selectdelete.remove(e);
  }
}

document
  .getElementById("saveAllBtn")
  .addEventListener("click", function saveAll() {
    const empTable = document.querySelector(".list");
    for (let i = 0; i < empTable.rows.length; i++) {
      const row = empTable.rows[i];
      for (let j = 0; j < row.cells.length; j++) {
        const cell = row.cells[j];
        const hasChildren = cell.children.length > 0;
        if (hasChildren) {
          if (cell.children[0].className === "number_input") {
            cell.children[0].disabled = true;
          } else if (cell.children[0].className === "priority_input") {
            cell.children[0].disabled = true;
          } else if (cell.children[0].className === "edt") {
            cell.children[0].innerHTML = "Edit";
            cell.children[1].style.display = "inline-block";
          }
        }
      }
    }

    // if ((editAll.innerHTML = "Save")) {
    //   console.log("Save mode")
    //   // editAll.innerHTML = "Edit";
    // }
  });

// function saveAll() {
//   let savebtn = document.querySelector(".edt");
//   var table = document.getElementById("employeeList");
//   for (let i = 0; i < table.rows.length; i++) {
//     console.log("DSFSD");
//     // if ((savebtn.innerHTML = "Save")) {
//     //   savebtn.innerHTML = "Edit";
//     //   document.querySelector(".dlt").style.display = "inline-block";
//     //   // table.rows[i].cells[1].children[0].disabled = true;
//     //   // table.rows[i].cells[2].children[0].disabled = true;
//     //   console.log(table.rows[i].cells[1].children[0]);
//     //   console.log(table.rows[i].cells[2].children[0]);
//     // }
//     console.log(i);
//   }
// }

// function onEdit(data) {
//   // let data = document.querySelector(".edt");
//   let editRow = data.parentElement.parentElement;
//   console.log(editRow.cells);
//   document.getElementById("num-task").value = editRow.cells[1].innerHTML;
//   document.getElementById("title-task").value = editRow.cells[2].innerHTML;
//   update(editRow);
// }

// function update(editRow) {
//   editRow.cells[1].innerHTML = document.getElementById("num-task").value;
//   editRow.cells[2].innerHTML = document.getElementById("title-task").value;
// }
