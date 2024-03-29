const firstName = document.getElementById("name");
const email = document.getElementById( "email" );
document.getElementById("setCookies").addEventListener('click',  function setCookies(){
    document.cookie = `firstName= ${firstName.value}, email=${email.value}`;
});

document.getElementById("getCookies").addEventListener('click', function getCookie(){
    console.log(document.cookie)
    const cookieValue = document.cookie.split(",");
    const p = document.createElement('p').innerHTML = `Cookies: ${cookieValue[0]}; ${cookieValue[1]}`;
    document.body.append(p)

})