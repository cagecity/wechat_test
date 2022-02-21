const app = getApp();
Page({
  data: {
    matrix: app.newMatrix(25),
    matrixDataTop: [],
    matrixDataBottom: [],
    curNumberTop: 0,
    curNumberBottom: 0,
    startTime: Date.now(),
    finish: false,
    winner: '',
    timeUsed: '',
    starTop: 0,
    starBottom: 0
  },
  
  onLoad: function () {
    var mTop= JSON.parse(JSON.stringify(this.data.matrix));
    var mBottom = JSON.parse(JSON.stringify(this.data.matrix));
     this.setData(
      {
        matrixDataTop: mTop,
        matrixDataBottom: mBottom,
        starTop: app.globalData.starCountTop,
        starBottom: app.globalData.starCountBottom
      }
    )

  },

  showWinner: function (winnerSide) {
    var timePassed =  ((Date.now() - this.data.startTime) / 1000).toFixed(2);
    var starName = "starCount" + winnerSide;
    app.globalData.[starName] += 1;
    this.setData(
      {
        finish: true,
        winner: winnerSide,
        timeUsed: timePassed,
        starTop: app.globalData.starCountTop,
        starBottom: app.globalData.starCountBottom
      }
    )
  },

  gridTap: function (e) {
    var tapMatrix = e.target.id.split("-");
    var matrixSide = tapMatrix[0];
    var matrixName = "matrixData" + matrixSide;
    var curNumberName = "curNumber" + matrixSide;
    var gridId = tapMatrix[1];

    var m = this.data[matrixName];

    if (m[gridId].number - this.data[curNumberName] == 1) {
      m[gridId].taped = true;
      this.setData(
        {
          [matrixName] : m
        }
      )

      this.data[curNumberName]++;
      if (this.data[curNumberName] == this.data.matrixDataTop.length) {
        this.showWinner(matrixSide);
     }
    }
  },
  countdown: function(e) {
    wx.navigateTo({
      url: 'countdown'
    })
  }
})