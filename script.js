// ধাপ ১: সব ওয়ালপেপারের নামের একটি সঠিক লিস্ট
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
    // নতুন ছবি যোগ করতে হলে, শুধু এখানে কমা দিয়ে নামটি যোগ করবেন
];

// ধাপ ২: HTML থেকে গ্যালারি অংশটিকে খুঁজে বের করা
const gallery = document.getElementById('wallpaper-gallery');

// ধাপ ৩: উপরের লিস্টের প্রতিটি ছবির নামের জন্য HTML কোড তৈরি করে ওয়েবসাইটে যোগ করা
wallpapers.forEach(wallpaperName => {
    // একটি নতুন div তৈরি করা
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
