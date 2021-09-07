function sua_thong_tin(index, chi_so) {
    var card_duoc_sua = danh_sach_lon[index].thong_tin[chi_so];
    var started_fix = `
<input type="text" placeholder="${card_duoc_sua.job_name}" id="fix_job_name">
<input type="text" placeholder="${card_duoc_sua.assigned_person}" id="fix_assigned_person">
<input type="text" placeholder="${card_duoc_sua.start_date}" id="fix_start_date">
<input type="text" placeholder="${card_duoc_sua.deadline}" id="fix_deadline">`
    content_modal_fix.innerHTML = started_fix;
    document.getElementById('fix_detail').setAttribute('thu_duoc_fix', index);
    document.getElementById('fix_detail').setAttribute('the_duoc_fix', chi_so);
}