export default class Jobs {
  constructor(
    id,
    jobCategory,
    designation,
    companyName,
    location,
    salary,
    lastDateToApply,
    positions,
    skills,
    postedOn,
    applicants
  ) {
    this.id = id;
    this.jobCategory = jobCategory;
    this.designation = designation;
    this.companyName = companyName;
    this.location = location;
    this.salary = salary;
    this.lastDateToApply = lastDateToApply;
    this.positions = positions;
    this.skills = skills;
    this.postedOn = postedOn;
    this.applicants = applicants;
  }

  //Model to add a new Job
  static addJob(
    jobCategory,
    designation,
    companyName,
    location,
    salary,
    lastDateToApply,
    positions,
    skills
  ) {
    const id = jobs.length + 1;
    const postedOn = new Date().toLocaleDateString();
    const newJob = new Jobs(
      id,
      jobCategory,
      designation,
      companyName,
      location,
      salary,
      lastDateToApply,
      positions,
      skills,
      postedOn,
      0
    );

    jobs.push(newJob);
  }

  static get() {
    return jobs;
  }

  static getById(id) {
    return jobs.find((p) => p.id == id);
  }

  static updateJob(
    id,
    jobCategory,
    designation,
    companyName,
    location,
    salary,
    lastDateToApply,
    positions,
    skills
  ) {
    const findIndex = jobs.findIndex((p) => p.id == id);

    jobs[findIndex].jobCategory = jobCategory;
    jobs[findIndex].designation = designation;
    jobs[findIndex].companyName = companyName;
    jobs[findIndex].location = location;
    jobs[findIndex].salary = salary;
    jobs[findIndex].lastDateToApply = lastDateToApply;
    jobs[findIndex].positions = positions;
    jobs[findIndex].skills = skills;
  }

  static deleteJob(id){
    const findIndex = jobs.findIndex((p) => p.id == id);
    jobs.splice(findIndex, 1);
  }

  static searchJob(name)
  {
    const findJobs = jobs.filter((p) => p.companyName.toLowerCase() === name);
    return findJobs;
  }

  static reduceApplicants(name)
  {
      const findIndex = jobs.findIndex((p) => p.companyName.toLowerCase() === name);
      jobs[findIndex].applicants--;
  }
}

var jobs = [
  new Jobs(
    0,
    "Tech",
    "SDE",
    "Amazon",
    "Gurugram HR Onsite",
    "42Lpa",
    new Date(2023, 11, 24).toLocaleDateString(),
    "20",
    ["Nodejs", "JavaScript", "HTML", "CSS", "React", "Express", "MongoDb"],
    new Date(2023, 11, 17).toLocaleDateString(),
    0
  ),
  new Jobs(
    1,
    "Tech",
    "Full Stack Web Developer",
    "Facebook",
    "Bengalore IND On-Site",
    "67Lpa",
    new Date(2023, 11, 10).toLocaleDateString(),
    "20",
    ["Nodejs", "JavaScript", "HTML", "CSS", "React", "Express", "MongoDb"],
    new Date(2023, 10, 21).toLocaleDateString(),
    0
  ),
];
