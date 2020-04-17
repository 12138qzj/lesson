var Datas = [{
    Avatar: 123,
    Id: '张三',
    Name: 'https://profile.csdnimg.cn/3/2/9/3_panlingfan',
    Phone: '12345',
    Home: '南昌'
}, {
    Avatar: 1233,
    Id: '张三3',
    Name: 'https://profile.csdnimg.cn/3/2/9/3_panlingfan',
    Phone: '123453',
    Home: '萍乡'
}];
var form = document.querySelector('form');
var tbody = document.querySelector('.col-md-8 table tbody');
console.log(tbody);

function addData() {
    tbody.innerHTML = '';
    Datas.map(function(data) {
        tbody.innerHTML += "\n        <tr>\n            <td>" + data.Avatar + "</td>\n            <td>" + data.Id + "</td>\n            <td><img src=\"" + data.Name + "\"></td>\n            <td>" + data.Phone + "</td><td>" + data.Home + "</td>\n        </tr>\n        ";
    });
}
addData();
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(form.Avatar.value);
    var str1 = {
        "Avatar": form.Avatar.value.trim(),
        "Id": form.Id.value,
        "Name": form.Name.value,
        "Phone": form.Phone.value,
        "Home": form.Home.value
    };
    Datas.push(str1);
    addData();
});
var file = document.querySelector('.col-md-4 .form-group #file');
console.log("fiel", file);
file.addEventListener("change", function(event) {
    var file = event.target.file.files[0];
    console.log(file.Name);
});