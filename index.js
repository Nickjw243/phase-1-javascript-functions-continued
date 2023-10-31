// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
saturdayFun("bathe my dog")

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork()
mondayWork("work from home")

function wrapAdjective(result = '*') {
    const part1 = "You are"
    return function (emphatic = "a hard worker") {
        return `${part1} ${result}${emphatic}${result}!`
    }
}

wrapAdjective("||")( "a dedicated programmer")