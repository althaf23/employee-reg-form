// Function to show personal details section and hide address details section
function showIdentityDetails() {
    document.getElementById("personalDetails").style.display = "none";
    document.getElementById("addressDetails").style.display = "block";
}

// Function to show address details section and hide personal details section
function showFamilyDetails() {
    document.getElementById("personalDetails").style.display = "block";
    document.getElementById("addressDetails").style.display = "none";
}


function submitForm() {

    const name = document.querySelector(".name");
    const dob = document.querySelector(".dob");
    const email = document.querySelector(".email");
    const gender = document.querySelector(".gender");
    const phone = document.querySelector(".phone");
    const eid = document.querySelector(".eid");
    const address = document.querySelector(".address");
    const nas = document.querySelector(".nas");
    const state = document.querySelector(".state");
    const district = document.querySelector(".district");
    const block = document.querySelector(".block");
    const ward=document.querySelector(".ward");

    console.log(name.value);


    const requestData = {name : name.value, 
        dob :dob.value,
        email:email.value,
        gender: gender.value,
        phone:phone.value,
        eid:eid.value,
        address:address.value,
        nas:nas.value,
        state:state.value,
        district:district.value,
        block:block.value,
        ward:ward.value,
    }

    async function postData(
        url = "http://localhost:3000/api/v1/tasks",
        data = requestData
      ) {
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
        return response.json();
      }
      const Success = postData().then((res) => {
        console.log(res.msg);
        if (res.msg == "Success") {
          console.log("Success on time");
          alert("Your data is added successfully");
        } else {
          alert(res.msg);
        }
});


    alert('Form submitted successfully!');
}
