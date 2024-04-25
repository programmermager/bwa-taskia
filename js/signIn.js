document.addEventListener('DOMContentLoaded', ()=> {
    const userForm = document.getElementById('userForm');
    const username = document.getElementById('username');
    const userManager = new User();

    userForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const result = userManager.signIn(username.value);
        if(result.success){
            return window.location.href = '../tasks.html';
        }else{
            alert('User belum terdaftar');
        }
    });
});