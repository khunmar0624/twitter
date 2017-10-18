angular.module("app",[])
.service("ninenik",["$http",function($http){
    this.showArticle = function($scope){
         var url="http://www.ninenik.com/demo/today_view_article.php?callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(result){
            $scope.articles=result; 
        }).error(function(){
  
        });       
    };
}])
.controller("appController",["$scope","ninenik",function($scope,ninenik){
    $scope.data1="1";
    $scope.articles=[];
    ninenik.showArticle($scope);
}]);