$(document).ready(function () {
  //console.log("data",{{data}});
  let data = [
    {
      id: 1,
      firstname: "donia",
      middlename: "ali",
      lastname: "ali",
      country: "cairo",
      salary: 1000,
      birthdate: "1999-7-7",
    },
    {
      id: 2,
      firstname: "donia",
      middlename: "ali",
      lastname: "ali",
      country: "cairo",
      salary: 1000,
      birthdate: "1999-7-7",
    },
  ];

  if (data) {
    for (let row of data) {
      let date = new Date(row.birthdate);
      let formattedDate = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;
      $("#tbody").append(
        `<tr>
                          <td class="text-center">${row.id}</td>
                          <td class="text-center">${row.firstname}</td>
                          <td class="text-center">${row.middlename}</td>
                          <td class="text-center">${row.lastname}</td>
                          <td class="text-center">${row.country}</td>
                          <td class="text-center">${row.salary}</td>
                          <td class="text-center">${formattedDate}</td>
                          <td class="text-center">
                            <button id=${row.id} class="btn btn-danger remove" type="button">Remove</button>
                          </td>
                    </tr>`
      );
    }
  }

  $("#tbody").on("click", ".remove", function () {
    console.log("removed");
    console.log($(this));
    var id = $(this).attr("id");
    $(this).parent().parent().remove();
    
  });
});
