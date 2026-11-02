const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const money = n =>
  new Intl.NumberFormat('ru-RU').format(n) + ' сум';

const productsSeed = [
  {
    id: 1,
    name: {
      ru: 'Кровать Noma',
      uz: 'Noma karavoti',
      en: 'Noma Bed'
    },
    category: 'beds',
    price: 6850000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=850&q=85',
    tag: 'Bestseller'
  },
  {
    id: 2,
    name: {
      ru: 'Диван Arco',
      uz: 'Arco divani',
      en: 'Arco Sofa'
    },
    category: 'sofas',
    price: 12400000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=850&q=85',
    tag: 'New'
  },
  {
    id: 3,
    name: {
      ru: 'Комод Linea',
      uz: 'Linea komodi',
      en: 'Linea Dresser'
    },
    category: 'storage',
    price: 4350000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=850&q=85',
    tag: ''
  },
  {
    id: 4,
    name: {
      ru: 'Стол Forma',
      uz: 'Forma stoli',
      en: 'Forma Table'
    },
    category: 'tables',
    price: 5200000,
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=850&q=85',
    tag: 'Popular'
  },
  {
    id: 5,
    name: {
      ru: 'Кресло Miro',
      uz: 'Miro kreslosi',
      en: 'Miro Armchair'
    },
    category: 'other',
    price: 3850000,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=850&q=85',
    tag: ''
  },
  {
    id: 6,
    name: {
      ru: 'Шкаф Alto',
      uz: 'Alto shkafi',
      en: 'Alto Wardrobe'
    },
    category: 'storage',
    price: 8900000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=850&q=85',
    tag: 'New'
  },
  {
    id: 7,
    name: {
      ru: 'Кровать Sora',
      uz: 'Sora karavoti',
      en: 'Sora Bed'
    },
    category: 'beds',
    price: 7950000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=850&q=85',
    tag: ''
  },
  {
    id: 8,
    name: {
      ru: 'Угловой диван Luma',
      uz: 'Luma burchak divani',
      en: 'Luma Corner Sofa'
    },
    category: 'sofas',
    price: 15900000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=850&q=85',
    tag: 'Premium'
  }
];

// ======================================
// TRANSLATIONS
// ======================================

