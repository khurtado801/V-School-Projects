function boxCount(boxNumb) {
    var boxCount = 0
    for (var i = 0; i < boxNumb.length; i++) {
        if (boxNumb[i].checked)
            boxCount++;
        console.log('boxNumb')
    }
    alert("You checked " + boxCount + " box(es)");
}