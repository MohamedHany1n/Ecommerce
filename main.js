const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close")

if (bar ) {
  bar.addEventListener('click', () => {
    navbar.classList.add('active');
  })
}

if (close ) {
  close.addEventListener('click', () => {
  navbar.classList.remove('active');
  })
}


// بيانات كل المنتجات
const products = {
    1: {
        name: "Cartoon Astronaut T-Shirt - الأحمر",
        price: "$78",
        brand: "adidas",
        images: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"],
        description: "تيشيرت رائع بطبعة رائد فضاء، مناسب للارتداء اليومي. قطن 100%."
    },
    2: {
        name: "Cartoon Astronaut T-Shirt - الأسود", 
        price: "$85",
        brand: "adidas",
        images: ["f2.jpg", "f1.jpg", "f3.jpg", "f4.jpg"],
        description: "تيشيرت أسود أنيق بطبعة رائد فضاء. قطن عالي الجودة."
    },
    3: {
        name: "Sport T-Shirt - الأزرق",
        price: "$92", 
        brand: "nike",
        images: ["f3.jpg", "f1.jpg", "f2.jpg", "f4.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    4: {
        name: "Sport T-Shirt - white",
        price: "$62", 
        brand: "nike",
        images: ["f4.jpg", "f1.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    5: {
        name: "Sport T-Shirt - اخضر",
        price: "$99", 
        brand: "nike",
        images: ["f5.jpg", "f1.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    6: {
        name: "Sport T-Shirt - blue",
        price: "$199", 
        brand: "nike",
        images: ["f6.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    7: {
        name: "Sport T-Shirt - blue",
        price: "$659", 
        brand: "nike",
        images: ["f7.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    8: {
        name: "Sport T-Shirt - blue",
        price: "$449", 
        brand: "nike",
        images: ["f8.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    9: {
        name: "Sport T-Shirt - blue",
        price: "$239", 
        brand: "nike",
        images: ["n8.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    10: {
        name: "Sport T-Shirt - blue",
        price: "$159", 
        brand: "nike",
        images: ["n7.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    11: {
        name: "Sport T-Shirt - blue",
        price: "$299", 
        brand: "nike",
        images: ["n6.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    12: {
        name: "Sport T-Shirt - blue",
        price: "$499", 
        brand: "nike",
        images: ["n5.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    13: {
        name: "Sport T-Shirt - blue",
        price: "$199", 
        brand: "nike",
        images: ["n1.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    14: {
        name: "Sport T-Shirt - blue",
        price: "$299", 
        brand: "nike",
        images: ["n2.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    15: {
        name: "Sport T-Shirt - blue",
        price: "$599", 
        brand: "nike",
        images: ["n3.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    },
    16: {
        name: "Sport T-Shirt - blue",
        price: "$699", 
        brand: "nike",
        images: ["n4.jpg", "f5.jpg", "f2.jpg", "f3.jpg"],
        description: "تيشيرت رياضي أزرق، مثالي للتدريبات والأنشطة الرياضية."
    }
};

// وظيفة تجيب رقم المنتج من الرابط
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product');
}

// وظيفة تعرض بيانات المنتج
function loadProduct() {
    const productId = getProductIdFromURL();
    const product = products[productId];
    
    if (product) {
        // تحديث البيانات في الصفحة
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('breadcrumb').textContent = `Home / ${product.brand} / ${product.name}`;
        document.getElementById('productDescription').textContent = product.description;
        
        // تحديث الصور الرئيسية
        const mainImg = document.getElementById('maining');
        mainImg.src = `images/product/${product.images[0]}`;
        
        // إضافة الصور الصغيرة
        const smallImagesContainer = document.getElementById('smallImages');
        smallImagesContainer.innerHTML = '';
        
        product.images.forEach((img, index) => {
            smallImagesContainer.innerHTML += `
                <div class="small-img-col">
                    <img src="images/product/${img}" class="small-img" width="100%" alt="">
                </div>
            `;
        });
        
        // إعادة ربط حدث الصور الصغيرة
        rebindSmallImages();
    }
}

// إعادة ربط الأحداث على الصور الصغيرة
function rebindSmallImages() {
    const mainImg = document.getElementById('maining');
    const smallImgs = document.querySelectorAll('.small-img');
    
    smallImgs.forEach(img => {
        img.addEventListener('click', function() {
            mainImg.src = this.src;
        });
    });
}

// تشغيل عند تحميل الصفحة
window.onload = function() {
    loadProduct();
};

const idCards = document.querySelectorAll(".pro")

idCards.forEach(cards => {
  const id = cards.getAttribute("data-id");
  const productShop = products[id];
  if (productShop) {
    cards.querySelector(".price").textContent = productShop.price;
  }
});





document.getElementById("form-details").onsubmit = function () {
  let mail = document.getElementById("E-mail").value;
  let maill = document.getElementById("E-mail");
  let mailRe = /^[\w.-]+@[\w.-]+\.\w+$/;
  let validationResult = mailRe.test(mail);
  if (validationResult === false) {
    alert("Invalid E-mail");
    return false;
  }
  return true;
}


