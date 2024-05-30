

function loadImage(url) {
    return(
        new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
        })
    )
}

export async function loadAllImages(imageUrls) {
    try {
        const imagePromises = imageUrls.map(loadImage);
        await Promise.all(imagePromises);
        //setAllImagesLoaded("1");

        return "1"
    } catch (error) {
        console.error('Error loading images:', error);
    }
};