const details = [{
    "userId" : 1,
    "name" : "Anas Ahmed",
    "title" : ["Front-End Developer", "MERN Developer"],
    "skills" : ["JavaScript", "Bootstrap", "HTML", "CSS", "Bootstrap"],
    "location" : ["Indore, India", 
                "https://goo.gl/maps/StJ3pGtbQwcyQ9pM6"
    ],
    "contact" : ["+918251039590",
                "anas31197@gmail.com" 
    ],
    "edu" : [
        "Edyoda, Educational institution in Bengaluru, Karnataka", 
        "https://www.edyoda.com/home",
        "https://goo.gl/maps/u2Z2GPcrYUX2FcHR7" 
    ],
    "photos" : [
        "https://live.staticflickr.com/65535/52371245278_09df20e79d_z.jpg"
    ], 
    "quote" : "\"Everything should be made as simple as possible, but not simpler.\" - Albert Einstein",
    "memoji" : [
        "https://live.staticflickr.com/65535/52374090698_42368f9a1e_z.jpg",
        "https://live.staticflickr.com/65535/52374090703_58a9273a7b_t.jpg",
        "https://live.staticflickr.com/65535/52374357319_bd42e7c80f_o.jpg",
        "https://live.staticflickr.com/65535/52374090763_80b317f4d0_o.jpg",
        "https://live.staticflickr.com/65535/52374286125_c436336221_o.jpg",
        "https://live.staticflickr.com/65535/52374178269_f4aa93ff22_o.jpg",
        "https://live.staticflickr.com/65535/52374090703_f2c81fa03c_o.jpg",
        "https://live.staticflickr.com/65535/52372919027_5e30920a3d_o.jpg"
    ],
    "project" :[
        "https://live.staticflickr.com/65535/52375674426_9a0850ae2f_o.jpg",
        "https://live.staticflickr.com/65535/52375893898_2d0176288d_o.jpg",
        "https://live.staticflickr.com/65535/52376089980_2662edb9bb_o.jpg",
        "https://live.staticflickr.com/65535/52375984044_9ed5d4db0b_o.jpg"
    ],
    "projectGit" :[
        "https://github.com/a14a19/Nuuk-WebApp",
        "https://github.com/a14a19/Edyoda-stories",
        "https://github.com/a14a19/Stunning-Landing-page",
        "https://github.com/a14a19/pokemon"
    ],
    "social" : [
        "https://github.com/a14a19", 
        "https://www.linkedin.com/in/anas-ahmed-3b927913a/",
        "https://www.instagram.com/anas_a14a19/",
        "https://twitter.com/a_14_a_19",
        "https://www.facebook.com/profile.php?id=100063229659168"
    ],
    "inspired" : "https://www.milipernia.com/index.html"
}
];


const user1 = details.filter((user)=> user.userId == 1);


// Rough work below this


// const sIcon = document.querySelectorAll(".social-icon");

// for(a in sIcon){

//     for(q in user1[0].social){
//         // console.log(user1[0].social[q], `from social`)
//         // console.log(sIcon[a].href)
//     }
    
// }

// aa = [1, 2, 3, 4, 5]
// bb = [6, 7, 8, 9, 10]
// cc = [1*6, 2*7, 3*8, 4*9, 5*10]
//desired result (aa * bb = cc) 


// Rough work above this

// used try and catch for error in user details 

for(x in user1){
    
    const {userId, name, title, skills, location, contact, edu, photos, quote, memoji, project, projectGit, social, inspired } = user1[x];
    
    function myGenFn(element){

        for(x in element){

            try {
                if(element[x] == ""){
                    throw new Error("Please wait while host is fixing the error or inform at '+918251039590' or 'anas31197@gmail.com', Thank you!!")
                }
            } catch (err) {
                console.error(err.name)
                alert(err.message)
                console.error(err.message = "Something is undefined in user/array details.")
                console.error(err.stack)
            }
        }
    }
    
    myGenFn(title);
    myGenFn(skills);
    myGenFn(location);
    myGenFn(contact);
    myGenFn(edu);
    myGenFn(photos);
    myGenFn(memoji);
    myGenFn(project);
    myGenFn(projectGit);
    myGenFn(social);

    try {
        if(userId, name, quote, inspired == ""){
            throw new Error("Please wait while host is fixing the error or inform at '+918251039590' or 'anas31197@gmail.com', Thank you!!")
        }
    } catch (err) {
        console.error(err.name)
        alert(err.message)
        console.error(err.stack)
        console.error(err.message = "Something is undefined in user details.")
    }

    try {
        if(title.length < 2 || location.length < 2 || contact.length < 2){
            throw new Error("Please wait while host is fixing the error or inform at '+918251039590' or 'anas31197@gmail.com', Thank you!!")
        }
        if(edu.length < 3){
            throw new Error("Please wait while host is fixing the error or inform at '+918251039590' or 'anas31197@gmail.com', Thank you!!")
        }
        if(project.length < 4 || projectGit < 4){
            throw new Error("Please wait while host is fixing the error or inform at '+918251039590' or 'anas31197@gmail.com', Thank you!!")
        }
        if(skills.length < 5 || social.length < 5){
            throw new Error("Please wait while host is fixing the error or inform at '+918251039590' or 'anas31197@gmail.com', Thank you!!")
        }
        if(memoji.length < 8){
            throw new Error("Please wait while host is fixing the error or inform at '+918251039590' or 'anas31197@gmail.com', Thank you!!")
        }
    } catch (err) {
        console.error(err.name)
        alert(err.message)
        console.error(err.message = "One of the array length is reduced.")
        console.error(err.stack)
        console.error(ReferenceError.message = "Something is undefined in user details.")
    }
}



