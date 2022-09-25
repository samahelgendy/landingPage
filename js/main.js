
let btn = document.querySelector(".top button");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
// when click the button top=0
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
   })
  }
 
// create text in li
const aboutText = document.createTextNode("ABOUT ME");
const profileText = document.createTextNode("PORTFOLIO");
const downloadText = document.createTextNode("DOWNLOAD CV");
const lists = document.querySelector(".ul-list .list");

const liOne = document.createElement("li");
// add class in list
liOne.className = "lis active";
// create attribute in list
liOne.setAttribute("data-set", ".about");
const liTwo = document.createElement("li");
liTwo.className = "lis";
liTwo.setAttribute("data-set", ".Portfolios");
const liThree = document.createElement("li");
liThree.className = "lis";
liThree.setAttribute("data-set", ".download");
liOne.appendChild(aboutText);
liTwo.appendChild(profileText);
liThree.appendChild(downloadText);
// add all li in main list
lists.appendChild(liOne);
lists.appendChild(liTwo);
lists.appendChild(liThree);

let menuList = document.querySelectorAll(".ul-list .list li");

function moveAnyWhere(element) {
    element.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.set).scrollIntoView({
                behavior: "smooth",
            })
        })
    })
}

moveAnyWhere(menuList);


// Get lists with class="lis" inside the ul_list
var mList = document.getElementsByClassName("lis");

//use loop to use all list

    for (var index = 0; index < mList.length; index++){
    mList[index].addEventListener("click", function() {

        var current = document.getElementsByClassName(" active");
        
        if (current.length > 0) {
            //remove all class active from list
            current[0].className = current[0].className.replace(" active", "");
            
        }
        //add class active on list when click on it
        this.className += " active";
        
    });
}



var secion = document.querySelector(".section");
var profiles = document.querySelector(".Portfolio.Portfolios");
var test = document.querySelector(".testimonial"); 
var want = document.querySelector(".wantto");

window.addEventListener("scroll", function () {
  // add active class in section 
    if (window.scrollY >= secion.offsetTop -20 && window.scrollY <= profiles.offsetTop -100) {
        secion.classList.add("active");

        liThree.classList.add("active");
    } else {
        secion.classList.remove("active");
        liThree.classList.remove("active");
    }

    // add active class in Portfolio

      if (window.scrollY >= profiles.offsetTop && window.scrollY <= test.offsetTop-100 ) {
          profiles.classList.add("active");
          liTwo.classList.add("active");
    } else {
          profiles.classList.remove("active");
           liTwo.classList.remove("active");
    }

    // add active class in testimonial
      if ( window.scrollY >= test.offsetTop && window.scrollY <= want.offsetTop -200) {
          test.classList.add("active");
          liOne.classList.add("active");
    } else {
          test.classList.remove("active");
          liOne.classList.remove("active");
    }
});
    


let btns = document.querySelectorAll(".section .ontime button");

let parg = document.querySelector(".section .ontime p.solid");

btns.forEach(function (btn) {
    btn.onclick = function () {
        btn.innerHTML = "Learn Less";
        btn.style.backgroundColor = "navy";
    }
});



