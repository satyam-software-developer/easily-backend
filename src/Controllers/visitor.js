import Jobs from "../Models/jobs.modal.js";
import Applicants from "../Models/applicants.modal.js";
import nodemailer from "nodemailer";

export default class Visitor {
  homePage(req, res, next) {
    res.render("homepage", {
      email: req.session.email,
      name: req.session.name,
    });
  }

  jobsHandler(req, res, next) {
    const jobs = Jobs.get();
    res.render("jobs", {
      jobs: jobs,
      email: req.session.email,
      name: req.session.name,
    });
  }

  jobDetails(req, res, next) {
    const getJobId = req.params.id;
    const job = Jobs.getById(getJobId);
    // Check if the job is found
    if (job) {
      res.render("jobdetails", {
        job: job,
        email: req.session.email,
        name: req.session.name,
      });
    } else {
      // Handle the case where the job is not found
      res
        .status(404)
        .render("404page", {
          errorMsg: "Job Not Found!",
          email: req.session.email,
          name: req.session.name,
        });
    }
  }

  applyJob(req, res, next) {
    const id = req.params.id;
    const { name, email, contact, companyName } = req.body;
    const resume = "resume/" + req.file.filename;
    const applicants = Applicants.getApplicants(companyName);
    if (applicants.length >= Jobs.getById(id).positions) {
      return res.render("postjobapply", {
        message: `Sorry, but we are currently unable to process your application for ${companyName} as all available positions have already been filled. Please consider trying again at a later time.`,
        companyName: companyName,
        name,
      });
    } else if (applicants.find((p) => p.name == name)) {
      return res.render("postjobapply", {
        message: `You have already applied for ${companyName}!`,
        companyName: companyName,
        name,
        email: req.session.email,
        name: req.session.name,
      });
    }

    Applicants.addApplicant(id,name, email, contact, resume, companyName);

    res.render("postjobapply", {
      message: `Congratulations! Your application for a position at ${companyName} has been successfully processed. We will contact you shortly via email at ${email} for further communication.`,
      companyName: companyName,
      name,
      email: req.session.email,
      name: req.session.name,
    });

    // ------Funciton to send email to the applicant------

    async function sendMail() {
      //Create email transporter, which configures email sender credentials
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "nodejsgautam@gmail.com",
          pass: "srqf hqxb iiee nvag",
        },
      });
      const htmlData = `<div style="text-align: center">
    <h1>Job Application for ${companyName}</h1>
    <p>
      Hi ${name}, Thank you for applying to a job at Easily. We have received
      your application and are currently reviewing it. <br /> If your qualifications
      match our requirements, we will contact you for the next steps of the
      selection process.<br />Thank you for your interest in Easily!
      <br /> <br>Best regards, <br />The Easily Team
    </p>
  </div>`;
      //Configure email content
      const mailOptions = {
        from: "nodejsgautam@gmail.com",
        to: `${email}`,
        cc: "gautamthapameriid@gmail.com",
        subject: "Job Application Received",
        html: htmlData, //body
      };

      //Send the email
      try {
        //We are using await here to wait for the sendMail to resolve the promise.
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
      } catch (error) {
        console.log("Email send failed: " + error);
      }
    }

    sendMail();
  }

  searchJobs(req, res, next){
    // console.log(req.query.search); //the search type form with get method sends data to the req.query 
    const searched = req.query.search.trim().toLowerCase();
    const jobsFound = Jobs.searchJob(searched);
    if(jobsFound){
      res.render('jobs', {jobs: jobsFound, email: req.session.email,
        name: req.session.name,})
    }
    else
    {
      res.render('404page', {errorMsg: "No jobs found with crrent search query!",
      email: req.session.email,
      name: req.session.name,})
    }
  }
}
