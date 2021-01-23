//Email validation
let email = document.getElementById('email').addEventListener('', ()=>{
    let validation = /^[^\s@]+@[^\s@]+$/
    if(validation.test(email) == false){
        window.print(email + 'is an invalid email address.')
    }
})

// //Submit button validation
// const form = document.getElementById('form')
// form.addEventListener("change", () => {
//     document.getElementById('submitBtn').disabled = !form.checkValidity()
// });

// //Submit form
// document.getElementById('submitBtn').addEventListener('click', ()=>{
//     res.sendFile()
//     res.redirect('/success')
// })

// handleSubmit(e) {
//     e.preventDefault();
  
    fetch('http://localhost:5500/send', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

//   const url = 'http://localhost:5500';
// const options = {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json;charset=UTF-8'
//   },
//   body: JSON.stringify()
// };

// fetch(url, options)
//   .then(response => {
//     console.log(response.status);
//   });