# Kelime Ezberleme Sistemi

## Proje Hakkında

Kelime Ezberleme Sistemi, kullanıcıların İngilizce kelimeleri etkili bir şekilde ezberlemelerine yardımcı olmak amacıyla geliştirilmiş bir web uygulamasıdır. Uygulama, kullanıcıların kelimeleri eklemelerini, testler yapmalarını ve öğrenme süreçlerini takip etmelerini sağlar.

## Teknolojiler

- **Frontend:** ReactJS
- **Backend:** Node.js, Express.js
- **Database:** MySQL

## Kurulum

### Önkoşullar

- Node.js
- MySQL

### Adımlar

1. **Repositroyu Klonlayın**

2. **Bağımlılıkları Yükleyin**

3. **Veritabanını Kurun**

- MySQL üzerinde `kelime_ezberleme` adında bir veritabanı oluşturun.
- `config/db.config.js` dosyasını kendi veritabanı bilgilerinizle güncelleyin.

4. **Uygulamayı Çalıştırın**

- Backend için:
  ```
  npm start
  ```
- Frontend için:
  ```
  cd frontend
  npm install
  npm start
  ```

## Özellikler

- Kullanıcı Kayıt/Giriş
- Kelime Ekleme Modülü
- Sınav Modülü
- Kullanıcı Ayarları
- Raporlama

## Scrum

Projede Scrum metodolojisi kullanılmaktadır:

- **Product Backlog**
- **Sprint Planning**
- **Daily Stand-ups**
- **Sprint Review & Retrospective**

## Katkıda Bulunma

Projeye katkıda bulunmak isteyenler, lütfen `CONTRIBUTING.md` dosyasına göz atın. Her türlü katkıyı takdir ediyor ve hoş karşılıyoruz.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını kontrol ediniz.
