
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

var toastTrigger1 = document.getElementById('liveToastBtn1')
var toastLiveExample1 = document.getElementById('liveToast1')
if (toastTrigger1) {
  toastTrigger1.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

var toastTrigger2 = document.getElementById('liveToastBtn2')
var toastLiveExample2 = document.getElementById('liveToast2')
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}