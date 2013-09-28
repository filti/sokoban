tm.define("game.TitleScene", {
  superClass : "tm.app.TitleScene",
 
  init : function() {
    this.superInit({
      title :  "Sokoban : Click Here!",
      width :  game.SCREEN_WIDTH,
      height : game.SCREEN_HEIGHT
    });
    
    // ���(�V�[���̕`��ӏ�)���^�b�`�������̓���
    this.addEventListener("pointingend", function(e) {
      
      // �V�[���̑J��
      var nextStage = game.NextStageScene();
      e.app.replaceScene(nextStage);
    });
  },
});