const inputVal =document.getElementsByClassName('inputVal')[0]
const addTaskBtn =document.getElementsByClassName('btn')[0]
console.log(inputVal.value);

addTaskBtn.addEventListener('click',() =>{
    if(inputVal.value.trim() != 0){
        let localItems = JSON.parse(localStorage.getItem('localItem'));
        if(localItems === null){
            taskList=[];
        }
        else{
            taskList=localItems;
        }
        taskList.push(inputVal.value);
        localStorage.setItem('localItem',JSON.stringify(taskList))
        inputVal.value='';
    }
      showlist();
}) 

function showlist(){
    let outPut= '';
    let taskListShow = document.querySelector('.todoListItem');
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    if(localItems === null){
        taskList=[];
    }
    else{
        taskList=localItems;
    }
    taskList.forEach((data, index) => {
        outPut += `
        <div class="todoList">
        <p class="pText">${data}</p>
        <button class="deleteTask" onclick="deleteItem(${index})">X</button></div>
        `
    });
    taskListShow.innerHTML=outPut;
}
showlist();

function deleteItem(index){
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showlist()

}
function clearTask(){
    localStorage.clear()
    showlist();
}