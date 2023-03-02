// parsovani data

alert ('parsovani data')

const parseDate = (datum) => {
    return (
        {
        myDay:datum.split('.')[0],
        myMonth:datum.split('.')[1],
        myYear:datum.split('.')[2]
        }
    )
}

mojeDatum=parseDate(prompt('zadej datum ve tvaru DD.MM.YYYY'))

const {myDay,myMonth,myYear}=mojeDatum

document.body.innerHTML='parsovani data: ' + myDay + '/' + myMonth + '/' + myYear
// 

// formatovani data

alert ('formatovani data')

let myDate

const formatDate= ({day,month,year}) => {

    return (
        document.body.innerHTML+= `<br>` + 'formatovani data: ' + day.padStart(2,'0') + '.' + month.padStart(2,'0') + '.' + year.padStart(2,'0') 
    )
}

let askDate= {
    day:prompt('den'),
    month:prompt('mesic'),
    year:prompt('rok')
}

const {day,month,year}=askDate

formatDate({day,month,year})

// zaokrouhlovani

alert ('zaokrouhlovani')

const round = (number) => {
    if (number-Math.trunc(number) === 0.5) {
        if (Math.trunc(number) % 2  === 0 ) {
            return console.log(Math.trunc(number))
        } else {
            return console.log(Math.trunc(number)+1)
        }
    }

    return console.log(Math.round(number))
    
}

round(prompt('zadej cislo'))

