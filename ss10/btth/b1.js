function showPlayerInfo(player) {

    let name = player.name;
    let position = player.position;
    let age = player.age;

    let goals = player["goals"];
    let assists = player["assists"];

    let total = goals + assists;

    console.log("Tên: " + name);
    console.log("Vị trí: " + position);
    console.log("Tuổi: " + age);
    console.log("Bàn thắng mùa này: " + goals);
    console.log("Kiến tạo mùa này: " + assists);
    console.log("Tổng đóng góp: " + total);
}