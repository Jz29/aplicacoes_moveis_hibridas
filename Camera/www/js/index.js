var pictureSource;
var destinationType;

var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    },

    onPhotoDataSuccess: function(imageData) {
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = "data:image/jpeg;base64," + imageData;
    },

    onPhotoURISuccess: function(imageURI) {
      var largeImage = document.getElementById('largeImage');
      largeImage.style.display = 'block';
      largeImage.src = imageURI;
    },

    capturePhoto: function() {
      navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, { quality: 50, destinationType: destinationType.DATA_URL }):
        // break;
    },

    capturePhotoEdit: function() {
      navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, { quality: 20, allowEdit: true, destinationType: destinationType.DATA_URL }):
    },

    getPhoto: function(source) {
      navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, { quality: 50, destinationType: destinationType.FILE_URI, sourceType: source }):
    },

    onFail: function(message) {
      alert('Failed because: ' + message);
    },
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     var listeningElement = parentElement.querySelector('.listening');
    //     var receivedElement = parentElement.querySelector('.received');
    //
    //     listeningElement.setAttribute('style', 'display:none;');
    //     receivedElement.setAttribute('style', 'display:block;');
    //
    //     console.log('Received Event: ' + id);
    // }
};
