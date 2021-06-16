Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,

    constraints:{
        facingMode:"enviroment"
    }
})
Webcam.attach("camera")