// khai bao doi tuong 
// const user = {
// key:value
// }

const user = {
userName: "Nguyễn Văn A",
age: 25,
isMarried: true,
email: "nva@gmail.com",
};

// 2. Thao tác đọc
// 2.1 Truy cập thông qua ký tự "."
console.table("userName: ", user.userName);
console.table("age: ", user.age);
console.table("email: ", user.email);
console.table("address: ", user.address); // undefined

// 2.2. Truy cập thông qua ["key"]
console.table("userName: ", user["userName"]);

// 2.3. Thao tác đọc tất cả thông tin trong 1 đổi tượng
for (const key in user) 
// console.log("key: ", key);
console.table("key - Value: ", key, user[key]);

// 2.4. Lấy ra danh sách các keys của đối tượng (trả về 1 mảng các key)
console.table("Danh sach key: ", Object.keys(user));
console.table("Danh sach value: ", Object.values(user));
console.table( "Danh sach key + value: ", Object.entries(user) );

console.table("user trước khi thêm: ", user);

// 3. Thêm key: value vào đối tượng
user.dateOfBirth = "20/11/1995";
console.table("user sau khi thêm: ", user);

// 4. Cập nhật đối tượng
user.userName = "Lê Van B";
console.table("user sau khi cập nhật: ", user);

// 5. Xóa key trong đối tượng: Dùng khi xóa trường không cần thiết trước khi gửi dữ liệu từ form, ...
delete user.isMarried;

console.table("user sau khi xoa key: ", user);
  
