window.moduleB = function(win, doc, undefined, $, _){


	//private properties
	var privateValue = 'privateValue';
	var privateMethod = function(){
		return privateValue;
	};

	//public properties
	var publicValue = 'publicValue';
	var publicMethod = function(){
		return publicValue;
	};

	//initalize
	var initialize = function(){

		console.log(privateValue,privateMethod(),publicValue,publicMethod());

	}();

	//public, can also place global constants here
	return {
		publicMethod:publicMethod
	};

}(window, document, undefined, jQuery, _);