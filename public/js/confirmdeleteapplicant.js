function confirmDeleteApplicant(string){
    const ans = confirm('Are you sure you want to remove this Applicant?');
    if(ans)
    {
        window.location.href = '/applicants/delete/' + string;
    }
}