const translations = {
  ru: {
    announcement: 'Бесплатная доставка от 5 000 000 сум · 14 дней на возврат',
    navCatalog: 'Каталог',
    navCollections: 'Коллекции',
    navAbout: 'О бренде',
    navContacts: 'Контакты',
    searchPlaceholder: 'Поиск мебели...',
    heroEyebrow: 'ИСКУССТВО ЖИТЬ КРАСИВО',
    heroTitleA: 'Пространство,',
    heroTitleB: 'в котором',
    heroTitleC: 'хочется жить.',
    heroText: 'Продуманная мебель, натуральные фактуры и детали, которые превращают дом в особенное место.',
    heroButton: 'Смотреть коллекцию',
    learnMore: 'Узнать о FURNIX',
    heroNote: 'Дизайн с характером. Комфорт на каждый день.',
    heroCaption: 'THE ART OF SLOW LIVING',
    trustOne: 'Продуманный дизайн',
    trustTwo: 'Качество материалов',
    trustThree: 'Доставка по Узбекистану',
    trustFour: 'Забота после покупки',
    categoryEyebrow: 'НАЙДИТЕ СВОЙ СТИЛЬ',
    categoryTitle: 'Комнаты с характером',
    allCategories: 'Все категории ↗',
    catBeds: 'Кровати и спальни',
    catSofas: 'Диваны и уголки',
    catStorage: 'Шкафы и комоды',
    catTables: 'Столы и стулья',
    catalogEyebrow: 'ИЗБРАННОЕ FURNIX',
    catalogTitle: 'Предметы для жизни',
    filterAll: 'Все',
    filterBeds: 'Кровати',
    filterSofas: 'Диваны',
    filterStorage: 'Шкафы',
    filterTables: 'Столы',
    filterOther: 'Другое',
    sortFeatured: 'Сначала популярные',
    sortLow: 'Сначала дешевле',
    sortHigh: 'Сначала дороже',
    emptyProducts: 'Ничего не найдено. Попробуйте изменить запрос.',
    editorialEyebrow: 'МЕНЬШЕ, НО ЛУЧШЕ',
    editorialTitle: 'Красота —',
    editorialText: 'Мы верим, что мебель должна не просто заполнять пространство, а помогать чувствовать себя дома. Выбирайте вещи, которые останутся с вами надолго.',
    editorialLink: 'Открыть каталог ↗',
    benefitsEyebrow: 'ПОЧЕМУ FURNIX',
    benefitsTitle: 'Покупка без лишних забот',
    benefitOneTitle: 'Подбор с заботой',
    benefitOneText: 'Поможем выбрать мебель под ваш интерьер и задачи.',
    benefitTwoTitle: 'Доставка и сборка',
    benefitTwoText: 'Согласуем удобное время и заранее сообщим статус заказа.',
    benefitThreeTitle: 'Надёжные материалы',
    benefitThreeText: 'Внимание к фактурам, фурнитуре и качеству исполнения.',
    benefitFourTitle: 'Поддержка рядом',
    benefitFourText: 'Остаёмся на связи и после того, как мебель приехала к вам.',
    newsletterEyebrow: 'FURNIX JOURNAL',
    newsletterTitle: 'Вдохновение для вашего дома.',
    newsletterText: 'Оставьте номер — мы свяжемся с вами по новинкам и специальным предложениям.',
    subscribe: 'Оставить заявку ↗',
    privacyNote: 'Нажимая кнопку, вы соглашаетесь на обратный звонок.',
    footerText: 'Создаём пространство, в котором хочется быть.',
    footerExplore: 'Исследуйте',
    footerContact: 'Связаться',
    footerVisit: 'Мы на карте',
    addressText: 'Ташкент, Узбекистан',
    openMap: 'Открыть карту ↗',
    rights: 'Все права защищены.',
    footerMade: 'Дизайн пространства начинается здесь.',
    cartTitle: 'Ваша корзина',
    total: 'Итого',
    checkout: 'Оформить заказ ↗',
    checkoutDemo: 'Демонстрационный режим: заказ сохранится в этом браузере.',
    checkoutTitle: 'Оформление заказа',
    yourName: 'Ваше имя',
    phone: 'Номер телефона',
    deliveryAddress: 'Адрес доставки',
    orderComment: 'Комментарий',
    sendOrder: 'Отправить заявку ↗',
    realIntegrationsNote: 'Для реальных SMS, оплаты и уведомлений подключите сервер и соответствующие сервисы.',
    adminDemoHint: 'Демо-доступ для просмотра панели. Замените его серверной авторизацией перед публикацией.',
    adminPassword: 'Пароль администратора',
    login: 'Войти',
    adminOrders: 'Последние заявки',
    adminAddProduct: 'Добавить товар',
    productName: 'Название',
    productPrice: 'Цена (сум)',
    productCategory: 'Категория',
    addProduct: 'Добавить товар',
    logout: 'Выйти из панели',
    addToCart: 'Добавить в корзину',
    added: 'Добавлено в корзину',
    emptyCart: 'Корзина пока пуста.',
    orderSent: 'Заявка сохранена в демо-магазине.',
    phoneInvalid: 'Проверьте номер телефона.',
    adminWrong: 'Неверный пароль.',
    productAdded: 'Товар добавлен.',
    statusNew: 'Новый',
    statusConfirmed: 'Подтверждён',
    statusDelivery: 'В доставке',
    statusDone: 'Доставлен'
  },

  uz: {
    announcement: '5 000 000 so‘mdan bepul yetkazib berish · 14 kun ichida qaytarish',
    navCatalog: 'Katalog',
    navCollections: 'To‘plamlar',
    navAbout: 'Brend haqida',
    navContacts: 'Aloqa',
    searchPlaceholder: 'Mebel qidirish...',
    heroEyebrow: 'GO‘ZAL YASHASH SAN’ATI',
    heroTitleA: 'Shunday makon,',
    heroTitleB: 'unda',
    heroTitleC: 'yashagingiz keladi.',
    heroText: 'Puxta o‘ylangan mebel, tabiiy fakturalar va uyingizni o‘zgacha maskanga aylantiradigan detallar.',
    heroButton: 'To‘plamni ko‘rish',
    learnMore: 'FURNIX haqida',
    heroNote: 'O‘ziga xos dizayn. Har kunlik qulaylik.',
    heroCaption: 'SEKIN HAYOT SAN’ATI',
    trustOne: 'Puxta dizayn',
    trustTwo: 'Materiallar sifati',
    trustThree: 'O‘zbekiston bo‘ylab yetkazish',
    trustFour: 'Xariddan keyingi yordam',
    categoryEyebrow: 'O‘Z USLUBINGIZNI TOPING',
    categoryTitle: 'O‘ziga xos xonalar',
    allCategories: 'Barcha toifalar ↗',
    catBeds: 'Karavot va yotoqxona',
    catSofas: 'Divan va burchaklar',
    catStorage: 'Shkaf va komodlar',
    catTables: 'Stol va stullar',
    catalogEyebrow: 'FURNIX TANLOVI',
    catalogTitle: 'Hayot uchun buyumlar',
    filterAll: 'Barchasi',
    filterBeds: 'Karavotlar',
    filterSofas: 'Divanlar',
    filterStorage: 'Shkaflar',
    filterTables: 'Stollar',
    filterOther: 'Boshqa',
    sortFeatured: 'Avval mashhurlari',
    sortLow: 'Avval arzonlari',
    sortHigh: 'Avval qimmatlari',
    emptyProducts: 'Hech narsa topilmadi. Qidiruvni o‘zgartiring.',
    editorialEyebrow: 'KAMROQ, AMMO YAXSHIROQ',
    editorialTitle: 'Go‘zallik —',
    editorialText: 'Mebel shunchaki makonni to‘ldirmasligi, balki uyda o‘zingizni qulay his qilishingizga yordam berishi kerak. Uzoq vaqt siz bilan qoladigan buyumlarni tanlang.',
    editorialLink: 'Katalogni ochish ↗',
    benefitsEyebrow: 'NEGA FURNIX',
    benefitsTitle: 'Ortiqcha tashvishlarsiz xarid',
    benefitOneTitle: 'E’tibor bilan tanlash',
    benefitOneText: 'Interyeringiz va ehtiyojingizga mos mebel tanlashga yordam beramiz.',
    benefitTwoTitle: 'Yetkazish va yig‘ish',
    benefitTwoText: 'Qulay vaqtni kelishamiz va buyurtma holatini xabar qilamiz.',
    benefitThreeTitle: 'Ishonchli materiallar',
    benefitThreeText: 'Faktura, furnitura va bajarilish sifatiga e’tibor.',
    benefitFourTitle: 'Doimiy yordam',
    benefitFourText: 'Mebel yetib kelganidan keyin ham aloqada qolamiz.',
    newsletterEyebrow: 'FURNIX JURNALI',
    newsletterTitle: 'Uyingiz uchun ilhom.',
    newsletterText: 'Raqamingizni qoldiring — yangiliklar va takliflar bo‘yicha bog‘lanamiz.',
    subscribe: 'So‘rov qoldirish ↗',
    privacyNote: 'Tugmani bosish orqali qayta qo‘ng‘iroqqa rozilik bildirasiz.',
    footerText: 'Yashagingiz keladigan makon yaratamiz.',
    footerExplore: 'Kashf eting',
    footerContact: 'Bog‘lanish',
    footerVisit: 'Xaritada',
    addressText: 'Toshkent, O‘zbekiston',
    openMap: 'Xaritani ochish ↗',
    rights: 'Barcha huquqlar himoyalangan.',
    footerMade: 'Makon dizayni shu yerdan boshlanadi.',
    cartTitle: 'Savatchangiz',
    total: 'Jami',
    checkout: 'Buyurtma berish ↗',
    checkoutDemo: 'Demo rejim: buyurtma ushbu brauzerda saqlanadi.',
    checkoutTitle: 'Buyurtmani rasmiylashtirish',
    yourName: 'Ismingiz',
    phone: 'Telefon raqami',
    deliveryAddress: 'Yetkazib berish manzili',
    orderComment: 'Izoh',
    sendOrder: 'So‘rov yuborish ↗',
    realIntegrationsNote: 'Haqiqiy SMS, to‘lov va bildirishnomalar uchun server va xizmatlarni ulang.',
    adminDemoHint: 'Panelni ko‘rish uchun demo kirish. Saytni e’lon qilishdan oldin server avtorizatsiyasiga almashtiring.',
    adminPassword: 'Administrator paroli',
    login: 'Kirish',
    adminOrders: 'So‘nggi buyurtmalar',
    adminAddProduct: 'Mahsulot qo‘shish',
    productName: 'Nomi',
    productPrice: 'Narxi (so‘m)',
    productCategory: 'Toifa',
    addProduct: 'Mahsulot qo‘shish',
    logout: 'Paneldan chiqish',
    addToCart: 'Savatchaga qo‘shish',
    added: 'Savatchaga qo‘shildi',
    emptyCart: 'Savatcha hozircha bo‘sh.',
    orderSent: 'So‘rov demo-do‘konda saqlandi.',
    phoneInvalid: 'Telefon raqamini tekshiring.',
    adminWrong: 'Parol noto‘g‘ri.',
    productAdded: 'Mahsulot qo‘shildi.',
    statusNew: 'Yangi',
    statusConfirmed: 'Tasdiqlangan',
    statusDelivery: 'Yetkazilmoqda',
    statusDone: 'Yetkazildi'
  },

  en: {
    announcement: 'Free delivery over UZS 5,000,000 · 14-day returns',
    navCatalog: 'Catalog',
    navCollections: 'Collections',
    navAbout: 'About',
    navContacts: 'Contact',
    searchPlaceholder: 'Search furniture...',
    heroEyebrow: 'THE ART OF LIVING WELL',
    heroTitleA: 'A space',
    heroTitleB: 'you’ll',
    heroTitleC: 'love living in.',
    heroText: 'Thoughtful furniture, natural textures and considered details that make a house feel like home.',
    heroButton: 'Explore collection',
    learnMore: 'Discover FURNIX',
    heroNote: 'Character in every detail. Comfort every day.',
    heroCaption: 'THE ART OF SLOW LIVING',
    trustOne: 'Thoughtful design',
    trustTwo: 'Quality materials',
    trustThree: 'Delivery across Uzbekistan',
    trustFour: 'Care after purchase',
    categoryEyebrow: 'FIND YOUR STYLE',
    categoryTitle: 'Rooms with character',
    allCategories: 'All categories ↗',
    catBeds: 'Beds & bedrooms',
    catSofas: 'Sofas & corner units',
    catStorage: 'Wardrobes & dressers',
    catTables: 'Tables & chairs',
    catalogEyebrow: 'THE FURNIX EDIT',
    catalogTitle: 'Objects for living',
    filterAll: 'All',
    filterBeds: 'Beds',
    filterSofas: 'Sofas',
    filterStorage: 'Storage',
    filterTables: 'Tables',
    filterOther: 'Other',
    sortFeatured: 'Featured first',
    sortLow: 'Price: low to high',
    sortHigh: 'Price: high to low',
    emptyProducts: 'No products found. Try another search.',
    editorialEyebrow: 'LESS, BUT BETTER',
    editorialTitle: 'Beauty is',
    editorialText: 'Furniture should do more than fill a room. It should help you feel at home. Choose pieces that will stay with you for years.',
    editorialLink: 'Explore catalog ↗',
    benefitsEyebrow: 'WHY FURNIX',
    benefitsTitle: 'A thoughtful way to shop',
    benefitOneTitle: 'Personal guidance',
    benefitOneText: 'We help you find furniture that suits your space and needs.',
    benefitTwoTitle: 'Delivery & assembly',
    benefitTwoText: 'We arrange a convenient time and keep you updated on your order.',
    benefitThreeTitle: 'Quality materials',
    benefitThreeText: 'Careful attention to texture, fittings and craftsmanship.',
    benefitFourTitle: 'Here to help',
    benefitFourText: 'Our support continues after your furniture arrives.',
    newsletterEyebrow: 'FURNIX JOURNAL',
    newsletterTitle: 'A little inspiration for home.',
    newsletterText: 'Leave your number and we’ll contact you about new arrivals and offers.',
    subscribe: 'Request a call ↗',
    privacyNote: 'By submitting, you agree to receive a callback.',
    footerText: 'Creating spaces you love to be in.',
    footerExplore: 'Explore',
    footerContact: 'Contact',
    footerVisit: 'Find us',
    addressText: 'Tashkent, Uzbekistan',
    openMap: 'Open map ↗',
    rights: 'All rights reserved.',
    footerMade: 'Good spaces start here.',
    cartTitle: 'Your cart',
    total: 'Total',
    checkout: 'Continue to checkout ↗',
    checkoutDemo: 'Demo mode: your order is saved in this browser.',
    checkoutTitle: 'Place your order',
    yourName: 'Your name',
    phone: 'Phone number',
    deliveryAddress: 'Delivery address',
    orderComment: 'Comment',
    sendOrder: 'Submit request ↗',
    realIntegrationsNote: 'Connect a backend and service providers for real SMS, payments and notifications.',
    adminDemoHint: 'Demo access to preview the panel. Replace with server-side authentication before launch.',
    adminPassword: 'Admin password',
    login: 'Sign in',
    adminOrders: 'Recent requests',
    adminAddProduct: 'Add product',
    productName: 'Name',
    productPrice: 'Price (UZS)',
    productCategory: 'Category',
    addProduct: 'Add product',
    logout: 'Sign out',
    addToCart: 'Add to cart',
    added: 'Added to cart',
    emptyCart: 'Your cart is empty.',
    orderSent: 'Request saved in demo store.',
    phoneInvalid: 'Please check the phone number.',
    adminWrong: 'Incorrect password.',
    productAdded: 'Product added.',
    statusNew: 'New',
    statusConfirmed: 'Confirmed',
    statusDelivery: 'Out for delivery',
    statusDone: 'Delivered'
  }
};

