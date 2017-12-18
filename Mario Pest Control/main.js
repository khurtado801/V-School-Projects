    var bobombPrice = 7;
    var cheepCheepPrice = 11;
    var goombaPrice = 5;
    var bobombTotal = document.getElementById('bobombTotal');
    var cheepTotal = document.getElementById('cheepTotal');
    var goombaTotal = document.getElementById('goombaTotal');

    var mult = function(price, quantity) {
        return price * quantity;
    }

    var totalSum = function() {
        var goombaInput = document.getElementById('goombaInput').value;
        var bobombInput = document.getElementById('bobombInput').value;
        var cheepInput = document.getElementById('cheepInput').value;
        return mult(goombaPrice, goombaInput) + mult(bobombPrice, bobombInput) + mult(cheepCheepPrice, cheepInput);
    }

    var total = function() {
        var subtotal = document.getElementById('subtotal');
        subtotal.innerHTML = " " + totalSum();
    }

    var output = function(inputType, price, totalType) {
        inputType = +inputType;
        totalType.innerHTML = inputType * price;
    }

    window.oninput = function() {
        // Inputs Type
        var goombaInput = document.getElementById('goombaInput').value;
        var bobombInput = document.getElementById('bobombInput').value;
        var cheepInput = document.getElementById('cheepInput').value;
        if (goombaInput !== '') {
            output(goombaInput, goombaPrice, goombaTotal);
        } else {
            goombaTotal.innerHTML = '';
        }
        if (bobombInput !== '') {
            output(bobombInput, bobombPrice, bobombTotal);
        } else {
            bobombTotal.innerHTML = '';
        }
        if (cheepInput !== '') {
            output(cheepInput, cheepCheepPrice, cheepTotal);
        } else {
            cheepTotal.innerHTML = '';
        }

        total();
    }