sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict"

    return ManagedObject.extend("helloworld.controller.Hellodialog", {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oview;
        },

        open: function () {
            var oView = this._oView;
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close()
                    }
                }
                Fragment.load({
                    id: oView.getId(),
                    name: "helloworld.view.HelloDialog",
                    controller: oFragmentController
                }).then( (oDialog) => {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                oView.byId("helloDialog").open();
            }
        }
    })
})