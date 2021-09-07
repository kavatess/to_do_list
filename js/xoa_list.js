//xoa mot list cong viec
function xoa_list(index) {
    danh_sach_lon.splice(index, 1);
    createAll();
}