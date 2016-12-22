document.getElementById('menu-toggle-btn').addEventListener("click", function() {
    document.getElementById('menu-btn-container').classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('menu-btn-container').style.display="none";
});

document.getElementById('menu-close-btn').addEventListener("click", function() {
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('menu-close-btn').classList.toggle('active');
    document.getElementById('menu-btn-container').classList.toggle('active');
    document.getElementById('menu-btn-container').style.display="block";
});
