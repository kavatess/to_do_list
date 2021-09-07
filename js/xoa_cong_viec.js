//xoa mot cong viec nho
function xoa_cong_viec(index, chi_so) {
    danh_sach_lon[index].thong_tin.splice(chi_so, 1);
    createAll();
    deleteTaskData(index);
}

function deleteTaskData(index) {
    var deleteReq = {
        index: index,
        cong_viec_lon_moi: danh_sach_lon[index]
    }
    var request = new XMLHttpRequest();
    request.open("POST", 'http://localhost:9000/delete-task', false);
    request.send(JSON.stringify(deleteReq));
    var result = request.responseText;
    if (result != "") result = JSON.parse(result);
    console.log(result);
}