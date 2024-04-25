class User{

    constructor(){
        this.users = this.getUsers();
    };

    saveUser(userData){
        const newUser = {
            id : Date.now(),
            ...userData,
        }

        if(!this.isExist(userData.username)){
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));
            console.log(newUser);

            return {
                success : true
            }
        }else{
            return {
                success : false
            }
        }
    }

    saveLoggedUser(user){
        localStorage.setItem('logged_user', JSON.stringify(user));
    }

    getLoggedUser(){
        return JSON.parse(localStorage.getItem('logged_user'));
    }

    getUsers(){
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    isExist(username) {
        return this.users.some(function(user) {
            return user.username.toLowerCase() === username.toLowerCase();
        });
    }

    signIn(username){
        if(this.isExist(username)){
            const userData = this.users.find((user)=>{
                return user.username.toLowerCase() == username.toLowerCase();
            });

            this.saveLoggedUser(userData);
            return {
                success : true
            }
        }else{
            return {
                success : false
            }
        }
    }
}