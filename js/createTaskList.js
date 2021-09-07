function createTaskList() {
    var taskTitle = document.getElementById('task_title').value;
    var new_list = {
        tieu_de: taskTitle,
        thong_tin: []
    };
    danh_sach_lon.push(new_list);
    var index = danh_sach_lon.length - 1;
    const html = `<div class='to-do-list'>
    <div class="card">
        <div class="card-header">
            ${taskTitle}
        </div>
        <div class="card-body">
            <div id="card_list"></div>
        </div>
        <div class="card-footer">
            <button onclick="xoa_list(${index})" class="btn btn-danger">Xóa tất cả</button>
            <button class="btn btn-primary" data-bs-toggle="modal" 
            data-bs-target="#add_detail" onclick='ghi_thu(${index})'>Thêm</button>
        <div>
    </div>
</div>`;
    document.getElementById('to_do_list').innerHTML += html;
}