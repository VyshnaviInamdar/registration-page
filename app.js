let users=[]
let total=0
function register(){
    let name=document.getElementById('name').value; //getting the value from the user and storing in a variable
    let email=document.getElementById('email').value

    let usersContainer=document.getElementById('users')
    // users.push(name)
    // users.push(email)
    //console.table(users) //shows the users array in the tabular view

    //[{},{},{}] creating array of objects to store both name and email id
    let userList={
        name:name,
        email:email
    }
    
    //check if the email exist
    let countEmail=users.filter((user)=>{
        return user.email==email
    })
    let totalUsers=document.getElementById('total')
    //targeting id alert
    let alertDiv=document.getElementById('alert')
    //if email doesnt exist then only push the user
    if(countEmail.length==0){
        users.push(userList) //adds the userlist object to user array

        total+=1
        totalUsers.innerText=total

        console.log(users)
        alertDiv.innerText="Registration Successful"
        alertDiv.classList.add('success')
        alertDiv.classList.remove('d-none')
        alertDiv.classList.remove('danger')

        setTimeout(()=>{
            alertDiv.classList.add('d-none')
            alertDiv.classList.remove('success')
        },2000) //after 2 seconds alert disapppers
    }
    else{
        console.log('already registered')
        console.log(users)
        alertDiv.innerText="already registered"
        alertDiv.classList.add('danger')
        alertDiv.classList.remove('d-none')
        alertDiv.classList.remove('success')

        setTimeout(()=>{
            alertDiv.classList.add('d-none')
            alertDiv.classList.remove('danger')
        },2000) //after 2 seconds alert disapppers
    }

    usersContainer.innerHTML='' //by this, the values will not repeat

    users.map((user)=>{
        let userDiv=document.createElement('div') //create element helps to create an html element using javascript
        let nameElement=document.createElement('p')
        let emailElement=document.createElement('p')
        userDiv.classList.add('user') //user class gets added to newly created div element
        usersContainer.appendChild(userDiv) //appending userdiv child element to usersconatiner parent element ,by this only blank div element is created, so to add user class we have to add it to the element created
        userDiv.appendChild(nameElement) //appends name and email element to userdiv
        userDiv.appendChild(emailElement)
        nameElement.classList.add('name')
        emailElement.classList.add('email')

    //entering the obtained name and email values in the html
        nameElement.innerText=user.name
        emailElement.innerText=user.email

        // making the input field blank after registering
        document.getElementById('name').value='';
        document.getElementById('email').value='';


    })
}