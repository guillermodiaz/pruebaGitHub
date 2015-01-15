(function (angular) {
    'use strict';
    var app = angular.module("app",[]);
    
    app.controller("MainController",function($scope,$http){
        $scope.data="";//toda la informacion de la pagina
        $scope.pathPdf="";//ruta del pdf visualizado
        
        $scope.setVerPDF=function(path){
            $scope.pathPdf=path;
        };

       $http.get("data/main.json").success(function(data){
           $scope.data=data;
        });

    });

}(window.angular));