// ======================================
// APP STATE
// ======================================

let language = localStorage.getItem('furnix_lang') || 'ru';

let products =
  JSON.parse(localStorage.getItem('furnix_products') || 'null')
  || productsSeed;

let cart = JSON.parse(localStorage.getItem('furnix_cart') || '[]');
let orders = JSON.parse(localStorage.getItem('furnix_orders') || '[]');
let favorites = JSON.parse(localStorage.getItem('furnix_favorites') || '[]');

let currentFilter = 'all';
let searchTerm = '';

const t = key =>
  translations[language][key] || translations.ru[key] || key;

const productName = product =>
  typeof product.name === 'string'
    ? product.name
    : product.name[language] || product.name.ru;

// ======================================
// STORAGE
// ======================================

function save() {
  localStorage.setItem('furnix_products', JSON.stringify(products));
  localStorage.setItem('furnix_cart', JSON.stringify(cart));
  localStorage.setItem('furnix_orders', JSON.stringify(orders));
  localStorage.setItem('furnix_favorites', JSON.stringify(favorites));
}

// ======================================
// NOTIFICATION
// ======================================

function toast(message) {
  const el = $('#toast');

  el.textContent = message;
  el.classList.add('show');

  clearTimeout(toast.timer);

  toast.timer = setTimeout(() => {
    el.classList.remove('show');
  }, 2600);
}

