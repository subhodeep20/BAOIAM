function nameval(){
    var nam = document.getElementById('name').value;
    var st = document.getElementById('nam');
    if(nam.length==0)
    {
        st.innerHTML="*Name can't be blank";
        st.style.color="red";
        st.style.fontSize="12px";
        return false;
    }
    else if(!nam.match(/^[a-zA-Z]+$/))
    {
        st.innerHTML="*Name can't have a number";
        st.style.color="red";
        st.style.fontSize="13px";
        return false;
    }
    else if(nam.length<3 && nam.length>0)
    {
    st.innerHTML="*Must contain atleast three characters";
    st.style.color="red";
    st.style.fontSize="12px";
    return false;
    }
    else{
        st.innerHTML="";
        return true;
    }
    
    
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  var st = document.getElementById('msg');
  st.innerHTML="*invalid email!";
        
    return (false)
}

function validpass(pass){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var st = document.getElementById('pass');
    st.style.color="red";
        st.style.fontSize="12px";
  if(pass.match(lowerCaseLetters) && pass.length >= 8 && pass.match(numbers)  && pass.match(upperCaseLetters)){
    st.innerText="";
  }
  else{
    st.innerText="Invalid Password";
  }
  return true;
}

function myFunction() {
  alert("Are you sure to submit?");
}

function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}








