class Task {
    private tieu_de = "";
    private thong_tin = [new Card(), new Card()];
    constructor(tieu_de, thong_tin) {
        this.tieu_de = tieu_de;
        this.thong_tin = thong_tin;
    }
    add(job_name: string,) {
        var new_card = new Card();
        new_card.modifyJobName(job_name);
        new_card.assigned_person = document.getElementById("add_assigned_person").value;
        new_card.start_date = document.getElementById("add_start_date").value;
        new_card.deadline = document.getElementById("add_deadline").value;
        var index_thu = document.getElementById("add_detail").getAttribute("thu_duoc_fix");
        // danh_sach_lon[index_thu].thong_tin.push(new_card);
        // createAll();
    }
    modifyCard(index, newJobName) {
        this.thong_tin[index].getJobName();
        this.thong_tin[index].modifyJobName("gfduihfdgu");
    }
}
class Card {
    private job_name: string;
    private assigned_person: string;
    private start_date: Date;
    private deadline: Date;
     getJobName(): string {
        return this.job_name;
    }
    getAssignedPerson(): string {
        return this.assigned_person;
    }
    getStartDate(): Date {
        return this.start_date;
    }
    getDeadline(): Date {
        return this.deadline;
    }
    modifyJobName(newJobName: string) {
        this.job_name = newJobName;
    }
    modifyDeadline(newDeadline: string) {
        if (new Date(newDeadline).toString() === "Invalid Date") {
            console.error("Bạn nhậm không đúng format ngày tháng năm");
        }
        if (new Date(newDeadline) > new Date(this.start_date)) {
            this.deadline = new Date(newDeadline);
        }
        console.error("Deadline của bạn không hợp lệ");
    }
}