// ======================================
// LANGUAGE
// ======================================

function applyLanguage() {
  document.documentElement.lang = language;

  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t(key)) el.textContent = t(key);
  });

  $$('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  $('#languageSelect').value = language;

  renderProducts();
  renderCart();
}

// ======================================
// PRODUCT CATALOG
// ======================================

function renderProducts() {
  let list = products.filter(product =>
    (currentFilter === 'all' || product.category === currentFilter) &&
    productName(product).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sort = $('#sortSelect').value;

  if (sort === 'low') {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === 'high') {
    list.sort((a, b) => b.price - a.price);
  }

  $('#productGrid').innerHTML = list.map((product, index) => `
    <article class="product-card" style="animation-delay:${index * 65}ms">

      <div class="product-image-wrap">

        <img
          src="${product.image}"
          alt="${productName(product)}"
          loading="lazy"
        >

        <span class="product-tag">
          ${product.tag || 'FURNIX'}
        </span>

        <button
          class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}"
          data-fav="${product.id}"
          aria-label="Favorite"
        >
          ${favorites.includes(product.id) ? '♥' : '♡'}
        </button>

        <button class="quick-add" data-add="${product.id}">
          ${t('addToCart')} +
        </button>

      </div>

      <div class="product-info">

        <div class="product-meta">
          <span>${product.category}</span>
          <span>FURNIX EDITION</span>
        </div>

        <h3>${productName(product)}</h3>

        <div class="product-price">
          ${money(product.price)}
        </div>

      </div>
    </article>
  `).join('');

  $('#emptyState').classList.toggle('hidden', list.length > 0);
}

// ======================================
// CART
// ======================================

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  $('#cartCount').textContent = count;

  const items = cart
    .map(item => ({
      ...item,
      product: products.find(p => p.id === item.id)
    }))
    .filter(item => item.product);

  $('#cartItems').innerHTML = items.length
    ? items.map(item => `
      <div class="cart-item">

        <img src="${item.product.image}" alt="">

        <div>
          <h4>${productName(item.product)}</h4>

          <p>${money(item.product.price)}</p>

          <div class="qty-controls">
            <button data-qty="${item.id}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button data-qty="${item.id}" data-delta="1">+</button>
          </div>
        </div>

        <button class="remove-item" data-remove="${item.id}">
          ×
        </button>

      </div>
    `).join('')
    : `<p class="empty-state">${t('emptyCart')}</p>`;

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  $('#cartTotal').textContent = money(total);
  $('#checkoutOpen').disabled = !items.length;

  $('#checkoutSummary').textContent =
    items.map(item =>
      `${productName(item.product)} × ${item.qty}`
    ).join(' · ') + ' | ' + money(total);
}

