
/**
 * 简单的Hello World函数
 */
function sayHello() {
    console.log('Hello, World! 🌍');
    return '欢迎来到GitHub! 🚀';
}

/**
 * 主函数，程序入口
 */
function main() {
    const message = sayHello();
    console.log(message);
    document.body.innerHTML = `&lt;h1&gt;${message}&lt;/h1&gt;`;
}

// 页面加载完成后执行
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    // Node.js环境下直接执行
    main();
}

module.exports = { sayHello, main };
