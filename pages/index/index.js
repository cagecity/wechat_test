const app = getApp();
Page({
  data: {
    matrix: app.newMatrix(25),
    matrix1: [],
    matrix2: [],
    curNumber1: 0,
    curNumber2: 0,
    startTime: Date.now(),
    timePassed1: "0秒",
    timePassed2: "0秒",
    win1: false,
    win2: false
  },
  onLoad: function () {
    var m1Str = JSON.stringify(this.data.matrix);
    var m1 = JSON.parse(m1Str);
    var m2Str = JSON.stringify(this.data.matrix);
    var m2 = JSON.parse(m2Str);
     this.setData(
      {
        matrix1: m1,
        matrix2: m2
      }
    )

  },
  gridTap: function (e) {
    var tapMatrix = e.target.id.split("-");
    var matrixId = tapMatrix[0];
    var matrixName = "matrix" + matrixId;
    var curNumberName = "curNumber" + matrixId;
    var winName = "win" + matrixId;
    var timePassedName = "timePassed" + matrixId;
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
      if (this.data[curNumberName] == this.data.matrix1.length) {
        this.setData(
          {
            [matrixName] : m,
            [winName]: true,
            [timePassedName]: ((Date.now() - this.data.startTime) / 1000).toFixed(1) + " 秒"
          }
        )
      }
    }
  },
  newRound: function () {
    this.setData({
      matrix: app.newMatrix(25),
      curNumber: 0,
      startTime: Date.now(),
      timePassed: "0 秒",
      win: false
    })
  }
})