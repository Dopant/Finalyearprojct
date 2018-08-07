$(function () {

    $('#equipmentUpdateButton ').on('click',function (event) {
        event.preventDefault();



        var $equipmentName = $('#equipmentdropdown');
        var $equipmentCost = $('#equipmentCost');



        var equipmentupdate = {
            equipment : $equipmentName.val(),
            cost : $equipmentCost.val(),
        };
        swal({
            title: "Are you sure?",
            text: "Once entered, you will not be able to alter this submission!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        method: 'POST',
                        url:'/storesEquipmentUpdate',
                        data: equipmentupdate,
                        success: function (value){
                            console.log(value);
                            swal({
                                title: "Completed!",
                                text: "Record Updated!",
                                icon: "success",
                                button: "ok",
                            });
                        },
                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The  request failed!", "error");
                        },
                    });
                } else {
                    swal("Your record was not updated");
                }
            });
    });
});