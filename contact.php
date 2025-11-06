<?php
// Contact Form Handler
// This file handles the contact form submission

// Set content type for JSON response
header('Content-Type: application/json');

// Check if request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate input
$errors = [];

if (empty($name)) {
    $errors[] = 'الاسم مطلوب';
}

if (empty($email)) {
    $errors[] = 'البريد الإلكتروني مطلوب';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'البريد الإلكتروني غير صحيح';
}

if (empty($message)) {
    $errors[] = 'الرسالة مطلوبة';
}

// If there are errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Email configuration
$to = 'kertiou.brahim@gmail.com'; // Your email address
$subject = 'رسالة جديدة من موقعك: ' . $name;
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email body
$email_body = "
<html dir='rtl' lang='ar'>
<head>
    <meta charset='UTF-8'>
</head>
<body>
    <h2>رسالة جديدة من نموذج الاتصال</h2>
    <p><strong>الاسم:</strong> " . htmlspecialchars($name) . "</p>
    <p><strong>البريد الإلكتروني:</strong> " . htmlspecialchars($email) . "</p>
    <p><strong>الرسالة:</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
    <hr>
    <p style='color: #999; font-size: 12px;'>تم إرسال هذه الرسالة من نموذج الاتصال في موقعك</p>
</body>
</html>
";

// Send email
$mail_sent = mail($to, $subject, $email_body, $headers);

if ($mail_sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'شكراً لك! تم إرسال رسالتك بنجاح. سأتواصل معك قريباً.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.'
    ]);
}
?>

