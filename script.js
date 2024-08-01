// DARK LIGHT BUTTON CODING

let callFunction = document.getElementById("dark-btn");
callFunction.onclick = function darkLight(){
    let darkBtn = document.getElementById("dark-btn");

    // HERO SECTION CODING
    let heroContainer = document.getElementById("hero_container");
    let shriInfotech = document.getElementById("section_text");
    let mpOnline = document.getElementById("mp_online");
    let sectionDescription = document.getElementById("section_description");
    // E-COMMERCE SECTION CODING
    let firstEcommerce = document.getElementById("first_ecommerce");
    let secondEcommerce = document.getElementById("second_ecommerce");
    // TEAM SECTION CODING
    let meetContainer = document.getElementById("meet_container");
    let ourTeam = document.getElementById("our_team");
    let raviName = document.getElementById("ravi_name");
    let shubhamName = document.getElementById("shubham_name");
    // CONTACT SECTION CODING
    let contactContainer = document.getElementById("contact_container");
    let contactUs = document.getElementById("contact_us");
    // MAP SECTION CODING
    let mapContainer = document.getElementById("map_container");
    

    if(darkBtn.innerHTML == "Dark"){
        darkBtn.innerHTML = "Light";

        heroContainer.style.background = "#1F2937";
        shriInfotech.style.color = "#fff";
        mpOnline.style.color = "#fff";
        sectionDescription.style.color = "#fff";

        firstEcommerce.style.background = "#1F2937";
        firstEcommerce.style.color = "#fff";
        secondEcommerce.style.background = "#1F2937";
        secondEcommerce.style.color = "#fff";
      

        meetContainer.style.background = "#1F2937";
        meetContainer.style.color = "#fff";
        ourTeam.style.color = "#fff";
        raviName.style.color = "#fff";
        shubhamName.style.color = "#fff";

        contactContainer.style.background = "#1F2937";
        contactContainer.style.color = "#fff";
        contactUs.style.color = "#fff";

        mapContainer.style.background = "#1F2937";
    }
    
    else{
        darkBtn.innerHTML = "Dark";

        heroContainer.style.background = "#fff";
        shriInfotech.style.color = "#7E22CE";
        mpOnline.style.color = "#000";
        sectionDescription.style.color = "#4B5563";

        firstEcommerce.style.background = "#fff";
        firstEcommerce.style.color = "#000";
        secondEcommerce.style.background = "#fff";
        secondEcommerce.style.color = "#000";

        meetContainer.style.background = "#fff";
        meetContainer.style.color = "#4B5563";
        ourTeam.style.color = "#000";
        raviName.style.color = "#000";
        shubhamName.style.color = "#000";
       
        contactContainer.style.background = "#fff";
        contactContainer.style.color = "#4B5563"; 
        contactUs.style.color = "#000";

        mapContainer.style.background ="#fff";
    }
};