function addToCart(id) {
  const item = cart.find(item => item.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  save();
  renderCart();

  toast(t('added'));
}

function openDrawer() {
  $('#overlay').classList.add('active');
  $('#cartDrawer').classList.add('open');
}

function closeDrawer() {
  $('#overlay').classList.remove('active');
  $('#cartDrawer').classList.remove('open');
}

// ======================================
// MODALS
// ======================================

function openModal(id) {
  $('#' + id).classList.add('open');
}

function closeModal(id) {
  $('#' + id).classList.remove('open');
}

// ======================================
// LANGUAGE SELECTOR
// ======================================

$('#languageSelect').addEventListener('change', e => {
  language = e.target.value;

  localStorage.setItem('furnix_lang', language);

  applyLanguage();
});

// ======================================
// DARK MODE
// ======================================

$('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  localStorage.setItem(
    'furnix_theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );

  $('#themeToggle').textContent =
    document.body.classList.contains('dark') ? '☀' : '☾';
});

if (localStorage.getItem('furnix_theme') === 'dark') {
  document.body.classList.add('dark');
  $('#themeToggle').textContent = '☀';
}

// ======================================
// SEARCH
// ======================================

$('#searchInput').addEventListener('input', e => {
  searchTerm = e.target.value;
  renderProducts();
});

