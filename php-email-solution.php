<?php
/**
 * UNLOCK Email Handler - PHP Version
 * Simple email solution for hosts that don't support Node.js
 */

// Enable CORS for frontend requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON data from request
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
if (!isset($data['to']) || !isset($data['subject']) || !isset($data['htmlContent'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Email configuration
$to = $data['to'];
$subject = $data['subject'];
$htmlContent = $data['htmlContent'];

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: UNLOCK Admissions <no-reply@unlockadmissions.uz>',
    'Reply-To: info@unlockadmissions.uz',
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$success = mail($to, $subject, $htmlContent, implode("\r\n", $headers));

if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email'
    ]);
}
?>