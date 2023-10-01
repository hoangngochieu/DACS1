    // Đặt thời gian đích mà đồng hồ đếm ngược sẽ đếm (1 tiếng 20 phút = 1 giờ 20 phút = 4800 giây)
    var countDownTime = 23400;

    // Cập nhật đồng hồ đếm ngược mỗi giây
    var countdown = setInterval(function() {

      // Giảm thời gian còn lại mỗi giây
      countDownTime--;

      // Tính toán số giờ, phút và giây còn lại
      var hours = Math.floor(countDownTime / 3600);
      var minutes = Math.floor((countDownTime % 3600) / 60);
      var seconds = countDownTime % 60;

      // Hiển thị thời gian còn lại trong phần tử có id="countdown"
      document.getElementById("countdown").innerHTML = hours + "h : " + minutes + "m : " + seconds + "s  !!";

      // Kiểm tra nếu đồng hồ đếm ngược đã hết thời gian
      if (countDownTime <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Đã hết thời gian";
      }
    }, 1000); // Mỗi giây cập nhật một lần
