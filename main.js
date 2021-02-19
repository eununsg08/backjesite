const toggleBtn = document.querySelector('.navs_toogleButton');
const menu = document.querySelector('.navs_menu');
const sns = document.querySelector('.navs_logo');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve,reject) => {
                if (
                    (id === '민경일' && password === 'ㅁㄹㅇㅌ') ||
                    (id === '민경이' && password === 'ㅁㄹ2ㅌ')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            
        });    
    }        
        
    getRoles(user) {
        return new Promise((resolve, reject) => {
            if (user === 'ellie') {
                resolve({ name: 'ellie', role: 'admin'});
            } else {
                reject(new Error('no access'));
            }
        });
    }
}
const userStorage = new UserStorage('ellie');
const id = prompt('PPP');
const password = prompt('DDD');

userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert (`성공 ${user.name}, ㅁㄹㅇㅌ네  ${user.role} ㅇㅈ`))
.catch(console.log)