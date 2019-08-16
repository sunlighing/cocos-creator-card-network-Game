
export default   class Dictionary { //字典类
    items = {};

    public has = function (key) {
        return key in this.items;
    };

    public set = function (key, value) {
        this.items[key] = value; //{1}
    };

    public delete = function (key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    };
    
    public deleteValue = function(value){ //实体值删除
        
        for (var k in this.items) {
          //{1}
          if (this.has(k)) {
              delete this.items[k];
            return k;
          }
        }
        
        return null
    }   

    public get = function (key) {
        return this.has(key) ? this.items[key] : undefined;
    };
    
    public values = function () {  //返回值的实例
        var values = [];
        for (var k in this.items) {
          //{1}
          if (this.has(k)) {
              values.push(this.items[k]); //{2}
          }
        }
        return values;
    };

   

    public size = function(){
        return this.items.length;
    }

    public getItems = function () {
        return this.items;
    }

}


