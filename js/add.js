function add() {
    var new_card = {
        job_name: '',
        assigned_person: '',
        start_date: '',
        deadline: ''
    };
    new_card.job_name = document.getElementById("add_job_name").value;
    new_card.assigned_person = document.getElementById("add_assigned_person").value;
    new_card.start_date = document.getElementById("add_start_date").value;
    new_card.deadline = document.getElementById("add_deadline").value;
    var index_thu = document.getElementById("add_detail").getAttribute("thu_duoc_fix");
    danh_sach_lon[index_thu].thong_tin.push(new_card);
    createAll();
}
