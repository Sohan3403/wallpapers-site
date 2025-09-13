// ধাপ ১: সব ওয়ালপেপারের নামের একটি লিস্ট তৈরি করুন
const wallpapers = [
    "wall1.jpg",
    "wall2.jpg",
    "wall3.jpg",
    "wall4.jpg",
    "wall5.jpg"
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
