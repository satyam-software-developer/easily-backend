function confirmDelete(id){
    const ans = confirm('Are you sure you want to delete this Job?');
    if(ans)
    {
        window.location.href = '/delete/' + id;
    }
}