// ======================================
// FILTERS
// ======================================

$('#filterPills').addEventListener('click', e => {
  const button = e.target.closest('[data-filter]');

  if (!button) return;

  currentFilter = button.dataset.filter;

  $$('.filter-pill').forEach(item => {
    item.classList.toggle('active', item === button);
  });

  renderProducts();
});

$('#sortSelect').addEventListener('change', renderProducts);

// ======================================
// PRODUCT ACTIONS
// ======================================

$('#productGrid').addEventListener('click', e => {
  const add = e.target.closest('[data-add]');

  if (add) {
    addToCart(Number(add.dataset.add));
  }

  const fav = e.target.closest('[data-fav]');

  if (fav) {
    const id = Number(fav.dataset.fav);

    favorites = favorites.includes(id)
      ? favorites.filter(item => item !== id)
      : [...favorites, id];

    save();
    renderProducts();
  }
});

// ======================================
// CATEGORY BUTTONS
// ======================================

$$('.category-card').forEach(button => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.category;

    $$('.filter-pill').forEach(item => {
      item.classList.toggle(
        'active',
        item.dataset.filter === currentFilter
      );
    });

    renderProducts();

    $('#catalog').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ======================================
// CAROUSEL
// ======================================

$('#prevProducts').addEventListener('click', () => {
  $('#productGrid').scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

$('#nextProducts').addEventListener('click', () => {
  $('#productGrid').scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});

// ======================================
// CART BUTTONS
// ======================================

$('#cartOpen').addEventListener('click', openDrawer);
$('#cartClose').addEventListener('click', closeDrawer);
$('#overlay').addEventListener('click', closeDrawer);

$('#cartItems').addEventListener('click', e => {
  const quantityButton = e.target.closest('[data-qty]');
  const removeButton = e.target.closest('[data-remove]');

  if (quantityButton) {
    const id = Number(quantityButton.dataset.qty);
    const item = cart.find(item => item.id === id);

    item.qty += Number(quantityButton.dataset.delta);

    if (item.qty <= 0) {
      cart = cart.filter(item => item.id !== id);
    }
  }

  if (removeButton) {
    cart = cart.filter(
      item => item.id !== Number(removeButton.dataset.remove)
    );
  }

  save();
  renderCart();
});

// ======================================
// CHECKOUT
// ======================================

$('#checkoutOpen').addEventListener('click', () => {
  closeDrawer();
  openModal('checkoutModal');
});

$$('[data-close]').forEach(button => {
  button.addEventListener('click', () => {
    closeModal(button.dataset.close);
  });
});

$$('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal(modal.id);
    }
  });
});

