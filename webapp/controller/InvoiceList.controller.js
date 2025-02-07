sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict"

    return Controller.extend("helloworld.controller.InvoiceList", {
        formatter: formatter,
        onInit: function () {
            var oViewModel = new JSONModel({currency: "EUR"});
            this.getView().setModel(oViewModel, "extra_model");
        },

        onFilterInvoices : function (oEvent) {
            //build filter based on the query came from the searchbar

            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            //filter binding
            var oList = this.byId("invoicelist_list");
            //getting the item of the list, look to properties of xml List if any doubt
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        onPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            console.log(oItem.getBindingContext("invoice").getPath());
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }

    })
})