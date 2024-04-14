const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

//get du lieu todos tu api len giao dien
const linkToDos = '../../Json/todos.json';
fetch(linkToDos)
    .then(function(response){
        return response.json();
    })
    .then(function(todos){
        var todoList = document.querySelector('.todo-list');
        for(let i=0; i< todos.length;i++){
            var todo = todos[i];
            var li = document.createElement('li');
            li.className = todo.status ? 'completed' : 'not-completed';
            var p = document.createElement('p');
            p.textContent = todo.todolist;
            li.appendChild(p);
            var iTag = document.createElement('i');
            iTag.className = 'bx bx-dots-vertical-rounded';
            li.appendChild(iTag);
            todoList.appendChild(li);
        }
    });

//get du lieu order tu file orderlist
const linkOrderList = '../../Json/orderList.json';
fetch(linkOrderList)
    .then(function(response){
        return response.json();
    })
    .then(function(orderList){
        var tableBody = document.querySelector('tbody');
        for(let i=0; i< orderList.length;i++){
            var order = orderList[i];
            var tr = document.createElement('tr');
            
            var tdUser = document.createElement('td');
            var img = document.createElement('img');
            img.src = order.linkIMG;
            tdUser.appendChild(img);
            var p = document.createElement('p');
            p.textContent = order.user;
            tdUser.appendChild(p);
            tr.appendChild(tdUser);
            
            var tdDate = document.createElement('td');
            tdDate.textContent = order.dateorder;
            tr.appendChild(tdDate);
            
            var tdStatus = document.createElement('td');
            var span = document.createElement('span');
            span.className = 'status ' + order.status.toLowerCase();
            span.textContent = order.status;
            tdStatus.appendChild(span);
            tr.appendChild(tdStatus);
            
            tableBody.appendChild(tr);
        }
    });