function validPhone(phone) {
  return phone.replace(/\D/g, '').length >= 9;
}

$('#checkoutForm').addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  if (!validPhone(data.phone)) {
    toast(t('phoneInvalid'));
    return;
  }

  const items = cart.map(item => ({
    name: productName(
      products.find(p => p.id === item.id) || { name: 'Product' }
    ),
    qty: item.qty
  }));

  const total = cart.reduce(
    (sum, item) =>
      sum + (products.find(p => p.id === item.id)?.price || 0) * item.qty,
    0
  );

  orders.unshift({
    id: Date.now(),
    ...data,
    items,
    total,
    status: 'new',
    date: new Date().toLocaleString()
  });

  cart = [];

  save();
  renderCart();

  e.target.reset();

  closeModal('checkoutModal');

  toast(t('orderSent'));
});

// ======================================
// NEWSLETTER
// ======================================

$('#newsletterForm').addEventListener('submit', e => {
  e.preventDefault();

  const phone = $('#newsletterPhone').value;

  if (!validPhone(phone)) {
    toast(t('phoneInvalid'));
    return;
  }

  toast(t('orderSent'));

  e.target.reset();
});

// ======================================
// ADMIN PANEL
// ======================================

$('#adminOpen').addEventListener('click', () => {
  openModal('adminModal');
});

