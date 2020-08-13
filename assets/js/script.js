//todolist
const list = document.querySelector('.list');
const items = list.children;
const emptyListMessage = document.querySelector('.no-tasks-message');
const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.input');


//tools
const deleteAllBtn = document.querySelector('.delete-all');

//history
const removeOnEvent = function (collection, btnSelector, event) {
	Array.from(collection).forEach((item) => {
		const btn = item.querySelector(btnSelector);
		if (btnSelector === '.checkbox') {
			btn.addEventListener(event, function () {
				item.classList.add('btn-active');
				setTimeout(function() {
					item.remove();
					items.length < 1 && emptyListMessage.classList.remove('hidden');
					items.length <= 9 && list.classList.remove('vert-scroll');
				}, 700);
			});
		} else {
			btn.addEventListener(event, function () {
				item.remove();
				items.length < 1 && emptyListMessage.classList.remove('hidden');
				items.length <= 9 && list.classList.remove('vert-scroll');
			});
		}
	});
};


addBtn.addEventListener('click', function () {
	const taskTemplate = document.querySelector('#task-template').content;
	const newItemTemplate = taskTemplate.querySelector('.list-item');
	const task = newItemTemplate.cloneNode(true);
	const taskDescription = task.querySelector('span');
	if (input.value.length >= 3) {
		taskDescription.textContent = input.value;
		list.appendChild(task);
		removeOnEvent([task], '.checkbox', 'change');
		removeOnEvent([task], '.delete-btn', 'click');
		emptyListMessage.classList.add('hidden');
		items.length > 9 && list.classList.add('vert-scroll');
		input.value = '';
	}
});
