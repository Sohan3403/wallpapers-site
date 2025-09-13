// ধাপ ১: সব ওয়ালপেপারের নামের একটি লিস্ট তৈরি করুন
const wallpapers = [
const wallpapers = [
    "wall1.jpg",
    "wall2.jpg",
    "wall3.jpg",
    "wall4.jpg",
    "wall5.jpg",
    "wall6.jpg",
    "wall7.jpg",
    "wall8.jpg",
    "wall9.jpg",
    "wall10.jpg",
    "wall11.jpg",
    "wall12.jpg",
    "wall13.jpg",
    "wall14.jpg",
    "wall15.jpg",
    "wall16.jpg",
    "wall17.jpg",
    "wall18.jpg",
    "wall19.jpg",
    "wall20.jpg",
    "wall21.jpg",
    "wall22.jpg",
    "wall23.jpg",
    "wall24.jpg",
    "wall25.jpg",
    "wall26.jpg",
    "wall27.jpg",
    "wall28.jpg",
    "wall29.jpg",
    "wall30.jpg",
    "wall31.jpg",
    "wall32.jpg",
    "wall33.jpg",
    "wall34.jpg",
    "wall35.jpg",
    "wall36.jpg",
    "wall37.jpg",
    "wall38.jpg",
    "wall39.jpg",
    "wall40.jpg",
    "wall41.jpg",
    "wall42.jpg",
    "wall43.jpg",
    "wall44.jpg",
    "wall45.jpg",
    "wall46.jpg",
    "wall47.jpg",
    "wall48.jpg",
    "wall49.jpg",
    "wall50.jpg",
    "wall51.jpg",
    "wall52.jpg",
    "wall53.jpg",
    "wall54.jpg",
    "wall55.jpg",
    "wall56.jpg",
    "wall57.jpg",
    "wall58.jpg",
    "wall59.jpg",
    "wall60.jpg",
    "wall61.jpg",
    "wall62.jpg",
    "wall63.jpg",
    "wall64.jpg",
    "wall65.jpg",
    "wall66.jpg",
    "wall67.jpg",
    "wall68.jpg",
    "wall69.jpg",
    "wall70.jpg",
    "wall71.jpg",
    "wall72.jpg",
    "wall73.jpg",
    "wall74.jpg",
    "wall75.jpg",
    "wall76.jpg",
    "wall77.jpg",
    "wall78.jpg",
    "wall79.jpg",
    "wall80.jpg",
    "wall81.jpg",
    "wall82.jpg",
    "wall83.jpg",
    "wall84.jpg",
    "wall85.jpg",
    "wall86.jpg",
    "wall87.jpg",
    "wall88.jpg",
    "wall89.jpg",
    "wall90.jpg",
    "wall91.jpg",
    "wall92.jpg",
    "wall93.jpg",
    "wall94.jpg",
    "wall95.jpg",
    "wall96.jpg",
    "wall97.jpg",
    "wall98.jpg",
    "wall99.jpg",
    "wall100.jpg"
];
    // আপনার যতগুলো ছবি আছে, কমা দিয়ে দিয়ে এখানে নামগুলো যোগ করুন
];

// ধাপ ২: HTML থেকে গ্যালারি অংশটিকে খুঁজে বের করা
const gallery = document.getElementById('wallpaper-gallery');

// ধাপ ৩: উপরের লিস্টের প্রতিটি ছবির নামের জন্য HTML কোড তৈরি করে ওয়েবসাইটে যোগ করা
wallpapers.forEach(wallpaperName => {
    // একটি নতুন div তৈরি করা <div class="wallpaper"></div>
    const wallpaperDiv = document.createElement('div');
    wallpaperDiv.className = 'wallpaper';

    // div-টির ভেতরে img এবং a ট্যাগ যোগ করা
    wallpaperDiv.innerHTML = `
        <img src="images/${wallpaperName}" alt="Wallpaper">
        <a href="images/${wallpaperName}" download>Download</a>
    `;

    // তৈরি হওয়া নতুন div-টিকে গ্যালারির ভেতরে যোগ করা
    gallery.appendChild(wallpaperDiv);
});