$('#adminLogin').addEventListener('click', () => {
  if ($('#adminPassword').value !== 'furnix2026') {
    toast(t('adminWrong'));
    return;
  }

  $('#adminLoginView').classList.add('hidden');
  $('#adminPanelView').classList.remove('hidden');

  renderAdmin();
});

function renderAdmin() {
  $('#adminStats').innerHTML = `
    <div class="stat">
      <b>${products.length}</b>
      <span>Products</span>
    </div>

    <div class="stat">
      <b>${orders.length}</b>
      <span>Orders</span>
    </div>

    <div class="stat">
      <b>${money(orders.reduce((sum, order) => sum + order.total, 0))}</b>
      <span>Order value</span>
    </div>
  `;

  $('#adminOrdersList').innerHTML = orders.length
    ? orders.slice(0, 12).map(order => `
      <div class="admin-order">

        <strong>
          #${order.id} · ${order.name} · ${money(order.total)}
        </strong>

        ${order.phone} · ${order.address}

        <br>

        ${(order.items || []).map(item =>
          item.name + ' × ' + item.qty
        ).join(', ')}

        <br>

        <select data-status="${order.id}">
          <option value="new" ${order.status === 'new' ? 'selected' : ''}>
            ${t('statusNew')}
          </option>

          <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>
            ${t('statusConfirmed')}
          </option>

          <option value="delivery" ${order.status === 'delivery' ? 'selected' : ''}>
            ${t('statusDelivery')}
          </option>

          <option value="done" ${order.status === 'done' ? 'selected' : ''}>
            ${t('statusDone')}
          </option>
        </select>

      </div>
    `).join('')
    : '<p class="muted">No orders yet.</p>';
}

// UPDATE ORDER STATUS

$('#adminOrdersList').addEventListener('change', e => {
  const id = Number(e.target.dataset.status);

  if (!id) return;

  const order = orders.find(order => order.id === id);

  if (order) {
    order.status = e.target.value;

    save();

    toast('Order status updated');
  }
});

// ADD PRODUCT

$('#addProductForm').addEventListener('submit', e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  products.unshift({
    id: Date.now(),

    name: {
      ru: data.name,
      uz: data.name,
      en: data.name
    },

    category: data.category,
    price: Number(data.price),

    image: data.image ||
      'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=850&q=85',

    tag: 'New'
  });

  save();

  renderProducts();
  renderAdmin();

  e.target.reset();

  toast(t('productAdded'));
});

// ADMIN LOGOUT

$('#adminLogout').addEventListener('click', () => {
  $('#adminPanelView').classList.add('hidden');
  $('#adminLoginView').classList.remove('hidden');
  $('#adminPassword').value = '';
});

// ======================================
// MOBILE MENU
// ======================================

$('#menuToggle').addEventListener('click', () => {
  $('.desktop-nav').classList.toggle('mobile-open');
});

// Close mobile menu after selecting a link
$$('.desktop-nav a').forEach(link => {
  link.addEventListener('click', () => {
    $('.desktop-nav').classList.remove('mobile-open');
  });
});

// ======================================
// SCROLL ANIMATIONS
// ======================================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

$$('.reveal').forEach(element => {
  observer.observe(element);
});

// ======================================
// INITIALIZATION
// ======================================

applyLanguage();
renderCart();