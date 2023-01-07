const greatingTitleBox = document.querySelector(".greating-title-box")
const greatingImgBox = document.querySelector(".greating-img-box")
const myName = document.querySelector(".name-text")
const praiseBox = document.querySelector(".praise-box")
const jobTitleBox = document.querySelector(".job-title-box")
const praiseTitle = document.querySelector(".praise-title")
const jobTitle = document.querySelector(".job-title")
const projectsHeading = document.querySelector(".projects-heading")
const pjPosters = document.querySelectorAll(".pj-poster")

window.addEventListener("scroll", () => {
    let offsetY = window.scrollY
    
    greatingTitleBox.style.transform =`translateY(${offsetY * 0.2}px)`
    greatingImgBox.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
    myName.style.transform =`translateX(${offsetY * 0.2}px)`
    praiseBox.style.backgroundPositionY = `${offsetY * 0.5}px`
    jobTitleBox.style.backgroundPositionY = `${-offsetY * 0.5}px`
    praiseTitle.style.transform =`translateX(calc(125vh + ${-offsetY * 0.75}px))`
    jobTitle.style.transform =`translateX(calc(${offsetY * 0.75}px - 200vh))`
    projectsHeading.style.transform = `translateY(calc(400vh - ${offsetY}px))`
    pjPosters[0].style.transform = `translateX(calc(450vh - ${offsetY}px))`
    pjPosters[1].style.transform = `translateX(calc(-550vh + ${offsetY}px))`
    pjPosters[2].style.transform = `translateX(calc(700vh - ${offsetY}px))`
})