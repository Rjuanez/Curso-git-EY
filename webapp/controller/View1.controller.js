sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("helloworld.controller.View1", {
        onInit: function () {

        },
        onSayHello: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            alert(sMsg)
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});
