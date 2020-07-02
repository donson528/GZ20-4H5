var stageScene = document.querySelector(".stage");
var gameScene = stageScene.querySelector(".game");
var startButton = stageScene.querySelector(".start button");
var restartButton = gameScene.querySelector(".restart");

// 初始化游戏场景背景定位
var gameScenePosY = 0;
// 初始化游戏暂停状态
var gamePausedState = false;
var gameDeathState = false;
// 保存定时器返回的id
var gameFrameId;

// 更新动画帧的方法
function updataFrame() {
  // 动画帧 返回定时器id
  return setInterval(function () {
    // 更新背景
    gameScene.style.backgroundPositionY = ++gameScenePosY + "px";

    // 每一帧检测死亡状态
    if (gameDeathState) {
      // 如果死亡 暂停游戏
      gamePause();
      // 显示死亡视图
      stageScene.classList.add("death");
    }
  }, 50);
}

// 点击开始游戏
startButton.onclick = function () {
  // 切换场景
  stageScene.classList.add("play");

  // 游戏开始
  gameFrameId = updataFrame();
};

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
