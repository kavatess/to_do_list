function fix_card() {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
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
        var fixCardReq = {
            new_card_fixed: new_card_fixed,
            index_thu: index_thu,
            index_card_fix: index_card_fix
        };
        request.open("POST", 'http://localhost:9000/fix_card', true);
        request.send(JSON.stringify(fixCardReq));
        request.onload = () => {
            var result = request.responseText;
            danh_sach_lon = JSON.parse(result);
            createAll();
            resolve(result);
        }
    })
    
}
