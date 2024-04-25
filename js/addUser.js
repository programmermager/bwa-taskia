document.addEventListener('DOMContentLoaded', ()=> {
    const userForm = document.getElementById('userForm');
    const username = document.getElementById('username');
    const userManager = new User();

    userForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        console.log('berhasil tersubmit');
        const userData  = {
            'username' : username.value,
        }

        const result = userManager.saveUser(userData);
        if(result.success){
            return window.location.href = '../signin.html';
        }else{
            alert('User sudah terdaftar');
        }
    });
});