const firstName = document.getElementById("name");
const email = document.getElementById( "email" );
document.getElementById("setCookies").addEventListener('click',  function setCookies(){
    document.cookie = `firstName= ${firstName.value}`;
    document.cookie = `email=${email.value};`;
});

document.getElementById("getCookies").addEventListener('click', function getCookie(){
    const cookieValue = document.cookie.split(";");
    const p = document.createElement('p').innerHTML = `firstName: ${cookieValue[0].split("=")[1]} , email: ${cookieValue[1].split("=")[1]}`;
    document.body.append(p)

})