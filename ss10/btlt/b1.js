let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" }
];

let running = true;

function showSquad() {
  console.log("=> DANH SÁCH ĐỘI BÓNG:");

  squad.forEach(function(player) {
    console.log(
      "Mã " + player.id + " - " +
      player.name + " (" + player.position + "): " +
      player.goals + " bàn"
    );
  });
}

function addPlayer() {
  let name = prompt("Nhập tên cầu thủ:");
  let goals = Number(prompt("Nhập số bàn thắng:"));
  let position = prompt("Nhập vị trí (FW/MF/DF/GK):");

  let newId = squad.length > 0 ? squad[squad.length - 1].id + 1 : 1;

  let newPlayer = {
    id: newId,
    name: name,
    goals: goals,
    position: position
  };

  squad.push(newPlayer);

  console.log("=> Đã thêm cầu thủ thành công!");
}

function findPlayerById() {
  let id = Number(prompt("Nhập ID cầu thủ cần tìm:"));

  let found = squad.find(function(player) {
    return player.id === id;
  });

  if (found) {
    console.log("=> TÌM THẤY:");
    console.log(found);
  } else {
    console.log("=> Không tìm thấy cầu thủ.");
  }
}

function updateGoals() {
  let id = Number(prompt("Nhập ID cầu thủ vừa ghi bàn:"));

  let found = squad.find(function(player) {
    return player.id === id;
  });

  if (found) {
    found.goals += 1;
    console.log(
      "=> Đã cập nhật: " +
      found.name +
      " hiện có " +
      found.goals +
      " bàn thắng."
    );
  } else {
    console.log("=> Không tìm thấy cầu thủ.");
  }
}

function deletePlayer() {
  let id = Number(prompt("Nhập ID cầu thủ cần xóa:"));

  let index = squad.findIndex(function(player) {
    return player.id === id;
  });

  if (index !== -1) {
    let removed = squad.splice(index, 1);
    console.log("=> Đã chuyển nhượng cầu thủ: " + removed[0].name);
  } else {
    console.log("=> Không tìm thấy cầu thủ.");
  }
}

while (running) {
  let choice = prompt(`
=== FOOTBALL MANAGER PRO ===

1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ
0. Thoát

Nhập lựa chọn của bạn:
`);

  switch (choice) {
    case "1":
      showSquad();
      break;
    case "2":
      addPlayer();
      break;
    case "3":
      findPlayerById();
      break;
    case "4":
      updateGoals();
      break;
    case "5":
      deletePlayer();
      break;
    case "0":
      running = false;
      console.log("=> Thoát chương trình. Hẹn gặp lại!");
      break;
    default:
      console.log("=> Lựa chọn không hợp lệ.");
  }
}