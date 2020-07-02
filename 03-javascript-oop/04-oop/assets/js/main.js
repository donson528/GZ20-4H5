var stageScene = document.querySelector(".stage");
var gameScene = stageScene.querySelector(".game");
var startButton = stageScene.querySelector(".start button");
var restartButton = gameScene.querySelector(".restart");

var ourPlane = {
  node: gameScene.querySelector(".our-plane"),
  x: 360 / 2,
  y: 640 - 80 / 2 - 20,
  bullets: [],
  // 保存所有子弹
};

// 初始化游戏场景背景定位
var gameScenePosY = 0;
// 初始化游戏暂停状态
var gamePausedState = false;
var gameDeathState = false;
// 保存定时器返回的id
var gameFrameId;
var gameFrames = 0;

// 更新动画帧的方法
function updataFrame() {
  // 动画帧 返回定时器id
  return setInterval(function () {
    // 更新帧数
    gameFrames++;

    // 更新背景
    gameScene.style.backgroundPositionY = ++gameScenePosY + "px";

    // 每一帧检测死亡状态
    if (gameDeathState) {
      // 如果死亡 暂停游戏
      gamePause();
      // 显示死亡视图
      stageScene.classList.add("death");
    }

    // 每隔多少帧 就创建子弹
    if (gameFrames % 30 === 0) {
      // new Bullet().create();
      var newBullet = new Bullet();
      newBullet.create();
      ourPlane.bullets.push(newBullet);
    }

    // 每帧都移动【所有】子弹 ourPlane.bullets所有子弹
    ourPlane.bullets.forEach(function (bullet, index, bullets) {
      // 实例对象的方法
      bullet.move();
      // 顺便判断是否超出画布
      if (bullet.y < 0) {
        // 超出画布  1 删除节点 2 从数组里面删除
        gameScene.removeChild(bullet.node);
        bullets.splice(index, 1);
      }
    });
  }, 50);
}

// 点击开始游戏
startButton.onclick = function () {
  // 切换场景
  stageScene.classList.add("play");

  // 游戏开始
  gameFrameId = updataFrame();
};

gameFrameId = updataFrame();

// 游戏播放
function gamePlay() {
  // 切换游戏暂停状态 视图更新
  stageScene.classList.remove("paused");
  // 更改游戏状态
  gamePausedState = false;
  // 开始游戏 创建定时器
  gameFrameId = updataFrame();
}

// 游戏暂停
function gamePause() {
  stageScene.classList.add("paused");
  gamePausedState = true;
  // 清除定时器
  clearInterval(gameFrameId);
}

// 游戏场景绑定点击 切换暂停游戏
gameScene.onclick = function () {
  // 判断游戏暂停状态
  if (gamePausedState) {
    gamePlay();
  } else {
    gamePause();
  }
};

// 重新开始 重新加载页面 刷新
restartButton.onclick = function () {
  // 刷新页面
  window.location.reload();
};

//  6.4
// 更改我放飞机节点对象视图 位置  理解
ourPlane.updataOurPlanePos = function () {
  this.node.style.left = this.x - 33 + "px";
  this.node.style.top = this.y - 40 + "px";
};
ourPlane.updataOurPlanePos();

// 触屏拖动 我放飞机跟随移动 放大镜mask
gameScene.ontouchmove = function (event) {
  // console.log(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  // var x = event.changedTouches[0].clientX;
  // var y = event.changedTouches[0].clientY;

  // 更改我方飞机对象 坐标点信息
  ourPlane.x = event.changedTouches[0].clientX;
  ourPlane.y = event.changedTouches[0].clientY;
  // 更改我放飞机节点对象视图 位置
  ourPlane.updataOurPlanePos();
};
// 兼容PC 没有触摸 只有鼠标移动
gameScene.onmousemove = function (event) {
  // console.log(event.clientX - stageScene.offsetLeft);

  // 更改我方飞机对象 坐标点信息
  ourPlane.x = event.clientX - stageScene.offsetLeft;
  ourPlane.y = event.clientY - stageScene.offsetTop;
  // 更改我放飞机节点对象视图 位置
  ourPlane.updataOurPlanePos();
};

// 创建我放飞机子弹
// function createBullet() {
//   var node = document.createElement("img");
//   node.src = "./assets/images/our-bullet.png";
//   node.style.left = ourPlane.x - 6 / 2 + "px";
//   node.style.top = ourPlane.y - 14 / 2 + "px";
//   gameScene.appendChild(node);
// }

// 需要用到对象 每个子弹都是一个对象 这个对象里面保存了这个子弹的 节点对象 位置信息
function Bullet() {
  // 子弹位置就是 当前飞机所处位置
  this.x = ourPlane.x;
  this.y = ourPlane.y;
}
// 创建子弹方法
Bullet.prototype.create = function () {
  // this.x = ourPlane.x
  // this.y = ourPlane.y
  this.node = document.createElement("img");
  this.node.src = "./assets/images/our-bullet.png";
  this.node.style.left = ourPlane.x - 6 / 2 + "px";
  this.node.style.top = ourPlane.y - 14 / 2 + "px";

  gameScene.appendChild(this.node);
};

// 移动子弹的方法
Bullet.prototype.move = function () {
  this.y -= 3;
  this.node.style.top = this.y - 14 / 2 + "px";
};

// var b1 = new Bullet();
// b1.create();
