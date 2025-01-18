import Jobs from "./jobs.modal.js";
var applicantsList = [];

export default class Applicants{
    constructor(id, name, email, contact, resume, companyName)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
        this.companyName= companyName;
    }

    static addApplicant(id, name, email, contact, resume, companyName){
        const applicantId = applicantsList.length + 1;
        const newAplicant = new Applicants(applicantId, name, email, contact, resume, companyName);
        applicantsList.push(newAplicant);

        const job = Jobs.getById(id);
        job.applicants += 1;
    }

    static getApplicants(companyName)
    {
        const applicantList=  applicantsList.filter((a) => a.companyName == companyName);
        return applicantList;
    }

    static deleteApplicant(id){
        const findIndex = applicantsList.findIndex((p) => p.id == id);
        applicantsList.splice(findIndex, 1);
    }
}

