const list = document.querySelector('.list');
const items = list.children;

const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.input');

const emptyListMessage = document.querySelector('.empty-list-message');

function removeFinishedTask(task) {
	const checkbox = task.querySelector('.checkbox');
	checkbox.addEventListener('change', function () {
		task.classList.add('checked');
		setTimeout(function () {
			task.remove();
			items.length < 1 && emptyListMessage.classList.remove('hidden');
			items.length <= 9 && list.classList.remove('vert-scroll');
		}, 700);
	});
}

function deleteTask(task) {
	const deleteBtn = task.querySelector('.delete-btn');
	deleteBtn.addEventListener('click', () => {
		task.remove();
		items.length < 1 && emptyListMessage.classList.remove('hidden');
		items.length <= 9 && list.classList.remove('vert-scroll');
	});
}


addBtn.addEventListener('click', function () {
	const taskTemplate = document.querySelector('#task-template').content;
	const newItemTemplate = taskTemplate.querySelector('.list-item');
	const task = newItemTemplate.cloneNode(true);
	const taskDescription = task.querySelector('span');
	if (input.value.length >= 3) {
		taskDescription.textContent = input.value;
		list.appendChild(task);
		removeFinishedTask(task);
		deleteTask(task);
		emptyListMessage.classList.add('hidden');
		items.length > 9 && list.classList.add('vert-scroll');
		input.value = '';
	}
});
