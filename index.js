document.getElementById("count-btn").addEventListener("click", function(e){
    e.preventDefault()
    const input = document.querySelector("#user-input").value
    countLetters(input)
})

function countLetters(word){
    const str = word.toLowerCase().split("")
    const uniqueArr = []

    str.forEach(function(item){
        if(!uniqueArr.includes(item)){
            uniqueArr.push(item)
        }
    })

    uniqueArr.forEach(function(item){
        compare(item, str)
    })
}

function compare(letter, word){
    let letterCount = 0
    word.forEach(item => {
        if (item === letter){
            letterCount++
        }
    })
    // console.log(`${letter} = ${letterCount}`)
    let html = `<p>${letter} = ${letterCount}</p>`
    document.querySelector("#result").innerHTML += html
}

