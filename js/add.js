function add() {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
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
        var addReq = [new_card, index_thu];
        if (new_card.job_name == '') {
            reject(new Error("Thiếu tên công việc!"));
        }
        if (new_card.assigned_person == '') {
            reject(new Error("Thiếu người chỉ định!"));
        }
        console.log(new_card.start_date, typeof new_card.start_date);
        const checkStartDate = checkDateInput(new_card.start_date);
        if (checkStartDate instanceof Error) {
            reject(new Error(checkStartDate.message));
        }
        const checkDeadline = checkDateInput(new_card.deadline);
        if (checkDeadline instanceof Error) {
            reject(new Error(checkDeadline.message));
        }
        request.open("POST", 'http://localhost:9000/add', true);
        request.send(JSON.stringify(addReq));
        request.onload = () => {
            var result = request.responseText;
            danh_sach_lon = JSON.parse(result);
            createAll();
            resolve(result);
        }
    }).catch(err => alert(err.message));
}

// yyyy-mm-dd
function checkDateInput(dateCheck) {
    if (!dateCheck) return new Error("Ngày bắt đầu còn thiếu!");
    if (new Date(dateCheck).toString() === "Invalid Date") return new Error("Invalid Date");
}
