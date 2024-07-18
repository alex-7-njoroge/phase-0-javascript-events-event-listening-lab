function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert() {
        alert('Is clicked!');
    }
    input.addEventListener('click', clickAlert);
}
addingEventListener(); 
