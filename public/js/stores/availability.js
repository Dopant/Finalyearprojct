
    $('#search').keyup(function () {

        var checkTableBody = document.getElementById('checkTableBody');
        var search = document.getElementById('search').value;
        var regex = new RegExp(search ,'i');

         if(search === '')  {
            $('#checkTableBody').html('');
            return;
          }


         let output;
          $.ajax({
            method: 'GET',
            url:'/checkApi',
            success: function (data){
                console.log(data);
                $('#checkTableBody').html('');
                for ( let i = 0 ; i < data.length; i++ ){
                    if( (data[i].name.search(regex) !== -1) || (data[i].no.search(regex) !== -1 ) ){
                        function dataCell(value){
                            var cell = document.createElement('td');
                            var text = document.createTextNode(value);
                            cell.appendChild(text);
                            return cell;
                        }
                        // create a table row to hold the new data inputted
                        var tableRow = document.createElement('tr');
                        // create a data column for each input data
                        // get the value in the partName element and create a new data cell
                        var item = dataCell(data[i].name);
                        tableRow.appendChild(item);
                        var number = dataCell(data[i].no);
                        tableRow.appendChild(number);
                        var cardex = dataCell(data[i].cardex);
                        tableRow.appendChild(cardex);
                        var price = dataCell(data[i].price);
                        tableRow.appendChild(price);
                        var quantity = dataCell(data[i].quantity);
                        tableRow.appendChild(quantity);
                       $('#checkTableBody').append(tableRow);
                    }

                }
            },
            error: function (value) {
                //alert('Data sending Failed');
                swal("Oh No!", "The  request failed!", "error");
            },
        });

    });
