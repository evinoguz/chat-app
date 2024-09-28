# Chat App

Sohbet uygulaması ile anlık mesajlaşma sağlanmıştır.<br />
Google hesabı seçeneği ile sisteme giriş yapılır. <br />
Oda ismi girilir. <br />
Her odanın mesajları, sadece o odaya giren kullanıcılar görebilir. <br />

React projesini daha hızlı bir şekilde derlemek ve sunmak için Vite kullanıldı.<br />
Scss ile responsive tasarımlar oluşturuldu.<br />
Firebase ile Kullanıcı Doğrulama İşlemleri yapıldı.<br />

## Gif

![](/public/chat-app.gif)

## Projenin Çalıştırılması

Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız.

```
git clone https://github.com/evinoguz/chat-app.git
```

Proje dizininde .env adında dosya oluşturunuz. Bu dosyada ortam değişkenlerini tanımlayınız.<br />
Bu ayarları yapmak için [Firebase](https://console.firebase.google.com/u/0/) dokümanından faydalanabilirsiniz. <br />
Buradan yeni proje oluşturunuz.<br />
goto console > proje adı chat-app > continue > enabled pasif yap > 
Web> nickname(ismi önemli değil) chat-app > Register App <br /> 
Daha sonra "Firebase configuration" değişkenlerinizin değerini çift tırnak olmadan belirtiniz.

```
VITE_API_KEY = yourApiKey
VITE_AUTH_DOMAIN = yourAuthDomain
VITE_PROJECT_ID = yourProjectId
VITE_STORAGE_BUCKET = yourStorageBucket
VITE_MESSAGING_SENDER_ID = yourMessagingSenderId
VITE_APP_ID = yourAppId
```
Veritabanınızı oluşturunuz. <br />
firebase>proje>build>firestore database >create database> eur3 (Europe) seç > Start in production mode

Google ile kullanıcı doğrulama işlemini aktifleştiriniz.<br />
firebase sol menüde > Build> Authentication > Get Started> Email/Password> Enabled butonunu aktif et > Save
Google > Enabled butonunu aktif et > Email seç > Save

Terminalde;

```
npm install

```

komutu ile projede kullanılan paketlerin yüklenmesini sağlar, ardından

```
npm run dev
```

komutu ile proje ayağa kaldırılır.
