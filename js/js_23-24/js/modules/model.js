define (
    'Model',

    [],
    
    function (){
      return function Model(data) {
    var self = this;
    self.data = data;

    self.addItem = function (item) {
        if (item.length === 0) {
            return;
        }
        self.data.push(item);
        return self.data;
    };

    self.removeItem = function (item) {
        var index = self.data.indexOf(item);
        if (index === -1) {
            return self.data;
        }
        self.data.splice(index, 1);
        return self.data;
    };

    self.replaceItem = function (oldItem, newItem) {
        if ( oldItem === newItem || newItem.trim().length === 0  ){
          return self.data;  
        }
        var index = self.data.indexOf(oldItem);
        self.data.splice(index, 1, newItem);
        return self.data;
    };
}
}
);