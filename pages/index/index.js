Page({
  data:{
    buttons: Array.from({length:25},(item, index) => index+1),
    taped : ""
  },
  matrixTap:function(event) {
    this.setData({
      taped : "buttonTaped"
    })
    console.log(event.currentTarget)
  }
})