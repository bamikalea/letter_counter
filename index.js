document.getElementById("count-btn").addEventListener("click", function(e){
    e.preventDefault()
    const input = document.querySelector("#user-input").value
    countLetters(input)
})

function countLetters(word){
    const wordArr = word.toLowerCase().split("")
    const uniqueArr = []

    // create unique arr without duplicates
    wordArr.forEach(function(item){
        if(!uniqueArr.includes(item)){
            uniqueArr.push(item)
        }
    })
// compare eleents of unique arr with each element of the inputarr
    uniqueArr.forEach(function(item){
        compare(item, wordArr)
    })
}

// function to compare and count letters
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

