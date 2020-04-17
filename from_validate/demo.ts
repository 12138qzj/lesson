
interface MembersEntity{
    Avatar:number;
    Id: string;
    Name: string;
    Phone: string;
    Home: string;
}
const Datas: MembersEntity[] = [{
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
}]

const form = document.querySelector('form')

const tbody = document.querySelector('.col-md-8 table tbody');
console.log(tbody);

function addData() {
    tbody.innerHTML='';
    Datas.map((data) => {
        tbody.innerHTML += `
        <tr>
            <td>${data.Avatar}</td>
            <td>${data.Id}</td>
            <td><img src="${data.Name}"></td>
            <td>${data.Phone}</td><td>${data.Home}</td>
        </tr>
        `
    })
}
addData();

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(form.Avatar.value)
    var str1 = {
        "Avatar": form.Avatar.value.trim(),
        "Id": form.Id.value,
        "Name": form.Name.value,
        "Phone": form.Phone.value,
        "Home": form.Home.value
    };
    Datas.push(str1)
    addData();

})

// const file=document.querySelector('.col-md-4 .form-group #file');
// console.log("fiel",file)
// file.addEventListener("change",event=>{
//     this.files
//     const files=event.target;
//     console.log(file.name);
// })