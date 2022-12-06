$(document).ready(function(){
    //console.log("data",{{data}});
    $.ajax({
        type: "GET",
        url: '/employee/view',
        success: function(data){
          if(data) {
              for( let row of data ){
                let date = new Date(row.birthdate);
                let formattedDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
                $('#tbody').append(
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
                    </tr>`);
              }
          }
        }
      });

      $('#tbody').on('click', '.remove', function () {
        console.log("removed");
        var id = $(this).attr("id");
        $(this).parent().parent().remove();
        $.ajax({
        type: "DELETE",
        data : { message : "deleted"},
        url: '/employee/'+`${id}`,
        success: function(data){
          if(data) {
            console.log(data);
          }
        }
      });
      });
      
  });      