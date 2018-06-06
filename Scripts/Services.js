var ApiService = angular.module('ApiService', []);

ApiService.factory('AppApi', function ($http)
{
    var url = "http://theflowershop1.gearhostpreview.com/api/";
    var AppApi = {};
    
    /* ----------------------------------- Customer ----------------------------------------------*/
    //Customer Login
    AppApi.AttemptLogin = function (Email, Password) {
        return $http.get("http://theflowershop1.gearhostpreview.com/api/" + 'Customers?Email=' + Email + '&Password=' + Password);
    }

    //Customer Edit
    AppApi.EditCustomer = function (Customer) {
        var data = $http({
            method: "PUT",
            url: "http://theflowershop1.gearhostpreview.com/api/Customers/" + Customer.ID,
            data: Customer,
        });
        return data;
    }

    //CustomerDelete
    AppApi.DeleteCustomer = function (ID) {
        return $http.delete("http://theflowershop1.gearhostpreview.com/api/" + 'Customers?ID='+ ID);
    }

    /* --------------------------------------- Product ------------------------------------------------*/
    //Get Product
    AppApi.GetProducts = function () {
        return $http.get(url + "Products/");
    }

    //Add Product
    AppApi.AddProduct = function (Name, Price, Quantity, Image) {
        return $http.post("http://theflowershop1.gearhostpreview.com/api/Products");
    }

    //Edit Product
    AppApi.UpdateProduct = function (Product) {
        var data = $http({
            method: "PUT",
            url: "http://theflowershop1.gearhostpreview.com/api/Products/" + Product.ID,
            data: Product,
        });
        return data;
    }

    //Delete Product
    AppApi.DeleteProduct = function (ID) {
        return $http.delete("http://theflowershop1.gearhostpreview.com/api/" + 'Products?ID=' + ID);
    }

    /* ------------------------------------ Driver --------------------------------------------*/

    //Driver Login
    AppApi.LoginDriver = function (Driver) {
        return $http.get("http://theflowershop1.gearhostpreview.com/api/" + 'Drivers?Email=' + Driver.Email + '&Password=' + Driver.Password);
    }

    //Driver Registration
    AppApi.AddDriver = function (ID, Name, Surname, Email, Phone, License, Code, Password) {
        return $http.post("http://theflowershop1.gearhostpreview.com/api/Drivers");
    }

    //Driver Update
    AppApi.UpdateDriver = function (Driver) {
        var data = $http({
            method: "PUT",
            url: "http://theflowershop1.gearhostpreview.com/api/Drivers/" +  Driver.ID,
            data: Driver,
        });
        return data;
    }

    //Driver Delete
    AppApi.DeleteDriver = function (Driver) {
        return $http.delete("http://theflowershop1.gearhostpreview.com/api/" + 'Drivers?DriverID=' + Driver);
    }

    /*----------------------------------- Admin --------------------------------------*/
    //Admin Login
    AppApi.AdminLogin = function (Email, Password) {
        return $http.get("http://theflowershop1.gearhostpreview.com/api/" + 'Administrators?Email=' + Email + '&Password=' + Password);
    }

    /*---------------------------------- Supplier ---------------------------------------*/
    AppApi.SupplierLogin = function (Supplier) {
        return $http.get("http://theflowershop1.gearhostpreview.com/api/" + 'Suppliers?SupplierEmail='+Supplier.SupplierEmail+'&Password='+Supplier.Password);
    }

    AppApi.GetSupplierData = function (Supplier) {
        return $http.get("http://theflowershop1.gearhostpreview.com/api/" + 'SupplierProducts?SupplierName=' + Supplier.name );
    }

    /*------------------------------------ Order ---------------------------------------*/
    AppApi.UpdateOrderStatus = function (Order) {
        return $http.put("http://theflowershop1.gearhostpreview.com/api/Orders/" + Order.OrderID, Order);
    }

    return AppApi;
});

app.factory("userPersistenceService", [
    "$cookies", function ($cookies) {
        var user = "";
        return {
            setCookieData: function (username) {
                $cookies.putObject("currentUser", username, {'path':"/"});
            },
            getCookieData: function () {
                user = $cookies.getObject("currentUser");
                return user;
            },
            clearCookieData: function () {
                username = "";
                $cookies.remove("currentUser", { path: '/' });
            }
        }
    }
]);

app.factory("CurrentSupplier", [
    "$cookies", function ($cookies) {
        var user = "";
        return {
            setCookieData: function (username) {
                $cookies.putObject("currentSupplier", username, { 'path': "/" });
            },
            getCookieData: function () {
                user = $cookies.getObject("currentSupplier");
                return user;
            },
            clearCookieData: function () {
                username = "";
                $cookies.remove("currentSupplier", { path: '/' });
            }
        }
    }
]);

app.factory("CurrentDriver", [
    "$cookies", function ($cookies) {
        var user = "";
        return {
            setCookieData: function (username) {
                $cookies.putObject("currentDriver", username, { 'path': "/" });
            },
            getCookieData: function () {
                user = $cookies.getObject("currentDriver");
                return user;
            },
            clearCookieData: function () {
                username = "";
                $cookies.remove("currentDriver", { path: '/' });
            }
        }
    }
]);

app.factory("Cart", [
    "$cookies", function ($cookies) {
        var items = "";
        return {
            setCartData: function (items) {
                $cookies.putObject("Cart", items, { 'path': "/" });
            },
            getCartData: function () {
                items = $cookies.getObject("Cart");
                return items;
            },
            clearCartData: function () {
                items = "";
                $cookies.remove("Cart");
            }
        }
    }
]);

app.directive('ngFiles', ['$parse', function ($parse) {
    function fn_link(scope, element, attrs) {

        var Change = $parse(attrs.ngFiles);

        element.on('change', function (event) {
            Change(scope, { $files: event.target.files });
        })
    }
    return {
        link: fn_link
    }
}]);