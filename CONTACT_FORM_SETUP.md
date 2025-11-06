# إعداد نموذج الاتصال

تم إعداد نموذج الاتصال لإرسال الإيميلات إلى بريدك الإلكتروني. يوجد حلان:

## الحل الأول: استخدام PHP (موصى به)

### المتطلبات:
- خادم يدعم PHP
- تفعيل دالة `mail()` في PHP

### الخطوات:
1. تأكد من أن ملف `contact.php` موجود في نفس مجلد `index.html`
2. تأكد من أن البريد الإلكتروني في ملف `contact.php` هو بريدك الصحيح:
   ```php
   $to = 'kertiou.brahim@gmail.com'; // غير هذا إلى بريدك
   ```
3. رفع الملفات إلى خادم يدعم PHP

### ملاحظات:
- إذا كان الخادم لا يدعم `mail()`، يمكنك استخدام مكتبات مثل PHPMailer أو SendGrid
- تأكد من إعدادات SMTP في الخادم

---

## الحل الثاني: استخدام EmailJS (بدون خادم)

إذا لم يكن لديك خادم يدعم PHP، يمكنك استخدام EmailJS:

### الخطوات:
1. سجل حساب مجاني في [EmailJS](https://www.emailjs.com/)
2. أضف خدمة البريد الإلكتروني (Gmail, Outlook, etc.)
3. احصل على Service ID و Template ID و Public Key
4. استبدل كود JavaScript في `js/main.js` بالكود التالي:

```javascript
// Contact Form Handler with EmailJS
$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    var $form = $(this);
    var $submitBtn = $('#submit-btn');
    var $messageDiv = $('#form-message');
    var originalText = $submitBtn.text();
    
    // Disable submit button
    $submitBtn.prop('disabled', true).text('جاري الإرسال...');
    $messageDiv.hide().removeClass('success error');
    
    // EmailJS configuration
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            $messageDiv
                .removeClass('error')
                .addClass('success')
                .css({
                    'background-color': '#d4edda',
                    'color': '#155724',
                    'border': '1px solid #c3e6cb'
                })
                .html('<i class="fa fa-check-circle"></i> شكراً لك! تم إرسال رسالتك بنجاح.')
                .fadeIn();
            
            $form[0].reset();
        }, function(error) {
            $messageDiv
                .removeClass('success')
                .addClass('error')
                .css({
                    'background-color': '#f8d7da',
                    'color': '#721c24',
                    'border': '1px solid #f5c6cb'
                })
                .html('<i class="fa fa-exclamation-circle"></i> حدث خطأ أثناء إرسال الرسالة.')
                .fadeIn();
        })
        .finally(function() {
            $submitBtn.prop('disabled', false).text(originalText);
        });
    
    return false;
});
```

5. أضف سكريبت EmailJS في `index.html` قبل `</body>`:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
    emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

---

## الميزات المضافة:
- ✅ التحقق من صحة البيانات (validation)
- ✅ رسائل نجاح/خطأ واضحة
- ✅ تعطيل زر الإرسال أثناء المعالجة
- ✅ إعادة تعيين النموذج بعد الإرسال الناجح
- ✅ تصميم متجاوب

---

## استكشاف الأخطاء:

### إذا لم يرسل الإيميل:
1. تحقق من إعدادات PHP mail() في الخادم
2. تحقق من أن البريد الإلكتروني صحيح في `contact.php`
3. تحقق من سجلات الأخطاء في الخادم
4. جرب استخدام PHPMailer بدلاً من mail()

### إذا ظهرت رسالة خطأ:
- تحقق من أن جميع الحقول مملوءة
- تحقق من صحة البريد الإلكتروني
- تحقق من اتصال الإنترنت

