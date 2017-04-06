document.addEventListener('DOMContentLoaded', function() {
  
  let mapImageButton = document.getElementById('mapImageButton')
  let dataButton = document.getElementById('dataButton')
  let mapImage = document.getElementById('mapImage')
  let iframeContainer = document.getElementById('iframeContainer')
  let dataFrame = document.getElementById('dataFrame')
  let spinner = document.getElementById('spinnerOverlay')
  
  dataFrame.addEventListener('load', function() {
    // hide spinner
    spinner.className = "hidden"
  }, false)
  
  mapImageButton.addEventListener('click', function() {
    mapImage.className = ""
    iframeContainer.className = "hidden"
  }, false)

  dataButton.addEventListener('click', function() {
    mapImage.className = "hidden"
    iframeContainer.className = ""
    console.log(dataFrame.src)
    if(!dataFrame.src){
      dataFrame.src = "http://ias.openhealth.fr/en-gb/carteallergies"
    }
  }, false)

}, false)
