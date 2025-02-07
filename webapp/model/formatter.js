sap.ui.define([], function() {
    'use strict';
    return {
        statusText: function (sStatus) {
            //adquirimos la informacion de i18n
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "A":
                    return oResourceBundle.getText("invoiceStatusA");
                case "B":
                    return oResourceBundle.getText("invoiceStatusB");
                case "C":
                    return oResourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        }
    }
});