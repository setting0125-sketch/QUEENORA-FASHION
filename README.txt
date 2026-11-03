QUEENORA FASHION — FIREBASE ORDER + ADMIN WEBSITE

FILES
- index.html: customer storefront, cart and on-site checkout.
- admin.html: private order dashboard. Sign in using Google account setting0125@gmail.com.
- firebase-config.js: Firebase web app configuration and authorised admin email.
- firebase-store.js: sends customer orders to Cloud Firestore.
- firestore.rules: database security rules. Copy these into Firebase Console.

IMPORTANT: NOT LIVE UNTIL SETUP IS FINISHED
The website code is connected to your Firebase project, but you must complete the console setup below and deploy all files together. Until then, customer orders may fail. Do not advertise or accept real orders until you have tested an order from a different phone/browser and verified it appears in Admin Panel.

FIREBASE SETUP — DO THESE STEPS
1. Open https://console.firebase.google.com/ and select QUEENORA-FASHION.
2. Go to Build > Authentication > Get started > Sign-in method > Google. Enable Google. Set the support email if asked and Save.
3. In Authentication > Settings > Authorized domains, add your website host domain (host only, no https:// and no page path). For GitHub Pages, this is usually setting0125-sketch.github.io. If you use another host/domain, add that exact host instead.
4. Open Firestore Database > Rules. Replace the rules with the complete contents of firestore.rules in this ZIP and click Publish.
5. Upload ALL four website files (index.html, admin.html, firebase-config.js, firebase-store.js) to the same hosting folder/root. Keep the filenames unchanged. You may also keep README and firestore.rules separately for reference.
6. Open your live website, place a test order using a different phone/browser, then open https://YOUR-WEBSITE/admin.html and sign in with setting0125@gmail.com. Confirm the test order appears and change its status.
7. Delete the test order from the admin panel or Firestore after testing, if desired.

SECURITY
- Customers can create new Pending orders but cannot read, list, edit or delete orders.
- Only the verified Google account setting0125@gmail.com can view orders and update order status.
- Never share the admin Google account, password or OTP.
- Firebase web config is intended to be visible in browser code. Firestore Security Rules protect the data.
- The public checkout stores customer name, phone, delivery address and PIN code. Publish a privacy policy and collect only what is needed.
- Basic Firestore rules are not full anti-spam protection. Before scaling, add Firebase App Check and abuse monitoring.

LIMITATIONS / CHECK BEFORE SALES
- Product images, names, and prices are sample placeholders. Replace/verify all listings against actual inventory, prices, sizes and delivery terms.
- Customer LOGIN UI remains a non-functional design preview; customer accounts/OTP are not enabled.
- No online payment gateway is connected. Orders are cash/manual-payment pending until you separately integrate a supported payment provider.
- Firebase Spark plan has usage limits; it is not unlimited.
- No business location is displayed anywhere on the site.

BUSINESS CONTACT: 6377148964
