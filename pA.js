let input = document.getElementById("form");
let submit = document.getElementById("submit");
let table = document.getElementById("myTable");

submit.addEventListener("click", function moneyConverter (e){

    e.preventDefault();
    table.innerHTML = "";
    let amount = input.value;
    let arr = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    for(let i = 0; i < arr.length; i++){
        let count = Math.floor(amount/arr[i]);
        if(count > 0){
            let n = document.createElement("tr");
            n.innerHTML = `<td>${"₦" + arr[i] + "  x  " + count}</td><td>${ "₦" + arr[i]*count}</td>`;
            table.append(n);
            amount%=arr[i];
        }
    }
    var td = document.getElementsByTagName('td');
    for(var i = 0; i < td.length; i++){
        td[i].style.backgroundColor = '#A9cce3';
    }
});
