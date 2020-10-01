localStorage.setItem('dinner', 'eggs');
console.log(localStorage.getItem('dinner'));

sessionStorage.setItem('breakfast', 'cereal');
console.log(sessionStorage.getItem('breakfast'));

// remove data
// localStorage.removeItem('_key_');
// localStorage.clear();

// remove data
// sessionStorage.removeItem('_key_');
// sessionStorage.clear();

document.cookie = "hello=true";
