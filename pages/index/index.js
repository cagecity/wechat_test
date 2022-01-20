Page({
  data:{
    buttons: Array.from({length:25},(v, i) => i+1),
    taped : ""
  },
  matrixTap:function(event) {
    this.setData({
      taped : "buttonTaped"
    })
    console.log({length:5})
  }
})