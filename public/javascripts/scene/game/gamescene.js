var game = game || {};

tm.define("game.GameScene", {
  superClass: "tm.app.Scene",
  
  GAME_WIDTH : 9 * 64,
  GAME_HEIGHT : 7 * 64,
  backGnd : null,
  player : null,
  matrix : null,
  box : null,
  clear : false,
  startDate : null,

  init: function(stageData) {
    // 親の初期化
    this.superInit();
    
    this.matrix = game.Matrix(game.MATRIX_X, game.MATRIX_Y, 0, 0);

    this.backGnd = game.BackGround(this, stageData[0].background.data);
    this.backGnd.addBg(this);
    
    var boxArray = [];
    var boxCod = stageData[0].box.coordinate;
    
    for (var i = 0; i < boxCod.length; i++) {
      boxArray.push(game.Box(this, boxCod[i].row, boxCod[i].col));
    }
    
    this.box = boxArray;
    for (var i = 0; i < this.box.length; i++) {
      this.box[i].addBox(this);
    }
    
    var playerCod = stageData[0].player.coordinate;
    this.player = game.Player(this, playerCod.row, playerCod.col);
    
    this.player.addPlayer(this);
    this.startDate = new Date();
        
  },

  updateAll: function(key) {
    
    var wkClear = true;
    
    if (this.clear) {
      return;
    }
    
    if (this.player !== null) {
      this.player.update(key);
    }
    
    for (var i = 0; i < this.box.length; i++) {
      if (this.box[i] !== null) {
        this.box[i].update();
        if (!this.box[i].checkPoint) {
          wkClear = false;
        }
      }
    }
    
    if (wkClear) {
      this.clear = wkClear;
      var diff = ((new Date()).getTime() - this.startDate.getTime()) / 1000;
      var hour = Math.floor(diff / 360);
      var min = Math.floor(Math.floor(diff % 360) / 60);
      var sec = Math.floor(diff % 60);
      //window.alert("ステージクリア～～～:" + hour + "時間" + min + "分" + sec + "秒");

      game.scoreArray.push(diff);

      game.mainCanvas.currentScene.update = null;
      var nextStage = game.NextStageScene();
      game.gameApp.replaceScene(nextStage);
    }
  },
  
  getBox : function(x, y) {
  
    for (var i = 0; i < this.box.length; i++) {
      if (this.box[i] !== null
       && this.box[i].currentX === x
       && this.box[i].currentY === y) {
        
        return this.box[i];
      }
    }
    
    return null;
  }
  
});