let btn = document.getElementById('btn');
let Age = document.getElementById('age');
let Name = document.getElementById('name');

btn.addEventListener('click', function() {
		return new Promise((resolve,reject)=>{
			let a = Name.value;
			let b = Age.value;
			if(a.trim()=="")
			
			else if(b>18){
				setTimeOut(()=> resolve(`Welcome, ${a}. You can vote`),4000);
			}
			else{
				setTimeOut(()=> reject(`Oh sorry ${a}. You aren't old enough`),1000);
			}
		}).then((res)=>alert(res))
		.catch((err)=>alert(res))
});