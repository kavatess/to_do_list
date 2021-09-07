function fix_card() {
    var new_card_fixed = {
        job_name: '',
        assigned_person: '',
        start_date: '',
        deadline: ''
    };
    new_card_fixed.job_name = document.getElementById("fix_job_name").value;
    new_card_fixed.assigned_person = document.getElementById("fix_assigned_person").value;
    new_card_fixed.start_date = document.getElementById("fix_start_date").value;
    new_card_fixed.deadline = document.getElementById("fix_deadline").value;
    var index_thu = Number(document.getElementById("fix_detail").getAttribute('thu_duoc_fix'));
    var index_card_fix = Number(document.getElementById("fix_detail").getAttribute('the_duoc_fix'));
    danh_sach_lon[index_thu].thong_tin[index_card_fix] = new_card_fixed;
    createAll();
}