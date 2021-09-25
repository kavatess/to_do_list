function fix_card() {
    var fix_start_date = document.getElementById("fix_start_date").value;
    var fix_start_time = document.getElementById("fix_start_time").value;
    var fix_deadline_date = document.getElementById("fix_deadline_date").value;
    var fix_deadline_time = document.getElementById("fix_deadline_time").value;

    var start_date = fix_start_date.split("-");
    var array_start_date = [];
    start_date.forEach(element => {
        array_start_date.push(Number(element));
    });
    //Mảng array_start_date là mảng số dạng [năm, tháng, ngày]

    var start_time = fix_start_time.split(":");
    var array_start_time = [];
    start_time.forEach(element => {
        array_start_time.push(Number(element));
    });
    //Mảng array_start_time là mảng số dạng [giờ, phút], giờ tính theo hệ 24h

    var deadline_date = fix_deadline_date.split("-");
    var array_deadline_date = [];
    deadline_date.forEach(element => {
        array_deadline_date.push(Number(element));
    });

    var deadline_time = fix_deadline_time.split(":");
    var array_deadline_time = [];
    deadline_time.forEach(element => {
        array_deadline_time.push(Number(element));
    });



    //Năm bắt đầu > năm hoàn thành là một điều kiện năm sai.
    var dknam = array_start_date[0] > array_deadline_date[0];
    var dknam_bang = array_start_date[0] == array_deadline_date[0];

    //điều kiện năm bằng + (tháng bắt đầu > tháng hoàn thành) là một điều kiện sai
    var dkthang = dknam_bang && (array_start_date[1] > array_deadline_date[1]);
    var dkthang_bang = dknam_bang && (array_start_date[1] == array_deadline_date[1]);

    var dkngay = dkthang_bang && (array_start_date[2] > array_deadline_date[2]);
    var dkngay_bang = dkthang_bang && (array_start_date[2] == array_deadline_date[2]);

    var dkgio = dkngay_bang && (array_start_time[0] > array_deadline_time[0]);
    var dkgio_bang = dkngay_bang && (array_start_time[0] == array_deadline_time[0]);

    var dkphut = dkgio_bang && (array_start_time[1] >= array_deadline_time[1]);

    //Báo lỗi khi xảy ra bất kỳ một điều kiện sai nào đó.



    if (dknam || dkthang || dkngay || dkgio || dkphut) {
        alert("Thời gian hoàn thành phải muộn hơn thời gian bắt đầu. Vui lòng nhập lại!")
    }
    else {
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
            new_card_fixed.start_date = fix_start_date + " " + fix_start_time;
            new_card_fixed.deadline = fix_deadline_date + " " + fix_deadline_time;
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
}
