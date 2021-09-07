function createAll() {
    var html = '';
    danh_sach_lon.forEach((element, index) => {
        var cong_viec = '';
        element.thong_tin.forEach((gia_tri, chi_so) => {
            cong_viec += `   <div class="card">
    <div class="card-body">
        <div class="inline-block">
            <h6 class="card-title">${gia_tri.job_name}</h6>
            <p class="card-text">${gia_tri.start_date}</p>
        </div>
        <div class="inline-block">
            <p class="card-text">${gia_tri.assigned_person}</p>
            <p class="card-text">${gia_tri.deadline}</p>
        </div>
        <button onclick="xoa_cong_viec(${index},${chi_so})" class="btn btn-danger">Xóa</button>
        <button onclick="sua_thong_tin(${index},${chi_so})" class="btn btn-success" data-bs-toggle="modal"
            data-bs-target="#fix_detail">Sửa</button>
    </div>
</div>`;
        });
        html += `<div class="to-do-list">
    <div class="card">
        <div class="card-header">
            ${element.tieu_de}
        </div>
        <div class="card-body">
                ${cong_viec}
        </div>
        <div class="card-footer">
            <button onclick="xoa_list(${index})" class="btn btn-danger">Xóa tất cả</button>
            <button class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#add_detail" onclick='ghi_thu(${index})'>Thêm</button>
        </div>
    </div>
</div>`;
    });
    to_do_list.innerHTML = html;
}