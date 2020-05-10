const fs = require('fs')


//异步读取  文件读取需要时间  
// fs.readFile('./text.txt', /*{ conding: 'utf-8' }*/ 'utf-8',
//     (err, data) => {
//         if (err) {
//             console.log('err异步', err);
//             return;
//         }
//         console.log('data异步', data);
//     })
// console.log('异步后先执行这步');
// //同步读取
// const file = fs.readFileSync('./text.txt', /*{ conding: 'utf-8' }*/ 'utf-8', )
// console.log('同步读取的文件:', file);



// console.log("准备打开文件！");
// fs.open('./text.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！", fd);
// });

// console.log("  异步准备打开文件！");
// fs.stat('./text.txt', function(err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("读取文件信息成功！");

//     // 检测文件类型
//     console.log("是否为文件(isFile) ? " + stats.isFile());
//     console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
// });

// console.log("上一步代码  测试异步")

//以下为异步模式下写入文件的语法格式：
// file - 文件名或文件描述符。
// data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
// options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
// callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
/*console.log("异步准备写入文件");
fs.writeFile('input.txt', '我是通utf-8是否多福多寿 过fs.writeFile 写入文件的内容', { encoding: 'utf-8' }, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('input.txt', function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});*/

//以下为异步模式下读取（流）文件的语法格式

// fd - 通过 fs.open() 方法返回的文件描述符。
// buffer - 数据写入的缓冲区。
// offset - 缓冲区写入的写入偏移量。
// length - 要从文件中读取的字节数。
// position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
// callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

/*var buf = new Buffer.alloc(1024); //创建一个 缓存的地方  大小为1kb

console.log("准备打开已存在的文件！");
//fd  通过fs.open() 方法返回的文件描述  文件的标识符
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件：");

    console.log("截取10字节内的文件内容，超出部分将被去除。");
    // 截取文件
    fs.ftruncate(fd, 10, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("文件截取成功。");
        console.log("读取相同的文件");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if (err) {
                console.log(err);
            }
            console.log(bytes + "  字节被读取");

            // 仅输出读取的字节
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString()); //字节转换为String
            }
            //异步关闭文件  保证安全
            fs.close(fd, function(err) {
                if (err) {
                    console.log(err);
                }
                console.log("文件关闭成功");
            });
        });

    });
});*/

/** 删除 文件**/

// console.log("准备删除文件！");
// fs.unlink('input.txt', function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件删除成功！");
// });


/** 创建目录 **/
console.log("创建目录 /操作文件/");
//可以添加 recursive: true 参数，不管创建的目录是否存在 都会创建成功：
fs.mkdir("./操作文件/", { recursive: true }, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});
/** 目录读取 **/
console.log("查看 /操作文件 目录");
fs.readdir("/操作文件/", function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});

// 执行前创建一个空的 /tmp/test 目录
console.log("准备删除目录 /操作文件");
fs.rmdir("./操作文件", function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log("删除成功");
        console.log("读取 /tmp 目录");
        fs.readdir("./操作文件/", function(err, files) {
            if (err) {
                return console.error('读取失败', err);
            }
            console.log("查看 /操作文件 目录");
            files.forEach(function(file) {
                console.log(file);
            });
        });
    }
});