/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "helloworld/model/models",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
  ],
  function (UIComponent, Device, models, JSONModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("helloworld.Component", {
      metadata: {
        mafniest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);
        //set data models
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        var oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");

        // instantiate Hello Dialog
        this._helloDialog = new HelloDialog(this.getRootControl());

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");
      },
      getContentDensityClass : function () {
        if (!this._sContentDensityClass) {
          if (!Device.support.touch)
            this._sContentDensityClass = "sapUiSizeCompact";
          else
            this._sContentDensityClass = "sapUiSizeCozy";
        }
        return this._sContentDensityClass;
      },
      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },
      openHelloDialog: function () {
        this._helloDialog.open();
      },
    });
  }
);
