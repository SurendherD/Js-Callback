const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getAllCookies() {
  return cookies;
}
// Progression 2: using setTimeout() - use 1000 units for time parameter
function getAllCookiesDelayed() {
  setTimeout(() => {
    let Cookies = getAllCookies();
    console.log(Cookies);
  }, 1000);
}

//Progression 3: Create a function to creat cookies
// use setTimeout() -- use 2000 units for time parameter
function addNewCookie() {
  setTimeout(() => {
    cookies.push(newCookie);
    let Cookies = getAllCookies();
    console.log(Cookies);
  }, 2000);
}

// Progression 4: calling functions

getAllCookiesDelayed();
addNewCookie();
