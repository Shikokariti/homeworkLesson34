let name;
document.getElementById('btn').addEventListener('click',()=>{
    name = document.getElementById('name').value;
    createPromise(name);
});
function createPromise(name) {
    let agifyAPI = fetch('https://api.agify.io/?name='+ name).then((response)=>response.json());
    let userPromise = new Promise((resolve, reject) => {
        let response = 200;
        if (response == 200) {
            resolve(agifyAPI);
        } else {
            reject('Server is down');
        }
    });
    userPromise.then((response)=>renderHTML(response)).catch((error)=>displayError(error));
}
function renderHTML(data) {
    if (data.age != null) {
        if (data.age < 60) {
            document.getElementById('details').innerText =`
            Holly Shit ${data.name}! less than 60! 🤕
            You will live till age ${data.age}`;
        } else {
        document.getElementById('details').innerText =`Hey ${data.name}, you will live till age ${data.age}
        Go tear the city bro`;
        }
    } else {
        displayError('Sorry, missing name or it just your name is to complicated to know')
    }
}
function displayError(error) {
    document.getElementById('details').innerText = error;
}



