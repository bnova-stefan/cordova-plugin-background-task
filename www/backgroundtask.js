var BackgroundTask = function(){
}

BackgroundTask.prototype.start = function (task) {
    cordova.exec(task, null, "BackgroundTask", "start", []);
};

if (!window.plugins)
    window.plugins = {};

if (!window.plugins.BackgroundTask)
    window.plugins.BackgroundTask = new BackgroundTask();

if (typeof module != 'undefined' && module.exports)
    module.exports = BackgroundTask;
