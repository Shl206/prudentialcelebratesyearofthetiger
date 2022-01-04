Tiger.win1 = function (win1) {

};
Tiger.win1.prototype = {
    create: function () {
        this.win1Bg = this.add.tileSprite(0, 0, 740, 1136, 'win1Bg');
        //var win1Bg = this.add.tileSprite(0, 0, 740, 1136, 'win1Bg');
        this.RedBook2 = this.add.sprite(25, 150, 'RedBook2');
        this.add.button(50, 1000, 'continue.btn', this.startGame, this);
        this.add.button(400, 1000, 'End', this.startGame, this);
        this.TigernFish = this.add.sprite(260, 550, 'TigernFish');
        this.Logo = this.add.sprite(560, 0, 'Logo');
    }
};