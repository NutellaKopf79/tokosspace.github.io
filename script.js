function show(id, triggerEl) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Deactivate all nav links
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

    // Show the target section
    document.getElementById(id).classList.add('active');

    // Activate the clicked nav link
    if (triggerEl) triggerEl.classList.add('active');
}