const rtHeader = document.getElementById("rt-header");
const hello = document.getElementById("hello");
const profileImg = document.getElementById("profile-img");
const newProfileImg = document.createElement("img");
const intro = document.getElementById("intro");
const headerName = document.getElementById("header-name");
const mainName = document.getElementById("main-name");
const skillCard1 = document.getElementById("skill-card1");
const skillCard2 = document.getElementsByClassName("skill-card2");
const titleText = document.getElementById("mern");
const myLocation = document.getElementById("location");
const quoteContainer = document.getElementById("quotes");
const quoteTxt = document.createElement("div");
const quoteAuther = document.createElement("div");
const wImg = document.getElementsByClassName("work-img");
const firstImg = document.createElement("img");
const projectImg = document.getElementById("project-img");
const vGit = document.getElementById("v-git-sub");
const vGitA = document.createElement("a");
const aboutRight = document.getElementById("about-rt");
const aRImg = document.createElement("img");
const aboutVisit = document.getElementById("about-visit-link");
const aboutVLink = document.createElement("a");
const contactBtn = document.getElementById("contact-btn");
const inspire = document.getElementById("insp");
const inspA = document.createElement("a");
const ddBtn = document.getElementById("dd-btn");
const ddCard = document.getElementById("dd-card-id");

function innerTextFn(){
    rtHeader.classList = "rt-header";
    hello.classList = "hello";
    headerName.innerText = `${user1[0].name}`;
    mainName.innerText = `${user1[0].name.slice(0, 4)}!`;
    skillCard1.innerText = `${user1[0].skills[0]}`;
    skillCard2[0].innerText = `${user1[0].skills[4]}`;
    titleText.innerText = `${user1[0].title[0]}`;
    myLocation.innerText = `Based in ${user1[0].location[0]}`
    myLocation.href = `${user1[0].location[1]}`;
    quoteTxt.innerText = `${user1[0].quote.slice(0, 68)}`;
    quoteAuther.innerText = `${user1[0].quote.slice(68, 85)}`;
    firstImg.src = `${user1[0].memoji[0]}`;
    firstImg.alt = `Image`;
    firstImg.classList = "rounded-circle";
    vGitA.href = `${user1[0].social[0]}`;
    vGitA.target = "_blank";
    vGitA.innerText = `View my Git?`;
    aRImg.src = `${user1[0].memoji[5]}`;
    aRImg.alt = "Memoji";
    aRImg.classList = "rounded-circle";
    aboutVLink.href = `${user1[0].social[2]}`;
    aboutVLink.innerText = `Wanna know more? Visit my Instagram`;
    aboutVLink.target = "_blank";
    inspA.href = `${user1[0].inspired}`;
    inspA.innerText = `Inspired from Mili Pernia Gonzalez`;
    inspA.target = "_blank";
}

function cssFunction() {
    newProfileImg.src = `${user1[0].photos[0]}`;
    newProfileImg.classList = "profile-image rounded-circle";
    intro.style.cssText = "display: flex; justify-content: center; text-align: center; margin-top: 70px;";
    quoteTxt.style.cssText = "font-size: 80px;";
    quoteTxt.classList = "quote-txt";
    quoteAuther.style.cssText = "font-size: 40px; margin: 20px auto 30px; color: rgba(255, 255, 255, 0.3);"
    quoteAuther.classList = "quote-txt-A"
}

function imgOfProject(){
    const listItem = user1[0].project;
    const mainList = user1[0]["projectGit"];

    for(z in mainList){
        const mainContainer = document.createElement("div");
        const aContainer = document.createElement("a");
        const pImgSub = document.createElement("img");

        mainContainer.classList = "proj-main";

        aContainer.href = `${mainList[z]}`;
        aContainer.classList = "project-container";
        aContainer.target = "_blank";

        pImgSub.src = `${listItem[z]}`;
        pImgSub.classList = "project-img-sub";
        pImgSub.alt = "Project_Images";

        pImgSub.addEventListener('pointermove', ()=>{
            pImgSub.style.cssText = 
            "transform: skew(-2.5deg, 0deg) translate(0px, -15px); box-shadow: 8px 8px 5px 1px rgba(127, 127, 127, 0.5);transition: all 0.5s;"
        })

        pImgSub.addEventListener('pointerout', ()=>{
            pImgSub.style.cssText = 
            "transform: skew(0deg, 0deg) translate(0px, 0px); box-shadow: none;transition: all 0.5s;"
        })

        aContainer.appendChild(pImgSub);
        mainContainer.appendChild(aContainer);
        projectImg.appendChild(mainContainer);

    }
}

contactBtn.addEventListener('pointerover', ()=>{
    contactBtn.style.cssText = "transform: translate(0px, -10px); transition: all 0.5s; background: #009FFF; box-shadow: 0px 10px 10px 2px rgba(255, 255, 255, 0.1);"
})

contactBtn.addEventListener('pointerout', ()=>{
    contactBtn.style.cssText = "transform: translate(0px, 0px); transition: all 0.5s; background: #26243b; box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.5);"
})
hello.addEventListener("pointerout", ()=>{
    hello.style.cssText = "transition: all 1s; display: none;"
});

hello.addEventListener('click', ()=>{
    hello.style.cssText = "transition: all 1s; display: none;"
});

ddBtn.addEventListener('click', ()=>{
    ddCard.classList.toggle("dd-card");
})


imgOfProject()
innerTextFn()
cssFunction()


profileImg.appendChild(newProfileImg);
quoteContainer.appendChild(quoteTxt);
quoteContainer.appendChild(quoteAuther);
wImg[0].prepend(firstImg);
vGit.appendChild(vGitA);
aboutRight.appendChild(aRImg);
aboutVisit.appendChild(aboutVLink);
inspire.appendChild(inspA);


