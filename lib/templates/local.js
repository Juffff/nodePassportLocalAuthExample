module.exports = ctx => {

    return (
    `
    <h1>Hello, ${ctx.name} ${ctx.surname}</h1>
    <img src="${ctx.avatar}" />       
    <h2>Age = ${ctx.age}</h2>
    `);

};