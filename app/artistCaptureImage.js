function initArtistCaptureImage() {
  console.log("This is artist capture image page");

  const captureImageBtn = document.querySelector(".capture-icon");
  const streamingVideo = document.querySelector("#streamingVideo");
  const captureCanvas = document.querySelector("#captureCanvas");
  const previewImg = document.querySelector("#preview");

  streamingVideo.setAttribute("playsinline", true);
  streamingVideo.setAttribute("controls", true);
  setTimeout(() => {
    streamingVideo.removeAttribute("controls");
  }); // hack for mobile IOS

  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: "environment",
      },
    })
    .then((stream) => {
      streamingVideo.srcObject = stream;
    });

  streamingVideo.addEventListener("canplay", function () {
    captureCanvas.width = streamingVideo.videoWidth;
    captureCanvas.height = streamingVideo.videoHeight;
  });

  captureImageBtn.addEventListener("click", function () {
    const snapshotImg = document.querySelector(".snapshot-img");
    snapshotImg.style.display = "none";
    const ctx = captureCanvas.getContext("2d");
    ctx.drawImage(streamingVideo, 0, 0);
    const img = captureCanvas.toDataURL("image/png");
    previewImg.src = img;
    console.log(img);

    // stop streaming
    const stream = streamingVideo.srcObject;
    const tracks = stream.getTracks();
    tracks[0].stop();
    streamingVideo.src = "";

    window.location.hash = "#artist-add-new-item-page";
  });
// --------------------------------------------------------------


  
}

