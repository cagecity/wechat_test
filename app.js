App({
    newMatrix(len) {
        function shuffleArray(arr) {
            var i = arr.length, t, j;
            while (i) {
                j = Math.floor(Math.random() * i--);
                t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
            return arr;
        }
        function newGrid(i) {
            var grid = {"number":(i+1), "taped":false};
            return grid;
        }
        var arr = [];
        arr = Array.from({ length: len }, (v, i) => newGrid(i));
        arr = shuffleArray(arr);
        return arr;
    }
})