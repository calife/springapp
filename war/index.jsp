<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Test Code Application</title>

    <!-- Bootstrap -->
    <link href="pages/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- resize effect -->
    <link rel="stylesheet" href="pages/css/jquery-ui.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <!-- Custom -->
    <link href="pages/css/custom.css" rel="stylesheet">
  </head>
  <body>	
  
  <div class="container theme-showcase" role="main">
  	
  		<div class="page-header">
        	<h3>Test code
        		<div class="col-xs-12 col-sm-3 pull-right"><button id="clear" type="button" class="btn btn-success btn-block">Clear Console</button></div>
        		<div class="col-xs-12 col-sm-3 pull-right"><button id="reloadJs" type="button" class="btn btn-success btn-block">Code Reload</button></div>
        	</h3>
     	</div>

     	<div class="row">
	        <div class="col-xs-12 col-sm-3"><button id="test1" type="button" class="btn btn-default btn-block">Ajax with callback</button></div>
	        <div class="col-xs-12 col-sm-3"><button id="test2" type="button" class="btn btn-default btn-block">Ajax with done,fail,always</button></div>
	 		<div class="col-xs-12 col-sm-3"><button id="test3" type="button" class="btn btn-default btn-block">Log n-times with setInterval</button></div>
	 		<div class="col-xs-12 col-sm-3"><button id="test4" type="button" class="btn btn-default btn-block">Log n-times with deferred</button></div>
	 	</div>
	    <br/>
	    
	 	<div class="row">
	 		<div class="col-xs-12 col-sm-3"><button id="test5" type="button" class="btn btn-default btn-block">Log n-times with promise</button></div>
	 		<div class="col-xs-12 col-sm-3"><button id="test6" type="button" class="btn btn-default btn-block">Play with console</button></div>
	 		<div class="col-xs-12 col-sm-3"><button id="test7" type="button" class="btn btn-default btn-block">Objects</button></div>
	 		<div class="col-xs-12 col-sm-3"><button id="test8" type="button" class="btn btn-default btn-block">Call & Apply</button></div>
	 	</div>
	 	<br/>
	 	
	 	<div class="row">
	 		<div class="col-xs-12 col-sm-3"><button id="test9" type="button" class="btn btn-default btn-block">Prototype</button></div>
	 		<div class="col-xs-12 col-sm-3"><button id="test10" type="button" class="btn btn-default btn-block">Prototype Chain</button></div>
	 	</div>
	 	<br/>
	 	
	 	<hr/>
	 	
	 	<div class="row">
	 		<div class="col-xs-12 col-sm-3"><button id="test13" type="button" class="btn btn-default btn-block">Prototype.js</button></div>
	 		<div class="col-xs-12 col-sm-3"><button id="test14" type="button" class="btn btn-default btn-block">Object extend</button></div>
	 	</div>
	 	<br/>
	 	
	 	<div class="row" style="display:none;">
	      	<div class="alert alert-success" role="alert">
	        	<strong>Well done!</strong> You successfully read this important alert message.
	      	</div>
	      	<div class="alert alert-info" role="alert">
	        	<strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	      	</div>
	      	<div class="alert alert-warning" role="alert">
	        	<strong>Warning!</strong> Best check yo self, you're not looking too good.
	     	</div>
	      	<div class="alert alert-danger" role="alert">
	        	<strong>Oh snap!</strong> Change a few things up and try submitting again.
	      	</div>
  		</div>
  		<br/>
		
		<div class="row">
  			<div id="console" class="col-xs-11 push-to-bottom ui-widget-content">
  				<h3 class="ui-widget-header">Console </h3>
  				<p></p>
  			</div>
  		</div>
  		
	</div>
	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="pages/js/bootstrap.min.js"></script>
    
    <!-- resize effect -->
    <script src="pages/js/jquery-ui.min.js"></script>
    <script src="pages/js/prototype.js"></script>
    
    <script src="pages/js/promise.js"></script>
    <script src="pages/js/namespace.js"></script>
  </body>
</html>