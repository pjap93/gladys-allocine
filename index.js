
module.exports = function(sails) {

    const sayFilms = require('./lib/sayFilms.js');
    const getList = require('./lib/getList.js');
    const install = require('./lib/install.js');
    const uninstall = require('./lib/uninstall.js');
    const setup = require('./lib/setup.js');

    gladys.on('ready', function(){
    });
    
    return {
        sayFilms: sayFilms,
        getList: getList,
        setup: setup,
        install: install,
        uninstall: uninstall
    };
};
