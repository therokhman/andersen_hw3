// рекурсивный вызов
async function recursionFreezing() {
    console.log('Freeze...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    recursionFreezing()
}
recursionFreezing()

// await и setTimeout
async function freezePage() {
    console.log('Freeze...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Defrost');
}
freezePage()

// await и fetch
async function fetchFreezing() {
    console.log('Freeze...');
    await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Defrost');
}
fetchFreezing()
