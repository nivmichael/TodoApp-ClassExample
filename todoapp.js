(function () {

    function ListController () {

        this.task = {done : false};

        this.tasks = [];

        this.addTask = function () {
            this.tasks.push({
                done : this.task.done,
                title : this.task.title,
                description: this.task.description
            });

            this.task = {}
        }
    }

    angular.module('todoapp', [])
        .controller('ListController', ListController)
}());