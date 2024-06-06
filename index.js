const textbox=document.getElementById('textbox');
const task_list=document.getElementById('task_list');


function addtask(){
    if(textbox.value===''){
        alert('Enter some task first');
        return;
    }
    else{

        const checkexisting=task_list.querySelectorAll('.tasktext');
        for(let task of checkexisting){
            if(task.textContent.trim()===textbox.value.trim()){
                textbox.value="";
                alert('Task already exists');
                return;
            }
        }
        let li=document.createElement('li');
        let input=document.createElement('input');
        input.type='checkbox';
        input.className='checklist';



        const textnode=document.createTextNode(textbox.value.trim());
        const span = document.createElement('span');
        span.className='tasktext';
        span.appendChild(textnode);




   
        const spancross=document.createElement('span');
        spancross.innerHTML="\u00d7"; 
        spancross.className='cross';



        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(spancross);



        task_list.appendChild(li);
        textbox.value='';
    }
}

textbox.addEventListener('keypress',function(press){
    if(press.keyCode===13) addtask();
});


task_list.addEventListener("click", function(e) {
    if (e.target.classList.contains("tasktext")) {
        const checkbox = e.target.parentElement.querySelector('.checklist');
        checkbox.checked = !checkbox.checked; 
    } else if (e.target.classList.contains("cross")) {
        e.target.parentElement.remove();
    }
}, false);
