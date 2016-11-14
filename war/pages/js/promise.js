/**
 * http://www.htmlgoodies.com/beyond/javascript/making-promises-with-jquery-deferred.html
 */
jQuery.noConflict();

(function($) { // Your jQuery code here, using the $ , $ is optional
	
	window.consoleVersion1= (function(oldConsole) {
		
		var dump= function(data) {
			var _date= new Date();
			return "["+_date.toLocaleDateString()+" "+_date.toLocaleTimeString()+"."+_date.getMilliseconds()+"]"+" - "+data;
		};
		
		return {
			log: function() {
				$("#console").append( dump(arguments[0])+ '<br/>');
			},
			alert: function() {
				alert(dump(arguments))
			},
			clear: function() {
				$("#console").html('<h3 class="ui-widget-header">Console</h3>')
			}
		};
			
	})(window.console);
	
	
	window.console= (function(oldConsole) {
		
		var originalConsole;
		
		setup= function(oldConsole) {
			
			originalConsole= oldConsole
			
			var colorize= function(color,data) {
				return "TODO "+data
			};
			
			var timeize= function(whenever,data) {
				return "["+whenever.toLocaleDateString()+" "+whenever.toLocaleTimeString()+"."+whenever.getMilliseconds()+"]"+" - "+data;
			};
			
			dump= function(data) {
				var now= new Date();
				return timeize(now,data);
			};
			
		};
				
		/* closure, object in the global scope, access private (console) data member */
		work= function() {
			
			return {
				log: function() {
						$("#console").append( dump(arguments[0])+ '<br/>');
				},
				alert: function() {
					alert(dump(arguments))
				},
				clear: function() {
					$("#console").html('<h3 class="ui-widget-header">Console</h3>')
				},
				restore: function() {
					window.console=originalConsole;
				}
			};
			
		};
		
		setup(oldConsole);
		return work();
			
	})(window.console);
	
	console.log("Loaded Jquery Version=> "+$.fn.jquery)
	
	$("#console").resizable();
	
	$("#clear").on('click',function()  {
		 console.clear();
		 resetButtonStyle();
	});
	
	$("#reloadJs").on('click',function()  {
		 resetButtonStyle();
		 codeReload();
	});
	
	var resetButtonStyle= function() {
		$('button[id^=test]').removeClass();
		$('button[id^=test]').addClass("btn btn-block btn-default");
	};
	
	var codeReload= function() {
		window.location.reload();
	};
	
	resetButtonStyle();
	
	$('button[id^=test]').on('click',function()  {
		resetButtonStyle();
		$(this).addClass("btn btn-block btn-primary");
	});
	
    var test1= function() {
    	
		var successFunc= function(result) {
			$.each(result, function (index, value) {
				console.log(index+" : "+value.promocode);				
			});
		};
		
		var errorFunc= function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR)
			console.log(textStatus)
			console.log(errorThrown)
		};
    	
	    $.ajax({
	    	url:  "http://localhost:8080/aolconf/getConfPromo.do?methodName=doLoadPromos",
			dataType: 'json',
			success: successFunc,
			error: errorFunc,
		 });
	};
	
	$("#test1").on('click',function()  {
		 test1();
	});
	
	
	
	var test2= function() {
		
		 $.ajax({
	    	url:  "http://localhost:8080/aolconf/getConfPromo.do?methodName=doLoadPromos",
			dataType: 'json'
		 })
		 .done(function() {console.log('done callback')})
		 .fail(function() {console.log('failed callback')})
		 .always(function(){console.log('always callback')})
		 .always(function(){console.log('always callback again')});
	};
	
	$("#test2").on('click',function()  {
		test2();
	});
	
	var test3= function() {
		
		REPEATER=0;
		var printLog= function() {
			
			console.log(REPEATER);
			
			++REPEATER;
			
			if(REPEATER>=10)
				clearInterval(processId);
				
		};
		
		console.log("START")
		var processId=window.setInterval(printLog,1000);
		console.log("END")
		
	};
	
	$("#test3").on('click',function()  {
		test3();
	});
	
	
	
	
	var resolveDeferred= function(deferredObject) {
		deferredObject.resolve();
	};
	
	var test4= function(latest) {
		
		var REPEATER=0;
		
		defer = $.Deferred(function(){
			console.log("START")
		});
		
		defer.then(function() /* done */ {
			console.log("END")
		},
		function() /* fail */ {
			console.log("fail callback")
		},
		function(param) /* progress */ {
			console.log(param)
		}).done(function() {
			console.log("DONE EVENT AGAIN.")
		}).progress(function() {
			console.log("PROGRESS EVENT AGAIN.")
			
			if(REPEATER++ > latest) {
				resolveDeferred(defer) // <=> defer.resolve();
			}
			
		}).always(function() {
			console.log("ALWAYS EVENT FIRST.")
		});

		window.setInterval(function() {
			defer.notify(REPEATER);
		},1000);
		
	};
	
	$("#test4").on('click',function() {
		test4(3);
	});
	

	var test5= function(latest) {
		
		var REPEATER=0;
		
		defer = $.Deferred(function() {
			console.log("START")
		});
		
		window.setInterval(function() /* progress every 1 sec. */ {
			if(++REPEATER<=latest)
				defer.notify(REPEATER);
			else defer.resolve();
		},1000);
		
		// Return the Promise so caller can't change the Deferred
		return defer.promise();
	};
	
	$("#test5").on('click',function()  {
		$.when(test5(5)).then(function(value) {
			console.log("resolve event, done callback")
		},function() {
			console.log("rejected event, fail callback")
		},function(value) {
			console.log(value)
		});
	});
	
	var looseTime= function(timeSpentMillis) {
		defer = $.Deferred();
		
		window.setTimeout(function (){
			defer.resolve(timeSpentMillis);
		},timeSpentMillis)
		
		return defer.promise();
	};
	
	var test6= function() {
		console.log("Play with console, restore console.log after 1s.")
		
		looseTime(1000).done(function(timeSpentMillis) {
			console.log(timeSpentMillis+" time loose.")
			
			console.restore()
			
			looseTime(3000).done(function(timeSpentMillis){
				console.log(timeSpentMillis+" time loose.")
			})
		})
	};
	
	$("#test6").on('click',function()  {
		test6();
	});
	
	var test7= function() {
		
		var prnt= function(h) {
			console.log("typeof h")
			console.log(typeof h)
			console.log("h.constructor")
			console.log(h.constructor)
			console.log("h instanceof Object")
			console.log(h instanceof Object)
			console.log("h instanceof Some")
			console.log((h instanceof Some)?"true":"false")
			console.log("h instanceof Function")
			console.log((h instanceof Function)?"true":"false")
		}
		
		console.log("var ar= new Array(1,2,3,4)")
		var h= new Array(1,2,3,4)
		prnt(h)
		console.log("=====================")
		
		console.log("var h={}=>")
		var h={}
		prnt(h)
		console.log("=====================")
		
		console.log("var h=new Date()=>")
		var h=new Date();
		prnt(h)
		console.log("=====================")
		
		function Some() {
			
		}		
		console.log("var h=new Some()=>")
		var h=new Some();
		prnt(h)
		console.log("=====================")
		
		console.log("var h=new Function()=>")
		var h=new Function();
		prnt(h)
		console.log("=====================")
		
		var ogg1={
			test: function() {
				console.log('test into ogg1')
			}
		}
		
		function F() {}
				
		F.prototype=ogg1;
		
		h= new F()
		h.test();
		
		var ogg2={
			test: function() {
				console.log('prototype redefined into ogg2')
			}
		}
		
		F.prototype=ogg2;
		delete F.prototype
		y= new F();
		y.test();
		
		h.test();
		
	};
	
	$("#test7").on('click',function()  {
		test7();
	});
	
	
	var test8= function() {
		console.log("test8")
		
		var Person= function(name) {
			this.name=name;
			this.whoami=function() {
				console.log(this.name)
			}
		}
		
		var p= new Person("marc")
		p.whoami();
		var n= new Person("ello")
		n.whoami();
		
		var h={
			whoami:  function() {
				console.log("h method "+this.name)
			}
		}
		p.whoami.call(n)
		p.whoami.call(p)
		
		h.whoami.call(p)
		
	};
	
	$("#test8").on('click',function()  {
		test8();
	});
	
	
	var test9= function() {
		
		console.log("test9")
		
		var h= new Object();
		
		console.log(" Object.prototype===h.constructor.prototype=> "+((Object.prototype===h.constructor.prototype)?"true":"false"))
		
		function Obj() {
			this.prop="1"
		}
		
		Obj.prototype={
				prop: "2"
		}
		
		h=new Obj()
		
		console.log(h.prop)
		
	};
	
	$("#test9").on('click',function()  {
		test9();
	});
	
	
	var test10=function() {
		console.log('test10')
		
		function Element() {
			this.name="Element"
			this.shape="2D"
		}
		
		function Button() {
			this.name="Button"
		}
		
		var element=new Element()
		Button.prototype= element
		
		var button=new Button()
		button.constructor.prototype=null
		
		var padre= new Element()
		
		console.log("typeof Element "+(typeof element))
		console.log("typeof Button "+(typeof button))
		console.log(element.shape)
		console.log(button.shape)
		console.log(button.name)
		
		Element.prototype=  {
			perimetro: function() {
				return 12;
			}
		}
		
		Button.prototype= new Element()
		var pulsante= new Button()
		
		console.log("pulsante.perimetro=> "+pulsante.perimetro)
		
		console.log("button.perimetro=> "+button.perimetro)
		
//		delete Button
//		Button=undefined
		
//		console.log("button.shape after constructor redifine"+button.shape)
//		console.log(button.name)
		
	}
	
	$("#test10").on('click',function()  {
		test10();
	});
	
})(jQuery);


