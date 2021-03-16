// log(files.isFile("/sdcard/Pictures/")); //返回false
// log(files.isFile("/sdcard/Pictures/爱不释手.mp3")); //返回true

// log(files.isDir("/sdcard/Pictures/")); //返回true
// log(files.isDir("/sdcard/Pictures/爱不释手.mp3")); //返回false

// log(files.isEmptyDir("/sdcard/Pictures/"))

// log(files.create("/sdcard/Pictures/新文件夹/"))
// log(files.create("/sdcard/Pictures/新文件夹/1.txt"))

// log(files.createWithDirs("/sdcard/Pictures/新文件夹/新文件夹/新文件夹/1.txt"))

// log(files.exists("/sdcard/Pictures/新文件夹/"))

// log(files.read("/sdcard/Pictures/新文件夹/1.txt"));

// var text = "22222222";
// // 写入文件
// files.write("/sdcard/Pictures/新文件夹/1.txt", text);
// // 用其他应用查看文件
// app.viewFile("/sdcard/Pictures/新文件夹/1.txt");

// var text = "追加的文件内容";
// files.append("/sdcard/Pictures/新文件夹/1.txt", text);
// files.append("/sdcard/Pictures/新文件夹/1.txt", text);
// // 用其他应用查看文件
// app.viewFile("/sdcard/Pictures/新文件夹/1.txt");

// files.rename("/sdcard/Pictures/新文件夹/1.txt", "2.txt")

// // 删除文件或空文件夹，返回是否删除成功
// files.remove("/sdcard/Pictures/新文件夹/2.txt")

// // 删除文件夹，如果文件夹不为空，则删除该文件夹的所有内容再删除该文件夹，返回是否全部删除成功
// files.removeDir(path)

log(files.getSdcardPath())




