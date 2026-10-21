const viewer = document.querySelector(".image-viewer");
const viewerImage = viewer.querySelector(".image-viewer-image");
const viewerCaption = viewer.querySelector(".image-viewer-caption");
const viewerCount = viewer.querySelector(".image-viewer-count");
const thumbnails = Array.from(document.querySelectorAll(".gallery-thumbnail"));
let activeImageIndex = 0;

function showImage(index) {
  activeImageIndex = (index + thumbnails.length) % thumbnails.length;
  const image = thumbnails[activeImageIndex].querySelector("img");
  viewerImage.src = image.src;
  viewerImage.alt = image.alt;
  viewerCaption.textContent = image.alt;
  viewerCount.textContent = `${activeImageIndex + 1} / ${thumbnails.length}`;
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    showImage(index);
    viewer.showModal();
  });
});

viewer.querySelector(".image-viewer-close").addEventListener("click", () => viewer.close());
viewer.querySelector(".image-viewer-previous").addEventListener("click", () => showImage(activeImageIndex - 1));
viewer.querySelector(".image-viewer-next").addEventListener("click", () => showImage(activeImageIndex + 1));

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) viewer.close();
});

viewer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showImage(activeImageIndex - 1);
  if (event.key === "ArrowRight") showImage(activeImageIndex + 1);
});
