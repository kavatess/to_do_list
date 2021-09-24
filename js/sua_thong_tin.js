function sua_thong_tin(index, chi_so) {
    var card_duoc_sua = danh_sach_lon[index].thong_tin[chi_so];
    var started_fix = `
    <div class="inline-block">
        <label>Tên công việc</label>
        <input type="text" placeholder="${card_duoc_sua.job_name}" id="fix_job_name">
    </div>
    <div class="inline-block">
        <label>Người thực hiện</label>
        <input type="text" placeholder="${card_duoc_sua.assigned_person}" id="fix_assigned_person">
    </div>
    <div class="inline-block">
        <label>Thời gian bắt đầu</label>
        <div>
        <input type="date" id="fix_start_date">
        <input type="time" id="fix_start_time">
        </div>
    </div>
    <div class="inline-block">
        <label>Thời gian hoàn thành</label>
        <div>
        <input type="date" id="fix_deadline">
        <input type="time" id="fix_deadline_time">
        </div>
    </div>`
    content_modal_fix.innerHTML = started_fix;
    document.getElementById('fix_detail').setAttribute('thu_duoc_fix', index);
    document.getElementById('fix_detail').setAttribute('the_duoc_fix', chi_so);
}