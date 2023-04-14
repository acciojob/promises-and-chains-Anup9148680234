let btn = document.getElementById('btn');
let Age = document.getElementById('age');
let Name = document.getElementById('name');

btn.addEventListener('click', function() {
		const p1 = new Promise((resolve,reject)=>{
			let a = Name.value;
			let b = Age.value;
			if(a.trim()=="" || b.trim()==""){
				alert("Please enter valid details")
			}
			else if(b>18){
				setTimeout(()=> resolve(`Welcome, ${a}. You can vote.`),4000);
			}
			else{
				setTimeout(()=> reject(`Oh sorry ${a}. You aren't old enough.`),1000);
			}
		})
	
		p1.then((resolve)=>alert(resolve))
		.catch((error)=>alert(error));
});