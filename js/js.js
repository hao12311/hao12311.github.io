function $(elementId) {
  return document.getElementById(elementId);
}
//用户名验证
function checkUser() {
  var user = $("user").value;
  var userId = $("user_prompt");
  userId.innerHTML = "";
  if (user.length < 4 || user.length > 16) {
    userId.innerHTML = "<img src='../images/error.png'>请输入4-16位用户名";
    return false;
  }
  for (var i = 0; i < user.length; i++) {
    if (!isNaN(user.charAt(i))) {
      userId.innerHTML = "<img src='../images/error.png'>用户名不能包含数字";
      return false;
    }
  }
  userId.innerHTML = "<img src='../images/ok.png'>";
  return true;
}
//密码验证
function checkPwd() {
  var pwd = $("pwd").value;
  var pwdId = $("pwd_prompt");
  pwdId.innerHTML = "";
  if (pwd.length < 4 || pwd.length > 10) {
    pwdId.innerHTML = "<img src='../images/error.png'>密码长度在4-10之间";
    return false;
  }

  return true;
}
//确认密码
function checkRepwd() {
  var repwd = $("repwd").value;
  var pwd = $("pwd").value;
  var repwdId = $("repwd_prompt");
  repwdId.innerHTML = "";
  pwdBoolean = checkPwd();
  console.log(pwdBoolean);
  if (!pwdBoolean) {
    repwdId.innerHTML = "<img src='../images/error.png'>请先输入密码";
    return false;
  }
  if (pwd != repwd) {
    repwdId.innerHTML = "<img src='../images/error.png'>两次输入的密码不一致";
    return false;
  }
  repwdId.innerHTML = "<img src='../images/ok.png'>";
  return true;
}
//验证邮箱
function checkEmail() {
  var email = $("email").value;
  var email_prompt = $("email_prompt");
  email_prompt.innerHTML = "";
  var index = email.indexOf("@", 1);
  if (index == -1) {
    email_prompt.innerHTML =
      "<img src='../images/error.png'>输入的邮箱格式中应包含@符号";
    return false;
  }
  if (email.indexOf(".", index) == -1) {
    email_prompt.innerHTML =
      "<img src='../images/error.png'>输入的邮箱格式中应包含.符号且在@符号后面";
    return false;
  }
  email_prompt.innerHTML = "<img src='../images/ok.png'>";
  return true;
}
//验证手机号
function checkMobile() {
  var mobile = $("mobile").value;
  var mobileId = $("mobile_prompt");
  mobileId.innerHTML = "";
  if (mobile.charAt(0) != 1) {
    mobileId.innerHTML = "<img src='../images/error.png'>手机号开始位应该为1";
    return false;
  }
  if (mobile.length != 11) {
    mobileId.innerHTML = "<img src='../images/error.png'>手机号长度有误";
    return false;
  }
  for (var i = 0; i < mobile.length; i++) {
    if (isNaN(mobile.charAt(i))) {
      mobileId.innerHTML = "<img src='../images/error.png'>手机号不能包含字符";
      return false;
    }
  }
  mobileId.innerHTML = "<img src='../images/ok.png'>";
  return ture;
}
function checkAll() {
  if (
    checkUser() &&
    checkPwd() &&
    checkRepwd() &&
    checkEmail() &&
    checkMobile()
  ) {
    return true;
  } else {
    return false;
  }
}
function fnLogin() {
  window.alert("登录成功。");
}
