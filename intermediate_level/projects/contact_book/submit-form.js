function submitForm(e) {
    e.preventDefault();

    const form = new FormData(document.querySelector('#editForm'));
    form.append('apiKey', apiKey)

}