// sleep(1000)

// currentPackage()    // 最近一次监测到的正在运行的应用的包名

// currentActivity()   // 最近一次监测到的正在运行的Activity的名称

// log(currentActivity())
// log(currentPackage())

// setClip("一个样子")
// log(getClip())

// toastLog(11111)
// log(currentActivity())
// waitForActivity("com.tencent.mm.ui.LauncherUI")
// toastLog(currentPackage())
// waitForPackage("com.android.browser")
// toastLog(2222222)

// exit()

// toastLog(random(1,3))   // 随机整数1、2、3
// toastLog(random())  // 0~1之间的浮点数

// toastLog(requiresApi(22))

// toastLog(app.autojs.versionCode)
// toastLog(app.autojs.versionName)
// toastLog(requiresAutojsVersion("4.1.0 Alpha5"))

runtime.requestPermissions(["access_fine_location"])    //请求GPS权限


