'use strict'

const poll = {
    question: ' What is your favourite programming language',
    options: [ '0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    // 1
    registerNewAnswer(){
        const [js,py,rust,c] = this.options
       const answer =  Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++  // Short Circuiting
   //           if ^^^ true -->          if ^^^ true    -->              this executes

        this.displayResults()
        this.displayResults('string')
    },

    //3
displayResults(type = 'array'){
        if (type === 'array'){
            console.log(this.answers)
        } else if (type === 'string'){
            console.log(`Poll Results are ${this.answers.join(', ')} `)
        }
}
}

//2
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))


