/*Using what you've already learned, write code that:
1. Imports askGemini from ./gemini.
2. Creates an async function named main.
3. Calls askGemini() using await with this question: "What is exploratory testing? Explain in one sentence."
4. Prints Gemini's response using console.log().
5. Calls main().*/


import {askGemini} from './gemini';
async function main(){
    const result = await askGemini("what is exploratory");
console.log(result);
}
main();
