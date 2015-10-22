var NameSpace = NameSpace || {};

(function(ns) {
  'use strict';
  
  ns.Class = function() {
    var self = this;
    
    self.property = 5;
    
    self.method = function() {
      console.log(self);
    };
    
    console.log(self);
  };
}(NameSpace));

var instance = new NameSpace.Class();
instance.method();