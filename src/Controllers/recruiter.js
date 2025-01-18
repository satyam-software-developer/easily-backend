import Jobs from "../Models/jobs.modal.js";
import Applicants from "../Models/applicants.modal.js";

export default class Recruiter {
  getPostJob(req, res, next) {
    res.render("postJob", { email: req.session.email, name: req.session.name });
  }

  postjob(req, res, next) {
    const {
      jobCategory,
      designation,
      companyName,
      location,
      salary,
      lastDateToApply,
      positions,
      skills,
    } = req.body;
    Jobs.addJob(
      jobCategory,
      designation,
      companyName,
      location,
      salary,
      lastDateToApply,
      positions,
      skills
    );

    const jobs = Jobs.get();
    res.status(200).render("jobs", {
        jobs: jobs,
        email: req.session.email,
        name: req.session.name,
      });
  }

  getApplicants(req, res, next) {
    const id = req.params.id;
    const companyName = Jobs.getById(id).companyName;
    const applicants = Applicants.getApplicants(companyName);

    if (applicants)
      res.render("applicants", {
        applicants: applicants,
        companyName: companyName,
        email: req.session.email,
        name: req.session.name,
      });
    else res.send(`No applicants for for ${applicants.companyName}`);
  }

  deleteApplicant(req, res, next){
    const param = req.params.param;
    let index=0;
    let id = "";
    for(let i = 0; i<param.length; i++)
    { 
      if(param[i] == '-')
      break;
      else
      id+=param[i];
    }
    index++;

    let companyName = param.substring(index+1, param.length);

    const applicants = Applicants.getApplicants(companyName);

    Applicants.deleteApplicant(id);
    Jobs.reduceApplicants(companyName.trim().toLowerCase());

    const jobs = Jobs.get();
    res.status(200).render("jobs", {
        jobs: jobs,
        email: req.session.email,
        name: req.session.name,
      });
  }

  updateJob(req, res, next) {
    const id = req.params.id;
    const {
      jobCategory,
      designation,
      companyName,
      location,
      salary,
      lastDateToApply,
      positions,
      skills,
    } = Jobs.getById(id);

    res.render("updatejob", {
      email: req.session.email,
      name: req.session.name,
      id,
      jobCategory,
      designation,
      companyName,
      location,
      salary,
      lastDateToApply,
      positions,
      skills,
    });
  }

  postUpdateJob(req, res, next) {
    const {
      jobCategory,
      designation,
      companyName,
      location,
      salary,
      lastDateToApply,
      positions,
      skills,
    } = req.body;
    const id = req.params.id;
    Jobs.updateJob(
      id,
      jobCategory,
      designation,
      companyName,
      location,
      salary,
      lastDateToApply,
      positions,
      skills
    );

    const jobs = Jobs.get();
    res.status(200).render("jobs", {
      jobs: jobs,
      email: req.session.email,
      name: req.session.name,
    });
  }

  deleteJob(req, res, next){
    const id = req.params.id;
    Jobs.deleteJob(id);

    const jobs = Jobs.get();
    res.status(200).render("jobs", {
      jobs: jobs,
      email: req.session.email,
      name: req.session.name,
    });
  }
}
