define('views/module1', ['views/module2'], function(Module2) {
    console.error(111);
    console.log('Module2', Module2);

    return 'Hello World'
});