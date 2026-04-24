# ربط بورتفوليو Naz Graphic مع Sanity CMS

هذا المشروع صار يقرأ مشاريع البورتفوليو من Sanity CMS، مع نسخة احتياطية محلية تظهر تلقائيًا إذا لم تضبط Sanity أو فشل الاتصال.

## 1. إنشاء مشروع Sanity

1. ادخل إلى [sanity.io/manage](https://sanity.io/manage).
2. أنشئ مشروع جديد.
3. اختر Dataset باسم `production` أو أي اسم تريده.
4. انسخ `projectId`.

## 2. تشغيل Sanity Studio

ادخل إلى مجلد لوحة التحكم:

```bash
cd sanity-studio
npm install
npm run dev
```

بعدها افتح الرابط الذي يظهر في الطرفية، غالبًا:

```text
http://localhost:3333
```

## 3. أين أضع projectId و dataset؟

عدّل القيم في ملفين:

1. `sanity.js`

```js
window.NAZ_SANITY_CONFIG = {
  projectId: "ضع_projectId_هنا",
  dataset: "production",
  apiVersion: "2026-04-24",
  useCdn: true,
};
```

2. `sanity-studio/sanity.config.ts` و `sanity-studio/sanity.cli.ts`

```ts
projectId: 'ضع_projectId_هنا',
dataset: 'production',
```

## 4. كيف أضيف مشروع جديد؟

من Sanity Studio:

1. افتح نوع المحتوى `Project`.
2. اضغط Create.
3. املأ `اسم المشروع`.
4. اضغط Generate في حقل `الرابط المختصر`.
5. املأ نوع المشروع، العميل، السنة، والوصف القصير.
6. فعّل `إظهار في الصفحة الرئيسية` إذا تريده يظهر في سكشن الأعمال.
7. فعّل `مشروع مميز` إذا تريده يظهر أولًا.

رابط صفحة المشروع سيكون:

```text
project.html?project=slug
```

## 5. رفع صورة الغلاف

داخل المشروع في Sanity:

1. افتح مجموعة `صورة الغلاف`.
2. ارفع الصورة في حقل `صورة الغلاف`.
3. هذه الصورة تظهر في الصفحة الرئيسية وفي أعلى صفحة المشروع.

## 6. رفع صور المعرض

داخل مجموعة `معرض الصور`:

1. أضف عنصر جديد.
2. ارفع الصورة.
3. اكتب وصف `Alt`.
4. اختر حجم الصورة.
5. ضع رقم الترتيب.

## 7. اختيار galleryLayout

داخل مجموعة `إعدادات العرض` اختر:

- `grid`: شبكة منظمة.
- `masonry`: شكل شبيه Pinterest.
- `spotlight`: أول صورة كبيرة والباقي أصغر.
- `full`: كل صورة بعرض كامل.

## 8. اختيار حجم كل صورة

لكل صورة في المعرض اختر:

- `small`: صغيرة.
- `medium`: عادية.
- `large`: أكبر.
- `wide`: عريضة.
- `full`: عرض كامل.

على الجوال يتم تجاهل الحجم تلقائيًا وتظهر كل الصور بعرض 100% لمنع التمرير الأفقي.

## 9. إظهار المشروع في الرئيسية

فعّل الحقل:

```text
إظهار في الصفحة الرئيسية
```

إذا أردته يظهر قبل غيره، فعّل:

```text
مشروع مميز
```

## 10. نشر الموقع على Cloudflare Pages

الموقع الأساسي ثابت HTML/CSS/JS، لذلك إعداداته بسيطة:

- Framework preset: `None`
- Build command: اتركه فارغًا
- Build output directory: `/`

إذا أردت نشر Sanity Studio أيضًا، الأفضل يكون مشروع Cloudflare Pages منفصل من مجلد `sanity-studio`:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`

## 11. ملاحظات مهمة

- إذا لم تضع `projectId` في `sanity.js` سيعرض الموقع المشاريع الاحتياطية الموجودة داخل الملف.
- إذا فشل الاتصال بـ Sanity ستظهر رسالة خطأ خفيفة، ثم يتم عرض النسخة الاحتياطية بدل صفحة فارغة.
- لا تحتاج تعديل الكود لإضافة مشروع جديد بعد ضبط Sanity، فقط أضفه من لوحة التحكم.

## ملفات مهمة

- `sanity.js`: إعداد الاتصال ونسخة fallback.
- `script.js`: جلب مشاريع الصفحة الرئيسية.
- `project.js`: جلب تفاصيل المشروع والمعرض.
- `project.css`: أنظمة عرض المعرض والريسبونسيف.
- `sanity-studio/schemas/project.ts`: Schema المشاريع في Sanity.
- `sanity-studio/seed/projects-example.json`: أمثلة للمشاريع الحالية.
