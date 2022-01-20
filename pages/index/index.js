const app = getApp();
Page({
  data: {
    matrix: app.newMatrix(25),
    curNumber: 0,
    startTime: Date.now(),
    timePassed: "0秒",
    win: false
  },
  gridTap: function (e) {
    var m2 = this.data.matrix;
    var tapId = e.target.id;
    if (m2[tapId].number - this.data.curNumber == 1) {
      m2[tapId].taped = true;
      this.setData(
        {
          matrix: m2,
        }
      )
      this.data.curNumber++;
      if (this.data.curNumber == m2.length) {
        this.setData(
          {
            matrix: m2,
            win: true,
            timePassed: ((Date.now() - this.data.startTime)/1000).toFixed(1) + " 秒"
          }
        )
      }
    }
  },
  newRound: function() {
    this.setData({
      matrix: app.newMatrix(25),
      curNumber: 0,
      startTime: Date.now(),
      timePassed: "0 秒",
      win: false
    })
  }
})