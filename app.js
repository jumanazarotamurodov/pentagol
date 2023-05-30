const btn1 = document.querySelectorAll(".box1")
let light = document.querySelectorAll(".light")
const body = document.querySelector(".container")
const btn2 = document.querySelector(".A")
const btn4 = document.querySelector(".A2")
const btn3 = document.querySelectorAll(".box2")
const p = document.querySelectorAll(".p1")
const p2 = document.querySelectorAll(".p2")
const menu2 = document.querySelectorAll(".menu2")
const box = document.querySelectorAll(".box3")
const box1 = document.querySelectorAll(".box4")
const oq = document.querySelectorAll(".oq")
const qora = document.querySelectorAll(".jadval")
const box7 = document.querySelector(".box7")
const box10 = document.querySelectorAll(".box10")
const box11 = document.querySelector(".box11")
const utish = document.querySelector(".maydon")
const body2 = document.querySelector(".container3")
const back = document.querySelector(".back")
const box13 = document.querySelectorAll(".asosiy1")

let data = [
    {
        image: "images/image 5 (1).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (2).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (3).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (4).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (5).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (6).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (7).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (8).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (9).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (10).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (11).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5.png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (1).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (5).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (3).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (6).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (11).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (3).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (8).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (3).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
]
let data2 = [
    {
        image: "images/image 5 (1).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (2).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (3).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (4).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (5).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (6).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (7).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (8).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (9).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (10).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5 (11).png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },
    {
        image: "images/image 5.png",
        tage: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi'
    },

]
p.forEach(item => {
    item.addEventListener("click", () => {
        btn2.className = item.textContent
    })
})
p2.forEach(item => {
    item.addEventListener("click", () => {
        btn4.className = item.textContent + 2
    })
})

let ui = ""
function myFun() {
    for (let i = 0; i < 10; i++) {
        ui +=
            `<div class="box4">
        <img src="./Real_Madrid.png" alt="">
        <span>3:0</span>
        <img src="./barsa.png" alt="">
    </div>`
    }

    box.forEach(item => {
        item.innerHTML = ui
    })

}
myFun()
btn1.forEach(item => {
    item.addEventListener("click", () => {
        light.forEach(item => {
            item.classList.toggle("dark");
        })
        body.classList.toggle("container2")
        menu2.forEach(item => {
            item.classList.toggle("menu22");
        })
        box.forEach(item => {
            item.classList.toggle("box33")
        })
        oq.forEach(item => {
            item.classList.toggle("oq2")
        })
        qora.forEach(item => {
            item.classList.toggle("jadval2")
        })
        box7.classList.toggle("box77")
        box10.forEach(item =>{
            item.classList.toggle("box102")
        })
        box11.classList.toggle("box112")
        box13.forEach(item => {
            item.classList.toggle("asosiy2")
        })
    })
})


let ui2 = ""
data.forEach(item => {
    function myFunction() {
        return (
            ui2 += `
                    
<div class="box8"><img src="./${item.image}" alt="">
            <p class="p3">${item.tage}</p>
            <p class="p4">${item.tage}</p>
            </div>
`
        )
    }
    myFunction()
    box7.innerHTML = ui2
})

let ui3 = ""
data2.forEach(item => {
    function myFunction() {
        return (
            ui3 += `
                    
            <div class="box8"><img src="./${item.image}" alt="">
            <p class="p3">${item.tage}</p>
            <p class="p4">${item.tage}</p>
            </div>
`
        )


    }
    myFunction()
    box10.forEach(item =>{
        item.innerHTML = ui3
    })
})

utish.addEventListener("click", () => {
    body.classList = "container22"
    body2.classList = "container32"
})
back.addEventListener("click", () => {
    body.classList = "container"
    body2.classList = "container3"
})