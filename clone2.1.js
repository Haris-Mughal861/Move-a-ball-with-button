document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ball');
    const button = document.getElementById('move-button');
    let movingUp = false;

    button.addEventListener('click', function() {
        if (movingUp) {
            ball.style.transform = 'translateY(0)';
        } else {
            ball.style.transform = 'translateY(-100px)';
        }
        movingUp = !movingUp;
    });
});