document.observe("dom:loaded", function() /* before image loaded, before window.onload event */ {
	console.log("Loaded Prototype Version=> "+Prototype.Version)
	
	var test13= function() {
		console.log('test13')
		
		var Shape =Class.create({
			initialize: function(name) {
				this.name=name;
			},
			getName: function() {
				return this.name;
			},
			setName: function(name) {
				return this.name;
			}
		});
		
		var Square =Class.create(Shape,{
			side: 0,
			initialize: function($super,name,side) {
				$super(name);
				this.side=side;
			},
			getSide: function() {
				return this.side;
			},
			setSide: function(side) {
				this.side= side;
			}
		});
		
		console.log("Creare generic shape")
		var shape=new Shape("generic")
		
		console.log("Create square shape")
		var square=new Square("square",20)
		
		console.log(" shape - name: "+shape.getName())
		console.log(" square - name: "+square.getName()+" ,side: "+square.getSide())
		square.setSide(30)
		console.log(" square - name: "+square.getName()+" ,side: "+square.getSide())
		
		console.log(shape.constructor)
		console.log(square.constructor)
		
		console.log(shape instanceof Square)
		console.log(square instanceof Shape)
		console.log(square instanceof Square)
	}
	
	$("test13").on("click", function(event) {
		test13();
	});
	
	var test14= function() {
		console.log("test14")
		
		var Base= Class.create({
			initialize: function(prop) {
				this.instanceProperty= prop
			},
			getInstanceProperty: function() {
				return this.instanceProperty
			}
		});
		
		var BaseBase= {
				basebaseprop: "Basebaseprop"
		}
		
		Base.classProperty= ">Base class property<"
		Base.getClassProperty= function() {
			return Base.classProperty
		}
		
		var instanceOne= new Base(">Base instance object<")
		console.log(instanceOne.getInstanceProperty())
		console.log(Base.classProperty)
		console.log(Base.getClassProperty())
		
		Object.extend(Base,BaseBase)
		
		console.log(Base.basebaseprop)
		
	}
	
	$("test14").on("click", function(event) {
		test14();
	});
});

