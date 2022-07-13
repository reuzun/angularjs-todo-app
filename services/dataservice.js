function toDoItem(data){
    this._date = new Date();
    this._data = data;

    this.getDate = () => {
        return this._date;
    };

    this.getData = () => {
        return this._data;
    };

};

app.service("dataservice", function(){
    var todolist = [];
    var filter = undefined;

    this.addData = function(data){
        todolist.unshift(new toDoItem(data));
    }

    this.removeIndex = function(indx){
        todolist.splice(indx, 1);
    }

    this.getList = function() {
        return todolist;
    }

    this.getFilter = function(){
        return filter;
    }

    this.setFilter = function(val){
        filter = val;
    }

});