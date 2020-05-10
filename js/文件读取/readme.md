- 文件操作 知识点 
  加Sync 为同步 Sync：同步
   不加为异步
    1. 文件读取
        - 同步读取
            （1）const file = fs.readFileSync('./text.txt', 'utf-8' )
        - 异步读取
            (1)fs.readFile('./text.txt', /*{ conding: 'utf-8' }*/ 'utf-8'   (err, data) => {});
            (2)fs.read(fd, buffer, offset, length, position, callback)方法
                步骤：
                1. 打开文件 fs.open
                    fs.open('input.txt', 'r+', function(err, fd) {});
                2. 读取文件内容 fs.read
                    fs.read(fd, buf, 0/*缓冲区写入的写入偏移量*/, buf.length, 0/*文件读取的起始位置*/, function(err, bytes){});
                    buf :var buf = new Buffer.alloc(1024);存放文件内容的变量
                3. 关闭文件fs.close
                    通过文件描述符fd 关闭文件 fs.close(fd, function(err){})
    2. 文件打开 fs.open
        fs.open(path, flags（打开进行什么操作eg:r/r+/rs）, callback)
    3. 获取文件信息fs.stat
        fs.stat('path', function (err, stats) {
            stats中有判断许多方法
        console.log(stats.isFile());         //true
        })
    4. 写入文件 fs.writeFile
        data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
        options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
        fs.writeFile(file, data, options, callback)
    5. 截取文件 fs.ftruncate
        fs.ftruncate(fd, len, callback)；
        len:截取长度；
        fs.ftruncate(fd, 10, function(err){});
        注： 截取len字节内的文件内容，超出部分将被去除（文件中的内容）。
    6. 删除文件 fs.unlink
        fs.unlink(path, callback)
        fs.unlink('input.txt', function(err) {});
    7. 创建目录 (异步)fs.mkdir
        fs.mkdir(path,[ options], callback)
        options 参数可以是：
            recursive - 是否以递归的方式创建目录（true文件被创建 不会报错），默认为 false。
            mode - 设置目录权限，默认为 0777。
    8. 读取目录fs.readdir
        fs.readdir(path, callback)
        fs.readdir("/tmp/",function(err, files){});
    9. 删除目录 fs.rmdir
        fs.rmdir(path, callback)
        fs.rmdir("/tmp/test",function(err){});
        



