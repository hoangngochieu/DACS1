<?php

$phone = $_POST['phone'];
$password = $_POST['password'];

$conn = new mysqli('localhost', 'root', '', 'dack');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("SELECT * FROM login1 WHERE phone = ? AND password = ?");
    $stmt->bind_param("ss", $phone, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    if ($row) {
        // Thông tin đăng nhập chính xác
        echo "<script>alert('Đăng nhập thành công!'); sessionStorage.setItem('loginSuccessful', 'true'); window.location.href = 'cart.html';</script>";
    } else {
        // Thông tin đăng nhập không chính xác
        echo "<script>alert('Tài khoản hoặc mật khẩu sai!'); sessionStorage.setItem('loginSuccessful', 'false'); window.location.href = 'login.html';</script>";
    }
    
    

    $stmt->close();
    $conn->close();
}
?>