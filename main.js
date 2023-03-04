function onSubmit(e) {
    e.preventDefault()
    swal("Good job!", "We Send it to your email!", "success");
    e.target.closest("form").reset();
}