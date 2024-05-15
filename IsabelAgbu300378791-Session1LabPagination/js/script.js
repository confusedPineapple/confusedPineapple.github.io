//get students
const studentList = document.querySelector('.student-list');
//convert the results to a list
const studentItem = studentList.children;

const perPage = 10;
var page = 1;


const showPage = (list,page) => {
    for(i=0; i < list.length; i++) {
        if(i < (page)*10 || i>(page)*10+9){
            list[i].style.display = "none"
        }else{
            list[i].style.display = "block";
        }
    }
}



const appendPageLinks = (list) => {
    const totalPages = Math.ceil(list.length / perPage);
    console.log(totalPages);
    const ItemList = document.querySelector('div.pagination');
    for (let i = 1; i <= totalPages; i++) {
    var addbutton = document.createElement('li');
    addbutton.innerHTML = '<a class="active" >' + i + '</a>';
    ItemList.appendChild(addbutton)
    }
    var itembuttons = document.querySelectorAll('.active');
    console.log(itembuttons.length);
    for (let i = 0; i < itembuttons.length; i++) {
    itembuttons[i].classList.remove('active')
    }
    for (let i = 0; i < itembuttons.length; i++) {
    itembuttons[i].addEventListener('click', () => {
    showPage(studentItem, i);
    itembuttons[i].classList.remove('active');
    })
    }
}

const init = () => {
    const total = users.length
    for (i = 0; i < users.length; i++) {
    document.querySelector('.student-list').innerHTML += renderUser(users[i])
    }
    document.querySelector('.total').innerText = `Total: ${total}`
   }
   const renderUser = (user) => {
    return `
    <li class="student-item cf">
    <div class="student-details">
    <img class="avatar" src="${user.picture.thumbnail}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <span class="email">${user.email}</span>
    </div>
    <div class="joined-details">
    <span class="date">Joined ${new
   Date(user.registered.date).toLocaleDateString('en-US')}</span>
    </div>
    </li> `
}



init();
showPage(studentItem,0);
appendPageLinks(studentItem);

